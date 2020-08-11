// function initMap(){
//     var startPoint = {
//     zoom: 13,
//     center: {lat:51.5113,lng:-0.1137},
//     minZoom: 11
//     }
//     // Add the map to the website
// var map = new
// google.maps.Map(document.getElementById('map'), startPoint);

// var markers = [
    
//         {coords:{lat: 51.5138,lng:-0.0984},
//         content:'St. Pauls Cathedral'},

//         {coords:{lat: 51.5081,lng:-0.0759},
//         content:'Tower of London'},

//         {coords:{lat: 51.5194,lng:-0.1270},
//         content:'The British Museum'},
        
//         {coords:{lat: 51.5033,lng:-0.1195},
//         content:'The London Eye'},
        
//         {coords:{lat:51.5014,lng:-0.1419},
//         content:'Buckingham Palace'}              
//         ];
    
//         for(var i = 0; i < markers.length; i++){
//           addMarker(markers[i]);
//       }
      

//       function addMarker(props){
//           var marker = new google.maps.Marker({
//             position:props.coords,
//             map:map,
//           });
    
//             // Opens window displaying Location Information
//             if(props.content){
//               var infoWindow = new google.maps.InfoWindow({
//                 content:props.content
//               });
    
//               marker.addListener('click', function(){
//                 infoWindow.open(map, marker);
//               });
//             // if(props.content){
//             //     var infoWindow = new google.maps.InfoWindow({
//             //       content:props.content
//             //     });
//     };
// }
// }

// $("#lon-1").click(function(){
//   $(".dropDown1").fade("1000").add("#lon1-info");
// }); 

