const countryMappings = {   
    "Andorra": ["Andorra"],
    "United Arab Emirates": ["Vereinigte Arabische Emirate"],
    "Afghanistan": ["Afghanistan"],
    "Anguilla": ["Anguilla"],
    "Albania": ["Albanien"],
    "Armenia": ["Armenien"],
    "Angola": ["Angola"],
    "Argentina": ["Argentinien"],
    "Austria": ["Österreich"],
    "Aruba": ["Aruba"],
    "Aland Islands": ["Ålandinseln"],
    "Azerbaijan": ["Aserbaidschan"],
    "Bosnia and Herzegovina": ["Bosnien und Herzegowina", "Bosnien Herzegowina", "Bosnia Herzegovina" ],
    "Bangladesh": ["Bangladesch"],
    "Belgium": ["Belgien"],
    "Burkina Faso": ["Burkina Faso"],
    "Bulgaria": ["Bulgarien"],
    "Burundi": ["Burundi"],
    "Benin": ["Benin"],
    "Brunei": ["Brunei"],
    "Bolivia": ["Bolivien"],
    "Bermuda": ["Bermuda"],
    "Brazil": ["Brasilien"],
    "Bhutan": ["Bhutan"],
    "Bouvet Island": ["Bouvetinsel"],
    "Botswana": ["Botsuana"],
    "Belarus": ["Belarus"],
    "Belize": ["Belize"],
    "Canada": ["Kanada"],
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
    "Curaçao": ["Curaçao"],
    "Christmas Island": ["Weihnachtsinsel"],
    "Czech Republic": ["Tschechische Republik", "Tschechien", "Chech Republic", ],
    "Germany": ["Deutschland"],
    "Djibouti": ["Dschibuti"],
    "Denmark": ["Dänemark"],
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
    "Falkland Islands": ["Falklandinseln"],
    "Faroe Islands": ["Färöer"],
    "France": ["Frankreich"],
    "Gabon": ["Gabun"],
    "United Kingdom": ["Vereinigtes Königreich", "UK", "Großbritannien"],
    "Georgia": ["Georgien"],
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
    "Italy": ["Italien"],
    "Jersey": ["Jersey"],
    "Jordan": ["Jordanien"],
    "Kenya": ["Kenia"],
    "Kyrgyzstan": ["Kirgisistan"],
    "Cambodia": ["Kambodscha"],
    "North Korea": ["Nordkorea", "Nord Korea"],
    "South Korea": ["Südkorea", "Süd Korea"],
    "Kosovo": ["Kosovo"],
    "Kuwait": ["Kuwait"],
    "Cayman Islands": ["Kaimaninseln"],
    "Kazakhstan": ["Kasachstan"],
    "Laos": ["Laos"],
    "Lebanon": ["Libanon"],
    "Liechtenstein": ["Liechtenstein"],
    "Liberia": ["Liberia"],
    "Lesotho": ["Lesotho"],
    "Lithuania": ["Litauen"],
    "Luxembourg": ["Luxemburg"],
    "Latvia": ["Lettland"],
    "Libya": ["Libyen"],
    "Morocco": ["Marokko"],
    "Monaco": ["Monaco"],
    "Moldova": ["Moldawien"],
    "Montenegro": ["Montenegro"],
    "Macedonia": ["Nordmazedonien", "Mazedonien", "Northmazedonia", "North Mazedonia", "Nord Mazedonien"],
    "Mali": ["Mali"],
    "Macau": ["Macau"],
    "Myanmar": ["Myanmar"],
    "Mongolia": ["Mongolei"],
    "Northern Mariana Islands": ["Nördliche Marianen"],
    "Martinique": ["Martinique"],
    "Mauritania": ["Mauretanien"],
    "Montserrat": ["Montserrat"],
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
    "Niue": ["Niue"],
    "Oman": ["Oman"],
    "Panama": ["Panama"],
    "Peru": ["Peru"],
    "French Polynesia": ["Französisch-Polynesien", "Französisch Polynesien"],
    "Papua New Guinea": ["Papua-Neuguinea", "Papua Neuguinea"],
    "Pakistan": ["Pakistan"],
    "Poland": ["Polen"],
    "Pitcairn Islands": ["Pitcairninseln"],
    "Puerto Rico": ["Puerto Rico"],
    "Palestinian": ["Palästinensische Gebiete", "Palästina", "Palestina"],
    "Portugal": ["Portugal"],
    "Paraguay": ["Paraguay"],
    "Qatar": ["Katar"],
    "Reunion": ["Réunion"],
    "Romania": ["Rumänien"],
    "Serbia": ["Serbien"],
    "Russia": ["Russland"],
    "Rwanda": ["Ruanda"],
    "Saudi Arabia": ["Saudi-Arabien", "Saudi Arabien"],
    "Sudan": ["Sudan"],
    "Sweden": ["Schweden"],
    "Slovenia": ["Slowenien"],
    "Svalbard and Jan Mayen (Spitzenbergen)": ["Spitzenbergen und Jan Mayen", "Spitzenbergen", "Svalbard"],
    "Slovakia": ["Slowakei"],
    "Sierra Leone": ["Sierra Leone"],
    "San Marino": ["San Marino"],
    "Senegal": ["Senegal"],
    "Somalia": ["Somalia"],
    "Suriname": ["Suriname"],
    "South Sudan": ["Südsudan"],
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
    "Turkey": ["Türkei"],
    "Tanzania": ["Tansania"],
    "Ukraine": ["Ukraine"],
    "Uganda": ["Uganda"],
    "United States": ["Vereinigte Staaten", "USA", "Vereinigte Staaten von Amerika", "US"],
    "Uruguay": ["Uruguay"],
    "Uzbekistan": ["Usbekistan"],
    "Vatican City": ["Vatikanstadt"],
    "Venezuela": ["Venezuela"],
    "British Virgin Islands": ["Britische Jungferninseln"],
    "US Virgin Islands": ["Amerikanische Jungferninseln"],
    "Vietnam": ["Vietnam"],
    "Wallis and Futuna": ["Wallis und Futuna"],
    "Yemen": ["Jemen"],
    "Mayotte": ["Mayotte"],
    "South Africa": ["Südafrika"],
    "Zambia": ["Sambia"],
    "Zimbabwe": ["Simbabwe"]
}
;
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
 "Albania", "Andorra", "Austria", "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria", "Croatia", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland", "Italy", "Kosovo", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Moldova", "Monaco", "Montenegro", "Netherlands", "Macedonia", "Norway", "Poland", "Portugal", "Romania", "Russia", "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Ukraine", "United Kingdom", "Vatican City", "Afghanistan", "Armenia", "Azerbaijan", "Bangladesh", "Bhutan", "Brunei", "Cambodia", "China", "Timor-Leste", "Georgia", "India", "Indonesia", "Iran", "Iraq", "Israel", "Jordan", "Kazakhstan", "Kuwait", "Kyrgyzstan", "Laos", "Lebanon", "Malaysia", "Mongolia", "Myanmar", "Nepal", "North Korea", "Oman", "Pakistan", "Qatar", "Saudi Arabia", "South Korea", "Syria", "Tajikistan", "Thailand", "Turkey", "Turkmenistan", "United Arab Emirates", "Uzbekistan", "Vietnam", "Yemen", "Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cameroon", "Central African Republic", "Chad", "Democratic Republic of the Congo", "Djibouti", "Egypt", "Equatorial Guinea", "Eritrea", "Eswatini", "Ethiopia", "Gabon", "Gambia", "Ghana", "Guinea", "Guinea-Bissau", "Ivory Coast", "Kenya", "Lesotho", "Liberia", "Libya", "Malawi", "Mali", "Mauritania", "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria", "Republic of the Congo", "Rwanda", "Senegal", "Sierra Leone", "Somalia", "South Africa", "South Sudan", "Sudan", "Tanzania", "Togo", "Tunisia", "Uganda", "Zambia", "Zimbabwe", "Belize", "Canada", "Costa Rica", "Dominican Republic", "El Salvador", "Guatemala", "Haiti", "Honduras", "Mexico", "Nicaragua", "Panama", "United States", "Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Ecuador", "Guyana", "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela", "Papua New Guinea",   
];

