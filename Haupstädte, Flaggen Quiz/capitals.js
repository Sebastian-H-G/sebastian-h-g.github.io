const apiUrl = 'https://restcountries.com/v3.1/all';

let countriesData = [];
let score = 0;
let highscore = localStorage.getItem('highscore') || 0;
document.getElementById('highscore').innerText = highscore;

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

  // Set flag for the correct country if the mode is "countryToCapital" or "flagToCapital"
  const flagImg = document.getElementById('flag');
  if (mode === 'countryToCapital' || mode === 'flagToCapital') {
    flagImg.src = correctCountry.flag;
    flagImg.style.display = 'block';  // Show flag
  } else {
    flagImg.style.display = 'none';   // Hide flag
  }

  let options = [...countries].sort(() => 0.5 - Math.random()).slice(0, 3);
  options.push(correctCountry);
  options = options.sort(() => 0.5 - Math.random());

  // Set the question text based on the mode
  if (mode === 'capitalToCountry') {
    document.getElementById('question-text').innerText = `Which country has the capital ${correctCountry.capital}?`;
  } else if (mode === 'flagToCapital') {
    document.getElementById('question-text').innerText = `What is the capital of this country?`;
  } else {
    document.getElementById('question-text').innerText = `What is the capital of ${correctCountry.name}?`;
  }

  options.forEach((option, index) => {
    const button = document.getElementById(`option${index + 1}`);
    button.innerText = mode === 'capitalToCountry' ? option.name : option.capital;
    button.onclick = () => checkAnswer(option, correctCountry);
  });

  // Reset feedback message
  document.getElementById('feedback').innerText = '';
}
// Select all buttons with the class "quiz-link"
const buttons = document.querySelectorAll(".option-button");

buttons.forEach(button => {
  // Handle touchstart
  button.addEventListener("touchstart", () => {
    button.classList.add("active");  // Add the active class (button pressed down)
    setTimeout(() => {
      button.classList.remove("active");  // Automatically remove the class after a short delay
    }, 1000);  // Adjust this time as needed
  });

  // Handle mousedown (for desktops)
  button.addEventListener("mousedown", () => {
    button.classList.add("active");  // Add the active class (button pressed down)
    setTimeout(() => {
      button.classList.remove("active");  // Automatically remove the class after a short delay
    }, 1000);  // Adjust this time as needed
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
  const isCorrect = 
    (mode === 'capitalToCountry' && selectedOption.name === correctCountry.name) ||
    (mode === 'countryToCapital' && selectedOption.capital === correctCountry.capital) ||
    (mode === 'flagToCapital' && selectedOption.capital === correctCountry.capital);

  const feedbackElement = document.getElementById('feedback');
  const buttons = document.querySelectorAll('.option-button');

  // Highlight the correct and selected buttons
  buttons.forEach(button => {
    const buttonText = button.innerText;
    if (
      (mode === 'capitalToCountry' && buttonText === correctCountry.name) ||
      ((mode === 'countryToCapital' || mode === 'flagToCapital') && buttonText === correctCountry.capital)
    ) {
      button.classList.add('correct'); // Add green highlight to the correct button
    } else if (
      buttonText === 
      (mode === 'capitalToCountry' ? selectedOption.name : selectedOption.capital)
    ) {
      button.classList.add('wrong'); // Add red highlight to the wrong button
    }
    button.disabled = true; // Disable all buttons after an answer is selected
  });

  if (isCorrect) {
    score++;
    if (score > highscore) {
      highscore = score;
      localStorage.setItem('highscore', highscore);
      createConfetti();
    }
  } else {
    score = 0;
  }

  document.getElementById('score').innerText = score;
  document.getElementById('highscore').innerText = highscore;

  // Hide feedback message after 1 second
  setTimeout(() => {
    feedbackElement.innerText = ''; // Clear the text
    feedbackElement.className = ''; // Remove all classes
    buttons.forEach(button => {
      button.classList.remove('correct', 'wrong'); // Remove highlight classes
      button.disabled = false; // Re-enable buttons for the next question
    });
    askQuestion(); // Ask the next question
  }, 2000); // 2 second delay
}


// Add event listeners to reload question on continent or mode change
document.getElementById('continent').addEventListener('change', askQuestion);
document.getElementById('mode').addEventListener('change', askQuestion);

// Start the quiz
fetchCountriesData();
