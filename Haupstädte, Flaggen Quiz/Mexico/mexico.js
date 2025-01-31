const countries = [
"Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas", "Chihuahua", "Coahuila", "Colima", "Distrito Federal", "Durango", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "México", "Michoacán", "Morelos", "Nayarit", "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"
];
function normalizeCountryName(name) {
    return name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '').toLowerCase();
}
const correctCountries = [];
let score = 0;
let timeRemaining = 5 * 60;

const countryInput = document.getElementById('countryInput');
const scoreBoard = document.getElementById('scoreBoard');
const timerElement = document.getElementById('timer');

countryInput.addEventListener('input', (e) => {
    checkCountry(e.target.value.trim());
});

function checkCountry(countryName) {
    countryName = countryName.toLowerCase();
    const normalizedCountryName = normalizeCountryName(countryName);
    if (countries.map(c => normalizeCountryName(c)).includes(normalizedCountryName) && !correctCountries.map(c => normalizeCountryName(c)).includes(normalizedCountryName)) {
        const originalCountryName = countries.find(c => normalizeCountryName(c) === normalizedCountryName);
        correctCountries.push(originalCountryName);
        score++;
        scoreBoard.textContent = `Score: ${score} / 32`;
        document.querySelector(`[title="${originalCountryName}"]`).classList.add('correct');
        countryInput.value = ''; // Clear the input field
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let countdownInterval;
    let pauseCount = 0;
    const maxPauses = 2;
    let isPaused = false;
    function endGame() {
        countries.forEach(country => {
            if (!correctCountries.includes(country)) {
                document.querySelector(`[title="${country}"]`).classList.add('not-guessed');
            }
        });
    }
    function startCountdown() {
        countdownInterval = setInterval(() => {
            if (!isPaused) {
                timeRemaining--;
                const minutes = Math.floor(timeRemaining / 60);
                const seconds = timeRemaining % 60;
                timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
                if (timeRemaining <= 0) {
                    clearInterval(countdownInterval);
                    const messageElement = document.getElementById('message');
                    messageElement.textContent = `El tiempo se ha acabado! Nombraste ${score} estados.`;
                    messageElement.style.display = 'block';
                    countryInput.disabled = true;
                    endGame();
                    // Disable the input field
                    showTables();
                }
            }
        }, 1000);
    }
    
    function endGame() {
        countries.forEach(country => {
            const countryElement = document.querySelector(`[title="${country}"]`);
            if (countryElement && !correctCountries.includes(country)) {
                countryElement.classList.add('not-guessed');
            }
        });
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
            document.getElementById('pauseMessage').textContent = `El juego está en pausa! Pausas restantes: ${maxPauses - pauseCount}`;
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
        const messageElement = document.getElementById('message');
        messageElement.textContent = `Abandoaste! Nombraste ${score} estados.`;
        messageElement.style.display = 'block';
        document.getElementById('pauseButton').style.display = 'none';
        document.getElementById('giveUpButton').style.display = 'none';
        document.getElementById('restartButton').style.display = 'block';
        document.getElementById('pauseMessage').style.display = 'none';
        document.getElementById('map-container').style.display = 'block';
        countryInput.disabled = true; // Disable the input field
        showTables();
        endGame();
    }

    function restartGame() {
        // Reset game state
        clearInterval(countdownInterval);
        pauseCount = 0;
        isPaused = false;
        score = 0;
        timeRemaining = 5 * 60;
        document.getElementById('pauseMessage').style.display = 'none';
        correctCountries.length = 0;
        // Reset the color of all country paths to their default
        const countryPaths = document.querySelectorAll('path'); // Select all path elements
        countryPaths.forEach(path => {
        path.style.fill = '#FFF990'; // Reset to default color
        });
        // Reset UI elements
        countryInput.disabled = false;
        countryInput.value = '';
        scoreBoard.textContent = 'Score: 0 / 32';
        timerElement.textContent = '5:00';
        document.getElementById('message').style.display = 'none';
        document.getElementById('pauseButton').style.display = 'block';
        document.getElementById('pauseButton').disabled = false;
        document.getElementById('pauseButton').classList.remove('play');
        document.getElementById('pauseButton').classList.add('pause');
        document.getElementById('giveUpButton').style.display = 'block';
        document.getElementById('restartButton').style.display = 'none';
        document.getElementById('map-container').style.display = 'block';

        // Start a new countdown
        startCountdown();
    }

    document.getElementById('pauseButton').addEventListener('click', togglePause);
    document.getElementById('giveUpButton').addEventListener('click', giveUp);
    document.getElementById('restartButton').addEventListener('click', restartGame);

    startCountdown();
});
startCountdown();

