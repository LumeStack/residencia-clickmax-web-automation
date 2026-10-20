import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly email: Locator;
  readonly password: Locator;
  readonly submit: Locator;
  readonly forgotPassword: Locator;
  readonly emailError: Locator;
  readonly passwordError: Locator;
  readonly loginError: Locator;

  constructor(private readonly page: Page) {
    this.email = page.getByTestId('login-email-input');
    this.password = page.getByTestId('login-password-input');
    this.submit = page.getByTestId('login-submit-button');
    this.forgotPassword = page.getByTestId('login-forgot-password-button');
    this.emailError = page.getByTestId('login-email-error');
    this.passwordError = page.getByTestId('login-password-error');
    this.loginError = page.locator('[data-cy="error-text"]');
  }

  async goto(): Promise<void> {
    await this.page.goto('/login');
  }

  async login(email: string, password: string): Promise<void> {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.submit.click();
  }
}