const capitalsEnglish = {
    "Algeria": "Algiers",
    "Angola": "Luanda",
    "Benin": "Porto-Novo",
    "Botswana": "Gaborone",
    "Burkina Faso": "Ouagadougou",
    "Burundi": "Gitega",
    "Cape Verde": "Praia",
    "Cameroon": "Yaoundé",
    "Central African Republic": "Bangui",
    "Chad": "N'Djamena",
    "Comoros": "Moroni",
    "Democratic Republic of the Congo": "Kinshasa",
    "Djibouti": "Djibouti",
    "Egypt": "Cairo",
    "Equatorial Guinea": "Malabo",
    "Eritrea": "Asmara",
    "Eswatini": "Mbabane",
    "Ethiopia": "Addis Ababa",
    "Gabon": "Libreville",
    "Gambia": "Banjul",
    "Ghana": "Accra",
    "Guinea": "Conakry",
    "Guinea-Bissau": "Bissau",
    "Ivory Coast": "Yamoussoukro",
    "Kenya": "Nairobi",
    "Lesotho": "Maseru",
    "Liberia": "Monrovia",
    "Libya": "Tripoli",
    "Madagascar": "Antananarivo",
    "Malawi": "Lilongwe",
    "Mali": "Bamako",
    "Mauritania": "Nouakchott",
    "Mauritius": "Port Louis",
    "Morocco": "Rabat",
    "Mozambique": "Maputo",
    "Namibia": "Windhoek",
    "Niger": "Niamey",
    "Nigeria": "Abuja",
    "Republic of the Congo": "Brazzaville",
    "Rwanda": "Kigali",
    "Sao Tome and Principe": "São Tomé",
    "Senegal": "Dakar",
    "Seychelles": "Victoria",
    "Sierra Leone": "Freetown",
    "Somalia": "Mogadishu",
    "South Africa": "Pretoria",
    "South Sudan": "Juba",
    "Sudan": "Khartoum",
    "Tanzania": "Dodoma",
    "Togo": "Lomé",
    "Tunisia": "Tunis",
    "Uganda": "Kampala",
    "Zambia": "Lusaka",
    "Zimbabwe": "Harare"
};

const capitalsGerman = {
    "Algerien": "Algier",
    "Angola": "Luanda",
    "Benin": "Porto-Novo",
    "Botswana": "Gaborone",
    "Burkina Faso": "Ouagadougou",
    "Burundi": "Gitega",
    "Kap Verde": "Praia",
    "Kamerun": "Yaoundé",
    "Zentralafrikanische Republik": "Bangui",
    "Tschad": "N'Djamena",
    "Komoren": "Moroni",
    "Demokratische Republik Kongo": "Kinshasa",
    "Dschibuti": "Dschibuti",
    "Ägypten": "Kairo",
    "Äquatorialguinea": "Malabo",
    "Eritrea": "Asmara",
    "Eswatini": "Mbabane",
    "Äthiopien": "Addis Abeba",
    "Gabun": "Libreville",
    "Gambia": "Banjul",
    "Ghana": "Accra",
    "Guinea": "Conakry",
    "Guinea-Bissau": "Bissau",
    "Elfenbeinküste": "Yamoussoukro",
    "Kenia": "Nairobi",
    "Lesotho": "Maseru",
    "Liberia": "Monrovia",
    "Libyen": "Tripolis",
    "Madagaskar": "Antananarivo",
    "Malawi": "Lilongwe",
    "Mali": "Bamako",
    "Mauretanien": "Nouakchott",
    "Mauritius": "Port Louis",
    "Marokko": "Rabat",
    "Mosambik": "Maputo",
    "Namibia": "Windhoek",
    "Niger": "Niamey",
    "Nigeria": "Abuja",
    "Republik Kongo": "Brazzaville",
    "Ruanda": "Kigali",
    "São Tomé und Príncipe": "São Tomé",
    "Senegal": "Dakar",
    "Seychellen": "Victoria",
    "Sierra Leone": "Freetown",
    "Somalia": "Mogadischu",
    "Südafrika": "Pretoria",
    "Südsudan": "Juba",
    "Sudan": "Khartum",
    "Tansania": "Dodoma",
    "Togo": "Lomé",
    "Tunesien": "Tunis",
    "Uganda": "Kampala",
    "Sambia": "Lusaka",
    "Simbabwe": "Harare"
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
        quizTitle.textContent = 'Afrika Hauptstadt-Quiz';
        capitals = capitalsGerman;
    } else {
        languageButton.textContent = 'Switch to German';
        quizTitle.textContent = 'Africa Capital Quiz';
        capitals = capitalsEnglish;
    }
    displayQuestion(); // Refresh the current question after switching language
}

displayQuestion();