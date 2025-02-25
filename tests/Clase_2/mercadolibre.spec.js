// @ts-check
import {test,expect} from '@playwright/test';

test('ingresar a mercadolibre', async ({ page }) => {
    await page.goto ('https://www.mercadolibre.com.ar');
    await page.getByRole('combobox', { name: 'Ingresá lo que quieras' }).fill('linterna');
    await page.getByRole('button', { name: 'Buscar' }).press('Enter');
})
