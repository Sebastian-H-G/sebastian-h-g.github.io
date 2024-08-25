const questions = [
    { 
        question: 'What is the capital of Canada? 🇨🇦', 
        correctAnswer: 'Ottawa', 
        easyOptions: ['Ottawa', 'Washington, D.C.', 'Mexico City', 'London'], 
        hardOptions: ['Ottawa', 'Toronto', 'Vancouver', 'Montreal'], 
        country: 'Canada'
    },
    { 
        question: 'What is the capital of Mexico? 🇲🇽', 
        correctAnswer: 'Mexico City', 
        easyOptions: ['Mexico City', 'Washington, D.C.', 'Buenos Aires', 'Madrid'], 
        hardOptions: ['Mexico City', 'Guadalajara', 'Monterrey', 'Puebla'], 
        country: 'Mexico'
    },
    { 
        question: 'What is the capital of the United States? 🇺🇸', 
        correctAnswer: 'Washington, D.C.', 
        easyOptions: ['Washington, D.C.', 'London', 'Paris', 'Ottawa'], 
        hardOptions: ['Washington, D.C.', 'New York City', 'Los Angeles', 'Chicago'], 
        country: 'United States'
    },
    { 
        question: 'What is the capital of Guatemala? 🇵🇪', 
        correctAnswer: 'Guatemala City', 
        easyOptions: ['Guatemala City', 'San Salvador', 'Tegucigalpa', 'Belmopan'], 
        hardOptions: ['Guatemala City', 'Antigua', 'Quetzaltenango', 'Escuintla'], 
        country: 'Guatemala'
    },
    { 
        question: 'What is the capital of Belize? 🇧🇪', 
        correctAnswer: 'Belmopan', 
        easyOptions: ['Belmopan', 'Honduras', 'San Salvador', 'Tegucigalpa'], 
        hardOptions: ['Belmopan', 'Belize City', 'San Ignacio', 'Corozal'], 
        country: 'Belize'
    },
    { 
        question: 'What is the capital of Honduras? 🇭🇳', 
        correctAnswer: 'Tegucigalpa', 
        easyOptions: ['Tegucigalpa', 'Managua', 'San Salvador', 'Guatemala City'], 
        hardOptions: ['Tegucigalpa', 'San Pedro Sula', 'La Ceiba', 'Choluteca'], 
        country: 'Honduras'
    },
    { 
        question: 'What is the capital of El Salvador? 🇸🇻', 
        correctAnswer: 'San Salvador', 
        easyOptions: ['San Salvador', 'Managua', 'Tegucigalpa', 'Guatemala City'], 
        hardOptions: ['San Salvador', 'Santa Ana', 'San Miguel', 'Usulután'], 
        country: 'El Salvador'
    },
    { 
        question: 'What is the capital of Nicaragua? 🇳🇮', 
        correctAnswer: 'Managua', 
        easyOptions: ['Managua', 'San Salvador', 'Tegucigalpa', 'Guatemala City'], 
        hardOptions: ['Managua', 'León', 'Granada', 'Matagalpa'], 
        country: 'Nicaragua'
    },
    { 
        question: 'What is the capital of Costa Rica? 🇨🇷', 
        correctAnswer: 'San José', 
        easyOptions: ['San José', 'Panama City', 'Havana', 'Bogotá'], 
        hardOptions: ['San José', 'Alajuela', 'Cartago', 'Heredia'], 
        country: 'Costa Rica'
    },
    { 
        question: 'What is the capital of Panama? 🇵🇦', 
        correctAnswer: 'Panama City', 
        easyOptions: ['Panama City', 'San José', 'Bogotá', 'Lima'], 
        hardOptions: ['Panama City', 'Colón', 'David', 'La Chorrera'], 
        country: 'Panama'
    },
    { 
        question: 'What is the capital of the Bahamas? 🇧🇸', 
        correctAnswer: 'Nassau', 
        easyOptions: ['Nassau', 'Kingston', 'Havana', 'San Juan'], 
        hardOptions: ['Nassau', 'Freeport', 'West End', 'High Rock'], 
        country: 'The Bahamas'
    },
    { 
        question: 'What is the capital of Cuba? 🇨🇺', 
        correctAnswer: 'Havana', 
        easyOptions: ['Havana', 'Kingston', 'Port au Prince', 'San Juan'], 
        hardOptions: ['Havana', 'Santiago de Cuba', 'Camagüey', 'Holguín'], 
        country: 'Cuba'
    }
];
// Add more questions here if needed
      let score = 0;
