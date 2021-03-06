class App {
    constructor() {
        this.oVentana = null
        this.btnAbrir = document.querySelector('#btnAbrir')
        this.btnCerrar = document.querySelector('#btnCerrar')

        console.log(this.btnAbrir)

        this.btnAbrir.addEventListener('click', this.abrirVentana.bind(this) )
        this.btnCerrar.addEventListener('click', this.cerrarVentana.bind(this) )
    }

    abrirVentana() {
        // this.oVentana = window.open()

        // this.oVentana.document.write('<h1>Nueva ventana</h1>')

        // this.oVentana = window.open('./ventana.html')
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
             this.btnAbrir.disabled = true
             this.btnCerrar.disabled = false
            }


        //this.oVentana.document.write('<h1>Nueva ventana</h1>')
}

abrirVentana1() {
    // this.oVentana = window.open('https://skillcrush.com/2017/04/03/free-coding-games/')

    // this.oVentana = window.open('./ventana.html', '_parent')

    this.oVentana = window.open('', '', 
        `top=400, 
         left=400, 
         width=300, 
         height=300`) 

    // MAS OPCIONES
    // toolbar=yes, 
    // scrollbars=no, 
    // resizable=no,     
    // this.oVentana.document.write('<h1>Nueva ventana</h1>')
}

        
    
    cerrarVentana(){
        // window.close() <--- .close como tal funciona, pero este metodo no
        this.oVentana.close() //<--- este es el correcto
        this.oVentana = null
        this.btnAbrir.disabled = false
        this.btnCerrar.disabled = true
    }

}

document.addEventListener('DOMContentLoaded', 
    () => {new App()})