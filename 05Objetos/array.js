// ARRAYS

let oDatos = {}
// oDatos = new Object() oDatos es "una instancia" del objeto
// Ejemplo vida real "somos instancias de la clase personas"
// Pasar de algo abstracto a algo concreto


aDatos = [1,2]
// aDatos = new array()

console.log(aDatos.length)
aDatos[10] = 4
console.log(aDatos)
console.log(typeof aDatos[7])
aDatos[7] = 'Pepe'
aDatos[5] = {}

console.log(aDatos + [3,4])
console.log(aDatos.concat ( [3,4]))

let aNombres = ['Pepe', 'Luis', 'Arancha', 'Rosa', 'Maria']
// aNombresOriginal = aNombres <--- Con esto no guardamos la copia
aNombresOriginal = aNombres.join('|').split('|') //<--- hacemos string el array con el join y luego le aplicamos el split para recuperar el array
aNombres.sort()
// aNombres.reverse()
console.log(aNombres)
console.log(aNombresOriginal)


//*SLICE*

dNombres = ['Pepe', 'Luis', 'Arancha', 'Rosa', 'Maria']
console.log(dNombres.slice(1,4))
console.log(dNombres)

dClon = dNombres.slice(0,dNombres.length) //<--- El metodo de clonar tipico y comun
dClon.push('Juan') //<--- Añadimos Juan al clon, no al original
console.log(dClon)
let dElegidos = dNombres.splice(2,0,'Antonio') //<--- Para añadirlo en una posicion concreta **NO FUNCIONA**

//*SPLICE*

let aElegidos = aNombres.splice(1,2)
console.log(aNombres) //<--- [ 'Pepe', 'Rosa', 'Maria' ]
console.log(aElegidos) //<--- [ 'Luis', 'Arancha' ]


bNombres = ['Pepe', 'Luis', 'Arancha', 'Rosa', 'Maria']
let bElegidos = bNombres.splice(1,2,'Carlos', 'Juan')
console.log(bNombres)  //<--- [ 'Pepe', 'Carlos', 'Juan', 'Rosa', 'Maria' ]
console.log(bElegidos) //<--- [ 'Luis', 'Arancha' ]


cNombres = ['Pepe', 'Luis', 'Arancha', 'Rosa', 'Maria']
let cElegidos = cNombres.splice(1)
console.log(cNombres)  //<--- [ 'Pepe' ]
console.log(cElegidos) //<--- [ 'Luis', 'Arancha', 'Rosa', 'Maria' ]