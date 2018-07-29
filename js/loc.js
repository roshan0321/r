window.onload = getMyLocation;
function getMyLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayLocation,displayerror);
  } else {
    alert("Oops, no geolocation support");
  }
}
function displayLocation(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  var div = document.getElementById("location");
  div.innerHTML = latitude + "," + longitude;
  showMap(position.coords);

}
function displayerror(error){
  var errorTypes={
    0:"unknown error"
    1:"permission deniyed by user"
    2:"position not available"
    3:"required timed out"
  };
  var errorMessage=errorTypes[error.code];
  if (error.code==1 || error.code==2){
    errorMessage=errorMessage+" "+error.message;
  }
  var div=document.getElementById("location");
  div.innerHTML=errorMessage;
}
var map;
function showMap(coords) {
var googleLatAndLong = new google.maps.LatLng(coords.latitude,coords.longitude);
var mapOptions = {
zoom: 10,
center: googleLatAndLong,
mapTypeId: google.maps.MapTypeId.ROADMAP
};
var mapDiv = document.getElementById("map");
map = new google.maps.Map(mapDiv, mapOptions);
}
