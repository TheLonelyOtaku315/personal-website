import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Inject,
  NgZone,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ThemeService, type ThemeMode } from '@services/theme.service';
import { openCvDialog } from '../cv-dialog/cv-dialog.component';

// Width (px) below which the links collapse into the menu button
const MOBILE_BREAKPOINT = 760;

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [CommonModule, TranslateModule, MatDialogModule],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css',
})
export class NavigationBarComponent implements AfterViewInit, OnDestroy {
  readonly links = [
    { id: 'about_me', label: 'NAV.ABOUT' },
    { id: 'project', label: 'NAV.PROJECTS' },
    { id: 'contact', label: 'NAV.CONTACT' },
  ];

  currentSection = 'welcome';
  currentThemeMode: ThemeMode = 'auto';
  isMobileMenuOpen = false;
  isScrolled = false;

  currentLanguage = 'EN';
  availableLanguages = ['EN', 'FR'];
  languageNames: { [key: string]: string } = {
    EN: 'English',
    FR: 'Français',
  };

  @ViewChild('progress') progressRef?: ElementRef<HTMLElement>;

  private readonly sections = ['welcome', 'about_me', 'project', 'contact'];
  private scrollListener?: () => void;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private themeService: ThemeService,
    private translate: TranslateService,
    private zone: NgZone,
    private dialog: MatDialog,
  ) {
    this.themeService.currentThemeMode$.subscribe((mode) => {
      this.currentThemeMode = mode;
    });

    this.currentLanguage = (this.translate.currentLang || 'en').toUpperCase();
    this.translate.onLangChange.subscribe((event) => {
      this.currentLanguage = event.lang.toUpperCase();
    });
  }

  ngAfterViewInit(): void {
    if (typeof window === 'undefined') return;

    // Scroll events fire constantly; only re-enter Angular when the
    // header state actually changes.
    this.zone.runOutsideAngular(() => {
      this.scrollListener = () => {
        this.updateProgress();
        const scrolled = window.scrollY > 4;
        const section = this.findActiveSection();
        if (scrolled !== this.isScrolled || section !== this.currentSection) {
          this.zone.run(() => {
            this.isScrolled = scrolled;
            this.currentSection = section;
          });
        }
      };
      window.addEventListener('scroll', this.scrollListener, { passive: true });
    });
    setTimeout(() => this.scrollListener?.(), 0);
  }

  ngOnDestroy(): void {
    if (typeof window !== 'undefined' && this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  // Thin bar under the header showing how far down the page you are
  private updateProgress(): void {
    const bar = this.progressRef?.nativeElement;
    if (!bar) return;
    const max =
      this.document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? Math.min(1, window.scrollY / max) : 0;
    bar.style.transform = `scaleX(${ratio})`;
  }

  private findActiveSection(): string {
    // The section whose top has passed a line a third of the way down
    const line = window.innerHeight / 3;
    let active = this.sections[0];
    for (const id of this.sections) {
      const el = this.document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= line) active = id;
    }
    // At the very bottom the last section may be too short to reach the line
    const atBottom =
      window.innerHeight + window.scrollY >=
      this.document.documentElement.scrollHeight - 2;
    return atBottom ? this.sections[this.sections.length - 1] : active;
  }

  scrollToSection(sectionId: string, event?: Event): void {
    event?.preventDefault();
    this.isMobileMenuOpen = false;
    if (typeof window === 'undefined') return;

    const section = this.document.getElementById(sectionId);
    if (!section) return;

    const reduceMotion = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    // Sections carry scroll-margin-top, so the sticky header doesn't cover them
    section.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
    this.currentSection = sectionId;
  }

  toggleLanguage(lang: string) {
    this.translate.use(lang.toLowerCase());
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('selectedLanguage', lang.toLowerCase());
    }
    this.currentLanguage = lang;
  }

  setTheme(mode: ThemeMode, event?: MouseEvent) {
    const apply = () => this.themeService.setThemeMode(mode);
    const doc = this.document as Document & {
      startViewTransition?: (cb: () => void) => { ready: Promise<void> };
    };
    const reduceMotion = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (!doc.startViewTransition || reduceMotion || !event) {
      apply();
      return;
    }

    // Grow the new theme out of the clicked button as a circle
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );
    const transition = doc.startViewTransition(apply);
    transition.ready
      .then(() => {
        this.document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${radius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 550,
            easing: 'cubic-bezier(0.2, 0.75, 0.15, 1)',
            pseudoElement: '::view-transition-new(root)',
          },
        );
      })
      .catch(() => {});
  }

  openCv() {
    this.isMobileMenuOpen = false;
    openCvDialog(this.dialog, this.translate.currentLang || 'en');
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    this.isMobileMenuOpen = false;
  }

  @HostListener('window:resize')
  onResize() {
    if (this.isMobileMenuOpen && window.innerWidth > MOBILE_BREAKPOINT) {
      this.isMobileMenuOpen = false;
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.isMobileMenuOpen) return;
    const target = event.target as HTMLElement;
    if (!target.closest('app-navigation-bar')) {
      this.isMobileMenuOpen = false;
    }
  }
}
