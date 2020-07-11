function initMap(){
    var startPoint = {
    zoom: 10,
    center: {lat:51.5074,lng:-0.1278}
    }
    // Add the map to the website
var map = new
google.maps.Map(document.getElementById('london-map'), startPoint);

// var markers = [
    
//         {coords:{lat:,lng:-},
//         location:''},

//         {coords:{lat:,lng:-},
//         content:''},

//         {coords:{lat:,lng:-},
//         content:''},
        
//         {coords:{lat:,lng:-},
//         content:''},
        
//         {coords:{lat:,lng:-},
//         content:''},            
        
//         {coords:{lat:,lng:-},
//         content:''},
        
//         {coords:{lat:,lng:-},
//         content:''},
        
//         {coords:{lat:,lng:-},
//         content:''},    
//         ];
    
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