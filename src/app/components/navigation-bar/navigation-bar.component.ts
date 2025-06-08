import { Component, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { UserServiceService } from '../../../service/user.service.service';

@Component({
  selector: 'app-navigation-bar',
  imports: [],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css',
})
export class NavigationBarComponent {
  isDarkMode = false;

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private userService: UserServiceService
  ) {
    this.userService.darkMode$.subscribe((isDark) => {
      this.isDarkMode = isDark;
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

  toggleTheme(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.setDarkMode(checked);
    this.userService.setDarkMode(checked);
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
}
