class App {
    constructor() {
        this.inClave = document.querySelector('#inClave')
        this.btnBuscar = document.querySelector('#btnBuscar')

        this.btnBuscar.addEventListener('click', () => {
            console.log(this)
            let clave = this.inClave.value
            const url = 'https://www.google.es/search?q='    //almacenar las url de las busquedas
            if (clave){ //validar el dato escrito (comprobando)
                window.location.href = url + clave // usa la const url mas clave
            }    
        })
    }
}

document.addEventListener('DOMContentLoaded', 
    () => {new App()})