//Cualquier funcion por el hecho de poner NEW delante ya es una funcion constructora

//

function Factura (empresa, total){
    this.empresa = empresa
    this.total = total
    //console.log (this) ---> no es normal esto, es para ver que está dentro de Ejm.
}
// (4)
Factura.prototype.mostrar = function(){
    console.log (this)
}


/* (1) 
let f = new Factura ('Boracay', 200)
console.log (f) */


// (2)
let f1 = new Factura ('Boracay', 200)
// (3)
f1.concepto = 'libros'

//(2)
let f2 = new Factura('GHoogle', 3000)
console.log (f1)
console.log (f2)

//(5)
f1.mostrar()
f2.mostrar()


//(4) Ej. que esto lo hacemos desde el inicio de aprender JS
// Los objetos en JS siempre son dinamicos sean del tipo que sean y se les puede meter propiedades
// al no ser que se les congele/frozen

let a = {}
let b = {x:23}