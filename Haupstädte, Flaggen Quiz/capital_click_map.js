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
    "porto novo": "Benin",
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
    "port au prince": "Haiti",
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
    "podgorcia": "Montenegro",
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
    "sanaa": "Yemen",
    "lusaka": "Zambia",
    "harare": "Zimbabwe"
  };

let currentQuestion = null;
let timeRemaining = 15 * 60;
const timerElement = document.getElementById('timer');
let tries = 0;
let score = 0;
const scoreBoard = document.getElementById('scoreBoard');
let highlightActive = false;
let capitalList = Object.keys(capitals);  // Store all capitals in an array
let askedCapitals = [];  // Track asked capitals
let skippedCapitals = [];  // Track skipped capitals

// Function to shuffle the capital list (Fisher-Yates shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}
function checkAllCapitalsGuessed() {
    return askedCapitals.length === capitalList.length;
}
function askQuestion() {
    if (askedCapitals.length === capitalList.length) {
        // If all capitals have been asked and answered, check if any were skipped
        if (skippedCapitals.length > 0) {
            // If there are skipped capitals, move them back to the end of the list to be asked again
            capitalList = skippedCapitals.slice(); // Copy skipped capitals
            skippedCapitals = []; // Reset skipped capitals list
            askedCapitals = []; // Reset the asked list
            shuffleArray(capitalList); // Shuffle remaining skipped capitals
        } else {
            console.log("All capitals have been asked.");
            return;
        }
    }

    // Select a random capital that hasn't been asked yet
    let randomCapital;
    do {
        randomCapital = capitalList[Math.floor(Math.random() * capitalList.length)];
    } while (askedCapitals.includes(randomCapital)); // Keep generating until a new capital is found

    // Mark the selected capital as asked
    askedCapitals.push(randomCapital);

    currentQuestion = randomCapital;  // Set the current question to the selected capital
    const questionElement = document.getElementById('question');
    questionElement.textContent = `Click on ${currentQuestion.charAt(0).toUpperCase() + currentQuestion.slice(1)}`;
    tries = 0;
    highlightActive = false;
}
  
  function showTooltip(target, text) {
      const tooltip = document.createElement('div');
      tooltip.className = 'tooltip';
      tooltip.textContent = text;
      document.body.appendChild(tooltip);
      
      const rect = target.getBoundingClientRect();
      tooltip.style.position = 'absolute';
      // Position the tooltip a little bit above the circle tag.
      tooltip.style.top = (rect.top - 40) + 'px';
      tooltip.style.left = rect.left + 'px';
      tooltip.style.backgroundColor = 'black';
      tooltip.style.color = 'white';
      tooltip.style.padding = '5px';
      tooltip.style.borderRadius = '3px';
      tooltip.style.zIndex = '1000';
      
      setTimeout(() => {
          tooltip.remove();
      }, 1000);
  }

  function pulseCircle(currentQuestion) {
    // Find the hover-ring circle using the correct title format
    const hoverRing = document.querySelector(`circle.hover-ring[title="${currentQuestion}-hover-ring"]`);
    
    if (!hoverRing) {
        console.log(`Hover-ring not found for ${currentQuestion}`); // Debug log if hover-ring is not found
        return; // Exit if no hover-ring found
    }

    console.log(`Found hover-ring for ${currentQuestion}`); // Debug log when hover-ring is found

    // Make sure the hover-ring is highlighted before starting the animation
    hoverRing.classList.add('highlight');

    let growing = true;
    let radius = parseFloat(hoverRing.getAttribute('r'));

    function animate() {
        // Stop animation if highlight is removed
        if (!hoverRing.classList.contains('highlight')) return;

        // Pulsing animation: grow and shrink the radius
        if (growing) {
            radius += 2; // Increase radius
            if (radius >= 20) growing = false;
        } else {
            radius -= 2; // Decrease radius
            if (radius <= 12) growing = true;
        }

        hoverRing.setAttribute('r', radius);
        setTimeout(animate, 300); // Repeat animation every 300ms
    }

    animate();
}


