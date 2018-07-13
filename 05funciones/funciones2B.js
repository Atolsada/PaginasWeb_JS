function verResultados(x, y, operacion){
    let r = operacion(x,y)
    console.log('El resultado es ' + r);
}

function sumaCuadrados(a, b){
    return a*a+b*b
}

function sumaCubos(a,b){
    return a*a*a+b*b*b
}

verResultados(2,3, sumaCuadrados)
verResultados(2,3, sumaCubos)

verResultados(2,3, function(a,b){return a*a+b*b})
verResultados(2,3, function(a,b){return a*a*a+b*b*b})


// setTimeout() <--- una funcion que quieres que se ejecute y otra cuando quieres que se ejecute

setTimeout(function(){
    console.log('Han pasado 3 segundos')
    },3000)


function saludar(){
    console.log ('Hola')
}

setTimeout(saludar, 2000) //se ejecuta antes que el de 3 segundos por que este es de 2 segundos independientemente del orden


setInterval(saludar, 2000) // se ejecuta cada 2 segundos hasta el infinito

// Manera de hacer que pare tras repetirse 10 veces

function saludar() {
    console.log('Hola');
    i++
    if (i > 10) {
        clearInterval(handler)
    }
}
let i = 0
let handler = setInterval(saludar, 1000)