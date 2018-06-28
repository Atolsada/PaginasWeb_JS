/**
JavaScript (Marca registrada de Oracle) -> ECMAScript es la responsable del standar como CSS/HTMM el W3C
ECMAScript6 - ES6/ES2015

 */
function saludar(pUser) {
    const SALUDO = 'Hola' /* [const] no cambian [var] si y las [const] por convenio va en mayusculas*/
    console.log(SALUDO, pUser)
}
saludar('Pepe') /* Para que invoque la funcion */
saludar('Elena')


/* [let] funciona solo dentro del bloque de la funcion igual que [const], [var] pilla todo dentro de la funcion */
function sumar(a,b){
    let resultado = a+b [let] 
    console.log(resultado)
}
sumar(2,4)


/* - CONSEJOS -
declarar variable
variables globales, caca, no se cambian, 
todas las variables van dentro de una function
todas las variables se declaran
no hay variables globales
 */


 /*HAY QUE FIXEAR ESTO */
sumar (2,4)
dividir(4,2)

function sumar (a, b){
     let resultado = a / b
     console.log(resultado)
 }
function dividir (a,b){
     if (b != 0){
         let resultado = a / b
     }
    console.log(resultado)
 }

 // typeof te dice que tipo de variable es, incluso nos dice que una function es una variable