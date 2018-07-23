class App {
    constructor() {
        this.oVentana = null
        this.btnAbrir = document.querySelector('#btnAbrir')

        this.btnAbrir.addEventListener('click', this.abrirVentana.bind(this) )
    }

    abrirVentana() {
        let x = window.screen.availWidth/2 - 150
        let y = window.screen.availHeight/2 - 150
        if(!this.oVentana){
            this.oVentana = window.open('', '', 
            `toolbar=yes, 
             scrollbars=no, 
             resizable=no, 
             top=${y}, 
             left=${x}, 
             width=300, 
             height=300`)
            this.oVentana.document.write('<h1>Nueva ventana</h1>')
            this.btnAbrir.innerHTML = 'Cerrar Ventana'
            } 
        else {
        this.oVentana.close()
        this.oVentana = null
        this.btnAbrir.innerHTML = 'Abrir Ventana'
            }
    }
}



    

document.addEventListener('DOMContentLoaded', 
    () => {new App()})