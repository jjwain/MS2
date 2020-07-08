function initMap(){
        var startPoint = {
        zoom: 3,
        center: {lat: 53.1004, lng: -2.4438}
        }
        // Add the map to the website
    var map = new
    google.maps.Map(document.getElementById('map'), startPoint);

    var markers = [
        {
            coords:{lat:51.5074,lng:-0.1278},
            location:'<h3>London, England</h3>'},

            {coords:{lat:37.9838,lng:23.7275},
            content:'<h3>Athens, Greece</h3>'},
            
            {coords:{lat:48.2082,lng:16.3738},
            content:'<h3>Vienna, Austria</h3>'},

            {coords:{lat:38.6971,lng:-9.4223},
            content:'<h3>Cascais, Portugal</h3>'},

            {coords:{lat:45.3271,lng:14.4422},
            content:'<h3>Rijeka, Croatia</h3>'},

            {coords:{lat:41.9028,lng:12.4964},
            content:'<h3>Rome, Italy</h3>'},
            
            {coords:{lat:51.8985,lng:-8.4756},
            content:'<h3>Cork, Ireland</h3>'},
            
            {coords:{lat:47.4979,lng:19.0402},
            content:'<h3>Budapest, Hungary</h3>'},            
            
            {coords:{lat:43.7696,lng:11.2558},
            content:'<h3>Florence, Italy</h3>'},
            
            {coords:{lat:45.4408,lng:12.3155},
            content:'<h3>Venice, Italy</h3>'},
            
            {coords:{lat:51.2093,lng:3.2247},
            content:'<h3>Bruges, Belgium</h3>'},
            
            {coords:{lat:55.9533,lng:-3.1883},
            content:'<h3>Edinburgh, Scotland</h3>'},
            
            {coords:{lat:50.0755,lng:14.4378},
            content:'<h3>Prague, Czech Republic</h3>'},
            
            {coords:{lat:51.3811,lng:-2.3590},
            content:'<h3>Bath, England</h3>'},            
            
            {coords:{lat:45.0812,lng:13.6387},
            content:'<h3>Rovinj, Croatia</h3>'},
            
            {coords:{lat:37.3891,lng:-5.9845},
            content:'<h3>Seville, Spain</h3>'},
            
            {coords:{lat:48.6493,lng:-2.0257},
            content:'<h3>Saint-Malo, France</h3>'},
            
            {coords:{lat:45.4384,lng:10.9916},
            content:'<h3>Verona, Italy</h3>'},    
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