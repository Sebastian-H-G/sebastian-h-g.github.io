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
