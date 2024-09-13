// Initialize the map
const map = L.map('map', {
    worldCopyJump: true,
    maxBounds: [
        [-90, -180], // South-West corner
        [90, 180]    // North-East corner
    ],
    maxBoundsViscosity: 1.0,
    zoomAnimation: true,
    fadeAnimation: true,
    zoomSnap: 0.25,
    zoomDelta: 0.25
}).setView([20, 0], 2);

// Custom tile layer (CartoDB Positron for a clean map with no names)
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://carto.com/attributions">CartoDB</a>',
    maxZoom: 18,
    noWrap: true
}).addTo(map);

// River data with locations for markers (10 rivers)
const rivers = [
    { name: 'Amazon River', country: 'Brazil', coords: [-3.4653, -62.2159] },
    { name: 'Nile River', country: 'Egypt', coords: [30.0444, 31.2357] },
    { name: 'Yangtze River', country: 'China', coords: [29.5630, 106.5516] },
    { name: 'Mississippi River', country: 'USA', coords: [35.1495, -90.0490] },
    { name: 'Danube River', country: 'Germany', coords: [48.2082, 16.3738] },
    { name: 'Ganges River', country: 'India', coords: [25.5941, 85.1376] },
    { name: 'Volga River', country: 'Russia', coords: [56.3269, 44.0059] },
    { name: 'Mekong River', country: 'Vietnam', coords: [10.8231, 106.6297] },
    { name: 'Thames River', country: 'UK', coords: [51.5074, -0.1278] },
    { name: 'Rhine River', country: 'Netherlands', coords: [51.4416, 5.4697] },
    { name: 'Seine River', country: 'France', coords: [48.8566, 2.3522] },
    { name: 'Congo River', country: 'Congo', coords: [-4.3250, 15.3222] },
    { name: 'Zambezi River', country: 'Zambia', coords: [-15.3875, 28.3228] },
    { name: 'Murray River', country: 'Australia', coords: [-35.2809, 149.1300] },
    { name: 'Indus River', country: 'Pakistan', coords: [31.5497, 74.3436] },
    { name: 'Parana River', country: 'Argentina', coords: [-32.8902, -60.6939] },
    { name: 'Tigris River', country: 'Iraq', coords: [33.3152, 44.3661] },
    { name: 'Euphrates River', country: 'Syria', coords: [35.2020, 38.5964] },
    { name: 'Yellow River', country: 'China', coords: [37.8694, 112.5603] },
    { name: 'Lena River', country: 'Russia', coords: [60.7202, 114.4068] },
    { name: 'Orinoco River', country: 'Venezuela', coords: [8.3833, -62.6667] },
    { name: 'Yukon River', country: 'Canada', coords: [64.2823, -135.0000] },
    { name: 'Loire River', country: 'France', coords: [47.2184, -1.5536] },
    { name: 'Tocantins River', country: 'Brazil', coords: [-5.4961, -49.2448] },
    { name: 'Fraser River', country: 'Canada', coords: [49.2827, -123.1207] },
    { name: 'Salween River', country: 'Myanmar', coords: [16.8661, 96.1951] },
    { name: 'Amur River', country: 'Russia', coords: [48.7946, 134.8771] },
    { name: 'Po River', country: 'Italy', coords: [45.0703, 7.6869] },
    { name: 'Irrawaddy River', country: 'Myanmar', coords: [19.7450, 96.1297] },
    { name: 'Shannon River', country: 'Ireland', coords: [53.2734, -7.7783] },
    { name: 'Dnieper River', country: 'Ukraine', coords: [50.4501, 30.5234] },
    { name: 'Tiber River', country: 'Italy', coords: [41.9028, 12.4964] },
    { name: 'Rio Grande', country: 'USA', coords: [31.7619, -106.4850] },
    { name: 'Elbe River', country: 'Germany', coords: [53.5511, 9.9937] },
    { name: 'Tagus River', country: 'Portugal', coords: [38.7223, -9.1393] },
    { name: 'Arno River', country: 'Italy', coords: [43.7696, 11.2558] },
    { name: 'Mackenzie River', country: 'Canada', coords: [67.4585, -134.8999] },
    { name: 'Douro River', country: 'Portugal', coords: [41.1496, -8.6109] },
    { name: 'Sao Francisco River', country: 'Brazil', coords: [-13.0165, -44.0119] },
    { name: 'Tocantins River', country: 'Brazil', coords: [-5.5280, -47.4820] },
    { name: 'Vistula River', country: 'Poland', coords: [52.2297, 21.0122] }
];


