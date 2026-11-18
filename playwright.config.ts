import { defineConfig, devices } from '@playwright/test';

// Browser checks for layout problems unit tests can't see (overflow,
// wrapping, overlaps) plus keyboard flows. Run with `npm run test:e2e`.
// Files are named *.e2e.ts so Vitest doesn't pick them up.
export default defineConfig({
  testDir: './e2e',
  testMatch: '**/*.e2e.ts',
  fullyParallel: true,
  forbidOnly: !!process.env['CI'],
  retries: process.env['CI'] ? 1 : 0,
  reporter: process.env['CI'] ? [['github'], ['list']] : 'list',
  use: {
    baseURL: 'http://localhost:4200',
    trace: 'retain-on-failure',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    command: 'npx ng serve --port 4200',
    url: 'http://localhost:4200',
    // Reuse a dev server that's already running locally
    reuseExistingServer: !process.env['CI'],
    timeout: 180_000,
  },
});
