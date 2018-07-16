let oPersona ={     // Funciones que asignamos a propiedades (es la propiedad que sale en amarillo [saludar])
    name: 'Pepe',
    edad: 33,
    saludar: function(){
        console.log(`Hola, me llamo ${this.name}`) // Especificamos [name] dentro de oPersona
    }
}

oPersona.saludar()


let aDatos = [2, 3, 4, 5]

/* JSON.stringify(oPersona) */
console.log('Tengo un string' + JSON.stringify(oPersona));
console.log(typeof JSON.stringify(oPersona));

console.log('Tengo un string' + JSON.stringify(aDatos));
console.log(typeof JSON.stringify(aDatos));