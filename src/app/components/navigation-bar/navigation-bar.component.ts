import { Component, Renderer2, Inject } from '@angular/core';
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
export class NavigationBarComponent implements AfterViewInit {
  isDarkMode = false;

  private sidebar: HTMLElement | null = null;
  private toggleButton: HTMLElement | null = null;

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
