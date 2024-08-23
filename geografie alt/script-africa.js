const capitalsEnglish = {
    "Algeria": "Algiers",
    "Angola": "Luanda",
    "Benin": "Porto-Novo",
    "Botswana": "Gaborone",
    "Burkina Faso": "Ouagadougou",
    "Burundi": "Gitega",
    "Cape Verde": "Praia",
    "Cameroon": "Yaoundé",
    "Central African Republic": "Bangui",
    "Chad": "N'Djamena",
    "Comoros": "Moroni",
    "Democratic Republic of the Congo": "Kinshasa",
    "Djibouti": "Djibouti",
    "Egypt": "Cairo",
    "Equatorial Guinea": "Malabo",
    "Eritrea": "Asmara",
    "Eswatini": "Mbabane",
    "Ethiopia": "Addis Ababa",
    "Gabon": "Libreville",
    "Gambia": "Banjul",
    "Ghana": "Accra",
    "Guinea": "Conakry",
    "Guinea-Bissau": "Bissau",
    "Ivory Coast": "Yamoussoukro",
    "Kenya": "Nairobi",
    "Lesotho": "Maseru",
    "Liberia": "Monrovia",
    "Libya": "Tripoli",
    "Madagascar": "Antananarivo",
    "Malawi": "Lilongwe",
    "Mali": "Bamako",
    "Mauritania": "Nouakchott",
    "Mauritius": "Port Louis",
    "Morocco": "Rabat",
    "Mozambique": "Maputo",
    "Namibia": "Windhoek",
    "Niger": "Niamey",
    "Nigeria": "Abuja",
    "Republic of the Congo": "Brazzaville",
    "Rwanda": "Kigali",
    "Sao Tome and Principe": "São Tomé",
    "Senegal": "Dakar",
    "Seychelles": "Victoria",
    "Sierra Leone": "Freetown",
    "Somalia": "Mogadishu",
    "South Africa": "Pretoria",
    "South Sudan": "Juba",
    "Sudan": "Khartoum",
    "Tanzania": "Dodoma",
    "Togo": "Lomé",
    "Tunisia": "Tunis",
    "Uganda": "Kampala",
    "Zambia": "Lusaka",
    "Zimbabwe": "Harare"
};

const capitalsGerman = {
    "Algerien": "Algier",
    "Angola": "Luanda",
    "Benin": "Porto-Novo",
    "Botswana": "Gaborone",
    "Burkina Faso": "Ouagadougou",
    "Burundi": "Gitega",
    "Kap Verde": "Praia",
    "Kamerun": "Yaoundé",
    "Zentralafrikanische Republik": "Bangui",
    "Tschad": "N'Djamena",
    "Komoren": "Moroni",
    "Demokratische Republik Kongo": "Kinshasa",
    "Dschibuti": "Dschibuti",
    "Ägypten": "Kairo",
    "Äquatorialguinea": "Malabo",
    "Eritrea": "Asmara",
    "Eswatini": "Mbabane",
    "Äthiopien": "Addis Abeba",
    "Gabun": "Libreville",
    "Gambia": "Banjul",
    "Ghana": "Accra",
    "Guinea": "Conakry",
    "Guinea-Bissau": "Bissau",
    "Elfenbeinküste": "Yamoussoukro",
    "Kenia": "Nairobi",
    "Lesotho": "Maseru",
    "Liberia": "Monrovia",
    "Libyen": "Tripolis",
    "Madagaskar": "Antananarivo",
    "Malawi": "Lilongwe",
    "Mali": "Bamako",
    "Mauretanien": "Nouakchott",
    "Mauritius": "Port Louis",
    "Marokko": "Rabat",
    "Mosambik": "Maputo",
    "Namibia": "Windhoek",
    "Niger": "Niamey",
    "Nigeria": "Abuja",
    "Republik Kongo": "Brazzaville",
    "Ruanda": "Kigali",
    "São Tomé und Príncipe": "São Tomé",
    "Senegal": "Dakar",
    "Seychellen": "Victoria",
    "Sierra Leone": "Freetown",
    "Somalia": "Mogadischu",
    "Südafrika": "Pretoria",
    "Südsudan": "Juba",
    "Sudan": "Khartum",
    "Tansania": "Dodoma",
    "Togo": "Lomé",
    "Tunesien": "Tunis",
    "Uganda": "Kampala",
    "Sambia": "Lusaka",
    "Simbabwe": "Harare"
};
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const resultElement = document.getElementById('result');
const languageButton = document.getElementById('languageButton');
const quizTitle = document.getElementById('quizTitle');
const flagContainer = document.getElementById('flag-container');

let capitals = capitalsEnglish;
let currentCountry = '';
let currentCapital = '';
let isAnswered = false;
let map;
let marker;

let currentScore = 0;
// Set a unique key for this game/file
const uniqueKey = 'uniqueGameIdentifier3'; // Change this for each game/file

// Retrieve high score from localStorage using the unique key
let highScore = localStorage.getItem(`highScore_${uniqueKey}`) ? parseInt(localStorage.getItem(`highScore_${uniqueKey}`)) : 0;

// Update the high score display
document.getElementById('highScore').innerText = highScore;

