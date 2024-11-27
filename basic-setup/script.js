// Initialize the map and set its view to a specific location and zoom level
const map = L.map('map').setView([51.505, -0.09], 13);

// Add a tile layer to the map (OpenStreetMap tiles)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker at the specified location
const marker = L.marker([51.505, -0.09]).addTo(map);
marker.bindPopup('<b>Hello world!</b><br>I am a popup.').openPopup();

// Add a circle to the map
const circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);
circle.bindPopup('I am a circle.');

// Add a polygon to the map
const polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map);
polygon.bindPopup('I am a polygon.');
