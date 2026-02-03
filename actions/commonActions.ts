import { Page, expect, Response, Locator } from "@playwright/test";

export class CommonActions {
  constructor(private readonly page: Page) {}

  async click(locator: Locator) {
    await locator.click();
  }

  async clearAndType(locator: Locator, value: string) {
    await locator.clear();
    await locator.fill(value);
  }

  async pressEnter(locator: Locator) {
    await locator.press("Enter");
  }

  async waitForHidden(locator: Locator) {
    await expect(locator).toBeHidden();
  }

  async waitForEnabled(locator: Locator) {
    await expect(locator).toBeEnabled();
  }

  async waitForLabelVisible(text: string) {
    await expect(this.page.getByText(text)).toBeVisible();
  }

  async waitForApi(urlPart: string, status = 200): Promise<Response> {
    return await this.page.waitForResponse(
      (res) => res.url().includes(urlPart) && res.status() === status
    );
  }

  async isVisible(locator: Locator): Promise<boolean> {
    return locator.isVisible();
  }

  async getText(locator: Locator): Promise<string> {
    return locator.innerText();
  }
}