function handleCapitalClick(event) {
    const clickedCapital = event.target.getAttribute('title');
    if (!clickedCapital) return;
    
    // Always show tooltip for every click.
    showTooltip(event.target, clickedCapital);
    
    // If we're in highlight mode, only allow clicking on the correct (highlighted) capital.
    if (highlightActive) {
        if (clickedCapital.toLowerCase() === currentQuestion) {
            // Remove highlight from both the main circle and its hover-ring
            event.target.classList.remove('highlight');
            const hoverRing = document.querySelector(`circle.hover-ring[title="${currentQuestion}-hover-ring"]`);
            if (hoverRing) {
                hoverRing.classList.remove('highlight');
            }
            event.target.classList.add('wrong'); // Mark as wrong since the user failed to guess in time.
            highlightActive = false;
            setTimeout(() => {
                askQuestion();
                score++;
                scoreBoard.textContent = `Score: ${score} / 196`;
            }, 500);
        }
        return;
    }
    
    // If not in highlight mode:
    if (clickedCapital.toLowerCase() !== currentQuestion) {
        tries++;
        if (tries === 3) {
            // After three wrong tries, highlight the correct capital and start pulsing animation.
            highlightActive = true;
            const correctElement = document.querySelector(`circle[title="${currentQuestion}"]`);
            if (correctElement) {
                correctElement.classList.add('highlight'); // Add highlight to main circle
            }
            // Also add highlight to the hover-ring element
            const hoverRing = document.querySelector(`circle.hover-ring[title="${currentQuestion}-hover-ring"]`);
            if (hoverRing) {
                hoverRing.classList.add('highlight');
            }
            pulseCircle(currentQuestion); // Start pulsing animation on the correct hover-ring
        }
        return;
    } else {
        // Correct capital clicked (before highlight mode is active).
        if (tries === 0) {
            event.target.classList.add('correct');
        } else if (tries === 1) {
            event.target.classList.add('wrong-first');
        } else if (tries === 2) {
            event.target.classList.add('wrong-second');
        }
        askQuestion();
        score++;
        scoreBoard.textContent = `Score: ${score} / 196`;
        // Check if all capitals have been guessed correctly after the click
        if (askedCapitals.length === capitalList.length && checkAllCapitalsGuessed()) {
            showCongratulations();
        } else {
            askQuestion();
        }
    }
    
}
function showCongratulations() {
    const messageElement = document.getElementById('message');
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
        console.log('Vibration triggered');
        navigator.vibrate(200);
    }
    const giveUpButton = document.getElementById('giveUpButton');
    giveUpButton.textContent = 'Restart';
    giveUpButton.onclick = () => location.reload();
    messageElement.style.display = 'block';
}
  
  function attachCircleListeners() {
      const circles = document.querySelectorAll('circle[title]');
      circles.forEach(circle => {
          circle.addEventListener('click', handleCapitalClick);
      });
  }
  function giveUp() {
    clearInterval(countdownInterval);
    const messageElement = document.getElementById('message');
    messageElement.textContent = `You gave up! You named ${score} countries.`;
    messageElement.style.display = 'block';
    document.getElementById('giveUpButton').style.display = 'none';
    document.getElementById('restartButton').style.display = 'block';
    document.getElementById('map-container').style.display = 'block';
    countryInput.disabled = true; // Disable the input field
    showTables();
    enableCountryTooltip();
    endGame(); // Ensure endGame is called here
}

function restartGame() {
    location.reload();
}
document.getElementById('giveUpButton').addEventListener('click', giveUp);
document.getElementById('restartButton').addEventListener('click', restartGame);
document.getElementById('skip').addEventListener('click', function() {
    console.log("Skip button clicked. Skipping current question.");
    askQuestion(); // This function should already be defined in your code
  });

  
  document.addEventListener('DOMContentLoaded', () => {
    function startCountdown() {
        countdownInterval = setInterval(() => {
            if (timeRemaining <= 0 || checkAllCapitalsGuessed()) {
                clearInterval(countdownInterval);
                const messageElement = document.getElementById('message');
                const giveUpButton = document.getElementById('giveUpButton');

                if (checkAllCapitalsGuessed()) {
                    createConfetti();
                    messageElement.textContent = `Congratulations! 👏 You found all capitals. 🎉`;
                    messageElement.style.color = 'green';
                    pauseButton.style.display = 'none';
                    showTables();
                    enableCountryTooltip();
                    messageElement.classList.add('congrats-animation');
                    setTimeout(() => {
                        messageElement.classList.remove('congrats-animation');
                    }, 1500);
                    if (navigator.vibrate) {
                        console.log('Vibration triggered');
                        navigator.vibrate(200);
                    }
                    giveUpButton.textContent = 'Restart';
                    giveUpButton.onclick = () => location.reload();
                } else {
                    messageElement.textContent = `Time is up! You named ${score} capitals.`;
                    giveUpButton.textContent = 'Restart';
                    giveUpButton.onclick = () => location.reload();
                    pauseButton.style.display = 'none';
                    enableCountryTooltip();
                }

                messageElement.style.display = 'block';
                countryInput.disabled = true;
                endGame();
                showTables();
            } else {
                timeRemaining--; // Decrease time
                timerElement.textContent = formatTime(timeRemaining); // Update timer display
            }
        }, 1000);
    }

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
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
    attachCircleListeners();
    askQuestion();
    startCountdown();  // Start the countdown when everything is ready
});