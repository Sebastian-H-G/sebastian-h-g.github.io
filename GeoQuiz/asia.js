import { saveQuizResult } from './saveQuizResults.js';
const countryMappings = 
{
    "Afghanistan": ["Afghanistan", "Afghanistan"],
    "Armenia": ["Armenia", "Armenien"],
    "Azerbaijan": ["Azerbaijan", "Aserbaidschan"],
    "Bahrain": ["Bahrain", "Bahrain"],
    "Bangladesh": ["Bangladesh", "Bangladesch"],
    "Bhutan": ["Bhutan", "Bhutan"],
    "Brunei": ["Brunei", "Brunei"],
    "Cambodia": ["Cambodia", "Kambodscha"],
    "China": ["China", "China"],
    "Cyprus": ["Republic of Cyprus", "Cyprus", "Zypern", "Republik Zypern"],
    "Georgia": ["Republic of Georgia", "Georgia", "Georgien", "Republik Georgien"],
    "India": ["India", "Indien"],
    "Indonesia": ["Indonesia", "Indonesien"],
    "Iran": ["Islamic Republic of Iran", "Iran", "Islamische Republik Iran"],
    "Iraq": ["Iraq", "Irak"],
    "Israel": ["State of Israel", "Israel", "Staat Israel"],
    "Japan": ["Japan", "Japan"],
    "Jordan": ["Jordan", "Jordanien"],
    "Kazakhstan": ["Kazakhstan", "Kasachstan"],
    "Kuwait": ["Kuwait", "Kuwait"],
    "Kyrgyzstan": ["Kyrgyzstan", "Kirgisistan"],
    "Laos": ["Laos", "Laos"],
    "Lebanon": ["Lebanon", "Libanon"],
    "Malaysia": ["Malaysia", "Malaysia"],
    "Maldives": ["Maldives", "Malediven"],
    "Mongolia": ["Mongolia", "Mongolei"],
    "Myanmar": ["Myanmar", "Burma", "Myanmar (Birma)"],
    "Nepal": ["Nepal", "Nepal"],
    "North Korea": ["Democratic People's Republic of Korea", "North Korea", "Nordkorea", "Demokratische Volksrepublik Korea"],
    "Oman": ["Oman", "Oman"],
    "Pakistan": ["Pakistan", "Pakistan"],
    "Philippines": ["Philippines", "Philippinen"],
    "Qatar": ["Qatar", "Katar"],
    "Russia": ["Russian Federation", "Russia", "Russische Föderation", "Russland"],
    "Saudi Arabia": ["Saudi Arabia", "Saudi-Arabien"],
    "Singapore": ["Singapore", "Singapur"],
    "South Korea": ["Republic of Korea", "South Korea", "Südkorea", "Republik Korea"],
    "Sri Lanka": ["Sri Lanka", "Sri Lanka"],
    "Syria": ["Syria", "Syrien"],
    "Tajikistan": ["Tajikistan", "Tadschikistan"],
    "Thailand": ["Thailand", "Thailand"],
    "Timor-Leste": ["Timor-Leste", "East Timor", "Timor-Leste", "Osttimor"],
    "Turkey": ["Republic of Turkey", "Turkey", "Türkei", "Republik Türkei"],
    "Turkmenistan": ["Turkmenistan", "Turkmenistan"],
    "Taiwan":["Taiwan"],
    "United Arab Emirates": ["United Arab Emirates", "Vereinigte Arabische Emirate"],
    "Uzbekistan": ["Uzbekistan", "Usbekistan"],
    "Vietnam": ["Vietnam", "Vietnam"],
    "Yemen": ["Yemen", "Jemen"]
  }  
;

function normalizeCountryName(country) {
    const normalizedCountry = country
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // Remove accents
        .replace(/[-\s]+/g, " ") // Replace hyphens and multiple spaces with a single space
        .trim()
        .toLowerCase();

    for (const [standardName, aliases] of Object.entries(countryMappings)) {
        const normalizedStandard = standardName
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[-\s]+/g, " ")
            .trim()
            .toLowerCase();

        const normalizedAliases = aliases.map(alias =>
            alias
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/[-\s]+/g, " ")
                .trim()
                .toLowerCase()
        );

        if (normalizedAliases.includes(normalizedCountry) || normalizedStandard === normalizedCountry) {
            return standardName;
        }
    }
    return country;
}

