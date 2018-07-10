function iterar (){
    for (let i = 0;
        i < 3; 
        i++) { 
        console.log(`Soy la vuelta ${i+1} de for`);
    }
}
// Por donde empiezo? Por 0. Hasta donde? Hasta 3, cuanto aumento? de 1 en 1.

iterar()

function iterar_while(){
    let i = 0
    while (i < 3) {
        console.log(`Soy la vuelta ${i+1} de while`)
        i++
    }

}

iterar_while()