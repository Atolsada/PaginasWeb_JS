//clase, no lleva ()
// metodo constructor, se ejecuta con new - nombre de clase. Y ya
class Factura {
    constructor(empresa, total){
        this.empresa = empresa
        this.total = total
    }
    mostrar(){
        console.log(this)
    }
} 
// ASI COMBERTIMOS LA FUNCION FACTURA EN LA CLASE FACTURA
// NEW es el operador de clases
// SYNTACTYC SUGAR lo llaman, por que parece diferente pero por debajo es igual

/* function Factura (empresa, total){
    this.empresa = empresa
    this.total = total
} */
 
let f1 = new Factura('Boracay', 300)
f1.cliente = 'Pepe'
f1.mostrar()
