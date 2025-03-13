import { test, expect } from '@playwright/test'; //para este tipo de pruebas se tiene que instalar mysql por ej (npm i mysql)
const fs = require('fs');
const mysql = require('mysql2/promise');//libreria que permite conexion con BBDD

//Configuracion de la conexion
const connectionConfig = ({
    host: 'cursotesting.com.ar',
    user: 'testing',
    password: 'cursoperformance',
    database: 'productos'
})


var precio_comparativo

test('test', async ({ page }) => {
    //Conexion a la base de datos de manera asincronica
    const connection = await mysql.createConnection(connectionConfig)

    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="firstName"]').click();
    await page.locator('[data-test="firstName"]').fill('Nico');
    await page.locator('[data-test="lastName"]').fill('Dondo');
    await page.locator('[data-test="postalCode"]').fill('1682');
    await page.locator('[data-test="continue"]').click();

    var nombre_obtenido = await page.locator('#item_4_title_link > div').textContent()
    var precio = await page.locator('[data-test="subtotal-label"]').textContent();
    console.log("El producto es:" + nombre_obtenido)
    console.log("El precio es:" + precio)

    const busqueda = "SELECT precio FROM ecommerce WHERE nombre='" + nombre_obtenido + "'"
    const [results] = await connection.execute(busqueda)
    precio_comparativo = results[0].precio
    console.log(busqueda)
    console.log("El precio de la base de datos es " +  precio_comparativo)
    await page.locator('[data-test="finish"]').click();
    await page.locator('[data-test="back-to-products"]').click();
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.locator('[data-test="logout-sidebar-link"]').click();
});