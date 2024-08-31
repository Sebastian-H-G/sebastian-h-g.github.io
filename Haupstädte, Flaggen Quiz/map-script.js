// Initialize variables
let currentCountry = null;
let selectedContinent = 'world';
let currentGeoJSONLayer = null;  // Holds the current GeoJSON layer for easier removal
let score = 0;
let highscore = 0;
let attempts = 0;

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

            // Add the new GeoJSON layer to the map without displaying country names
            currentGeoJSONLayer = L.geoJSON(data, {
                style: { color: "#3388ff", weight: 2 },  // Styling the countries
                onEachFeature: onCountryClick
            }).addTo(map);

            // Fit the map to the bounds of the new layer
            map.fitBounds(currentGeoJSONLayer.getBounds());

            // Generate a new question based on the loaded continent
            generateQuestion(data);
        })
        .catch(error => console.error('Error loading GeoJSON:', error));
}

// Handle country clicks and check for correctness
function onCountryClick(feature, layer) {
    layer.on('click', function () {
        if (attempts < 2) {
            if (feature.properties.name === currentCountry) {
                document.getElementById('feedback').textContent = 'Correct!';
                score += 10;  // Increase score
                updateScore();
                attempts = 0;  // Reset attempts
                setTimeout(nextCountry, 2000);  // Move to next country after 2 seconds
            } else {
                attempts += 1;
                if (attempts === 2) {
                    document.getElementById('feedback').textContent = `Wrong! The correct answer was ${currentCountry}.`;
                    score = 0;  // Reset score
                    updateScore();
                    attempts = 0;  // Reset attempts
                    setTimeout(nextCountry, 2000);  // Move to next country after 2 seconds
                } else {
                    document.getElementById('feedback').textContent = 'Wrong, try again!';
                }
            }
        }
    });
}

// Generate a random country question
function generateQuestion(geoData) {
    const countries = geoData.features.map(feature => feature.properties.name);
    currentCountry = countries[Math.floor(Math.random() * countries.length)];
    document.getElementById('question').textContent = `Which country is ${currentCountry}?`;
}

// Move to the next country (called after 2 seconds)
function nextCountry() {
    document.getElementById('feedback').textContent = '';  // Clear feedback message
    loadGeoJSON(selectedContinent);  // Reload the map with the selected continent
}

// Handle continent selection
document.getElementById('continent-selector').addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
        selectedContinent = e.target.dataset.continent;
        loadGeoJSON(selectedContinent);
        score = 0;  // Reset score when changing continents
        attempts = 0;  // Reset attempts
        updateScore();
    }
});

// Update score and high score
function updateScore() {
    document.getElementById('score').textContent = `Score: ${score}`;
    if (score > highscore) {
        highscore = score;
        document.getElementById('highscore').textContent = `Highscore: ${highscore}`;
    }
}

// Initial setup: Load the world map first
loadGeoJSON('world');
