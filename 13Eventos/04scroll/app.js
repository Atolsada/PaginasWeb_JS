class App{
    constructor(){

        window.addEventListener('scroll', (oE)=>{
            console.dir(oE.target.scrollingElement.scrollTop)
            
            if(oE.target.scrollingElement.scrollTop>140){
                document.querySelector('btn-top')
                .classList.remove('hide')
            }
            else {
                document.querySelector('btn-top')
                .classList.add('hide')
            }
        })
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    new App()
})