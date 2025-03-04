const capitals = {
    "kabul": "Afghanistan",
    "tirana": "Albania",
    "algiers": "Algeria",
    "andorra la vella": "Andorra",
    "luanda": "Angola",
    "st. john's": "Antigua and Barbuda",
    "buenos aires": "Argentina",
    "yerevan": "Armenia",
    "canberra": "Australia",
    "vienna": "Austria",
    "baku": "Azerbaijan",
    "nassau": "Bahamas",
    "manama": "Bahrain",
    "dhaka": "Bangladesh",
    "bridgetown": "Barbados",
    "minsk": "Belarus",
    "brussels": "Belgium",
    "belmopan": "Belize",
    "cotonou": "Benin",
    "porto-novo": "Benin",
    "thimphu": "Bhutan",
    "la paz": "Bolivia",
    "sucre": "Bolivia",
    "sarajevo": "Bosnia and Herzegovina",
    "gaborone": "Botswana",
    "brasilia": "Brazil",
    "bandar seri begawan": "Brunei",
    "sofia": "Bulgaria",
    "ouagadougou": "Burkina Faso",
    "gitega": "Burundi",
    "phnom penh": "Cambodia",
    "yaounde": "Cameroon",
    "ottawa": "Canada",
    "praia": "Cape Verde",
    "bangui": "Central African Republic",
    "n'djamena": "Chad",
    "santiago": "Chile",
    "beijing": "China",
    "bogota": "Colombia",
    "moroni": "Comoros",
    "san jose": "Costa Rica",
    "zagreb": "Croatia",
    "havana": "Cuba",
    "nicosia": "Cyprus",
    "prague": "Czech Republic",
    "kinshasa": "Democratic Republic of the Congo",
    "copenhagen": "Denmark",
    "djibouti": "Djibouti",
    "roseau": "Dominica",
    "santo domingo": "Dominican Republic",
    "dili": "East Timor",
    "quito": "Ecuador",
    "cairo": "Egypt",
    "san salvador": "El Salvador",
    "malabo": "Equatorial Guinea",
    "asmara": "Eritrea",
    "tallinn": "Estonia",
    "lobamba": "Eswatini",
    "addis ababa": "Ethiopia",
    "palikir": "Federated States of Micronesia",
    "suva": "Fiji",
    "helsinki": "Finland",
    "paris": "France",
    "libreville": "Gabon",
    "banjul": "The Gambia",
    "tbilisi": "Georgia",
    "berlin": "Germany",
    "accra": "Ghana",
    "athens": "Greece",
    "st. george's": "Grenada",
    "guatemala city": "Guatemala",
    "conakry": "Guinea",
    "bissau": "Guinea-Bissau",
    "georgetown": "Guyana",
    "port-au-prince": "Haiti",
    "tegucigalpa": "Honduras",
    "budapest": "Hungary",
    "reykjavik": "Iceland",
    "new delhi": "India",
    "jakarta": "Indonesia",
    "tehran": "Iran",
    "baghdad": "Iraq",
    "dublin": "Ireland",
    "jerusalem": "Israel",
    "rome": "Italy",
    "yamoussoukro": "Ivory Coast",
    "kingston": "Jamaica",
    "tokyo": "Japan",
    "amman": "Jordan",
    "astana": "Kazakhstan",
    "nairobi": "Kenya",
    "south tarawa": "Kiribati",
    "pristina": "Kosovo",
    "kuwait city": "Kuwait",
    "bishkek": "Kyrgyzstan",
    "vientiane": "Laos",
    "riga": "Latvia",
    "beirut": "Lebanon",
    "maseru": "Lesotho",
    "monrovia": "Liberia",
    "tripoli": "Libya",
    "vaduz": "Liechtenstein",
    "vilnius": "Lithuania",
    "luxembourg": "Luxembourg",
    "antananarivo": "Madagascar",
    "lilongwe": "Malawi",
    "kuala lumpur": "Malaysia",
    "male": "Maldives",
    "bamako": "Mali",
    "valletta": "Malta",
    "majuro": "Marshall Islands",
    "nouakchott": "Mauritania",
    "port louis": "Mauritius",
    "mexico city": "Mexico",
    "chisinau": "Moldova",
    "monaco": "Monaco",
    "ulaanbaatar": "Mongolia",
    "podgorica": "Montenegro",
    "rabat": "Morocco",
    "maputo": "Mozambique",
    "naypyidaw": "Myanmar",
    "windhoek": "Namibia",
    "yaren": "Nauru",
    "kathmandu": "Nepal",
    "amsterdam": "Netherlands",
    "wellington": "New Zealand",
    "managua": "Nicaragua",
    "niamey": "Niger",
    "abuja": "Nigeria",
    "pyongyang": "North Korea",
    "skopje": "North Macedonia",
    "oslo": "Norway",
    "muscat": "Oman",
    "islamabad": "Pakistan",
    "ngerulmud": "Palau",
    "panama city": "Panama",
    "port moresby": "Papua New Guinea",
    "asuncion": "Paraguay",
    "lima": "Peru",
    "manila": "Philippines",
    "warsaw": "Poland",
    "lisbon": "Portugal",
    "doha": "Qatar",
    "brazzaville": "Republic of the Congo",
    "bucharest": "Romania",
    "moscow": "Russia",
    "kigali": "Rwanda",
    "basseterre": "Saint Kitts and Nevis",
    "castries": "Saint Lucia",
    "kingstown": "Saint Vincent and the Grenadines",
    "apia": "Samoa",
    "san marino": "San Marino",
    "sao tome": "Sao Tome and Principe",
    "riyadh": "Saudi Arabia",
    "dakrar": "Senegal",
    "belgrade": "Serbia",
    "victoria": "Seychelles",
    "freetown": "Sierra Leone",
    "singapore": "Singapore",
    "bratislava": "Slovakia",
    "ljublijana": "Slovenia",
    "honiara": "Solomon Islands",
    "mogadishu": "Somalia",
    "pretoria": "South Africa",
    "bloemfontein": "South Africa",
    "cape town": "South Africa",
    "seoul": "South Korea",
    "juba": "South Sudan",
    "madrid": "Spain",
    "sri jayewardenepura kotte": "Sri Lanka",
    "khartoum": "Sudan",
    "paramaribo": "Suriname",
    "stockholm": "Sweden",
    "bern": "Switzerland",
    "damascus": "Syria",
    "taipei": "Taiwan",
    "dushanbe": "Tajikistan",
    "dodoma": "Tanzania",
    "bangkok": "Thailand",
    "lome": "Togo",
    "nuku'alofa": "Tonga",
    "port of spain": "Trinidad and Tobago",
    "tunis": "Tunisia",
    "ankara": "Turkey",
    "ashgabat": "Turkmenistan",
    "funafuti": "Tuvalu",
    "kampala": "Uganda",
    "kyiv": "Ukraine",
    "abu dhabi": "United Arab Emirates",
    "london": "United Kingdom",
    "washington dc": "United States",
    "montevideo": "Uruguay",
    "tashkent": "Uzbekistan",
    "port vila": "Vanuatu",
    "vatican city": "Vatican City",
    "caracas": "Venezuela",
    "hanoi": "Vietnam",
    "lusaka": "Zambia",
    "harare": "Zimbabwe"
  };
  

  const alternativeSpellings = {
    "kabul": "kabul",
    "tirana": "tirana",
    "algier": "algiers",
    "andorra la vella": "andorra la vella",
    "luanda": "luanda",
    "saint john's": "st. john's",
    "saint johns": "st. john's",
    "st. johns": "st. john's",
    "st johns": "st. john's",
    "buenos aires": "buenos aires",
    "jerewan": "yerevan",
    "canberra": "canberra",
    "wien": "vienna",
    "baku": "baku",
    "nassau": "nassau",
    "manama": "manama",
    "dhaka": "dhaka",
    "bridgetown": "bridgetown",
    "minsk": "minsk",
    "brüssel": "brussels",
    "belmopan": "belmopan",
    "cotonou": "cotonou",
    "porto-novo": "porto-novo",
    "thimphu": "thimphu",
    "la paz": "la paz",
    "sucre": "sucre",
    "sarajewo": "sarajevo",
    "gaborone": "gaborone",
    "brasilia": "brasilia",
    "bandar seri begawan": "bandar seri begawan",
    "sofia": "sofia",
    "ouagadougou": "ouagadougou",
    "gitega": "gitega",
    "phnom penh": "phnom penh",
    "yaoundé": "yaounde",
    "ottawa": "ottawa",
    "praia": "praia",
    "bangui": "bangui",
    "n djamena": "n'djamena",
    "santiago de chile": "santiago",
    "peking": "beijing",
    "bogotá": "bogota",
    "moroni": "moroni",
    "san josé": "san jose",
    "zagreb": "zagreb",
    "havanna": "havana",
    "nikosia": "nicosia",
    "prag": "prague",
    "kinshasa": "kinshasa",
    "kopenhagen": "copenhagen",
    "dschibuti": "djibouti",
    "roseau": "roseau",
    "santo domingo": "santo domingo",
    "dili": "dili",
    "quito": "quito",
    "kairo": "cairo",
    "san salvador": "san salvador",
    "malabo": "malabo",
    "asmara": "asmara",
    "tallinn": "tallinn",
    "lobamba": "lobamba",
    "addis abeba": "addis ababa",
    "palikir": "palikir",
    "suva": "suva",
    "helsinki": "helsinki",
    "paris": "paris",
    "libreville": "libreville",
    "banjul": "banjul",
    "tiflis": "tbilisi",
    "berlin": "berlin",
    "accra": "accra",
    "athen": "athens",
    "st george's": "st. george's",
    "guatemala-stadt": "guatemala city",
    "conakry": "conakry",
    "bissau": "bissau",
    "georgetown": "georgetown",
    "port-au-prince": "port-au-prince",
    "tegucigalpa": "tegucigalpa",
    "budapest": "budapest",
    "reykjavík": "reykjavik",
    "neu-delhi": "new delhi",
    "jakarta": "jakarta",
    "teheran": "tehran",
    "bagdad": "baghdad",
    "dublin": "dublin",
    "jerusalem": "jerusalem",
    "rom": "rome",
    "yamoussoukro": "yamoussoukro",
    "kingston": "kingston",
    "tokio": "tokyo",
    "amman": "amman",
    "astana": "astana",
    "nairobi": "nairobi",
    "south tarawa": "south tarawa",
    "pristina": "pristina",
    "kuwait-stadt": "kuwait city",
    "bischkek": "bishkek",
    "vientiane": "vientiane",
    "riga": "riga",
    "beirut": "beirut",
    "maseru": "maseru",
    "monrovia": "monrovia",
    "tripolis": "tripoli",
    "vaduz": "vaduz",
    "vilnius": "vilnius",
    "luxemburg": "luxembourg",
    "antananarivo": "antananarivo",
    "lilongwe": "lilongwe",
    "kuala lumpur": "kuala lumpur",
    "malé": "male",
    "bamako": "bamako",
    "valletta": "valletta",
    "majuro": "majuro",
    "nouakchott": "nouakchott",
    "port louis": "port louis",
    "mexiko-stadt": "mexico city",
    "chisinau": "chisinau",
    "monaco": "monaco",
    "ulan bator": "ulaanbaatar",
    "podgorica": "podgorica",
    "rabat": "rabat",
    "maputo": "maputo",
    "naypyidaw": "naypyidaw",
    "windhuk": "windhoek",
    "yaren": "yaren",
    "katmandu": "kathmandu",
    "amsterdam": "amsterdam",
    "wellington": "wellington",
    "managua": "managua",
    "niamey": "niamey",
    "abuja": "abuja",
    "pjöngjang": "pyongyang",
    "skopje": "skopje",
    "oslo": "oslo",
    "maskat": "muscat",
    "islamabad": "islamabad",
    "ngerulmud": "ngerulmud",
    "panama-stadt": "panama city",
    "port moresby": "port moresby",
    "asunción": "asuncion",
    "lima": "lima",
    "manila": "manila",
    "warschau": "warsaw",
    "lissabon": "lisbon",
    "doha": "doha",
    "brazzaville": "brazzaville",
    "bukarest": "bucharest",
    "moskau": "moscow",
    "kigali": "kigali",
    "basseterre": "basseterre",
    "castries": "castries",
    "kingstown": "kingstown",
    "apia": "apia",
    "san marino": "san marino",
    "são tomé": "sao tome",
    "riad": "riyadh",
    "dakar": "dakrar",
    "belgrad": "belgrade",
    "victoria": "victoria",
    "freetown": "freetown",
    "singapur": "singapore",
    "bratislava": "bratislava",
    "laibach": "ljublijana",
    "honiara": "honiara",
    "mogadischu": "mogadishu",
    "pretoria": "pretoria",
    "seoul": "seoul",
    "juba": "juba",
    "madrid": "madrid",
    "sri jayewardenepura kotte": "sri jayewardenepura kotte",
    "khartum": "khartoum",
    "paramaribo": "paramaribo",
    "stockholm": "stockholm",
    "bern": "bern",
    "damaskus": "damascus",
    "taipeh": "taipei",
    "duschanbe": "dushanbe",
    "dodoma": "dodoma",
    "bangkok": "bangkok",
    "lomé": "lome",
    "nukualofa": "nuku'alofa",
    "port of spain": "port of spain",
    "tunis": "tunis",
    "ankara": "ankara",
    "aschgabat": "ashgabat",
    "funafuti": "funafuti",
    "kampala": "kampala",
    "kiew": "kyiv",
    "abu dhabi": "abu dhabi",
    "london": "london",
    "washington d.c.": "washington d.c.",
    "montevideo": "montevideo",
    "taschkent": "tashkent",
    "port vila": "port vila",
    "vatikanstadt": "vatican city",
    "caracas": "caracas",
    "hanoi": "hanoi",
    "lusaka": "lusaka",
    "harare": "harare",
    
};


