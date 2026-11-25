import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';

test.describe('Página de login', { tag: ['@smoke', '@safe'] }, () => {
  test('exibe os campos e ações principais em cada etapa', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();

    await expect(page).toHaveURL(/\/login/);
    await expect(login.email).toBeVisible();
    await expect(login.submit).toBeVisible();

    // O novo fluxo de login exibe primeiro a etapa de e-mail.
    // Os controles de senha permanecem ocultos nesta etapa.
    await expect(login.password).toBeHidden();
    await expect(login.forgotPassword).toBeHidden();

    await login.continueWithEmail('nao-existe-fulano@example.com');

    await expect(login.password).toBeVisible();
    await expect(login.submit).toBeVisible();
    await expect(login.forgotPassword).toBeVisible();
  });

  test('exibe erro ao enviar e-mail vazio', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();

    await expect(login.emailError).not.toBeVisible();
    await login.submit.click();

    // A etapa inicial valida apenas o e-mail.
    await expect(login.emailError).toBeVisible();
    await expect(login.emailError).toHaveText('Insira o seu e-mail');
    await expect(login.passwordError).toBeHidden();
    await expect(page).toHaveURL(/\/login/);
  });

  test('exibe erro ao enviar sem senha', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();

    await login.continueWithEmail('nao-existe-fulano@example.com');
    await expect(login.password).toBeVisible();

    await expect(login.passwordError).not.toBeVisible();
    await login.submit.click();

    await expect(login.passwordError).toBeVisible();
    await expect(login.passwordError).toHaveText('Insira a sua senha');
    await expect(page).toHaveURL(/\/login/);
  });
});
