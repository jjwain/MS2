// function initMap(){
//     var startPoint = {
//     zoom: 14,
//     center: {lat:48.6493,lng:-2.0257}
//     }
//     // Add the map to the website
// var map = new
// google.maps.Map(document.getElementById('map'), startPoint);

// var markers = [
    
//         {coords:{lat: 48.6495,lng:-2.0257},
//         location:'Saint-Malo Cathedral'},

//         {coords:{lat: 48.6550,lng:-2.0232 },
//         content:'Fort National'},

//         {coords:{lat: 48.6195,lng:-1.9945},
//         content:'Grand Aquarium Saint Malo'},
        
//         {coords:{lat: 48.6522,lng:-2.0331},
//         content:'Grand Bé'},
        
//         {coords:{lat: 48.6386,lng:-2.0186},
//         content:'Petit Bé'},
// ];
    
//         for(var i = 0; i < markers.length; i++){
//             addMarker(markers[i]);
//         }
        

//         function addMarker(props){
//             var marker = new google.maps.Marker({
//               position:props.coords,
//               map:map,
//             });
      
//               // Opens window displaying Location Information
//               if(props.content){
//                 var infoWindow = new google.maps.InfoWindow({
//                   content:props.content
//                 });
      
//                 marker.addListener('click', function(){
//                   infoWindow.open(map, marker);
//                 });

//             // if(props.content){
//             //     var infoWindow = new google.maps.InfoWindow({
//             //       content:props.content
//             //     });
//     };
// }
// }