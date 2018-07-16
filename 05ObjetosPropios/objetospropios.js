let oDatos = {
    nombre:'Pepe',
    apellidos:'Perez',
    edad: 22
}
oDatos.profesion = 'programador'
console.log(oDatos)


 let x = 22
 x *= 2

console.log(oDatos.edad *= 3)



//******************************************************//


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
    }
}

oVuelo.arival.ciudad = 'Los Angeles'
oVuelo.mostrar = function(){
    console.log(`Soy un vuelo`)
}

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