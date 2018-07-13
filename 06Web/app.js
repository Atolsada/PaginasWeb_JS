

function saludar(user) {
    console.log(`Hola Mundo`)
}

/* console.dir(document.querySelector('#title')) */
//document.querySelector('#btnSaludar') <--- Buscame el btnSaludar
//.addEventListener('click', saludar)  <--- Ejecuta lo que este en la funcion saludar
/* addEventListener(cual evento y cual funcion) */


// una manera de hacerlo
/* window.addEventListener('load', function(){
    document.querySelector('#btnSaludar')
    .addEventListener('click', saludar)
}) */

// Otra manera de hacerlo

function main(){
    document.querySelector('#btnSaludar')
    .addEventListener('click', saludar)
}

window.addEventListener('load', main)