
/**
 * Define el comportamiento de un boton
 * incluido en un contenedor
 * 
 * @param {string} nombreBoton // #btnAceptar
 * @param {string} container // .aviso
 */
export function addBoton(nombreBoton, container){ //añadido addboton con la id en addInfoEnMedio
    //let btnAceptar = document.querySelector('#btnAceptar')
    let btnAceptar = document.querySelector(nombreBoton)
    btnAceptar.addEventListener('click', () => {
        btnAceptar.disabled = true
        setTimeout( () =>{
           //let nodo = document.querySelector('.aviso')
           let nodo = document.querySelector(container)
            nodo.parentNode.removeChild(nodo) 
        }, 2000)
    })
}

