// * as Pepe para que funcione (engañamos al comando) y funciona
import * as Pepe from './node_modules/js-cookie/src/js.cookie.js'

// ESTA es la buena, pero por algún motivo a nadie le funciona
// import Cookies from './node_modules/js-cookie/src/js.cookie.js'
//console.log(Cookies.get())

Cookies.get('visita')
//Cookies.set('visita', '1')
console.log(Cookies.get())

let numVisitas =  Cookies.get('NumVisitas')
if (numVisitas) {
     // Existe la cookie NumVisitas
     Cookies.set('NumVisitas', numVisitas, {expires: 7})
     console.log('Visita número', numVisitas)
    
} else {
    // No existe la cookie NumVisitas
    Cookies.set('NumVisitas', 1, {expires: 7})
}

