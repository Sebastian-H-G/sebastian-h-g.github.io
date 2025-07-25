import { saveQuizResult } from './saveQuizResults.js';
import { checkAndAwardBadges, setupLiveBadgeListeners } from './badges.js';
setupLiveBadgeListeners();
const countryMappings = {   
    "Andorra": ["Andorra"],
    "United Arab Emirates": ["Vereinigte Arabische Emirate"],
    "Afghanistan": ["Afghanistan"],
    "Antigua and Barbuda": ["Antigua und Barbuda"],
    "Anguilla": ["Anguilla"],
    "Albania": ["Albanien"],
    "Armenia": ["Armenien"],
    "Angola": ["Angola"],
    "Argentina": ["Argentinien"],
    "American Samoa": ["Amerikanisch-Samoa", "Amerikanisch Samoa"],
    "Austria": ["Österreich"],
    "Australia": ["Australien"],
    "Aruba": ["Aruba"],
    "Aland Islands": ["Ålandinseln"],
    "Azerbaijan": ["Aserbaidschan"],
    "Bosnia and Herzegovina": ["Bosnien und Herzegowina", "Bosnien Herzegowina", "Bosnia Herzegovina" ],
    "Barbados": ["Barbados"],
    "Bangladesh": ["Bangladesch"],
    "Belgium": ["Belgien"],
    "Burkina Faso": ["Burkina Faso"],
    "Bulgaria": ["Bulgarien"],
    "Bahrain": ["Bahrain"],
    "Burundi": ["Burundi"],
    "Benin": ["Benin"],
    "Saint Barthelemy": ["Saint-Barthélemy", "Saint Barthélemy"],
    "Brunei": ["Brunei"],
    "Bolivia": ["Bolivien"],
    "Bermuda": ["Bermuda"],
    "Bonaire, Saint Eustachius and Saba": ["Bonaire, Sint Eustatius und Saba"],
    "Brazil": ["Brasilien"],
    "Bahamas": ["Bahamas"],
    "Bhutan": ["Bhutan"],
    "Bouvet Island": ["Bouvetinsel"],
    "Botswana": ["Botsuana"],
    "Belarus": ["Belarus"],
    "Belize": ["Belize"],
    "Canada": ["Kanada"],
    "Cocos  (Keeling)  Islands": ["Kokosinseln", "Cocos Islands"],
    "Democratic Republic of the Congo": ["Demokratische Republik Kongo", "DR Kongo", "DR Congo"],
    "Central African Republic": ["Zentralafrikanische Republik"],
    "Republic of the Congo": ["Republik Kongo", "Kongo", "Congo"],
    "Switzerland": ["Schweiz"],
    "Ivory Coast": ["Elfenbeinküste", "Ivory Coast", "Côte d'Ivoire", "Elfenbeinkueste"],
    "Cook Islands": ["Cookinseln"],
    "Chile": ["Chile"],
    "Cameroon": ["Kamerun"],
    "China": ["China"],
    "Colombia": ["Kolumbien"],
    "Costa Rica": ["Costa Rica"],
    "Cuba": ["Kuba"],
    "Cape Verde": ["Kap Verde", "Cabo Verde",],
    "Curaçao": ["Curaçao"],
    "Christmas Island": ["Weihnachtsinsel"],
    "Cyprus": ["Zypern"],
    "Czech Republic": ["Tschechische Republik", "Tschechien", "Chech Republic", ],
    "Germany": ["Deutschland"],
    "Djibouti": ["Dschibuti"],
    "Denmark": ["Dänemark"],
    "Dominica": ["Dominica"],
    "Dominican Republic": ["Dominikanische Republik"],
    "Algeria": ["Algerien"],
    "Ecuador": ["Ecuador"],
    "Egypt": ["Ägypten"],
    "Estonia": ["Estland"],
    "Western Sahara": ["Westsahara"],
    "Eritrea": ["Eritrea"],
    "Spain": ["Spanien"],
    "Ethiopia": ["Äthiopien"],
    "Finland": ["Finnland"],
    "Fiji": ["Fidschi"],
    "Falkland Islands": ["Falklandinseln"],
    "Faroe Islands": ["Färöer"],
    "France": ["Frankreich"],
    "Gabon": ["Gabun"],
    "United Kingdom": ["Vereinigtes Königreich", "UK", "Großbritannien"],
    "Georgia": ["Georgien"],
    "Grenada": ["Grenada"],
    "French Guiana": ["Französisch-Guayana", "French-Guiana", "Französisch Guayana"],
    "Guernsey": ["Guernsey"],
    "Ghana": ["Ghana"],
    "Gibraltar": ["Gibraltar"],
    "Greenland": ["Grönland",],
    "Gambia": ["Gambia"],
    "Guinea": ["Guinea"],
    "Glorioso Islands": ["Glorieuses-Inseln", "Glorieuses Inseln"],
    "Guadeloupe": ["Guadeloupe"],
    "Equatorial Guinea": ["Äquatorialguinea"],
    "Greece": ["Griechenland"],
    "South Georgia and South Sandwich Islands": ["Südgeorgien und die Südlichen Sandwichinseln"],
    "Guatemala": ["Guatemala"],
    "Guam": ["Guam"],
    "Guinea-Bissau": ["Guinea-Bissau", "Guinea Bissau"],
    "Guyana": ["Guyana"],
    "Hong Kong": ["Hongkong"],
    "Heard Island and McDonald Islands": ["Heard und McDonaldinseln"],
    "Honduras": ["Honduras"],
    "Croatia": ["Kroatien"],
    "Haiti": ["Haiti"],
    "Hungary": ["Ungarn"],
    "Indonesia": ["Indonesien"],
    "Ireland": ["Irland"],
    "Israel": ["Israel"],
    "Isle of Man": ["Isle of Man"],
    "India": ["Indien"],
    "British Indian Ocean Territory": ["Britisches Territorium im Indischen Ozean"],
    "Iraq": ["Irak"],
    "Iran": ["Iran"],
    "Iceland": ["Island"],
    "Italy": ["Italien"],
    "Jersey": ["Jersey"],
    "Jamaica": ["Jamaika"],
    "Jordan": ["Jordanien"],
    "Japan": ["Japan"],
    "Kenya": ["Kenia"],
    "Kyrgyzstan": ["Kirgisistan"],
    "Cambodia": ["Kambodscha"],
    "Kiribati": ["Kiribati"],
    "Comoros": ["Komoren"],
    "Saint Kitts and Nevis": ["St. Kitts und Nevis", "St. Kitts and Nevis", "Saint Kitts und Nevis"],
    "North Korea": ["Nordkorea", "Nord Korea"],
    "South Korea": ["Südkorea", "Süd Korea"],
    "Kosovo": ["Kosovo"],
    "Kuwait": ["Kuwait"],
    "Cayman Islands": ["Kaimaninseln"],
    "Kazakhstan": ["Kasachstan"],
    "Laos": ["Laos"],
    "Lebanon": ["Libanon"],
    "Saint Lucia": ["St. Lucia",],
    "Liechtenstein": ["Liechtenstein"],
    "Sri Lanka": ["Sri Lanka"],
    "Liberia": ["Liberia"],
    "Lesotho": ["Lesotho"],
    "Lithuania": ["Litauen"],
    "Luxembourg": ["Luxemburg"],
    "Latvia": ["Lettland"],
    "Libya": ["Libyen"],
    "Morocco": ["Marokko"],
    "Monaco": ["Monaco"],
    "Moldova": ["Moldawien"],
    "Madagascar": ["Madagaskar"],
    "Montenegro": ["Montenegro"],
    "Saint Martin": ["Saint-Martin", "St. Martin"],
    "Marshall Islands": ["Marshallinseln"],
    "Macedonia": ["Nordmazedonien", "Mazedonien", "Northmazedonia", "North Mazedonia", "Nord Mazedonien"],
    "Mali": ["Mali"],
    "Macau": ["Macau"],
    "Myanmar": ["Myanmar"],
    "Mongolia": ["Mongolei"],
    "Northern Mariana Islands": ["Nördliche Marianen"],
    "Martinique": ["Martinique"],
    "Mauritania": ["Mauretanien"],
    "Montserrat": ["Montserrat"],
    "Malta": ["Malta"],
    "Mauritius": ["Mauritius"],
    "Maldives": ["Malediven"],
    "Federated States of Micronesia": ["Mikronesien", "Micronesia"],
    "Malawi": ["Malawi"],
    "Mexico": ["Mexiko"],
    "Malaysia": ["Malaysia"],
    "Mozambique": ["Mosambik"],
    "Namibia": ["Namibia"],
    "New Caledonia": ["Neukaledonien"],
    "Niger": ["Niger"],
    "Norfolk Island": ["Norfolkinsel"],
    "Nigeria": ["Nigeria"],
    "Nicaragua": ["Nicaragua"],
    "Netherlands": ["Niederlande"],
    "Norway": ["Norwegen"],
    "Nepal": ["Nepal"],
    "Nauru": ["Nauru"],
    "Niue": ["Niue"],
    "New Zealand": ["Neuseeland"],
    "Oman": ["Oman"],
    "Panama": ["Panama"],
    "Peru": ["Peru"],
    "French Polynesia": ["Französisch-Polynesien", "Französisch Polynesien"],
    "Papua New Guinea": ["Papua-Neuguinea", "Papua Neuguinea"],
    "Philippines": ["Philippinen"],
    "Pakistan": ["Pakistan"],
    "Poland": ["Polen"],
    "Saint Pierre and Miquelon": ["Saint-Pierre und Miquelon", "Saint Pierre und Miquelon"],
    "Pitcairn Islands": ["Pitcairninseln"],
    "Puerto Rico": ["Puerto Rico"],
    "Palestinian": ["Palästinensische Gebiete", "Palästina", "Palestina"],
    "Portugal": ["Portugal"],
    "Palau": ["Palau"],
    "Paraguay": ["Paraguay"],
    "Qatar": ["Katar"],
    "Reunion": ["Réunion"],
    "Romania": ["Rumänien"],
    "Serbia": ["Serbien"],
    "Russia": ["Russland"],
    "Rwanda": ["Ruanda"],
    "Saudi Arabia": ["Saudi-Arabien", "Saudi Arabien"],
    "Solomon Islands": ["Salomonen"],
    "Seychelles": ["Seychellen"],
    "Sudan": ["Sudan"],
    "Sweden": ["Schweden"],
    "Singapore": ["Singapur"],
    "Saint Helena": ["St. Helena"],
    "Slovenia": ["Slowenien"],
    "Svalbard and Jan Mayen (Spitzenbergen)": ["Spitzenbergen und Jan Mayen", "Spitzenbergen", "Svalbard"],
    "Slovakia": ["Slowakei"],
    "Sierra Leone": ["Sierra Leone"],
    "San Marino": ["San Marino"],
    "Senegal": ["Senegal"],
    "Somalia": ["Somalia"],
    "Suriname": ["Suriname"],
    "South Sudan": ["Südsudan"],
    "Sao Tome and Principe": ["São Tomé und Príncipe", "Sao Tome und Principe", "Sao Tome Principe"],
    "El Salvador": ["El Salvador"],
    "Syria": ["Syrien"],
    "Eswatini": ["Swaziland"],
    "Turks and Caicos Islands": ["Turks- und Caicosinseln", "Turks und Caicosinseln", "Turksinsel und Caicosinsel"],
    "Chad": ["Tschad"],
    "French Southern and Antarctic Lands": ["Französische Süd- und Antarktisgebiete", "Französische Süd und Antarktisgebiete"],
    "Togo": ["Togo"],
    "Thailand": ["Thailand"],
    "Tajikistan": ["Tadschikistan"],
    "Tokelau": ["Tokelau"],
    "Timor-Leste": ["Osttimor", "Timor Leste"],
    "Turkmenistan": ["Turkmenistan"],
    "Tunisia": ["Tunesien"],
    "Tonga": ["Tonga"],
    "Turkey": ["Türkei"],
    "Trinidad and Tobago": ["Trinidad und Tobago"],
    "Tuvalu": ["Tuvalu"],
    "Taiwan": ["Taiwan"],
    "Tanzania": ["Tansania"],
    "Ukraine": ["Ukraine"],
    "Uganda": ["Uganda"],
    "United States": ["Vereinigte Staaten", "USA", "Vereinigte Staaten von Amerika", "US"],
    "Uruguay": ["Uruguay"],
    "Uzbekistan": ["Usbekistan"],
    "Vatican City": ["Vatikanstadt"],
    "Saint Vincent and the Grenadines": ["St. Vincent und die Grenadinen", "Saint Vincent und die Grenadinen", "St. Vincent and the Grenadinen"],
    "Venezuela": ["Venezuela"],
    "British Virgin Islands": ["Britische Jungferninseln"],
    "US Virgin Islands": ["Amerikanische Jungferninseln"],
    "Vietnam": ["Vietnam"],
    "Vanuatu": ["Vanuatu"],
    "Wallis and Futuna": ["Wallis und Futuna"],
    "Samoa": ["Samoa"],
    "Yemen": ["Jemen"],
    "Mayotte": ["Mayotte"],
    "South Africa": ["Südafrika"],
    "Zambia": ["Sambia"],
    "Zimbabwe": ["Simbabwe"]
};
function normalizeCountryName(country) {
    const normalizedCountry = country
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // Remove accents
        .replace(/[-\s]+/g, " ") // Replace hyphens and multiple spaces with a single space
        .trim()
        .toLowerCase();

    for (const [standardName, aliases] of Object.entries(countryMappings)) {
        const normalizedStandard = standardName
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[-\s]+/g, " ")
            .trim()
            .toLowerCase();

        const normalizedAliases = aliases.map(alias =>
            alias
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/[-\s]+/g, " ")
                .trim()
                .toLowerCase()
        );

        if (normalizedAliases.includes(normalizedCountry) || normalizedStandard === normalizedCountry) {
            return standardName;
        }
    }
    return country;
}

