//  Process para node es como windows para el navegador de Internet
//  hay algunas cosas iguales en ambas como TimeOut, pero otras no como alert.


//  EJEMPLO 1
//  THIS -> ejemplo global

/* 
console.log (this)

function prueba(){
    console.log(this)
}

prueba() */


//  EJEMPLO 2
//  THIS -> apunta al objeto
//  Cuando ejecutamos un metodo de un objeto, this es el objeto que esta ejecutando:
//  { nombre: 'Pepe', mostrar: [Function: mostrar] } this, es el objeto o

/* 
let o = {
    nombre: 'Pepe',
    mostrar: function(){
        console.log(this)
    }
}

o.mostrar() */


//  EJEMPLO 3
//  La funcion no es constructora por si misma, se hace constructora cuando le pones new por delante
//  la funcion constructora al poner new por delante generan un nuevo objeto y hacen referencia a él mediante this
//  Primero crea el objeto y luego ejecuta el codigo donde this es el objeto que acaba de crear
//  Crea Cosa rara y ejecuta lo que hay dentro, como no hay nada sale {}
function CosaRara(){
    console.log(this)
}

new CosaRara()
// new es un operador.


//EJEMPLO 4

// THIS -> quien yo decida
// call() / apply()
