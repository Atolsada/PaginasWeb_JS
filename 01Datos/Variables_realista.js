/*VARIABLES GLOBALES */
/* Var no usamos nunca, ya que es global y nunca vamos a hacer globales */

function calcular (pDato){
    //global = global + pDato;
    global += pDato /* Es igual que el comment de arriba */
    return global;
}

/* function main1(){
    let global = 12
    console.log(calcular(10))
    console.log(global);
} MAL HECHO, NO SE HACE ASÍ */

/*function calcular (total, pDato){
    //total = total + pDato;
    total += pDato /* Es igual que el comment de arriba 
    return total;
}
 function main1(){
    let total = 12  variable local a la funcion main1 - 12 
    console.log(calcular(total, 10))  variable local a la funcion main1 - 22 
    console.log(total);  parámetro local de la función calcular  - 12
} CASI BIEN*/
function calcular (pTotal, pIncremento){
    pTotal = pTotal + pIncremento;
    return pTotal;
}
function main1(){
    let total = 12
    let incremento = 10 /*podrian sustituirse el (let) por (const) por que nunca cambian */
    console.log(calcular(total, incremento))
    console.log(total)
    }
 /* FORMA CORRECTA */
main1()

function disminuir1(){
    if (true){
        let local = 2
        const LOCAL = 4
        local += 2
        console.log(local) /* - 4 */
        console.log(LOCAL) /* - 4 */
    }
}


function disminuir2(){ /* ES UNA FUNCION TIPO void POR QUE NO DEVUELVE NADA */
    let local = 2
    const LOCAL = 4
    if (true){
        /*let local = 4  (let) - CREAME UNA VARIABLE QUE SE LLAME LOCAL QUE SEA 4. Aunque se llame igual que la anterior son diferentes por el bloque*/
        local += LOCAL
    }
    console.log(local) /* - 4 */
    console.log(LOCAL) /* - 4 */
}

function disminuir3(){
    let local = 2
    /* let local
    local = 2 Se puede hacer en una o dos líneas por ser (var)iable*/
    const LOCAL = 4
    /* const LOCAL
    LOCAL = 4 Esto es erróneo ya que (const) será undefined siempre */
    local -= LOCAL /* lo que vale local menos lo que vale LOCAL */
    console.log("El resultado es:", local) /* - -2 */
    console.log(LOCAL) /* - 4 */
    }
disminuir1()
disminuir2()
disminuir3()



/* 
function disminuir1(){ ---[TODO ES UNA FUNCIÓN]
    let x = 24 ---[LET EXISTE EN TODA AL FUNCIÓN]
    if (true){ ---[ESTO ES UN BLOQUE EN LA FUNCION]
        let local = 2 ---[LET SE APLICA EN BLOQUE, VAR EN FUNCION Y NO RECONOCE BLOQUES]
        const LOCAL = 4
        local += 2
        console.log(local)  - 4 
        console.log(LOCAL)  - 4 
    } ---[AQUÍ TERMINA EL BLOQUE DE LA FUNCIÓN]
    x += 4 ---[EXISTE EN LA FUNCIÓN]
} 

INVOCAR UNA FUNCIÓN ES: NOMBRE Y PARÉNTESIS, SE PUEDEN INVOCAR DESDE DONDE QUIERAS
NOMBRE()
() ---[ESOS PARÉNTESIS SE LLAMAN OPERADOR] .EJECUTA NOMBRE.

CONSOLE.LOG(NOMBRE) ES UNA INVOCACION DEL SISTEMA NO CREADA POR NOSOTROS


LAS CONSTANTES SE PASAN POR VALOR NO POR REFERENCIA
*/