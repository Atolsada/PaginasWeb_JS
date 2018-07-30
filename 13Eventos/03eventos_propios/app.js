function main(){
    /* console.dir(main)
    document.querySelector('#btnPulsar')
        .addEventListener('click', pulsar) // (1)

    document.querySelector('#btnPulsar') 
        .addEventListener('escribir', pulsar) // (4)



    document.querySelector('#output')
        .addEventListener('escribir', escribir) // (3)
    
    function pulsar(oEv){
        console.dir(oEv)
        oEv.target.dispatchEvent(
            new Event('escribir', {'bubbles': true}) // (2)
        )
    } */

    document.querySelector('#btnPulsar')
        .addEventListener('click', pulsar)

    document.querySelector('main') //<--- quien ecribe es main, el boton le avisa al main
        .addEventListener('escribir', escribir)

        
    //Para el enlace de google



    function pulsar(oEv) {
        console.dir(oEv.target)
        oEv.target.dispatchEvent(new Event('escribir', {
            'bubbles': true,
          }))
    }

    function escribir (oEv){
        console.dir(oEv)
        document.querySelector('#output').innerHTML = "He recibido un evento 'escribir' "
    }
}

document.addEventListener('DOMContentLoaded', main)