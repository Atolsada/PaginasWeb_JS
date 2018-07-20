function app(){
    let amigo = 'Pepe'
    document.querySelector('#btnSaludar')
    .addEventListener('click', saludar)
    
    function saludar() {
    console.log(`Hola ${amigo}`)
    }
}

(function (){
    window.addEventListener('load', main)
})()
