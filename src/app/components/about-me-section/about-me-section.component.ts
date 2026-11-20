import {
  Component,
  EventEmitter,
  OnInit,
  OnDestroy,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { ThemeService } from '@services/theme.service';
import { Input } from '@angular/core';
import {
  TimelineEvent,
  TimelineEventType,
  Project,
} from '@models/shared-interfaces';
import { TranslateModule } from '@ngx-translate/core';
import { LocalizedDatePipe } from '../../pipes/localized-date.pipe';
import { LocalizedDateRangePipe } from '../../pipes/localized-date-range.pipe';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TimelineDialogComponent } from './timeline-dialog/timeline-dialog.component';
import { hasDay, isDayRange, isSingleDate } from '@utils/date';
import { usesTech } from '@utils/tech';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-about-me-section',
  templateUrl: './about-me-section.component.html',
  styleUrls: ['./about-me-section.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    LocalizedDatePipe,
    LocalizedDateRangePipe,
    MatDialogModule,
    RevealDirective,
  ],
})
export class AboutMeSectionComponent implements OnInit, OnDestroy {
  @Input() timeline: TimelineEvent[] = [];
  @Input() projects: Project[] = [];
  // Emits a skill name when it's clicked, to filter the project list
  @Output() skillSelect = new EventEmitter<string>();
  isDarkMode: boolean = false;
  timelineFilter: 'all' | TimelineEventType = 'all';
  readonly timelineFilters = ['all', 'education', 'work', 'award'] as const;
  private themeSubscription: Subscription = new Subscription();

  constructor(
    private themeService: ThemeService,
    private dialog?: MatDialog,
  ) {}

  get filteredTimeline(): TimelineEvent[] {
    if (this.timelineFilter === 'all') return this.timeline;
    return this.timeline.filter((item) => item.type === this.timelineFilter);
  }

  // How many projects list this skill among their technologies
  projectCount(skill: string): number {
    return this.projects.filter((p) => usesTech(p, skill)).length;
  }

  selectSkill(skill: string): void {
    if (this.projectCount(skill) > 0) this.skillSelect.emit(skill);
  }

  isSingleDate(item: TimelineEvent): boolean {
    return isSingleDate(item.startDate, item.endDate);
  }

  // "Nov 11, 2026" for a specific day, "Nov 2026" for a month
  singleDateFormat(item: TimelineEvent): string {
    return hasDay(item.startDate) ? 'mediumDate' : 'MMM yyyy';
  }

  // Two specific days, shown as "Nov 14 – 15, 2026"
  isDayRange(item: TimelineEvent): boolean {
    return isDayRange(item.startDate, item.endDate);
  }

  openTimelineItem(item: TimelineEvent): void {
    this.dialog?.open(TimelineDialogComponent, {
      data: item,
      panelClass: 'project-dialog-panel',
      width: '90%',
      maxWidth: '640px',
      maxHeight: '90vh',
      autoFocus: false,
    });
  }

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
    hoverSvgUrl: `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${iconBase}/${iconBase}-original.svg`,
    showSvg: false,
  });

  // Simple configuration - just add [name, iconBase] or [name, iconBase, variant]
  // Section titles are translation keys (assets/i18n/*.json)
  skillsConfig: { title: string; skills: Array<[string, string, string?]> }[] =
    [
      {
        title: 'ABOUT.SKILL_CATEGORIES.LANGUAGES',
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
        title: 'ABOUT.SKILL_CATEGORIES.FRONTEND',
        skills: [
          ['Angular', 'angular'],
          ['HTML5', 'html5'],
          ['CSS3', 'css3'],
        ],
      },
      {
        title: 'ABOUT.SKILL_CATEGORIES.DATABASES',
        skills: [
          ['MongoDB', 'mongodb'],
          ['MySQL', 'mysql'],
          ['Firebase', 'firebase'],
        ],
      },
      {
        title: 'ABOUT.SKILL_CATEGORIES.TOOLS',
        skills: [
          ['Git', 'git'],
          ['GitHub', 'github', 'original'],
          ['Jest', 'jest'],
          ['VS Code', 'vscode'],
          ['Node.js', 'nodejs'],
          ['Linux', 'linux'],
          ['CI/CD', 'githubactions'],
        ],
      },
      {
        title: 'ABOUT.SKILL_CATEGORIES.HARDWARE',
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
