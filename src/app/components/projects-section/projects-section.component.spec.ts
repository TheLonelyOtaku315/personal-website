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
      },
      {
        title: 'Project 2',
        description: 'Description 2',
        demoUrl: '',
        sourceUrl: 'https://github.com/user/repo2',
        startDate: new Date(),
        technologies: ['React'],
        images: ['custom-image.jpg', 'second.jpg'],
      },
      {
        title: 'Project 3',
        description: 'Description 3',
        demoUrl: 'https://youtu.be/dQw4w9WgXcQ',
        sourceUrl: '',
        startDate: new Date(),
        technologies: ['Vue'],
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

  it('should open a project by its title, and ignore unknown titles', () => {
    component.projects = mockProjects;
    component.openProjectByTitle('No such project');
    expect(component.dialog.open).not.toHaveBeenCalled();
    component.openProjectByTitle(mockProjects[1].title);
    expect(component.dialog.open).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({
        data: expect.objectContaining({ title: mockProjects[1].title }),
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
    it('should return the first explicit image if set', () => {
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
      };
      const result = component.getProjectImage(project);
      expect(result).toContain('data:image/svg+xml');
      expect(result).toContain('404%20NO%20IMAGE');
    });
  });

  describe('getProjectImages', () => {
    it('returns all its own images, skipping blanks', () => {
      const project: Project = {
        ...mockProjects[0],
        images: ['a.jpg', ' ', 'b.jpg'],
      };
      expect(component.getProjectImages(project)).toEqual(['a.jpg', 'b.jpg']);
    });

    it('falls back to one preview derived from the links', () => {
      expect(component.getProjectImages(mockProjects[2])).toEqual([
        'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      ]);
    });

    it('gives the dialog real images only, never the placeholder', () => {
      const bare: Project = {
        title: 'Bare',
        description: '',
        technologies: [],
        startDate: null,
      };
      component.openProjectDialog(bare);
      component.openProjectDialog(mockProjects[1]);
      const calls = (component.dialog.open as any).mock.calls;
      expect(calls[0][1].data.images).toEqual([]);
      expect(calls[1][1].data.images).toEqual(['custom-image.jpg', 'second.jpg']);
    });
  });

  describe('technology filter', () => {
    const make = (title: string, technologies: string[]): Project => ({
      title,
      description: '',
      technologies,
      startDate: null,
    });

    beforeEach(() => {
      component.projects = [
        make('A', ['Angular', 'CSS']),
        make('B', ['Java']),
        ...Array.from({ length: 8 }, (_, i) => make('P' + i, ['C++'])),
      ];
    });

    it('shows every matching project and hides paging', () => {
      component.techFilter = 'CSS3';
      expect(component.visibleProjects.map((p) => p.title)).toEqual(['A']);
      expect(component.hasMore).toBe(false);
      expect(component.canShowLess).toBe(false);
    });

    it('pages normally without a filter', () => {
      expect(component.visibleProjects.length).toBe(6);
      expect(component.hasMore).toBe(true);
    });

    it('emits the clicked tech, or null to clear the active one', () => {
      const emitted: Array<string | null> = [];
      component.techFilterChange.subscribe((t) => emitted.push(t));
      component.toggleTech('Java');
      component.techFilter = 'Java';
      component.toggleTech('java');
      component.clearFilter();
      expect(emitted).toEqual(['Java', null, null]);
    });

    it('marks the active tech case-insensitively', () => {
      component.techFilter = 'angular';
      expect(component.isActiveTech('Angular')).toBe(true);
      expect(component.isActiveTech('Java')).toBe(false);
    });

    it('skips the placeholder image for hover previews', () => {
      expect(component.previewImage(make('X', []))).toBeNull();
      expect(
        component.previewImage({ ...make('Y', []), images: ['a.jpg', 'b.jpg'] }),
      ).toBe('a.jpg');
    });
  });
});
