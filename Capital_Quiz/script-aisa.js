const capitalsEnglish = {
    "Afghanistan": "Kabul",
    "Armenia": "Yerevan",
    "Azerbaijan": "Baku",
    "Bahrain": "Manama",
    "Bangladesh": "Dhaka",
    "Bhutan": "Thimphu",
    "Brunei": "Bandar Seri Begawan",
    "Cambodia": "Phnom Penh",
    "China": "Beijing",
    "Cyprus": "Nicosia",
    "Georgia": "Tbilisi",
    "India": "New Delhi",
    "Indonesia": "Jakarta",
    "Iran": "Tehran",
    "Iraq": "Baghdad",
    "Israel": "Jerusalem",
    "Japan": "Tokyo",
    "Jordan": "Amman",
    "Kazakhstan": "Nur-Sultan",
    "Kuwait": "Kuwait City",
    "Kyrgyzstan": "Bishkek",
    "Laos": "Vientiane",
    "Lebanon": "Beirut",
    "Malaysia": "Kuala Lumpur",
    "Maldives": "Malé",
    "Mongolia": "Ulaanbaatar",
    "Myanmar": "Naypyidaw",
    "Nepal": "Kathmandu",
    "North Korea": "Pyongyang",
    "Oman": "Muscat",
    "Pakistan": "Islamabad",
    "Palestine": "East Jerusalem",
    "Philippines": "Manila",
    "Qatar": "Doha",
    "Saudi Arabia": "Riyadh",
    "Singapore": "Singapore",
    "South Korea": "Seoul",
    "Sri Lanka": "Sri Jayawardenepura Kotte",
    "Syria": "Damascus",
    "Taiwan": "Taipei",
    "Tajikistan": "Dushanbe",
    "Thailand": "Bangkok",
    "Timor-Leste": "Dili",
    "Turkmenistan": "Ashgabat",
    "United Arab Emirates": "Abu Dhabi",
    "Uzbekistan": "Tashkent",
    "Vietnam": "Hanoi",
    "Yemen": "Sana'a"
};

const capitalsGerman = {
    "Afghanistan": "Kabul",
    "Armenien": "Eriwan",
    "Aserbaidschan": "Baku",
    "Bahrain": "Manama",
    "Bangladesch": "Dhaka",
    "Bhutan": "Thimphu",
    "Brunei": "Bandar Seri Begawan",
    "Kambodscha": "Phnom Penh",
    "China": "Peking",
    "Zypern": "Nikosia",
    "Georgien": "Tiflis",
    "Indien": "Neu-Delhi",
    "Indonesien": "Jakarta",
    "Iran": "Teheran",
    "Irak": "Bagdad",
    "Israel": "Jerusalem",
    "Japan": "Tokio",
    "Jordanien": "Amman",
    "Kasachstan": "Nur-Sultan",
    "Kuwait": "Kuwait-Stadt",
    "Kirgisistan": "Bischkek",
    "Laos": "Vientiane",
    "Libanon": "Beirut",
    "Malaysia": "Kuala Lumpur",
    "Malediven": "Malé",
    "Mongolei": "Ulaanbaatar",
    "Myanmar": "Naypyidaw",
    "Nepal": "Kathmandu",
    "Nordkorea": "Pjöngjang",
    "Oman": "Maskat",
    "Pakistan": "Islamabad",
    "Palästina": "Ost-Jerusalem",
    "Philippinen": "Manila",
    "Katar": "Doha",
    "Saudi-Arabien": "Riad",
    "Singapur": "Singapur",
    "Südkorea": "Seoul",
    "Sri Lanka": "Sri Jayawardenepura Kotte",
    "Syrien": "Damaskus",
    "Taiwan": "Taipeh",
    "Tadschikistan": "Duschanbe",
    "Thailand": "Bangkok",
    "Timor-Leste": "Dili",
    "Turkmenistan": "Aschgabat",
    "Vereinigte Arabische Emirate": "Abu Dhabi",
    "Usbekistan": "Taschkent",
    "Vietnam": "Hanoi",
    "Jemen": "Sanaa"
};


const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const resultElement = document.getElementById('result');
const languageButton = document.getElementById('languageButton');
const quizTitle = document.getElementById('quizTitle');

let capitals = capitalsEnglish;
let currentCountry = '';
let currentCapital = '';
let isAnswered = false;

function getRandomCountry() {
    const countries = Object.keys(capitals);
    const randomIndex = Math.floor(Math.random() * countries.length);
    return countries[randomIndex];
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function getRandomCapital() {
    const allCapitals = Object.values(capitals);
    const randomIndex = Math.floor(Math.random() * allCapitals.length);
    return allCapitals[randomIndex];
}

function displayQuestion() {
    currentCountry = getRandomCountry();
    currentCapital = capitals[currentCountry];

    if (languageButton.textContent === 'Switch to German') {
        questionElement.textContent = `What is the capital of ${currentCountry}?`;
    } else {
        questionElement.textContent = `Was ist die Hauptstadt von ${currentCountry}?`;
    }

    const options = [];
    options.push(currentCapital);

    // Add three incorrect options
    while (options.length < 4) {
        const randomCapital = getRandomCapital();
        if (!options.includes(randomCapital)) {
            options.push(randomCapital);
        }
    }

    const shuffledOptions = shuffleArray(options);
    
    optionsElement.innerHTML = '';
    shuffledOptions.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsElement.appendChild(button);
    });

    resultElement.textContent = ''; // Clear the result message
    resultElement.classList.remove('result-correct', 'result-incorrect'); // Remove any previous result class
    isAnswered = false; // Reset the answer status
}

function checkAnswer(selectedOption) {
    if (isAnswered) return; // Prevent multiple answer checks
    
    isAnswered = true;

    optionsElement.innerHTML = ''; // Clear options after answer
    
    if (selectedOption === currentCapital) {
        if (languageButton.textContent === 'Switch to German') {
            resultElement.textContent = "Correct!";
        } else {
            resultElement.textContent = "Richtig!";
        }
        resultElement.classList.add('result-correct');
    } else {
        if (languageButton.textContent === 'Switch to German') {
            resultElement.textContent = `Incorrect! The correct answer is ${currentCapital}.`;
        } else {
            resultElement.textContent = `Falsch! Die richtige Antwort ist ${currentCapital}.`;
        }
        resultElement.classList.add('result-incorrect');
    }
    
    setTimeout(displayQuestion, 2000); // Transition to next question after 2 seconds
}

function toggleLanguage() {
    if (languageButton.textContent === 'Switch to German') {
        languageButton.textContent = 'Switch to English';
        quizTitle.textContent = 'Asien Hauptstadt-Quiz';
        capitals = capitalsGerman;
    } else {
        languageButton.textContent = 'Switch to German';
        quizTitle.textContent = 'Asia Capital Quiz';
        capitals = capitalsEnglish;
    }
    displayQuestion(); // Refresh the current question after switching language
}

displayQuestion();