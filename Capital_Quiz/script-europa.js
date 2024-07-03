const capitalsEnglish = {
    "Germany": "Berlin",
    "France": "Paris",
    "Italy": "Rome",
    "Spain": "Madrid",
    "United Kingdom": "London",
    "Russia": "Moscow",
    "Turkey": "Ankara",
    "Netherlands": "Amsterdam",
    "Belgium": "Brussels",
    "Austria": "Vienna",
    "Switzerland": "Bern",
    "Sweden": "Stockholm",
    "Norway": "Oslo",
    "Denmark": "Copenhagen",
    "Finland": "Helsinki",
    "Greece": "Athens",
    "Portugal": "Lisbon",
    "Ireland": "Dublin",
    "Poland": "Warsaw",
    "Czech Republic": "Prague",
    "Hungary": "Budapest",
    "Romania": "Bucharest",
    "Bulgaria": "Sofia",
    "Croatia": "Zagreb",
    "Slovakia": "Bratislava",
    "Slovenia": "Ljubljana",
    "Lithuania": "Vilnius",
    "Latvia": "Riga",
    "Estonia": "Tallinn",
    "Iceland": "Reykjavik",
    "Luxembourg": "Luxembourg City",
    "Cyprus": "Nicosia",
    "Malta": "Valletta",
    "Montenegro": "Podgorica",
    "Serbia": "Belgrade",
    "Albania": "Tirana",
    "Bosnia and Herzegovina": "Sarajevo",
    "North Macedonia": "Skopje",
    "Kosovo": "Pristina",
    "Andorra": "Andorra la Vella",
    "Liechtenstein": "Vaduz",
    "San Marino": "San Marino",
    "Monaco": "Monaco",
    "Vatican City": "Vatican City",
    "Belarus": "Minsk",
    "Moldova": "Chisinau",
    "Ukraine": "Kyiv",
    "Armenia": "Yerevan",
    "Azerbaijan": "Baku",
    "Georgia": "Tbilisi",
};

const capitalsGerman = {
    "Deutschland": "Berlin",
    "Frankreich": "Paris",
    "Italien": "Rom",
    "Spanien": "Madrid",
    "Vereinigtes Königreich": "London",
    "Russland": "Moskau",
    "Türkei": "Ankara",
    "Niederlande": "Amsterdam",
    "Belgien": "Brüssel",
    "Österreich": "Wien",
    "Schweiz": "Bern",
    "Schweden": "Stockholm",
    "Norwegen": "Oslo",
    "Dänemark": "Kopenhagen",
    "Finnland": "Helsinki",
    "Griechenland": "Athen",
    "Portugal": "Lissabon",
    "Irland": "Dublin",
    "Polen": "Warschau",
    "Tschechische Republik": "Prag",
    "Ungarn": "Budapest",
    "Rumänien": "Bukarest",
    "Bulgarien": "Sofia",
    "Kroatien": "Zagreb",
    "Slowakei": "Bratislava",
    "Slowenien": "Ljubljana",
    "Litauen": "Vilnius",
    "Lettland": "Riga",
    "Estland": "Tallinn",
    "Island": "Reykjavik",
    "Luxemburg": "Luxemburg-Stadt",
    "Zypern": "Nikosia",
    "Malta": "Valletta",
    "Montenegro": "Podgorica",
    "Serbien": "Belgrad",
    "Albanien": "Tirana",
    "Bosnien und Herzegowina": "Sarajevo",
    "Nordmazedonien": "Skopje",
    "Kosovo": "Pristina",
    "Andorra": "Andorra la Vella",
    "Liechtenstein": "Vaduz",
    "San Marino": "San Marino",
    "Monaco": "Monaco",
    "Vatikanstadt": "Vatikanstadt",
    "Weißrussland": "Minsk",
    "Moldau": "Chisinau",
    "Ukraine": "Kiew",
    "Armenien": "Eriwan",
    "Aserbaidschan": "Baku",
    "Georgien": "Tiflis",
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
        quizTitle.textContent = 'Europa Hauptstadt-Quiz';
        capitals = capitalsGerman;
    } else {
        languageButton.textContent = 'Switch to German';
        quizTitle.textContent = 'Europe Capital Quiz';
        capitals = capitalsEnglish;
    }
    displayQuestion(); // Refresh the current question after switching language
}

displayQuestion();

