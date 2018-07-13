function basica(x) {}
let y
basica(y)

//Siempre se pasan valores (y)(o el que sea) pero son valores

function miFuncion(...z) {    //<--- (Z) es un parametro array, lo que va recogiendo en un array lo que no es array son los (...)
    console.log('Hola ' + z[0])
    console.log('Hola ' + arguments[0])
}

let x = 21
miFuncion(x)
miFuncion(x, 56)
miFuncion(x, 56, 89)




// EN OTROS LENGUAJES existe la 
// Sobrecarga de funciones (métodos)
function miFuncion(z) {
    // un codigo
}
function miFuncion(z,x) {
    // otro codigo
}
miFuncion(x)
miFuncion(x,w)
// EN OTROS LENGUAJES