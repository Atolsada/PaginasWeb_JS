//Ejercicio DNI


function DNI(num) {
    const LETRAS = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    return LETRAS [num%23]
    //const aLETRAS = 'TRWAGMYFPDXBNJZSQVHLCKET'
    //return aLETRAS [num%23]
}
console.log(DNI(48408554))
console.log(DNI(49321791))