function verResultados(x, y, operacion){
    let r = operacion(x,y)
    console.log('El resultado es ' + r);
}

function sumaCuadrados(a, b){
    return a*a+b*b
}

verResultados(2,3, sumaCuadrados)