//(1)

// function isPali(){ //<--- funcion booleana lleva nombre booleano

// }

// function prueba(){

// }


//(2)

// function isPali(){

// }

// function prueba(){
//     let texto = 'Hola, no soy palindromo'
//     console.log(isPali(texto))
// }


//(3)

// function isPali(){
    
// }

// function prueba(){
//     let texto = 'Hola, no soy palindromo'
//     console.log(isPali(texto)) //da false
//     texto = 'Hola, soy un palindromo'
//     console.log(isPali(texto)) // da true
// }


//(4)

// function isPali(){
    
// }

// function prueba() {
//     let texto = 'Hola'
//     console.log(isPali(texto)) // falso
//     texto = 'Lorem Rajoy Ipsum mejor para mí el suyo'
//     console.log(isPali(texto)) // falso
//     texto = 'Madre mía como está el patio'
//     console.log(isPali(texto)) // true
//     texto = 'Sometamos o matemos'
// }


//(5)

// function isPali(texto) {

//     let aDatos = texto.split(' ')
//     console.log(aDatos)
// }

// function prueba() {
//     let texto = 'Hola'
//     console.log(isPali(texto)) // falso
//     texto = 'Lorem Rajoy Ipsum mejor para mí el suyo'
//     console.log(isPali(texto)) // falso
//     texto = 'Madre mía como está el patio'
//     console.log(isPali(texto)) // true
//     texto = 'Sometamos o matemos'
// }

// isPali('Hola Amigo')
// prueba()


//(6)

// function isPali(texto) {

    // Array con cada palabra
//     let aDatos = texto.split(' ')
    // Reconstruyo la frase 
//     let frase = aDatos.join('')
    // Array con cada letra
//     aDatos= frase.split()

//     console.log(aDatos)
//     console.log(frase);
// }

// function prueba() {
//     let texto = 'Hola'
//     console.log(isPali(texto)) // falso
//     texto = 'Lorem Rajoy Ipsum mejor para mí el suyo'
//     console.log(isPali(texto)) // falso
//     texto = 'Madre mía como está el patio'
//    console.log(isPali(texto)) // true
//     texto = 'Sometamos o matemos'
// }

// isPali('Hola Amigo')
// prueba()


//(7)

// function isPali(texto) {

//     let aDatos = texto.split(' ')
//     let frase = aDatos.join('')
//     aDatos= frase.split('')
    // Clon del array con cada letra
//     aClon = aDatos.

//     console.log(aDatos)
//     console.log(frase);
// }

// function prueba() {
//     let texto = 'Hola'
//     console.log(isPali(texto)) // falso
//     texto = 'Lorem Rajoy Ipsum mejor para mí el suyo'
//     console.log(isPali(texto)) // falso
//     texto = 'Madre mía como está el patio'
//     console.log(isPali(texto)) // true
//     texto = 'Sometamos o matemos'
// }

// isPali('Hola Amigo')
// prueba()


//(8)

function isPali(texto) {

    let aDatos = texto.split(' ')
    let frase = aDatos.join('')
    aDatos= frase.split('')
    aClon = aDatos.join('|').split('|')
    // Clon del array al reves
    aClon.reverse()
    // frase invertida
    let alReves = aClon.join('')

    let result
    // comparacion
     if (frase.toUpperCase() === alReves.toUpperCase()) {
        result = true
    }

    console.log(frase);
    console.log(aDatos)
    console.log(aClon)
    console.log(alReves)

}

function prueba() {
    let texto = 'Hola'
    console.log(isPali(texto)) // falso
    texto = 'Lorem Rajoy Ipsum mejor para mí el suyo'
    console.log(isPali(texto)) // falso
    texto = 'Madre mía como está el patio'
    console.log(isPali(texto)) // true
    texto = 'Sometamos o matemos'
}

// isPali('Hola amigo')
prueba()


//(9)

function isPaliShort(texto) {
    let result = false
    // comparacion
    if (texto.split(' ').join('').toUpperCase() 
            === texto.split(' ').join('').split('').reverse().join('').toUpperCase()) {
        result = true
    }

    //console.log(frase);
    //console.log(aDatos)
    //console.log(aClon)
    //console.log(alReves)

    return result
}


function prueba() {
    let texto = 'Hola'
    console.log(isPali(texto)) // false
    texto = 'Lorem Rajoy Ipsum mejor para mí el suyo'
    console.log(isPali(texto)) // false
    texto = 'Madre mía como está el patio'
    console.log(isPaliShort(texto)) // true
    texto = 'Sometamos o matemos'
    console.log(isPali(texto)) // true
}

// isPali('Hola Amigo')
prueba()