const countryToCapitals = {
    "south africa": ["pretoria", "cape town", "bloemfontein"],
    "benin": ["cotonou", "porto-novo"],
    "bolivia": ["la paz", "sucre"],
    // ...other countries with multiple capitals...
};

function checkCapital(capitalName) {
    const normalizedCapitalName = normalizeCountryName(capitalName);
    let mainCapitalName = normalizedCapitalName;

    if (!capitals[normalizedCapitalName]) {
        mainCapitalName = alternativeSpellings[normalizedCapitalName];
    }

    const countryName = capitals[mainCapitalName];

    if (countryName && !correctCountries.includes(mainCapitalName)) {
        correctCountries.push(mainCapitalName);
        score++;
        scoreBoard.textContent = `Score: ${score} / 196`;

        // Normalize the title attribute for the circle elements
        const capitalNames = countryToCapitals[countryName.toLowerCase()] || [mainCapitalName];
        capitalNames.forEach(capital => {
            document.querySelectorAll(`[title="${normalizeCountryName(capital)}"]`).forEach(circle => {
                circle.classList.add('correct');
            });
        });

        countryInput.value = ''; // Clear the input field
        countryInput.focus(); // Focus the input field
    }
}
function normalizeCountryName(name) {
    return name
        .normalize("NFD") // Normalize to NFD Unicode form
        .replace(/[\u0300-\u036f]/g, "") // Remove accents
        .replace(/[-\s]+/g, " ") // Replace hyphens and multiple spaces with a single space
        .replace(/[^\w\s]/g, "") // Remove non-alphanumeric characters
        .trim() // Trim leading and trailing spaces
        .toLowerCase(); // Convert to lowercase
}


