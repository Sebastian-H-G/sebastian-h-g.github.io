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
