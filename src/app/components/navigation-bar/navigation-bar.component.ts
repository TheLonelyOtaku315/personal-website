import {
  Component,
  Renderer2,
  Inject,
  OnDestroy,
  HostListener,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ThemeService, type ThemeMode } from '../../../service/theme.service';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AfterViewInit } from '@angular/core';

interface SidebarButton {
  id: string;
  clickHandler: string;
  cssClass: string;
  title?: string;
  icon: {
    viewBox: string;
    path: string;
    conditionalDisplay?: {
      condition: string;
      trueIcon?: { viewBox: string; path: string };
      falseIcon?: { viewBox: string; path: string };
      autoIcon?: { viewBox: string; path: string };
    };
  };
  content?: {
    type: 'text' | 'language-info';
    text?: string;
  };
}

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css',
})
export class NavigationBarComponent implements AfterViewInit, OnDestroy {
  isDarkMode = false;
  currentSection = 'welcome';
  currentThemeMode: ThemeMode = 'auto';
  isMobileMenuOpen = false;

  @ViewChild('sidebar', { static: false }) sidebarRef?: ElementRef<HTMLElement>;

  private sidebar: HTMLElement | null = null;
  private toggleButton: HTMLElement | null = null;
  private sections: string[] = ['welcome', 'about_me', 'project', 'contact'];
  private scrollContainer: HTMLElement | null = null;
  private scrollListener?: () => void;

  currentLanguage = 'EN';
  availableLanguages = ['EN', 'FR'];
  languageNames: { [key: string]: string } = {
    EN: 'English',
    FR: 'Français',
  };

constructor(
  private renderer: Renderer2,
  @Inject(DOCUMENT) private document: Document,
  private themeService: ThemeService,
  private translate: TranslateService
) {
  // Subscribe to theme changes
  this.themeService.isDarkMode$.subscribe((isDark) => {
    this.isDarkMode = isDark;
  });

  this.themeService.currentThemeMode$.subscribe((mode) => {
    this.currentThemeMode = mode;
  });

  // Get current language from TranslateService and convert to uppercase for display
  const currentLang = this.translate.currentLang || 'en';
  this.currentLanguage = currentLang.toUpperCase();

  // Subscribe to language changes
  this.translate.onLangChange.subscribe((event) => {
    this.currentLanguage = event.lang.toUpperCase();
  });

  // Initialize current values from service
  setTimeout(() => {
    this.currentThemeMode = this.themeService.getCurrentThemeMode();
    this.isDarkMode = this.themeService.getCurrentTheme() === 'dark';
  }, 0);
}

  ngAfterViewInit(): void {
    // Use setTimeout to ensure DOM is fully rendered
    setTimeout(() => {
      this.sidebar = this.document.getElementById('sidebar');
      this.toggleButton = this.document.getElementById('toggle-btn');
      this.scrollContainer = this.document.querySelector('.webpage');

      // Add scroll listener to the scrollable container
      if (this.scrollContainer) {
        this.scrollListener = () => this.checkActiveSection();
        this.scrollContainer.addEventListener('scroll', this.scrollListener);
      }

      // Initial check for active section
      this.checkActiveSection();
    }, 0);
  }

  ngOnDestroy(): void {
    // Remove scroll listener
    if (this.scrollContainer && this.scrollListener) {
      this.scrollContainer.removeEventListener('scroll', this.scrollListener);
    }
  }

  private checkActiveSection(): void {
    if (typeof window === 'undefined' || !this.scrollContainer) {
      return;
    }

    const scrollTop = this.scrollContainer.scrollTop;
    const offset = 100;

    for (let i = this.sections.length - 1; i >= 0; i--) {
      const section = this.document.getElementById(this.sections[i]);
      if (section) {
        const sectionTop = section.offsetTop - offset;
        if (scrollTop >= sectionTop) {
          this.setActiveSection(this.sections[i]);
          break;
        }
      }
    }
  }

