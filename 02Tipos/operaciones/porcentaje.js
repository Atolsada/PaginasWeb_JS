function calcularModulo(a,b) {
    let resultado
    if (isNaN(a)) { resultado = "Error"}
    else if (isNaN(b)) { resultado = "Error"}
    else if (b == 0) { resultado = "No se puede dividir por 0"}
    // = asigna == compara
    else {
        resultado = a % b
    }
    return resultado
}

let num1 = '0' //-2
let num2 = 4.5
resultado = calcularModulo(num2, num1)
console.log(resultado)