let highscore = parseInt(localStorage.getItem('highscore')) || 0;
let currentQuestionIndex = 0;

const scoreElement = document.getElementById('score').querySelector('span');
const highscoreElement = document.getElementById('highscore').querySelector('span');
scoreElement.textContent = score;
highscoreElement.textContent = highscore;
        
let map = L.map('map').setView([20, 0], 2); // Set initial view
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        // Load GeoJSON data for countries
        let countriesLayer;

        function loadGeoJSON() {
            fetch('https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json')
                .then(response => response.json())
                .then(data => {
                    countriesLayer = L.geoJSON(data, {
                        style: function (feature) {
                            return { color: '#555', weight: 1, fillOpacity: 0.5 };
                        }
                    }).addTo(map);
                });
        }

        loadGeoJSON();function highlightCountry(countryName) {
    if (!countriesLayer) {
        console.error('countriesLayer is not defined');
        return;
    }

    if (!countryName) {
        console.error('countryName is not provided');
        return;
    }

    console.log('Highlighting country:', countryName);

    let countryFound = false;

    countriesLayer.eachLayer(layer => {
        if (layer.feature.properties.name === countryName) {
            layer.setStyle({ fillColor: 'yellow', fillOpacity: 1 });
            countryFound = true;
        } else {
            layer.setStyle({ fillColor: '#555', fillOpacity: 0.5 });
        }
    });

    if (!countryFound) {
        console.warn('Country not found:', countryName);
    }
}

// Initialize Chart.js
// Event listener for dashboard button
document.querySelector('.dashboard-btn').addEventListener('click', () => {
    document.getElementById('dashboard-modal').style.display = 'block';
    updateDashboard(); // Function to update dashboard content
});

// Event listener for closing the modal
document.querySelector('.modal .close-btn').addEventListener('click', () => {
    document.getElementById('dashboard-modal').style.display = 'none';
});

// Function to update dashboard content
function updateDashboard() {
    // Fetch or calculate real data and update dashboard content
    document.getElementById('achievements').textContent = '0'; // Update with real data
    document.getElementById('activity').textContent = '0'; // Update with real data
    document.getElementById('usage').textContent = '0'; // Update with real data
    document.getElementById('correct-answers').textContent = '0'; // Update with real data
    document.getElementById('other-metrics').textContent = '0'; // Update with real data

    // Update charts
    scoreChart.data.labels = []; // Update with real labels
    scoreChart.data.datasets[0].data = []; // Update with real data
    scoreChart.update();

    activityChart.data.datasets[0].data = [0, 0]; // Update with real data
    activityChart.update();
}

// Initialize Chart.js
const scoreChartCanvas = document.getElementById('scoreChart').getContext('2d');
const activityChartCanvas = document.getElementById('activityChart').getContext('2d');

