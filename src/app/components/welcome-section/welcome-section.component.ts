import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-welcome-section',
  templateUrl: './welcome-section.component.html',
  styleUrls: ['./welcome-section.component.css'],
  standalone: true,
  imports: [CommonModule, TranslateModule],
})
export class WelcomeSectionComponent {
// download button animation is 4s
}
