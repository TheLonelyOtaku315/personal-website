import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '@models/shared-interfaces';
import { TranslateModule } from '@ngx-translate/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ProjectDialogComponent } from './project-dialog/project-dialog.component';
import { RevealDirective } from '../../directives/reveal.directive';
import { CursorPreviewDirective } from '../../directives/cursor-preview.directive';
import { sameTech, usesTech } from '@utils/tech';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    MatDialogModule,
    RevealDirective,
    CursorPreviewDirective,
  ],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.css',
})
export class ProjectsSectionComponent {
  constructor(public dialog: MatDialog) {}
  @Input() projects: Project[] = [];
  // Technology the list is filtered by (set from a skill or a tech tag)
  @Input() techFilter: string | null = null;
  @Output() techFilterChange = new EventEmitter<string | null>();
  hoveredIndex: number | null = null;

  readonly pageSize = 6;
  visibleCount = this.pageSize;

  get filteredProjects(): Project[] {
    const tech = this.techFilter;
    return tech ? this.projects.filter((p) => usesTech(p, tech)) : this.projects;
  }

  get visibleProjects() {
    // A filtered list is short, so show every match
    if (this.techFilter) return this.filteredProjects;
    return this.projects.slice(0, this.visibleCount);
  }

  get hasMore(): boolean {
    return !this.techFilter && this.visibleCount < this.projects.length;
  }

  isActiveTech(tech: string): boolean {
    return !!this.techFilter && sameTech(tech, this.techFilter);
  }

  // Clicking the active tag again clears the filter
  toggleTech(tech: string): void {
    this.techFilterChange.emit(this.isActiveTech(tech) ? null : tech);
  }

  clearFilter(): void {
    this.techFilterChange.emit(null);
  }

  // Image for the hover preview; skips the generated "no image" placeholder
  previewImage(project: Project): string | null {
    const src = this.getProjectImage(project);
    return src.startsWith('data:') ? null : src;
  }

  get canShowLess(): boolean {
    return (
      !this.techFilter &&
      !this.hasMore &&
      this.projects.length > this.pageSize
    );
  }

  loadMore() {
    if (this.hasMore) {
      this.visibleCount += this.pageSize;
    }
  }

  showLess() {
    this.visibleCount = this.pageSize;
  }

  // Opens a project by its title, e.g. from a related timeline entry
  openProjectByTitle(title: string): void {
    const project = this.projects.find((p) => p.title === title);
    if (project) this.openProjectDialog(project);
  }

  openProjectDialog(project: Project): void {
    this.dialog.open(ProjectDialogComponent, {
      // Pass the same preview image the card shows
      data: { ...project, image: this.getProjectImage(project) },
      panelClass: 'project-dialog-panel',
      width: '90%',
      maxWidth: '760px',
      maxHeight: '90vh',
      autoFocus: false,
    });
  }

  getProjectImage(project: Project): string {
    // 1) Explicit image set on the project
    if (project.image && project.image.trim()) return project.image;

    // 2) If a demo URL exists, prefer the most appropriate preview:
    if (project.demoUrl && project.demoUrl.trim()) {
      const demo = project.demoUrl.trim();

      // detect YouTube video id (handles youtube.com/watch?v=, youtu.be/, embed/)
      const ytMatch = demo.match(
        /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/i,
      );
      if (ytMatch && ytMatch[1]) {
        // use maxresdefault (may 404 for some videos) — falls back in-browser
        return `https://img.youtube.com/vi/${ytMatch[1]}/maxresdefault.jpg`;
      }

      // non-YouTube: use WordPress mshots to capture a live screenshot
      try {
        const encoded = encodeURIComponent(demo);
        return `https://s.wordpress.com/mshots/v1/${encoded}?w=1200`;
      } catch (e) {
        // fall through to next option
      }
    }

    // 3) If project has a GitHub repo URL, prefer the repository Open Graph image
    if (project.sourceUrl && project.sourceUrl.includes('github.com')) {
      const m = project.sourceUrl.match(
        /github\.com\/([^\/]+)\/([^\/]+)(?:\/|$)/i,
      );
      if (m && m[1] && m[2]) {
        const owner = m[1];
        const repo = m[2].replace(/\.git$/i, '');
        // GitHub Open Graph image (token can be any string like '1')
        return `https://opengraph.githubassets.com/1/${owner}/${repo}`;
      }
    }

    // 4) Fallback placeholder
    // Return a "404 no image" with glitchy animation (animated SVG)
    const svg = `<svg width="800" height="450" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg"><style><![CDATA[
      @keyframes glitch{0%{transform:translate(0,0)}20%{transform:translate(-2px,2px)}40%{transform:translate(-2px,-2px)}60%{transform:translate(2px,2px)}80%{transform:translate(2px,-2px)}100%{transform:translate(0,0)}}
      .glitch{font-family:monospace;font-size:48px;fill:#fff;stroke:#f00;stroke-width:2;animation:glitch 0.7s infinite alternate;}
    ]]></style><text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" class="glitch">404 NO IMAGE</text></svg>`;
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  }
}
