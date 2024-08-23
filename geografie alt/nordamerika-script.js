const flags = [    
	{ country: 'Antigua und Barbuda', img: 'flags/ag.webp', id: 'AG' },
    { country: 'Bahamas', img: 'flags/bs.webp', id: 'BS' },
    { country: 'Barbados', img: 'flags/bb.webp', id: 'BB' },
    { country: 'Belize', img: 'flags/bz.webp', id: 'BZ' },
    { country: 'Costa Rica', img: 'flags/cr.webp', id: 'CR' },
    { country: 'Dominica', img: 'flags/dm.webp', id: 'DM' },
    { country: 'Dominikanische Republik', img: 'flags/do.webp', id: 'DO' },
    { country: 'El Salvador', img: 'flags/sv.webp', id: 'SV' },
    { country: 'Grenada', img: 'flags/gd.webp', id: 'GD' },
    { country: 'Guatemala', img: 'flags/gt.webp', id: 'GT' },
    { country: 'Haiti', img: 'flags/ht.webp', id: 'HT' },
    { country: 'Honduras', img: 'flags/hn.webp', id: 'HN' },
    { country: 'Jamaika', img: 'flags/jm.webp', id: 'JM' },
    { country: 'Kanada', img: 'flags/ca.webp', id: 'CA' },
    { country: 'Kuba', img: 'flags/cu.webp', id: 'CU' },
    { country: 'Mexiko', img: 'flags/mx.webp', id: 'MX' },
    { country: 'Nicaragua', img: 'flags/ni.webp', id: 'NI' },
    { country: 'Panama', img: 'flags/pa.webp', id: 'PA' },
    { country: 'St. Kitts und Nevis', img: 'flags/kn.webp', id: 'KN' },
    { country: 'St. Lucia', img: 'flags/lc.webp', id: 'LC' },
    { country: 'St. Vincent und die Grenadinen', img: 'flags/vc.webp', id: 'VC' },
    { country: 'Trinidad und Tobago', img: 'flags/tt.webp', id: 'TT' },
    { country: 'USA', img: 'flags/us.webp', id: 'US' },
	];

let currentFlagIndex;
let currentScore = 0;
// Set a unique key for this game/file
const uniqueKey = 'uniqueGameIdentifier7'; // Change this for each game/file

// Retrieve high score from localStorage using the unique key
let highScore = localStorage.getItem(`highScore_${uniqueKey}`) ? parseInt(localStorage.getItem(`highScore_${uniqueKey}`)) : 0;

// Update the high score display
document.getElementById('highScore').innerText = highScore;


document.addEventListener('DOMContentLoaded', () => {
    currentFlagIndex = Math.floor(Math.random() * flags.length);
    loadFlag();
    document.getElementById('toggleMapButton').addEventListener('click', toggleMap);
    document.getElementById('highScore').textContent = highScore; // Set initial high score on page load
});

function loadFlag() {
    const flag = flags[currentFlagIndex];
    document.getElementById('flag-image').src = flag.img;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    const options = generateRandomOptions(flag.country);
    options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });

    updateHighlight(flag.id);
    removeMessage();
}

function generateRandomOptions(correctCountry) {
    const allCountries = flags.map(flag => flag.country);
    const randomOptions = [correctCountry];
    
    while (randomOptions.length < 4) {
        const randomCountry = allCountries[Math.floor(Math.random() * allCountries.length)];
        if (!randomOptions.includes(randomCountry)) {
            randomOptions.push(randomCountry);
        }
    }

    return shuffleArray(randomOptions);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to check the answer
function checkAnswer(selectedOption) {
    const flag = flags[currentFlagIndex];
    if (selectedOption === flag.country) {
        showMessage('Richtig! 🎉', 'green');
        setTimeout(() => {
            currentFlagIndex = Math.floor(Math.random() * flags.length);
            loadFlag();
        }, 1000);
        updateScore(1); // Update score on correct answer
    } else {
        showMessage('✖️ Falsch, versuche es nochmal.', 'red');
        currentScore = 0; // Reset current score
        document.getElementById('currentScore').innerText = currentScore; // Update UI immediately
    }
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

    const totalPieces = 700;
    const interval = 5;

    let i = 0;
    let intervalId = setInterval(function() {
        createPiece();
        i++;
        if (i >= totalPieces) {
            clearInterval(intervalId);
        }
    }, interval);
}

function updateHighlight(countryId) {
    removeHighlight();
    const countryElement = document.getElementById(countryId);
    if (countryElement) {
        countryElement.classList.add('highlight');
    }
}

function removeHighlight() {
    const highlightedElements = document.querySelectorAll('.highlight');
    highlightedElements.forEach(element => {
        element.classList.remove('highlight');
    });
}

function showMessage(message, color) {
    let messageElement = document.getElementById('message');
    if (!messageElement) {
        messageElement = document.createElement('div');
        messageElement.id = 'message';
        document.body.appendChild(messageElement);
    }
    messageElement.textContent = message;
    messageElement.style.backgroundColor = color;

    if (color === 'red') {
        messageElement.classList.add('wrong');
    } else {
        messageElement.classList.remove('wrong');
    }

    messageElement.classList.add('show');

    setTimeout(() => {
        messageElement.classList.remove('show');
        messageElement.classList.remove('wrong');
    }, 1500);
}

function removeMessage() {
    const messageElement = document.getElementById('message');
    if (messageElement) {
        messageElement.classList.remove('show');
    }
}

function toggleMap() {
    const mapContainer = document.getElementById('map-container');
    mapContainer.classList.toggle('show');
}
