

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

// window.addEventListener('load', main)

//o window o document, no pueden estar ambos

//-------------------------------------------------//

function despedir(user) {
    console.log(`Adios, amigo`)
}
function main(){
    document.querySelector('#btnDespedir')
    .addEventListener('click', despedir)
}


//----------------------------------//

document.addEventListener('DOMContentLoaded', main)




//----------ARREGLA ESTO-------------////

// debajo bien, comprueba arriba

function saludar() {
    console.log(`Hola Mundo`)
}

function despedir() {
    console.log(`Adiós Mundo Cruel`)
}

function main() {
    document.querySelector('#btnSaludar')
    .addEventListener('click',saludar)

    document.querySelector('#btnDespedir')
    .addEventListener('click', despedir)
}

document.addEventListener('DOMContentLoaded', main)