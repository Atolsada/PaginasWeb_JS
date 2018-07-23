class App {
    constructor() {
        this.oVentana = null
        this.btnAbrir = document.querySelector('#btnAbrir')

        this.btnAbrir.addEventListener('click', this.abrirVentana.bind(this) )
        
        //MODO (3)
        this.img = null
        this.prepararImg()
    }

    prepararImg(){ //MODO(3)
        this.img = new Image()
        this.img.src = './assets/wall.jpg'
        this.img.addEventListener('load',
    
        () => { //En la consola del explorador nos dice el tamaño
            console.dir(this.img.width) // 1029
            console.dir(this.img.height) // 800
        })
    }

    abrirVentana() {

        //(MODO2)
        // let x = window.screen.availWidth/2 - 150
        // let y = window.screen.availHeight/2 - 150

        //(MODO3)
        if (!this.oVentana) {
            this.oVentana = window.open('', '', 
                        `toolbar=yes, 
                        scrollbars=no, 
                        resizable=no, 
                        top=100, 
                        left=100, 
                        width=${this.img.width}, 
                        height=${this.img.height}`)
            this.oVentana.document.write(`<img src=${this.img.src} alt="¡Guardias, guardias!">`)        
            this.btnAbrir.innerHTML = 'Cerrar Ventana'
        } else {
            this.oVentana.close()
            this.oVentana = null
            //this.btnAbrir.innerHTML = 'Abrir Ventana'
            this.btnAbrir.textContent = 'Abrir Ventana'
        }
    }
}

        //(MODO2)
//        if(!this.oVentana){
//            this.oVentana = window.open('', '', 
//            `toolbar=yes, 
//             scrollbars=no, 
//             resizable=no, 
//             top=${y}, 
//             left=${x}, 
//             width=300, 
//             height=300`)
//            //(MODO2) this.oVentana.document.write('<img src="./assets/wall.jpg" alt="¡Guardias, guardias!">')  
//            //(MODO1) this.oVentana.document.write('<h1>Nueva ventana</h1>')
//            this.btnAbrir.innerHTML = 'Cerrar Ventana'
//            } 
//        else {
//        this.oVentana.close()
//        this.oVentana = null
//        this.btnAbrir.innerHTML = 'Abrir Ventana'
//            }
//    }
//}


document.addEventListener('DOMContentLoaded', 
    () => {new App()})