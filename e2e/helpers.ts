import { Page } from '@playwright/test';

export type Lang = 'en' | 'fr';

/** Opens the site in a language and waits until projects and timeline are in. */
export async function openSite(page: Page, lang: Lang, theme: 'light' | 'dark' = 'light') {
  await page.addInitScript(
    ([l, t]) => {
      localStorage.setItem('selectedLanguage', l);
      localStorage.setItem('themeMode', t);
    },
    [lang, theme],
  );
  // Make the line counter available inside page.evaluate() as window.lineCount
  await page.addInitScript({ content: `window.lineCount = ${lineCountScript.toString()};` });
  await page.goto('/');
  await page.locator('li.project').first().waitFor();
  await page.locator('.entry').first().waitFor();
  // Show scroll-reveal content right away and freeze animations
  await page.addStyleTag({
    content: `.reveal { opacity: 1 !important; transform: none !important; }
      *, *::before, *::after { transition: none !important; animation: none !important; }`,
  });
  await page.evaluate(() => document.fonts.ready);
}

/**
 * Number of rendered lines of text inside an element, counting only text
 * (not inline boxes like small labels that sit on a different baseline).
 */
export function lineCountScript(el: Element): number {
  const tops = new Set<number>();
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  let node: Node | null;
  while ((node = walker.nextNode())) {
    if (!node.textContent?.trim()) continue;
    const range = document.createRange();
    range.selectNodeContents(node);
    for (const rect of Array.from(range.getClientRects())) {
      if (rect.width > 1) tops.add(Math.round(rect.top));
    }
  }
  // Text nodes on the same line can differ by a pixel or two
  const sorted = [...tops].sort((a, b) => a - b);
  return sorted.filter((t, i) => i === 0 || t - sorted[i - 1] > 4).length;
}
