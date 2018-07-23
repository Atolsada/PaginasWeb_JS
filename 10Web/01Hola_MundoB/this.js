let pepe = {
    nombre : 'Pepe',
    saludar : function (){
        console.log(`Hola, soy ${this.nombre}`);
    }
}

pepe.saludar()

// jose = pepe
// jose.saludar() 
// obj = obj

// let saludarFuera = pepe.saludar
// pepe.saludar()
// saludarFuera()


// THIS, COBRA VALOR EN EL MOMENTO EN EL QUE SE USA NO EN EL QUE SE DEFINE,AL NO SER QUE USEMOS UN ARROW FUNCTION
// QUE THIS QUEDA FIJADO PARA SIEMPRE EN EL MOMENTO EN EL QUE DA DEFINIMOS

// saludar : () => {
//     console.log. (`Hola, soy ${this.nombre}`);} <--- Undefined
// }


let saludarFuera = pepe.saludar

pepe.saludar()
saludarFuera()
saludarFuera.call(pepe)

/* setTimeout(() =>{
    console.log(`Salgo al segundo`)
},1000) */

setTimeout (pepe.saludar,3000)
//Aparece Undefined por que la ejecuta EL SISTEMA despues de los 3 segundos. En el sistema no hay this
setTimeout (pepe.saludar.bind(pepe),3000)
//Oye sistema tras 3 segundos ejecuta pepe como si fuera un call(call dice cuanto vale this=pepe). 
//En el fondo quien ejecuta es pepe
