import { Page, Locator } from '@playwright/test';

export class DashPage {
  readonly userMenu: Locator;

  constructor(page: Page) {
    this.userMenu = page.getByTestId('profile-menu-trigger-header');
  }
}