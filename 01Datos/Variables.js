/*VARIABLES GLOBALES */ /* - ambito/scope donde se alojan las funciones - */

var global = 12

function calcular (pDato){
    //global = global + pDato;
    global += pDato /* Es igual que el comment de arriba */
    return global;
} /* Si se inicializa una variable SIN DECLARAR (Let, var, etc)dentro de una función... */
/* ...se crea como variable global */

console.log(calcular(10)) /* solución 22 - Documents\PaginasWeb_JS\01datos> node .\Variables.js*/
console.log(global) /*También da 22 por que muestra el nuevo valor que hay en pDato */

/*3 Ámbitos de la función
- aquellos que escribimos dentro donde ponemos function
- Ámbitos de bloque
- ámbitos globales (fuera de la función la declares como la declares)

function aumentar(){
     local - es global
    var local - es local 
}
*/

/* function aumentar(){
    var local = 2
    let tambienLocal = 3
    const LOCAL = 4
    consol.log(local)
    consol.log(tambienLocal)
    consol.log(LOCAL)
}
aumentar()
console.log(local) //Nos devuelve - Undefined
console.log(tambienLocal) //Nos devuelve - Undefined
console.log(LOCAL) */ //Nos devuelve - Undefined

/* Lo que nos muestra es undefined por que las variables están dentro de la funcion y a nviel global no existen
para que funcionase tendrían que llamarse desde dentro de la función */
/* SE EJECUTAN LAS FUNCIONES, LAS VARIABLES SE USAN */


/* VARIABLES LOCALES con ÁMBITO de BLOQUE */
/* function disminuir(){
    if (true){
        var local = 2 
        let tambienLocal = 3
        const LOCAL = 4  ->No se puede variar los CONST(LOCAL += 1) Nos dará error de asignación por que una constante siempre es lo mismo siempre.
        tambieneLocale += 2
        console.log(local) //Nos devuelve - 2
        console.log(tambienLocal) //Nos devuelve - 3
        console.log(LOCAL) //Nos devuelve - 4
        console.log(tambieneLocale) //Nos devuelve - 5
    }  
    console.log(local) //Nos devuelve - 2 por que (var), su ámbito es local a la función.
    console.log(tambienLocal) //Nos devuelve - Undefined por el ámbito de bloque
    console.log(LOCAL) //Nos devuelve - Undefined por el ámbito de bloque
}

disminuir()
console.log(local) //Nos devuelve - Undefined
console.log(tambienLocal) //Nos devuelve - Undefined
console.log(LOCAL) //Nos devuelve - Undefined
*/