const countries = [
 "Albania", "Andorra", "Austria", "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria", "Croatia", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Kosovo", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Moldova", "Monaco", "Montenegro", "Netherlands", "Macedonia", "Norway", "Poland", "Portugal", "Romania", "Russia", "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Ukraine", "United Kingdom", "Vatican City", "Afghanistan", "Armenia", "Azerbaijan", "Bahrain", "Bangladesh", "Bhutan", "Brunei", "Cambodia", "China", "Cyprus", "Timor-Leste", "Georgia", "India", "Indonesia", "Iran", "Iraq", "Israel", "Japan", "Jordan", "Kazakhstan", "Kuwait", "Kyrgyzstan", "Laos", "Lebanon", "Malaysia", "Maldives", "Mongolia", "Myanmar", "Nepal", "North Korea", "Oman", "Pakistan", "Philippines", "Qatar", "Saudi Arabia", "Singapore", "South Korea", "Sri Lanka", "Syria", "Taiwan", "Tajikistan", "Thailand", "Turkey", "Turkmenistan", "United Arab Emirates", "Uzbekistan", "Vietnam", "Yemen", "Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cameroon", "Cape Verde", "Central African Republic", "Chad", "Comoros", "Democratic Republic of the Congo", "Djibouti", "Egypt", "Equatorial Guinea", "Eritrea", "Eswatini", "Ethiopia", "Gabon", "Gambia", "Ghana", "Guinea", "Guinea-Bissau", "Ivory Coast", "Kenya", "Lesotho", "Liberia", "Libya", "Madagascar", "Malawi", "Mali", "Mauritania", "Mauritius", "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria", "Republic of the Congo", "Rwanda", "Sao Tome and Principe", "Senegal", "Seychelles", "Sierra Leone", "Somalia", "South Africa", "South Sudan", "Sudan", "Tanzania", "Togo", "Tunisia", "Uganda", "Zambia", "Zimbabwe", "Antigua and Barbuda", "Bahamas", "Barbados", "Belize", "Canada", "Costa Rica", "Cuba", "Dominica", "Dominican Republic", "El Salvador", "Grenada", "Guatemala", "Haiti", "Honduras", "Jamaica", "Mexico", "Nicaragua", "Panama", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Trinidad and Tobago", "United States", "Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Ecuador", "Guyana", "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela", "Australia", "Federated States of Micronesia", "Fiji", "Kiribati", "Marshall Islands", "Nauru", "New Zealand", "Palau", "Papua New Guinea", "Samoa", "Solomon Islands", "Tonga", "Tuvalu", "Vanuatu"   
];

