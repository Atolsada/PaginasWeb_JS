class App{
    constructor(){
        this.amigo = 'Pepe'
        this.oBtnSaludar = document.querySelector('#btnSaludar')
        this.oBtnDespedir = document.querySelector('#btnDespedir')
        this.asignarHandlers()
    }
        asignarHandlers() {
            this.oBtnSaludar.addEventListener('click',this.saludar)
            this.oBtnDespedir.addEventListener('click', this.despedir) 
    }
    saludar() {
        console.log(`Hola ${this.amigo}`)
    }
    despedir() {
        console.log(`Adios ${this.amigo}`)
    }
}

document.addEventListener('DOMContentLoaded', () => new App())

// Forma diferente 1
// document.addEventListener('DOMContentLoaded', 
//        function () {new App()})

// Forma diferente 2
//function main() {
//    new App()
//}
// document.addEventListener('DOMContentLoaded', main)