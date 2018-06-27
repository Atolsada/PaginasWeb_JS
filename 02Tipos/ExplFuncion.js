//Explicación básica

console.log(renta(10000, 3, 0.3)) // Se guarda en c, t, i
console.log(renta(30000, 3, 0.35))

// Hardcoreado par ver los valores
function renta (c, t, i) { //c - capital t - tiempo i - interes
    return c * t * i
}

// Real
let r =  0.3 
console.log(renta(25000, 10, r))
function renta (c, t, i) { 
    return c * t * i
}