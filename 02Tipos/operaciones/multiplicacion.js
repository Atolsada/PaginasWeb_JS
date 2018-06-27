function multiplicar(a,b) {
    let resultado
    if (isNaN(a)) { resultado = "Error"}
    else if (isNaN(b)) { resultado = "Error"}
    else {
        resultado = a * b
    }
    return resultado
}

let num1 = '-2'
let num2 = 4.5

resultado = multiplicar(num1, num2)
console.log(resultado)
