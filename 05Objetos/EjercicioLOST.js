//(8)
// let oVuelo ={
//     airline:'Oceanic',
//     number:'815',
//     departure:{
//         clave_IATA: 'SYD',
//         time:'2004-09-22 14:55',
//         city:'Sydney',
//     },
//     arrival:{
//         clave_IATA:'LAX',
//         time:'2004-09-23 10:42',
//         ciudad: 'Angeles'
//     }
// }
// oVuelo.arrival.ciudad = 'Los Angeles' //(1)Añadido para que veamos que se puede añadir propiedad cuando queramos
// console.log(oVuelo)

//(2) bucle, vuelta de cada una de las propiedades de mi objeto de arriba
// for (const key in oVuelo){ <--- key es el nom de la pro en cada vuelta(airline, number, departure, arrival)
//for (const key in oVuelo){
//      oVuelo[key] <--- ese key vale (oceanic, 815...)

// for (const key in oVuelo){
//     if (typeof oVuelo[key] === 'object'){} //(3) como hacer para ver un objeto en un objeto, saber cual es objeto
//     else{
//             console.log('La propiedad ${key} vale ${vuelo[key]}')
//         }
//     }
    //(4)comiteado- console.log(`La propiedad ${key} vale ${vuelo[key]}`)
    //oVuelo[key]



//(5)
//(9) commentado
// console.log(oVuelo)

// function leeObjeto (oDatos) {
//     for (const key in oDatos) {

//         if (typeof oDatos[key] === 'object') { 

//         } else {
//             console.log(`La propiedad ${key} vale ${oDatos[key]}`)
//         } 
//     }   
// }
// leeObjeto(oVuelo)

//(6) recursividad, funcion que dentro se invoca a si misma (con otro parametro, obviously)
//(10) commentado
// console.log(oVuelo)

// function leeObjeto (oDatos) {
//     for (const key in oDatos) {

//         if (typeof oDatos[key] === 'object') { 
//             leeObjeto(oDatos[key])
//         } else {
//             console.log(`La propiedad ${key} vale ${oDatos[key]}`)
//         } 
//     }  
// }

// leeObjeto(oVuelo)

//(7) NO SE PUEDE HACER CON RECURSIVIDAD
// programacion lineal (Ej:BASIC) - programacion estructurada(Ej:Js) (evolucion del lenguaje de programacion) 
// orientacion a objetos

//(11)

let oVuelo = {
    airline:'Oceanic',
    number:'815',
    departure : {
        clave_IATA : 'SYD',
        time: '2004-09-22 14:55',
        ciudad: 'Sydney'
    },
    arival: {
        clave_IATA : 'LAX',
        time: '2004-09-23 10:42',
        ciudad: 'Angeles'
    },
    mostrar : function () {
        //(12) console.log(`Soy un vuelo`)
    }
}

oVuelo.arival.ciudad = 'Los Angeles'
oVuelo.mostrar = function(){ // <---(13) añadimos así el paso (12)
    console.log(`Soy un vuelo`)
}
//(15) comment 
// console.log(oVuelo)

// function leeObjeto (oDatos) {
//     for (const key in oDatos) {

//         if (typeof oDatos[key] === 'object') { 
//             console.log(`Las propiedades de ${key} son: `)
//             leeObjeto(oDatos[key])
//         } else {
//             console.log(`La propiedad ${key} vale ${oDatos[key]}`)
//         } 
//     }  
// }
// oVuelo.mostrar()

//(14) dejarlo ya perfecto pero al recursividad es un problema
//(15) continuacion comment
// oVuelo.arival.ciudad = 'Los Angeles'

// oVuelo.mostrar = function (oDatos) {
//     for (const key in oDatos) {

//         if (typeof oDatos[key] === 'object') { 
//             console.log(`Las propiedades de ${key} son: `)
//             oVuelo.mostrar(oDatos[key])
//         } else {
//             console.log(`La propiedad ${key} vale ${oDatos[key]}`)
//         }    
//     }

// console.log(oVuelo)

// function leeObjeto (oDatos) {
//     for (const key in oDatos) {

//         if (typeof oDatos[key] === 'object') { 
//             console.log(`Las propiedades de ${key} son: `)
//             leeObjeto(oDatos[key])
//         } else {
//             console.log(`La propiedad ${key} vale ${oDatos[key]}`)
//         } 
//     }  
// }

// oVuelo.mostrar()

//(16) Casi END
//(17) comment todo
// oVuelo.calcularPasajeros = function () {
// }
// oVuelo.mostrar = function (oDatos = this) {
//     for (const key in oDatos) {
//         if (typeof oDatos[key] === 'function') { 

//         } else if (typeof oDatos[key] === 'object') { 
//             console.log(`Las propiedades de ${key} son: `)
//             this.mostrar(oDatos[key])
//         } else {
//             console.log(`La propiedad ${key} vale ${oDatos[key]}`)
//         }    
//     }
// }
// console.log(oVuelo)

// function leeObjeto (oDatos) {
//     for (const key in oDatos) {

//         if (typeof oDatos[key] === 'object') { 
//             console.log(`Las propiedades de ${key} son: `)
//             leeObjeto(oDatos[key])
//         } else {
//             console.log(`La propiedad ${key} vale ${oDatos[key]}`)
//         } 
//     }  
// }
// console.clear
// oVuelo.mostrar()

//(18) Retoques END

oVuelo.calcularPasajeros = function () {
}
oVuelo.mostrar = function (oDatos = this) {
    for (const key in oDatos) {
        if (oDatos.hasOwnProperty(key) && (typeof oDatos[key] !== 'function')) {
            if (typeof oDatos[key] === 'object') { 
                console.log(`Las propiedades de ${key} son: `)
                this.mostrar(oDatos[key])
            } else {
                console.log(`La propiedad ${key} vale ${oDatos[key]}`)
            }    
        }    
    }
}
console.log(oVuelo)

function leeObjeto (oDatos) {
    for (const key in oDatos) {

        if (typeof oDatos[key] === 'object') { 
            console.log(`Las propiedades de ${key} son: `)
            leeObjeto(oDatos[key])
        } else {
            console.log(`La propiedad ${key} vale ${oDatos[key]}`)
        } 
    }  
}
console.clear()
oVuelo.mostrar()


