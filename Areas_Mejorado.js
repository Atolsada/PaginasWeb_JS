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

/* -------------------------- */

function calcularCircunf(radio2) {
    return Math.PI*radio2*radio2
}
function mostrarCircunf(radio2, circulo2){
    let mensaje2 = `El area de la circunferencia ${radio2} es ${circulo2}`
    console.log(mensaje2)
}
function main2(){
    let radio2 = 4
    mostrarCircunf(radio2, calcularCircunf(radio2))
}
main2()