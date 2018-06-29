// Alarma de despertador
// @param 'Día de la semana'
// @return 'Hora de la alarma' ---> 7:00 // 12:00
// @además de la hora quiero que diga al inicio, "comienza tu <día>"
//

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
    let dia = ''
    console.log(`¿Qué día es? ${dia}`, alarma(dia))
    dia = jueves
    console.log(`¿Qué día es?  ${dia}`, alarma(dia))
    dia = viernes
    console.log(`¿Qué día es?  ${dia}`, alarma(dia))
    dia = domingo
    console.log(`¿Qué día es?  ${dia}`, alarma(dia))
}

pregunta()