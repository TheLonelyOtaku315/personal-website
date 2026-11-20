import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Project } from '@models/shared-interfaces';
import { TranslateModule } from '@ngx-translate/core';
import { LocalizedDatePipe } from '../../../pipes/localized-date.pipe';
import { isSameMonth } from '@utils/date';
import { ImageCarouselComponent } from '../image-carousel/image-carousel.component';

@Component({
  selector: 'app-project-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    TranslateModule,
    LocalizedDatePipe,
    ImageCarouselComponent,
  ],
  templateUrl: './project-dialog.component.html',
  styleUrl: './project-dialog.component.css',
})
export class ProjectDialogComponent implements OnInit {
  bannerFailed = false;

  skillsConfig: { [name: string]: { iconBase: string; variant?: string } } = {
    Java: { iconBase: 'java' },
    Python: { iconBase: 'python' },
    'C++': { iconBase: 'cplusplus' },
    C: { iconBase: 'c' },
    TypeScript: { iconBase: 'typescript' },
    JavaScript: { iconBase: 'javascript' },
    Angular: { iconBase: 'angular' },
    HTML5: { iconBase: 'html5' },
    CSS3: { iconBase: 'css3' },
    MongoDB: { iconBase: 'mongodb' },
    MySQL: { iconBase: 'mysql' },
    Git: { iconBase: 'git' },
    GitHub: { iconBase: 'github', variant: 'original' },
    Jest: { iconBase: 'jest' },
    'VS Code': { iconBase: 'vscode' },
    'Node.js': { iconBase: 'nodejs' },
    'CI/CD': { iconBase: 'githubactions' },
    ESP32: { iconBase: 'arduino' },
    Arduino: { iconBase: 'arduino' },
    'Raspberry Pi': { iconBase: 'raspberrypi', variant: 'line' },
    Firebase: { iconBase: 'firebase' },
    Linux: { iconBase: 'linux' },
    Android: { iconBase: 'android' },
    WordPress: { iconBase: 'wordpress' },
  };

  constructor(
    public dialogRef: MatDialogRef<ProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Project,
  ) {
    this.galleryImages = (data.images || []).filter(
      (src) => !!src && !src.startsWith('data:'),
    );
  }

  readonly galleryImages: string[];

  // Projects that start and end in the same month show that month once
  get sameMonth(): boolean {
    return isSameMonth(this.data.startDate, this.data.endDate);
  }

  techSkills: any[] = [];
  ngOnInit() {
    if (this.data && Array.isArray(this.data.technologies)) {
      this.techSkills = this.data.technologies.map((tech: string) => {
        const config = this.skillsConfig[tech];
        // Technologies without a devicon are shown as a text-only chip
        if (!config) {
          return { name: tech, currentIcon: '', showSvg: false };
        }
        return this.createSkill(tech, config.iconBase, config.variant);
      });
    }
  }

  close(): void {
    this.dialogRef.close();
  }

  onSkillHover(skill: any, isHovered: boolean) {
    skill.currentIcon = isHovered ? skill.hoverIcon : skill.icon;
    if (skill.hoverSvgUrl) {
      skill.showSvg = isHovered;
    }
  }

  preloadSkillImages = (skills: any[]) => {
    skills.forEach((skill) => {
      const img = new Image();
      img.src = skill.hoverSvgUrl;
    });
  };

  createSkill = (
    name: string,
    iconBase: string,
    variant: string = 'plain',
  ) => ({
    name,
    icon: `devicon-${iconBase}-${variant}`,
    hoverIcon: `devicon-${iconBase}-${variant} colored`,
    currentIcon: `devicon-${iconBase}-${variant}`,
    hoverSvgUrl: `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${iconBase}/${iconBase}-original.svg`,
    showSvg: false,
  });
}
