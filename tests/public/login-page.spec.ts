import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';

test.describe('Página de login', { tag: ['@smoke', '@safe'] }, () => {
  test('exibe os campos e ações principais', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();

    await expect(page).toHaveURL(/\/login/);
    await expect(login.email).toBeVisible();
    await expect(login.password).toBeVisible();
    await expect(login.submit).toBeVisible();
    await expect(login.forgotPassword).toBeVisible();
  });
});