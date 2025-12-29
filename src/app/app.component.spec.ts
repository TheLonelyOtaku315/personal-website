import { describe, it, expect, vi, beforeEach } from 'vitest';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { WelcomeSectionComponent } from './components/welcome-section/welcome-section.component';
import { AboutMeSectionComponent } from './components/about-me-section/about-me-section.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';

// Mocks for services and dependencies
const mockThemeService = {
  isDarkMode$: { subscribe: vi.fn() },
  setTheme: vi.fn(),
};
const mockMetaService = { init: vi.fn() };
const mockTranslate = {
  setDefaultLang: vi.fn(),
  getBrowserLang: vi.fn(() => 'en'),
  use: vi.fn(),
  onLangChange: { subscribe: vi.fn() },
  currentLang: 'en',
};
const mockHttp = { get: vi.fn(() => ({ subscribe: vi.fn() })) };

describe('AppComponent', () => {
  let component: AppComponent;

  beforeEach(() => {
    component = new AppComponent(
      mockThemeService as any,
      mockMetaService as any,
      mockTranslate as any,
      mockHttp as any
    );
  });

  it('should create the app', () => {
    expect(AppComponent).toBeDefined();
    expect(component).toBeInstanceOf(AppComponent);
  });

  it('should have child components defined', () => {
    expect(NavigationBarComponent).toBeDefined();
    expect(WelcomeSectionComponent).toBeDefined();
    expect(AboutMeSectionComponent).toBeDefined();
    expect(ProjectsSectionComponent).toBeDefined();
    expect(ContactSectionComponent).toBeDefined();
  });

  it('should initialize with default values', () => {
    expect(component.isDarkmode).toBe(false);
    expect(component.showContent).toBe(true);
    expect(Array.isArray(component.projects)).toBe(true);
    expect(Array.isArray(component.timeline)).toBe(true);
  });

  it('should call setTheme on toggleDarkMode', () => {
    component.toggleDarkMode(true);
    expect(mockThemeService.setTheme).toHaveBeenCalledWith(true);
  });

  it('should return current language', () => {
    mockTranslate.currentLang = 'fr';
    expect(component.getCurrentLanguage()).toBe('fr');
    mockTranslate.currentLang = '';
    expect(component.getCurrentLanguage()).toBe('en');
  });

  it('should call metaService.init on ngOnInit', () => {
    const spy = vi.spyOn(mockMetaService, 'init');
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  it('should call loadProjects and loadEvents on ngOnInit', () => {
    const loadProjectsSpy = vi.spyOn(component as any, 'loadProjects');
    const loadEventsSpy = vi.spyOn(component as any, 'loadEvents');
    component.ngOnInit();
    expect(loadProjectsSpy).toHaveBeenCalled();
    expect(loadEventsSpy).toHaveBeenCalled();
    loadProjectsSpy.mockRestore();
    loadEventsSpy.mockRestore();
  });
});
