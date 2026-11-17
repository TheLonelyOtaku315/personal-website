import { describe, it, expect } from 'vitest';
import { sameTech, usesTech } from './tech';

describe('tech matching', () => {
  it('ignores case and surrounding spaces', () => {
    expect(sameTech('Angular', ' angular ')).toBe(true);
  });

  it('treats HTML/HTML5 and CSS/CSS3 as the same', () => {
    expect(sameTech('HTML5', 'HTML')).toBe(true);
    expect(sameTech('CSS', 'CSS3')).toBe(true);
    expect(sameTech('HTML', 'CSS')).toBe(false);
  });

  it('does not match C with C++', () => {
    expect(sameTech('C', 'C++')).toBe(false);
  });

  it('checks a project technology list', () => {
    const project = { technologies: ['Java', 'CSS'] };
    expect(usesTech(project, 'CSS3')).toBe(true);
    expect(usesTech(project, 'Python')).toBe(false);
    expect(usesTech({}, 'Java')).toBe(false);
  });
});
