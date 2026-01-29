import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class BookStorePage extends BasePage {
  private readonly userAccount: Locator;

  constructor(page: Page) {
    super(page);
    this.userAccount = page.locator('#userName-value');
  }
  
  async getUser(): Promise<string> {
    return this.userAccount.innerText();
  }
}
