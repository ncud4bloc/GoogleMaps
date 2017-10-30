$(function(){

    function myMap() {
        var mapProp= {center:new google.maps.LatLng(latitude,longitude),zoom:10,};
        var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
    } 
  
    $(".button").on("click",function(event){
        var latitude = $('#latitude').val();
        var longitude = $('#longitude').val();
        mapProp= {center:new google.maps.LatLng(latitude,longitude),zoom:10,};
        map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }); 
});