$(document).ready(function() {
   // Initialize the map and assign it to a variable for later use
var map = L.map('map', {
    // Set latitude and longitude of the map center (required)
    center: [-33.854816, 151.216454],
    // Set the initial zoom level, values 0-18, where 0 is most zoomed-out (required)
    zoom: 5
});

// adding marker
var marker = L.marker([-33.854816, 151.216454]).addTo(mymap);

// Create a Tile Layer and add it to the map
var tiles = new L.tileLayer('http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png').addTo(map);
});