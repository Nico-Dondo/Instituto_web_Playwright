import { test, expect } from '@playwright/test';


test('Test visual de una pagina web', async ({ page }) => {
    await page.goto('https://www.institutoweb.com.ar/test/test2024/checkout');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('test-imagen.png');
    //Saca captura de pantalla y la compara con una imagen que en este caso todavia no fue creada
    // tambien se tiene que crear otro archivo para que guarde la captura ua que si se pone todo junto con otra prueba da error.
    //Comando para correr la prueba y que cree el snapshot: npx playwright test fullPage.spec.js --update-snapshots (en este caso ese nombre que es el del archivo)
    //Comando para correr las pruebas de manera individual al tener todo en el mismo archivo o carpeta: npx playwright test Clase_9/fullPage.spec.js
    // Pero si es una pagina que es demasiado larga dentro de screenshot se pone: {fullPage: true}
});

