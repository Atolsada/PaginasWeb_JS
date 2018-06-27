/*Dos tipos de funciones

- Funciones puras, no tienen (side effects) -> retornan datos (se ven en la consola)
- Funciones "con efecto/operativas"
- Funciones con efectos
- Funciones Main - funcion de control, llaman a otras funciones
*/

function suma(a,b){
    let resultado = a+b
    return resultado;
}

function mostrar(dato){
    alert(dato)
}

function main(){ 
    mostrar(suma(2,5))
    mostrar(suma(45,172354))
}

main()