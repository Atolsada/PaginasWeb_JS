
'use strict' //Para obligar a que el codigo sea "mas mejor"

// se le llama a esta forma "objeto literal" - objeto con anotacion JSON

let persona1 = {
    nombre: 'Pepe',
    edad: 33,
    profesion: 'Informatico',
    //  Un metodo es una function SIEMPRE
    //  Comillas francesas (``) para meter variables sin interpolar
    saludar: function () {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`)
    } 
}

// Por debajo se ejecuta new Object()
persona1.saludar()
console.log(persona1.nombre, persona1.edad)
console.log(persona1)


// CONSTRUCTOR
// las funciones constructoras se escriben primera en mayus, pascalcase.
// Podemos ejecutar empleando el operador new - creamos un objeto que tiene como constructor la funcion que he usado para crear

//console.log(persona1.constructor) ---> [Function: Object] - funcion constructora / "clase"
// console.log(persona2.constructor) ---> [Function: Persona] - funcion constructora / "clase"
// new crea un objeto y acontinuacion ejecuta el codigo dentro de la funcion y entiende this lo que acaba de crear????

// (1)
// function Persona (){
//     this.nombre = 'Pepe'
//     this.edad = 22
//     this.profesion = 'Informatico'
//     this.saludar = function (){
//         console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`)
//     }
//     console.log(this)
// }

// let persona2 = new Persona()

// (2)
function Persona (nombre, edad, profesion){
    this.nombre = nombre
    this.edad = edad
    this.profesion = profesion
    this.saludar = function (){
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años y trabajo de ${this.profesion}`)
    }
}

let persona2 = new Persona('Pepe', 23, 'Informatico')
//console.log(persona2)
//console.log(persona2.constructor)
persona2.saludar()

// Y ahora cuando queramos hacer la persona 3...
// sin necesidad de crear todo otra vez
let persona3 = new Persona('Luis', 34, 'Bombero')
//console.log(persona3)
persona3.saludar()

