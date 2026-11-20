import { describe, it, expect } from 'vitest';
import {
  byMostRecentWork,
  formatDayRange,
  isDayRange,
  isSameMonth,
  parseLocalDate,
} from './date';

describe('parseLocalDate', () => {
  it('parses YYYY-MM as the first day of that month in local time', () => {
    const date = parseLocalDate('2025-12')!;
    expect(date.getFullYear()).toBe(2025);
    expect(date.getMonth()).toBe(11);
    expect(date.getDate()).toBe(1);
  });

  it('parses YYYY-MM-DD in local time', () => {
    const date = parseLocalDate('2024-01-15')!;
    expect(date.getMonth()).toBe(0);
    expect(date.getDate()).toBe(15);
  });

  it('returns null for empty or invalid values', () => {
    expect(parseLocalDate('')).toBeNull();
    expect(parseLocalDate(null)).toBeNull();
    expect(parseLocalDate(undefined)).toBeNull();
    expect(parseLocalDate('not a date')).toBeNull();
  });

  it('passes through valid Date objects', () => {
    const date = new Date(2023, 4, 1);
    expect(parseLocalDate(date)).toBe(date);
  });
});

describe('byMostRecentWork', () => {
  const item = (title: string, start: string, end = '') => ({
    title,
    startDate: parseLocalDate(start),
    endDate: parseLocalDate(end),
  });

  it('puts ongoing work first even when it started earlier', () => {
    const list = [
      item('finished later start', '2026-01', '2026-04'),
      item('ongoing', '2025-10'),
    ];
    expect(list.sort(byMostRecentWork).map((p) => p.title)).toEqual([
      'ongoing',
      'finished later start',
    ]);
  });

  it('orders ongoing work by newest start, finished work by latest end', () => {
    const list = [
      item('old ongoing', '2024-07'),
      item('ended 2022-12', '2022-08', '2022-12'),
      item('new ongoing', '2025-10'),
      item('ended 2026-08', '2026-07', '2026-08'),
      item('ended 2022-11', '2022-11', '2022-11'),
    ];
    expect(list.sort(byMostRecentWork).map((p) => p.title)).toEqual([
      'new ongoing',
      'old ongoing',
      'ended 2026-08',
      'ended 2022-12',
      'ended 2022-11',
    ]);
  });
});

describe('isSameMonth', () => {
  it('compares year and month of strings or dates', () => {
    expect(isSameMonth('2026-11-14', '2026-11-15')).toBe(true);
    expect(isSameMonth('2024-01', '2024-01')).toBe(true);
    expect(isSameMonth(new Date(2026, 10, 14), new Date(2026, 10, 15))).toBe(
      true,
    );
    expect(isSameMonth('2026-07', '2026-08')).toBe(false);
    expect(isSameMonth('2025-11', '2026-11')).toBe(false);
    expect(isSameMonth('2026-11', null)).toBe(false);
  });
});

describe('isDayRange', () => {
  it('is true for two different days only', () => {
    expect(isDayRange('2026-11-14', '2026-11-15')).toBe(true);
    expect(isDayRange('2026-11-11', '2026-11-11')).toBe(false);
    expect(isDayRange('2026-07', '2026-08')).toBe(false);
    expect(isDayRange('2026-11-14', '')).toBe(false);
    expect(isDayRange('2026-11-14', null)).toBe(false);
  });
});

describe('formatDayRange', () => {
  // Intl puts thin or narrow no-break spaces around the dash
  const plain = (s: string) => s.replace(/\s/g, ' ');

  it('shares the month and year in English and French', () => {
    expect(plain(formatDayRange('2026-11-14', '2026-11-15', 'en'))).toBe(
      'Nov 14 – 15, 2026',
    );
    expect(plain(formatDayRange('2026-11-14', '2026-11-15', 'fr'))).toBe(
      '14–15 nov. 2026',
    );
    expect(
      plain(formatDayRange('2026-11-14', '2026-11-15', 'fr', 'long')),
    ).toBe('14–15 novembre 2026');
  });

  it('returns an empty string for missing dates', () => {
    expect(formatDayRange('2026-11-14', null, 'en')).toBe('');
  });
});
