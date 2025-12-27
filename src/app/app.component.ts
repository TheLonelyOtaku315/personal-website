import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

import { WelcomeSectionComponent } from './components/welcome-section/welcome-section.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { AboutMeSectionComponent } from './components/about-me-section/about-me-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';

import { ThemeService } from '@services/theme.service';
import { MetaService } from '@services/meta.service';
import { TimelineEvent, Project } from '@models/shared-interfaces';

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
  timeline: TimelineEvent[] = [];
  projects: Project[] = [];

  isDarkmode = false;
  showContent = true;

  constructor(
    private themeService: ThemeService,
    private metaService: MetaService,
    private translate: TranslateService,
    private http: HttpClient
  ) {
    this.themeService.isDarkMode$.subscribe((isDark) => {
      this.isDarkmode = isDark;
    });

    this.initializeTranslation();
  }

  private initializeTranslation() {
    this.translate.setDefaultLang('en');

    const savedLang = localStorage.getItem('selectedLanguage');
    const browserLang = this.translate.getBrowserLang();

    const savedLangLower = savedLang ? savedLang.toLowerCase() : null;

    const langToUse =
      savedLangLower ||
      (browserLang && ['en', 'fr'].includes(browserLang) ? browserLang : 'en');

    this.translate.use(langToUse);

    // Load projects for the selected language
    this.loadProjects(langToUse);

    // Subscribe to language changes to reload projects
    this.translate.onLangChange.subscribe((event) => {
      this.loadProjects(event.lang);
    });
  }

  private loadProjects(lang: string) {
    this.http.get<any[]>(`assets/i18n/projects.${lang}.json`).subscribe({
      next: (data) => {
        this.projects = data.map((p) => ({
          id: p.id,
          title: p.title,
          description: p.description,
          demoUrl: p.demoUrl || '',
          sourceUrl: p.sourceUrl || '',
          date: new Date(p.date),
          technologies: p.technologies || [],
          image: p.image || '',
        }));
      },
      error: (error) => {
        console.error(`Error loading projects for language ${lang}:`, error);
        // Fallback to English if the language file doesn't exist
        if (lang !== 'en') {
          this.loadProjects('en');
        }
      },
    });
  }
  private loadEvents(lang: string) {
    this.http.get<any[]>(`assets/i18n/events.${lang}.json`).subscribe({
      next: (data) => {
        this.timeline = data.map((e) => ({
          status: e.status || '',
          date: e.date,
          description: e.description,
        }));
      },
      error: (error) => {
        console.error(
          `Error loading timeline events for language ${lang}:`,
          error
        );
        // Fallback to English if the language file doesn't exist
        if (lang !== 'en') {
          this.loadEvents('en');
        }
      },
    });
  }

  toggleDarkMode(value: boolean) {
    this.themeService.setTheme(value);
  }

  switchLanguage(lang: string) {
    const langLower = lang.toLowerCase();
    this.translate.use(langLower);
    localStorage.setItem('selectedLanguage', lang.toUpperCase());
    // Projects will reload automatically via onLangChange subscription
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang || 'en';
  }

  ngOnInit() {
    this.loadProjects(this.getCurrentLanguage());
    this.loadEvents(this.getCurrentLanguage());
    console.log("projects:", this.projects);
    console.log("timeline:", this.timeline);
    this.metaService.init();
  }
}
