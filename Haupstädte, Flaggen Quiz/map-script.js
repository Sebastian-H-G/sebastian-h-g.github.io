// Initialize variables
let currentCountry = null;
let selectedContinent = 'world';
let currentGeoJSONLayer = null;  // Holds the current GeoJSON layer for easier removal

// Set up the map with Leaflet.js
let map = L.map('map').setView([20, 0], 2);  // Initial view of the world

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Load GeoJSON data for the selected continent
function loadGeoJSON(continent) {
    fetch(`geojson/${continent}.json`)
        .then(response => response.json())
        .then(data => {
            // If there is an existing layer, remove it
            if (currentGeoJSONLayer) {
                map.removeLayer(currentGeoJSONLayer);
            }

            // Add the new GeoJSON layer to the map
            currentGeoJSONLayer = L.geoJSON(data, {
                onEachFeature: onCountryClick
            }).addTo(map);

            // Fit the map to the bounds of the new layer
            map.fitBounds(currentGeoJSONLayer.getBounds());

            // Generate a new question based on the loaded continent
            generateQuestion(data);
        })
        .catch(error => console.error('Error loading GeoJSON:', error));
}

// Handle country clicks
function onCountryClick(feature, layer) {
    layer.on('click', function () {
        if (feature.properties.name === currentCountry) {
            document.getElementById('feedback').textContent = 'Correct!';
        } else {
            document.getElementById('feedback').textContent = 'Wrong, try again!';
        }
    });
}

// Generate a random country question
function generateQuestion(geoData) {
    const countries = geoData.features.map(feature => feature.properties.name);
    currentCountry = countries[Math.floor(Math.random() * countries.length)];
    document.getElementById('question').textContent = `Which country is ${currentCountry}?`;
}

// Handle continent selection
document.getElementById('continent-selector').addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
        selectedContinent = e.target.dataset.continent;
        loadGeoJSON(selectedContinent);
        document.getElementById('feedback').textContent = 'Select a country!';
    }
});

// Initial setup: Load the world map first
loadGeoJSON('world');
