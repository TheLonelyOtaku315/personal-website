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
  imports: [CommonModule],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css',
})
export class NavigationBarComponent implements AfterViewInit, OnDestroy {
  isDarkMode = false;
  currentSection = 'welcome';
  currentThemeMode: ThemeMode = 'auto';
  isMobileMenuOpen = false; // Add this property

  @ViewChild('sidebar', { static: false }) sidebarRef?: ElementRef<HTMLElement>;

  private sidebar: HTMLElement | null = null;
  private toggleButton: HTMLElement | null = null;
  private sections: string[] = ['welcome', 'about_me', 'project', 'contact'];
  private scrollContainer: HTMLElement | null = null;
  private scrollListener?: () => void;
  currentLanguage = 'EN';
  availableLanguages = ['EN', 'FR', 'ES', 'CN', 'JP'];
  languageNames: { [key: string]: string } = {
    EN: 'English',
    FR: 'Français',
    ES: 'Español',
    CN: '中文',
    JP: '日本語',
  };

  sidebarButtons: SidebarButton[] = [
    {
      id: 'language-toggle',
      clickHandler: 'toggleLanguage()',
      cssClass: 'language-toggle',
      title: 'Switch language',
      icon: {
        viewBox: '0 -960 960 960',
        path: 'M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-82v-78q-33 0-56.5-23.5T360-320v-40L168-552q-3 18-5.5 36t-2.5 36q0 121 79.5 212T440-162Zm276-102q20-22 36-47.5t26.5-53q10.5-27.5 16-56.5t5.5-59q0-98-54.5-179T600-776v16q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h240q17 0 28.5 11.5T600-440v120h40q26 0 47 15.5t29 40.5Z',
      },
      content: {
        type: 'language-info',
      },
    },
    {
      id: 'theme-toggle',
      clickHandler: 'toggleTheme()',
      cssClass: 'theme-toggle',
      icon: {
        viewBox: '0 -960 960 960',
        path: '',
        conditionalDisplay: {
          condition: 'themeMode',
          trueIcon: {
            viewBox: '0 -960 960 960',
            path: 'M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z',
          },
          falseIcon: {
            viewBox: '0 -960 960 960',
            path: 'M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z',
          },
          autoIcon: {
            viewBox: '0 -960 960 960',
            path: 'M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93v640Z',
          },
        },
      },
      content: {
        type: 'text',
        text: 'getThemeDisplayText()',
      },
    },
  ];

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private themeService: ThemeService
  ) {
    // Subscribe to theme changes
    this.themeService.isDarkMode$.subscribe((isDark) => {
      this.isDarkMode = isDark;
    });

    this.themeService.currentThemeMode$.subscribe((mode) => {
      this.currentThemeMode = mode;
    });

    if (typeof window !== 'undefined' && window.localStorage) {
      // Load saved language
      const savedLanguage = localStorage.getItem('language');
      if (savedLanguage && this.availableLanguages.includes(savedLanguage)) {
        this.currentLanguage = savedLanguage;
      }
    }

    // Initialize current values from service in case they're already set
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

  // Remove the window scroll listener since we're using the container scroll
  private checkActiveSection(): void {
    // Ensure we're in browser environment
    if (typeof window === 'undefined' || !this.scrollContainer) {
      return;
    }

    const scrollTop = this.scrollContainer.scrollTop;
    const offset = 100; // Offset to trigger section change

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

    // Remove active class from all nav items with data-section attribute
    const navItems = this.document.querySelectorAll(
      '#sidebar ul li[data-section]'
    );
    navItems.forEach((item) => {
      item.classList.remove('active');
    });

    // Add active class to current section's nav item using data attribute
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
    // Prevent default anchor behavior if event exists
    if (event) {
      event.preventDefault();
    }

    // Ensure we're in browser environment
    if (typeof window === 'undefined') return;

    const section = this.document.getElementById(sectionId);
    const container = this.document.querySelector('.webpage') as HTMLElement;

    if (section && container) {
      const targetPosition = section.offsetTop - 50;
      container.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });

      // Manually update active section after scroll
      this.setActiveSection(sectionId);
    }

    // Close mobile menu after navigation on mobile devices
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
    this.currentLanguage = this.availableLanguages[nextIndex];

    // Save to localStorage
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('language', this.currentLanguage);
    }

    // Update the tooltip for language toggle
    const languageButton = this.sidebarButtons.find(
      (btn) => btn.id === 'language-toggle'
    );
    if (languageButton) {
      languageButton.title =
        'Switch to next language (' + this.getNextLanguageName() + ')';
    }

    // You can add actual language switching logic here
    // this.userService.setLanguage(this.currentLanguage);
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

  // New method: Toggle mobile menu
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  // Optional: Close menu when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (typeof window === 'undefined' || window.innerWidth > 800) {
      return; // Only apply on mobile
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
