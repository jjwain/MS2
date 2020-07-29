function initMap(){
    var startPoint = {
    zoom: 12,
    center: {lat:41.9028,lng:12.4964}
    }
    // Add the map to the website
var map = new
google.maps.Map(document.getElementById('map'), startPoint);

var markers = [
    
        {coords:{lat: 41.8902,lng: 12.4922},
        location:'Colosseum'},

        {coords:{lat: 41.8986,lng: 12.4769},
        content:'Pantheon'},

        {coords:{lat: 41.8925,lng: 12.4853},
        content:'Roman Forum'},
        
        {coords:{lat: 41.9009,lng: 12.4833},
        content:'Trevi Fountain'},
        
        {coords:{lat: 41.9022,lng: 12.4539},
        content:"St. Peter's Basilica"},             
        ];
    
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