const countries = [
    "Andorra", "United Arab Emirates", "Afghanistan", "Antigua and Barbuda", "Anguilla", "Albania", "Armenia", "Angola", "Argentina", "American Samoa", "Austria", "Australia", "Aruba", "Aland Islands", "Azerbaijan", "Bosnia and Herzegovina", "Barbados", "Bangladesh", "Belgium", "Burkina Faso", "Bulgaria", "Bahrain", "Burundi", "Benin", "Saint Barthelemy", "Brunei", "Bolivia", "Bermuda", "Bonaire,  Saint Eustachius and Saba", "Brazil", "Bahamas", "Bhutan", "Bouvet Island", "Botswana", "Belarus", "Belize", "Canada", "Cocos  (Keeling)  Islands", "Democratic Republic of Congo", "Central African Republic", "Republic of Congo", "Switzerland", "Côte d'Ivoire", "Cook Islands", "Chile", "Cameroon", "China", "Colombia", "Costa Rica", "Cuba", "Cape Verde", "Curaçao", "Christmas Island", "Cyprus", "Czech Republic", "Germany", "Djibouti", "Denmark", "Dominica", "Dominican Republic", "Algeria", "Ecuador", "Egypt", "Estonia", "Western Sahara", "Eritrea", "Spain", "Ethiopia", "Finland", "Fiji", "Falkland Islands", "Federated States of Micronesia", "Faroe Islands", "France", "Gabon", "United Kingdom", "Georgia", "Grenada", "French Guiana", "Guernsey", "Ghana", "Gibraltar", "Greenland", "Gambia", "Guinea", "Glorioso Islands", "Guadeloupe", "Equatorial Guinea", "Greece", "South Georgia and South Sandwich Islands", "Guatemala", "Guam", "Guinea-Bissau", "Guyana", "Hong Kong", "Heard Island and McDonald Islands", "Honduras", "Croatia", "Haiti", "Hungary", "Indonesia", "Ireland", "Israel", "Isle of Man", "India", "British Indian Ocean Territory", "Iraq", "Iran", "Iceland", "Italy", "Jersey", "Jamaica", "Jordan", "Japan", "Juan De Nova Island", "Kenya", "Kyrgyzstan", "Cambodia", "Kiribati", "Comoros", "Saint Kitts and Nevis", "North Korea", "South Korea", "Kosovo", "Kuwait", "Cayman Islands", "Kazakhstan", "Laos", "Lebanon", "Saint Lucia", "Liechtenstein", "Sri Lanka", "Liberia", "Lesotho", "Lithuania", "Luxembourg", "Latvia", "Libya", "Morocco", "Monaco", "Moldova", "Madagascar", "Montenegro", "Saint Martin", "Marshall Islands", "Macedonia", "Mali", "Macau", "Myanmar", "Mongolia", "Northern Mariana Islands", "Martinique", "Mauritania", "Montserrat", "Malta", "Mauritius", "Maldives", "Malawi", "Mexico", "Malaysia", "Mozambique", "Namibia", "New Caledonia", "Niger", "Norfolk Island", "Nigeria", "Nicaragua", "Netherlands", "Norway", "Nepal", "Nauru", "Niue", "New Zealand", "Oman", "Panama", "Peru", "French Polynesia", "Papua New Guinea", "Philippines", "Pakistan", "Poland", "Saint Pierre and Miquelon", "Pitcairn Islands", "Puerto Rico", "Palestinian", "Portugal", "Palau", "Paraguay", "Qatar", "Reunion", "Romania", "Serbia", "Russia", "Rwanda", "Saudi Arabia", "Solomon Islands", "Seychelles", "Sudan", "Sweden", "Singapore", "Saint Helena", "Slovenia", "Svalbard and Jan Mayen (Spitzenbergen)", "Slovakia", "Sierra Leone", "San Marino", "Senegal", "Somalia", "Suriname", "South Sudan", "Sao Tome and Principe", "El Salvador", "Syria", "Swaziland", "Turks and Caicos Islands", "Chad", "French Southern and Antarctic Lands", "Togo", "Thailand", "Tajikistan", "Tokelau", "Timor-Leste", "Turkmenistan", "Tunisia", "Tonga", "Turkey", "Trinidad and Tobago", "Tuvalu", "Taiwan", "Tanzania", "Ukraine", "Uganda", "Jarvis Island", "Baker Island", "Howland Island", "Johnston Atoll", "Midway Islands", "Wake Island", "United States", "Uruguay", "Uzbekistan", "Vatican City", "Saint Vincent and the Grenadines", "Venezuela", "British Virgin Islands", "US Virgin Islands", "Vietnam", "Vanuatu", "Wallis and Futuna", "Samoa", "Yemen", "Mayotte", "South Africa", "Zambia", "Zimbabwe"
];
function createTables() {
    const continents = {
        africa: ["Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cabo Verde", "Cameroon", "Central African Republic", "Chad", "Comoros", "Congo", "Cote d'Ivoire", "Djibouti", "Egypt", "Equatorial Guinea", "Eritrea", "Eswatini", "Ethiopia", "Gabon", "Gambia", "Ghana", "Guinea", "Guinea-Bissau", "Kenya", "Lesotho", "Liberia", "Libya", "Madagascar", "Malawi", "Mali", "Mauritania", "Mauritius", "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria", "Rwanda", "Sao Tome and Principe", "Senegal", "Seychelles", "Sierra Leone", "Somalia", "South Africa", "South Sudan", "Sudan", "Tanzania", "Togo", "Tunisia", "Uganda", "Zambia", "Zimbabwe"],
        asia: ["Afghanistan", "Armenia", "Azerbaijan", "Bahrain", "Bangladesh", "Bhutan", "Brunei", "Cambodia", "China", "Cyprus", "Georgia", "India", "Indonesia", "Iran", "Iraq", "Israel", "Japan", "Jordan", "Kazakhstan", "Kuwait", "Kyrgyzstan", "Laos", "Lebanon", "Malaysia", "Maldives", "Mongolia", "Myanmar", "Nepal", "North Korea", "Oman", "Pakistan", "Palestine", "Philippines", "Qatar", "Saudi Arabia", "Singapore", "South Korea", "Sri Lanka", "Syria", "Tajikistan", "Thailand", "Timor-Leste", "Turkey", "Turkmenistan", "United Arab Emirates", "Uzbekistan", "Vietnam", "Yemen"],
        europe: ["Albania", "Andorra", "Armenia", "Austria", "Azerbaijan", "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Georgia", "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Kazakhstan", "Kosovo", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Moldova", "Monaco", "Montenegro", "Netherlands", "North Macedonia", "Norway", "Poland", "Portugal", "Romania", "Russia", "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Turkey", "Ukraine", "United Kingdom", "Vatican City"],
        northAmerica: ["Antigua and Barbuda", "Bahamas", "Barbados", "Belize", "Canada", "Costa Rica", "Cuba", "Dominica", "Dominican Republic", "El Salvador", "Grenada", "Guatemala", "Haiti", "Honduras", "Jamaica", "Mexico", "Nicaragua", "Panama", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Trinidad and Tobago", "United States"],
        southAmerica: ["Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Ecuador", "Guyana", "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela"],
        oceania: ["Australia", "Fiji", "Kiribati", "Marshall Islands", "Micronesia", "Nauru", "New Zealand", "Palau", "Papua New Guinea", "Samoa", "Solomon Islands", "Tonga", "Tuvalu", "Vanuatu"]
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
            if (!correctCountries.includes(country)) {
                cell.classList.add('missed');
            }
            row.appendChild(cell);
            table.appendChild(row);
        });

        container.appendChild(table);
    });

    const southAmericaOceaniaContainer = document.createElement('div');
    southAmericaOceaniaContainer.id = 'southAmericaOceaniaContainer';
    southAmericaOceaniaContainer.style.display = 'flex';
    southAmericaOceaniaContainer.style.flexDirection = 'column';

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
            if (!correctCountries.includes(country)) {
                cell.classList.add('missed');
            }
            row.appendChild(cell);
            table.appendChild(row);
        });

        southAmericaOceaniaContainer.appendChild(table);
    });

    container.appendChild(southAmericaOceaniaContainer);
    document.body.appendChild(container);
}

