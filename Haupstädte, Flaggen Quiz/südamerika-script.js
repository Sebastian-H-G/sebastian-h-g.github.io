const flags = [    
	{ country: 'Argentinien', img: 'flags/ar.webp', id: 'AR' },
    { country: 'Bolivien', img: 'flags/bo.webp', id: 'BO' },
    { country: 'Brasilien', img: 'flags/br.webp', id: 'BR' },
    { country: 'Chile', img: 'flags/cl.webp', id: 'CL' },
    { country: 'Ecuador', img: 'flags/ec.webp', id: 'EC' },
    { country: 'Guyana', img: 'flags/gy.webp', id: 'GY' },
    { country: 'Kolumbien', img: 'flags/co.webp', id: 'CO' },
    { country: 'Paraguay', img: 'flags/py.webp', id: 'PY' },
    { country: 'Peru', img: 'flags/pe.webp', id: 'PE' },
    { country: 'Suriname', img: 'flags/sr.webp', id: 'SR' },
    { country: 'Uruguay', img: 'flags/uy.webp', id: 'UY' },
    { country: 'Venezuela', img: 'flags/ve.webp', id: 'VE' },
	];
	
let currentFlagIndex;

document.addEventListener('DOMContentLoaded', () => {
    currentFlagIndex = Math.floor(Math.random() * flags.length); // Zufälliger Startindex
    loadFlag();
    document.getElementById('toggleMapButton').addEventListener('click', toggleMap);
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
    removeMessage(); // Ensure message removal on flag load
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
        showMessage('Richtig!', 'green');
        setTimeout(() => {
            currentFlagIndex = Math.floor(Math.random() * flags.length);
            loadFlag();
        }, 1000); // Verzögerung von 1 Sekunde für den Übergang zur nächsten Frage
    } else {
        showMessage('Falsch, versuche es nochmal.', 'red');
    }
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

    // Add class based on correctness of answer
    if (color === 'red') {
        messageElement.classList.add('wrong');
    } else {
        messageElement.classList.remove('wrong');
    }

    messageElement.classList.add('show'); // Add show class to trigger animation

    setTimeout(() => {
        messageElement.classList.remove('show'); // Remove show class after animation
        messageElement.classList.remove('wrong'); // Remove wrong class after animation
    }, 500); // Duration of the shake animation (0.5 seconds)
}




function removeMessage() {
    const messageElement = document.getElementById('message');
    if (messageElement) {
        messageElement.classList.remove('show'); // Remove 'show' class to hide message
    }
}

function toggleMap() {
    const mapContainer = document.getElementById('map-container');
    mapContainer.classList.toggle('show');
}
