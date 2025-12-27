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

  skillSections = [
    {
      title: 'Programming Languages',
      skills: [
        {
          name: 'Java',
          icon: 'devicon-java-plain',
          hoverIcon: 'devicon-java-plain colored',
          currentIcon: 'devicon-java-plain',
          hoverSvgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
          showSvg: false,
        },
        {
          name: 'Python',
          icon: 'devicon-python-plain',
          hoverIcon: 'devicon-python-plain colored',
          currentIcon: 'devicon-python-plain',
          hoverSvgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
          showSvg: false,
        },
        {
          name: 'C++',
          icon: 'devicon-cplusplus-plain',
          hoverIcon: 'devicon-cplusplus-plain colored',
          currentIcon: 'devicon-cplusplus-plain',
          hoverSvgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',
          showSvg: false,
        },
        {
          name: 'C',
          icon: 'devicon-c-plain',
          hoverIcon: 'devicon-c-plain colored',
          currentIcon: 'devicon-c-plain',
          hoverSvgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg',
          showSvg: false,
        },
        {
          name: 'TypeScript',
          icon: 'devicon-typescript-plain',
          hoverIcon: 'devicon-typescript-plain colored',
          currentIcon: 'devicon-typescript-plain',
          hoverSvgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
          showSvg: false,
        },
        {
          name: 'JavaScript',
          icon: 'devicon-javascript-plain',
          hoverIcon: 'devicon-javascript-plain colored',
          currentIcon: 'devicon-javascript-plain',
          hoverSvgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
          showSvg: false,
        },
      ],
    },
    {
      title: 'Frontend Technologies',
      skills: [
        {
          name: 'Angular',
          icon: 'devicon-angular-plain',
          hoverIcon: 'devicon-angular-plain colored',
          currentIcon: 'devicon-angular-plain',
          hoverSvgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
          showSvg: false,
        },
        {
          name: 'HTML5',
          icon: 'devicon-html5-plain',
          hoverIcon: 'devicon-html5-plain colored',
          currentIcon: 'devicon-html5-plain',
          hoverSvgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
          showSvg: false,
        },
        {
          name: 'CSS3',
          icon: 'devicon-css3-plain',
          hoverIcon: 'devicon-css3-plain colored',
          currentIcon: 'devicon-css3-plain',
          hoverSvgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
          showSvg: false,
        },
      ],
    },
    {
      title: 'Databases',
      skills: [
        {
          name: 'MongoDB',
          icon: 'devicon-mongodb-plain',
          hoverIcon: 'devicon-mongodb-plain colored',
          currentIcon: 'devicon-mongodb-plain',
          hoverSvgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
          showSvg: false,
        },
        {
          name: 'MySQL',
          icon: 'devicon-mysql-plain',
          hoverIcon: 'devicon-mysql-plain colored',
          currentIcon: 'devicon-mysql-plain',
          hoverSvgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
          showSvg: false,
        },
      ],
    },
    {
      title: 'Tools & DevOps',
      skills: [
        {
          name: 'Git',
          icon: 'devicon-git-plain',
          hoverIcon: 'devicon-git-plain colored',
          currentIcon: 'devicon-git-plain',
          hoverSvgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
          showSvg: false,
        },
        {
          name: 'GitHub',
          icon: 'devicon-github-original',
          hoverIcon: 'devicon-github-original',
          currentIcon: 'devicon-github-original',
          hoverSvgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
          showSvg: false,
        },
        {
          name: 'Jest',
          icon: 'devicon-jest-plain',
          hoverIcon: 'devicon-jest-plain colored',
          currentIcon: 'devicon-jest-plain',
          hoverSvgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg',
          showSvg: false,
        },
        {
          name: 'VS Code',
          icon: 'devicon-vscode-plain',
          hoverIcon: 'devicon-vscode-plain colored',
          currentIcon: 'devicon-vscode-plain',
          hoverSvgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
          showSvg: false,
        },
        {
          name: 'Node.js',
          icon: 'devicon-nodejs-plain',
          hoverIcon: 'devicon-nodejs-plain colored',
          currentIcon: 'devicon-nodejs-plain',
          hoverSvgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
          showSvg: false,
        },
      ],
    },
    {
      title: 'Hardware & Embedded',
      skills: [
        {
          name: 'ESP32',
          icon: 'devicon-arduino-plain',
          hoverIcon: 'devicon-arduino-plain colored',
          currentIcon: 'devicon-arduino-plain',
          hoverSvgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg',
          showSvg: false,
        },
        {
          name: 'Arduino',
          icon: 'devicon-arduino-plain',
          hoverIcon: 'devicon-arduino-plain colored',
          currentIcon: 'devicon-arduino-plain',
          hoverSvgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg',
          showSvg: false,
        },
        {
          name: 'Raspberry Pi',
          icon: 'devicon-raspberrypi-line',
          hoverIcon: 'devicon-raspberrypi-line colored',
          currentIcon: 'devicon-raspberrypi-line',
          hoverSvgUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/raspberrypi/raspberrypi-original.svg',
          showSvg: false,
        },
      ],
    },
  ];

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
