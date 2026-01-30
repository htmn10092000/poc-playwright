import { Page } from '@playwright/test';

export async function safeClosePage(page?: Page) {
  if (page && !page.isClosed()) {
    await page.close();
  }
}
