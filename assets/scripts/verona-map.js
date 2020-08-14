// function initMap(){
//     var startPoint = {
//     zoom: 14,
//     center: {lat:45.4384,lng:10.9916}
//     }
//     // Add the map to the website
// var map = new
// google.maps.Map(document.getElementById('map'), startPoint);


// var markers = [
    
//         {coords:{lat: 45.6049,lng: 10.6351},
//         location:'Lake Garda'},

//         {coords:{lat: 45.4419,lng: 10.9984},
//         content:"Juliet's House"},

//         {coords:{lat: 45.4390,lng: 10.9944},
//         content:'Verona Arena'},
        
//         {coords:{lat: 45.4426,lng: 10.9793},
//         content:'Basilica di San Zeno Maggiore'},
        
//         {coords:{lat: 45.4435,lng: 10.9982},
//         content:'Piazza dei Signori'},               
//         ];
    
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