class App{
    constructor(){
        this.amigo = 'Pepe'
        this.isSaludar = true
        this.oBtn = document.querySelector('#btnDual')
        this.asignarHandlers()
        this.oOutput = document.querySelector('#saludo')
    }

    asignarHandlers() {
            //this.oBtn.addEventListener('click',this.saludarOld.bind(this)) Old version
            this.oBtn.addEventListener('click',this.saludar.bind(this))
    }

    saludar(oE) {
        console.log(oE.target)
        console.log(this)

        let msg = `Adios ${this.amigo}`
        if(this.isSaludar){
            msg = `Hola ${this.amigo}`
        }
        
        this.isSaludar = !this.isSaludar
        oE.target.innerHTML = this.isSaludar ? 'Hola':'Adios'
        this.oOutput.innerHTML = msg

    }
}


// saludarOld(oE) {
//     console.log(oE.target)
//     console.log(this)

//     if(this.isSaludar){
//         console.log(`Hola ${this.amigo}`)
//         //oE.target.innerHTML = 'Adios'
//         //this.isSaludar = false
//     }
//    else{
//         console.log(`Adios ${this.amigo}`)
//         //oE.target.innerHTML = 'Hola'
//         //this.isSaludar = true
//     }
//     this.isSaludar = !this.isSaludar
//     oE.target.innerHTML = this.isSaludar ? 'Adios':'Hola'

// }



document.addEventListener('DOMContentLoaded', () => new App())