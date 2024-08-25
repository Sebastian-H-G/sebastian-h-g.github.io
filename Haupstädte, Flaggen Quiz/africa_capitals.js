const questions = [
    { 
        question: 'What is the capital of Algeria? 🇩🇿', 
        correctAnswer: 'Algiers', 
        easyOptions: ['Algiers', 'Cairo', 'Tunis', 'Rabat'], 
        hardOptions: ['Algiers', 'Oran', 'Constantine', 'Annaba'], 
        country: 'Algeria'
    },
    { 
        question: 'What is the capital of Angola? 🇦🇴', 
        correctAnswer: 'Luanda', 
        easyOptions: ['Luanda', 'Kinshasa', 'Lagos', 'Nairobi'], 
        hardOptions: ['Luanda', 'Huambo', 'Lubango', 'Benguela'], 
        country: 'Angola'
    },
    { 
        question: 'What is the capital of Benin? 🇧🇯', 
        correctAnswer: 'Porto-Novo', 
        easyOptions: ['Porto-Novo', 'Lagos', 'Accra', 'Ouagadougou'], 
        hardOptions: ['Porto-Novo', 'Cotonou', 'Parakou', 'Djougou'], 
        country: 'Benin'
    },
    { 
        question: 'What is the capital of Botswana? 🇧🇼', 
        correctAnswer: 'Gaborone', 
        easyOptions: ['Gaborone', 'Pretoria', 'Harare', 'Lusaka'], 
        hardOptions: ['Gaborone', 'Francistown', 'Molepolole', 'Selebi-Phikwe'], 
        country: 'Botswana'
    },
    { 
        question: 'What is the capital of Burkina Faso? 🇧🇫', 
        correctAnswer: 'Ouagadougou', 
        easyOptions: ['Ouagadougou', 'Accra', 'Lomé', 'Cotonou'], 
        hardOptions: ['Ouagadougou', 'Bobo-Dioulasso', 'Koudougou', 'Fada N\'Gourma'], 
        country: 'Burkina Faso'
    },
    { 
        question: 'What is the capital of Burundi? 🇧🇮', 
        correctAnswer: 'Gitega', 
        easyOptions: ['Gitega', 'Kigali', 'Bujumbura', 'Kampala'], 
        hardOptions: ['Gitega', 'Bujumbura', 'Ngozi', 'Rutana'], 
        country: 'Burundi'
    },
    { 
        question: 'What is the capital of Cabo Verde? 🇨🇻', 
        correctAnswer: 'Praia', 
        easyOptions: ['Praia', 'Banjul', 'Dakar', 'Accra'], 
        hardOptions: ['Praia', 'Mindelo', 'Santa Maria', 'São Filipe'], 
        country: 'Cabo Verde'
    },
    { 
        question: 'What is the capital of Cameroon? 🇨🇲', 
        correctAnswer: 'Yaoundé', 
        easyOptions: ['Yaoundé', 'Douala', 'Libreville', 'Accra'], 
        hardOptions: ['Yaoundé', 'Douala', 'Bafoussam', 'Garoua'], 
        country: 'Cameroon'
    },
    { 
        question: 'What is the capital of Central African Republic? 🇨🇫', 
        correctAnswer: 'Bangui', 
        easyOptions: ['Bangui', 'Libreville', 'Kinshasa', 'N\'Djamena'], 
        hardOptions: ['Bangui', 'Bimbo', 'Berbérati', 'Kaga-Bandoro'], 
        country: 'Central African Republic'
    },
    { 
        question: 'What is the capital of Chad? 🇹🇩', 
        correctAnswer: 'N\'Djamena', 
        easyOptions: ['N\'Djamena', 'Khartoum', 'Lagos', 'Yaoundé'], 
        hardOptions: ['N\'Djamena', 'Moundou', 'Sarh', 'Abéché'], 
        country: 'Chad'
    },
    { 
        question: 'What is the capital of Comoros? 🇰🇲', 
        correctAnswer: 'Moroni', 
        easyOptions: ['Moroni', 'Antananarivo', 'Port Louis', 'Dar es Salaam'], 
        hardOptions: ['Moroni', 'Mitsamiouli', 'Moya', 'Hahaya'], 
        country: 'Comoros'
    },
    { 
        question: 'What is the capital of Congo, Democratic Republic of the? 🇨🇩', 
        correctAnswer: 'Kinshasa', 
        easyOptions: ['Kinshasa', 'Brazzaville', 'Lagos', 'Nairobi'], 
        hardOptions: ['Kinshasa', 'Lubumbashi', 'Goma', 'Kisangani'], 
        country: 'Congo, Democratic Republic of the'
    },
    { 
        question: 'What is the capital of Congo, Republic of the? 🇨🇬', 
        correctAnswer: 'Brazzaville', 
        easyOptions: ['Brazzaville', 'Kinshasa', 'Lagos', 'Yaoundé'], 
        hardOptions: ['Brazzaville', 'Pointe-Noire', 'Dolisie', 'Oyo'], 
        country: 'Congo, Republic of the'
    },
    { 
        question: 'What is the capital of Djibouti? 🇩🇯', 
        correctAnswer: 'Djibouti', 
        easyOptions: ['Djibouti', 'Addis Ababa', 'Asmara', 'Nairobi'], 
        hardOptions: ['Djibouti', 'Ali Sabieh', 'Tadjoura', 'Obock'], 
        country: 'Djibouti'
    },
    { 
        question: 'What is the capital of Egypt? 🇪🇬', 
        correctAnswer: 'Cairo', 
        easyOptions: ['Cairo', 'Rabat', 'Tunis', 'Beirut'], 
        hardOptions: ['Cairo', 'Alexandria', 'Giza', 'Port Said'], 
        country: 'Egypt'
    },
    { 
        question: 'What is the capital of Equatorial Guinea? 🇲🇱', 
        correctAnswer: 'Malabo', 
        easyOptions: ['Malabo', 'Libreville', 'Banjul', 'Yaoundé'], 
        hardOptions: ['Malabo', 'Bata', 'Evinayong', 'Oyala'], 
        country: 'Equatorial Guinea'
    },
    { 
        question: 'What is the capital of Eritrea? 🇪🇷', 
        correctAnswer: 'Asmara', 
        easyOptions: ['Asmara', 'Addis Ababa', 'Djibouti', 'Khartoum'], 
        hardOptions: ['Asmara', 'Keren', 'Mekele', 'Massawa'], 
        country: 'Eritrea'
    },
    { 
        question: 'What is the capital of Eswatini? 🇸🇿', 
        correctAnswer: 'Mbabane', 
        easyOptions: ['Mbabane', 'Gaborone', 'Pretoria', 'Johannesburg'], 
        hardOptions: ['Mbabane', 'Lobamba', 'Manzini', 'Nhlangano'], 
        country: 'Eswatini'
    },
    { 
        question: 'What is the capital of Ethiopia? 🇪🇹', 
        correctAnswer: 'Addis Ababa', 
        easyOptions: ['Addis Ababa', 'Nairobi', 'Kampala', 'Asmara'], 
        hardOptions: ['Addis Ababa', 'Dire Dawa', 'Mekele', 'Hawassa'], 
        country: 'Ethiopia'
    },
    { 
        question: 'What is the capital of Gabon? 🇬🇦', 
        correctAnswer: 'Libreville', 
        easyOptions: ['Libreville', 'Porto-Novo', 'Yaoundé', 'Brazzaville'], 
        hardOptions: ['Libreville', 'Franceville', 'Omboué', 'Tchibanga'], 
        country: 'Gabon'
    },
    { 
        question: 'What is the capital of Gambia? 🇲🇱', 
        correctAnswer: 'Banjul', 
        easyOptions: ['Banjul', 'Dakar', 'Freetown', 'Monrovia'], 
        hardOptions: ['Banjul', 'Serekunda', 'Brikama', 'Mansakonko'], 
        country: 'Gambia'
    },
    { 
        question: 'What is the capital of Ghana? 🇬🇭', 
        correctAnswer: 'Accra', 
        easyOptions: ['Accra', 'Lagos', 'Abuja', 'Monrovia'], 
        hardOptions: ['Accra', 'Kumasi', 'Tamale', 'Takoradi'], 
        country: 'Ghana'
    },
      { 
        question: 'What is the capital of Guinea? 🇬🇳', 
        correctAnswer: 'Conakry', 
        easyOptions: ['Conakry', 'Dakar', 'Monrovia', 'Abuja'], 
        hardOptions: ['Conakry', 'Kankan', 'Nzérékoré', 'Kindia'], 
        country: 'Guinea'
    },
    { 
        question: 'What is the capital of Ivory Coast? 🇨🇮', 
        correctAnswer: 'Yamoussoukro', 
        easyOptions: ['Yamoussoukro', 'Accra', 'Lagos', 'Abuja'], 
        hardOptions: ['Yamoussoukro', 'Abidjan', 'San Pedro', 'Bouaké'], 
        country: 'Ivory Coast'
    },
    { 
        question: 'What is the capital of Kenya? 🇰🇪', 
        correctAnswer: 'Nairobi', 
        easyOptions: ['Nairobi', 'Dar es Salaam', 'Kampala', 'Addis Ababa'], 
        hardOptions: ['Nairobi', 'Mombasa', 'Kisumu', 'Eldoret'], 
        country: 'Kenya'
    },
    { 
        question: 'What is the capital of Lesotho? 🇱🇸', 
        correctAnswer: 'Maseru', 
        easyOptions: ['Maseru', 'Pretoria', 'Gaborone', 'Mbabane'], 
        hardOptions: ['Maseru', 'Teyateyaneng', 'Leribe', 'Hlotse'], 
        country: 'Lesotho'
    },
    { 
        question: 'What is the capital of Liberia? 🇱🇸', 
        correctAnswer: 'Monrovia', 
        easyOptions: ['Monrovia', 'Freetown', 'Accra', 'Abuja'], 
        hardOptions: ['Monrovia', 'Gbarnga', 'Buchanan', 'Zwedru'], 
        country: 'Liberia'
    },
    { 
        question: 'What is the capital of Libya? 🇱🇾', 
        correctAnswer: 'Tripoli', 
        easyOptions: ['Tripoli', 'Cairo', 'Tunis', 'Algiers'], 
        hardOptions: ['Tripoli', 'Benghazi', 'Misrata', 'Sabha'], 
        country: 'Libya'
    },
    { 
        question: 'What is the capital of Madagascar? 🇲🇬', 
        correctAnswer: 'Antananarivo', 
        easyOptions: ['Antananarivo', 'Port Louis', 'Moroni', 'Dar es Salaam'], 
        hardOptions: ['Antananarivo', 'Toamasina', 'Fianarantsoa', 'Mahajanga'], 
        country: 'Madagascar'
    },
    { 
        question: 'What is the capital of Malawi? 🇲🇼', 
        correctAnswer: 'Lilongwe', 
        easyOptions: ['Lilongwe', 'Lusaka', 'Dar es Salaam', 'Harare'], 
        hardOptions: ['Lilongwe', 'Blantyre', 'Mzuzu', 'Zomba'], 
        country: 'Malawi'
    },
    { 
        question: 'What is the capital of Mali? 🇲🇱', 
        correctAnswer: 'Bamako', 
        easyOptions: ['Bamako', 'Ouagadougou', 'Abuja', 'Accra'], 
        hardOptions: ['Bamako', 'Sikasso', 'Kangaba', 'Gao'], 
        country: 'Mali'
    },
    { 
        question: 'What is the capital of Mauritania? 🇲🇷', 
        correctAnswer: 'Nouakchott', 
        easyOptions: ['Nouakchott', 'Rabat', 'Bamako', 'Tunis'], 
        hardOptions: ['Nouakchott', 'Nouadhibou', 'Atar', 'Kaédi'], 
        country: 'Mauritania'
    },
    { 
        question: 'What is the capital of Mauritius? 🇲🇺', 
        correctAnswer: 'Port Louis', 
        easyOptions: ['Port Louis', 'Antananarivo', 'Victoria', 'Male'], 
        hardOptions: ['Port Louis', 'Curepipe', 'Vacoas', 'Quatre Bornes'], 
        country: 'Mauritius'
    },
    { 
        question: 'What is the capital of Morocco? 🇲🇦', 
        correctAnswer: 'Rabat', 
        easyOptions: ['Rabat', 'Casablanca', 'Algiers', 'Tunis'], 
        hardOptions: ['Rabat', 'Fes', 'Marrakech', 'Tangier'], 
        country: 'Morocco'
    },
    { 
        question: 'What is the capital of Mozambique? 🇲🇿', 
        correctAnswer: 'Maputo', 
        easyOptions: ['Maputo', 'Lusaka', 'Harare', 'Dar es Salaam'], 
        hardOptions: ['Maputo', 'Beira', 'Nampula', 'Tete'], 
        country: 'Mozambique'
    },
    { 
        question: 'What is the capital of Namibia? 🇳🇦', 
        correctAnswer: 'Windhoek', 
        easyOptions: ['Windhoek', 'Gaborone', 'Pretoria', 'Cape Town'], 
        hardOptions: ['Windhoek', 'Swakopmund', 'Rundu', 'Oshakati'], 
        country: 'Namibia'
    },
    { 
        question: 'What is the capital of Niger? 🇳🇪', 
        correctAnswer: 'Niamey', 
        easyOptions: ['Niamey', 'Ouagadougou', 'Abuja', 'Bamako'], 
        hardOptions: ['Niamey', 'Zinder', 'Maradi', 'Agadez'], 
        country: 'Niger'
    },
    { 
        question: 'What is the capital of Nigeria? 🇳🇬', 
        correctAnswer: 'Abuja', 
        easyOptions: ['Abuja', 'Lagos', 'Accra', 'Kinshasa'], 
        hardOptions: ['Abuja', 'Lagos', 'Kano', 'Port Harcourt'], 
        country: 'Nigeria'
    },
    { 
        question: 'What is the capital of Rwanda? 🇷🇼', 
        correctAnswer: 'Kigali', 
        easyOptions: ['Kigali', 'Bujumbura', 'Kampala', 'Addis Ababa'], 
        hardOptions: ['Kigali', 'Butare', 'Gisenyi', 'Musanze'], 
        country: 'Rwanda'
    },
    { 
        question: 'What is the capital of São Tomé and Príncipe? 🇸🇹', 
        correctAnswer: 'São Tomé', 
        easyOptions: ['São Tomé', 'Banjul', 'Libreville', 'Lomé'], 
        hardOptions: ['São Tomé', 'Santo Amaro', 'Angola', 'Cacuaco'], 
        country: 'São Tomé and Príncipe'
    },
    { 
        question: 'What is the capital of Senegal? 🇸🇳', 
        correctAnswer: 'Dakar', 
        easyOptions: ['Dakar', 'Banjul', 'Conakry', 'Accra'], 
        hardOptions: ['Dakar', 'Thiès', 'Saint-Louis', 'Ziguinchor'], 
        country: 'Senegal'
    },
    { 
        question: 'What is the capital of Seychelles? 🇸🇨', 
        correctAnswer: 'Victoria', 
        easyOptions: ['Victoria', 'Port Louis', 'Moroni', 'Malé'], 
        hardOptions: ['Victoria', 'Beau Vallon', 'Anse Royale', 'La Digue'], 
        country: 'Seychelles'
    },
    { 
        question: 'What is the capital of Sierra Leone? 🇸🇱', 
        correctAnswer: 'Freetown', 
        easyOptions: ['Freetown', 'Monrovia', 'Accra', 'Banjul'], 
        hardOptions: ['Freetown', 'Bo', 'Kenema', 'Makeni'], 
        country: 'Sierra Leone'
    },
    { 
        question: 'What is the capital of Somalia? 🇸🇴', 
        correctAnswer: 'Mogadishu', 
        easyOptions: ['Mogadishu', 'Nairobi', 'Addis Ababa', 'Kampala'], 
        hardOptions: ['Mogadishu', 'Hargeisa', 'Kismayo', 'Baidoa'], 
        country: 'Somalia'
    },
    { 
        question: 'What is the capital of South Africa? 🇿🇦', 
        correctAnswer: 'Pretoria', 
        easyOptions: ['Pretoria', 'Cape Town', 'Johannesburg', 'Durban'], 
        hardOptions: ['Pretoria', 'Bloemfontein', 'Port Elizabeth', 'East London'], 
        country: 'South Africa'
    },    { 
        question: 'What is the capital of South Sudan? 🇸🇸', 
        correctAnswer: 'Juba', 
        easyOptions: ['Juba', 'Kampala', 'Nairobi', 'Addis Ababa'], 
        hardOptions: ['Juba', 'Wau', 'Malakal', 'Yambio'], 
        country: 'South Sudan'
    },
    { 
        question: 'What is the capital of Sudan? 🇸🇩', 
        correctAnswer: 'Khartoum', 
        easyOptions: ['Khartoum', 'Cairo', 'Riyadh', 'Juba'], 
        hardOptions: ['Khartoum', 'Omdurman', 'Port Sudan', 'Kassala'], 
        country: 'Sudan'
    },
    { 
        question: 'What is the capital of Tanzania? 🇹🇿', 
        correctAnswer: 'Dodoma', 
        easyOptions: ['Dodoma', 'Dar es Salaam', 'Nairobi', 'Kigali'], 
        hardOptions: ['Dodoma', 'Dar es Salaam', 'Arusha', 'Mbeya'], 
        country: 'Tanzania'
    },
    { 
        question: 'What is the capital of Togo? 🇹🇬', 
        correctAnswer: 'Lomé', 
        easyOptions: ['Lomé', 'Accra', 'Cotonou', 'Ouagadougou'], 
        hardOptions: ['Lomé', 'Kara', 'Sokodé', 'Atakpamé'], 
        country: 'Togo'
    },
    { 
        question: 'What is the capital of Tunisia? 🇹🇳', 
        correctAnswer: 'Tunis', 
        easyOptions: ['Tunis', 'Algiers', 'Cairo', 'Rabat'], 
        hardOptions: ['Tunis', 'Sfax', 'Sousse', 'Kairouan'], 
        country: 'Tunisia'
    },
    { 
        question: 'What is the capital of Uganda? 🇺🇬', 
        correctAnswer: 'Kampala', 
        easyOptions: ['Kampala', 'Nairobi', 'Addis Ababa', 'Dar es Salaam'], 
        hardOptions: ['Kampala', 'Entebbe', 'Jinja', 'Mbarara'], 
        country: 'Uganda'
    },
    { 
        question: 'What is the capital of Zambia? 🇿🇲', 
        correctAnswer: 'Lusaka', 
        easyOptions: ['Lusaka', 'Harare', 'Lilongwe', 'Kinshasa'], 
        hardOptions: ['Lusaka', 'Kitwe', 'Chingola', 'Ndola'], 
        country: 'Zambia'
    },
    { 
        question: 'What is the capital of Zimbabwe? 🇿🇲', 
        correctAnswer: 'Harare', 
        easyOptions: ['Harare', 'Lusaka', 'Gaborone', 'Johannesburg'], 
        hardOptions: ['Harare', 'Bulawayo', 'Gweru', 'Kwekwe'], 
        country: 'Zimbabwe'
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