import { test, expect } from '@playwright/test';

test('Test visual de una pagina web', async ({ page }) => {
    await page.goto('https://www.institutoweb.com.ar/test/login.html');
    expect(await page.screenshot()).toMatchSnapshot('test-imagen.png'); //Saca captura de pantalla y la compara con una imagen que en este caso todavia no fue creada
});

