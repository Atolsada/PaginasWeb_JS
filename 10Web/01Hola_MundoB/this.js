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

// saludarFuera = pepe.saludar
// obj = obj