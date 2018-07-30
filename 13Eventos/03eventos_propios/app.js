function main(){
    console.dir(main)
    document.querySelector('#btnPulsar')
        .addEventListener('click', pulsar) // (1)

    document.querySelector('#btnPulsar') 
        .addEventListener('escribir', pulsar) // (4)

    /* document.querySelector('#output')
        .addEventListener('escribir', escribir) */ // (5)

    document.querySelector('#output')
        .addEventListener('escribir', escribir) // (3)
    
    function pulsar(oEv){
        console.dir(oEv)
        oEv.target.dispatchEvent(
            new Event('escribir') // (2)
        )
    }
    function escribir (oEv){
        console.dir(oEv)
        document.querySelector('#output').innerHTML = "He recibido un evento 'escribir' "
    }
}

document.addEventListener('DOMContentLoaded', main)