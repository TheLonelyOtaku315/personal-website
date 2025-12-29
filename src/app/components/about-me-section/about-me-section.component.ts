import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { ThemeService } from '@services/theme.service';
import { Input } from '@angular/core';
import { TimelineEvent, Project } from '@models/shared-interfaces';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me-section',
  templateUrl: './about-me-section.component.html',
  styleUrls: ['./about-me-section.component.css'],
  standalone: true,
  imports: [CommonModule, TranslateModule],
})
export class AboutMeSectionComponent implements OnInit, OnDestroy {
  @Input() timeline: TimelineEvent[] = [];
  @Input() projects: Project[] = [];
  isDarkMode: boolean = false;
  private themeSubscription: Subscription = new Subscription();

  constructor(private themeService: ThemeService) {}

  preloadSkillImages = (skills: any[]) => {
    skills.forEach((skill) => {
      const img = new Image();
      img.src = skill.hoverSvgUrl;
    });
  };

  // Helper function to create skill objects
  createSkill = (
    name: string,
    iconBase: string,
    variant: string = 'plain'
  ) => ({
    name,
    icon: `devicon-${iconBase}-${variant}`,
    hoverIcon: `devicon-${iconBase}-${variant} colored`,
    currentIcon: `devicon-${iconBase}-${variant}`,
    hoverSvgUrl: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${iconBase}/${iconBase}-original.svg`,
    showSvg: false,
  });

  // Simple configuration - just add [name, iconBase] or [name, iconBase, variant]
  skillsConfig: { title: string; skills: Array<[string, string, string?]> }[] =
    [
      {
        title: 'Programming Languages',
        skills: [
          ['Java', 'java'],
          ['Python', 'python'],
          ['C++', 'cplusplus'],
          ['C', 'c'],
          ['TypeScript', 'typescript'],
          ['JavaScript', 'javascript'],
        ],
      },
      {
        title: 'Frontend Technologies',
        skills: [
          ['Angular', 'angular'],
          ['HTML5', 'html5'],
          ['CSS3', 'css3'],
        ],
      },
      {
        title: 'Databases',
        skills: [
          ['MongoDB', 'mongodb'],
          ['MySQL', 'mysql'],
        ],
      },
      {
        title: 'Tools & DevOps',
        skills: [
          ['Git', 'git'],
          ['GitHub', 'github', 'original'],
          ['Jest', 'jest'],
          ['VS Code', 'vscode'],
          ['Node.js', 'nodejs'],
          ['CI/CD', 'githubactions'],
        ],
      },
      {
        title: 'Hardware & Embedded',
        skills: [
          ['ESP32', 'arduino'],
          ['Arduino', 'arduino'],
          ['Raspberry Pi', 'raspberrypi', 'line'],
        ],
      },
    ];

  // Transform into the full structure
  skillSections = this.skillsConfig.map((section) => ({
    title: section.title,
    skills: section.skills.map(([name, iconBase, variant]) =>
      this.createSkill(name, iconBase, variant)
    ),
  }));

  onSkillHover(skill: any, isHovered: boolean) {
    skill.currentIcon = isHovered ? skill.hoverIcon : skill.icon;
    if (skill.hoverSvgUrl) {
      skill.showSvg = isHovered;
    }
  }

  ngOnInit(): void {
    // Subscribe to theme changes
    this.themeSubscription = this.themeService.isDarkMode$.subscribe(
      (isDark) => {
        this.isDarkMode = isDark;
      }
    );
    // Preload skill images
    this.skillSections.forEach((section) => {
      this.preloadSkillImages(section.skills);
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

  // Method to toggle theme manually
  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  // Method to get current theme
  getCurrentTheme(): string {
    return this.themeService.getCurrentTheme();
  }
}
