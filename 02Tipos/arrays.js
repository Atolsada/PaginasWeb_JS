//Los arrays son objetos

/* let oDatos = {
    0: 'Pepe',
    1: 'Rosa',
    2: 'Maria',
}
 */
// Hace lo mismo que tenemos dentro de oDatos, y le asigna automáticamente las propiedades de los objetos.
let aDatos = ['Pepe', 'Rosa', 'Maria'] // <--- es un objeto 

/* console.log(oDatos) */
console.log(typeof aDatos, aDatos) // typeof aDatos te dice el tipo, hay que poner again aDatos para ver: object [ 'Pepe', 'Rosa', 'Maria' ]
aDatos[0] = 'Jose' //Manipulamos el 0 que era Pepe, ahora es Jose
console.log(aDatos)
aDatos[3] = 'Luis' //Añadimos Luis en posicion [3]
console.log(aDatos)
/*  aDatos[aDatos.length]='Elena'
    aDatos.push('Elena') AMBOS HACEN IGUAL PERO SE SUELE USAR LENGTH*/

// Paso 1
let x = {nombre: 'Pepe', puesto: 'Profesor'}
let y = {nombre: 'Rosa', puesto: 'Profesora'}
let z = {nombre: 'Maria', puesto: 'Directora'}

// Paso 2 - lo correcto
let aDatosFull = [
    {nombre: 'Pepe', puesto: 'Profesor'},
    {nombre: 'Rosa', puesto: 'Profesora'},
    {nombre: 'Maria', puesto: 'Directora'},
]
console.log(aDatosFull)

// Paso 3 (añadir a alumna Elena)

// {nombre: 'Elena', puesto: 'Alumna'} copiado dentro de push
aDatosFull.push({nombre: 'Elena', puesto: 'Alumna'})
console.log(aDatosFull)

// EXPLICACION
// aDatosFull <--- array
// aDatosFull[0] <--- primer objeto del array

// Paso 4 (añadir apellidos)
aDatosFull.push({nombre: 'Elena', puesto: 'Alumna'})
aDatosFull[0].apellidos = 'Perez'
aDatosFull[1].apellidos = 'Lopez'
console.log (aDatosFull)
