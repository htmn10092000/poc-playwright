import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  private readonly username: Locator;
  private readonly password: Locator;
  private readonly loginButton: Locator;
  private readonly userAccount: Locator;

  constructor(page: Page) {
    super(page);
    this.username = page.locator('#userName');
    this.password = page.locator('#password');
    this.loginButton = page.locator('#login');
    this.userAccount = page.locator('#userName-value');
  }

  async login(user: string, pw: string) {
    await this.fill(this.username, user);
    await this.fill(this.password, pw);
    await this.click(this.loginButton);
  }
}
