import { test, expect } from '@playwright/test'
import fs from 'fs/promises'

test.describe('Prueba de archivos', () => {
    var usuarios // crea la variable usuario para poder usarla donde corresponda

    test.beforeAll('Conexion con el archivo Json', async () => {
        var muestras = await fs.readFile('datos_usuario.csv', 'utf8')// relacion con el archivo de datos en formato CSV
        usuarios = muestras.toString().split('\n')//toma los datos del archivo csv y los convierte a string
        usuarios = usuarios.slice(1)// saltea la primera linea de archivo csv

    })
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.institutoweb.com.ar/test/login.html');
    })
    test('test principal', async ({ page }) => {
        for (var linea of usuarios){// separar los datos de user, pass e email
            var [usuario, clave, email] = linea.split(',')
        await page.locator('#tuusuario').fill(usuario);
        await page.locator('#tuclave').fill(clave);
        await page.locator('#tumail').fill(email);
        await page.getByRole('button', { name: 'Ingresar' }).click();
        await expect (page.getByRole('link', { name: 'Cerrar Sesión' })).toBeVisible({timeout:80000});
        await page.getByRole('link', { name: 'Cerrar Sesión' }).click();
        }   
    });
})
