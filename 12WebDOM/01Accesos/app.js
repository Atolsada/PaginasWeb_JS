//document.addEventListener('DomContentLoaded', **********) 
//document.addEventListener('DomContentLoaded', funcion manejadora de eventos)
//La funcion manejadora de eventos dicho de otra forma = (lisener ó handler)
//Y la funcion la escribes como quieras, con nombre o anonima.

// document.addEventListener('DomContentLoaded', 
// () => {new ApplicationCache()}) 


//¿como llego al UNICO <p class="importante" id="p1" del html?
// document.querySelector('p') // document.querySelector('div p') // document.querySelector('p1') etc.
//Entre las 3 formas no existe diferencia
class App {
    constructor(){
        let nodo1 = console.dir(document.querySelector('div p'))
        //console.dir(document.querySelector('div p'))
        console.dir(nodo1)
        let nodo2 = console.dir(document.querySelector('.importante'))
        console.dir(nodo2)
        let nodo3 = console.dir(document.querySelector('#p1'))
        console.dir(nodo3)

        //Nos devuelve un array al ser All de todos los p (ejemplo)
        let aNodos = document.querySelectorAll('p')
        console.dir(aNodos)
        
        /* aNodos.forEach( //value, index, listObj
            //(nodo) => {Node.innerHTML = 'Ja, Ja'} el valor JAJA se lo dan a todos los <p>
        ) */

        //En los inicios
        document.getElementById('p1') 
        //ELEMENT, NO ELEMENTS. busca el primer id, y para. En el caso que hubiese mas con el mismo
        document.getElementsByTagName('p')

        document.getElementsByName('nombre')
        //devuelve un "array"(un html collection) con el ???????
        document.getElementsByClassName('importante') // ????????
    }
}

document.addEventListener('DomContentLoaded', 
() => {new ApplicationCache()})

