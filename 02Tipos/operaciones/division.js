function dividir(a,b) {
    let resultado
    if (isNaN(a)) { resultado = "Error"}
    else if (isNaN(b)) { resultado = "Error"}
    else if (b == 0) { resultado = "No se puede dividir por 0"}
    else {
        resultado = a / b
    }
    return resultado
}

let num1 = '8'
let num2 = 4.5

resultado = dividir(num1, num2)
console.log(resultado)
