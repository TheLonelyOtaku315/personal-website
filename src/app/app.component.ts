import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { WelcomeSectionComponent } from './components/welcome-section/welcome-section.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { AboutMeSectionComponent } from './components/about-me-section/about-me-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';

import { ThemeService } from '@services/theme.service';
import { MetaService } from '@services/meta.service';
import { TimelineEvent, Project } from '@models/shared-interfaces';

import eventsData from '@assets/JSON/event.json';
import projectsData from '@assets/JSON/projects.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    AboutMeSectionComponent,
    NavigationBarComponent,
    CommonModule,
    ContactSectionComponent,
    ProjectsSectionComponent,
    WelcomeSectionComponent,
    TranslateModule,
  ],
})
export class AppComponent implements OnInit {
  timeline: TimelineEvent[] = eventsData as TimelineEvent[];

  projects: Project[] = (projectsData as any[]).map((p) => ({
    title: p.title,
    description: p.description,
    demoUrl: p.demoUrl || '',
    sourceUrl: p.sourceUrl || '',
    date: new Date(p.date),
    technologies: p.technologies || [],
    image: p.image || '',
  }));

  isDarkmode = false;
  showContent = true;
  private squares: {
    element: HTMLElement;
    originalX: number;
    originalY: number;
    size: number;
  }[] = [];

  constructor(
    private themeService: ThemeService,
    private metaService: MetaService,
    private translate: TranslateService
  ) {
    this.themeService.isDarkMode$.subscribe((isDark) => {
      this.isDarkmode = isDark;
    });

    // Initialize translation
    this.initializeTranslation();
  }

  private initializeTranslation() {
    // Set default language
    this.translate.setDefaultLang('en'); // Changed from 'EN' to 'en'

    // Get saved language from localStorage or use browser language
    const savedLang = localStorage.getItem('selectedLanguage');
    const browserLang = this.translate.getBrowserLang();

    // Convert saved language to lowercase if it exists
    const savedLangLower = savedLang ? savedLang.toLowerCase() : null;

    // Use saved language, or browser language, or default to 'en'
    const langToUse =
      savedLangLower ||
      (browserLang && ['en', 'fr'].includes(browserLang) ? browserLang : 'en');

    this.translate.use(langToUse);
  }

  toggleDarkMode(value: boolean) {
    this.themeService.setTheme(value);
  }

  // Method to switch language (can be called from navigation or settings)
  // Button handler to toggle language between 'en' and 'fr'
  // Method to switch language (can be called from navigation or settings)
  switchLanguage(lang: string) {
    // Convert to lowercase before using
    const langLower = lang.toLowerCase();
    this.translate.use(langLower);
    // Save uppercase to localStorage for display purposes
    localStorage.setItem('selectedLanguage', lang.toUpperCase());
  }

  // Original method, renamed for internal use
  private switchLanguageByParam(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('selectedLanguage', lang);
    console.log(`Language switched to: ${lang}`);
  }

  // Get current language
  getCurrentLanguage(): string {
    return this.translate.currentLang || 'en';
  }

  ngOnInit() {
    this.metaService.init();
  }
}
