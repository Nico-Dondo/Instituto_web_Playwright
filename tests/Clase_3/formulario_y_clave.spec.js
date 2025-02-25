// @ts-check
import {test,expect} from '@playwright/test';

test('Formulario de usuario y clave', async ({ page }) => {
    await page.goto('https://institutoweb.com.ar/test/login.html')
    await page.locator('#tuusuario').fill('Nico');
    await page.waitForTimeout(2000)
    await page.locator('#tuclave').fill('cualquiera');
    await page.waitForTimeout(2000)
    await page.locator('#tumail').fill('nico@gmail.com');
    await page.waitForTimeout(2000)
    await page.getByRole('button', { name: 'Ingresar' }).press('Enter')
    await page.waitForTimeout(2000)
    await page.close()
})
