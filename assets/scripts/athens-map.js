function initMap(){
    var startPoint = {
    zoom: 13,
    center: {lat:37.9838,lng:23.7275}
    }
    // Add the map to the website
var map = new
google.maps.Map(document.getElementById('map'), startPoint);

var markers = [
    
        {coords:{lat: 37.9715,lng: 23.7257},
        content:'Acropolis of Athens'},

        {coords:{lat: 37.9715,lng: 23.7267},
        content:'Parthenon'},

        {coords:{lat: 37.9693,lng: 23.7331},
        content:'Temple of Olympian Zeus'},
        
        {coords:{lat: 37.9755,lng: 23.7349},
        content:'Syntagma Square'},
        
        {coords:{lat: 37.9758,lng: 23.7268},
        content:'Monastiraki'} 
]           
        
    
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