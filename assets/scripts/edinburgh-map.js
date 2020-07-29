function initMap(){
    var startPoint = {
    zoom: 12,
    center: {lat:55.9533,lng:-3.1883}
    }
    // Add the map to the website
    var map = new
    google.maps.Map(document.getElementById('map'), startPoint);

var markers = [
    
        {coords:{lat: 55.9486,lng: -3.1999},
        content:'Edinburgh Castle'},

        {coords:{lat: 55.9490,lng: -3.1899},
        content:'Edinburgh Old Town'},

        {coords:{lat: 55.9495,lng: -3.1909},
        content:"St Giles' Cathedral"},
        
        {coords:{lat: 55.9441,lng: -3.1618},
        content:"Arthur's Seat"},
        
        {coords:{lat: 55.9524,lng: -3.1933},
        content:'Scott Monument'},                
        ];
    
        for(var i = 0; i < markers.length; i++){
            addMarker(markers[i]);
        }
    
        for(var i = 0; i < markers.length; i++){
          addMarker(markers[i]);
      }
      

      function addMarker(props){
          var marker = new google.maps.Marker({
            position:props.coords,
            map:map,
          });
    
            // Opens window displaying Location Information
            if(props.content){
              var infoWindow = new google.maps.InfoWindow({
                content:props.content
              });
    
              marker.addListener('click', function(){
                infoWindow.open(map, marker);
              });
            // if(props.content){
            //     var infoWindow = new google.maps.InfoWindow({
            //       content:props.content
            //     });
    };
}
}