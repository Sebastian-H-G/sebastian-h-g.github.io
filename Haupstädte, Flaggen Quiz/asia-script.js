const flags = [
    { country: 'Afghanistan', img: 'flags/af.webp', id: 'AF' },
    { country: 'Armenien', img: 'flags/am.webp', id: 'AM' },
    { country: 'Aserbaidschan', img: 'flags/az.webp', id: 'AZ' },
    { country: 'Bahrain', img: 'flags/bh.webp', id: 'BH' },
    { country: 'Bangladesch', img: 'flags/bd.webp', id: 'BD' },
    { country: 'Bhutan', img: 'flags/bt.webp', id: 'BT' },
    { country: 'Brunei', img: 'flags/bn.webp', id: 'BN' },
    { country: 'China', img: 'flags/cn.webp', id: 'CN' },
    { country: 'Georgien', img: 'flags/ge.webp', id: 'GE' },
    { country: 'Indien', img: 'flags/in.webp', id: 'IN' },
    { country: 'Indonesien', img: 'flags/id.webp', id: 'ID' },
    { country: 'Irak', img: 'flags/iq.webp', id: 'IQ' },
    { country: 'Iran', img: 'flags/ir.webp', id: 'IR' },
    { country: 'Israel', img: 'flags/il.webp', id: 'IL' },
    { country: 'Japan', img: 'flags/jp.webp', id: 'JP' },
    { country: 'Jemen', img: 'flags/ye.webp', id: 'YE' },
    { country: 'Jordanien', img: 'flags/jo.webp', id: 'JO' },
    { country: 'Kambodscha', img: 'flags/kh.webp', id: 'KH' },
    { country: 'Kasachstan', img: 'flags/kz.webp', id: 'KZ' },
    { country: 'Katar', img: 'flags/qa.webp', id: 'QA' },
    { country: 'Kirgisistan', img: 'flags/kg.webp', id: 'KG' },
    { country: 'Kuwait', img: 'flags/kw.webp', id: 'KW' },
    { country: 'Laos', img: 'flags/la.webp', id: 'LA' },
    { country: 'Libanon', img: 'flags/lb.webp', id: 'LB' },
    { country: 'Malaysia', img: 'flags/my.webp', id: 'MY' },
    { country: 'Malediven', img: 'flags/mv.webp', id: 'MV' },
    { country: 'Mongolei', img: 'flags/mn.webp', id: 'MN' },
    { country: 'Myanmar', img: 'flags/mm.webp', id: 'MM' },
    { country: 'Nepal', img: 'flags/np.webp', id: 'NP' },
    { country: 'Nordkorea', img: 'flags/kp.webp', id: 'KP' },
    { country: 'Oman', img: 'flags/om.webp', id: 'OM' },
    { country: 'Pakistan', img: 'flags/pk.webp', id: 'PK' },
    { country: 'Philippinen', img: 'flags/ph.webp', id: 'PH' },
    { country: 'Russland', img: 'flags/ru.webp', id: 'RU' },
    { country: 'Saudi-Arabien', img: 'flags/sa.webp', id: 'SA' },
    { country: 'Singapur', img: 'flags/sg.webp', id: 'SG' },
    { country: 'Sri Lanka', img: 'flags/lk.webp', id: 'LK' },
    { country: 'Syrien', img: 'flags/sy.webp', id: 'SY' },
    { country: 'Südkorea', img: 'flags/kr.webp', id: 'KR' },
    { country: 'Tadschikistan', img: 'flags/tj.webp', id: 'TJ' },
    { country: 'Thailand', img: 'flags/th.webp', id: 'TH' },
    { country: 'Timor-Leste', img: 'flags/tl.webp', id: 'TL' },
    { country: 'Turkmenistan', img: 'flags/tm.webp', id: 'TM' },
    { country: 'Türkei', img: 'flags/tr.webp', id: 'TR' },
    { country: 'Usbekistan', img: 'flags/uz.webp', id: 'UZ' },
    { country: 'Vereinigte Arabische Emirate', img: 'flags/ae.webp', id: 'AE' },
    { country: 'Vietnam', img: 'flags/vn.webp', id: 'VN' },
];

let currentFlagIndex;
let currentScore = 0;
// Set a unique key for this game/file
const uniqueKey = 'uniqueGameIdentifier10'; // Change this for each game/file

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
