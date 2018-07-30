// function main(){ //QUÉ ES la function main? -> La funcion manejadora de eventos, y el evento es DOMContentLoaded
//     document.body.addEventListener('mousemove', (ev)=>{
//         console.log(ev.clientX, ev.clientY)
//     })
// }
// NOS DICE LA COORDENADA DEL RATON CON MOUSEMOVE

function main1(){ //funcion anonima
let aDivs = document.querySelectorAll('section div') // Devuelve un nodelist no un array

aDivs.forEach((div) => {
    div.addEventListener('mouseover',
        () => {div.style.backgroundColor = "pink"})
    div.addEventListener('mouseout',
        () => {div.style.backgroundColor = "brown"})
})

}


// Funcion con nombre - hover
function main3(){
    let aDivs = document.querySelectorAll('section div')
    
    aDivs.forEach((div) => {
        div.addEventListener('mouseover', hover) // Se llama lisener
        div.addEventListener('mouseout', hover)
    })
    function hover(oE){
        console.log(oE)
        if(oE.type == 'mouseover'){
            this.style.backgroundColor = "pink"
        }
        else{
            oE.target.style.backgroundColor = "brown"
        }
    } // POR QUÉ THIS? POR QUE ES QUIEN DISPARA EL EVENTO
    }
        // this.style.backgroundColor = "pink"
    // oE.target.style.backgroundColor = "brown"
    //SON INTERCAMBIABLES - USEMOS UNO U OTRO


    // ESTO ES LA FORMA ANTIGUA
    // div.onmouseover = hover
    function main2(){
        let aDivs = document.querySelectorAll('section div')
    
        aDivs.forEach((div) => { 
            div.onmouseover = hover // Se llama handler
            div.onmouseout = hover 
        })
        function hover(oE){
            console.log(oE)
            if(oE.type == 'mouseover'){
                this.style.backgroundColor = "pink"
            }
            else{
                oE.target.style.backgroundColor = "brown"
            }
        } 
        }


// Definitiva poniendo link a Google
function main() { 
    let aDivs = document.querySelectorAll('section div')
    aDivs.forEach((div) => {
        div.onmouseover = hover
        div.onmouseout = hover 
    })

    document.querySelector('footer a')
        .addEventListener('click', navegar)

    function hover(oE) {
        if(oE.type == 'mouseover') {
            this.style.backgroundColor = "pink"
        } else {
            oE.target.style.backgroundColor= "brown"
        }
    }

    function navegar () {
        oE.preventDefault() //Para quitar la propiedad por defecto
        console.log('Navegando')
        let res = confirm("¿Estas seguro?")
        if (res) {
            location.assign('https://www.google.com')
        }
    }

}


// document.addEventListener('DOMContentLoaded', main)
// La de abajo es un simil al document.addEvent...
window.addEventListener('load', main)
// Las imagenes tambien disparan el evento load