function createTables() {
    const continentCapitals = {
        africa: ["Algiers", "Luanda", "Porto-Novo or Cotonou", "Gaborone", "Ouagadougou", "Bujumbura", "Yaoundé", "Praia", "Bangui", "N'Djamena", "Moroni", "Kinshasa", "Djibouti", "Cairo", "Malabo", "Asmara", "Mbabane", "Addis Ababa", "Libreville", "Banjul", "Accra", "Conakry", "Bissau", "Yamoussoukro", "Nairobi", "Maseru", "Monrovia", "Tripoli", "Antananarivo", "Lilongwe", "Bamako", "Nouakchott", "Port Louis", "Rabat", "Maputo", "Windhoek", "Niamey", "Abuja", "Brazzaville", "Kigali", "São Tomé", "Dakar", "Victoria", "Freetown", "Mogadishu", "Pretoria, Cape Town or Bloemfontein", "Juba", "Khartoum", "Dodoma", "Lomé", "Tunis", "Kampala", "Lusaka", "Harare"],
        asia: ["Kabul", "Yerevan", "Baku", "Manama", "Dhaka", "Thimphu", "Bandar Seri Begawan", "Phnom Penh", "Beijing", "Nicosia", "Dili", "Tbilisi", "New Delhi", "Jakarta", "Tehran", "Baghdad", "Jerusalem", "Tokyo", "Amman", "Nur-Sultan", "Kuwait City", "Bishkek", "Vientiane", "Beirut", "Kuala Lumpur", "Malé", "Ulaanbaatar", "Naypyidaw", "Kathmandu", "Pyongyang", "Muscat", "Islamabad", "Manila", "Doha", "Riyadh", "Singapore", "Seoul", "Colombo", "Damascus", "Taipei", "Dushanbe", "Bangkok", "Ankara", "Ashgabat", "Abu Dhabi", "Tashkent", "Hanoi", "Sana'a"],
        europe: ["Tirana", "Andorra la Vella", "Vienna", "Minsk", "Brussels", "Sarajevo", "Sofia", "Zagreb", "Prague", "Copenhagen", "Tallinn", "Helsinki", "Paris", "Berlin", "Athens", "Budapest", "Reykjavik", "Dublin", "Rome", "Pristina", "Riga", "Vaduz", "Vilnius", "Luxembourg", "Valletta", "Chișinău", "Monaco", "Podgorica", "Amsterdam", "Skopje", "Oslo", "Warsaw", "Lisbon", "Bucharest", "Moscow", "San Marino", "Belgrade", "Bratislava", "Ljubljana", "Madrid", "Stockholm", "Bern", "Kyiv", "London", "Vatican City"],
        northAmerica: ["Saint John's", "Nassau", "Bridgetown", "Belmopan", "Ottawa", "San José", "Havana", "Roseau", "Santo Domingo", "San Salvador", "St. George's", "Guatemala City", "Port-au-Prince", "Tegucigalpa", "Kingston", "Mexico City", "Managua", "Panama City", "Basseterre", "Castries", "Kingstown", "Port of Spain", "Washington, D.C."],
        southAmerica: ["Buenos Aires", "Sucre or La Paz", "Brasília", "Santiago", "Bogotá", "Quito", "Georgetown", "Asunción", "Lima", "Paramaribo", "Montevideo", "Caracas"],
        oceania: ["Canberra", "Palikir", "Suva", "Tarawa", "Majuro", "Yaren", "Wellington", "Ngerulmud", "Port Moresby", "Apia", "Honiara", "Nuku'alofa", "Funafuti", "Port Vila"]
    };

    const orderedContinents = ["africa", "asia", "europe", "northAmerica"];
    const southAmericaAndOceania = ["southAmerica", "oceania"];

    const container = document.createElement('div');
    container.id = 'continentTables';

    orderedContinents.forEach(continentKey => {
        const continent = continentKey.charAt(0).toUpperCase() + continentKey.slice(1);
        const capitals = continentCapitals[continentKey];
        const table = document.createElement('table');
        table.classList.add('continent-table');
        const caption = document.createElement('caption');
        caption.textContent = continent;
        table.appendChild(caption);

        capitals.sort().forEach(capital => {
            const row = document.createElement('tr');
            const cell = document.createElement('td');
            cell.textContent = capital;
            const normalizedCapital = normalizeCountryName(capital);
            if (correctCountries.includes(normalizedCapital)) {
                cell.classList.add('correct');
            } else {
                cell.classList.add('missed');
            }
            row.appendChild(cell);
            table.appendChild(row);
        });

        container.appendChild(table);
    });

    southAmericaAndOceania.forEach(continentKey => {
        const continent = continentKey.charAt(0).toUpperCase() + continentKey.slice(1);
        const capitals = continentCapitals[continentKey];
        const table = document.createElement('table');
        table.classList.add('continent-table');
        const caption = document.createElement('caption');
        caption.textContent = continent;
        table.appendChild(caption);

        capitals.sort().forEach(capital => {
            const row = document.createElement('tr');
            const cell = document.createElement('td');
            cell.textContent = capital;
            const normalizedCapital = normalizeCountryName(capital);
            if (correctCountries.includes(normalizedCapital)) {
                cell.classList.add('correct');
            } else {
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

const countryInput = document.getElementById('countryInput');
const scoreBoard = document.getElementById('scoreBoard');
const timerElement = document.getElementById('timer');

countryInput.addEventListener('input', (e) => {
    checkCapital(e.target.value.trim());
});



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
                        messageElement.textContent = `Time is up! You named ${score} countries.`;
                        giveUpButton.textContent = 'Restart';
                        giveUpButton.onclick = () => location.reload();
                        pauseButton.style.display = 'none';
                        enableCountryTooltip();
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
            piece.addEventListener('animationend', function () {
                piece.parentNode.removeChild(piece);
            });
        }

        // Adjust the number of confetti pieces
        const totalPieces = 700;
        const interval = 5; // milliseconds

        let i = 0;
        let intervalId = setInterval(function () {
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
startCountdown();