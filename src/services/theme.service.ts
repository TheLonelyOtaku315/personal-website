import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type ThemeMode = 'light' | 'dark' | 'auto';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDarkMode = new BehaviorSubject<boolean>(false);
  public isDarkMode$ = this.isDarkMode.asObservable();

  private currentThemeMode = new BehaviorSubject<ThemeMode>('auto');
  public currentThemeMode$ = this.currentThemeMode.asObservable();

  private mediaQueryListener?: (e: MediaQueryListEvent) => void;

  constructor() {
    // Use setTimeout to ensure we're in browser environment after Angular initialization
    if (typeof window !== 'undefined') {
      setTimeout(() => this.initializeTheme(), 0);
    }
  }

  private initializeTheme(): void {
    // Ensure we're in browser environment
    if (typeof window === 'undefined') {
      return;
    }

    // Check if user has a saved preference for theme mode
    const savedThemeMode = localStorage.getItem('themeMode') as ThemeMode;
    if (savedThemeMode && ['light', 'dark', 'auto'].includes(savedThemeMode)) {
      this.currentThemeMode.next(savedThemeMode);
    }

    // Apply the initial theme
    this.applyThemeMode();

    // Set up media query listener for auto mode
    this.setupMediaQueryListener();
  }

  private setupMediaQueryListener(): void {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    this.mediaQueryListener = (e: MediaQueryListEvent) => {
      if (this.currentThemeMode.value === 'auto') {
        this.applyThemeMode();
      }
    };

    mediaQuery.addEventListener('change', this.mediaQueryListener);
  }

  private applyThemeMode(): void {
    let shouldBeDark = false;

    switch (this.currentThemeMode.value) {
      case 'dark':
        shouldBeDark = true;
        break;
      case 'light':
        shouldBeDark = false;
        break;
      case 'auto':
        if (typeof window !== 'undefined' && window.matchMedia) {
          shouldBeDark = window.matchMedia(
            '(prefers-color-scheme: dark)'
          ).matches;
        }
        break;
    }

    this.setTheme(shouldBeDark);
  }

  public setTheme(isDark: boolean): void {
    this.isDarkMode.next(isDark);

    // Update DOM only in browser environment
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      if (isDark) {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
      } else {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
      }
    }
  }

  public setThemeMode(mode: ThemeMode): void {
    this.currentThemeMode.next(mode);

    // Save preference
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('themeMode', mode);
    }

    this.applyThemeMode();
  }

  public toggleTheme(): void {
    const themeOrder: ThemeMode[] = ['light', 'dark', 'auto'];
    const currentIndex = themeOrder.indexOf(this.currentThemeMode.value);
    const nextIndex = (currentIndex + 1) % themeOrder.length;
    this.setThemeMode(themeOrder[nextIndex]);
  }

  public getCurrentTheme(): string {
    return this.isDarkMode.value ? 'dark' : 'light';
  }

  public getCurrentThemeMode(): ThemeMode {
    return this.currentThemeMode.value;
  }

  public getThemeDisplayText(): string {
    switch (this.currentThemeMode.value) {
      case 'light':
        return 'Light Mode';
      case 'dark':
        return 'Dark Mode';
      case 'auto':
        return 'Follow Browser';
      default:
        return 'Theme';
    }
  }

  public getBrowserThemePreference(): boolean {
    if (typeof window === 'undefined' || !window.matchMedia) {
      return false;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  public destroy(): void {
    if (typeof window !== 'undefined' && this.mediaQueryListener) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.removeEventListener('change', this.mediaQueryListener);
    }
  }
}
