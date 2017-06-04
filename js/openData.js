var address;
function initMap(){
     var mapDiv = document.getElementById('map');
     var map = new google.maps.Map(mapDiv, {
       center: {lat: 4.670225, lng: -74.100221},
       zoom: 12});
     var marker = new google.maps.Marker({
       position: {lat: 4.624335, lng: -74.063644},
       map: map,
       title: 'Bogotá D.C.'
     });
     var geocoder = new google.maps.Geocoder();
    function centrosCo(){
       for (var local in centrosC){
           var marker = new google.maps.Marker({
           position: centrosC[local].center,
           map: map,
           title: "local"
           //icon: shop
         });
       }
     }

  function museosyteatros() {
    for (var local in museos) {
      // Add the circle for this city to the map.
      var cityCircle = new google.maps.Circle({
        strokeColor: 'blue',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: 'blue',
        fillOpacity: 0.35,
        map: map,
        center: museos [local].center,
        radius: 150
      });
    }
            for (var local in teatros) {
      // Add the circle for this city to the map.
      var cityCircle = new google.maps.Circle({
        strokeColor: 'green',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: 'green',
        fillOpacity: 0.35,
        map: map,
        center: teatros[local].center,
        radius: 150
      });
    }
  }
  function hotelesydemas(){
    for (var local in bogotaRest) {
           // Add the circle for this city to the map.
           var cityCircle = new google.maps.Circle({
             strokeColor: 'orange',
             strokeOpacity: 0.8,
             strokeWeight: 2,
             fillColor: 'orange',
             fillOpacity: 0.35,
             map: map,
             center: bogotaRest[local].center,
             radius: Math.sqrt(bogotaRest[local].population) * 200
           });
         }

           for (var local in bogotaHotel) {
           // Add the circle for this city to the map.
           var cityCircle = new google.maps.Circle({
             strokeColor: 'gray',
             strokeOpacity: 0.8,
             strokeWeight: 2,
             fillColor: 'gray',
             fillOpacity: 0.35,
             map: map,
             center: bogotaHotel[local].center,
             radius: Math.sqrt(bogotaHotel[local].population) * 200
           });
         }

         for (var local in bogotaHotel){
           var marker = new google.maps.Marker({
           position: bogotaHotel[local].center,
           map: map,
           title: local
         });

         }
       }
    function planDescanso(){
      initMap();
       //Localidad donde se realizará la sugerencia
           var maxPopulation = [bogotaHotel.suba.population,Object ];
           for(var i in bogotaHotel){
             if( bogotaHotel[i].population > maxPopulation[0]){
               maxPopulation[0] = bogotaHotel[i].population;
               maxPopulation[1] = i;
             }
           }
           $.ajax({
           type: "GET",
           url: "datasets/Descanso/alojamiento.csv",
           dataType: "text",
           success: function(data) {processData(data);}
           });

           function processData(allText) {
             var lines = [];
             var allTextLines = allText.split(/\r\n|\n/);
             var headers = allTextLines[0].split(',');
             for (var i=1; i<allTextLines.length; i++) {
             var data = allTextLines[i].split(',');
             if (data.length == headers.length) {
             var tarr = [];
             for (var j=0; j<headers.length; j++) {
             tarr.push(headers[j]+":"+data[j]);
             }
             lines.push(tarr);
             }
            }
            console.log(lines);
            address = lines[4][4].split(":")[1];
            console.log(address);
          //   for( var i in lines){
          //     if(lines[i][5].split(":")[1] == maxPopulation[1].toUpperCase())
          //       console.log(lines[i][4].split(":")[1]);
          //  }
           ///
           geocodeAddress(geocoder, map)
         }
      }
      function geocodeAddress(geocoder, resultsMap) {
       geocoder.geocode({'address': address}, function(results, status) {
         if (status === 'OK') {
           resultsMap.setCenter(results[0].geometry.location);
           console.log(results[0].geometry.location);
           var marker = new google.maps.Marker({
             map: resultsMap,
             position: results[0].geometry.location
           });
         } else {
           alert('Geocode was not successful for the following reason: ' + status);
         }
       });
     }

        initMap.planDescanso = planDescanso;
        initMap.centrosCo = centrosCo;
        initMap.hotelesydemas = hotelesydemas;
      }

        var bogotaRest = {
         chapinero : {
           center: { lat: 4.652205, lng: -74.053716},
           population : 136
           },
         usaquen : {
           center: { lat: 4.740023, lng: -74.027255},
           population: 62
           },
         candelaria : {
           center: { lat: 4.598153, lng: -74.072922},
           population: 20
           },
         teusaquillo : {
           center: { lat: 4.641912, lng: -74.086291},
           population: 17
           },
         kennedy : {
           center: { lat: 4.633011, lng: -74.149538},
           population: 11
           },
         barriosU : {
           center: { lat: 4.671127, lng: -74.073755},
           population: 4
           },
         engativa : {
           center: { lat: 4.704339, lng: -74.111795},
           population: 3
           },
         suba : {
           center: { lat: 4.764170, lng: -74.076472},
           population: 3
           },
         puentaA : {
           center: { lat: 4.618530, lng: -74.110969},
           population: 2
                   }
         };

         var bogotaHotel = {
         chapinero : {
           center: { lat: 4.652205, lng: -74.053716},
           population : 111
           },
         usaquen : {
           center: { lat: 4.740023, lng: -74.027255},
           population: 46
           },
         candelaria : {
           center: { lat: 4.598153, lng: -74.072922},
           population: 44
           },
         teusaquillo : {
           center: { lat: 4.641912, lng: -74.086291},
           population: 103
           },
         kennedy : {
           center: { lat: 4.633011, lng: -74.149538},
           population: 3
           },
         barriosU : {
           center: { lat: 4.671127, lng: -74.073755},
           population: 18
           },
         engativa : {
           center: { lat: 4.704339, lng: -74.111795},
           population: 11
           },
         suba : {
           center: { lat: 4.764170, lng: -74.076472},
           population: 5
           },
         puentaA : {
           center: { lat: 4.618530, lng: -74.110969},
           population: 2
                   }
         };

         var centrosC = {
           centroA : {
             center: {lat: 4.666587, lng: -74.053143}
           },
           granE : {
             center: {lat: 4.647559, lng: -74.101886}
           },
           titanP : {
             center: {lat: 4.694847, lng: -74.086435}
           },
           calima :{
             center: {lat: 4.618609, lng: -74.086183}
           },
           santafe :{
             center: {lat: 4.762410, lng: -74.046599}
           },
           atlantis :{
             center: {lat: 4.666186, lng: -74.055584}
           }
         };

         var museos = {
         oro : {
           center: {lat: 4.601743, lng: -74.072024}
         },
         botero : {
           center: {lat: 4.596738, lng: -74.073162}
         },
         mambo : {
           center: {lat: 4.609995, lng: -74.069362}
         },
         casaDeLaM :{
           center: {lat: 4.597010, lng: -74.073586}
         },
         policia :{
           center: {lat: 4.597577, lng: -74.078456}
         },
         historiaNatural :{
           center: {lat: 4.642149, lng: -74.081736}
         }
       };

         var teatros = {
         colon : {
           center: {lat: 4.666587, lng: -74.053143}
         },
         colsubsidio : {
           center: {lat: 4.647559, lng: -74.101886}
         },
         libelulaD : {
           center: {lat: 4.694847, lng: -74.086435}
         },
         leonardus :{
           center: {lat: 4.618609, lng: -74.086183}
         },
         julioM :{
           center: {lat: 4.762410, lng: -74.046599}
         },
         villaM :{
           center: {lat: 4.666186, lng: -74.055584}
         }
       };
