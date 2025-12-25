import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeSectionComponent } from './components/welcome-section/welcome-section.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { AboutMeSectionComponent } from './components/about-me-section/about-me-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { ThemeService } from '../service/theme.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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
  title = 'personal-website';

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