function initMap() {
    map = L.map('map').setView([51.505, -0.09], 2); // Default view

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
}

function getRandomCountry() {
    const countries = Object.keys(capitals);
    const randomIndex = Math.floor(Math.random() * countries.length);
    return countries[randomIndex];
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function getRandomCapital() {
    const allCapitals = Object.values(capitals);
    const randomIndex = Math.floor(Math.random() * allCapitals.length);
    return allCapitals[randomIndex];
}

function updateMapAndFlag(country) {
    let currentCapitals = languageButton.textContent === 'Switch to German' ? capitalsGerman : capitalsEnglish;

    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(response => response.json())
        .then(data => {
            if (data && data.length > 0) {
                const countryData = data[0];
                const latlng = countryData.latlng;
                const flagUrl = countryData.flags.svg;

                if (marker) {
                    map.removeLayer(marker);
                }

                map.setView(latlng, 4);
                marker = L.marker(latlng).addTo(map).bindPopup(`<b>${country}</b>`).openPopup();

                flagContainer.innerHTML = `<img src="${flagUrl}" alt="Flag of ${country}" style="width: 200px; height: auto; margin-top: 20px;">`;
            }
        })
        .catch(error => {
            console.error('Error fetching country data:', error);
        });
}

function displayQuestion() {
    currentCountry = getRandomCountry();
    currentCapital = capitals[currentCountry];

    if (languageButton.textContent === 'Switch to German') {
        questionElement.textContent = `What is the capital of ${currentCountry}?`;
    } else {
        questionElement.textContent = `Was ist die Hauptstadt von ${currentCountry}?`;
    }

    const options = [];
    options.push(currentCapital);

    // Add three incorrect options
    while (options.length < 4) {
        const randomCapital = getRandomCapital();
        if (!options.includes(randomCapital)) {
            options.push(randomCapital);
        }
    }

    const shuffledOptions = shuffleArray(options);
    
    optionsElement.innerHTML = '';
    shuffledOptions.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsElement.appendChild(button);
    });

    resultElement.textContent = ''; // Clear the result message
    resultElement.classList.remove('result-correct', 'result-incorrect'); // Remove any previous result class
    isAnswered = false; // Reset the answer status

    updateMapAndFlag(currentCountry);
}

function checkAnswer(selectedOption) {
    if (isAnswered) return; // Prevent multiple answer checks
    
    isAnswered = true;

    optionsElement.innerHTML = ''; // Clear options after answer
    
    if (selectedOption === currentCapital) {
        if (languageButton.textContent === 'Switch to German') {
            resultElement.textContent = "Correct! 🎉";
        } else {
            resultElement.textContent = "Richtig! 🎉";
        }
        resultElement.classList.add('result-correct');
        updateScore(1);
    } else {
        if (languageButton.textContent === 'Switch to German') {
            resultElement.textContent = `❌ Incorrect! The correct answer is ${currentCapital}.`;
        } else {
            resultElement.textContent = `❌ Falsch! Die richtige Antwort ist ${currentCapital}.`;
        }
        resultElement.classList.add('result-incorrect');
        currentScore = 0; // Reset current score
        document.getElementById('currentScore').innerText = currentScore; // Update UI immediately
    }
    
    setTimeout(displayQuestion, 2000); // Transition to next question after 2 seconds
}
    // Function to play high score sound
    function playHighscoreSound() {
      var audio = document.getElementById("highscoreSound");
      audio.play();
    }
// Function to update the score
function updateScore(change) {
    let currentScore = parseInt(document.getElementById('currentScore').innerText);
    currentScore += change;
    document.getElementById('currentScore').innerText = currentScore;
    
    if (currentScore > highScore) {
        highScore = currentScore;
        localStorage.setItem(`highScore_${uniqueKey}`, highScore);
        document.getElementById('highScore').innerText = highScore;

        // Trigger confetti and update high score animation when high score is broken
        createConfetti();
        showHighScoreAnimation(highScore);
				playHighscoreSound();
    }
}

// Initial score setup
document.getElementById('currentScore').innerText = 0;
document.getElementById('highScore').innerText = highScore;

function toggleLanguage() {
    if (languageButton.textContent === 'Switch to German') {
        languageButton.textContent = 'Switch to English';
        quizTitle.textContent = 'Hauptstadt-Quiz';
        capitals = capitalsGerman;
    } else {
        languageButton.textContent = 'Switch to German';
        quizTitle.textContent = 'Capital Quiz';
        capitals = capitalsEnglish;
    }
    displayQuestion(); // Refresh the current question after switching language
}

document.addEventListener('DOMContentLoaded', () => {
    initMap();
    displayQuestion();
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



// New high score animation function
function showHighScoreAnimation(newScore) {
    const highScoreSpan = document.getElementById('highScore');
    const fireBackground = document.getElementById('fire-background');
    
    highScoreSpan.textContent = newScore;
    highScoreSpan.classList.add('grow');
    document.getElementById('high-score').classList.add('wiggle');

    fireBackground.style.display = 'block';
    setTimeout(() => {
        highScoreSpan.classList.remove('grow');
        document.getElementById('high-score').classList.remove('wiggle');
        fireBackground.style.display = 'none';
    }, 4000); // Delay in milliseconds
}
