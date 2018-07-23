class App {
    constructor() {
        this.oVentana = null
        this.btnAbrir = document.querySelector('#btnAbrir')
        this.btnCerrar = document.querySelector('#btnCerrar')

        this.btnAbrir.addEventListener('click', this.abrirVentana.bind(this) )
        this.btnCerrar.addEventListener('click', this.cerrarVentana.bind(this) )
    }

    abrirVentana() {
        this.oVentana = window.open()
    }
    cerrarVentana(){
        window.close()
    }

}

document.addEventListener('DOMContentLoaded', 
    () => {new App()})