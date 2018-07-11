let oVuelo ={
    airline:'Oceanic',
    number:'815',
    departure:{
        clave_IATA: 'SYD',
        time:'2004-09-22 14:55',
        city:'Sydney',
    },
    arrival:{
        clave_IATA:'LAX',
        time:'2004-09-23 10:42',
        ciudad: 'Angeles'
    }
}
oVuelo.arrival.ciudad = 'Los Angeles' //(1)Añadido para que veamos que se puede añadir propiedad cuando queramos
console.log(oVuelo)

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

console.log(oVuelo)

function leeObjeto (oDatos) {
    for (const key in oDatos) {

        if (typeof oDatos[key] === 'object') { 

        } else {
            console.log(`La propiedad ${key} vale ${oDatos[key]}`)
        } 
    }   
}

leeObjeto(oVuelo)

//(6) recursividad, funcion que dentro se invoca a si misma (con otro parametro, obviously)

console.log(oVuelo)

function leeObjeto (oDatos) {
    for (const key in oDatos) {

        if (typeof oDatos[key] === 'object') { 
            leeObjeto(oDatos[key])
        } else {
            console.log(`La propiedad ${key} vale ${oDatos[key]}`)
        } 
    }  
}

leeObjeto(oVuelo)