import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { users } from '../../test-data/users';

test('authenticate user', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('/login');
    await loginPage.login(users.username, users.password);
    await page.waitForLoadState('domcontentloaded');
    await page.waitForURL(/profile/);

  // lưu session
  await page.context().storageState({
    path: 'playwright/.auth/user.json',
  });
});
