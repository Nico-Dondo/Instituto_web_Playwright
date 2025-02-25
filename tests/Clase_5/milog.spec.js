import { test, expect } from '@playwright/test';
const fs = require('fs'); // Importamos la librería de file system Función para escribir en un archivo log
function escribe_Log(mensaje) {
    var fecha_hora = new Date() ///Funcion para recibir la fecha y la hora computadora actual!!!
    fs.appendFileSync('testing.log', fecha_hora + "-" + mensaje + '\r\n'); // Escribe el mensaje en el log con salto de línea
}

test('Agregar datos a un archivo', async ({ page }) => {
    escribe_Log('Inicio de test');
    
    await page.goto('https://institutoweb.com.ar/test/login.html');
    escribe_Log('Cargo la página');

    var titulo = await page.title();
    expect(titulo).toBe('Acceso al sistema');

    escribe_Log('El título es correcto');
    escribe_Log('Terminó el test');
});

