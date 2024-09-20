const apiUrl = 'https://restcountries.com/v3.1/all';

let countriesData = [];
let score = 0;
let highscore = localStorage.getItem('highscore') || 0;
document.getElementById('highscore').innerText = highscore;

const map = L.map('map').setView([20, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

let currentHighlight = null;
const hintButton = document.getElementById('show-hint');

// Initially hide the map
map.getContainer().style.display = 'none';

// Fetch country data from the API
async function fetchCountriesData() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    countriesData = data.map(country => ({
      name: country.name.common,
      capital: country.capital ? country.capital[0] : 'N/A',
      latlng: country.latlng,
      borders: country.borders || [],
      region: country.region,
      subregion: country.subregion,
      flag: country.flags.png // Adding flag URL
    }));
    askQuestion(); // Start the first question after data is fetched
  } catch (error) {
    console.error('Error fetching country data:', error);
  }
}

function getRandomCountries(continent) {
  if (continent === 'all') {
    return countriesData;
  } else if (continent === 'North America') {
    return countriesData.filter(country => country.subregion === 'North America');
  } else if (continent === 'South America') {
    return countriesData.filter(country => country.subregion === 'South America');
  } else {
    return countriesData.filter(country => country.region === continent);
  }
}

function askQuestion() {
  const continent = document.getElementById('continent').value;
  const mode = document.getElementById('mode').value;

  const countries = getRandomCountries(continent);
  const correctCountry = countries[Math.floor(Math.random() * countries.length)];

  // Set flag for the correct country, only if the mode is "Find Capital by Country"
  const flagImg = document.getElementById('flag');
  if (mode === 'countryToCapital') {
    flagImg.src = correctCountry.flag;
    flagImg.style.display = 'block';  // Show flag
  } else {
    flagImg.style.display = 'none';   // Hide flag
  }

  let options = [...countries].sort(() => 0.5 - Math.random()).slice(0, 3);
  options.push(correctCountry);
  options = options.sort(() => 0.5 - Math.random());

  if (mode === 'capitalToCountry') {
    document.getElementById('question-text').innerText = `Which country has the capital ${correctCountry.capital}?`;
  } else {
    document.getElementById('question-text').innerText = `What is the capital of ${correctCountry.name}?`;
  }

  options.forEach((option, index) => {
    const button = document.getElementById(`option${index + 1}`);
    button.innerText = mode === 'capitalToCountry' ? option.name : option.capital;
    button.onclick = () => checkAnswer(option, correctCountry);
  });

  // Reset feedback message and hide map on next question
  document.getElementById('feedback').innerText = '';
  map.getContainer().style.display = 'none';

  // Highlight country border
  highlightCountry(correctCountry);

  // Disable the hint button until a new question is shown
  hintButton.disabled = false;
}

function highlightCountry(country) {
  if (currentHighlight) {
    map.removeLayer(currentHighlight);
  }

  currentHighlight = L.circle([country.latlng[0], country.latlng[1]], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 50000
  }).addTo(map);

  map.setView([country.latlng[0], country.latlng[1]], 4);
}
// Select all buttons with the class "quiz-link"
const buttons = document.querySelectorAll(".option-button");

buttons.forEach(button => {
  // Handle touchstart
  button.addEventListener("touchstart", () => {
    button.classList.add("active");  // Add the active class (button pressed down)
    setTimeout(() => {
      button.classList.remove("active");  // Automatically remove the class after a short delay
    }, 100);  // Adjust this time as needed
  });

  // Handle mousedown (for desktops)
  button.addEventListener("mousedown", () => {
    button.classList.add("active");  // Add the active class (button pressed down)
    setTimeout(() => {
      button.classList.remove("active");  // Automatically remove the class after a short delay
    }, 100);  // Adjust this time as needed
  });
});


function triggerWiggleAndGlowAnimation() {
    // Select all elements with the class 'highscore'
    const highscoreElements = document.querySelectorAll('.highscore');
    
    highscoreElements.forEach(element => {
        // Remove the animation class if it's already there to allow retriggering the animation
        element.classList.remove('animate');
        
        // Use a timeout to ensure the class is removed before adding it back
        setTimeout(() => {
            element.classList.add('animate');
        }, 10);
    });
}


function createConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548'];

    const pieces = [];
    const totalPieces = 300; // Number of confetti pieces

    for (let i = 0; i < totalPieces; i++) {
        pieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            width: Math.random() * 20,
            height: Math.random() * 20,
            color: colors[Math.floor(Math.random() * colors.length)],
            speedY: Math.random() * 5 + 2,
            speedX: Math.random() * 2 - 1,
            rotation: Math.random() * 360,
            rotationSpeed: Math.random() * 0.1 - 0.05,
            opacity: 1  // Full opacity at the start
        });
    }

    const fallingDuration = 3000; // 3 seconds
    const fadeDuration = 2000; // 2 seconds for fading out
    const startTime = Date.now();

    function animateConfetti() {
        const elapsedTime = Date.now() - startTime;

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Calculate opacity based on elapsed time
        let opacity = 1;
        if (elapsedTime > fallingDuration) {
            // Calculate fade-out opacity
            const fadeElapsed = elapsedTime - fallingDuration;
            opacity = Math.max(0, 1 - fadeElapsed / fadeDuration);
        }

        // Draw and update confetti pieces
        pieces.forEach(piece => {
            ctx.save();
            ctx.translate(piece.x, piece.y);
            ctx.rotate(piece.rotation * Math.PI / 180);
            ctx.fillStyle = `rgba(${hexToRgb(piece.color)}, ${piece.opacity * opacity})`;
            ctx.fillRect(-piece.width / 2, -piece.height / 2, piece.width, piece.height);
            ctx.restore();

            piece.x += piece.speedX;
            piece.y += piece.speedY;
            piece.rotation += piece.rotationSpeed;

            // Reset pieces that fall off the canvas
            if (piece.y > canvas.height) {
                piece.y = -20;
                piece.x = Math.random() * canvas.width;
                piece.speedY = Math.random() * 5 + 2;
            }
        });

        // Stop animation if the fade-out duration has passed
        if (elapsedTime < fallingDuration + fadeDuration) {
            requestAnimationFrame(animateConfetti);
        }
    }

    // Utility function to convert hex color to RGB format
    function hexToRgb(hex) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `${r},${g},${b}`;
    }

    animateConfetti();
}
function checkAnswer(selectedOption, correctCountry) {
  const mode = document.getElementById('mode').value;
  const isCorrect = (mode === 'capitalToCountry' && selectedOption.name === correctCountry.name) ||
                    (mode === 'countryToCapital' && selectedOption.capital === correctCountry.capital);

  const feedbackElement = document.getElementById('feedback');

  if (isCorrect) {
    feedbackElement.innerText = "🎉 Correct! 🎉";
    feedbackElement.className = 'feedback-correct'; // Add correct class
    score++;
    if (score > highscore) {
      highscore = score;
      localStorage.setItem('highscore', highscore);
      createConfetti();
    }
  } else {
    feedbackElement.innerHTML = ` Wrong! 😔 The correct answer is: ${mode === 'capitalToCountry' ? correctCountry.name : correctCountry.capital}`;
    feedbackElement.className = 'feedback-wrong'; // Add wrong class
    score = 0;
  }

  document.getElementById('score').innerText = score;
  document.getElementById('highscore').innerText = highscore;

  // Reset map visibility for the next question
  map.getContainer().style.display = 'none';

  // Disable the hint button after the answer is checked
  hintButton.disabled = true;

  // Hide feedback message after 1 second
  setTimeout(() => {
    feedbackElement.innerText = ''; // Clear the text
    feedbackElement.className = ''; // Remove all classes
  }, 1000); // 1 second delay

  // Ask the next question after feedback and transition effects
  setTimeout(askQuestion, 1000); // 1 second total time before the next question
}



hintButton.addEventListener('click', () => {
  const mapContainer = map.getContainer();
  if (mapContainer.style.display === 'none') {
    mapContainer.style.display = 'block';
  } else {
    mapContainer.style.display = 'none';
  }
});

// Add event listeners to reload question on continent or mode change
document.getElementById('continent').addEventListener('change', askQuestion);
document.getElementById('mode').addEventListener('change', askQuestion);

// Start the quiz
fetchCountriesData();
