// center of the map
var center = [-33.8650, 151.2094];

// Create the map
var map = L.map('map', { scrollWheelZoom: false }).setView(center, 10);

// Set up the OSM layer
L.tileLayer(
  'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18
  }).addTo(map);
