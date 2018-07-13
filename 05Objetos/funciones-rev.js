function basica(x) {}
let y
basica(y)

//Siempre se pasan valores (y)(o el que sea) pero son valores

function miFuncion(...z) {    //<--- (Z) es un parametro array, lo que va recogiendo en un array lo que no es array son los (...)
    console.log('Hola ' + z[0]) //<--- (...) se llama splitoperator
    console.log('Hola ' + arguments[0])
}

let x = 21
miFuncion(x) // <--- 21 (z -> 1)
miFuncion(x, 56) // <--- 21, 56 (z -> 2)
miFuncion(x, 56, 89) // <--- 21, 56, 89 (z -> 3)




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