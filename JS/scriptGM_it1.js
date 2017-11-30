/* See  https://developers.google.com/maps/documentation/javascript/examples/ */
/* for examples using many of the Google Maps options (some mods are needed)  */

$(function(){
  
    $(".button").on("click",function(event){
        var latitude = $('#latitude').val();
        var longitude = $('#longitude').val();
        var message = $('#message').val();
        mapProp= {center:new google.maps.LatLng(latitude,longitude),zoom:10,};
        map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
        
        var marker = new google.maps.Marker({
          draggable: true,
          animation: google.maps.Animation.DROP,
          position: new google.maps.LatLng(latitude,longitude),
          map: map,
          title: message
        });
        marker.addListener('click', toggleBounce);
        
        function toggleBounce() {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }
      }
    });
   
});