import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { AboutMeSectionComponent } from './components/about-me-section/about-me-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
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
  ],
})
export class AppComponent {
  title = 'personal-website';

  constructor() {
    // You can add any initialization logic here if needed
  }
}
