class App{
    constructor(){
        this.amigo = 'Pepe'
        this.oBtnSaludar = document.querySelector('#btnSaludar')
        this.oBtnDespedir = document.querySelector('#btnDespedir')
        this.asignarHandlers()
    }

    asignarHandlers() {
            this.oBtnSaludar.addEventListener('click',this.saludar.bind(this))
            this.oBtnDespedir.addEventListener('click', this.despedir.bind(this)) 
            // .bind <--- digo quien quiero que sea this en todo momento
            //siempre que defino un manejador de eventos(addEventListener) con 
            // this por delante le pongo bind this por detras(entendamos el por qué)
    }
    //oE <--- oEvent
    //por si queremos solucionar con bind pero tambien queremos acceder al boton
    saludar(oE) {
        console.log(oE.target)
        console.log(`Hola ${this.amigo}`)
    }

    despedir(oE) {
        console.log(oE.target)
        console.log(`Adios ${this.amigo}`)
    }
}

document.addEventListener('DOMContentLoaded', () => new App()) //funcion sin nombre
//LA FUNCION INSTANCIA UN OBJETO DE LA FUNCION(SIN NOMBRE) LLAMADA APP
// cuando carga la pagina se crea en este caso, la funcion anonima

// function() {
//    new App()}
// funcion con nombre, pero igual que arriba
// () => {let ò const app = new App()} <-- lo mismo pero app te dirá que jamas se usará



// Forma diferente 1
// document.addEventListener('DOMContentLoaded', 
//        function () {new App()})

// Forma diferente 2
//function main() {
//    new App()
//}
// document.addEventListener('DOMContentLoaded', main)