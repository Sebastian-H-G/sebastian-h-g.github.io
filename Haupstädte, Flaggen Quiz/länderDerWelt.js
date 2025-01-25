const countries = [
    "Andorra", "Vereinigte Arabische Emirate", "Afghanistan", "Antigua und Barbuda", "Anguilla", "Albanien", "Armenien", "Angola", "Argentinien", "Amerikanisch-Samoa", "Österreich", "Australien", "Aruba", "Åland-Inseln", "Aserbaidschan", "Bosnien und Herzegowina", "Barbados", "Bangladesch", "Belgien", "Burkina Faso", "Bulgarien", "Bahrain", "Burundi", "Benin", "Saint-Barthélemy", "Brunei", "Bolivien", "Bermuda", "Bonaire, Sint Eustatius und Saba", "Brasilien", "Bahamas", "Bhutan", "Bouvetinsel", "Botswana", "Weißrussland", "Belize", "Kanada", "Kokosinseln", "Demokratische Republik Kongo", "Zentralafrikanische Republik", "Republik Kongo", "Schweiz", "Elfenbeinküste", "Cookinseln", "Chile", "Kamerun", "China", "Kolumbien", "Costa Rica", "Kuba", "Kap Verde", "Curaçao", "Weihnachtsinsel", "Zypern", "Tschechische Republik", "Deutschland", "Dschibuti", "Dänemark", "Dominica", "Dominikanische Republik", "Algerien", "Ecuador", "Ägypten", "Estland", "Westsahara", "Eritrea", "Spanien", "Äthiopien", "Finnland", "Fidschi", "Falklandinseln", "Mikronesien", "Färöer", "Frankreich", "Gabun", "Vereinigtes Königreich", "Georgien", "Grenada", "Französisch-Guayana", "Guernsey", "Ghana", "Gibraltar", "Grönland", "Gambia", "Guinea", "Glorioso-Inseln", "Guadeloupe", "Äquatorialguinea", "Griechenland", "Südgeorgien und die Südlichen Sandwichinseln", "Guatemala", "Guam", "Guinea-Bissau", "Guyana", "Hongkong", "Heard und McDonaldinseln", "Honduras", "Kroatien", "Haiti", "Ungarn", "Indonesien", "Irland", "Israel", "Isle of Man", "Indien", "Britisches Territorium im Indischen Ozean", "Irak", "Iran", "Island", "Italien", "Jersey", "Jamaika", "Jordanien", "Japan", "Juan-de-Nova-Insel", "Kenia", "Kirgisistan", "Kambodscha", "Kiribati", "Komoren", "St. Kitts und Nevis", "Nordkorea", "Südkorea", "Kosovo", "Kuwait", "Kaimaninseln", "Kasachstan", "Laos", "Libanon", "St. Lucia", "Liechtenstein", "Sri Lanka", "Liberia", "Lesotho", "Litauen", "Luxemburg", "Lettland", "Libyen", "Marokko", "Monaco", "Moldawien", "Madagaskar", "Montenegro", "Saint-Martin", "Marshallinseln", "Mazedonien", "Mali", "Macau", "Myanmar", "Mongolei", "Nördliche Marianen", "Martinique", "Mauretanien", "Montserrat", "Malta", "Mauritius", "Malediven", "Malawi", "Mexiko", "Malaysia", "Mosambik", "Namibia", "Neukaledonien", "Niger", "Norfolkinsel", "Nigeria", "Nicaragua", "Niederlande", "Norwegen", "Nepal", "Nauru", "Niue", "Neuseeland", "Oman", "Panama", "Peru", "Französisch-Polynesien", "Papua-Neuguinea", "Philippinen", "Pakistan", "Polen", "Saint-Pierre und Miquelon", "Pitcairninseln", "Puerto Rico", "Palästina", "Portugal", "Palau", "Paraguay", "Katar", "Réunion", "Rumänien", "Serbien", "Russland", "Ruanda", "Saudi-Arabien", "Salomonen", "Seychellen", "Sudan", "Schweden", "Singapur", "St. Helena", "Slowenien", "Svalbard und Jan Mayen", "Slowakei", "Sierra Leone", "San Marino", "Senegal", "Somalia", "Suriname", "Südsudan", "São Tomé und Príncipe", "El Salvador", "Syrien", "Eswatini", "Turks- und Caicosinseln", "Tschad", "Französische Süd- und Antarktisgebiete", "Togo", "Thailand", "Tadschikistan", "Tokelau", "Timor-Leste", "Turkmenistan", "Tunesien", "Tonga", "Türkei", "Trinidad und Tobago", "Tuvalu", "Taiwan", "Tansania", "Ukraine", "Uganda", "Jarvis-Insel", "Baker-Insel", "Howland-Insel", "Johnston-Atoll", "Midwayinseln", "Wake-Insel", "Vereinigte Staaten", "Uruguay", "Usbekistan", "Vatikanstadt", "St. Vincent und die Grenadinen", "Venezuela", "Britische Jungferninseln", "Amerikanische Jungferninseln", "Vietnam", "Vanuatu", "Wallis und Futuna", "Samoa", "Jemen", "Mayotte", "Südafrika", "Sambia", "Simbabwe"
];
function createTables() {
    const continents = {
        afrika: ["Algerien", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Kap Verde", "Kamerun", "Zentralafrikanische Republik", "Tschad", "Komoren", "Kongo", "Elfenbeinküste", "Dschibuti", "Ägypten", "Äquatorialguinea", "Eritrea", "Eswatini", "Äthiopien", "Gabun", "Gambia", "Ghana", "Guinea", "Guinea-Bissau", "Kenia", "Lesotho", "Liberia", "Libyen", "Madagaskar", "Malawi", "Mali", "Mauretanien", "Mauritius", "Marokko", "Mosambik", "Namibia", "Niger", "Nigeria", "Ruanda", "São Tomé und Príncipe", "Senegal", "Seychellen", "Sierra Leone", "Somalia", "Südafrika", "Südsudan", "Sudan", "Tansania", "Togo", "Tunesien", "Uganda", "Sambia", "Simbabwe"],
        asien: ["Afghanistan", "Armenien", "Aserbaidschan", "Bahrain", "Bangladesch", "Bhutan", "Brunei", "Kambodscha", "China", "Zypern", "Georgien", "Indien", "Indonesien", "Iran", "Irak", "Israel", "Japan", "Jordanien", "Kasachstan", "Kuwait", "Kirgisistan", "Laos", "Libanon", "Malaysia", "Malediven", "Mongolei", "Myanmar", "Nepal", "Nordkorea", "Oman", "Pakistan", "Palästina", "Philippinen", "Katar", "Saudi-Arabien", "Singapur", "Südkorea", "Sri Lanka", "Syrien", "Tadschikistan", "Thailand", "Timor-Leste", "Türkei", "Turkmenistan", "Vereinigte Arabische Emirate", "Usbekistan", "Vietnam", "Jemen"],
        europa: ["Albanien", "Andorra", "Armenien", "Österreich", "Aserbaidschan", "Weißrussland", "Belgien", "Bosnien und Herzegowina", "Bulgarien", "Kroatien", "Zypern", "Tschechische Republik", "Dänemark", "Estland", "Finnland", "Frankreich", "Georgien", "Deutschland", "Griechenland", "Ungarn", "Island", "Irland", "Italien", "Kasachstan", "Kosovo", "Lettland", "Liechtenstein", "Litauen", "Luxemburg", "Malta", "Moldawien", "Monaco", "Montenegro", "Niederlande", "Mazedonien", "Norwegen", "Polen", "Portugal", "Rumänien", "Russland", "San Marino", "Serbien", "Slowakei", "Slowenien", "Spanien", "Schweden", "Schweiz", "Türkei", "Ukraine", "Vereinigtes Königreich", "Vatikanstadt"],
        nordAmerika: ["Antigua und Barbuda", "Bahamas", "Barbados", "Belize", "Kanada", "Costa Rica", "Kuba", "Dominica", "Dominikanische Republik", "El Salvador", "Grenada", "Guatemala", "Haiti", "Honduras", "Jamaika", "Mexiko", "Nicaragua", "Panama", "St. Kitts und Nevis", "St. Lucia", "St. Vincent und die Grenadinen", "Trinidad und Tobago", "Vereinigte Staaten"],
        südAmerika: ["Argentinien", "Bolivien", "Brasilien", "Chile", "Kolumbien", "Ecuador", "Guyana", "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela"],
        oceanien: ["Australien", "Südgeorgien und die südlichen sandwichinseln", "Fidschi", "Kiribati", "Marshallinseln", "Nauru", "Neuseeland", "Palau", "Papua-Neuguinea", "Samoa", "Salomonen", "Tonga", "Tuvalu", "Vanuatu"]
    };

    const orderedContinents = ["afrika", "asien", "europa", "nordAmerika"];
    const southAmericaAndOceania = ["südAmerika", "Oceanien"];

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

