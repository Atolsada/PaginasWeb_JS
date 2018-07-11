//(1) --> objeto pero no ejecuta nada
// let oDatos = {} 
    // let oDatos = new Object() <--- Por debajo se "ejecuta" así.
// oDatos.nombre = 'pepe'
// oDatos['apellido'] = 'perez'
// console.log(oDatos)

//(2) Mejor se escribe en "anotacion Json" que es lo normal y es lo escrito acontinuacion
let oDatos = {
    nombre:'Pepe',
    apellidos:'Perez',
    edad: 22
}
console.log(oDatos)