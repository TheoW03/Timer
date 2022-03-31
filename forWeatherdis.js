function getLocation() {
    if (navigator.geolocation) {
        localStorage.setItem('navigatorGeo', true);
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        document.getElementById("x").innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var x = document.getElementById("x");
    document.getElementById.src = ""
    // var GEOCODING = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + 

    var GEOCODING = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + position.coords.latitude + '%2C' + position.coords.longitude + '&language=en';
    var s;
    var $self;
    $.getJSON(GEOCODING).done(function (location) {
        $.ajax({
            url: "https://geolocation-db.com/jsonp",
            jsonpCallback: "callback",
            dataType: "jsonp",
            success: function (location) {
                // $('#').html(location.country_name);
                // $('#state').html(location.city);
                // localStorage.content = location.city;
                // $('#state').html(localStorage.content);
                // $('#latitude').html(location.latitude);
                // $('#longitude').html(location.longitude);
                // $('#ip').html(location.IPv4);
                $self = location.city;
                $city = location.state;
                setSelf($self,$city);
            }
        });

        // get the text
        // alert the value to check if we got it

    })

    // x.innerHTML = "Latitude: " + position.coords.latitude + 
    // "<br>Longitude: " + position.coords.longitude;
}
function setSelf(s,state){
    cityAndPlace = s + ","+state;
    alert(cityAndPlace)
}
function getSe(){
    return cityAndPlace;
}
window.onload = function () {
    getLocation();
}
