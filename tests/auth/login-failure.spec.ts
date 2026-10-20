import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';
import { env } from '../../src/config';

test.describe('Login com senha incorreta', { tag: ['@regression', '@safe'] }, () => {
    test('mostra erro e permanece na tela de login', async ({ page }) => {
        const login = new LoginPage(page);
        await login.goto();

        await login.login(env('CLICKMAX_EMAIL'), 'senha-incorreta-123');
        await expect(login.loginError).toBeVisible();
        await expect(login.loginError).toHaveText('Nome de usuário ou senha incorretos.');

        await expect(page).toHaveURL(/login/);
    });
});