  private setActiveSection(sectionId: string): void {
    if (this.currentSection === sectionId) return;

    this.currentSection = sectionId;

    const navItems = this.document.querySelectorAll(
      '#sidebar ul li[data-section]'
    );
    navItems.forEach((item) => {
      item.classList.remove('active');
    });

    const currentNavItem = this.document.querySelector(
      `#sidebar ul li[data-section="${sectionId}"]`
    );
    if (currentNavItem) {
      currentNavItem.classList.add('active');
    }
  }

  executeButtonAction(button: SidebarButton): void {
    switch (button.id) {
      case 'language-toggle':
        this.toggleLanguage();
        break;
      case 'theme-toggle':
        this.toggleTheme();
        break;
    }
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleSidebar() {
    if (!this.sidebar || !this.toggleButton) return;
    this.sidebar.classList.toggle('close');
    this.toggleButton.classList.toggle('rotate');
    this.closeAllSubMenus();
  }

  toggleSubMenu(event: Event) {
    if (!this.sidebar) return;
    const button = event.currentTarget as HTMLElement;
    if (!button) return;

    const submenu = button.nextElementSibling as HTMLElement;
    if (!submenu) return;

    if (!submenu.classList.contains('show')) {
      this.closeAllSubMenus();
    }
    submenu.classList.toggle('show');
    button.classList.toggle('rotate');
    if (this.sidebar.classList.contains('close')) {
      this.sidebar.classList.toggle('close');
      if (this.toggleButton) {
        this.toggleButton.classList.toggle('rotate');
      }
    }
  }

  closeAllSubMenus() {
    if (!this.sidebar) return;
    Array.from(this.sidebar.getElementsByClassName('show')).forEach((ul) => {
      ul.classList.remove('show');
      if (ul.previousElementSibling) {
        ul.previousElementSibling.classList.remove('rotate');
      }
    });
  }

  scrollToSection(sectionId: string, event?: Event): void {
    if (event) {
      event.preventDefault();
    }

    if (typeof window === 'undefined') return;

    const section = this.document.getElementById(sectionId);
    const container = this.document.querySelector('.webpage') as HTMLElement;

    if (section && container) {
      const targetPosition = section.offsetTop - 50;
      container.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });

      this.setActiveSection(sectionId);
    }

    if (typeof window !== 'undefined' && window.innerWidth <= 800) {
      this.isMobileMenuOpen = false;
    }
  }

  closeSidebar() {
    if (this.sidebar && this.sidebar.classList.contains('close')) return;
    if (this.sidebar) {
      this.sidebar.classList.add('close');
    }
    if (this.toggleButton) {
      this.toggleButton.classList.add('rotate');
    }
    this.closeAllSubMenus();
  }

toggleLanguage() {
  const currentIndex = this.availableLanguages.indexOf(this.currentLanguage);
  const nextIndex = (currentIndex + 1) % this.availableLanguages.length;
  const nextLanguage = this.availableLanguages[nextIndex];

  // Use TranslateService with lowercase language code
  this.translate.use(nextLanguage.toLowerCase());

  // Save uppercase version to localStorage for display
  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.setItem('selectedLanguage', nextLanguage);
  }

  // Update current language for display
  this.currentLanguage = nextLanguage;
}

  getThemeDisplayText(): string {
    switch (this.currentThemeMode) {
      case 'light':
        return 'Light';
      case 'dark':
        return 'Dark';
      default:
        return 'Browser';
    }
  }

  getNextLanguageName(): string {
    const currentIndex = this.availableLanguages.indexOf(this.currentLanguage);
    const nextIndex = (currentIndex + 1) % this.availableLanguages.length;
    const nextLanguageCode = this.availableLanguages[nextIndex];
    return this.languageNames[nextLanguageCode] || nextLanguageCode;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (typeof window === 'undefined' || window.innerWidth > 800) {
      return;
    }

    const target = event.target as HTMLElement;
    const sidebar = this.document.querySelector('.sidebar');
    const toggleButton = this.document.querySelector('.mobile-menu-toggle');

    if (
      this.isMobileMenuOpen &&
      sidebar &&
      toggleButton &&
      !sidebar.contains(target) &&
      !toggleButton.contains(target)
    ) {
      this.isMobileMenuOpen = false;
    }
  }
}
