// @ts-check
import { test, expect } from '@playwright/test';

test('Formulario de usuario y clave', async ({ page }) => {
    await page.goto('https://institutoweb.com.ar/test/login.html')
    await page.locator('#tuusuario').fill('Nico');
    await page.waitForTimeout(2000);
    await page.locator('#tuclave').fill('cualquiera');
    await page.waitForTimeout(2000)
    await page.locator('#tumail').fill('nico@gmail.com');
    await page.waitForTimeout(2000)
    await page.getByRole('button', { name: 'Ingresar' }).press('Enter')
    await page.waitForTimeout(2000);
    const selector = await page.locator('body > h3').textContent()
    console.log(selector)
    expect (selector).toEqual('Acceso correcto!')// asersion para que compare la variable con el texto obtenido
    //await expect(page.getByRole('heading', { name: 'Acceso correcto!' })).toHaveText('Acceso correcto!'); otra forma sin que haga un console log
    await page.getByRole('link', { name: 'Cerrar Sesión' }).click();
    //await page.close()
}
)
