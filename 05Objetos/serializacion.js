let oPersona ={     // Funciones que asignamos a propiedades (es la propiedad que sale en amarillo [saludar])
    name: 'Pepe',
    edad: 33,
    saludar: function(){
        console.log(`Hola, me llamo ${this.name}`) // Especificamos [name] dentro de oPersona
    }
}

// oPersona.name *= 2  - es un NaN y da Null
oPersona.saludar()



let aDatos = [2, 3, 4, 5]

/* JSON.stringify(oPersona) */
console.log('Tengo un string' + JSON.stringify(oPersona));
console.log(typeof JSON.stringify(oPersona));

console.log('Tengo un string' + JSON.stringify(aDatos));
console.log(typeof JSON.stringify(aDatos));


// Parsear string, PERO NO VALE CUALQUIER STRING
/* let datosString = JSON.stringify(oPersona) */
// let datosString = 'Hola, me llamo Pepe'  Ej, string no valido - Unexpected token H in JSON at position 0
// let datosString = "{name: 'Pepe', edad: 33 }"  Ej, string no valido
let datosString = '{ "name": "Pepe", "edad": 33 }' // Arreglado para que funcionase este tipo de string
let oDatos = JSON.parse(datosString)
console.log(typeof oDatos)
console.log(oDatos)


