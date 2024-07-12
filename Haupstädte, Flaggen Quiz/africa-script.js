const flags = [
    { country: 'Ägypten', img: 'flags/eg.webp', id: 'EG' },
    { country: 'Äquatorialguinea', img: 'flags/gq.webp', id: 'GQ' },
    { country: 'Äthiopien', img: 'flags/et.webp', id: 'ET' },
    { country: 'Algerien', img: 'flags/dz.webp', id: 'DZ' },
    { country: 'Angola', img: 'flags/ao.webp', id: 'AO' },
    { country: 'Benin', img: 'flags/bj.webp', id: 'BJ' },
    { country: 'Botswana', img: 'flags/bw.webp', id: 'BW' },
    { country: 'Burkina Faso', img: 'flags/bf.webp', id: 'BF' },
    { country: 'Burundi', img: 'flags/bi.webp', id: 'BI' },
    { country: 'Dschibuti', img: 'flags/dj.webp', id: 'DJ' },
    { country: 'Elfenbeinküste', img: 'flags/ci.webp', id: 'CI' },
    { country: 'Eritrea', img: 'flags/er.webp', id: 'ER' },
    { country: 'Eswatini', img: 'flags/sz.webp', id: 'SZ' },
    { country: 'Gabun', img: 'flags/ga.webp', id: 'GA' },
    { country: 'Gambia', img: 'flags/gm.webp', id: 'GM' },
    { country: 'Ghana', img: 'flags/gh.webp', id: 'GH' },
    { country: 'Guinea', img: 'flags/gn.webp', id: 'GN' },
    { country: 'Guinea-Bissau', img: 'flags/gw.webp', id: 'GW' },
    { country: 'Kamerun', img: 'flags/cm.webp', id: 'CM' },
    { country: 'Kap Verde', img: 'flags/cv.webp', id: 'CV' },
    { country: 'Kenia', img: 'flags/ke.webp', id: 'KE' },
    { country: 'Komoren', img: 'flags/km.webp', id: 'KM' },
    { country: 'Kongo', img: 'flags/cg.webp', id: 'CG' },
    { country: 'Demokratische Republik Kongo', img: 'flags/cd.webp', id: 'CD' },
    { country: 'Lesotho', img: 'flags/ls.webp', id: 'LS' },
    { country: 'Liberia', img: 'flags/lr.webp', id: 'LR' },
    { country: 'Libyen', img: 'flags/ly.webp', id: 'LY' },
    { country: 'Madagaskar', img: 'flags/mg.webp', id: 'MG' },
    { country: 'Malawi', img: 'flags/mw.webp', id: 'MW' },
    { country: 'Mali', img: 'flags/ml.webp', id: 'ML' },
    { country: 'Marokko', img: 'flags/ma.webp', id: 'MA' },
    { country: 'Mauretanien', img: 'flags/mr.webp', id: 'MR' },
    { country: 'Mauritius', img: 'flags/mu.webp', id: 'MU' },
    { country: 'Mosambik', img: 'flags/mz.webp', id: 'MZ' },
    { country: 'Namibia', img: 'flags/na.webp', id: 'NA' },
    { country: 'Niger', img: 'flags/ne.webp', id: 'NE' },
    { country: 'Nigeria', img: 'flags/ng.webp', id: 'NG' },
    { country: 'Ruanda', img: 'flags/rw.webp', id: 'RW' },
    { country: 'Sambia', img: 'flags/zm.webp', id: 'ZM' },
    { country: 'São Tomé und Príncipe', img: 'flags/st.webp', id: 'ST' },
    { country: 'Senegal', img: 'flags/sn.webp', id: 'SN' },
    { country: 'Seychellen', img: 'flags/sc.webp', id: 'SC' },
    { country: 'Sierra Leone', img: 'flags/sl.webp', id: 'SL' },
    { country: 'Simbabwe', img: 'flags/zw.webp', id: 'ZW' },
    { country: 'Somalia', img: 'flags/so.webp', id: 'SO' },
    { country: 'Sudan', img: 'flags/sd.webp', id: 'SD' },
    { country: 'Südsudan', img: 'flags/ss.webp', id: 'SS' },
    { country: 'Tansania', img: 'flags/tz.webp', id: 'TZ' },
    { country: 'Togo', img: 'flags/tg.webp', id: 'TG' },
    { country: 'Tschad', img: 'flags/td.webp', id: 'TD' },
    { country: 'Tunesien', img: 'flags/tn.webp', id: 'TN' },
    { country: 'Uganda', img: 'flags/ug.webp', id: 'UG' },
    { country: 'Zentralafrikanische Republik', img: 'flags/cf.webp', id: 'CF' },
];

let currentFlagIndex;
let currentScore = 0;
// Set a unique key for this game/file
const uniqueKey = 'uniqueGameIdentifier9'; // Change this for each game/file

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
    }
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