const countries = [
   "Afghanistan", "Armenia", "Azerbaijan", "Bahrain", "Bangladesh", "Bhutan", "Brunei", "Cambodia", "China", "Cyprus", "Georgia", "India", "Indonesia", "Iran", "Iraq", "Israel", "Japan", "Jordan", "Kazakhstan", "Kuwait", "Kyrgyzstan", "Laos", "Lebanon", "Malaysia", "Maldives", "Mongolia", "Myanmar", "Nepal", "North Korea", "Oman", "Pakistan", "Philippines", "Qatar", "Russia", "Saudi Arabia", "Singapore", "South Korea", "Sri Lanka", "Syria", "Taiwan", "Tajikistan", "Thailand", "Timor-Leste", "Turkey", "Turkmenistan", "United Arab Emirates", "Uzbekistan", "Vietnam", "Yemen"
];


function displayCountriesTable() {
const columns = 4; // Number of columns in the table
let table = '<table><tr>';
for (let i = 0; i < countries.length; i++) {
    const country = countries[i];
    const normalizedCountry = normalizeCountryName(country);
    const isGuessed = correctCountries.map(c => normalizeCountryName(c)).includes(normalizedCountry);
    const color = isGuessed ? 'green' : 'red';
    table += `<td style="color: ${color}">${country}</td>`;
    if ((i + 1) % columns === 0) {
        table += '</tr><tr>';
    }
}
table += '</tr></table>';
document.getElementById('countries-container').innerHTML = table;
}

const correctCountries = [];
let score = 0;
let timeRemaining = 7 * 60;


let attainableScore = countries.length;
let attainedScore = 0;
let completed = false;
const quizId = "1c65fe7d-9ab8-414c-89fd-bf378c7cf531"; // <-- real UUID
let gave_up = false; // <-- Add this line


const countryInput = document.getElementById('countryInput');
const scoreBoard = document.getElementById('scoreBoard');
const timerElement = document.getElementById('timer');

countryInput.addEventListener('input', (e) => {
checkCountry(e.target.value.trim());
});

