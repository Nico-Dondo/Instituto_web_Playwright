import { test, expect } from '@playwright/test'
import fs from 'fs/promises'

test.describe('Prueba de archivos', () => {
    var usuarios // crea la variable usuario para poder usarla donde corresponda

    test.beforeAll('Conexion con el archivo Json', async () => {
        var muestras = await fs.readFile('datos.json')// relacion con el archivo datos.json
        usuarios = JSON.parse(muestras)//toma los datos del archivo json

    })
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.institutoweb.com.ar/test/login.html');
    })
    test('test principal', async ({ page }) => {
        for (var{usuario, clave, email} of usuarios){// separar los datos de user, pass e email
        await page.locator('#tuusuario').fill(usuario);
        await page.locator('#tuclave').fill(clave);
        await page.locator('#tumail').fill(email);
        await page.getByRole('button', { name: 'Ingresar' }).click();
        await expect (page.getByRole('link', { name: 'Cerrar Sesión' })).toBeVisible({timeout:30000});
        await page.getByRole('link', { name: 'Cerrar Sesión' }).click();
        }   
    });
})
