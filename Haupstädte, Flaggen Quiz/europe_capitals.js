const questions = [
    { 
        question: 'What is the capital of Albania? 🇦🇱', 
        correctAnswer: 'Tirana', 
        easyOptions: ['Tirana', 'Athens', 'Skopje', 'Podgorica'], 
        hardOptions: ['Tirana', 'Durrës', 'Vlorë', 'Shkodër'], 
        country: 'Albania'
    },
    { 
        question: 'What is the capital of Andorra? 🇦🇩', 
        correctAnswer: 'Andorra la Vella', 
        easyOptions: ['Andorra la Vella', 'Madrid', 'Paris', 'Rome'], 
        hardOptions: ['Andorra la Vella', 'Escaldes-Engordany', 'Encamp', 'La Massana'], 
        country: 'Andorra'
    },
    { 
        question: 'What is the capital of Austria? 🇦🇹', 
        correctAnswer: 'Vienna', 
        easyOptions: ['Vienna', 'Bratislava', 'Berlin', 'Prague'], 
        hardOptions: ['Vienna', 'Salzburg', 'Graz', 'Innsbruck'], 
        country: 'Austria'
    },
    { 
        question: 'What is the capital of Belgium? 🇧🇪', 
        correctAnswer: 'Brussels', 
        easyOptions: ['Brussels', 'Amsterdam', 'Paris', 'Berlin'], 
        hardOptions: ['Brussels', 'Antwerp', 'Ghent', 'Bruges'], 
        country: 'Belgium'
    },
    { 
        question: 'What is the capital of Bosnia and Herzegovina? 🇧🇦', 
        correctAnswer: 'Sarajevo', 
        easyOptions: ['Sarajevo', 'Belgrade', 'Zagreb', 'Podgorica'], 
        hardOptions: ['Sarajevo', 'Banja Luka', 'Mostar', 'Tuzla'], 
        country: 'Bosnia and Herzegovina'
    },
    { 
        question: 'What is the capital of Bulgaria? 🇧🇬', 
        correctAnswer: 'Sofia', 
        easyOptions: ['Sofia', 'Bucharest', 'Athens', 'Belgrade'], 
        hardOptions: ['Sofia', 'Plovdiv', 'Varna', 'Burgas'], 
        country: 'Bulgaria'
    },
    { 
        question: 'What is the capital of Croatia? 🇭🇷', 
        correctAnswer: 'Zagreb', 
        easyOptions: ['Zagreb', 'Ljubljana', 'Sarajevo', 'Belgrade'], 
        hardOptions: ['Zagreb', 'Split', 'Dubrovnik', 'Rijeka'], 
        country: 'Croatia'
    },
    { 
        question: 'What is the capital of Cyprus? 🇨🇾', 
        correctAnswer: 'Nicosia', 
        easyOptions: ['Nicosia', 'Athens', 'Cairo', 'Ankara'], 
        hardOptions: ['Nicosia', 'Limassol', 'Larnaca', 'Paphos'], 
        country: 'Cyprus'
    },
    { 
        question: 'What is the capital of Czech Republic? 🇨🇿', 
        correctAnswer: 'Prague', 
        easyOptions: ['Prague', 'Vienna', 'Berlin', 'Budapest'], 
        hardOptions: ['Prague', 'Brno', 'Ostrava', 'Plzeň'], 
        country: 'Czech Republic'
    },
    { 
        question: 'What is the capital of Denmark? 🇩🇰', 
        correctAnswer: 'Copenhagen', 
        easyOptions: ['Copenhagen', 'Oslo', 'Stockholm', 'Helsinki'], 
        hardOptions: ['Copenhagen', 'Aarhus', 'Odense', 'Aalborg'], 
        country: 'Denmark'
    },
    { 
        question: 'What is the capital of Estonia? 🇪🇪', 
        correctAnswer: 'Tallinn', 
        easyOptions: ['Tallinn', 'Riga', 'Vilnius', 'Helsinki'], 
        hardOptions: ['Tallinn', 'Tartu', 'Narva', 'Pärnu'], 
        country: 'Estonia'
    },
    { 
        question: 'What is the capital of Finland? 🇫🇮', 
        correctAnswer: 'Helsinki', 
        easyOptions: ['Helsinki', 'Stockholm', 'Copenhagen', 'Oslo'], 
        hardOptions: ['Helsinki', 'Tampere', 'Turku', 'Oulu'], 
        country: 'Finland'
    },
    { 
        question: 'What is the capital of France? 🇫🇷', 
        correctAnswer: 'Paris', 
        easyOptions: ['Paris', 'Berlin', 'Rome', 'Madrid'], 
        hardOptions: ['Paris', 'Lyon', 'Marseille', 'Toulouse'], 
        country: 'France'
    },
    { 
        question: 'What is the capital of Germany? 🇩🇪', 
        correctAnswer: 'Berlin', 
        easyOptions: ['Berlin', 'Vienna', 'Amsterdam', 'Brussels'], 
        hardOptions: ['Berlin', 'Munich', 'Frankfurt', 'Hamburg'], 
        country: 'Germany'
    },
    { 
        question: 'What is the capital of Greece? 🇬🇷', 
        correctAnswer: 'Athens', 
        easyOptions: ['Athens', 'Rome', 'Sofia', 'Ankara'], 
        hardOptions: ['Athens', 'Thessaloniki', 'Patras', 'Heraklion'], 
        country: 'Greece'
    },
    { 
        question: 'What is the capital of Hungary? 🇭🇺', 
        correctAnswer: 'Budapest', 
        easyOptions: ['Budapest', 'Vienna', 'Prague', 'Warsaw'], 
        hardOptions: ['Budapest', 'Debrecen', 'Szeged', 'Miskolc'], 
        country: 'Hungary'
    },
    { 
        question: 'What is the capital of Iceland? 🇮🇸', 
        correctAnswer: 'Reykjavik', 
        easyOptions: ['Reykjavik', 'Oslo', 'Copenhagen', 'Helsinki'], 
        hardOptions: ['Reykjavik', 'Akureyri', 'Keflavik', 'Hafnarfjordur'], 
        country: 'Iceland'
    },
    { 
        question: 'What is the capital of Ireland? 🇮🇪', 
        correctAnswer: 'Dublin', 
        easyOptions: ['Dublin', 'Belfast', 'London', 'Edinburgh'], 
        hardOptions: ['Dublin', 'Cork', 'Limerick', 'Galway'], 
        country: 'Ireland'
    },
    { 
        question: 'What is the capital of Italy? 🇮🇹', 
        correctAnswer: 'Rome', 
        easyOptions: ['Rome', 'Paris', 'Berlin', 'Madrid'], 
        hardOptions: ['Rome', 'Milan', 'Naples', 'Turin'], 
        country: 'Italy'
    },
    { 
        question: 'What is the capital of Kosovo? 🇽🇰', 
        correctAnswer: 'Pristina', 
        easyOptions: ['Pristina', 'Belgrade', 'Skopje', 'Tirana'], 
        hardOptions: ['Pristina', 'Peja', 'Mitrovica', 'Gjilan'], 
        country: 'Kosovo'
    },
    { 
        question: 'What is the capital of Latvia? 🇱🇻', 
        correctAnswer: 'Riga', 
        easyOptions: ['Riga', 'Tallinn', 'Vilnius', 'Warsaw'], 
        hardOptions: ['Riga', 'Daugavpils', 'Liepaja', 'Jelgava'], 
        country: 'Latvia'
    },
    { 
        question: 'What is the capital of Liechtenstein? 🇱🇮', 
        correctAnswer: 'Vaduz', 
        easyOptions: ['Vaduz', 'Zurich', 'Vienna', 'Munich'], 
        hardOptions: ['Vaduz', 'Schaan', 'Balzers', 'Triesen'], 
        country: 'Liechtenstein'
    },
    { 
        question: 'What is the capital of Lithuania? 🇱🇹', 
        correctAnswer: 'Vilnius', 
        easyOptions: ['Vilnius', 'Riga', 'Tallinn', 'Warsaw'], 
        hardOptions: ['Vilnius', 'Kaunas', 'Klaipeda', 'Šiauliai'], 
        country: 'Lithuania'
    },
    { 
        question: 'What is the capital of Luxembourg? 🇱🇺', 
        correctAnswer: 'Luxembourg', 
        easyOptions: ['Luxembourg', 'Brussels', 'Paris', 'Berlin'], 
        hardOptions: ['Luxembourg', 'Esch-sur-Alzette', 'Differdange', 'Dudelange'], 
        country: 'Luxembourg'
    },
    { 
        question: 'What is the capital of Malta? 🇲🇹',
correctAnswer: 'Valletta',
easyOptions: ['Valletta', 'Rome', 'Athens', 'Cairo'],
hardOptions: ['Valletta', 'Sliema', 'St. Julian‘s', 'Birkirkara'],
country: 'Malta'
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
    
    // Filter questions based on difficulty
    const filteredQuestions = generateQuestions(difficulty);
    shuffle(filteredQuestions);

    // Check if there are questions left to load
    if (currentQuestionIndex >= filteredQuestions.length) {
        currentQuestionIndex = 0; // Reset index if out of questions
    }

    const currentQuestion = filteredQuestions[currentQuestionIndex];

    // Display the question
    document.getElementById('question').textContent = currentQuestion.question;
    
    // Set the answer options based on the difficulty level
    let options = difficulty === 'easy' ? currentQuestion.easyOptions : currentQuestion.hardOptions;
    
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
    return questions; // No filtering, but could add filtering logic later
}


// Show modal
document.getElementById('dashboard-btn').addEventListener('click', () => {
    document.getElementById('dashboard-modal').style.display = 'block';
    updateDashboard(); // Ensure dashboard is updated
});

// Hide modal when close button is clicked
document.querySelector('.close-btn').addEventListener('click', () => {
    document.getElementById('dashboard-modal').style.display = 'none';
});

// Also hide modal if clicked outside of the modal content
window.addEventListener('click', (event) => {
    if (event.target == document.getElementById('dashboard-modal')) {
        document.getElementById('dashboard-modal').style.display = 'none';
    }
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
    updateDifficulty(selectedDifficulty);
});

function updateDifficulty(difficulty) {
    currentQuestionIndex = 0; // Reset the question index
    loadQuestion(); // Load a question based on the new difficulty
}


// Load the first question on page load
window.onload = function() {
    loadQuestion();
};
// Initial load
loadQuestion();

