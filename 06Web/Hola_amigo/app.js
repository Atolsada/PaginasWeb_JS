app = function (){
    
    oDomNombre = document.querySelector ('#nombre')
    oDomSaludar = document.querySelector ('#btnSaludar')
    oDomBorrar = document.querySelector ('#btnBorrar')
        domNombre.addEventListener('input', leerDatos)
    oDomSaludar.addEventListener('click', saludar)
    oDomBorrar.addEventListener('click', borrar)

    oDomNombre.value = 'Pepe'

    function saludar(){
        console.log('Hola amigo')
    }
    function borrar(){
        console.log('Aun no se borrar')
    }
}

document.addEventListener('DOMContentLoaded', app)