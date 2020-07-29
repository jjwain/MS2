function initMap(){
    var startPoint = {
    zoom: 15,
    center: {lat:45.0812,lng:13.6387}
    }
    // Add the map to the website
var map = new
google.maps.Map(document.getElementById('map'), startPoint);

var markers = [
    
        {coords:{lat: 45.0787,lng: 13.6389},
        location:'Galerija Adris'},

        {coords:{lat: 45.0832,lng: 13.6311},
        content:'Church of St. Euphemia'},

        {coords:{lat: 45.0671,lng: 13.6366},
        content:'Park forest Zlatni Rt'},
        
        {coords:{lat: 45.0662,lng: 13.6520},
        content:'Cuvi Beach'},
        
        {coords:{lat: 45.0822,lng: 13.6343},
        content:"Balbi's Arch"}, 
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