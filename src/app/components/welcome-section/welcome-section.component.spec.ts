import { describe, it, expect } from 'vitest';
import { WelcomeSectionComponent } from './welcome-section.component';

describe('WelcomeSectionComponent', () => {
  it('should create', () => {
    const component = new WelcomeSectionComponent();
    expect(component).toBeTruthy();
  });
});
