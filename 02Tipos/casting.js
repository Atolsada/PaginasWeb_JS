/* modificar TEMPORALMENTE/OPERACIONALMENTE los tipos de variable */

function operar(){
    let num1 = '22' // string - va en comillas
    console.log (typeof num1) /* para saber el tipo de variable */
    let num2 = '2'
    console.log (typeof num2)
    let resultado = num1 * num2
    // resultado = number(num1) * number(num2) <- es lo que hace "por debajo"
    console.log(typeof resultado)
}
operar()

// EJEMPLO 1
/* 
function operarCadenas(){
    let num1 = 'Hola'
    console.log (num1, typeof num1)
    let num2 = 'Pepe'
    console.log (num2, typeof num2)
    let resultado = num1 * num2
    console.log(resultado, typeof resultado)
}
operarCadenas() */

// Cuando no se puede convertir 'algo, como el string Pepe' en numero se puede hacer el "numero" NaN(not a number)
/* 
1/0 - infinito
0/1 - 0
0/0 - indeterminado = NaN en JavaScript 
*/

// EJEMPLO 2
/* function operarCadenas(){
    let num1 = 'Hello'
    console.log (num1, typeof num1)
    console.log (isNaN(num1)) // Pregunta: ¿Es un NaN? true/false - boolean
    let num2 = 'Jhon'
    console.log (num2, typeof num2)
    console.log (isNaN(num2))
    let resultado = num1 * num2
    console.log(resultado, typeof resultado)
    console.log (isNaN(resultado))
}
operarCadenas()
 */

//EJEMPLO 3

// [+] positivo, concatenación, suma <-- El orden que está definido en el lenguaje
// mira a los lados para ver si es positivo
// Si tiene string en cualquier lado concatena. (string + num, concatena también)

function sumar(){
    let num1 = '22'
    console.log (num1, typeof num1)
    let num2 = 2
    console.log (num2, typeof num2)
    let resultado = num1 + num2
    // resultado = num1 + string(num2) <- es lo que hace "por debajo"
    console.log(resultado, typeof resultado)
}
sumar()
