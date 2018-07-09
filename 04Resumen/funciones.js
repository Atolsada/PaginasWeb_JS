// declaración (1)


/** JAVADOC se llama esta forma de comentario (5)
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
 */

//Cómo se declaran-> function calcularArea(){} (4)
// las que no devuelven valor y las que si-> function calcularArea():void{} / function calcularArea(){let resultado return resultado}

/** (5)
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

//Uso o invocarlo (2)

// para invocar-> nombre de la funcion seguido de parentesis: calcularArea() (3)

// (7) consolelog(calcularArea('triángulO', (h:12, b:10))) <--- esta hardcodeado