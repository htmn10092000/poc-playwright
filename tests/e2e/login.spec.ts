import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { users } from '../../test-data/users';
import { BookStorePage } from '../../pages/BookStorePage';

test('has title', async ({ page }) => {
  await page.goto('/login');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/DEMOQA/);
});

test('login to the system successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const bookStorePage = new BookStorePage(page);
  await page.goto('/login');
  // await loginPage.login(users.username, users.password);
  // await page.waitForLoadState('domcontentloaded');
  expect(await bookStorePage.getUser()).toContain('niho123');
});
