const countries = [
    { id: "AF", name: "Afghanistan", capital: "Kabul" },
    { id: "AL", name: "Albania", capital: "Tirana" },
    { id: "DZ", name: "Algeria", capital: "Algiers" },
    { id: "AD", name: "Andorra", capital: "Andorra la Vella" },
    { id: "AO", name: "Angola", capital: "Luanda" },
    { id: "AG", name: "Antigua and Barbuda", capital: "Saint John's" },
    { id: "AR", name: "Argentina", capital: "Buenos Aires" },
    { id: "AM", name: "Armenia", capital: "Yerevan" },
    { id: "AU", name: "Australia", capital: "Canberra" },
    { id: "AT", name: "Austria", capital: "Vienna" },
    { id: "AZ", name: "Azerbaijan", capital: "Baku" },
    { id: "BS", name: "Bahamas", capital: "Nassau" },
    { id: "BH", name: "Bahrain", capital: "Manama" },
    { id: "BD", name: "Bangladesh", capital: "Dhaka" },
    { id: "BB", name: "Barbados", capital: "Bridgetown" },
    { id: "BY", name: "Belarus", capital: "Minsk" },
    { id: "BE", name: "Belgium", capital: "Brussels" },
    { id: "BZ", name: "Belize", capital: "Belmopan" },
    { id: "BJ", name: "Benin", capital: "Porto-Novo" },
    { id: "BT", name: "Bhutan", capital: "Thimphu" },
    { id: "BO", name: "Bolivia", capital: "Sucre" },
    { id: "BA", name: "Bosnia and Herzegovina", capital: "Sarajevo" },
    { id: "BW", name: "Botswana", capital: "Gaborone" },
    { id: "BR", name: "Brazil", capital: "Brasília" },
    { id: "BN", name: "Brunei", capital: "Bandar Seri Begawan" },
    { id: "BG", name: "Bulgaria", capital: "Sofia" },
    { id: "BF", name: "Burkina Faso", capital: "Ouagadougou" },
    { id: "BI", name: "Burundi", capital: "Gitega" },
    { id: "KH", name: "Cambodia", capital: "Phnom Penh" },
    { id: "CM", name: "Cameroon", capital: "Yaoundé" },
    { id: "CA", name: "Canada", capital: "Ottawa" },
    { id: "CV", name: "Cape Verde", capital: "Praia" },
    { id: "CF", name: "Central African Republic", capital: "Bangui" },
    { id: "TD", name: "Chad", capital: "N'Djamena" },
    { id: "CL", name: "Chile", capital: "Santiago" },
    { id: "CN", name: "China", capital: "Beijing" },
    { id: "CO", name: "Colombia", capital: "Bogotá" },
    { id: "KM", name: "Comoros", capital: "Moroni" },
    { id: "CG", name: "Congo", capital: "Brazzaville" },
    { id: "CD", name: "Congo (Democratic Republic)", capital: "Kinshasa" },
    { id: "CR", name: "Costa Rica", capital: "San José" },
    { id: "HR", name: "Croatia", capital: "Zagreb" },
    { id: "CU", name: "Cuba", capital: "Havana" },
    { id: "CY", name: "Cyprus", capital: "Nicosia" },
    { id: "CZ", name: "Czech Republic", capital: "Prague" },
    { id: "DK", name: "Denmark", capital: "Copenhagen" },
    { id: "DJ", name: "Djibouti", capital: "Djibouti" },
    { id: "DM", name: "Dominica", capital: "Roseau" },
    { id: "DO", name: "Dominican Republic", capital: "Santo Domingo" },
    { id: "TL", name: "East Timor", capital: "Dili" },
    { id: "EC", name: "Ecuador", capital: "Quito" },
    { id: "EG", name: "Egypt", capital: "Cairo" },
    { id: "SV", name: "El Salvador", capital: "San Salvador" },
    { id: "GQ", name: "Equatorial Guinea", capital: "Malabo" },
    { id: "ER", name: "Eritrea", capital: "Asmara" },
    { id: "EE", name: "Estonia", capital: "Tallinn" },
    { id: "ET", name: "Ethiopia", capital: "Addis Ababa" },
    { id: "FJ", name: "Fiji", capital: "Suva" },
    { id: "FI", name: "Finland", capital: "Helsinki" },
    { id: "FR", name: "France", capital: "Paris" },
    { id: "GA", name: "Gabon", capital: "Libreville" },
	{ id: "GL", name: "Greenland", capital: "Nuuk" },
    { id: "GM", name: "Gambia", capital: "Banjul" },
    { id: "GE", name: "Georgia", capital: "Tbilisi" },
    { id: "DE", name: "Germany", capital: "Berlin" },
    { id: "GH", name: "Ghana", capital: "Accra" },
    { id: "GR", name: "Greece", capital: "Athens" },
    { id: "GD", name: "Grenada", capital: "St. George's" },
    { id: "GT", name: "Guatemala", capital: "Guatemala City" },
    { id: "GN", name: "Guinea", capital: "Conakry" },
    { id: "GW", name: "Guinea-Bissau", capital: "Bissau" },
    { id: "GY", name: "Guyana", capital: "Georgetown" },
    { id: "HT", name: "Haiti", capital: "Port-au-Prince" },
    { id: "HN", name: "Honduras", capital: "Tegucigalpa" },
    { id: "HU", name: "Hungary", capital: "Budapest" },
    { id: "IS", name: "Iceland", capital: "Reykjavik" },
    { id: "IN", name: "India", capital: "New Delhi" },
    { id: "ID", name: "Indonesia", capital: "Jakarta" },
    { id: "IR", name: "Iran", capital: "Tehran" },
    { id: "IQ", name: "Iraq", capital: "Baghdad" },
    { id: "IE", name: "Ireland", capital: "Dublin" },
    { id: "IL", name: "Israel", capital: "Jerusalem" },
    { id: "IT", name: "Italy", capital: "Rome" },
    { id: "CI", name: "Ivory Coast", capital: "Yamoussoukro" },
    { id: "JM", name: "Jamaica", capital: "Kingston" },
    { id: "JP", name: "Japan", capital: "Tokyo" },
    { id: "JO", name: "Jordan", capital: "Amman" },
    { id: "KZ", name: "Kazakhstan", capital: "Nur-Sultan" },
    { id: "KE", name: "Kenya", capital: "Nairobi" },
    { id: "KI", name: "Kiribati", capital: "Tarawa" },
    { id: "KR", name: "South Korea", capital: "Seoul" },
    { id: "XK", name: "Kosovo", capital: "Pristina" },
    { id: "KW", name: "Kuwait", capital: "Kuwait City" },
    { id: "KG", name: "Kyrgyzstan", capital: "Bishkek" },
    { id: "LA", name: "Laos", capital: "Vientiane" },
    { id: "LV", name: "Latvia", capital: "Riga" },
    { id: "LS", name: "Lesotho", capital: "Maseru" },
    { id: "LR", name: "Liberia", capital: "Monrovia" },
    { id: "LY", name: "Libya", capital: "Tripoli" },
    { id: "LI", name: "Liechtenstein", capital: "Vaduz" },
    { id: "LT", name: "Lithuania", capital: "Vilnius" },
    { id: "LU", name: "Luxembourg", capital: "Luxembourg City" },
    { id: "MG", name: "Madagascar", capital: "Antananarivo" },
    { id: "MW", name: "Malawi", capital: "Lilongwe" },
    { id: "MY", name: "Malaysia", capital: "Kuala Lumpur" },
    { id: "MV", name: "Maldives", capital: "Malé" },
    { id: "ML", name: "Mali", capital: "Bamako" },
    { id: "MT", name: "Malta", capital: "Valletta" },
    { id: "MH", name: "Marshall Islands", capital: "Majuro" },
    { id: "MR", name: "Mauritania", capital: "Nouakchott" },
    { id: "MU", name: "Mauritius", capital: "Port Louis" },
    { id: "MX", name: "Mexico", capital: "Mexico City" },
    { id: "FM", name: "Micronesia", capital: "Palikir" },
    { id: "MD", name: "Moldova", capital: "Chisinau" },
    { id: "MC", name: "Monaco", capital: "Monaco" },
    { id: "MN", name: "Mongolia", capital: "Ulaanbaatar" },
    { id: "ME", name: "Montenegro", capital: "Podgorica" },
    { id: "MA", name: "Morocco", capital: "Rabat" },
    { id: "MZ", name: "Mozambique", capital: "Maputo" },
    { id: "MM", name: "Myanmar", capital: "Naypyidaw" },
    { id: "NA", name: "Namibia", capital: "Windhoek" },
    { id: "NR", name: "Nauru", capital: "Yaren" },
    { id: "NP", name: "Nepal", capital: "Kathmandu" },
    { id: "NL", name: "Netherlands", capital: "Amsterdam" },
    { id: "NZ", name: "New Zealand", capital: "Wellington" },
    { id: "NI", name: "Nicaragua", capital: "Managua" },
    { id: "NE", name: "Niger", capital: "Niamey" },
    { id: "NG", name: "Nigeria", capital: "Abuja" },
    { id: "MK", name: "North Macedonia", capital: "Skopje" },
    { id: "NO", name: "Norway", capital: "Oslo" },
    { id: "OM", name: "Oman", capital: "Muscat" },
    { id: "PK", name: "Pakistan", capital: "Islamabad" },
    { id: "PW", name: "Palau", capital: "Ngerulmud" },
    { id: "PA", name: "Panama", capital: "Panama City" },
    { id: "PG", name: "Papua New Guinea", capital: "Port Moresby" },
    { id: "PY", name: "Paraguay", capital: "Asunción" },
    { id: "PE", name: "Peru", capital: "Lima" },
    { id: "PH", name: "Philippines", capital: "Manila" },
    { id: "PL", name: "Poland", capital: "Warsaw" },
    { id: "PT", name: "Portugal", capital: "Lisbon" },
    { id: "QA", name: "Qatar", capital: "Doha" },
    { id: "RO", name: "Romania", capital: "Bucharest" },
    { id: "RU", name: "Russia", capital: "Moscow" },
    { id: "RW", name: "Rwanda", capital: "Kigali" },
    { id: "KN", name: "Saint Kitts and Nevis", capital: "Basseterre" },
    { id: "LC", name: "Saint Lucia", capital: "Castries" },
    { id: "VC", name: "Saint Vincent and the Grenadines", capital: "Kingstown" },
    { id: "WS", name: "Samoa", capital: "Apia" },
    { id: "SM", name: "San Marino", capital: "San Marino" },
    { id: "ST", name: "Sao Tome and Principe", capital: "São Tomé" },
    { id: "SA", name: "Saudi Arabia", capital: "Riyadh" },
    { id: "SN", name: "Senegal", capital: "Dakar" },
    { id: "RS", name: "Serbia", capital: "Belgrade" },
    { id: "SC", name: "Seychelles", capital: "Victoria" },
	{ id: "SJ", name: "Spitzenbergen", capital: "Longyearbyen" },
    { id: "SL", name: "Sierra Leone", capital: "Freetown" },
    { id: "SG", name: "Singapore", capital: "Singapore" },
    { id: "SK", name: "Slovakia", capital: "Bratislava" },
    { id: "SI", name: "Slovenia", capital: "Ljubljana" },
    { id: "SB", name: "Solomon Islands", capital: "Honiara" },
    { id: "SO", name: "Somalia", capital: "Mogadishu" },
    { id: "ZA", name: "South Africa", capital: "Pretoria" },
    { id: "SS", name: "South Sudan", capital: "Juba" },
    { id: "ES", name: "Spain", capital: "Madrid" },
    { id: "LK", name: "Sri Lanka", capital: "Colombo" },
    { id: "SD", name: "Sudan", capital: "Khartoum" },
    { id: "SR", name: "Suriname", capital: "Paramaribo" },
    { id: "SE", name: "Sweden", capital: "Stockholm" },
    { id: "CH", name: "Switzerland", capital: "Bern" },
    { id: "SY", name: "Syria", capital: "Damascus" },
    { id: "TW", name: "Taiwan", capital: "Taipei" },
    { id: "TJ", name: "Tajikistan", capital: "Dushanbe" },
    { id: "TZ", name: "Tanzania", capital: "Dodoma" },
    { id: "TH", name: "Thailand", capital: "Bangkok" },
    { id: "TG", name: "Togo", capital: "Lomé" },
    { id: "TO", name: "Tonga", capital: "Nuku'alofa" },
    { id: "TT", name: "Trinidad and Tobago", capital: "Port of Spain" },
    { id: "TN", name: "Tunisia", capital: "Tunis" },
    { id: "TR", name: "Turkey", capital: "Ankara" },
    { id: "TM", name: "Turkmenistan", capital: "Ashgabat" },
    { id: "TV", name: "Tuvalu", capital: "Funafuti" },
    { id: "UG", name: "Uganda", capital: "Kampala" },
    { id: "UA", name: "Ukraine", capital: "Kyiv" },
    { id: "AE", name: "United Arab Emirates", capital: "Abu Dhabi" },
    { id: "GB", name: "United Kingdom", capital: "London" },
    { id: "US", name: "United States", capital: "Washington, D.C." },
    { id: "UY", name: "Uruguay", capital: "Montevideo" },
    { id: "UZ", name: "Uzbekistan", capital: "Tashkent" },
    { id: "VU", name: "Vanuatu", capital: "Port Vila" },
    { id: "VA", name: "Vatican City", capital: "Vatican City" },
    { id: "VE", name: "Venezuela", capital: "Caracas" },
    { id: "VN", name: "Vietnam", capital: "Hanoi" },
    { id: "WF", name: "Wallis and Futuna", capital: "Mata-Utu" },
    { id: "EH", name: "Western Sahara", capital: "El Aaiún" },
    { id: "YE", name: "Yemen", capital: "Sana'a" },
    { id: "ZM", name: "Zambia", capital: "Lusaka" },
    { id: "ZW", name: "Zimbabwe", capital: "Harare" },
	{ id: "LB", name: "Lebanon", capital: "Beirut" },
	{ id: "SS", name: "South Sudan", capital: "Juba" },
	{ id: "SD", name: "Sudan", capital: "Khartoum" },
	{ id: "SY", name: "Syria", capital: "Damascus" },
	{ id: "PS", name: "Palestinian Terretories", capital: "Jerusalem" },
];

