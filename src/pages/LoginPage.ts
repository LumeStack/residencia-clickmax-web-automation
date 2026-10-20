import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly email: Locator;
  readonly password: Locator;
  readonly submit: Locator;
  readonly forgotPassword: Locator;

  constructor(private readonly page: Page) {
    this.email = page.getByTestId('login-email-input');
    this.password = page.getByTestId('login-password-input');
    this.submit = page.getByTestId('login-submit-button');
    this.forgotPassword = page.getByTestId('login-forgot-password-button');
  }

  async goto(): Promise<void> {
    await this.page.goto('/login');
  }
}