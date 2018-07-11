//(1) --> objeto pero no ejecuta nada
// let oDatos = {} 
    // let oDatos = new Object() <--- Por debajo se "ejecuta" así.
// oDatos.nombre = 'pepe'
// oDatos['apellido'] = 'perez'
// console.log(oDatos)

//(2) Mejor se escribe en "anotacion Json" que es lo normal y es lo escrito acontinuacion
// let oDatos = {
//     nombre:'Pepe',
//     apellidos:'Perez',
//     edad: 22
// }
// console.log(oDatos)

//(3) Tambien es valido así por si no conocemos los datos
// let oDatos = {
//     nombre:'',
//     apellidos:'',
//     edad: 0
// }
// console.log(oDatos)

//(4) al ser dinamico JS podemos añadir una propiedad más cuando queramos (profesion en este caso)
let oDatos = {
    nombre:'Pepe',
    apellidos:'Perez',
    edad: 22
}
oDatos.profesion = 'programador'
console.log(oDatos)

//(5) la propiedad es un number aunque esté en un objeto
 let x = 22
 x *= 2
// oDatos.edad *= 3
// console.log(oDatos *= 3) // <-- es absurdo, JS lo hace (NaN) pero jamás nos vamos a encontrar algo así
console.log(oDatos.edad *= 3)