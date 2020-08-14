// function initMap(){
//         var startPoint = {
//         zoom: 5,
//         center: {lat:45.4384,lng:10.9916}
//         }
//         // Add the map to the website
//     var map = new
//     google.maps.Map(document.getElementById('map'), startPoint);

//     var markers = [
//         {
//             coords:{lat:51.5074,lng:-0.1278},
//             location:'<h3>London, England</h3>'},

//             {coords:{lat:37.9838,lng:23.7275},
//             content:'<h3>Athens, Greece</h3>'},

//             {coords:{lat:41.9028,lng:12.4964},
//             content:'<h3>Rome, Italy</h3>'},
            
//             {coords:{lat:55.9533,lng:-3.1883},
//             content:'<h3>Edinburgh, Scotland</h3>'},
            
//             {coords:{lat:50.0755,lng:14.4378},
//             content:'<h3>Prague, Czech Republic</h3>'},            
            
//             {coords:{lat:45.0812,lng:13.6387},
//             content:'<h3>Rovinj, Croatia</h3>'},
            
//             {coords:{lat:48.6493,lng:-2.0257},
//             content:'<h3>Saint-Malo, France</h3>'},
            
//             {coords:{lat:45.4384,lng:10.9916},
//             content:'<h3>Verona, Italy</h3>'},    
//             ];
        
//             for(var i = 0; i < markers.length; i++){
//                 addMarker(markers[i]);
//             }
            

//             function addMarker(props){
//                 var marker = new google.maps.Marker({
//                   position:props.coords,
//                   map:map,
//                 });
          
//                   // Opens window displaying Location Information
//                   if(props.content){
//                     var infoWindow = new google.maps.InfoWindow({
//                       content:props.content
//                     });
          
//                     marker.addListener('click', function(){
//                       infoWindow.open(map, marker);
//                     });

//                 // if(props.content){
//                 //     var infoWindow = new google.maps.InfoWindow({
//                 //       content:props.content
//                 //     });
//         };
// }
// }