function checkCountry(countryName) {
countryName = countryName.toLowerCase();
const normalizedCountryName = normalizeCountryName(countryName);
if (countries.map(c => c.toLowerCase()).includes(normalizedCountryName.toLowerCase()) && !correctCountries.map(c => c.toLowerCase()).includes(normalizedCountryName.toLowerCase())) {
    const originalCountryName = countries.find(c => c.toLowerCase() === normalizedCountryName.toLowerCase());
    correctCountries.push(originalCountryName);
    score++;
    attainedScore = score; // Update attainedScore
    scoreBoard.textContent = `Score: ${score} / 49`;
    document.querySelectorAll(`[title="${originalCountryName}"]`).forEach(path => {
        path.classList.add('correct');
    });
    
    countryInput.value = ''; // Clear the input field
    countryInput.focus(); // Focus the input field
}
}
async function onQuizComplete() {
  try {
    const result = await saveQuizResult({
      quizId,
      attainedScore,
      attainableScore,
      completed,
        gave_up
    });
    console.log('Result saved:', result);
  } catch (err) {
    console.error('Save failed:', err.message);
  }
}
document.addEventListener('DOMContentLoaded', () => {
let countdownInterval;
let pauseCount = 0;
const maxPauses = 2;
let isPaused = false;
function endGame() {
    console.log("endGame called");
    countries.forEach(country => {
        if (!correctCountries.includes(country)) {
            document.querySelectorAll(`[title="${country}"]`).forEach(path => {
                path.classList.add('not-guessed');
            });
        }
    });
}

function checkAllStatesGuessed() {
    return correctCountries.length === countries.length;
}

function startCountdown() {
    console.log("startCountdown called");
    console.log(countries.length);
    countdownInterval = setInterval(() => {
        if (!isPaused) {
            timeRemaining--;
            const minutes = Math.floor(timeRemaining / 60);
            const seconds = timeRemaining % 60;
            timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

            if (timeRemaining <= 0 || checkAllStatesGuessed()) {
                clearInterval(countdownInterval);
                const messageElement = document.getElementById('message');
                const giveUpButton = document.getElementById('giveUpButton');
                
                if (checkAllStatesGuessed()) {
                    createConfetti();
                    onQuizComplete(); // <-- Add this
                    messageElement.textContent = `Congratulations! 👏 You named all countries. 🎉`;
                    messageElement.style.color = 'green';
                    pauseButton.style.display = 'none';
                    displayCountriesTable();
                    enableCountryTooltip();
                    messageElement.classList.add('congrats-animation');
                    setTimeout(() => {
                        messageElement.classList.remove('congrats-animation');
                    }, 1500);
                    if (navigator.vibrate) {
                        console.log('Vibration triggered'); // Add this line for debugging
                        navigator.vibrate(200); // Vibrate for 200 milliseconds
                    }
                    // Change "Give Up" button to "Restart" button
                    giveUpButton.textContent = 'Restart';
                    giveUpButton.onclick = () => location.reload();
                } else {
                    completed = false; // Set completed to false if not all countries were guessed
                    onQuizComplete(); // <-- Add this
                    messageElement.textContent = `Time is up! You named ${score} countries.`;
                    giveUpButton.textContent = 'Restart';
                    giveUpButton.onclick = () => location.reload();
                    pauseButton.style.display = 'none';
                    enableCountryTooltip() ;
                }
                
                messageElement.style.display = 'block';
                countryInput.disabled = true;
                endGame();
                // Disable the input field
                displayCountriesTable();
            }
        }
    }, 1000);
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
    piece.style.animationDuration = '2s'; // Set animation duration to 3 seconds
    document.body.appendChild(piece);
    piece.addEventListener('animationend', function() {
        piece.parentNode.removeChild(piece);
    });
}

// Adjust the number of confetti pieces
const totalPieces = 800;
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
// Add event listener for keydown to detect Control + X
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'x') {
        isPaused = !isPaused; // Toggle the timerRunning variable
        pauseButton.disabled = true;
        if (timerRunning) {
            startTimer();
        } else {
            stopTimer();
        }
    }
});

function stopTimer() {
    isPaused = true;
}

function togglePause() {
    const pauseButton = document.getElementById('pauseButton');
    if (!isPaused && pauseCount < maxPauses) {
        isPaused = true;
        pauseCount++;
        pauseButton.classList.remove('pause');
        pauseButton.classList.add('play');
        countryInput.disabled = true;
        document.getElementById('map-container').style.display = 'none'; // Disable map interaction
        document.getElementById('pauseMessage').style.display = 'block';
        document.querySelector('.controls').style.display = 'none';
        document.getElementById('pauseMessage').textContent = `Game is Paused! Pauses left: ${maxPauses - pauseCount}`;
    } else if (isPaused) {
        isPaused = false;
        pauseButton.classList.remove('play');
        pauseButton.classList.add('pause');
        countryInput.disabled = false;
        document.getElementById('map-container').style.display = 'block'; // Enable map interaction
        document.getElementById('pauseMessage').style.display = 'none';

        if (pauseCount >= maxPauses) {
            pauseButton.disabled = true;
            pauseButton.style.display = 'none';
        }
    }
}

function giveUp() {
    gave_up = true; // <-- Add this
    onQuizComplete(); // <-- Add this
    clearInterval(countdownInterval);
    const messageElement = document.getElementById('message');
    messageElement.textContent = `You gave up! You named ${score} countries.`;
    messageElement.style.display = 'block';
    document.getElementById('pauseButton').style.display = 'none';
    document.getElementById('giveUpButton').style.display = 'none';
    document.getElementById('restartButton').style.display = 'block';
    document.getElementById('pauseMessage').style.display = 'none';
    document.getElementById('map-container').style.display = 'block';
    countryInput.disabled = true; // Disable the input field
    displayCountriesTable();
    enableCountryTooltip();
    endGame();
}

function restartGame() {
    location.reload();
}

document.getElementById('pauseButton').addEventListener('click', togglePause);
document.getElementById('giveUpButton').addEventListener('click', giveUp);
document.getElementById('restartButton').addEventListener('click', restartGame);

startCountdown();
});
startCountdown();

