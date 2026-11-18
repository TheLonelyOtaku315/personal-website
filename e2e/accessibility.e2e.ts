import { expect, test } from '@playwright/test';
import { openSite } from './helpers';

test.describe('mobile menu', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await openSite(page, 'en');
  });

  test('opened from the keyboard, focus moves in and Escape brings it back', async ({
    page,
  }) => {
    const menuButton = page.locator('.menu-btn');
    const menu = page.locator('#sidebar');
    await menuButton.focus();
    await page.keyboard.press('Enter');
    await expect(menu).toHaveClass(/\bopen\b/);
    await expect(page.locator('.nav-links a').first()).toBeFocused();

    await page.keyboard.press('Escape');
    await expect(menu).not.toHaveClass(/\bopen\b/);
    await expect(menuButton).toBeFocused();
  });

  test('tabbing past the last item closes it', async ({ page }) => {
    const menu = page.locator('#sidebar');
    await page.locator('.menu-btn').focus();
    await page.keyboard.press('Enter');
    await menu.locator('button').last().focus();
    await page.keyboard.press('Tab');
    await expect(menu).not.toHaveClass(/\bopen\b/);
  });

  test('a tap or click leaves no focus on the button', async ({ page }) => {
    const menuButton = page.locator('.menu-btn');
    const menu = page.locator('#sidebar');
    await menuButton.click();
    await expect(menu).toHaveClass(/\bopen\b/);
    await expect(menuButton).not.toBeFocused();
    await menuButton.click();
    await expect(menu).not.toHaveClass(/\bopen\b/);
  });
});

// Never fills the whole form, so nothing is ever sent
test.describe('contact form', () => {
  test('shows errors under the fields and focuses the first one', async ({ page }) => {
    await openSite(page, 'en');
    const name = page.locator('#name');
    await page.locator('app-contact-section form button[type=submit]').click();

    await expect(name).toBeFocused();
    await expect(name).toHaveAttribute('aria-invalid', 'true');
    await expect(name).toHaveAttribute('aria-describedby', 'name-error');
    await expect(page.locator('#name-error')).toHaveText('Name is required');
    await expect(page.locator('#consent-error')).toBeVisible();
    await expect(page.locator('.toast')).toHaveCount(0);

    // Errors update as the visitor fixes things
    await name.fill('Tonny');
    await expect(page.locator('#name-error')).toHaveCount(0);
    await page.locator('#email').fill('not-an-email');
    await expect(page.locator('#email-error')).toHaveText(
      'Please enter a valid email address',
    );
  });
});
