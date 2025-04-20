// Initialize variables
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
                    // Remove default tooltips and popups
                    layer.unbindPopup();
                    
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
                highlightCorrectCountry();  // Highlight the correct country in a more eye-catching way
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
        correctLayer.setStyle({ color: "orange", weight: 6, dashArray: '10, 5' });  // More eye-catching style
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

// Confetti animation function
function createConfetti() {
    const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548'];

    function createPiece() {
        const piece = document.createElement('div');
        piece.classList.add('confetti');
        piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        piece.style.width = Math.random() * 20 + 'px';
        piece.style.height = Math.random() * 20 + 'px';
        piece.style.left = (Math.random() * window.innerWidth) + 'px';
        piece.style.top = '-20px';
        piece.style.animationDuration = '3s'; // Set animation duration to 3 seconds
        document.body.appendChild(piece);
        piece.addEventListener('animationend', function() {
            piece.parentNode.removeChild(piece);
        });
    }

    // Adjust the number of confetti pieces
    const totalPieces = 700;
    const interval = 5; // milliseconds

    let i = 0;
    let intervalId = setInterval(function() {
        createPiece();
        i++;
        if (i >= totalPieces) {
            clearInterval(intervalId);
        }
    }, interval);
}

function triggerWiggleAndGlowAnimation() {
    const highscoreElement = document.getElementById('highscore');
    
    // Remove the animation class if it's already there to allow retriggering the animation
    highscoreElement.classList.remove('animate');
    
    // Use a timeout to ensure the class is removed before adding it back
    setTimeout(() => {
        highscoreElement.classList.add('animate');
    }, 10);
}

// Update score and high score
function updateScore() {
    document.getElementById('score').textContent = `Score: ${score}`;
    if (score > highscore) {
		createConfetti();
		triggerWiggleAndGlowAnimation();
        highscore = score;
        document.getElementById('highscore').textContent = `Highscore: ${highscore}`;
    }
}

// Initial setup: Load the world map first
loadGeoJSON('world');
