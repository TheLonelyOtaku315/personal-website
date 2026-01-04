import { describe, it, expect } from 'vitest';
import { WelcomeSectionComponent } from './welcome-section.component';

describe('WelcomeSectionComponent', () => {
  it('should create', () => {
    const component = new WelcomeSectionComponent();
    expect(component).toBeTruthy();
  });

  it('should be a class', () => {
    expect(WelcomeSectionComponent).toBeDefined();
    expect(typeof WelcomeSectionComponent).toBe('function');
  });

  it('should have no instance properties', () => {
    const component = new WelcomeSectionComponent();
    expect(Object.keys(component).length).toBe(0);
  });
});
