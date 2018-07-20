class Persona{
    constructor(nombre, edad, pais = 'España'){ //<--- VALOR POR DEFECTO - pais = 'España'
        this.nombre = nombre
        this.edad = edad
        this.pais = pais
    }
    mostrar(){
        console.log(this)
    }
    saludar(){
        console.log(`Hola, soy ${this.nombre}, de ${this.pais}, y tengo ${this.edad} años`)
    }
}

p1 = new Persona('Pepe', 34) //<--- hemos INSTANCIADO "Persona" en p1 (recuerda el mito de la caverna)
p1.mostrar()
// Persona { nombre: 'Pepe', edad: 34, pais: 'España' }
p2 = new Persona('Rosa', 25)
p2.mostrar()
// Persona { nombre: 'Rosa', edad: 25, pais: 'España' }
p3 = new Persona('Pierre', 25, 'Rep.Dominicana') //<--- Se sustituye el pais
p3.mostrar()
// Persona { nombre: 'Pierre', edad: 25, pais: 'Rep.Dominicana' }


// ---INICIO DE HERENCIA/DELEGACION---
// NO HAY HERENCIA "REAL" - delegan los objetos en el otro buscando en el prototipo.


class Estudiante extends(Persona) {
    constructor(nombre, edad, pais, numMatricula, curso){
        super(nombre, edad, pais = 'España') //<---REFERENCIA AL PADRE
        this.numMatricula = numMatricula
        this.curso = curso
    }
    saludar(){
        super.saludar() // <--- Hola, soy Juan, de España, y tengo 21 años
        console.log(`Estudio ${this.curso}`) //<--- Estudio Web
    }
}

e1 = new Estudiante ('Juan', 21, '', 0034, 'Web')
e1.mostrar()
e1.saludar()