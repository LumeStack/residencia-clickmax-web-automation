import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../src/pages/LoginPage';
import { DashPage } from '../../../src/pages/DashPage';
import { env } from '../../../src/config';


test.describe('cria produto', { tag: ['@smoke', '@safe'] }, () => {
    test('entra no sistema com o usuário de teste e cria um produto', async ({ page }) => {
        const login = new LoginPage(page);
        const dash = new DashPage(page);
        await login.goto();
    
    
        await login.login(env('CLICKMAX_EMAIL'), env('CLICKMAX_PASSWORD'));
        await expect(dash.userMenu).toBeVisible({timeout: 15000});