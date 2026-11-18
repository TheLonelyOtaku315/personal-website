// Renders og/og-image.html to src/assets/img/og-image.png (1200x630),
// the picture shown when the site link is shared.
// Usage: node og/build-og-image.mjs   (needs `npx playwright install chromium` once)
import { chromium } from '@playwright/test';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const source = pathToFileURL(path.join(here, 'og-image.html')).href;
const output = path.join(here, '..', 'src', 'assets', 'img', 'og-image.png');

const browser = await chromium.launch();
try {
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  await page.goto(source, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: output, type: 'png' });
  console.log(`Wrote ${path.relative(process.cwd(), output)}`);
} finally {
  await browser.close();
}
