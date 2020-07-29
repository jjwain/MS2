function initMap(){
    var startPoint = {
    zoom: 12,
    center: {lat:50.0755,lng:14.4378}
    }
    // Add the map to the website
var map = new
google.maps.Map(document.getElementById('map'), startPoint);

var markers = [
    
        {coords:{lat: 50.0911,lng: 14.4016},
        location:'Prague Castle'},

        {coords:{lat: 50.0865,lng: 14.4114},
        content:'Charles Bridge'},

        {coords:{lat: 50.0909,lng: 14.4005}, 
        content:'St. Vitus Cathedral'},
        
        {coords:{lat: 50.0810,lng: 14.4280},
        content:'Wenceslas Square'},

        {coords:{lat: 50.0754,lng: 14.4142},
        content:'Dancing House'}               
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