import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

import { WelcomeSectionComponent } from './components/welcome-section/welcome-section.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { AboutMeSectionComponent } from './components/about-me-section/about-me-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { PrivacyPolicyLinkComponent } from './components/privacy-policy/privacy-policy-link.component';

import { ThemeService } from '@services/theme.service';
import { MetaService } from '@services/meta.service';
import { TimelineEvent, Project } from '@models/shared-interfaces';
import { byMostRecentWork, parseLocalDate } from '@utils/date';

const SUPPORTED_LANGUAGES = ['en', 'fr'];

// "images" from the JSON, or the older single "image" field
function imageList(p: { images?: unknown; image?: unknown }): string[] {
  const list = Array.isArray(p.images) ? p.images : [p.image];
  return list.filter(
    (src): src is string => typeof src === 'string' && !!src.trim(),
  );
}

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
    PrivacyPolicyLinkComponent,
    TranslateModule,
  ],
})
export class AppComponent implements OnInit {
  timeline: TimelineEvent[] = [];
  projects: Project[] = [];

  // Technology the project list is filtered by, null for all projects
  techFilter: string | null = null;

  isDarkmode = false;
  showContent = true;
  currentYear = new Date().getFullYear();

  private initialLang = 'en';
  // Language of the data currently requested, used to drop stale responses
  private dataLang = '';

  constructor(
    private themeService: ThemeService,
    private metaService: MetaService,
    private translate: TranslateService,
    private http: HttpClient,
  ) {
    this.themeService.isDarkMode$.subscribe((isDark) => {
      this.isDarkmode = isDark;
    });

    this.initializeTranslation();
  }

  private initializeTranslation() {
    this.translate.setDefaultLang('en');

    let savedLang: string | null = null;
    if (typeof window !== 'undefined' && window.localStorage) {
      savedLang = localStorage.getItem('selectedLanguage');
    }
    const browserLang = this.translate.getBrowserLang();

    const candidate = (savedLang || browserLang || 'en').toLowerCase();
    this.initialLang = SUPPORTED_LANGUAGES.includes(candidate)
      ? candidate
      : 'en';

    this.translate.use(this.initialLang);

    // Reload projects and timeline when the language changes
    this.translate.onLangChange.subscribe((event) => {
      // Tech names are translated, so an old filter may no longer match
      this.techFilter = null;
      if (event.lang !== this.dataLang) {
        this.loadData(event.lang);
      }
    });
  }

  private loadData(lang: string) {
    this.dataLang = lang;
    this.loadProjects(lang);
    this.loadEvents(lang);
  }

  private loadProjects(lang: string, fileLang: string = lang) {
    this.http.get<any[]>(`assets/i18n/projects.${fileLang}.json`).subscribe({
      next: (data) => {
        if (lang !== this.dataLang) return;
        this.projects = data.map((p) => ({
          id: p.id,
          title: p.title,
          description: p.description,
          demoUrl: p.demoUrl || '',
          sourceUrl: p.sourceUrl || '',
          videoUrl: p.videoUrl || '',
          startDate: parseLocalDate(p.startDate),
          endDate: parseLocalDate(p.endDate),
          technologies: p.technologies || [],
          images: imageList(p),
        }));
        this.projects.sort(byMostRecentWork);
      },
      error: (error) => {
        console.error(`Error loading projects for language ${fileLang}:`, error);
        // Fallback to English if the language file doesn't exist
        if (fileLang !== 'en') {
          this.loadProjects(lang, 'en');
        }
      },
    });
  }

  private loadEvents(lang: string, fileLang: string = lang) {
    this.http.get<any[]>(`assets/i18n/events.${fileLang}.json`).subscribe({
      next: (data) => {
        if (lang !== this.dataLang) return;
        this.timeline = data.map((e) => ({
          type: ['education', 'work', 'award'].includes(e.type)
            ? e.type
            : 'work',
          title: e.title || '',
          organization: e.organization || '',
          location: e.location || '',
          startDate: e.startDate || '',
          endDate: e.endDate || null,
          summary: e.summary || '',
          details: e.details || [],
          link: e.link || '',
          certificate: e.certificate || '',
          project: e.project || '',
        }));
      },
      error: (error) => {
        console.error(
          `Error loading timeline events for language ${fileLang}:`,
          error,
        );
        // Fallback to English if the language file doesn't exist
        if (fileLang !== 'en') {
          this.loadEvents(lang, 'en');
        }
      },
    });
  }

  // Filters the projects by a technology and brings the list into view
  filterProjects(tech: string | null) {
    this.techFilter = tech;
    if (typeof document === 'undefined') return;
    const section = document.getElementById('project');
    if (!section) return;
    const reduceMotion = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    // Only scroll when the top of the list is out of view
    const top = section.getBoundingClientRect().top;
    if (tech && (top < 0 || top > window.innerHeight * 0.5)) {
      section.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
    }
  }

  toggleDarkMode(value: boolean) {
    this.themeService.setTheme(value);
  }

  switchLanguage(lang: string) {
    const langLower = lang.toLowerCase();
    this.translate.use(langLower);
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('selectedLanguage', langLower);
    }
    // Projects and timeline reload automatically via onLangChange subscription
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang || this.initialLang || 'en';
  }

  ngOnInit() {
    this.loadData(this.getCurrentLanguage());
    this.metaService.init();
  }
}
