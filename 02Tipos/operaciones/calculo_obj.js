// Programacion orientada a objetos

/* function sumar(a){   --->(*)
    a.result = a.num1 + a.num2
} */
// Los objetos tienen propiedas estaticas y dinamicas
let calculos = { //objeto, coleccion de propiedades
    num1 : '0', // [''] ó [0] es lo mismo
    num2 : '0',
    result : '0',
    // UNA PROPIEDAD DE UN OBJETO PUEDE SER OTRO OBJETO
    sumar: function(){
        this.result = this.num1 + this.num2 // --->(*)Podemos sustituirlo por esta linea
    },
    mostrar : function (){
        console.log (calculos.result) // --->(**) Locura ya del profesor pero es correcto, copiado de debajo
    }
}

calculos.num1 = 23
calculos.num2 = 3
// sumar(calculos)
calculos.sumar() // --->(*) Y poner esto así / calculos.sumar() Para llamar a la función dentro del objeto
//console.log (calculos.result) --->(**) Sustituido en el objeto de arriba
// [.] operador de propiedades de objetos
// los objetos tienen metodos/funciones que hacen las cosas
// EJ. Una persona tiene la funcion hablar con las propiedades: grave, mal hablado, soso.