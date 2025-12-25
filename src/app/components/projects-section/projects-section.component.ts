import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// Import static JSON data
import projectsData from '../../../assets/JSON/projects.json';

export class Project {
  constructor(
    public title: string,
    public description: string,
    public demoUrl: string,
    public sourceUrl: string,
    public date: Date,
    public technologies: string[],
    public image: string = ''
  ) {}
}

import { HostListener } from '@angular/core';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.css',
})
export class ProjectsSectionComponent {
  hoveredIndex: number | null = null;
  visibleCount = 100;
  projects: Project[] = (projectsData as any[]).map(
    (p) =>
      new Project(
        p.title,
        p.description,
        p.demoUrl || '',
        p.sourceUrl || '',
        new Date(p.date),
        p.technologies || [],
        p.image || ''
      )
  );

  get visibleProjects() {
    return this.projects.slice(0, this.visibleCount);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 10
    ) {
      this.loadMore();
    }
  }

  loadMore() {
    if (this.visibleCount < this.projects.length) {
      this.visibleCount += 6;
    }
  }

  getProjectImage(project: Project): string {
    // 1) Explicit image set on the project
    if (project.image && project.image.trim()) return project.image;

    // 2) If a demo URL exists, prefer the most appropriate preview:
    if (project.demoUrl && project.demoUrl.trim()) {
      const demo = project.demoUrl.trim();

      // detect YouTube video id (handles youtube.com/watch?v=, youtu.be/, embed/)
      const ytMatch = demo.match(
        /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/i
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
        /github\.com\/([^\/]+)\/([^\/]+)(?:\/|$)/i
      );
      if (m && m[1] && m[2]) {
        const owner = m[1];
        const repo = m[2].replace(/\.git$/i, '');
        // GitHub Open Graph image (token can be any string like '1')
        return `https://opengraph.githubassets.com/1/${owner}/${repo}`;
      }
    }

    // 4) Fallback placeholder
    return 'https://via.placeholder.com/800x450?text=Project';
  }
}
