/* Organizar Areas.js */
function calcularCirculo(radio) {
    return Math.PI*radio*radio
}


function mostrarCirculo(radio, circulo) {
    /*let mensaje = 'El area del circulo de radio '
    mensaje +=  radio   <- let mensaje = 'El area del circulo de radio ' let radio = 3 del main 
    mensaje += ' es '
    mensaje += 'circulo'
    /* - [+] operador de sumar y operador de concatenación*/
    let mensaje = `El area del circulo de radio ${radio} es ${circulo}` /* variable dentro de un strim para que el sistema lo sustituya */
    console.log(mensaje) /* las `` respetan el salto de linea, carro, etc */
}

function main() {
    let radio = 3
    mostrarCirculo(radio, calcularCirculo(radio))
    radio = 7
    mostrarCirculo(radio, calcularCirculo(radio))      
}

main()