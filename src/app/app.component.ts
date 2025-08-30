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
  private squares: {
    element: HTMLElement;
    originalX: number;
    originalY: number;
    size: number;
  }[] = [];

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
    this.showContent = true;
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      this.generateSquares();
      this.setupMouseEffect();
    }
  }

  private generateSquares() {
    const numSquares = 20;
    this.squares = [];
    for (let i = 0; i < numSquares; i++) {
      const square = document.createElement('div');
      square.classList.add('square-glass');
      const size = Math.random() * 40 + 20;
      square.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        position: fixed;
        top: ${Math.random() * (window.innerHeight - size)}px;
        left: ${Math.random() * (window.innerWidth - size)}px;
        background: rgba(${Math.floor(Math.random() * 80) + 175}, ${
        Math.floor(Math.random() * 80) + 175
      }, ${Math.floor(Math.random() * 80) + 175}, ${
        Math.random() * 0.2 + 0.15
      });
        z-index: 0;
        border-radius: 20%;
        pointer-events: none;
      `;
      document.body.appendChild(square);
      const originalX = parseFloat(square.style.left) + size / 2;
      const originalY = parseFloat(square.style.top) + size / 2;
      this.squares.push({ element: square, originalX, originalY, size });
    }
  }

  private setupMouseEffect() {
    document.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      this.squares.forEach(
        ({ element: square, originalX, originalY, size }) => {
          const dx = mouseX - originalX;
          const dy = mouseY - originalY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance > 0) {
            const moveDistance = Math.min(40, distance);
            const moveX = moveDistance * (dx / distance);
            const moveY = moveDistance * (dy / distance);
            square.style.left = `${originalX + moveX - size / 2}px`;
            square.style.top = `${originalY + moveY - size / 2}px`;
          }
        }
      );
    });
  }
}
