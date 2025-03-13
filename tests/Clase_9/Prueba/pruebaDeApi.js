//import { test, expect } from '@playwright/test';
//Primero como archivo js solamente
//https://cursotesting.com.ar/phpmyadmin/ 
//Datos de esta prueba usuario: testing
// clave: cursoperformance
// base de datos : productos
// tabla: commerce
// instalar  npm i mysql2 
const mysql = require('mysql2')// variable para llamar a la base de datos
//Variable de abajo para conectar a la base de datos de esta prueba
const connection = mysql.createConnection({
    host: 'cursotesting.com.ar',
    user: 'testing',
    password: 'cursoperformance',
    database: 'productos'
})
connection.connect(err => {
    if (err) {
        console.log("Error al conectarse a la base de datos")
    }
    else {
        console.log("Te conectaste correctamente")
    }
    var busqueda = "SELECT precio FROM ecommerce WHERE nombre = 'Sauce Labs Fleece Jacket'"
    connection.query(busqueda, (err, results) => {
        if (results.length > 0) { //longitud es mayor a 0 entonces en la linea de abajo crea la variable precio y guarda el valor
            var mi_precio = results[0].precio
            console.log(mi_precio) //muestra el precio
        } else {
            console.log('No se encuentra el producto')

        }
    })
})

// Comando para conectarse desde el archivo raiz: PS C:\Users\Nicolas\Desktop\Nico\Instituto Web\Playwright> node tests/Clase_9/Prueba/pruebaDeApi.js