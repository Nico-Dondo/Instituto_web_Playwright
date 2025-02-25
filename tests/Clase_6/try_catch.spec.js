import { test, expect } from '@playwright/test';
   
    test('Test Principal', async ({ page }) => {
        await page.goto('https://mercadolibre.com.ar')

    try{    // probá el siguiente código
        //await page.locator('#boton-inexistente').click({timeout:1000});
        await page.click('#boton-inexistente',{timeout:1000})
        console.log('Click realizado correctamente')
    }catch{  // código a ejecutar si hay un error
        console.log('Existió un error')
    }
    console.log('Continúa el test')
    
})
