// declaración (1)


/**(5) (JAVADOC se llama esta forma de comentario) 
 * Qué quiero que haga mi función que calcula el area de algo  -> Calcular areas diversas de figuras
 * Cómo se le dice algo a la función-> el primer parámetro - nombre de la figura
 * El segundo parámetro cual será? depende de la figura - datos de la figura
 * Qué devuelve la función? - el area de la figura.
 * 
 * Decides qué quieres recibir
 * nombre de la figura -> string
 * (*6) Si es triangulo h y b
 * datos de la figura -> objeto (por si unas veces el alto, el ancho, etc. Y así tú mandas las cosas)
 * area de figura -> number
 * 
 * (9) 
 * Si es triangulo- h y b
 * Si es cuadrado- l
 * Si es circulo- r
 * 
 */

//(4) Cómo se declaran-> function calcularArea(){} 
// las que no devuelven valor y las que si-> function calcularArea():void{} / function calcularArea(){let resultado return resultado}

/**(5)
 * function calcularArea(figura, datos){
 *      let resultado
 * 
 *      switch(figura.toLowerCase()){
 *      case 'triangulo':
 *      case 'triángulo':
 *          (*6) resultado = (datos.h * datos.b) / 2
 *      break;
 * 
 *      default:
 *      break;}
 *      return resultado
 * }
 */
// Al poner figura.toLowerCase() -> hacemos que si el usuario escriba mayus o no, lo entienda la funcion
// case 'triángulo': -> puesto para que entienda si se pone tilde, y se pueden anidar de esa forma

//(2) Uso o invocarlo 

//(3) para invocar-> nombre de la funcion seguido de parentesis: calcularArea() 

//(7) consolelog(calcularArea('triángulO', (h:12, b:10))) <--- esta hardcodeado


//(8)

//function calcularArea(figura, datos){
//    let resultado
    
//    switch(figura.toLowerCase()){
//    case 'triangulo':
//   case 'triángulo':
//       resultado = (datos.h * datos.b) / 2
//        break;
//    case 'cuadrado':
//        resultado = datos.l * datos.l
//        break;
//    case 'circulo':
//        resultado = datos.r * datos.r * Math.PI
//        break;

//    default:
//        break;
//    }
//    return resultado
//}

//console.log(calcularArea('triángulO', {h:12, b:10}))
//console.log(calcularArea('cuadrado', {l:10}))
//console.log(calcularArea('circulo', {r:10}))

//(10)
//* let figura = triángulO

//(11)
// let figura = 'triángulO'
//(12) console.log(calcularArea('cosa', {h:12, b:10}))


//13

//function calcularArea(figura, datos){
//    let resultado = 0
    
//    switch(figura.toLowerCase()){
//    case 'triangulo':
//    case 'triángulo':
//        resultado = (datos.h * datos.b) / 2
//        break;
//    case 'cuadrado':
//        resultado = datos.l * datos.l
//        break;
//    case 'circulo':
//    case 'círculo':
//        resultado = datos.r * datos.r * Math.PI
//        break;

//    default:
//        break;
//    }
//    return resultado.toFixed(2)
//}


//function probar(){
//    let sFigura = 'triángulO'
//    let oDatos= {h:12.3, b:10.5}
//    console.log(calcularArea(sFigura, oDatos))
//    sFigura = 'cuadrado'
//    oDatos = {l:10}
//    console.log(calcularArea(sFigura, oDatos))
//    sFigura = 'circulo'
//    oDatos = {r:10}
//    console.log(calcularArea(sFigura, oDatos))
//}

//probar()

//(14) ahora va bien pero no tenemos comprobacion de errores vamos a añadirlo con array for each

//function calcularArea(figura, datos){
//    let resultado = 1
    
//    switch(figura.toLowerCase()){
//    case 'triangulo':
//   case 'triángulo':

        //datos.h
        //datos['h']

        //let x = 'h'
        //datos['x']

        //datos {h:12.3, b:10.5}
        //primera vuelta key, datos[key] 12.3, segunda vuelta key, datos[key] 10.5

//        for (const key in datos) {
//            resultado = datos[key]
//        }
        // resultado = (datos.h * datos.b) / 2
//        break;
//    case 'cuadrado':
//        resultado = datos.l * datos.l
//        break;
//    case 'circulo':
//    case 'círculo':
//        resultado = datos.r * datos.r * Math.PI
//        break;

//    default:
//        break;
//    }
//    return resultado.toFixed(2)
//}

//(15) Añadimos un throw para poner un codigo de error para pentágono

function calcularArea(figura, datos){
    let resultado = 1
    
    switch(figura.toLowerCase()){
    case 'triangulo':
    case 'triángulo':
        for (const key in datos) {
            resultado = datos[key]
        }
        break;
    case 'cuadrado':
        resultado = datos.l * datos.l
        break;
    case 'circulo':
    case 'círculo':
        resultado = datos.r * datos.r * Math.PI
        break;
    default:
        throw ('Operación no permitida')
        break;
    }
    return resultado.toFixed(2)
    //(16) try y catch para el throw
    try {
        let sFigura = 'pentagono'
        console.log(calcularArea(sFigura, oDatos))
    } catch (error){
        console.log(error)
    }
}

function probar(){
    let sFigura = 'triángulO'
    let oDatos= {x:12.3, y:10.5}
    console.log(calcularArea(sFigura, oDatos))
    sFigura = 'cuadrado'
    oDatos = {l:10}
    console.log(calcularArea(sFigura, oDatos))
    sFigura = 'circulo'
    oDatos = {r:10}
    console.log(calcularArea(sFigura, oDatos))
    sFigura = 'pentagono'
    oDatos = {r:10}
    console.log(calcularArea(sFigura, oDatos))
}

probar()
