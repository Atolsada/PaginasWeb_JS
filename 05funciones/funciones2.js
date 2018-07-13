// Declarar una funcion

function miFuncion(x){
    console.log(x)
}
function calcular(x){
    return 2*x
}


// Declarar/ Asignar (darle valor)

let x =23


// Invocar/ llamar/ ejecutar

miFuncion(23)

// Asignando el resultado de invocar
let z = calcular (12)


// OTRA FORMA DE CREAR FUNCIONES EN JS:
// Por asignacion
// EQUIVALE A fuction otraFuncion(){}

//function otraFuncion(){} <--- es igual que la de abajo, son objetos ambos
let otraFuncion = function(x, y){
    return x*y
}

// algo ({user: 'Pepe', edad: 22})
// {user: 'Pepe', edad: 22} <--- funcion anonima si no tiene nada más


// Ejemplo de CALLBACK - Pasarle a una funcion otra funcion para que la ejecute
function verCalculos(x, y, operacion){
    console.log ('El resultado es ' + operacion (x, y))
}
verCalculos(3, 5, function(a, b){ return a*b})

// CALLBACK con nombre

function sumaCuadrados(x, y){
    return x*x + y*y
}
verCalculos( 2, 5, sumaCuadrados)