import{addBoton} from './helper.js'

class App{
    constructor(){
        // setTimeout(this.addInfo,2000) Ejemplo old times
        // setTimeout(this.addInfoModerno,2000) Asi se hace now

        
        this.btnAceptar = '' //para el addBoton
        setTimeout(this.addInfoEnMedio.bind(this),2000)

    }
    addInfo(){
        let nodoElement = document.createElement('p') // (2)Así se guarda
        // document.createElement() - (1)Lo crea pero no guarda
        let nodoTexto = document.createTextNode('Este sitio utiliza cookies')
        //Tenemos dos nodos del DOM pero que no se ven (en este momento)
        nodoElement.appendChild(nodoTexto)

        document.body.appendChild(nodoElement)
    }

    addInfoModerno(){
        document.body.innerHTML += `<div class="aviso">
        <p>Este sitio utiliza cookies</p>
        <button>Aceptar</button>
        </div>`
    }
    //inner - mete

    /* addInfoEnMedio() {
        document.querySelector('#desaparecere').outerHTML += `
        <div class="aviso">
            <p>Este sitio utiliza cookies</p>
            <button type="button" id="btnAceptar">Aceptar</button>
        </div>` 
        this.addBoton('#btnAceptar', '.aviso')
    } */
    //outer - saca - buscalo, envuelve y borramelo por lo de dentro
    
    addInfoEnMedio() {
        document.querySelector('#desaparecere').outerHTML = `
        <div class="aviso">
            <p>Este sitio utiliza cookies</p>
            <button type="button" id="btnAceptar">Aceptar</button>
        </div>`

        addBoton('#btnAceptar', '.aviso')
    }
}


// --------------
// ENVIADO A HELPER.JS
    /**
     * Define el comportamiento de un boton
     * incluido en un contenedor
     * 
     * @param {string} nombreBoton // #btnAceptar
     * @param {string} container // .aviso
     */
//     addBoton(nombreBoton, container){ //añadido addboton con la id en addInfoEnMedio
//         //let btnAceptar = document.querySelector('#btnAceptar')
//         let btnAceptar = document.querySelector('nombreBoton')
//         btnAceptar.addEventListener('click', () => {
//             btnAceptar.disabled = true
//             setTimeout( () =>{
//                //let nodo = document.querySelector('.aviso')
//                let nodo = document.querySelector('container')
//                 nodo.parentNode.removeChild(nodo) 
//             }, 2000)
//         })
//     }
// }


document.addEventListener('DomContentLoaded', 
() => {new App()})