
    // The value for 'accessToken' begins with 'pk...'
    mapboxgl.accessToken = 'pk.eyJ1IjoieGtpbmdhcnQiLCJhIjoiY2wwb282ZDZsMW1qdTNsbmVkZHpiOXgxZCJ9.pvtbgqiC5YjZKNyGIepzkQ'; 
    const map = new mapboxgl.Map({
      container: 'map',
      // Replace YOUR_STYLE_URL with your style URL.
      style: 'mapbox://styles/xkingart/cl0rdp2ro000314oergmmt3cs', 
      center: [-99.18191837224161,19.425530543790487],
      zoom: 15
    });

function fetchData(){
  return fetch('mexicoThings.json')
  .then(response =>{
    return response.json();
  })
}

function getCord(data){
  console.log(data.features[0].geometry.coordinates);
}





fetchData().then(function(data){
  getCord(data);
});

//function(someCord) same thing
/* function getCord(){
  getData()
  .then (someCord => { 
      someCord.features.array.forEach(element => {
        addMarker(element.geometry.coordinates);
          
      });
  })
}; */

function addMarker(cords) {
  var marker =  new mapboxgl.Marker()
      .setLngLat(cords)
      .addTo(map);
};


