import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcome-section',
  templateUrl: './welcome-section.component.html',
  styleUrls: ['./welcome-section.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class WelcomeSectionComponent {
  welcomeMessage = 'Welcome to My Personal Website';
  subtitle = 'Discover my journey in technology and creativity';
}
