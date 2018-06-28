function incrementos(){
    let x = 23
    let y
    y = ++x // x= x+1 y luego y=x
    y = x++ // y=x y luego x= x+1
    console.log(x++)
    console.log(x)

    y =--x // x= x-1 y luego y=x
    y = x-- // y=x y luego x= x-1 
    console.log(x--)
    console.log(x)
}
incrementos()

function asignaciones () {
    let x = 2
    x += 1 // x = x + 1
    x -= 1 // x = x - 1
    x *= 3 // 
    x /= 2 // 
    x %= 2 // 
}

//Funcion para saber si es par 

function isPar(a){
    let isPar = true
    if (a %=2 == 0){ // Si a divides por 2 y da 0 eres par
        isPar = false
    }
    return isPar
}
console.log('22 es par', isPar(22))
console.log('25 es par', isPar(25))

// otro modo

function esPar (num) {
    let isPar
    if (num % 2 != 0) {
        isPar = false
    } else {
        isPar = true
    }
    return isPar
}
console.log('22 es par', esPar(22))
console.log('25 es par', esPar(25))


