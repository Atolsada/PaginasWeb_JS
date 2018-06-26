/* Calcular el circulo dado un radio */

/* 3 por ejemplo */

/* PASO 1 */
function main(){
    let radio = 3; 
    calcularCirculo(radio)
}
main()


/* PASO 2 */
function main(){
    let radio = 3; 
    let circulo = calcularCirculo(radio)
}
main()

/* PASO 3 terminamos de hacer la funcion main(main suele ser void)*/
function main(){
    let radio = 3; 
    let circulo = calcularCirculo(radio)
    mostrar(circulo)
}
main()

/* PASO 4 creaciónd e las funciones de mostrar solución y calcular el circulo*/
function calcularCirculo(){}

function mostrar(){}

function main(){
    let radio = 3; 
    let circulo = calcularCirculo(radio) /* <- coge 3(let radio) y la función calcularCirculo lo guarda */
    mostrar(circulo)
}
main()

/* PASO 5 */
function calcularCirculo(){ /* calcula y tiene que devolver */
    let circulo
    circulo = Math.PI*radio*radio /*Math.PI - número PI */
    return resultado
}

function mostrar(circulo){
    let mensaje = "El resultado es: "
    console.log(mensaje, circulo)
}

function main(){
    let radio = 3; 
    let circulo = calcularCirculo(radio)
    mostrar(circulo)
}
main()

/* PASO 6 (BONUS) si queremos que calcule otro círculo más */
function calcularCirculo(){
    let circulo
    circulo = Math.PI*radio*radio
    return resultado
}

function mostrar(circulo){
    let mensaje = "El resultado es: "
    console.log(mensaje, circulo)
}

function main(){
    let radio = 3; 
    let circulo = calcularCirculo(radio)
    mostrar(circulo)
    radio = 7;
    circulo = calcularCirculo(radio)
    mostrar(circulo)
}
main()