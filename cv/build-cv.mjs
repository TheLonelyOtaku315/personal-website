// Prints cv-en.html and cv-fr.html to PDF with headless Chrome (or Edge)
// and copies them into the website's assets.
//
//   node cv/build-cv.mjs
//
// Needs an internet connection the first time so Chrome can load the Amiri
// font from Google Fonts.
import { execFileSync } from 'node:child_process';
import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const assets = resolve(here, '../src/assets/doc');
const outDir = join(here, 'out');

const browsers = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean);

const browser = browsers.find((p) => existsSync(p));
if (!browser) {
  console.error('Chrome/Edge not found. Set CHROME_PATH to its executable.');
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });

const jobs = [
  { src: 'cv-en.html', pdf: 'Tonny-Zhao-CV-EN.pdf', copies: ['Tonny-Zhao-Resume-CV.pdf'] },
  { src: 'cv-fr.html', pdf: 'Tonny-Zhao-CV-FR.pdf', copies: [] },
];

for (const { src, pdf, copies } of jobs) {
  const out = join(outDir, pdf);
  execFileSync(browser, [
    '--headless=new',
    '--disable-gpu',
    '--no-pdf-header-footer',
    '--virtual-time-budget=15000',
    `--print-to-pdf=${out}`,
    pathToFileURL(join(here, src)).href,
  ], { stdio: 'inherit' });

  for (const name of [pdf, ...copies]) {
    copyFileSync(out, join(assets, name));
  }
  console.log(`${src} -> src/assets/doc/${[pdf, ...copies].join(', ')}`);
}