// Score and highscore tracking
let score = 0;
let highscore = localStorage.getItem('highscore') ? parseInt(localStorage.getItem('highscore')) : 0;
let currentRiverIndex = 0;

// DOM elements
const questionElement = document.getElementById('question');
const scoreElement = document.getElementById('score');
const highscoreElement = document.getElementById('highscore');
const correctMessage = document.getElementById('correctMessage');
const wrongMessage = document.getElementById('wrongMessage');

// Initialize highscore
highscoreElement.innerText = highscore;

// Function to show the next question
function askQuestionForRiver(river) {
    questionElement.innerHTML = `Click on the <u>${river.name}</u>`;
    currentRiverIndex = rivers.indexOf(river);
}

// Function to update the score and check highscore
function updateScore(isCorrect) {
    if (isCorrect) {
        score += 1;
        scoreElement.innerText = score;

        // Update highscore if current score exceeds highscore
        if (score > highscore) {
            highscore = score;
            localStorage.setItem('highscore', highscore);
            highscoreElement.innerText = highscore;
        }
        showCorrectMessage();
    } else {
        score = 0;
        scoreElement.innerText = score;
        showWrongMessage();
    }
}

// Show correct message with animation
function showCorrectMessage() {
    correctMessage.classList.add('correct'); // Add class to show message with animation
    correctMessage.style.display = 'block'; // Ensure display is block for animation to work
    
    setTimeout(() => {
        correctMessage.style.display = 'none'; // Hide the message after animation
        correctMessage.classList.remove('correct'); // Remove class to reset state
        askNextQuestion(); // Move to the next question
    }, 2000); // Match the duration of the animation
}

// Show wrong message with animation
function showWrongMessage() {
    wrongMessage.classList.add('wrong'); // Add class to show message with animation
    wrongMessage.style.display = 'block'; // Ensure display is block for animation to work
    
    setTimeout(() => {
        wrongMessage.style.display = 'none'; // Hide the message after animation
        wrongMessage.classList.remove('wrong');
askNextQuestion();		// Remove class to reset state
    }, 2000); // Match the duration of the animation
}


// Function to check the answer
function checkAnswer(clickedRiverIndex) {
    const isCorrect = clickedRiverIndex === currentRiverIndex;
    updateScore(isCorrect);
}

// Add circle markers for the rivers
rivers.forEach((river, index) => {
    const circleMarker = L.circleMarker(river.coords, {
        color: 'blue',
        radius: 5,
        fillColor: '#3388ff',
        fillOpacity: 0.8,
        weight: 2
    }).addTo(map);

    // Define hover styles
    const originalStyle = {
        color: 'blue',
        fillColor: '#3388ff',
        radius: 5
    };
    const hoverStyle = {
        color: 'red',
        fillColor: '#ff6666',
        radius: 8
    };

    // Apply hover style
    circleMarker.on('mouseover', () => {
        circleMarker.setStyle(hoverStyle);
    });

    // Revert to original style
    circleMarker.on('mouseout', () => {
        circleMarker.setStyle(originalStyle);
    });

    // Make the circle marker clickable and check if it's the correct river
    circleMarker.on('click', () => {
        checkAnswer(index);
    });
});


// Example: Ask for a random river at the start
function askNextQuestion() {
    const nextRiver = rivers[Math.floor(Math.random() * rivers.length)];
    askQuestionForRiver(nextRiver);
}

// Start the quiz with the first question
askNextQuestion();
