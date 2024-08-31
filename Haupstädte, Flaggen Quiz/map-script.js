// Initialize variables
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
