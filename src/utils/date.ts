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
