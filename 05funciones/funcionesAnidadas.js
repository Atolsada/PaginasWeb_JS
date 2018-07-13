// DENTRO DE LAS FUNCIONES NO SE PUEDEN METER FUNCIONES

//(1)

// function principal(){
//     let x = 25
//     let verDatos = function(){} 
// }

// principal()
// verDatos()
//console.log(verDatos)


// (2)

// function principal  () {
//     let x = 25
//     let verDatos = function () {}
//     function pintarDatos() {
//     }
// }
// principal()
// verDatos()
// pintarDatos()
// console.log(datos)


//(3)

function principal () {
    let x = 25
    let verDatos = function () {
        console.log('Mostrando: ', x)
    }
    function pintarDatos() {
        console.log('Pintando: ', x)
    }
    pintarDatos()
    verDatos()
}
principal()
// console.log(datos)