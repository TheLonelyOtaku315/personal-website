/** True when the value is a "YYYY-MM-DD" string, i.e. a specific day. */
export function hasDay(value: unknown): boolean {
  return (
    typeof value === 'string' && /^\d{4}-\d{1,2}-\d{1,2}$/.test(value.trim())
  );
}

/** True for one-off events (e.g. a hackathon) whose end equals their start. */
export function isSingleDate(start: unknown, end: unknown): boolean {
  return !!end && end === start;
}

/**
 * Parses "YYYY-MM" or "YYYY-MM-DD" strings as a local date.
 * `new Date('2025-12')` is parsed as UTC midnight, which shows up as the
 * previous month in timezones west of UTC (e.g. Montréal).
 */
export function parseLocalDate(value: unknown): Date | null {
  if (value instanceof Date) return isNaN(value.getTime()) ? null : value;
  if (typeof value !== 'string' || !value.trim()) return null;

  const match = value.trim().match(/^(\d{4})-(\d{1,2})(?:-(\d{1,2}))?$/);
  if (match) {
    const [, year, month, day] = match;
    return new Date(Number(year), Number(month) - 1, day ? Number(day) : 1);
  }

  return null;
}

type Dated = { startDate?: Date | string | null; endDate?: Date | string | null };

const time = (value: Date | string | null | undefined): number =>
  value instanceof Date ? value.getTime() : -Infinity;

/**
 * Sort order for work items, most recent work first: anything still in
 * progress (no end date) comes first, newest start first, then finished
 * items by when they ended, with the start date breaking ties.
 */
export function byMostRecentWork(a: Dated, b: Dated): number {
  const aEnd = a.endDate ? time(a.endDate) : Infinity;
  const bEnd = b.endDate ? time(b.endDate) : Infinity;
  if (aEnd !== bEnd) return bEnd > aEnd ? 1 : -1;
  const aStart = time(a.startDate);
  const bStart = time(b.startDate);
  return aStart === bStart ? 0 : bStart > aStart ? 1 : -1;
}
