import { describe, it, expect, beforeEach, vi } from 'vitest';
import { AboutMeSectionComponent } from './about-me-section.component';
import { ThemeService } from '@services/theme.service';
import { TimelineEvent, Project } from '@models/shared-interfaces';

describe('AboutMeSectionComponent', () => {
  let component: AboutMeSectionComponent;
  let mockThemeService: ThemeService;

  beforeEach(() => {
    mockThemeService = {
      isDarkMode$: {
        subscribe: vi.fn((fn: any) => {
          fn(false); // Default to light mode
          return { unsubscribe: vi.fn() };
        }),
      },
      toggleTheme: vi.fn(),
      getCurrentTheme: vi.fn(() => 'light'),
    } as unknown as ThemeService;

    component = new AboutMeSectionComponent(mockThemeService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.isDarkMode).toBe(false);
    expect(component.timeline).toEqual([]);
    expect(component.projects).toEqual([]);
    expect(component.skillSections).toBeDefined();
    expect(component.skillSections.length).toBeGreaterThan(0);
  });

  it('should create a skill object correctly', () => {
    const skill = component.createSkill('Java', 'java');
    expect(skill.name).toBe('Java');
    expect(skill.icon).toBe('devicon-java-plain');
    expect(skill.hoverIcon).toBe('devicon-java-plain colored');
    expect(skill.currentIcon).toBe('devicon-java-plain');
    expect(skill.hoverSvgUrl).toContain('java-original.svg');
    expect(skill.showSvg).toBe(false);
  });

  it('should create a skill object with custom variant', () => {
    const skill = component.createSkill('GitHub', 'github', 'original');
    expect(skill.icon).toBe('devicon-github-original');
    expect(skill.hoverIcon).toBe('devicon-github-original colored');
    expect(skill.currentIcon).toBe('devicon-github-original');
  });

  it('should transform skillsConfig into skillSections correctly', () => {
    expect(component.skillSections.length).toBe(component.skillsConfig.length);
    component.skillSections.forEach((section, index) => {
      expect(section.title).toBe(component.skillsConfig[index].title);
      expect(section.skills.length).toBe(
        component.skillsConfig[index].skills.length
      );
      section.skills.forEach((skill, skillIndex) => {
        const config = component.skillsConfig[index].skills[skillIndex];
        expect(skill.name).toBe(config[0]);
        expect(skill.icon).toContain(
          `devicon-${config[1]}-${config[2] || 'plain'}`
        );
      });
    });
  });

  it('should handle skill hover correctly', () => {
    const skill = component.createSkill('Java', 'java');
    component.onSkillHover(skill, true);
    expect(skill.currentIcon).toBe(skill.hoverIcon);
    expect(skill.showSvg).toBe(true);

    component.onSkillHover(skill, false);
    expect(skill.currentIcon).toBe(skill.icon);
    expect(skill.showSvg).toBe(false);
  });

  it('should preload skill images without errors', () => {
    const skills = [component.createSkill('Java', 'java')];
    expect(() => component.preloadSkillImages(skills)).not.toThrow();
  });

  it('should subscribe to theme changes on init', () => {
    component.ngOnInit();
    expect(mockThemeService.isDarkMode$.subscribe).toHaveBeenCalled();
    expect(component.isDarkMode).toBe(false); // Based on mock
  });

  it('should preload images for all skill sections on init', () => {
    const preloadSpy = vi.spyOn(component, 'preloadSkillImages');
    component.ngOnInit();
    expect(preloadSpy).toHaveBeenCalledTimes(component.skillSections.length);
  });

  it('should unsubscribe on destroy', () => {
    const unsubscribeSpy = vi.fn();
    const mockSubscription = {
      unsubscribe: unsubscribeSpy,
      closed: false,
      add: vi.fn(),
      remove: vi.fn(),
    };
    mockThemeService.isDarkMode$.subscribe = vi
      .fn()
      .mockReturnValue(mockSubscription);

    component.ngOnInit();
    component.ngOnDestroy();
    expect(unsubscribeSpy).toHaveBeenCalled();
  });

  it('should toggle theme', () => {
    component.toggleTheme();
    expect(mockThemeService.toggleTheme).toHaveBeenCalled();
  });

  it('should get current theme', () => {
    const theme = component.getCurrentTheme();
    expect(mockThemeService.getCurrentTheme).toHaveBeenCalled();
    expect(theme).toBe('light');
  });

  it('should accept timeline input', () => {
    const mockTimeline: TimelineEvent[] = [
      { status: 'Started', date: '2020', description: 'Began journey' },
    ];
    component.timeline = mockTimeline;
    expect(component.timeline).toEqual(mockTimeline);
  });

  it('should accept projects input', () => {
    const mockProjects: Project[] = [
      {
        title: 'Project 1',
        description: 'Description',
        demoUrl: '',
        sourceUrl: '',
        date: new Date(),
        technologies: [],
        image: '',
      },
    ];
    component.projects = mockProjects;
    expect(component.projects).toEqual(mockProjects);
  });

  it('should update isDarkMode when theme changes', () => {
    const newSubscription = vi.fn((fn: any) => {
      fn(true); // Simulate dark mode
      return { unsubscribe: vi.fn() };
    });
    (mockThemeService.isDarkMode$ as any).subscribe = newSubscription;

    component.ngOnInit();
    expect(component.isDarkMode).toBe(true);
  });

  it('should handle empty skills config', () => {
    const originalConfig = component.skillsConfig;
    component.skillsConfig = [];
    component.skillSections = component.skillsConfig.map((section) => ({
      title: section.title,
      skills: section.skills.map(([name, iconBase, variant]) =>
        component.createSkill(name, iconBase, variant)
      ),
    }));
    expect(component.skillSections).toEqual([]);
    component.skillsConfig = originalConfig; // Restore
  });

  it('should handle skill hover without hoverSvgUrl', () => {
    const skill = component.createSkill('Java', 'java');
    skill.hoverSvgUrl = ''; // Simulate no SVG
    component.onSkillHover(skill, true);
    expect(skill.currentIcon).toBe(skill.hoverIcon);
    expect(skill.showSvg).toBe(false); // Should not show SVG
  });
});
