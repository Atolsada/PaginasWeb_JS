/*  var mi-saludo [kebacase]
    var MiSaludo [Pascalcase]
    var miSaludo [Camelcase] es lo normal por convenio 

var saludo -> declaración de variable 
saludo="hola" -> inicialización de variable

Declaración + Inicialización

Tipos de datos
 - string [hola, pepe]
 - number [2,3,4]
 - booleans [true / false]
 - object [lo que no es lo anterior de los anteriores (un conjunto de propiedades)]
 - undefined [que no esta definido, no vale nada pero si tiene tipo, su tipo es undefined]
 
 **Ejemplos**

 - var user ='Mundo'
 - var edad = 23
 - var estudiante = false
 - var persona = (){     <-También llamado, objeto de notación JSON
     nombre: 'pepe',
     edad: 34,
     isEstudiante: true,
 }
 - var algo 
*/
 
var saludo = 'Hola'
var user = 'Mundo'

console.log (saludo, user)


var nombre ='Mundo'
var edad = 23
var isEstudiante = false
var algo
var persona = {
    nombre: 'pepe',
    edad: 34,
    isEstudiante: true,
}

console.log(saludo, user)
console.log(nombre, typeof nombre)
console.log(edad, typeof edad)
console.log(isEstudiante, typeof isEstudiante)
console.log(persona, typeof persona)
console.log(persona.nombre, typeof persona.nombre)


/** Como es JS respecto a los tipos
 * - débil ->puedes crear variables y sabes que tipo son sin definirlos, existen tipo undefined
 * - dinámico ->las variables ya tienen tipo por que hay que definirlo/declararlo, no existen tipo undefined.
 */

saludo = '22'
console.log(Number(saludo)*2)
console.log(typeof saludo)
var a ='22' //* <-string
var b = 22 //* <-número
