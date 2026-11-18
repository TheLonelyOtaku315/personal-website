import { expect, test } from '@playwright/test';
import { Lang, openSite } from './helpers';

declare global {
  interface Window {
    lineCount(el: Element): number;
  }
}

// Phone, small tablet (collapsed menu), and two desktop widths
const WIDTHS = [375, 800, 1024, 1280];
const LANGS: Lang[] = ['en', 'fr'];
const MENU_BREAKPOINT = 900;

for (const lang of LANGS) {
  for (const width of WIDTHS) {
    test.describe(`${lang.toUpperCase()} at ${width}px`, () => {
      test.beforeEach(async ({ page }) => {
        await page.setViewportSize({ width, height: 900 });
        await openSite(page, lang);
      });

      test('page never scrolls sideways', async ({ page }) => {
        const overflow = await page.evaluate(
          () => document.documentElement.scrollWidth - window.innerWidth,
        );
        expect(overflow).toBeLessThanOrEqual(0);
      });

      test('header fits on one line', async ({ page }) => {
        const header = await page.evaluate(() => {
          const inner = document.querySelector('.topbar-inner')!;
          const menuBtn = document.querySelector('.menu-btn')!;
          return {
            overflow: inner.scrollWidth - inner.clientWidth,
            brandLines: window.lineCount(document.querySelector('.brand-name')!),
            menuShown: getComputedStyle(menuBtn).display !== 'none',
            linkLines: Array.from(document.querySelectorAll('.nav-links a')).map((a) =>
              window.lineCount(a),
            ),
          };
        });
        expect(header.overflow).toBeLessThanOrEqual(0);
        expect(header.brandLines).toBe(1);
        expect(header.menuShown).toBe(width < MENU_BREAKPOINT);
        if (!header.menuShown) {
          for (const lines of header.linkLines) expect(lines).toBe(1);
        }
      });

      test('menu icon bars are the same thickness', async ({ page }) => {
        test.skip(width >= MENU_BREAKPOINT, 'menu button only shows on small screens');
        const bars = await page.evaluate(() =>
          Array.from(document.querySelectorAll('.menu-icon span')).map((s) => {
            const r = s.getBoundingClientRect();
            return { top: r.top * devicePixelRatio, height: r.height * devicePixelRatio };
          }),
        );
        expect(bars).toHaveLength(3);
        // Same height and same sub-pixel offset means the same rendered thickness
        for (const bar of bars) {
          expect(bar.height).toBeCloseTo(bars[0].height, 5);
          expect(bar.top % 1).toBeCloseTo(bars[0].top % 1, 5);
        }
      });

      test('timeline dates never run into titles', async ({ page }) => {
        const problems = await page.evaluate(() =>
          Array.from(document.querySelectorAll('.entry'))
            .map((entry) => {
              const date = entry.querySelector('.entry-date')!;
              const main = entry.querySelector('.entry-main')!.getBoundingClientRect();
              const range = document.createRange();
              range.selectNodeContents(date);
              const text = Array.from(range.getClientRects()).filter((r) => r.width > 0);
              const overlaps = text.some(
                (r) => r.right > main.left + 0.5 && r.bottom > main.top && r.top < main.bottom,
              );
              const overflows = date.scrollWidth > date.clientWidth;
              return overlaps || overflows ? date.textContent!.replace(/\s+/g, ' ').trim() : null;
            })
            .filter(Boolean),
        );
        expect(problems).toEqual([]);
      });

      test('project rows stay inside their column', async ({ page }) => {
        const wide = await page.evaluate(() =>
          Array.from(document.querySelectorAll('li.project'))
            .filter((row) => row.scrollWidth > row.clientWidth)
            .map((row) => row.querySelector('.project-title')?.textContent?.trim()),
        );
        expect(wide).toEqual([]);
      });
    });
  }
}

test('ongoing projects come first and carry a badge', async ({ page }) => {
  await openSite(page, 'en');
  const rows = await page.evaluate(() =>
    Array.from(document.querySelectorAll('li.project')).map(
      (row) => !!row.querySelector('.project-status'),
    ),
  );
  const firstFinished = rows.indexOf(false);
  expect(rows[0]).toBe(true);
  // No ongoing project after the first finished one
  expect(rows.slice(firstFinished).includes(true)).toBe(false);
});
