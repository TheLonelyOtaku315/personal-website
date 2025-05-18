import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { AboutMeSectionComponent } from './components/about-me-section/about-me-section.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [AboutMeSectionComponent, NavigationBarComponent, CommonModule, RouterOutlet]
})
export class AppComponent {
  title = 'personal-website';

  constructor() {
    // You can add any initialization logic here if needed
  }
}
