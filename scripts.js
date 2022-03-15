
    // The value for 'accessToken' begins with 'pk...'
    mapboxgl.accessToken = 'pk.eyJ1IjoieGtpbmdhcnQiLCJhIjoiY2wwb282ZDZsMW1qdTNsbmVkZHpiOXgxZCJ9.pvtbgqiC5YjZKNyGIepzkQ'; 
    const map = new mapboxgl.Map({
      container: 'map',
      // Replace YOUR_STYLE_URL with your style URL.
      style: 'mapbox://styles/xkingart/cl0rdp2ro000314oergmmt3cs', 
      center: [-87.661557, 41.893748],
      zoom: 10.7
    });

    console.log("test")