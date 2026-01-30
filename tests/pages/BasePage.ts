import { Page, Locator, expect } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // ---------- Navigation ----------
  async goto(url: string): Promise<void> {
    await this.page.goto(url, { waitUntil: 'networkidle' });
  }

  async reload(): Promise<void> {
    await this.page.reload({ waitUntil: 'networkidle' });
  }

  // ---------- Locators ----------
  getByTestId(testId: string): Locator {
    return this.page.getByTestId(testId);
  }

  getByRole(role: any, options?: object): Locator {
    return this.page.getByRole(role, options);
  }

  // ---------- Actions ----------
  async click(locator: Locator): Promise<void> {
    await locator.waitFor({ state: 'visible' });
    await locator.click();
  }

  async fill(locator: Locator, value: string): Promise<void> {
    await locator.waitFor({ state: 'visible' });
    await locator.fill(value);
  }

  // ---------- Assertions ----------
  async expectVisible(locator: Locator): Promise<void> {
    await expect(locator).toBeVisible();
  }

  async expectText(locator: Locator, text: string): Promise<void> {
    await expect(locator).toHaveText(text);
  }

  // ---------- Utilities ----------
  async waitForUrl(urlPart: string): Promise<void> {
    await this.page.waitForURL(`**/${urlPart}**`);
  }

  async screenshot(name: string): Promise<void> {
    await this.page.screenshot({
      path: `screenshots/${name}.png`,
      fullPage: true,
    });
  }
}
