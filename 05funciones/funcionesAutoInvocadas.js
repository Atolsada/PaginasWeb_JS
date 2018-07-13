//(1)

// function mostrar(){
//     console.log ('Yo soy esto que ves')
// };


//(2)

(function mostrar () {
    console.log('Yo soy esto que ves')
})(); //<--- OJO con ese punto y coma para que funcionen ambas autoinvocadas


//(3)

(function () {
    console.log('Yo soy esto que ves, aunque no tengo nombre')
})();
