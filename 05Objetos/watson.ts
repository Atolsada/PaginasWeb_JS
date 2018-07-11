// typescript
// elementales

//(1)

function tipos () {
    let num = 23
    let nombre = 'Pepe'
    let isOk = true
    let aDatos = []
    let oDatos = {}

    //wrapper objects
    aDatos.push(12)
    // sort(aDatos) <--- No existe así, se hace como debajo
    num.toFixed(2) // Number
    nombre.toUpperCase() // String
    isOk.valueOf() // Boolean
}

function numbers (){
    let num = 23
    console.log(num) //<--- añadido para ver el num
    console.log(num.toFixed(2)) //<--- devuelve un string numero coma y 2 decimales, en este caso 00
}
numbers()

//(2)

function numbersTS (){
    let num = 23.448
    console.log(num)
    console.log(num.toFixed(2))
}
numbersTS()

//(3)

function numbersTR (){
    let num = 23
    console.log(num)
    console.log(num.toFixed(2)) //<--- Así es como se tiene que hacer con numbers aunque ahí es un string
    let numPrecision = num.toFixed(2)
    console.log(typeof numPrecision)
    console.log(typeof num)
    console.log(numPrecision * 3) //<--- Está igual que el dle prof pero pone que no funciona el Visual
}
numbersTR()
