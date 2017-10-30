var latitude;
var longitude;

$(function(){

    function myMap() {
        var mapProp= {center:new google.maps.LatLng(latitude,longitude),zoom:10,};
        var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
    } 
  
    $(".button").on("click",function(event){
        latitude = $('#latitude').val();
        longitude = $('#longitude').val();
        console.log('Latitude: '+latitude+', Longitude: '+longitude);
    }); 
});