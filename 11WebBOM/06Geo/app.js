function mapaLoc() {
    console.log('Hola')
    // mapa con geolocalización
    // ejemplo básico del uso del nuevo API de HTML5

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (pos) { //pos de position
            let domMapa = document.getElementById("miMapa");
            let latitude = pos.coords.latitude; //position coordenadas latitud y guardo en latitud
            let longitude = pos.coords.longitude; //position coordenadas longitud y guardo en longitud
            let options = {
                position: new google.maps.LatLng(latitude, longitude),
                title: "Tu localización",
                zoom: 19,
                mapTypeId:google.maps.MapTypeId.ROADMAP
            }; // fin de options
            let map = new google.maps.Map(domMapa, options); //La funcion constructora de mapas de google, sitio de tu DOOM y las opciones
            let marker = new google.maps.Marker(options);
            let circle = new google.maps.Circle({
                map: map, radius: pos.coords.accuracy
            }); // fin de circle
            circle.bindTo('center', marker, 'position');
            marker.setMap(map);
            map.setCenter(new google.maps.LatLng(latitude, longitude));
        },
        function (error) {
            console.log(error.message);
        },
        {enableHighAccuracy : true}); // fin de getCurrentPosition
    }
}

document.addEventListener('DOMContentLoaded', mapaLoc)
