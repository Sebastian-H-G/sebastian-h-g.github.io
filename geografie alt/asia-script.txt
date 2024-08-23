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
