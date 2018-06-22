/*Dos tipos de funciones

- Funciones puras, no tienen (side effects) -> retornan datos
- Funciones "con efecto/operativas"
- Funciones con efectos
- Funciones Main
*/

function suma(a,b){
    let resultado = a+b
    return resultado;
}

function mostrar(dato){
    console.log(dato)
}

function main(){
    mostrar(suma(2,5))
    mostrar(suma(45,172354))
}

main()