try{
   let x = noExiste()
   throw('Este es mi error') // Lanzamos un error con throw
}
catch(error){
    alert('Unos monos están jugando con el servidor, lo sentimos', error)
    // alert("Unos monos están jugando con el servidor, lo sentimos: " + error) ---> Te indica el error tambien
}