function createTables() {
    const continents = {
        africa: ["Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cameroon", "Cape Verde", "Central African Republic", "Chad", "Comoros", "Democratic Republic of the Congo", "Djibouti", "Egypt", "Equatorial Guinea", "Eritrea", "Eswatini", "Ethiopia", "Gabon", "Gambia", "Ghana", "Guinea", "Guinea-Bissau", "Ivory Coast", "Kenya", "Lesotho", "Liberia", "Libya", "Madagascar", "Malawi", "Mali", "Mauritania", "Mauritius", "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria", "Republic of the Congo", "Rwanda", "São Tomé and Príncipe", "Senegal", "Seychelles", "Sierra Leone", "Somalia", "South Africa", "South Sudan", "Sudan", "Tanzania", "Togo", "Tunisia", "Uganda", "Zambia", "Zimbabwe"],
        asia: ["Afghanistan", "Armenia", "Azerbaijan", "Bahrain", "Bangladesh", "Bhutan", "Brunei", "Cambodia", "China", "Cyprus", "Timor - Leste", "Georgia", "India", "Indonesia", "Iran", "Iraq", "Israel", "Japan", "Jordan", "Kazakhstan", "Kuwait", "Kyrgyzstan", "Laos", "Lebanon", "Malaysia", "Maldives", "Mongolia", "Myanmar", "Nepal", "North Korea", "Oman", "Pakistan", "Philippines", "Qatar", "Saudi Arabia", "Singapore", "South Korea", "Sri Lanka", "Syria", "Taiwan", "Tajikistan", "Thailand", "Turkey", "Turkmenistan", "United Arab Emirates", "Uzbekistan", "Vietnam", "Yemen"],
        europe: ["Albania", "Andorra", "Austria", "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria", "Croatia", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Kosovo", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Moldova", "Monaco", "Montenegro", "Netherlands", "Macedonia", "Norway", "Poland", "Portugal", "Romania", "Russia", "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Ukraine", "United Kingdom", "Vatican City"],
        northAmerica: ["Antigua and Barbuda", "Bahamas", "Barbados", "Belize", "Canada", "Costa Rica", "Cuba", "Dominica", "Dominican Republic", "El Salvador", "Grenada", "Guatemala", "Haiti", "Honduras", "Jamaica", "Mexico", "Nicaragua", "Panama", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Trinidad and Tobago", "United States"],
        southAmerica: ["Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Ecuador", "Guyana", "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela"],
        oceania: ["Australia", "Federated States of Micronesia", "Fiji", "Kiribati", "Marshall Islands", "Nauru", "New Zealand", "Palau", "Papua New Guinea", "Samoa", "Solomon Islands", "Tonga", "Tuvalu", "Vanuatu"]
    };

    const orderedContinents = ["africa", "asia", "europe", "northAmerica"];
    const southAmericaAndOceania = ["southAmerica", "oceania"];

    const container = document.createElement('div');
    container.id = 'continentTables';

    orderedContinents.forEach(continentKey => {
        const continent = continentKey.charAt(0).toUpperCase() + continentKey.slice(1);
        const countries = continents[continentKey];
        const table = document.createElement('table');
        table.classList.add('continent-table');
        const caption = document.createElement('caption');
        caption.textContent = continent;
        table.appendChild(caption);

        countries.sort().forEach(country => {
            const row = document.createElement('tr');
            const cell = document.createElement('td');
            cell.textContent = country;
            const normalizedCountry = normalizeCountryName(country);
            if (!correctCountries.includes(normalizedCountry)) {
                cell.classList.add('missed');
            }
            row.appendChild(cell);
            table.appendChild(row);
        });

        container.appendChild(table);
    });

    southAmericaAndOceania.forEach(continentKey => {
        const continent = continentKey.charAt(0).toUpperCase() + continentKey.slice(1);
        const countries = continents[continentKey];
        const table = document.createElement('table');
        table.classList.add('continent-table');
        const caption = document.createElement('caption');
        caption.textContent = continent;
        table.appendChild(caption);

        countries.sort().forEach(country => {
            const row = document.createElement('tr');
            const cell = document.createElement('td');
            cell.textContent = country;
            const normalizedCountry = normalizeCountryName(country);
            if (!correctCountries.includes(normalizedCountry)) {
                cell.classList.add('missed');
            }
            row.appendChild(cell);
            table.appendChild(row);
        });

        container.appendChild(table);
    });

    document.body.appendChild(container);
    const footer = document.querySelector('footer');
    document.body.insertBefore(container, footer);
}

function showTables() {
    createTables();
}


const correctCountries = [];
let score = 0;
let timeRemaining = 15 * 60;

let attainableScore = countries.length;
let attainedScore = 0;
let completed = false;
const quizId = "adf0940c-c35c-42e9-8b7b-ab75f3f920a7"; // <-- real UUID
let gave_up = false; // <-- Add this line

const countryInput = document.getElementById('countryInput');
const scoreBoard = document.getElementById('scoreBoard');
const timerElement = document.getElementById('timer');

countryInput.addEventListener('input', (e) => {
    checkCountry(e.target.value.trim());
});


function checkCountry(countryName) {
    countryName = countryName.toLowerCase();
    const normalizedCountryName = normalizeCountryName(countryName);
    if (countries.map(c => c.toLowerCase()).includes(normalizedCountryName.toLowerCase()) && !correctCountries.map(c => c.toLowerCase()).includes(normalizedCountryName.toLowerCase())) {
        const originalCountryName = countries.find(c => c.toLowerCase() === normalizedCountryName.toLowerCase());
        correctCountries.push(originalCountryName);
        score++;
        attainedScore = score; // <-- Add this line
        scoreBoard.textContent = `Score: ${score} / 196`;
        document.querySelectorAll(`[title="${originalCountryName}"]`).forEach(path => {
            path.classList.add('correct');
        });
        
        countryInput.value = ''; // Clear the input field
        countryInput.focus(); // Focus the input field
    }
}

// badger.js (or wherever you define this)
async function onQuizComplete() {
  try {
    // 1) Save the quiz result
    const { data: savedResult, error } = await saveQuizResult({
      quizId,
      attainedScore,
      attainableScore,
      completed,
      gave_up
    });
    if (error) throw error;
    console.log('Result saved:', savedResult);

    // 2) Run badge checks
    //    We need to pass exactly the shape checkAndAwardBadges() expects:
    await checkAndAwardBadges({
      quizId:     savedResult.quiz,
      attained:   savedResult.attained_score,
      attainable: savedResult.attainable_score,
      completed:  savedResult.completed,
      gaveUp:     savedResult.gave_up,
      playedAt:   savedResult.played_at || new Date().toISOString(),
      // If you track timing, add these two; otherwise omit them
      timeTaken:  savedResult.time_taken,
      timeAllowed:savedResult.time_allowed
    });

    // 3) Then update your UI (e.g. show results + any new badges)
  } catch (err) {
    console.error('Save failed:', err.message);
  }
}


document.addEventListener('DOMContentLoaded', () => {
    let countdownInterval;
    let pauseCount = 0;
    const maxPauses = 3;
    let isPaused = false;

    function endGame() {
        countries.forEach(country => {
            const normalizedCountryName = normalizeCountryName(country);
            if (!correctCountries.map(c => normalizeCountryName(c)).includes(normalizedCountryName)) {
                const originalCountryName = countries.find(c => normalizeCountryName(c) === normalizedCountryName);
                document.querySelectorAll(`[title="${originalCountryName}"]`).forEach(element => {
                    element.classList.add('not-guessed');
                });
            }
        });
    }
    function checkAllStatesGuessed() {
        return correctCountries.length === countries.length;
    }
    
    function startCountdown() {
        countdownInterval = setInterval(() => {
            if (!isPaused) {
                timeRemaining--;
                const minutes = Math.floor(timeRemaining / 60);
                const seconds = timeRemaining % 60;
                timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
                if (timeRemaining <= 0 || checkAllStatesGuessed()) {
                    clearInterval(countdownInterval);
                    const messageElement = document.getElementById('message');
                    const giveUpButton = document.getElementById('giveUpButton');
                    
                    if (checkAllStatesGuessed()) {
                        createConfetti();
                         completed = true; // <-- Add this
                    onQuizComplete(); // <-- Add this
                        messageElement.textContent = `Congratulations! 👏 You named all countries. 🎉`;
                        messageElement.style.color = 'green';
                        pauseButton.style.display = 'none';
                        showTables();
                        enableCountryTooltip();
                        messageElement.classList.add('congrats-animation');
                        setTimeout(() => {
                            messageElement.classList.remove('congrats-animation');
                        }, 1500);
                        if (navigator.vibrate) {
                            console.log('Vibration triggered'); // Add this line for debugging
                            navigator.vibrate(200); // Vibrate for 200 milliseconds
                        }
                        // Change "Give Up" button to "Restart" button
                        giveUpButton.textContent = 'Restart';
                        giveUpButton.onclick = () => location.reload();
                    } else {
                        completed = false; // <-- Add this
                        onQuizComplete(); // <-- Add this
                        messageElement.textContent = `Time is up! You named ${score} countries.`;
                        giveUpButton.textContent = 'Restart';
                        giveUpButton.onclick = () => location.reload();
                        pauseButton.style.display = 'none';
                        enableCountryTooltip() ;
                    }
                    
                    messageElement.style.display = 'block';
                    countryInput.disabled = true;
                    endGame();
                    // Disable the input field
                    showTables();
                }
            }
        }, 1000);
    }   
    // Confetti animation function
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
        piece.style.animationDuration = '2s'; // Set animation duration to 3 seconds
        document.body.appendChild(piece);
        piece.addEventListener('animationend', function() {
            piece.parentNode.removeChild(piece);
        });
    }

    // Adjust the number of confetti pieces
    const totalPieces = 700;
    const interval = 5; // milliseconds

    let i = 0;
    let intervalId = setInterval(function() {
        createPiece();
        i++;
        if (i >= totalPieces) {
            clearInterval(intervalId);
        }
    }, interval);
}
    // Add event listener for keydown to detect Control + X
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'x') {
            isPaused = !isPaused; // Toggle the timerRunning variable
            pauseButton.disabled = true;
            if (timerRunning) {
                startTimer();
            } else {
                stopTimer();
            }
        }
    });
    
    function stopTimer() {
        isPaused = true;
    }
    function togglePause() {
        const pauseButton = document.getElementById('pauseButton');
        if (!isPaused && pauseCount < maxPauses) {
            isPaused = true;
            pauseCount++;
            pauseButton.classList.remove('pause');
            pauseButton.classList.add('play');
            countryInput.disabled = true;
            document.getElementById('map-container').style.display = 'none'; // Disable map interaction
            document.getElementById('pauseMessage').style.display = 'block';
            document.querySelector('.controls').style.display = 'none';
            document.getElementById('pauseMessage').textContent = `Game is Paused! Pauses left: ${maxPauses - pauseCount}`;
        } else if (isPaused) {
            isPaused = false;
            pauseButton.classList.remove('play');
            pauseButton.classList.add('pause');
            countryInput.disabled = false;
            document.getElementById('map-container').style.display = 'block'; // Enable map interaction
            document.getElementById('pauseMessage').style.display = 'none';

            if (pauseCount >= maxPauses) {
                pauseButton.disabled = true;
                pauseButton.style.display = 'none';
            }
        }
    }

    function giveUp() {
        gave_up = true; // <-- Add this
    onQuizComplete(); // <-- Add this
        clearInterval(countdownInterval);
        const messageElement = document.getElementById('message');
        messageElement.textContent = `You gave up! You named ${score} countries.`;
        messageElement.style.display = 'block';
        document.getElementById('pauseButton').style.display = 'none';
        document.getElementById('giveUpButton').style.display = 'none';
        document.getElementById('restartButton').style.display = 'block';
        document.getElementById('pauseMessage').style.display = 'none';
        document.getElementById('map-container').style.display = 'block';
        countryInput.disabled = true; // Disable the input field
        showTables();
        enableCountryTooltip();
        endGame();
    }

    function restartGame() {
location.reload();
    }

    document.getElementById('pauseButton').addEventListener('click', togglePause);
    document.getElementById('giveUpButton').addEventListener('click', giveUp);
    document.getElementById('restartButton').addEventListener('click', restartGame);

    startCountdown();
});
