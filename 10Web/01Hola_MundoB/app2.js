function app(){
    let amigo = 'Pepe'
    document.querySelector('#btnSaludar')
    .addEventListener('click', saludar)
    document.querySelector('#btnDespedir') //<--- nodo del DOM
    .addEventListener('click', despedir) //<--- lisen(evento,funcion)
    // change, imput y clic son los eventos que conocemos

    function saludar(){
        console.log(`Hola ${amigo}`)
    }
    
    function despedir(){
        console.log(`Adios ${amigo}`)
    }
}

(function (){
    document.addEventListener('DOMContentLoader', app)
})()
//En la practica es lo mismo que
//document.addEventListener('DOMContentLoader', app)


