import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ProjectsSectionComponent } from './projects-section.component';
import { Project } from '@models/shared-interfaces';

describe('ProjectsSectionComponent', () => {
  let component: ProjectsSectionComponent;
  let mockProjects: Project[];

  beforeEach(() => {
    component = new ProjectsSectionComponent({ open: vi.fn() } as any);
    mockProjects = [
      {
        title: 'Project 1',
        description: 'Description 1',
        demoUrl: 'https://example.com/demo1',
        sourceUrl: 'https://github.com/user/repo1',
        startDate: new Date(),
        technologies: ['Angular'],
        image: '',
      },
      {
        title: 'Project 2',
        description: 'Description 2',
        demoUrl: '',
        sourceUrl: 'https://github.com/user/repo2',
        startDate: new Date(),
        technologies: ['React'],
        image: 'custom-image.jpg',
      },
      {
        title: 'Project 3',
        description: 'Description 3',
        demoUrl: 'https://youtu.be/dQw4w9WgXcQ',
        sourceUrl: '',
        startDate: new Date(),
        technologies: ['Vue'],
        image: '',
      },
    ];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.projects).toEqual([]);
    expect(component.hoveredIndex).toBeNull();
    expect(component.visibleCount).toBe(6);
  });

  it('should return visible projects correctly', () => {
    component.projects = mockProjects;
    expect(component.visibleProjects).toEqual(mockProjects);
    expect(component.hasMore).toBe(false);
    expect(component.canShowLess).toBe(false);
  });

  it('should show less after showing all projects', () => {
    component.projects = Array.from({ length: 8 }, () => ({ ...mockProjects[0] }));
    expect(component.hasMore).toBe(true);
    component.loadMore();
    expect(component.visibleProjects.length).toBe(8);
    expect(component.canShowLess).toBe(true);
    component.showLess();
    expect(component.visibleCount).toBe(6);
  });

  it('should open the project dialog with the project data', () => {
    component.openProjectDialog(mockProjects[0]);
    expect(component.dialog.open).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({
        data: expect.objectContaining({ title: mockProjects[0].title }),
      })
    );
  });

  it('should load more projects when loadMore is called', () => {
    component.projects = Array.from({ length: 20 }, (_, i) => ({
      title: `Project ${i + 1}`,
      description: `Description ${i + 1}`,
      demoUrl: '',
      sourceUrl: '',
      startDate: new Date(),
      technologies: [],
      image: '',
    }));
    component.visibleCount = 6;
    component.loadMore();
    expect(component.visibleCount).toBe(12);
  });

  it('should not load more if all projects are visible', () => {
    component.projects = mockProjects;
    component.visibleCount = 3;
    component.loadMore();
    expect(component.visibleCount).toBe(3);
  });

  describe('getProjectImage', () => {
    it('should return explicit image if set', () => {
      const project: Project = { ...mockProjects[1] };
      expect(component.getProjectImage(project)).toBe('custom-image.jpg');
    });

    it('should return YouTube thumbnail for YouTube demo URL', () => {
      const project: Project = { ...mockProjects[2] };
      const expected =
        'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg';
      expect(component.getProjectImage(project)).toBe(expected);
    });

    it('should return WordPress mshot for non-YouTube demo URL', () => {
      const project: Project = { ...mockProjects[0] };
      const expected =
        'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fexample.com%2Fdemo1?w=1200';
      expect(component.getProjectImage(project)).toBe(expected);
    });

    it('should return GitHub Open Graph image for GitHub source URL', () => {
      const project: Project = {
        ...mockProjects[0],
        demoUrl: '',
        sourceUrl: 'https://github.com/user/repo1',
      };
      const expected = 'https://opengraph.githubassets.com/1/user/repo1';
      expect(component.getProjectImage(project)).toBe(expected);
    });

    it('should return fallback SVG for no image sources', () => {
      const project: Project = {
        title: 'No Image Project',
        description: 'No sources',
        demoUrl: '',
        sourceUrl: '',
        startDate: new Date(),
        technologies: [],
        image: '',
      };
      const result = component.getProjectImage(project);
      expect(result).toContain('data:image/svg+xml');
      expect(result).toContain('404%20NO%20IMAGE');
    });
  });

});
