//Ejercicio DNI


function DNI(num) {
    const LETRAS = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    return LETRAS [num%23]
    //const aLETRAS = 'TRWAGMYFPDXBNJZSQVHLCKET'
    //return aLETRAS [num%23]
}
console.log(DNI(48408554))
console.log(DNI(49052267))


//MEJORADO

function DNI(num) {
    if (isNaN(num *1) || num < 1 || num > 99999999 ) {
        return 'No es un numero valido'
    }
     const LETRAS = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 
     'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']
     // return aLETRAS[num%23]    
     
     const aLETRAS = 'TRWAGMYFPDXBNJZSQVHLCKET'
     return aLETRAS[num%23]    
 }
 
 function probar () {
     console.log(DNI('05017822'))
     console.log(DNI(50178228))
     console.log(DNI(50821728))
     console.log(DNI('Pepe'))
 }
 
 probar()