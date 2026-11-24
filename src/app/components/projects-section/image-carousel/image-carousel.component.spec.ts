import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { NgZone } from '@angular/core';
import { ImageCarouselComponent } from './image-carousel.component';

// Runs callbacks straight away, like a zone with nothing to track
const zone = {
  run: (fn: () => unknown) => fn(),
  runOutsideAngular: (fn: () => unknown) => fn(),
} as unknown as NgZone;

function setReducedMotion(reduce: boolean) {
  window.matchMedia = vi.fn().mockReturnValue({ matches: reduce }) as any;
}

function make(images: string[], interval = 1000) {
  const carousel = new ImageCarouselComponent(zone);
  carousel.interval = interval;
  carousel.images = images;
  carousel.ngOnInit();
  return carousel;
}

describe('ImageCarouselComponent', () => {
  let carousel: ImageCarouselComponent;

  beforeEach(() => {
    vi.useFakeTimers();
    setReducedMotion(false);
  });

  afterEach(() => {
    carousel?.ngOnDestroy();
    vi.useRealTimers();
  });

  it('wraps around at both ends', () => {
    carousel = make(['a', 'b', 'c']);
    carousel.prev();
    expect(carousel.index).toBe(2);
    carousel.next();
    expect(carousel.index).toBe(0);
    carousel.goTo(4);
    expect(carousel.index).toBe(1);
  });

  it('skips blank image paths', () => {
    carousel = make(['a', '', '  ', 'b']);
    expect(carousel.slides).toEqual(['a', 'b']);
  });

  it('advances on its own every interval', () => {
    carousel = make(['a', 'b', 'c']);
    expect(carousel.playing).toBe(true);
    vi.advanceTimersByTime(1000);
    expect(carousel.index).toBe(1);
    vi.advanceTimersByTime(2000);
    expect(carousel.index).toBe(0);
  });

  it('does not play a single image', () => {
    carousel = make(['a']);
    expect(carousel.playing).toBe(false);
    expect(carousel.hasMany).toBe(false);
  });

  it('pauses while hovered and resumes after', () => {
    carousel = make(['a', 'b']);
    carousel.setHovered(true);
    vi.advanceTimersByTime(5000);
    expect(carousel.index).toBe(0);
    carousel.setHovered(false);
    vi.advanceTimersByTime(1000);
    expect(carousel.index).toBe(1);
  });

  it('pauses while focus is inside it', () => {
    carousel = make(['a', 'b']);
    const host = document.createElement('div');
    const inside = document.createElement('button');
    host.appendChild(inside);
    carousel.onFocusIn();
    // Moving focus between its own controls keeps it paused
    carousel.onFocusOut({ currentTarget: host, relatedTarget: inside } as any);
    vi.advanceTimersByTime(3000);
    expect(carousel.index).toBe(0);
    carousel.onFocusOut({ currentTarget: host, relatedTarget: null } as any);
    expect(carousel.playing).toBe(true);
  });

  it('gives a picked image a full interval before moving on', () => {
    carousel = make(['a', 'b', 'c']);
    vi.advanceTimersByTime(900);
    carousel.goTo(2);
    vi.advanceTimersByTime(900);
    expect(carousel.index).toBe(2);
    vi.advanceTimersByTime(100);
    expect(carousel.index).toBe(0);
  });

  it('stays still for visitors who prefer reduced motion', () => {
    setReducedMotion(true);
    carousel = make(['a', 'b']);
    expect(carousel.playing).toBe(false);
    vi.advanceTimersByTime(5000);
    expect(carousel.index).toBe(0);
    carousel.next();
    expect(carousel.index).toBe(1);
  });

  it('drops images that fail and reports when none are left', () => {
    carousel = make(['a', 'b', 'c']);
    const empty = vi.fn();
    carousel.empty.subscribe(empty);
    carousel.goTo(2);
    carousel.onError('a');
    expect(carousel.slides).toEqual(['b', 'c']);
    expect(carousel.index).toBe(1);
    carousel.onError('c');
    expect(carousel.index).toBe(0);
    expect(carousel.playing).toBe(false);
    carousel.onError('b');
    expect(carousel.slides).toEqual([]);
    expect(empty).toHaveBeenCalledTimes(1);
  });

  it('turns touch swipes into next and previous', () => {
    carousel = make(['a', 'b', 'c']);
    const swipe = (from: number, to: number, pointerType = 'touch') => {
      carousel.onPointerDown({ clientX: from, pointerType } as PointerEvent);
      carousel.onPointerUp({ clientX: to, pointerType } as PointerEvent);
    };
    swipe(200, 100);
    expect(carousel.index).toBe(1);
    swipe(100, 200);
    expect(carousel.index).toBe(0);
    swipe(100, 120);
    expect(carousel.index).toBe(0);
    swipe(200, 100, 'mouse');
    expect(carousel.index).toBe(0);
  });

  it('stops its timer when destroyed', () => {
    carousel = make(['a', 'b']);
    carousel.ngOnDestroy();
    expect(carousel.playing).toBe(false);
    vi.advanceTimersByTime(5000);
    expect(carousel.index).toBe(0);
  });
});
