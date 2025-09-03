import {
  Component,
  Renderer2,
  Inject,
  OnDestroy,
  HostListener,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { UserServiceService } from '../../../service/user.service.service';
import { CommonModule } from '@angular/common';

import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css',
})
export class NavigationBarComponent implements AfterViewInit, OnDestroy {
  isDarkMode = false;
  currentSection = 'welcome'; // Track current active section

  private sidebar: HTMLElement | null = null;
  private toggleButton: HTMLElement | null = null;
  private sections: string[] = ['welcome', 'about_me', 'project', 'contact'];
  private scrollContainer: HTMLElement | null = null;

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private userService: UserServiceService
  ) {
    this.userService.darkMode$.subscribe((isDark) => {
      this.isDarkMode = isDark;
      this.setDarkMode(isDark);
    });
    if (typeof window !== 'undefined' && window.localStorage) {
      const theme = localStorage.getItem('theme');
      if (theme === 'dark') {
        this.setDarkMode(true);
      } else {
        this.setDarkMode(false);
      }
    } else {
      this.setDarkMode(false);
    }
  }

  ngAfterViewInit(): void {
    this.sidebar = this.document.getElementById('sidebar');
    this.toggleButton = this.document.getElementById('toggle-btn');
    this.scrollContainer = this.document.querySelector('.webpage');

    // Add scroll listener to the scrollable container
    if (this.scrollContainer) {
      this.scrollContainer.addEventListener('scroll', () => {
        this.checkActiveSection();
      });
    }

    // Initial check for active section
    setTimeout(() => {
      this.checkActiveSection();
    }, 100);
  }

  ngOnDestroy(): void {
    // Remove scroll listener
    if (this.scrollContainer) {
      this.scrollContainer.removeEventListener('scroll', () => {
        this.checkActiveSection();
      });
    }
  }

  // Remove the window scroll listener since we're using the container scroll
  private checkActiveSection(): void {
    if (!this.scrollContainer) {
      console.log('Scroll container not found');
      return;
    }

    const scrollTop = this.scrollContainer.scrollTop;
    const offset = 100; // Offset to trigger section change

    console.log('Scroll top:', scrollTop);

    for (let i = this.sections.length - 1; i >= 0; i--) {
      const section = this.document.getElementById(this.sections[i]);
      if (section) {
        const sectionTop = section.offsetTop - offset;
        console.log(`Section ${this.sections[i]} top:`, sectionTop);
        if (scrollTop >= sectionTop) {
          console.log('Setting active section:', this.sections[i]);
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

  toggleTheme() {
    this.userService.setDarkMode(!this.isDarkMode);
  }

  setDarkMode(isDark: boolean) {
    this.isDarkMode = isDark;
    if (isDark) {
      this.renderer.removeClass(this.document.body, 'light-theme');
      this.renderer.addClass(this.document.body, 'dark-theme');
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('theme', 'dark');
      }
    } else {
      this.renderer.removeClass(this.document.body, 'dark-theme');
      this.renderer.addClass(this.document.body, 'light-theme');
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('theme', 'light');
      }
    }
  }

  toggleSidebar() {
    if (!this.sidebar || !this.toggleButton) return;
    this.sidebar.classList.toggle('close');
    this.toggleButton.classList.toggle('rotate');
    this.closeAllSubMenus();
  }

  toggleSubMenu(button: HTMLElement) {
    if (!this.sidebar) return;
    const submenu = button.nextElementSibling as HTMLElement;
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

  scrollToSection(sectionId: string): void {
    const section = this.document.getElementById(sectionId);
    const container = this.document.querySelector('.webpage') as HTMLElement;

    if (section && container) {
      container.scrollTo({
        top: section.offsetTop - 50, // Small offset from top
        behavior: 'smooth',
      });
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
}
