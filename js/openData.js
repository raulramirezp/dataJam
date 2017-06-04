var restPorZona = {
  chapinero:{

  }
};
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

function initMap(){
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
    center: {lat: 4.624335, lng: -74.063644},
    zoom: 12});
  var marker = new google.maps.Marker({
    position: {lat: 4.624335, lng: -74.063644},
    map: map,
    title: 'Bogotá D.C.'
  });

          for (var local in bogotaRest) {
        // Add the circle for this city to the map.
        var cityCircle = new google.maps.Circle({
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#FF0000',
          fillOpacity: 0.35,
          map: map,
          center: bogotaRest[local].center,
          radius: Math.sqrt(bogotaRest[local].population) * 200
        });
      }

        for (var local in bogotaHotel) {
        // Add the circle for this city to the map.
        var cityCircle = new google.maps.Circle({
          strokeColor: 'green',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: 'green',
          fillOpacity: 0.35,
          map: map,
          center: bogotaHotel[local].center,
          radius: Math.sqrt(bogotaHotel[local].population) * 200
        });
      }
      function planDescanso(){
        var maxPopulation = [bogotaHotel.suba.population,Object ];
        for(var i in bogotaHotel){
          if( bogotaHotel[i].population > maxPopulation[0]){
            maxPopulation[0] = bogotaHotel[i].population;
            maxPopulation[1] = i;
          }
        }
        //Localidad donde se realizará la sugerencia
        var data;
        console.log(bogotaHotel[maxPopulation[1]]);
        data = {};
        $.ajax({url: './datasets/Descanso/alojamiento.csv',
        data: data,
        type: 'GET',
        dataType: 'cvs'
        });
        console.log(data);
      }

      initMap.planDescanso = planDescanso;
   }
