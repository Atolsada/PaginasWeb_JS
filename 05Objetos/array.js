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
