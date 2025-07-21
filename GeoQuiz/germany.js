import { saveQuizResult } from './saveQuizResults.js';
import { checkAndAwardBadges, setupLiveBadgeListeners } from './badges.js';
setupLiveBadgeListeners();

// ...existing code...
const countryMappings = {
    "Baden-Württemberg": ["Baden-Württemberg"],
    "Bayern": ["Bayern"],
    "Berlin": ["Berlin"],
    "Brandenburg": ["Brandenburg"],
    "Bremen": ["Bremen"],
    "Hamburg": ["Hamburg"],
    "Hessen": ["Hessen"],
    "Mecklenburg-Vorpommern": ["Mecklenburg-Vorpommern"],
    "Niedersachsen": ["Niedersachsen"],
    "Nordrhein-Westfalen": ["Nordrhein-Westfalen", "NRW"],
    "Rheinland-Pfalz": ["Rheinland-Pfalz"],
    "Saarland": ["Saarland"],
    "Sachsen": ["Sachsen"],
    "Sachsen-Anhalt": ["Sachsen-Anhalt"],
    "Schleswig-Holstein": ["Schleswig-Holstein"],
    "Thüringen": ["Thüringen"]
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
    "Baden-Württemberg", "Bayern", "Berlin", "Brandenburg", "Bremen", "Hamburg", "Hessen", "Mecklenburg-Vorpommern", "Niedersachsen", "Nordrhein-Westfalen", "Rheinland-Pfalz", "Saarland", "Sachsen", "Sachsen-Anhalt", "Schleswig-Holstein", "Thüringen"    
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
const quizId = "8bcfecf7-0d7c-4403-a2a6-6475f040873e"; // <-- real UUID
let gave_up = false; // <-- Add this line
const correctCountries = [];
let score = 0;
let timeRemaining = 2 * 60;
// ...existing code...
let attainableScore = countries.length;
let attainedScore = 0;
let completed = false;
// ...existing code...
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
    scoreBoard.textContent = `Score: ${score} / 16`;
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
    console.log('onQuizComplete: starting saveQuizResult...');
    const { data: savedResult, error } = await saveQuizResult({
      quizId,
      attainedScore,
      attainableScore,
      completed,
      gave_up
    });
    if (error) throw error;
    console.log('onQuizComplete: Result saved:', savedResult);

    // 2) Run badge checks
    console.log('onQuizComplete: invoking checkAndAwardBadges with:', {
      quizId:     savedResult.quiz,
      attained:   savedResult.attained_score,
      attainable: savedResult.attainable_score,
      completed:  savedResult.completed,
      gaveUp:     savedResult.gave_up,
      playedAt:   savedResult.played_at || new Date().toISOString(),
      timeTaken:  savedResult.time_taken,
      timeAllowed:savedResult.time_allowed
    });

    const startTime = performance.now();
    await checkAndAwardBadges({
      quizId:     savedResult.quiz,
      attained:   savedResult.attained_score,
      attainable: savedResult.attainable_score,
      completed:  savedResult.completed,
      gaveUp:     savedResult.gave_up,
      playedAt:   savedResult.played_at || new Date().toISOString(),
      timeTaken:  savedResult.time_taken,
      timeAllowed:savedResult.time_allowed
    });
    const duration = (performance.now() - startTime).toFixed(1);
    console.log(`onQuizComplete: checkAndAwardBadges completed in ${duration}ms`);

    // 3) Then update your UI (e.g. show results + any new badges)
    console.log('onQuizComplete: done. Updating UI...');
  } catch (err) {
    console.error('onQuizComplete: Save failed or badge check error:', err);
  }
}

document.addEventListener('DOMContentLoaded', () => {
let countdownInterval;
let pauseCount = 0;
const maxPauses = 1;
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
                    messageElement.textContent = `Herzlichen Glückwunsch! 👏 Du hast alle Bundesländer richtig genannt. 🎉`;
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
                    giveUpButton.textContent = 'Neustart';
                    giveUpButton.onclick = () => location.reload();
                } else {
                    completed = false; // <-- Add this
                    onQuizComplete(); // <-- Add this
                    messageElement.textContent =  `Die Zeit ist um! Du hast ${score} Bundesländer gennant.`;
                    giveUpButton.textContent = 'Neustart';
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
        document.getElementById('pauseMessage').textContent = `Das Spiel ist pausiert! Verbleibende Pausen: ${maxPauses - pauseCount}`;
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
    clearInterval(countdownInterval);
    gave_up = true; // <-- Add this
    onQuizComplete(); // <-- Add this
    const messageElement = document.getElementById('message');
    messageElement.textContent = `Du hast aufgegeben, du hast ${score} Bundesländer gennant.`;
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