let selectedCountry = null;

document.addEventListener("DOMContentLoaded", () => {
    const questionElement = document.getElementById('question');
    const resultElement = document.getElementById('result');
    const choicesElement = document.getElementById('choices');

    countries.forEach(country => {
        const countryElement = document.getElementById(country.id);
        if (countryElement) {
            countryElement.classList.add('country');
            countryElement.addEventListener('click', () => {
                selectedCountry = country;
                questionElement.textContent = `Guess the capital of ${country.name}:`;
                resultElement.textContent = '';
                generateChoices();
            });
        }
    });
});

function generateChoices() {
    const choicesElement = document.getElementById('choices');
    choicesElement.innerHTML = '';

    const correctCapital = selectedCountry.capital;
    const capitals = countries.map(country => country.capital);
    const shuffledCapitals = shuffleArray(capitals);
    const choices = [correctCapital];

    for (let capital of shuffledCapitals) {
        if (choices.length < 4 && !choices.includes(capital)) {
            choices.push(capital);
        }
    }

    shuffleArray(choices).forEach(choice => {
        const button = document.createElement('button');
        button.className = 'choice';
        button.textContent = choice;
        button.onclick = () => checkAnswer(choice);
        choicesElement.appendChild(button);
    });
}

function checkAnswer(selectedChoice) {
    const resultElement = document.getElementById('result');

    if (selectedChoice === selectedCountry.capital) {
        resultElement.textContent = `Correct! ${selectedChoice} is the capital of ${selectedCountry.name}.`;
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = `Wrong! The correct capital of ${selectedCountry.name} is ${selectedCountry.capital}.`;
        resultElement.style.color = 'red';
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}