function createTables() {
    const continents = {
        africa: ["Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cameroon", "Central African Republic", "Chad", "Democratic Republic of the Congo", "Djibouti", "Egypt", "Equatorial Guinea", "Eritrea", "Eswatini", "Ethiopia", "Gabon", "Gambia", "Ghana", "Guinea", "Guinea-Bissau", "Ivory Coast", "Kenya", "Lesotho", "Liberia", "Libya", "Malawi", "Mali", "Mauritania", "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria", "Republic of the Congo", "Rwanda", "Senegal", "Sierra Leone", "Somalia", "South Africa", "South Sudan", "Sudan", "Tanzania", "Togo", "Tunisia", "Uganda", "Zambia", "Zimbabwe"],
        asia: ["Afghanistan", "Armenia", "Azerbaijan", "Bangladesh", "Bhutan", "Brunei", "Cambodia", "China",  "Timor-Leste", "Georgia", "India", "Indonesia", "Iran", "Iraq", "Israel", "Jordan", "Kazakhstan", "Kuwait", "Kyrgyzstan", "Laos", "Lebanon", "Malaysia", "Mongolia", "Myanmar", "Nepal", "North Korea", "Oman", "Pakistan", "Qatar", "Saudi Arabia", "South Korea", "Syria", "Tajikistan", "Thailand", "Turkey", "Turkmenistan", "United Arab Emirates", "Uzbekistan", "Vietnam", "Yemen"],
        europe: ["Albania", "Andorra", "Austria", "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria", "Croatia", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland", "Italy", "Kosovo", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Moldova", "Monaco", "Montenegro", "Netherlands", "Macedonia", "Norway", "Poland", "Portugal", "Romania", "Russia", "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Ukraine", "United Kingdom", "Vatican City"],
        northAmerica: [ "Belize", "Canada", "Costa Rica", "Dominican Republic", "El Salvador", "Guatemala", "Haiti", "Honduras", "Mexico", "Nicaragua", "Panama", "United States"],
        southAmerica: ["Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Ecuador", "Guyana", "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela"],
        oceania: ["Papua New Guinea"]
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
        
            // Check if the country is in the correctCountriesSet
            if (!correctCountriesSet.has(country)) {
                cell.classList.add('missed');
            } else {
                cell.classList.add('correct'); // Mark guessed countries as 'correct'
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
    
            // Check if the country is in the correctCountriesSet
            if (!correctCountriesSet.has(country)) {
                cell.classList.add('missed');
            } else {
                cell.classList.add('correct'); // Mark guessed countries as 'correct'
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
let timeRemaining = 90;

const countryInput = document.getElementById('countryInput');
const scoreBoard = document.getElementById('scoreBoard');
const timerElement = document.getElementById('timer');

countryInput.addEventListener('input', (e) => {
    checkCountry(e.target.value.trim());
});


// Add a mapping of countries to their neighboring countries
const neighboringCountries = {
    // Europa (41 Länder)
    "Albania": ["Montenegro", "Kosovo", "Macedonia", "Greece"],
    "Andorra": ["France", "Spain"],
    "Austria": ["Germany", "Czech Republic", "Slovakia", "Hungary", "Slovenia", "Italy", "Switzerland", "Liechtenstein"],
    "Belarus": ["Latvia", "Lithuania", "Poland", "Russia", "Ukraine"],
    "Belgium": ["France", "Luxembourg", "Germany", "Netherlands"],
    "Bosnia and Herzegovina": ["Croatia", "Serbia", "Montenegro"],
    "Bulgaria": ["Romania", "Serbia", "Macedonia", "Greece", "Turkey"],
    "Croatia": ["Slovenia", "Hungary", "Serbia", "Bosnia and Herzegovina", "Montenegro"],
    "Czech Republic": ["Germany", "Poland", "Slovakia", "Austria"],
    "Denmark": ["Germany"],
    "Estonia": ["Latvia", "Russia"],
    "Finland": ["Sweden", "Norway", "Russia"],
    "France": ["Belgium", "Luxembourg", "Germany", "Switzerland", "Italy", "Monaco", "Spain", "Andorra"],
    "Germany": ["Denmark", "Poland", "Czech Republic", "Austria", "Switzerland", "France", "Luxembourg", "Belgium", "Netherlands"],
    "Greece": ["Albania", "Macedonia", "Bulgaria", "Turkey"],
    "Hungary": ["Austria", "Slovakia", "Ukraine", "Romania", "Serbia", "Croatia", "Slovenia"],
    "Ireland": ["United Kingdom"],
    "Italy": ["France", "Switzerland", "Austria", "Slovenia", "San Marino", "Vatican City"],
    "Kosovo": ["Serbia", "Montenegro", "Albania", "Macedonia"],
    "Latvia": ["Estonia", "Lithuania", "Russia", "Belarus"],
    "Liechtenstein": ["Switzerland", "Austria"],
    "Lithuania": ["Latvia", "Belarus", "Poland", "Russia"],
    "Luxembourg": ["Belgium", "Germany", "France"],
    "Moldova": ["Romania", "Ukraine"],
    "Monaco": ["France"],
    "Montenegro": ["Croatia", "Bosnia and Herzegovina", "Serbia", "Kosovo", "Albania"],
    "Netherlands": ["Belgium", "Germany"],
    "Macedonia": ["Kosovo", "Serbia", "Bulgaria", "Greece", "Albania"],
    "Norway": ["Sweden", "Finland", "Russia"],
    "Poland": ["Germany", "Czech Republic", "Slovakia", "Ukraine", "Belarus", "Lithuania", "Russia"],
    "Portugal": ["Spain"],
    "Romania": ["Ukraine", "Moldova", "Bulgaria", "Serbia", "Hungary"],
    "Russia": ["Norway", "Finland", "Estonia", "Latvia", "Lithuania", "Poland", "Belarus", "Ukraine", "Georgia", "Azerbaijan", "Kazakhstan", "China", "Mongolia", "North Korea"],
    "San Marino": ["Italy"],
    "Serbia": ["Hungary", "Romania", "Bulgaria", "Macedonia", "Kosovo", "Montenegro", "Bosnia and Herzegovina", "Croatia"],
    "Slovakia": ["Czech Republic", "Poland", "Ukraine", "Hungary", "Austria"],
    "Slovenia": ["Italy", "Austria", "Hungary", "Croatia"],
    "Spain": ["Portugal", "France", "Andorra"],
    "Sweden": ["Norway", "Finland"],
    "Switzerland": ["Germany", "France", "Italy", "Austria", "Liechtenstein"],
    "Ukraine": ["Poland", "Slovakia", "Hungary", "Romania", "Moldova", "Belarus", "Russia"],
    "United Kingdom": ["Ireland"],
    "Vatican City": ["Italy"],
    
    // Asien (51 Länder)
    "Afghanistan": ["Pakistan", "Iran", "Turkmenistan", "Uzbekistan", "Tajikistan", "China"],
    "Armenia": ["Turkey", "Georgia", "Azerbaijan", "Iran"],
    "Azerbaijan": ["Russia", "Georgia", "Armenia", "Iran"],
    "Bangladesh": ["India", "Myanmar"],
    "Bhutan": ["India", "China"],
    "Brunei": ["Malaysia"],
    "Cambodia": ["Thailand", "Laos", "Vietnam"],
    "China": ["Mongolia", "Russia", "North Korea", "Vietnam", "Laos", "Myanmar", "India", "Bhutan", "Nepal", "Pakistan", "Tajikistan", "Kyrgyzstan", "Kazakhstan"],
    "Timor-Leste": ["Indonesia"],
    "Georgia": ["Russia", "Turkey", "Armenia", "Azerbaijan"],
    "India": ["Pakistan", "China", "Nepal", "Bhutan", "Bangladesh", "Myanmar"],
    "Indonesia": ["Papua New Guinea", "East Timor", "Malaysia"],
    "Iran": ["Iraq", "Turkey", "Armenia", "Azerbaijan", "Turkmenistan", "Afghanistan", "Pakistan"],
    "Iraq": ["Turkey", "Iran", "Kuwait", "Saudi Arabia", "Jordan", "Syria"],
    "Israel": ["Lebanon", "Syria", "Jordan", "Egypt"],
    "Jordan": ["Syria", "Iraq", "Saudi Arabia", "Israel"],
    "Kazakhstan": ["Russia", "China", "Kyrgyzstan", "Uzbekistan", "Turkmenistan"],
    "Kuwait": ["Iraq", "Saudi Arabia"],
    "Kyrgyzstan": ["Kazakhstan", "Uzbekistan", "Tajikistan", "China"],
    "Laos": ["Myanmar", "China", "Vietnam", "Cambodia", "Thailand"],
    "Lebanon": ["Syria", "Israel"],
    "Malaysia": ["Thailand", "Indonesia", "Brunei"],
    "Mongolia": ["Russia", "China"],
    "Myanmar": ["Bangladesh", "India", "China", "Laos", "Thailand"],
    "Nepal": ["China", "India"],
    "North Korea": ["China", "South Korea", "Russia"],
    "Oman": ["Saudi Arabia", "United Arab Emirates", "Yemen"],
    "Pakistan": ["India", "Afghanistan", "Iran", "China"],
    "Qatar": ["Saudi Arabia"],
    "Saudi Arabia": ["Jordan", "Iraq", "Kuwait", "Qatar", "United Arab Emirates", "Oman", "Yemen"],
    "South Korea": ["North Korea"],
    "Syria": ["Turkey", "Iraq", "Jordan", "Israel", "Lebanon"],
    "Tajikistan": ["Afghanistan", "Uzbekistan", "Kyrgyzstan", "China"],
    "Thailand": ["Myanmar", "Laos", "Cambodia", "Malaysia"],
    "Turkey": ["Greece", "Bulgaria", "Georgia", "Armenia", "Iran", "Iraq", "Syria", "Azerbaijan"],
    "Turkmenistan": ["Kazakhstan", "Uzbekistan", "Afghanistan", "Iran"],
    "United Arab Emirates": ["Oman", "Saudi Arabia"],
    "Uzbekistan": ["Kazakhstan", "Kyrgyzstan", "Tajikistan", "Turkmenistan", "Afghanistan"],
    "Vietnam": ["China", "Laos", "Cambodia"],
    "Yemen": ["Saudi Arabia", "Oman"],
    
    // Afrika (54 Länder)
    "Algeria": ["Tunisia", "Libya", "Niger", "Mali", "Mauritania", "Western Sahara", "Morocco"],
    "Angola": ["Namibia", "Zambia", "Democratic Republic of the Congo"],
    "Benin": ["Togo", "Nigeria", "Burkina Faso", "Niger"],
    "Botswana": ["South Africa", "Namibia", "Zimbabwe"],
    "Burkina Faso": ["Mali", "Niger", "Benin", "Togo", "Ghana", "Ivory Coast"],
    "Burundi": ["Rwanda", "Tanzania", "Democratic Republic of the Congo"],
    "Cameroon": ["Nigeria", "Chad", "Central African Republic", "Equatorial Guinea", "Gabon", "Republic of the Congo"],
    "Central African Republic": ["Chad", "Sudan", "South Sudan", "Democratic Republic of the Congo", "Republic of the Congo", "Cameroon"],
    "Chad": ["Libya", "Sudan", "Central African Republic", "Cameroon", "Nigeria", "Niger"],
    "Democratic Republic of the Congo": ["Republic of the Congo", "Central African Republic", "South Sudan", "Uganda", "Rwanda", "Burundi", "Tanzania", "Zambia", "Angola"],
    "Djibouti": ["Eritrea", "Ethiopia", "Somalia"],
    "Egypt": ["Libya", "Sudan", "Israel"],
    "Equatorial Guinea": ["Cameroon", "Gabon"],
    "Eritrea": ["Sudan", "Ethiopia", "Djibouti"],
    "Eswatini": ["South Africa", "Mozambique"],
    "Ethiopia": ["Eritrea", "Djibouti", "Somalia", "Kenya", "South Sudan", "Sudan"],
    "Gabon": ["Equatorial Guinea", "Cameroon", "Republic of the Congo"],
    "Gambia": ["Senegal"],
    "Ghana": ["Ivory Coast", "Burkina Faso", "Togo"],
    "Guinea": ["Guinea-Bissau", "Senegal", "Mali", "Ivory Coast", "Liberia", "Sierra Leone"],
    "Guinea-Bissau": ["Senegal", "Guinea"],
    "Ivory Coast": ["Liberia", "Guinea", "Mali", "Burkina Faso", "Ghana"],
    "Kenya": ["Somalia", "Ethiopia", "South Sudan", "Uganda", "Tanzania"],
    "Lesotho": ["South Africa"],
    "Liberia": ["Sierra Leone", "Guinea", "Ivory Coast"],
    "Libya": ["Egypt", "Sudan", "Chad", "Niger", "Algeria", "Tunisia"],
    "Malawi": ["Tanzania", "Mozambique", "Zambia"],
    "Mali": ["Algeria", "Niger", "Burkina Faso", "Ivory Coast", "Guinea", "Senegal", "Mauritania"],
    "Mauritania": ["Western Sahara", "Algeria", "Mali", "Senegal"],
    "Morocco": ["Algeria", "Western Sahara"],
    "Mozambique": ["Tanzania", "Malawi", "Zambia", "Zimbabwe", "South Africa", "Eswatini"],
    "Namibia": ["Angola", "Zambia", "Botswana", "South Africa"],
    "Niger": ["Algeria", "Libya", "Chad", "Nigeria", "Benin", "Burkina Faso", "Mali"],
    "Nigeria": ["Benin", "Niger", "Chad", "Cameroon"],
    "Republic of the Congo": ["Gabon", "Cameroon", "Central African Republic", "Democratic Republic of the Congo"],
    "Rwanda": ["Uganda", "Tanzania", "Burundi", "Democratic Republic of the Congo"],
    "Senegal": ["Mauritania", "Mali", "Guinea", "Guinea-Bissau", "Gambia"],
    "Sierra Leone": ["Guinea", "Liberia"],
    "Somalia": ["Djibouti", "Ethiopia", "Kenya"],
    "South Africa": ["Namibia", "Botswana", "Zimbabwe", "Mozambique", "Eswatini", "Lesotho"],
    "South Sudan": ["Sudan", "Ethiopia", "Kenya", "Uganda", "Democratic Republic of the Congo", "Central African Republic"],
    "Sudan": ["Egypt", "Libya", "Chad", "Central African Republic", "South Sudan", "Ethiopia", "Eritrea"],
    "Tanzania": ["Kenya", "Uganda", "Rwanda", "Burundi", "Democratic Republic of the Congo", "Zambia", "Malawi", "Mozambique"],
    "Togo": ["Ghana", "Benin", "Burkina Faso"],
    "Tunisia": ["Algeria", "Libya"],
    "Uganda": ["South Sudan", "Kenya", "Tanzania", "Rwanda", "Democratic Republic of the Congo"],
    "Zambia": ["Democratic Republic of the Congo", "Tanzania", "Malawi", "Mozambique", "Zimbabwe", "Botswana", "Namibia", "Angola"],
    "Zimbabwe": ["Zambia", "Mozambique", "South Africa", "Botswana"],
    
    // Amerika (35 Länder)
    "Belize": ["Mexico", "Guatemala"],
    "Canada": ["United States"],
    "Costa Rica": ["Nicaragua", "Panama"],
    "Dominican Republic": ["Haiti"],
    "El Salvador": ["Guatemala", "Honduras"],
    "Guatemala": ["Mexico", "Belize", "Honduras", "El Salvador"],
    "Haiti": ["Dominican Republic"],
    "Honduras": ["Guatemala", "El Salvador", "Nicaragua"],
    "Mexico": ["United States", "Guatemala", "Belize"],
    "Nicaragua": ["Honduras", "Costa Rica"],
    "Panama": ["Costa Rica", "Colombia"],
    "United States": ["Canada", "Mexico"],
    "Argentina": ["Chile", "Bolivia", "Paraguay", "Brazil", "Uruguay"],
    "Bolivia": ["Brazil", "Paraguay", "Argentina", "Chile", "Peru"],
    "Brazil": ["Uruguay", "Argentina", "Paraguay", "Bolivia", "Peru", "Colombia", "Venezuela", "Guyana", "Suriname"],
    "Chile": ["Peru", "Bolivia", "Argentina"],
    "Colombia": ["Panama", "Venezuela", "Brazil", "Peru", "Ecuador"],
    "Ecuador": ["Colombia", "Peru"],
    "Guyana": ["Venezuela", "Brazil", "Suriname"],
    "Paraguay": ["Argentina", "Brazil", "Bolivia"],
    "Peru": ["Ecuador", "Colombia", "Brazil", "Bolivia", "Chile"],
    "Suriname": ["Guyana", "Brazil"],
    "Uruguay": ["Brazil", "Argentina"],
    "Venezuela": ["Colombia", "Brazil", "Guyana"],
    
    // Ozeanien (14 Länder)
    "Papua New Guinea": ["Indonesia"],

};

const enteredCountries = new Set();
const correctCountriesSet = new Set();
const neighboringCountriesSet = new Set();

let easyMode = false;

document.getElementById('easy-btn').addEventListener('click', (e) => {
    easyMode = !easyMode;
    e.target.textContent = easyMode ? 'Normal Mode' : 'Easy Mode';
});

function checkCountry(countryName) {
    // Normalize the entered country name.
    let normalizedCountryName = normalizeCountryName(countryName.toLowerCase());
    
    // Check if the input is "more time"
    if (normalizedCountryName === "more time") {
        timeRemaining += 10;
        countryInput.value = '';
        countryInput.focus();
        return;
    }
    
    // If this country has already been explicitly entered, do nothing.
    if (enteredCountries.has(normalizedCountryName)) {
        return;
    }
    
    // Determine the original country name from the master list.
    // This assumes that `countries` is an array of the full country names.
    const originalCountryName = countries.find(c => normalizeCountryName(c.toLowerCase()) === normalizedCountryName);
    if (!originalCountryName) {
        // Country not recognized; you might want to handle this case.
        return;
    }
    
    // Add to enteredCountries to prevent double processing.
    enteredCountries.add(normalizedCountryName);
    
    // If this country was auto-marked earlier (i.e. is in neighboringCountriesSet),
    // then don't add a point for the explicit entry.
    let isExplicitScore = true;
    if (neighboringCountriesSet.has(normalizedCountryName)) {
        isExplicitScore = false;
    } else {
        // Mark the explicit country as correct and increment score.
        correctCountriesSet.add(originalCountryName);
        score++;
        document.querySelectorAll(`[title="${originalCountryName}"]`).forEach(path => {
            path.classList.add('correct');
        });
        
        // Add 30 seconds to the timer if easy mode is enabled
        if (easyMode) {
            timeRemaining += 5;
        }
    }
    
    // Process the neighbors for this country.
    const neighbors = neighboringCountries[originalCountryName] || [];
    neighbors.forEach(neighbor => {
        const normalizedNeighbor = normalizeCountryName(neighbor.toLowerCase());
        // Only add if this neighbor hasn't been marked as correct yet.
        if (!correctCountriesSet.has(neighbor)) {
            correctCountriesSet.add(neighbor);
            neighboringCountriesSet.add(normalizedNeighbor);
            score++;  // Score for newly marked neighbor.
            document.querySelectorAll(`[title="${neighbor}"]`).forEach(path => {
                path.classList.add('correct');
            });
        }
    });
    
    // Update score display.
    scoreBoard.textContent = `Score: ${score} / 156`;
    countryInput.value = '';
    countryInput.focus();
}


document.addEventListener('DOMContentLoaded', () => {
    let countdownInterval;
    let pauseCount = 0;
    const maxPauses = 2;
    let isPaused = false;

    function endGame() {
        countries.forEach(country => {
            const normalizedCountryName = normalizeCountryName(country);
    
            // Check if the country is in the correctCountriesSet
            if (correctCountriesSet.has(country)) {
                // Mark guessed countries as 'correct'
                document.querySelectorAll(`[title="${country}"]`).forEach(element => {
                    element.classList.add('correct');
                });
            } else {
                // Mark unguessed countries as 'not-guessed'
                document.querySelectorAll(`[title="${country}"]`).forEach(element => {
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


