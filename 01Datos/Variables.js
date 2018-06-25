var global = 12

function calcular (pDato){
    //global = global + pDato;
    global += pDato /* Es igual que el comment de arriba */
    return global;
} /* Si se inicializa una variable SIN DECLARAR (Let, var, etc)dentro de una función... */
/* ...se crea como variable global */

console.log(calcular(10)) /* solución 22 - Documents\PaginasWeb_JS\01datos> node .\Variables.js*/
console.log(global) /*También da 22 por que muestra el nuevo valor que hay en pDato */