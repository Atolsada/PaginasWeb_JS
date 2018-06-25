/*Tipos de datos

- ELEMENTALES -
    - number
    - string
    - boolean

- REFERENCIADOS - 
    - object

- undefined
*/

// TIPOS ELEMENTALES
// SON INMUTABLES
// SE UTILIZAN POR VALOR

let indice = 1 // creado una variable llamada indice que vale 1
indice = 2

function aumentar(pIndice){
    pIndice += 1
    return pIndice
}
aumentar (indice)
console.log(indice) /* - 2 */

//OPERACIONES CON ELEMENTALES

let a = 5
let b = a
a += 5
console.log (a) /* - 10 */
console.log (b) /* - 5 guarda lo que vale (a) en ese momento, lo que le pase a (a) después le importa un bledo por que operan por valor */

// TIPOS REFERENCIADOS - guarda los datos "en memoria mutable" y en la memoria"normal" guardamos la referencia que llama a esos datos
// SON MUTABLES
// SE UTILIZAN POR REFERENCIA

let oLibro = {
    titulo: 'LOTR',
    indice: 1,
}
console.log(typeof oLibro)
console.log(oLibro) /* { titulo: 'LOTR', indice: 1 } */

oLibro2 = oLibro
oLibro.indice = 2
console.log(oLibro2) /* { titulo: 'LOTR', indice: 2 }  es un mismo (objeto) con 2 referencias */

function aumentarObjeto(pLibro){
    pLibro.indice += 1
    return pLibro.indice
}
aumentarObjeto(oLibro)
console.log(oLibro) /* { titulo: 'LOTR', indice: 3 } es un mismo (objeto) con 3 referencias */