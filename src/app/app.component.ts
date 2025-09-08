import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeSectionComponent } from './components/welcome-section/welcome-section.component';
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

  constructor(private userService: UserServiceService) {
    this.userService.darkMode$.subscribe((isDark) => {
      this.isDarkmode = isDark;
      // Only access document if running in the browser
      if (typeof window !== 'undefined' && window.document) {
        if (this.isDarkmode) {
          window.document.body.classList.add('dark-theme');
          window.document.body.classList.remove('light-theme');
        } else {
          window.document.body.classList.remove('dark-theme');
          window.document.body.classList.add('light-theme');
        }
      }
    });
  }

  toggleDarkMode(value: boolean) {
    this.userService.setDarkMode(value);
  }

  ngOnInit() {
    // showContent is already true, no need to change it here
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      // this.generateSquares();
      // this.setupMouseEffect();
    }
  }

  // private generateSquares() {
  //   const numSquares = 20;
  //   this.squares = [];
  //   for (let i = 0; i < numSquares; i++) {
  //     const square = document.createElement('div');
  //     square.classList.add('square-glass');
  //     const size = Math.random() * 40 + 20;
  //     const startTop = Math.random() * (window.innerHeight - size);
  //     const startLeft = Math.random() * (window.innerWidth - size);
  //     square.style.cssText = `
  //       width: ${size}px;
  //       height: ${size}px;
  //       position: fixed;
  //       top: ${startTop}px;
  //       left: ${startLeft}px;
  //       background: rgba(${Math.floor(Math.random() * 80) + 175}, ${
  //       Math.floor(Math.random() * 80) + 175
  //     }, ${Math.floor(Math.random() * 80) + 175}, ${
  //       Math.random() * 0.2 + 0.15
  //     });
  //       z-index: 0;
  //       border-radius: 20%;
  //       pointer-events: none;
  //       transition: none;
  //     `;
  //     document.body.appendChild(square);
  //     const originalX = startLeft + size / 2;
  //     const originalY = startTop + size / 2;
  //     this.squares.push({ element: square, originalX, originalY, size });

  //     // Animate square movement smoothly in their own direction
  //     let angle = Math.random() * Math.PI * 2;
  //     let t = 0;
  //     const moveRadius = 10;
  //     function animate() {
  //       t += 0.01 + Math.random() * 0.01; // Smooth step
  //       angle += (Math.random() - 0.5) * 0.005; // Slight random walk
  //       const newX = originalX + Math.cos(angle + t) * moveRadius;
  //       const newY = originalY + Math.sin(angle + t) * moveRadius;
  //       square.style.left = `${newX - size / 2}px`;
  //       square.style.top = `${newY - size / 2}px`;
  //       requestAnimationFrame(animate);
  //     }
  //     animate();
  //   }
  // }

  // private setupMouseEffect() {
  //   document.addEventListener('mousemove', (e) => {
  //     const mouseX = e.clientX;
  //     const mouseY = e.clientY;
  //     this.squares.forEach(
  //       ({ element: square, originalX, originalY, size }) => {
  //         const dx = mouseX - originalX;
  //         const dy = mouseY - originalY;
  //         const distance = Math.sqrt(dx * dx + dy * dy);
  //         if (distance > 0) {
  //           const moveDistance = Math.min(40, distance);
  //           const moveX = moveDistance * (dx / distance);
  //           const moveY = moveDistance * (dy / distance);
  //           square.style.left = `${originalX + moveX - size / 2}px`;
  //           square.style.top = `${originalY + moveY - size / 2}px`;
  //         }
  //       }
  //     );
  //   });
  // }
}
