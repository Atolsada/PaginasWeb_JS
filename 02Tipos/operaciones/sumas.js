function sumar(a,b){
    let resultado
    if(isNaN(a)) {
        resultado = "Error"}
    else if(isNaN(b)) {
        resultado = "Error"}
    else {
        // resultado = a + b
        // resultado =  String + (String(b)
        //Arreglado
        resultado = Number(a) + Number(b) // Forzamos al sistema a que no haga string al numero, lo hacemos numero
        // NO CAMBIAMOS EL TIPO DE VARIABLE, SOLO FORZAMOS TEMPORALMENTE PARA LA OPERACION
        resultado2 = a + b //No esta forzado así que concatena aunque sea en la misma linea siguiente
        resultado3 = +a + +b // Al poner el +por delante 
        resultado4 = parseFloat (a) + parseFloat (b) //parseint es numeros enteros, parsefloat pilla decimales
    }
    return resultado
    
}
let num1 = '2'
let num2 = 4.5
let resultado = sumar(num1, num2)
console.log (resultado)
console.log (resultado2)
console.log (resultado3)
console.log (resultado4)

sumar()

