// ITERACIONES

// for
// while
// do

function iterar (){
    for (let i = 0; // <--- contador
        i < 3; // <--- hasta cuando/límite/haz lo que te digo mientras...
        i++) { // <--- 
        console.log(`Soy la vuelta ${i}`); // si ponemos i+1, empezaría por el 1 a contar, no por el 0
    }
}

function iterarInversa () { // <--- contar al revés
    for (let i = 3; i > 0; i--) {
        console.log(`Soy la vuelta ${i}`)
    }0
}

iterar()
iterarInversa()

// EJERCICIO
// Producto de un número por todos los que le preceden
// factorial de 5 [5! = 5*4*3*2*1] ó [5! = 1*2*3*4*5]

// Cuando creamos una funcion tenemos que tener presente qué parámetros recibe y que valor
// param y return

function factorial(){}