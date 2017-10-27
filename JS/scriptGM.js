var latitude = 33.326714;
var longitude = -111.609777;

function myMap() {
    var mapProp= {center:new google.maps.LatLng(latitude,longitude),zoom:10,};
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
} 
  
/*$(function(){*/
    $("form").on("submit",function(event){
        latitude = $('#latitude').val();
        longitude = $('#longitude').val();
        console.log('Latitude: '+latitude+', Longitude: '+longitude);
    });   
/*});*/