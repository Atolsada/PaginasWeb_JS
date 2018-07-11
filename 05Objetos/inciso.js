//Valores por defecto

function calculaPrecio(precioBase, iva = 1.21) {
    return precioBase * iva
}
let zapatillas = 300
//calculaPrecio(zapatillas)
console.log(calculaPrecio(zapatillas))

let libro = 300
//calculaPrecio(libro, 1,07) <--- Le incluimos el valor iva por que es diferente el de un libro
console.log(calculaPrecio(libro, 1.07))