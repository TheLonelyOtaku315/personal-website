import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { AboutMeSectionComponent } from './components/about-me-section/about-me-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { UserServiceService } from '../service/user.service.service';
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
export class AppComponent implements OnInit {
  title = 'personal-website';

  isDarkmode = false;
  showContent = false;

  constructor(private userService: UserServiceService) {
    this.userService.darkMode$.subscribe((isDark) => {
      this.isDarkmode = isDark;
      // Only access document if running in the browser
      if (typeof window !== 'undefined' && window.document) {
        if (this.isDarkmode) {
          window.document.body.classList.add('dark-mode');
          window.document.body.classList.remove('light-mode');
        } else {
          window.document.body.classList.remove('dark-mode');
          window.document.body.classList.add('light-mode');
        }
      }
    });
  }

  toggleDarkMode(value: boolean) {
    this.userService.setDarkMode(value);
  }

  ngOnInit() {
    // this.userService.animationFinished$.subscribe((finished) => {
    //   console.log('Animation finished:', finished);
    //   this.showContent = finished;
    // });
    this.showContent = true; // Set to true to show content immediately
  }
}
