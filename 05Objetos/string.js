let cadena = 'Pepe'
let frase = 'Un anillo para gobernarlos a todos'
console.log ( cadena.length) //<--- Nos devuelve la longitud, en este caso es 4

//console.log (cadena.concat('Perez')) <--- concatenas otra cadena
console.log (cadena + 'Perez')

aCadena = cadena.split() //<--- combierte un string (operador en cadena) en un array
console.log(aCadena)
aCadena = cadena.split('') //<--- podemos hacer que nos guarde por letras
console.log(aCadena)
aFrase = frase.split(' ') //<--- para palabras
console.log(aFrase)


console.log (aFrase.join())//<--- devuelve un string con las propiedades de un array


console.log(frase.split(' ').join('')) //<---Mix que ponemos join que se aplique en lo anterior que es array
console.log(frase.split(' ').join('').toUpperCase())


console.log('Perez'.toUpperCase())
console.log('Perez'.toLowerCase())


'ciudades'.slice(2,5) //<--- ve de 2 y acaba en 5
'ciudades'.substr(2,3) //<--- empieza en 2 y desplazate 3


function capitalize(cadena){
    let aTexto = cadena.split(' ')
    for (let i = 0; i < aTexto.length; i++) {
        let palabra = aTexto[i]
        let aLetras = palabra.split('')
        aLetras[0] = aLetras[0].toUpperCase()
        palabra = aLetras.join('')
        aTexto[i] = palabra
    }
    let stringCap = aTexto.join(' ')
    return stringCap
}
console.log(capitalize(frase))


function capitalize2(cadena){
    let aTexto = cadena.split(' ')
    for (let i = 0; i < aTexto.length; i++) {
        
        let aLetras = aTexto[i].split('')
        aLetras[0] = aLetras[0].toUpperCase()
        aTexto[i] = aLetras.join('')
        
    }

    return aTexto.join(' ')
}
console.log(capitalize2(frase))



