const questions = [
    { 
        question: 'What is the capital of Afghanistan? 🇦🇫', 
        correctAnswer: 'Kabul', 
        easyOptions: ['Kabul', 'Islamabad', 'Tehran', 'New Delhi'], 
        hardOptions: ['Kabul', 'Herat', 'Mazar-i-Sharif', 'Kandahar'], 
        country: 'Afghanistan'
    },
    { 
        question: 'What is the capital of Armenia? 🇦🇲', 
        correctAnswer: 'Yerevan', 
        easyOptions: ['Yerevan', 'Tbilisi', 'Baku', 'Ankara'], 
        hardOptions: ['Yerevan', 'Vanadzor', 'Gyumri', 'Artashat'], 
        country: 'Armenia'
    },
    { 
        question: 'What is the capital of Azerbaijan? 🇦🇿', 
        correctAnswer: 'Baku', 
        easyOptions: ['Baku', 'Tbilisi', 'Yerevan', 'Ankara'], 
        hardOptions: ['Baku', 'Ganja', 'Lankaran', 'Sumqayit'], 
        country: 'Azerbaijan'
    },
    { 
        question: 'What is the capital of Bahrain? 🇧🇭', 
        correctAnswer: 'Manama', 
        easyOptions: ['Manama', 'Doha', 'Kuwait City', 'Dubai'], 
        hardOptions: ['Manama', 'Riffa', 'Muharraq', 'Sitra'], 
        country: 'Bahrain'
    },
    { 
        question: 'What is the capital of Bangladesh? 🇧🇩', 
        correctAnswer: 'Dhaka', 
        easyOptions: ['Dhaka', 'Colombo', 'Kathmandu', 'Islamabad'], 
        hardOptions: ['Dhaka', 'Chittagong', 'Khulna', 'Rajshahi'], 
        country: 'Bangladesh'
    },
    { 
        question: 'What is the capital of Brunei? 🇧🇳', 
        correctAnswer: 'Bandar Seri Begawan', 
        easyOptions: ['Bandar Seri Begawan', 'Kuala Lumpur', 'Singapore', 'Manila'], 
        hardOptions: ['Bandar Seri Begawan', 'Kuala Belait', 'Seria', 'Tutong'], 
        country: 'Brunei'
    },
    { 
        question: 'What is the capital of Cambodia? 🇰🇭', 
        correctAnswer: 'Phnom Penh', 
        easyOptions: ['Phnom Penh', 'Hanoi', 'Vientiane', 'Bangkok'], 
        hardOptions: ['Phnom Penh', 'Siem Reap', 'Battambang', 'Sihanoukville'], 
        country: 'Cambodia'
    },
    { 
        question: 'What is the capital of China? 🇨🇳', 
        correctAnswer: 'Beijing', 
        easyOptions: ['Beijing', 'Tokyo', 'Seoul', 'Hanoi'], 
        hardOptions: ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen'], 
        country: 'China'
    },
    { 
        question: 'What is the capital of Cyprus? 🇨🇾', 
        correctAnswer: 'Nicosia', 
        easyOptions: ['Nicosia', 'Athens', 'Ankara', 'Beirut'], 
        hardOptions: ['Nicosia', 'Larnaca', 'Limassol', 'Famagusta'], 
        country: 'Cyprus'
    },
    { 
        question: 'What is the capital of Georgia? 🇬🇪', 
        correctAnswer: 'Tbilisi', 
        easyOptions: ['Tbilisi', 'Yerevan', 'Baku', 'Ankara'], 
        hardOptions: ['Tbilisi', 'Batumi', 'Zugdidi', 'Rustavi'], 
        country: 'Georgia'
    },
    { 
        question: 'What is the capital of India? 🇮🇳', 
        correctAnswer: 'New Delhi', 
        easyOptions: ['New Delhi', 'Tokyo', 'Dhaka', 'Islamabad'], 
        hardOptions: ['New Delhi', 'Mumbai', 'Bengaluru', 'Chennai'], 
        country: 'India'
    },
    { 
        question: 'What is the capital of Indonesia? 🇮🇩', 
        correctAnswer: 'Jakarta', 
        easyOptions: ['Jakarta', 'Kuala Lumpur', 'Manila', 'Singapore'], 
        hardOptions: ['Jakarta', 'Surabaya', 'Bandung', 'Medan'], 
        country: 'Indonesia'
    },
    { 
        question: 'What is the capital of Iran? 🇮🇷', 
        correctAnswer: 'Tehran', 
        easyOptions: ['Tehran', 'Baghdad', 'Dubai', 'Kabul'], 
        hardOptions: ['Tehran', 'Mashhad', 'Isfahan', 'Shiraz'], 
        country: 'Iran'
    },
    { 
        question: 'What is the capital of Iraq? 🇮🇶', 
        correctAnswer: 'Baghdad', 
        easyOptions: ['Baghdad', 'Tehran', 'Damascus', 'Riyadh'], 
        hardOptions: ['Baghdad', 'Basra', 'Mosul', 'Erbil'], 
        country: 'Iraq'
    },
    { 
        question: 'What is the capital of Israel? 🇮🇱', 
        correctAnswer: 'Jerusalem', 
        easyOptions: ['Jerusalem', 'Tel Aviv', 'Cairo', 'Amman'], 
        hardOptions: ['Jerusalem', 'Tel Aviv', 'Haifa', 'Beersheba'], 
        country: 'Israel'
    },
    { 
        question: 'What is the capital of Japan? 🇯🇵', 
        correctAnswer: 'Tokyo', 
        easyOptions: ['Tokyo', 'Beijing', 'Seoul', 'Manila'], 
        hardOptions: ['Tokyo', 'Osaka', 'Kyoto', 'Nagoya'], 
        country: 'Japan'
    },
    { 
        question: 'What is the capital of Jordan? 🇯🇴', 
        correctAnswer: 'Amman', 
        easyOptions: ['Amman', 'Cairo', 'Beirut', 'Jerusalem'], 
        hardOptions: ['Amman', 'Zarqa', 'Irbid', 'Aqaba'], 
        country: 'Jordan'
    },
    { 
        question: 'What is the capital of Kazakhstan? 🇰🇿', 
        correctAnswer: 'Astana', 
        easyOptions: ['Astana', 'Almaty', 'Tashkent', 'Baku'], 
        hardOptions: ['Astana', 'Almaty', 'Karaganda', 'Shymkent'], 
        country: 'Kazakhstan'
    },
    { 
        question: 'What is the capital of Kuwait? 🇰🇼', 
        correctAnswer: 'Kuwait City', 
        easyOptions: ['Kuwait City', 'Doha', 'Riyadh', 'Manama'], 
        hardOptions: ['Kuwait City', 'Hawally', 'Salmiya', 'Jahra'], 
        country: 'Kuwait'
    },
    { 
        question: 'What is the capital of Kyrgyzstan? 🇰🇬', 
        correctAnswer: 'Bishkek', 
        easyOptions: ['Bishkek', 'Tashkent', 'Astana', 'Almaty'], 
        hardOptions: ['Bishkek', 'Osh', 'Jalal-Abad', 'Karabalta'], 
        country: 'Kyrgyzstan'
    },
    { 
        question: 'What is the capital of Laos? 🇱🇦', 
        correctAnswer: 'Vientiane', 
        easyOptions: ['Vientiane', 'Hanoi', 'Bangkok', 'Phnom Penh'], 
        hardOptions: ['Vientiane', 'Luang Prabang', 'Pakse', 'Savannakhet'], 
        country: 'Laos'
    },
    { 
        question: 'What is the capital of Lebanon? 🇱🇧', 
        correctAnswer: 'Beirut', 
        easyOptions: ['Beirut', 'Damascus', 'Amman', 'Cairo'], 
        hardOptions: ['Beirut', 'Tripoli', 'Sidon', 'Tyre'], 
        country: 'Lebanon'
    },
    { 
        question: 'What is the capital of Malaysia? 🇲🇾', 
        correctAnswer: 'Kuala Lumpur', 
        easyOptions: ['Kuala Lumpur', 'Singapore', 'Manila', 'Bangkok'], 
        hardOptions: ['Kuala Lumpur', 'Penang', 'Johor Bahru', 'Malacca'], 
        country: 'Malaysia'
    },
    { 
        question: 'What is the capital of Maldives? 🇲🇻', 
        correctAnswer: 'Malé', 
        easyOptions: ['Malé', 'Colombo', 'Dhaka', 'Hanoi'], 
        hardOptions: ['Malé', 'Addu City', 'Fuvahmulah', 'Hinnavaru'], 
        country: 'Maldives'
    },
    { 
        question: 'What is the capital of Mongolia? 🇲🇳', 
        correctAnswer: 'Ulaanbaatar', 
        easyOptions: ['Ulaanbaatar', 'Beijing', 'Seoul', 'Tokyo'], 
        hardOptions: ['Ulaanbaatar', 'Erdenet', 'Darkhan', 'Choibalsan'], 
        country: 'Mongolia'
    },
    { 
        question: 'What is the capital of Myanmar? 🇲🇲', 
        correctAnswer: 'Naypyidaw', 
        easyOptions: ['Naypyidaw', 'Yangon', 'Bangkok', 'Hanoi'], 
        hardOptions: ['Naypyidaw', 'Yangon', 'Mandalay', 'Bagan'], 
        country: 'Myanmar'
    },
    { 
        question: 'What is the capital of Nepal? 🇳🇵', 
        correctAnswer: 'Kathmandu', 
        easyOptions: ['Kathmandu', 'New Delhi', 'Thimphu', 'Dhaka'], 
        hardOptions: ['Kathmandu', 'Pokhara', 'Biratnagar', 'Lalitpur'], 
        country: 'Nepal'
    },
    { 
        question: 'What is the capital of North Korea? 🇰🇵', 
        correctAnswer: 'Pyongyang', 
        easyOptions: ['Pyongyang', 'Seoul', 'Beijing', 'Tokyo'], 
        hardOptions: ['Pyongyang', 'Hamhung', 'Nampo', 'Wonsan'], 
        country: 'North Korea'
    },
    { 
        question: 'What is the capital of Oman? 🇴🇲', 
        correctAnswer: 'Muscat', 
        easyOptions: ['Muscat', 'Dubai', 'Doha', 'Kuwait City'], 
        hardOptions: ['Muscat', 'Salalah', 'Sohar', 'Nizwa'], 
        country: 'Oman'
    },
    { 
        question: 'What is the capital of Pakistan? 🇵🇰', 
        correctAnswer: 'Islamabad', 
        easyOptions: ['Islamabad', 'New Delhi', 'Dhaka', 'Kabul'], 
        hardOptions: ['Islamabad', 'Karachi', 'Lahore', 'Faisalabad'], 
        country: 'Pakistan'
    },
    { 
        question: 'What is the capital of Palestine? 🇵🇸', 
        correctAnswer: 'Ramallah', 
        easyOptions: ['Ramallah', 'Jerusalem', 'Amman', 'Beirut'], 
        hardOptions: ['Ramallah', 'Gaza City', 'Hebron', 'Nablus'], 
        country: 'Palestine'
    },
    { 
        question: 'What is the capital of Qatar? 🇶🇦', 
        correctAnswer: 'Doha', 
        easyOptions: ['Doha', 'Abu Dhabi', 'Kuwait City', 'Manama'], 
        hardOptions: ['Doha', 'Al Wakrah', 'Al Khor', 'Al Rayyan'], 
        country: 'Qatar'
    },
    { 
        question: 'What is the capital of Russia? 🇷🇺', 
        correctAnswer: 'Moscow', 
        easyOptions: ['Moscow', 'Saint Petersburg', 'Kiev', 'Tbilisi'], 
        hardOptions: ['Moscow', 'Saint Petersburg', 'Novosibirsk', 'Yekaterinburg'], 
        country: 'Russia'
    },
    { 
        question: 'What is the capital of Saudi Arabia? 🇸🇦', 
        correctAnswer: 'Riyadh', 
        easyOptions: ['Riyadh', 'Dubai', 'Doha', 'Kuwait City'], 
        hardOptions: ['Riyadh', 'Jeddah', 'Mecca', 'Dammam'], 
        country: 'Saudi Arabia'
    },
    { 
        question: 'What is the capital of Singapore? 🇸🇬', 
        correctAnswer: 'Singapore', 
        easyOptions: ['Singapore', 'Kuala Lumpur', 'Manila', 'Jakarta'], 
        hardOptions: ['Singapore', 'Changi', 'Orchard Road', 'Sentosa'], 
        country: 'Singapore'
    },
    { 
        question: 'What is the capital of South Korea? 🇰🇷', 
        correctAnswer: 'Seoul', 
        easyOptions: ['Seoul', 'Tokyo', 'Beijing', 'Hanoi'], 
        hardOptions: ['Seoul', 'Busan', 'Incheon', 'Gwangju'], 
        country: 'South Korea'
    },
    { 
        question: 'What is the capital of Sri Lanka? 🇱🇰', 
        correctAnswer: 'Colombo', 
        easyOptions: ['Colombo', 'Dhaka', 'New Delhi', 'Kathmandu'], 
        hardOptions: ['Colombo', 'Kandy', 'Galle', 'Jaffna'], 
        country: 'Sri Lanka'
    },
    { 
        question: 'What is the capital of Syria? 🇸🇾', 
        correctAnswer: 'Damascus', 
        easyOptions: ['Damascus', 'Beirut', 'Amman', 'Baghdad'], 
        hardOptions: ['Damascus', 'Aleppo', 'Homs', 'Latakia'], 
        country: 'Syria'
    },
    { 
        question: 'What is the capital of Taiwan? 🇹🇼', 
        correctAnswer: 'Taipei', 
        easyOptions: ['Taipei', 'Tokyo', 'Seoul', 'Beijing'], 
        hardOptions: ['Taipei', 'Kaohsiung', 'Taichung', 'Tainan'], 
        country: 'Taiwan'
    },
    { 
        question: 'What is the capital of Thailand? 🇹🇭', 
        correctAnswer: 'Bangkok', 
        easyOptions: ['Bangkok', 'Hanoi', 'Kuala Lumpur', 'Manila'], 
        hardOptions: ['Bangkok', 'Chiang Mai', 'Pattaya', 'Phuket'], 
        country: 'Thailand'
    },
    { 
        question: 'What is the capital of Turkey? 🇹🇷', 
        correctAnswer: 'Ankara', 
        easyOptions: ['Ankara', 'Istanbul', 'Athens', 'Cairo'], 
        hardOptions: ['Ankara', 'Istanbul', 'Izmir', 'Bursa'], 
        country: 'Turkey'
    },
    { 
        question: 'What is the capital of Turkmenistan? 🇹🇲', 
        correctAnswer: 'Ashgabat', 
        easyOptions: ['Ashgabat', 'Tashkent', 'Baku', 'Tehran'], 
        hardOptions: ['Ashgabat', 'Turkmenabat', 'Mary', 'Balkanabat'], 
        country: 'Turkmenistan'
    },
    { 
        question: 'What is the capital of United Arab Emirates? 🇦🇪', 
        correctAnswer: 'Abu Dhabi', 
        easyOptions: ['Abu Dhabi', 'Dubai', 'Doha', 'Kuwait City'], 
        hardOptions: ['Abu Dhabi', 'Dubai', 'Sharjah', 'Ajman'], 
        country: 'United Arab Emirates'
    },
    { 
        question: 'What is the capital of Uzbekistan? 🇺🇿', 
        correctAnswer: 'Tashkent', 
        easyOptions: ['Tashkent', 'Astana', 'Baku', 'Kabul'], 
        hardOptions: ['Tashkent', 'Samarkand', 'Bukhara', 'Namangan'], 
        country: 'Uzbekistan'
    },
    { 
        question: 'What is the capital of Vietnam? 🇻🇳', 
        correctAnswer: 'Hanoi', 
        easyOptions: ['Hanoi', 'Bangkok', 'Beijing', 'Manila'], 
        hardOptions: ['Hanoi', 'Ho Chi Minh City', 'Da Nang', 'Hue'], 
        country: 'Vietnam'
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