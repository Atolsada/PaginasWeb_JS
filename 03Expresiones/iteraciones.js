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

/** "ficha de la funcion"
* @param num: number
* @return factorial: number
*/

function factorial(num){
    let factorial = 1
    for (let i = 1; i <= num; i++) {
        factorial = factorial * i
    }
    return factorial
}

// Inverso
function factorialm(num){
    let f = 1
    for (let i = num; i > 0; i--) {
        f = f * i
    }
    return f
}

console.log(factorial(5)) //<--- 120
console.log(factorialm(5)) //<--- 120

// Que me devuelva un numero que es la suma del array¿?

function totalizar(aDatos){
    let num = 1
    for (let i = 0; i < aDatos[i]; i++) {
        num = aDatos[i];
        
    }
    return num
}

aDatos = [2,3,5,7]

console.log(`El total es ${totalizar(aDatos)}`)

// Leer array - usuario X es el 1, el usuario y es el 2, etc.

function leerArray(aDatos) {
    let r = ''
     for (let i = 0; i < aDatos.length; i++) {
        r += `
        El usuario ${i+1} es ${aDatos[i]}`
    }
    return r
}

let aNombres = ['Pepe', 'Rosa', 'Luis', 'Maria']
console.log(leerArray(aNombres))