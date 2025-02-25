// @ts-check
import { test, expect } from '@playwright/test';

test('Ingresar al login de instituto wweb2', async ({ page }) => {
    await page.goto('https://institutoweb.com.ar/test/Login2.html')
    await page.locator('#tuusuario').fill('Nico');
    await page.waitForTimeout(2000)
    await page.locator('input[name="tuclave"]').fill('1234');
    await page.waitForTimeout(2000)
    await page.locator('#tumail').fill('cualquiera@gmail.com');
    await page.waitForTimeout(2000)
    await page.getByRole('button', { name: 'Ingresar' }).first().click();
    await page.waitForTimeout(2000)
    await page.getByRole('link', { name: 'Cerrar Sesión' }).click();
}
);
test('Presionar sobre el segundo boton Ingresar', async ({ page }) => {
    await page.goto('https://institutoweb.com.ar/test/Login2.html')
    await page.locator('#tuusuario').fill('Nico2');
    await page.waitForTimeout(2000)
    await page.locator('input[name="tuclave"]').fill('1234');
    await page.waitForTimeout(2000)
    await page.locator('#tumail').fill('cualquiera@gmail.com');
    await page.waitForTimeout(2000)
    await page.getByRole('button', { name: 'Ingresar' }).nth(1).click();
    await page.waitForTimeout(2000)
    await page.getByRole('link', { name: 'Cerrar Sesión' }).click();

})
test('Presionar sobre el tercer boton ingresar', async ({ page }) => {
    await page.goto('https://institutoweb.com.ar/test/Login2.html')
    await page.locator('#tuusuario').fill('Nico');
    await page.waitForTimeout(2000)
    await page.locator('#tuusuario').clear();
    await page.waitForTimeout(2000)
    await page.locator('#tuusuario').fill('Nico_3');
    await page.waitForTimeout(2000)
    await page.locator('input[name="tuclave"]').fill('1234');
    await page.waitForTimeout(2000)
    await page.locator('#tumail').fill('cualquiera@gmail.com');
    await page.waitForTimeout(2000)
    await page.locator('#btningresar').click();
    await page.waitForTimeout(2000)
    await page.getByRole('link', { name: 'Cerrar Sesión' }).click();
})


