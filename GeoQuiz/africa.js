import { saveQuizResult } from './saveQuizResults.js';
import { checkAndAwardBadges, setupLiveBadgeListeners } from './badges.js';
setupLiveBadgeListeners();
const countryMappings = {   
    "Algeria": ["Algerien"],
    "Angola": ["Angola"],
    "Benin": ["Benin"],
    "Botswana": ["Botswana"],
    "Burkina Faso": ["Burkina Faso"],
    "Burundi": ["Burundi"],
    "Cabo Verde": ["Kap Verde", "Cape Verde"],
    "Cameroon": ["Kamerun"],
    "Central African Republic": ["Zentralafrikanische Republik"],
    "Chad": ["Tschad"],
    "Comoros": ["Komoren"],
    "Democratic Republic of the Congo": ["Demokratische Republik Kongo", "DR Kongo", "DR Congo"],
    "Djibouti": ["Dschibuti"],
    "Egypt": ["Ägypten"],
    "Equatorial Guinea": ["Äquatorialguinea"],
    "Eritrea": ["Eritrea"],
    "Eswatini": ["Eswatini"],
    "Ethiopia": ["Äthiopien"],
    "Gabon": ["Gabun"],
    "Gambia": ["Gambia"],
    "Ghana": ["Ghana"],
    "Guinea": ["Guinea"],
    "Guinea-Bissau": ["Guinea-Bissau"],
    "Ivory Coast": ["Elfenbeinküste", "Côte d'Ivoire"],
    "Kenya": ["Kenia"],
    "Lesotho": ["Lesotho"],
    "Liberia": ["Liberia"],
    "Libya": ["Libyen"],
    "Madagascar": ["Madagaskar"],
    "Malawi": ["Malawi"],
    "Mali": ["Mali"],
    "Mauritania": ["Mauretanien"],
    "Mauritius": ["Mauritius"],
    "Morocco": ["Marokko"],
    "Mozambique": ["Mosambik"],
    "Namibia": ["Namibia"],
    "Niger": ["Niger"],
    "Nigeria": ["Nigeria"],
    "Republic of the Congo": ["Republik Kongo", "Kongo", "Congo"],
    "Rwanda": ["Ruanda"],
    "Sao Tome Principe": ["São Tomé und Príncipe", "Sao Tome and Principe"],
    "Senegal": ["Senegal"],
    "Seychelles": ["Seychellen"],
    "Sierra Leone": ["Sierra Leone"],
    "Somalia": ["Somalia"],
    "South Africa": ["Südafrika"],
    "South Sudan": ["Südsudan"],
    "Sudan": ["Sudan"],
    "Tanzania": ["Tansania"],
    "Togo": ["Togo"],
    "Tunisia": ["Tunesien"],
    "Uganda": ["Uganda"],
    "Zambia": ["Sambia"],
    "Zimbabwe": ["Simbabwe"]  
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
"Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cabo Verde", "Cameroon", "Central African Republic", "Chad", "Comoros", "Democratic Republic of the Congo", "Djibouti", "Egypt", "Equatorial Guinea", "Eritrea", "Eswatini", "Ethiopia", "Gabon", "Gambia", "Ghana", "Guinea", "Guinea-Bissau", "Ivory Coast", "Kenya", "Lesotho", "Liberia", "Libya", "Madagascar", "Malawi", "Mali", "Mauritania", "Mauritius", "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria", "Republic of the Congo", "Rwanda", "Sao Tome Principe", "Senegal", "Seychelles", "Sierra Leone", "Somalia", "South Africa", "South Sudan", "Sudan", "Tanzania", "Togo", "Tunisia", "Uganda", "Zambia", "Zimbabwe" 
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
    attainedScore = score; // <-- Add this line
    scoreBoard.textContent = `Score: ${score} / 54`;
    document.querySelectorAll(`[title="${originalCountryName}"]`).forEach(path => {
        path.classList.add('correct');
    });
    
    countryInput.value = ''; // Clear the input field
    countryInput.focus(); // Focus the input field
}
}
async function onQuizComplete() {
  try {
    // 1) Save the quiz result
    const { data: savedResult, error } = await saveQuizResult({
      quizId,
      attainedScore,
      attainableScore,
      completed,
      gave_up
    });
    if (error) throw error;
    console.log('Result saved:', savedResult);

    // 2) Run badge checks
    //    We need to pass exactly the shape checkAndAwardBadges() expects:
    await checkAndAwardBadges({
      quizId:     savedResult.quiz,
      attained:   savedResult.attained_score,
      attainable: savedResult.attainable_score,
      completed:  savedResult.completed,
      gaveUp:     savedResult.gave_up,
      playedAt:   savedResult.played_at || new Date().toISOString(),
      // If you track timing, add these two; otherwise omit them
      timeTaken:  savedResult.time_taken,
      timeAllowed:savedResult.time_allowed
    });

    // 3) Then update your UI (e.g. show results + any new badges)
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
                    completed = true; // <-- Add this
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
                    completed = false; // <-- Add this
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