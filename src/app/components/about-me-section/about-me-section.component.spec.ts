import { describe, it, expect } from 'vitest';
import { AboutMeSectionComponent } from './about-me-section.component';

import { ThemeService } from '@services/theme.service'; // Adjust the path if needed

describe('AboutMeSectionComponent', () => {
  it('should create', () => {
    const mockThemeService = {} as ThemeService;
    const component = new AboutMeSectionComponent(mockThemeService);
    expect(component).toBeTruthy();
  });
});
