import { describe, it, expect } from 'vitest';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { WelcomeSectionComponent } from './components/welcome-section/welcome-section.component';
import { AboutMeSectionComponent } from './components/about-me-section/about-me-section.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';

describe('AppComponent', () => {
  it('should create the app', () => {
    expect(AppComponent).toBeDefined();
  });

  it('should have child components defined', () => {
    expect(NavigationBarComponent).toBeDefined();
    expect(WelcomeSectionComponent).toBeDefined();
    expect(AboutMeSectionComponent).toBeDefined();
    expect(ProjectsSectionComponent).toBeDefined();
    expect(ContactSectionComponent).toBeDefined();
  });
});
