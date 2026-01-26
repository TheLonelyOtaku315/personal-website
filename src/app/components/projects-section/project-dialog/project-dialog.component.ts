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

@Component({
  selector: 'app-project-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, TranslateModule],
  templateUrl: './project-dialog.component.html',
  styleUrl: './project-dialog.component.css',
})
export class ProjectDialogComponent implements OnInit {
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
  };

  constructor(
    public dialogRef: MatDialogRef<ProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Project,
  ) {}

  techSkills: any[] = [];
  ngOnInit() {
    if (this.data && Array.isArray(this.data.technologies)) {
      this.techSkills = this.data.technologies.map((tech: string) => {
        const config = this.skillsConfig[tech] || {
          iconBase: 'question',
          variant: 'plain',
        };
        return this.createSkill(tech, config.iconBase, config.variant);
      });
    }
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
    hoverSvgUrl: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${iconBase}/${iconBase}-original.svg`,
    showSvg: false,
  });
}
