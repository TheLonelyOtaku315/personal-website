import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeSectionComponent } from './components/welcome-section/welcome-section.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { AboutMeSectionComponent } from './components/about-me-section/about-me-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { ThemeService } from '../service/theme.service';
import eventsData from '../assets/JSON/event.json';
import projectsData from '../assets/JSON/projects.json';

interface TimelineEvent {
  status: string;
  date: string;
  description: string;
}

interface Project {
  title: string;
  description: string;
  demoUrl: string;
  sourceUrl: string;
  date: Date;
  technologies: string[];
  image: string;
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

  constructor(private themeService: ThemeService) {
    this.themeService.isDarkMode$.subscribe((isDark) => {
      this.isDarkmode = isDark;
    });
  }

  toggleDarkMode(value: boolean) {
    this.themeService.setTheme(value);
  }

  ngOnInit() {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    }
  }
}
