// FOR

function iterar (){
    for (let i = 0;
        i < 3; 
        i++) { 
        console.log(`Soy la vuelta ${i+1} de for`);
    }
}
// Por donde empiezo? Por 0. Hasta donde? Hasta 3, cuanto aumento? de 1 en 1.
// i++ --> i + 1 cambia el valor de i
// i+1 --> no cambia el valor de i

iterar()

// La diferencia de while a do while es si la funcion se ejecuta desde el principio
//WHILE

function iterar_while(){
    let i = 0
    while (i < 3) {
        console.log(`Soy la vuelta ${i+1} de while`)
        i++
    }
}

iterar_while()


// DO WHILE (primeor comprueba y luego ejecuta)

function iterar_do(){
    let i = 0
    do {
        i++
        console.log(`Soy la vuelta ${i+1} de do while`)
    } while (i < 3)
}

iterar_do()