
//Funcion saludar
/* 
function saludo

Hola chaval -> <18
Hola tronco -> <30
Buenos días -> <70
Saludos, master ->  */

// Mal hecho
/* 
function (saludo){
    let años = años<=18('Hola chaval')
    let años = años<=30('Hola tronco')
    let años = años<=70('Buenos días')
    let años = años <70('Saludos, master')
}
saludo() */

//bien hecho

function saludar (edad) {
    let mensaje = ''
    if ( edad < 18) {
        mensaje = 'Hola chaval'
    } else if ( edad  <30 ) {
        mensaje = 'Hola colega'
    } else if ( edad  <70 ) {
        mensaje = 'Buenos dias'
    } else {
        mensaje = 'Saludos, maestro'
    }
    return mensaje;
}
// [if] - si pasa esto [else if], si no pasa lo anterior, pasa esto

function probar () {
    let edad = 10
    console.log(`Si tu edad es ${edad}`, saludar(edad)) // Hola chaval
    edad = 19
    console.log(`Si tu edad es ${edad}`, saludar(edad)) // Hola colega
    edad = 40
    console.log(`Si tu edad es ${edad}`, saludar(edad)) // Buenos dias
    edad = 80
    console.log(`Si tu edad es ${edad}`, saludar(edad)) // Saludos, maestro
}

probar()

//BIEN hecho con array para simplificar

function saludar (edad) {
    let aMensaje = ['Hola chaval', 'Hola colega', 'Buenos dias', 'Saludos, maestro']
    let mensaje = 3
    if (edad < 18) {
        mensaje = 0
    } else if (edad < 30) {
        mensaje = 1
    } else if (edad < 70) {
        mensaje = 2
    }
    return aMensajes[mensaje];
}