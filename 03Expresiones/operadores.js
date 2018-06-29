function incrementos(){
    let x = 23
    let y
    y = ++x // x= x+1 y luego y=x
    y = x++ // y=x y luego x= x+1
    console.log(x++)
    console.log(x)

    y =--x // x= x-1 y luego y=x
    y = x-- // y=x y luego x= x-1 
    console.log(x--)
    console.log(x)
}
incrementos()

function asignaciones () {
    let x = 2
    x += 1 // x = x + 1
    x -= 1 // x = x - 1
    x *= 3 // 
    x /= 2 // 
    x %= 2 // 
}

asignaciones()

//EJERCICIO: Funcion para saber si es par 

// !! 
// compruebo si NO eres par - if (num % 2 != 0) <--- No suele usarse nunca , ¿2 es distinto de 0?
// compruebo si SI eres par - if (num % 2 == 0)

//Ver. A
function isPar(a){
    let isPar = true
    if (a % 2 != 0){ // Si a divides por 2 y da 0 eres par
        isPar = false
    }
    return isPar
}
console.log('22 es par', isPar(22))
console.log('25 es par', isPar(25))

// Ver.B - otro modo pero no tan limpio

function esPar (num) {
    let isPar
    if (num % 2 != 0) {
        isPar = false
    } else {
        isPar = true
    }
    return isPar
}
console.log('22 es par?', esPar(22))
console.log('25 es par?', esPar(25))

// Completar Ver.A

function esPar (num) {
    let isPar = true
    if (isNaN(num)) {
        isPar = false
    }
    else if (num === ''){  // === ---> mismo valor y mismo tipo
        isPar = false
    }
    else if (num % 2) {
        isPar = false
    } 
    return isPar
}

// Versión limpia de la Ver.A completa REFRACTORIZACIÓN:
// Reestructurar un código, alterando su estructura interna sin cambiar la externa.

function esPar (num) {
    let isPar = true
    if (typeof num != 'number'|| (num % 2)) {
        isPar = false
    } 
    return isPar
}
console.log('22 es par', isPar(22)) // true
console.log('25 es par', isPar(25)) // false
console.log('0 es par?', esPar(0)) // true
console.log('Pepe es par?', esPar('Pepe')) // false
console.log('"" es par?', esPar('')) // false
console.log(' es par?', esPar()) // false
console.log('true es par?', esPar(true)) // false
console.log('false es par?', esPar(false)) // true


// !!! explicacion
// console.log(string(22)) <--- Casting, combiertelo en string
// console.log(number('22')) <--- Casting, combiertelo en number


// !!! casting booleano

// falsy: <--- aquellos elementos que cuando haces casting a boolean te dan false
// false
// 0
// ''
// undefined - let x = undefined

console.log(Boolean(false))
console.log(Boolean(0))
console.log(Boolean(''))
console.log(Boolean(undefined))

// truly <--- aquellos elementos que cuando haces casting a boolean te dan true
// true
//1,2,3,4...
//'Pepe'
console.log(Boolean(true))
console.log(Boolean(109))
console.log(Boolean('Pepe'))


//ATENCION: Todo dentro de (if) lo hace booleano

// b == 0 si algo es igual a 0 -> (!b)
// b! = 0 si algo no es igual a 0 -> (b)

/*  
    let a = 'Juan'
    let b = 0
    compruebo si b == 0
    if (!b) {
        a = 'Pepe'
    }
    console.log(a)
    b = 4
    compruebo si b != 0
    if (b) {
        a = 'Luis'
    }
    console.log(a) 
*/
