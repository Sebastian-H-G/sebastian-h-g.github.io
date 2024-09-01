// Initialize variables
<<<<<<< HEAD
let currentCountry = null;
let selectedContinent = 'world';
let currentGeoJSONLayer = null;  // Holds the current GeoJSON layer for easier removal
let score = 0;
let highscore = 0;
let attempts = 0;
let correctLayer = null;  // To hold the correct country's layer

// Define colors for different continents
const continentColors = {
    'Africa': '#ffcc00',
    'Asia': '#ff6666',
    'Europe': '#66ccff',
    'North America': '#99ff99',
    'Oceania': '#ffccff',
    'South America': '#ff9999',
    'world': '#3388ff'  // Default color for the world map
};

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
                style: function (feature) {
                    return {
                        color: continentColors[feature.properties.continent] || '#3388ff', // Use continent color or default
                        weight: 2
                    };
                },
                onEachFeature: function (feature, layer) {
                    // Disable the default country name popups
                    layer.bindPopup('');
                    
                    // Add hover effects
                    layer.on('mouseover', function () {
                        layer.setStyle({ color: '#ff0000', weight: 3 });  // Highlight color
                    });
                    layer.on('mouseout', function () {
                        layer.setStyle({ color: continentColors[feature.properties.continent] || '#3388ff', weight: 2 });
                    });

                    // Add event listener for clicking on the country
                    layer.on('click', function () {
                        handleCountryClick(feature, layer);
                    });
                }
            }).addTo(map);

            // Fit the map to the bounds of the new layer
            map.fitBounds(currentGeoJSONLayer.getBounds());

            // Generate a new question based on the loaded continent
            generateQuestion(data);
        })
        .catch(error => console.error('Error loading GeoJSON:', error));
}

// Handle country clicks and check for correctness
function handleCountryClick(feature, layer) {
    if (attempts < 2) {
        if (feature.properties.name === currentCountry) {
            document.getElementById('feedback').textContent = 'Correct!';
            score += 10;  // Increase score
            updateScore();
            attempts = 0;  // Reset attempts
            correctLayer = null;  // Reset correct layer
            setTimeout(nextCountry, 2000);  // Move to next country after 2 seconds
        } else {
            attempts += 1;
            if (attempts === 2) {
                document.getElementById('feedback').textContent = `Wrong! The correct answer was ${currentCountry}.`;
                score = 0;  // Reset score
                updateScore();
                highlightCorrectCountry();  // Highlight the correct country in green
                setTimeout(nextCountry, 2000);  // Move to next country after 2 seconds
            } else {
                document.getElementById('feedback').textContent = 'Wrong, try again!';
            }
        }
    }
}

// Highlight the correct country after two wrong guesses
function highlightCorrectCountry() {
    if (correctLayer) {
        correctLayer.setStyle({ color: "green", weight: 4 });
    }
}

// Generate a random country question
function generateQuestion(geoData) {
    const countries = geoData.features.map(feature => feature.properties.name);
    const countryIndex = Math.floor(Math.random() * countries.length);
    currentCountry = countries[countryIndex];

    // Store the correct layer for highlighting later
    correctLayer = currentGeoJSONLayer.getLayers().find(layer => layer.feature.properties.name === currentCountry);

    document.getElementById('question').textContent = `Which country is ${currentCountry}?`;
}

// Move to the next country (called after 2 seconds)
function nextCountry() {
    document.getElementById('feedback').textContent = '';  // Clear feedback message
    attempts = 0;  // Reset attempts
    generateQuestion(currentGeoJSONLayer.toGeoJSON()); // Generate next question from current layer
}

// Handle continent selection
document.getElementById('continent-selector').addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
        selectedContinent = e.target.dataset.continent;
        score = 0;  // Reset score when changing continents
        attempts = 0;  // Reset attempts
        updateScore();
        loadGeoJSON(selectedContinent);
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
=======
        let currentCountry = null;
        let selectedContinent = 'world';
        let currentGeoJSONLayer = null;
        let score = 0;
        let highscore = 0;
        let attempts = 0;
        let correctCountryLayer = null;  // Holds the correct country for highlighting

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
                    if (currentGeoJSONLayer) {
                        map.removeLayer(currentGeoJSONLayer);
                    }

                    // Add the new GeoJSON layer to the map without displaying country names or popups
                    currentGeoJSONLayer = L.geoJSON(data, {
                        style: { color: "#3388ff", weight: 2 },
                        onEachFeature: function (feature, layer) {
                            layer.on('click', function () {
                                handleCountryClick(feature, layer);
                            });
                        }
                    }).addTo(map);

                    map.fitBounds(currentGeoJSONLayer.getBounds());

                    generateQuestion(data);
                })
                .catch(error => console.error('Error loading GeoJSON:', error));
        }

        // Handle country clicks and check for correctness
        function handleCountryClick(feature, layer) {
            if (attempts < 2) {
                if (feature.properties.name === currentCountry) {
                    document.getElementById('feedback').textContent = 'Correct!';
                    score += 10;
                    updateScore();
                    attempts = 0;
                    setTimeout(nextCountry, 2000);
                } else {
                    attempts += 1;
                    if (attempts === 2) {
                        document.getElementById('feedback').textContent = `Wrong! The correct answer was ${currentCountry}.`;
                        score = 0;
                        updateScore();
                        highlightCorrectCountry();
                        setTimeout(nextCountry, 2000);
                    } else {
                        document.getElementById('feedback').textContent = 'Wrong, try again!';
                    }
                }
            }
        }

        // Highlight the correct country after two incorrect guesses
        function highlightCorrectCountry() {
            currentGeoJSONLayer.eachLayer(function (layer) {
                if (layer.feature.properties.name === currentCountry) {
                    layer.setStyle({ color: "#FF0000", weight: 3 });  // Highlight correct country in red
                    correctCountryLayer = layer;  // Store the layer to reset style later if needed
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
            if (correctCountryLayer) {
                correctCountryLayer.setStyle({ color: "#3388ff", weight: 2 });  // Reset the style of the correct country
                correctCountryLayer = null;  // Clear reference
            }
            loadGeoJSON(selectedContinent);
        }

        // Handle continent selection
        document.getElementById('continent-selector').addEventListener('click', function (e) {
            if (e.target.tagName === 'BUTTON') {
                selectedContinent = e.target.dataset.continent;
                loadGeoJSON(selectedContinent);
                score = 0;
                attempts = 0;
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
>>>>>>> 3857e46993fb756e0a53da43cad294b59652f779
