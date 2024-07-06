 const flags = [
	{ country: 'Albanien', img: 'flags/al.webp', id: 'AL' },
    { country: 'Andorra', img: 'flags/ad.webp', id: 'AD' },
    { country: 'Belgien', img: 'flags/be.webp', id: 'BE' },
    { country: 'Bosnien und Herzegowina', img: 'flags/ba.webp', id: 'BA' },
    { country: 'Bulgarien', img: 'flags/bg.webp', id: 'BG' },
    { country: 'Dänemark', img: 'flags/dk.webp', id: 'DK' },
    { country: 'Deutschland', img: 'flags/de.webp', id: 'DE' },
    { country: 'Estland', img: 'flags/ee.webp', id: 'EE' },
    { country: 'Finnland', img: 'flags/fi.webp', id: 'FI' },
    { country: 'Frankreich', img: 'flags/fr.webp', id: 'FR' },
    { country: 'Griechenland', img: 'flags/gr.webp', id: 'GR' },
    { country: 'Irland', img: 'flags/ie.webp', id: 'IE' },
    { country: 'Island', img: 'flags/is.webp', id: 'IS' },
    { country: 'Italien', img: 'flags/it.webp', id: 'IT' },
    { country: 'Kosovo', img: 'flags/xk.webp', id: 'XK' },
    { country: 'Kroatien', img: 'flags/hr.webp', id: 'HR' },
    { country: 'Lettland', img: 'flags/lv.webp', id: 'LV' },
    { country: 'Liechtenstein', img: 'flags/li.webp', id: 'LI' },
    { country: 'Litauen', img: 'flags/lt.webp', id: 'LT' },
    { country: 'Luxemburg', img: 'flags/lu.webp', id: 'LU' },
    { country: 'Malta', img: 'flags/mt.webp', id: 'MT' },
    { country: 'Moldawien', img: 'flags/md.webp', id: 'MD' },
    { country: 'Monaco', img: 'flags/mc.webp', id: 'MC' },
    { country: 'Montenegro', img: 'flags/me.webp', id: 'ME' },
    { country: 'Niederlande', img: 'flags/nl.webp', id: 'NL' },
    { country: 'Nordmazedonien', img: 'flags/mk.webp', id: 'MK' },
    { country: 'Norwegen', img: 'flags/no.webp', id: 'NO' },
    { country: 'Österreich', img: 'flags/at.webp', id: 'AT' },
    { country: 'Polen', img: 'flags/pl.webp', id: 'PL' },
    { country: 'Portugal', img: 'flags/pt.webp', id: 'PT' },
    { country: 'Rumänien', img: 'flags/ro.webp', id: 'RO' },
    { country: 'Russland', img: 'flags/ru.webp', id: 'RU' },
    { country: 'San Marino', img: 'flags/sm.webp', id: 'SM' },
    { country: 'Schweden', img: 'flags/se.webp', id: 'SE' },
    { country: 'Schweiz', img: 'flags/ch.webp', id: 'CH' },
    { country: 'Serbien', img: 'flags/rs.webp', id: 'RS' },
    { country: 'Slowakei', img: 'flags/sk.webp', id: 'SK' },
    { country: 'Slowenien', img: 'flags/si.webp', id: 'SI' },
    { country: 'Spanien', img: 'flags/es.webp', id: 'ES' },
    { country: 'Tschechien', img: 'flags/cz.webp', id: 'CZ' },
    { country: 'Ukraine', img: 'flags/ua.webp', id: 'UA' },
    { country: 'Ungarn', img: 'flags/hu.webp', id: 'HU' },
    { country: 'Vereinigtes Königreich', img: 'flags/gb.webp', id: 'GB' },
    { country: 'Weißrussland', img: 'flags/by.webp', id: 'BY' },
    { country: 'Zypern', img: 'flags/cy.webp', id: 'CY' },
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
