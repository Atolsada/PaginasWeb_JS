// suma de valores dividido por cantidad de valores

//Sacar al media

//(1) media de 3
function media (a, b, c){
    return (a + b + c) / 3
}
console.log (media(2,4,6)) //(2)

//SOLUCION PARA HACER UNA FUNCION DE MEDIA SEA LA CANTIDAD QUE SEA DE VALORES

function mediaArray(aDatos){
    //(5)
    let suma = 0
    for (let i = 0; i < aDatos.length; i++) { //(4) (i=i+5 [cuenta de 5 en 5]) DA TANTAS VUELTAS COMO SEA ARRAY
        // suma = aDatos[i]; (6) cambiado para que no se aplique
        suma = suma + aDatos[i]  //(7) cambiado por lo que hay en (6)
    }
    return suma / aDatos.length //(8) para que nso devuelva la solucion
}
console.log(mediaArray([2,4,6, 8 ,12])) //(3)