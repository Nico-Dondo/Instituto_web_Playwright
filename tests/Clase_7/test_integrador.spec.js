import { test, expect } from '@playwright/test';

test.describe('Pruebas de Login', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://saucedemo.com');
    });

    test('test de login', async ({ page }) => {
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        await expect(page.getByText('Swag Labs')).toBeVisible();
        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.locator('[data-test="logout-sidebar-link"]').click();
    });

    test('Otro test', async ({ page }) => {
        await page.locator('[data-test="username"]').fill('locked_out_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        await expect(page.getByText('Epic sadface: Sorry, this user has been locked out')).toBeVisible()
    });

    test('Pruebas de mensajes de error sin completasr campos en el login', async ({ page }) => {
        var texto_sin_pass = await page.locator('div').filter({ hasText: /^Epic sadface: Password is required$/ })
        await page.locator('[data-test="username"]').fill('cualquier usuario');
        await page.locator('[data-test="login-button"]').click();
        await expect(texto_sin_pass).toHaveText(/Epic sadface/)
    })
    
    test('Prueba de titulo', async ({ page }) => {
        var texto_pagina = await page.getByText('Swag Labs');
        var texto_compras = await page.locator('[data-test="title"]');
        var texto_card_bicicleta = await page.getByText('A red light isn\'t the desired')
        await expect(texto_pagina).toHaveText('Swag Labs');
        await page.locator('[data-test="username"]').fill('visual_user');
        await page.locator('[data-test="password"]').fill('secret_sauce')
        await page.locator('[data-test="login-button"]').click();
        await expect(texto_compras).toHaveText(/Products/);
        await expect(texto_card_bicicleta).toContainText('battery included');
        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.locator('[data-test="logout-sidebar-link"]').click();
    })
    
})