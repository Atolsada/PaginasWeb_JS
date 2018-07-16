// REPASO EN HARDMODE - SPEEDRUN


// let o = {} // Asignacion de variable

// *---------*


// function algo(x){}
// let = o {}
// algo(o) //invocas la funcion algo

// *---------*


// function algo(x){}
// let = o {}
// algo(o) // paso
// algo({}) // invoco y paso

// *---------*


// function algo(x){}
// let = o {
//     let o1:{} //añadir propiedad
// }
// algo(o)

// *---------*


// function algo(x){}
// let o = function() { // como e sobjeto añadimos una funcion
//     let o1:function (){} // funcion dentro de funcion o (solo existe dentro)
// }
// algo(o) // a algo le pasas la funcion, callback

// *---------*


// function algo(x){}
// let o = function() { 
//     let o1:function (){}
// }
// algo(function(){} // a algo le pasas la funcion anonima

// ****--------------------------------------****


//FORMAS DE CREAR FUNCIONES - ambas son iguales de validas

// suma(a, b)<--- se le llama signatura
// modo 1 - tipica - funcion declarativa/declaracion por declaracion
function suma1(a, b){
    return a+b
}

//modo 2 - inevitable por ser objeto - funcion por asignacion
let suma2 = function (a, b){
    return a+b
}
console.log (suma1(5, 6));
console.log (suma2(5, 6));

//OTRO MOD PERO PARA ES6
// ES6 Funciones Arrow o Lambdas (a partir de EcmaScript 6)
// se usan principalmente para crear funciones anonimas para los callbacks

let suma3a = (a, b) => {return a+b}
let suma3b = (a, b) => a+b 
// (suma3b) es igual que (suma3a), si es inline se sobreentiende el return y tambien se puede quitar las llaves
// Cuando solo hay un parametro tambien se puede quitar los parentesis
let cuadrado = a => a*a


//ARRAYS

/*          notas
alumnos     0   1   2
        0   10  7   8
        1   5   4   7
        2   6   3   2 */

    //¿cómo sacar la nota del examen 1 del alumno 1 (como si jugasemos a los barcos)
let aNotas = [[10, 7, 8], [5, 4, 7], [6, 3, 2]];
console.log(aNotas[1][1]);

//un array en un array (la posicion 5 se ven dos por que es el array dentro de otro)

//  aNombres = ['Pepe', 'Luis', 'Arancha', 'Rosa', 'Maria', 'Juan']
//  aNombres.push(...['Lorenzo', 'Herminia'])
//  console.log(aNombres)

// RECORER EL ARRAY, RECORRER - FOR

//  Te va diciendo ordenadamente los nombres de aNombres(i) cada vuelta
//  let aNombres = ['Pepe', 'Luis', 'Arancha', 'Rosa', 'Maria', 'Juan']
//      for (let i = 0; i < aNombres.length; i++) {
//          const item = aNombres[i];
//          console.log(item)
//      }

// SE USA ESTE METODO MEJOR, NO EL DE ARRIBA

//  let aNombres = ['Pepe', 'Luis', 'Arancha', 'Rosa', 'Maria', 'Juan', 'Rosa']

//  aNombres.forEach(
        // function(item){console.log('El usuario se llama: ', item)} (mejor escrito debajo)
//      console.log (`El usuario ${i} se llama: ${item}`)
//  )

// EN DEFINITIVA - bien escrito y como tendria que quedar
// for.each no es un bucle

//  let aNombres = ['Pepe', 'Luis', 'Arancha', 'Rosa', 'Maria', 'Juan', 'Rosa']

//      aNombres.forEach(
//          function(item, i){
//          console.log (`El usuario ${i+1} se llama: ${item}`)}
//      )

// MODO ARROW

let aNombres = ['Pepe', 'Luis', 'Arancha', 'Rosa', 'Maria', 'Juan', 'Rosa']

    aNombres.forEach(
        (item, i) => console.log (`El usuario ${i+1} se llama: ${item}`)
    )


// ejemplo con numbers
// el array al finalizar vale lo mismo que al inicio, foreach no edita el array
let aNumbers = [ 2, 5, 7, 8, 9]
aNumbers.forEach(
    (item) => {
        let cuadrado = item*item
        console.log (`El cuadrado ${item} vale: ${cuadrado}`)
    }
)


// MAP - Transforma y guarda lo que devuelve la funcion callback

// let aCuadrados = aNumbers.map(
//     (item) => {return item*item}
// )
// console.log(aCuadrados)

//PREGUNTA DE EXAMEN - ¿COMO HACEMOS EL CLON?

// let aNumbersClon = aNumbers  - 2 referencias apuntando al mismo objeto, ASI NO SE HACE EL CLON

// let aNumbersClon = aNumbers.map(item => item)
// console.log('Esto es aNumbersClon', aNumbersClon)
// console.log('Esto es aCuadrados',aCuadrados);


// END

let aCuadrados = aNumbers.map(
    (item) => {return item*item}
)
console.log(aCuadrados)

let aNumbersClon = aNumbers.map(item => item)

aNumbersClon.pop()
console.log('Esto es aNumbersClon', aNumbersClon);
console.log('Esto es aCuadrados',aCuadrados)


//FILTER - no transforma nada, filtra.
//Ejemplo Array con numeros pares

// en este caso será booleana la funcion

let aPares = aNumbers.filter(
(item) => {
        if (item % 2 == 0) {
            return true
        } else{
            return false
        }
   }
)

console.log(aPares)

// BIEN ESCRITO

// ! = not

// item = 2
// !(item % 2) -> true
// item = 5
// !(item % 2) -> false


let aImpares = aNumbers.filter(
    (item) => {return !!(item % 2)}
)
   
console.log(aImpares)


// EJERCICIO

let aNombres = ['Pepe', 'Luis', 'Arancha', 'Rosa', 'Maria', 'Juan']
    aPersonas