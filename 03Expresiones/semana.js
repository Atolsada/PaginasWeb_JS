// Alarma de despertador que nos diga a que hora esta
// @param 'Día de la semana'
// @return 'Hora de la alarma' ---> 7:00 // 12:00
// @además de la hora quiero que diga al inicio, "comienza tu <día>"
//


//fFATAL HECHO
/* 
function alarma (dia) {
    let mensaje = ''
    if (dia='lunes') {
        mensaje = 'Despierta, son las 7:30'
    } else if (dia='martes') {
        mensaje = 'Despierta, son las 7:30'
    } else if (dia='miercoles') {
        mensaje = 'Despierta, son las 7:30'
    } else if (dia='jueves'){
        mensaje = 'Despierta, son las 7:30'
    } else if (dia='viernes'){
        mensaje ='Despierta, son las 7:30'
    }else if (dia='sábado'){
        mensaje ='Despierta, son las 12:00'
    }else if (dia='domingo'){
        mensaje ='Despierta, son las 12:00'
    }
    return mensaje;
}
function pregunta () {
    let dia = jueves
    console.log(`¿Qué día es? ${dia}`, alarma(dia))
    dia = jueves
    console.log(`¿Qué día es?  ${dia}`, alarma(dia))
    dia = viernes
    console.log(`¿Qué día es?  ${dia}`, alarma(dia))
    dia = domingo
    console.log(`¿Qué día es?  ${dia}`, alarma(dia))
}

pregunta() */

// BIEN HECHO

function despertador(dia) {
    let hora = '12:00'
    switch (dia) {
        case 'L':
            hora = '7:00'
            dia = 'Lunes'
            break;
        case 'M':
            hora = '7:00'
            dia = 'Martes'
            break;
        case 'X': 
            hora = '7:00'
            dia = 'Miercoles'
            break;
        case 'J': 
            hora = '7:00'
            dia = 'Jueves'
            break;
        case 'V' :
            hora = '7:00'
            dia = 'Viernes'
            break;
        case 'S' :
            hora = '12:00'
            dia = 'Sábado'
            break;
        case 'D':
            hora = '12:00'
            dia = 'Domingo'  
            default:
            hora = '0:00'
            dia = "Error de día"
            break;
    }
    return `${hora}, comenza el ${dia}`
}
/*     if (dia == 'L') {
        hora = '7:00'
        dia = 'Lunes'
    }
    if (dia == 'M') {
        hora = '7:00'
        dia = 'Martes'
    }
    if (dia == 'X') {
        hora = '7:00'
        dia = 'Miercoles'
    }
    if (dia == 'J') {
        hora = '7:00'
        dia = 'Jueves'
    }
    if (dia == 'V') {
        hora = '7:00'
        dia = 'Viernes'
    }
    if (dia == 'S') {
        hora = '12:00'
        dia = 'Sábado'
    }
    if (dia == 'D') {
        hora = '12:00'
        dia = 'Domingo'
    }    */

function probar () {
    let dia = 'L'
    console.log(`Si tu dia es ${dia}`, despertador(dia)) // 7:00
    dia = 'M'
    console.log(`Si tu dia es ${dia}`, despertador(dia)) // 7:00
    dia = 'S'
    console.log(`Si tu dia es ${dia}`, despertador(dia)) // 12:00
    dia = 'D'
    console.log(`Si tu dia es ${dia}`, despertador(dia)) // 12:00
    dia = 'Z'
    console.log(`Si tu dia es ${dia}`, despertador(dia)) // 12:00
}

probar()