const scoreChart = new Chart(scoreChartCanvas, {
    type: 'line',
    data: {
        labels: [], // Dates or times
        datasets: [{
            label: 'Score Over Time',
            data: [],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: { 
                beginAtZero: true 
            },
            y: { 
                beginAtZero: true 
            }
        }
    }
});

const activityChart = new Chart(activityChartCanvas, {
    type: 'bar',
    data: {
        labels: ['Correct Answers', 'Incorrect Answers'],
        datasets: [{
            label: 'Activity',
            data: [0, 0], // Initial data
            backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)'],
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: { 
                beginAtZero: true 
            },
            y: { 
                beginAtZero: true 
            }
        }
    }
});
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
function loadQuestion() {
    const difficulty = document.getElementById('difficulty').value;
    const filteredQuestions = generateQuestions(difficulty);
    shuffle(filteredQuestions);

    const currentQuestion = filteredQuestions[currentQuestionIndex];
    
    // Display the question
    document.getElementById('question').textContent = currentQuestion.question;
    
    // Set the answer options based on the difficulty level
    let options = [];
    if (difficulty === 'easy') {
        options = currentQuestion.easyOptions;
    } else if (difficulty === 'hard') {
        options = currentQuestion.hardOptions;
    }
    
    shuffle(options);
    
    // Set the options to buttons
    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach((button, index) => {
        button.textContent = options[index];
        button.onclick = () => checkAnswer(button.textContent, currentQuestion.correctAnswer);
    });

    // Highlight the corresponding country on the map
    highlightCountry(currentQuestion.country);
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

function checkAnswer(selectedAnswer, correctAnswer) {
    const messageElement = document.getElementById('message');
    
    if (selectedAnswer === correctAnswer) {
        score++;
        messageElement.textContent = `Correct! 🎉`;
        messageElement.style.background = 'green';
        messageElement.style.color = 'white';
        messageElement.style.padding = '10px 20px';
        messageElement.style.borderRadius = '12px';
        messageElement.style.display = 'inline-block'; // Shrinks to the content width
    } else {
        score = 0;
        messageElement.textContent = `Wrong! 😞 The correct answer is ${correctAnswer}.`;
        messageElement.style.background = 'red';
        messageElement.style.color = 'black';
        messageElement.style.padding = '10px 20px';
        messageElement.style.borderRadius = '12px';
        messageElement.style.display = 'inline-block'; // Shrinks to the content width
    }

    // Add fade-in class to show the message
    messageElement.classList.add('fade-in');
    
    // Set a timeout to remove the message after it has been shown
    setTimeout(() => {
        messageElement.classList.remove('fade-in');
        messageElement.classList.add('fade-out');
        
        // Wait for fade-out transition to complete before clearing text and loading new question
        setTimeout(() => {
            messageElement.classList.remove('fade-out');
            messageElement.textContent = '';
            messageElement.style.display = 'none'; // Hide the element completely

            updateScore(); // Update score and charts before loading new question
            loadQuestion(); // Load the next question after the message disappears
        }, 500); // Match this duration with CSS transition
    }, 1000); // Display message for 1 second
}

function updateScore() {
    scoreElement.textContent = score;
    if (score > highscore) {
        highscore = score;
        localStorage.setItem('highscore', highscore);
createConfetti();   triggerWiggleAndGlowAnimation();
   highscoreElement.textContent = highscore;
        
        // Trigger animation on highscore change
        highscoreElement.classList.add('animate');
        setTimeout(() => highscoreElement.classList.remove('animate'), 1000);
        
        // Update score chart data
        const now = new Date().toLocaleTimeString();
        scoreChart.data.labels.push(now);
        scoreChart.data.datasets[0].data.push(score);
        scoreChart.update();
    }
    
    // Update activity chart
    activityChart.data.datasets[0].data[0] = score; // Correct answers
    activityChart.data.datasets[0].data[1] = questions.length - currentQuestionIndex; // Incorrect answers
    activityChart.update();
}

// Generate or fetch questions based on difficulty
function generateQuestions(difficulty) {
    // Return a list of questions based on difficulty
    return questions;
}

// Event listener for dashboard button
document.getElementById('dashboard-btn').addEventListener('click', () => {
    document.getElementById('dashboard-modal').style.display = 'block';
    updateDashboard(); // Function to update dashboard content
});

// Event listener for closing the modal
document.querySelector('.modal .close-btn').addEventListener('click', () => {
    document.getElementById('dashboard-modal').style.display = 'none';
});

// Function to update dashboard content
function updateDashboard() {
    // Fetch or calculate real data and update dashboard content
    document.getElementById('achievements').textContent = '0'; // Update with real data
    document.getElementById('activity').textContent = '0'; // Update with real data
    document.getElementById('usage').textContent = '0'; // Update with real data
    document.getElementById('correct-answers').textContent = score; // Update with real data
    document.getElementById('other-metrics').textContent = '0'; // Update with real data
}
document.getElementById('difficulty').addEventListener('change', function() {
    const selectedDifficulty = this.value;
    console.log('Selected difficulty:', selectedDifficulty);

    // Update your application based on the selected difficulty
    updateDifficulty(selectedDifficulty);
});

function updateDifficulty(difficulty) {
    // Add your logic here to update the application based on the difficulty
    // For example:
    if (difficulty === 'easy') {
        // Set up for easy difficulty
    } else if (difficulty === 'hard') {
        // Set up for hard difficulty
    }
}
// Initial load
loadQuestion();