function showTables() {
    createTables();
}


const correctCountries = [];
let score = 0;
let timeRemaining = 15 * 60;

const countryInput = document.getElementById('countryInput');
const scoreBoard = document.getElementById('scoreBoard');
const timerElement = document.getElementById('timer');

countryInput.addEventListener('input', (e) => {
    checkCountry(e.target.value.trim());
});

function checkCountry(countryName) {
    countryName = countryName.toLowerCase();
    if (countries.map(c => c.toLowerCase()).includes(countryName) && !correctCountries.map(c => c.toLowerCase()).includes(countryName)) {
        const originalCountryName = countries.find(c => c.toLowerCase() === countryName);
        correctCountries.push(originalCountryName);
        score++;
        scoreBoard.textContent = `Score: ${score} / 196`;
        document.querySelector(`[title="${originalCountryName}"]`).classList.add('correct');
        countryInput.value = ''; // Clear the input field
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let countdownInterval;
    let pauseCount = 0;
    const maxPauses = 3;
    let isPaused = false;

    function startCountdown() {
        countdownInterval = setInterval(() => {
            if (!isPaused) {
                timeRemaining--;
                const minutes = Math.floor(timeRemaining / 60);
                const seconds = timeRemaining % 60;
                timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

                if (timeRemaining <= 0) {
                    clearInterval(countdownInterval);
                    const messageElement = document.getElementById('message');
                    messageElement.textContent = 'Time is up!';
                    messageElement.style.display = 'block';
                    countryInput.disabled = true; // Disable the input field
                    showTables();
                }
            }
        }, 1000);
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
            document.getElementById('pauseMessage').textContent = `Game is Paused! Pauses left: ${maxPauses - pauseCount}`;
        } else if (isPaused) {
            isPaused = false;
            pauseButton.classList.remove('play');
            pauseButton.classList.add('pause');
            document.getElementById('map-container').style.display = 'block'; // Enable map interaction
            document.getElementById('pauseMessage').style.display = 'none';

            if (pauseCount >= maxPauses) {
                pauseButton.disabled = true;
                pauseButton.style.display = 'none';
            }
        }
    }

    function giveUp() {
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
    }

    function restartGame() {
        // Reset game state
        clearInterval(countdownInterval);
        pauseCount = 0;
        isPaused = false;
        score = 0;
        timeRemaining = 15 * 60;
        correctCountries.length = 0;

        // Reset UI elements
        countryInput.disabled = false;
        countryInput.value = '';
        scoreBoard.textContent = 'Score: 0';
        timerElement.textContent = '15:00';
        document.getElementById('message').style.display = 'none';
        document.getElementById('pauseButton').style.display = 'block';
        document.getElementById('pauseButton').disabled = false;
        document.getElementById('pauseButton').classList.remove('play');
        document.getElementById('pauseButton').classList.add('pause');
        document.getElementById('giveUpButton').style.display = 'block';
        document.getElementById('restartButton').style.display = 'none';
        document.getElementById('results').innerHTML = '';
        document.getElementById('map-container').style.display = 'block';

        // Start a new countdown
        startCountdown();
    }

    document.getElementById('pauseButton').addEventListener('click', togglePause);
    document.getElementById('giveUpButton').addEventListener('click', giveUp);
    document.getElementById('restartButton').addEventListener('click', restartGame);

    startCountdown();
});
startCountdown();

