import { describe, it, expect } from 'vitest';
import { parseLocalDate } from './date';

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
