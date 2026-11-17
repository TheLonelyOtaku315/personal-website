import { describe, it, expect, vi, afterEach } from 'vitest';
import { WelcomeSectionComponent } from './welcome-section.component';

describe('WelcomeSectionComponent', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it('should create without dependencies', () => {
    const component = new WelcomeSectionComponent();
    expect(component).toBeTruthy();
  });

  it('should split the name into letters', () => {
    const component = new WelcomeSectionComponent();
    expect(component.nameWords).toEqual([
      ['T', 'o', 'n', 'n', 'y'],
      ['Z', 'h', 'a', 'o'],
    ]);
  });

  it('should show the time in Montréal', () => {
    const component = new WelcomeSectionComponent();
    // 22:05 UTC in November is 17:05 in Montréal (EST)
    component.updateTime(new Date('2026-11-17T22:05:00Z'));
    expect(component.localTime).toMatch(/5:05/);
  });

  it('should format the time in French when the site is in French', () => {
    const component = new WelcomeSectionComponent(undefined, {
      currentLang: 'fr',
    } as any);
    component.updateTime(new Date('2026-11-17T22:05:00Z'));
    expect(component.localTime).toMatch(/17/);
  });

  it('should refresh the clock until destroyed', () => {
    vi.useFakeTimers();
    const component = new WelcomeSectionComponent();
    const spy = vi.spyOn(component, 'updateTime');
    component.ngOnInit();
    vi.advanceTimersByTime(15_000);
    expect(spy).toHaveBeenCalledTimes(2);
    component.ngOnDestroy();
    vi.advanceTimersByTime(30_000);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('should open the CV dialog in the site language', () => {
    const open = vi.fn();
    const component = new WelcomeSectionComponent({ open } as any, {
      currentLang: 'fr',
    } as any);
    component.openCv();
    expect(open).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({ data: { lang: 'fr' } }),
    );
  });
});
