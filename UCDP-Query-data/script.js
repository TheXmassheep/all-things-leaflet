// Initialize the map and set its view to a specific location and zoom level
const map = L.map('map').setView([51.505, -0.09], 13);

// Add a tile layer to the map (OpenStreetMap tiles)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Load GeoJSON from an external file
fetch('output.geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            onEachFeature: function (feature, layer) {
                //layer.bindPopup("<strong>" + feature.properties.name + "</strong><br>" + 
                //    "ConflictId: " + feature.properties.ConflictId.join(', ') + "<br>" +
                //    "Primary Party: " + feature.properties.PrimaryParty + "<br>" +
                //    "Region: " + feature.properties.Region);
            }
        }).addTo(map);
    })
    .catch(error => console.error('Error loading the GeoJSON file:', error));

