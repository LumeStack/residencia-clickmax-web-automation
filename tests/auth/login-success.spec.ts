import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';
import { env } from '../../src/config';

test.describe('Login com credenciais válidas', { tag: ['@smoke', '@safe'] }, () => {
    test('entra no sistema com o usuário de teste', async ({ page }) => {
        const login = new LoginPage(page);
        await login.goto();
        
        await login.login(env('CLICKMAX_EMAIL'), env('CLICKMAX_PASSWORD'));
        await expect(page).toHaveURL(/overview$/);
        await expect(page.getByRole('button', { name: 'Primeiros passos' })).toBeVisible();
    });
});