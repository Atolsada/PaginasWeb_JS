if (localStorage.numVisitas) {
    // Existe numVisitas en localStorage
    localStorage.numVisitas++
} else {
    // No existe numVisitas en localStorage
    localStorage.numVisitas = 1
} 
console.log('Visita número', localStorage.numVisitas)

// Como sería SI FUERA SINCRONO
// data = navigator.geolocation.getCurrentPosition()
// console.log(data)

navigator.geolocation.getCurrentPosition(
     (data) => { console.log(data)},
    (error) => {console.log(error)} 
) 


/*  .clearWatch
    .getCurrentPosition <--- Espera un CALLBACK de geolocalizacion*/

/* navigator.geolocation.getCurrentPosition( (data) => {
    console.log(data)
}) */