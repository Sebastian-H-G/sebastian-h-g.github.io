let score = 0;
let highScore = localStorage.getItem("highscore") || 0;
document.getElementById("highscore").innerText = highScore;
let correctAnswerIndex = null;
let currentOptions = [];
let selectedContinent = "all";

// Fetch flag data from API
async function fetchFlags(continent) {
    let url = "https://restcountries.com/v3.1/all";
    const response = await fetch(url);
    const countries = await response.json();

    // Filter countries by selected continent
    if (continent !== "all") {
        return countries.filter(country => {
            if (continent === "north america") {
                return country.subregion === "Northern America";
            } else if (continent === "south america") {
                return country.subregion === "South America";
            }
            return country.region.toLowerCase() === continent;
        });
    }

    return countries;
}

// Start quiz
async function startQuiz() {
    selectedContinent = document.getElementById("continent-select").value;
    const countries = await fetchFlags(selectedContinent);

    // Randomly pick 4 countries and set the correct one
    const randomCountries = countries.sort(() => 0.5 - Math.random()).slice(0, 4);
    const correctCountry = randomCountries[Math.floor(Math.random() * 4)];

    // Fade-out current flag and message
    document.getElementById('flag-container').classList.add('fade-out');
    document.getElementById('message').style.opacity = "0"; // Hide message instantly

    setTimeout(() => {
        // Set correct answer
        correctAnswerIndex = randomCountries.indexOf(correctCountry);
        currentOptions = randomCountries;
        
        // Update flag image
        document.getElementById("flag-img").src = correctCountry.flags.svg;

        // Update button labels
        const optionButtons = document.getElementsByClassName("option");
        for (let i = 0; i < optionButtons.length; i++) {
            optionButtons[i].innerText = randomCountries[i].name.common;
        }

        // Fade-in the flag and reset message
        document.getElementById('flag-container').classList.remove('fade-out');
        document.getElementById('message').innerText = ""; // Clear message
        document.getElementById('message').style.opacity = "1"; // Ensure message container is visible
    }, 600); // Delay for fade-out animation
}


  // Select all buttons with the class "myButton"
const buttons = document.querySelectorAll(".option");

buttons.forEach(button => {
    // Add active class on touchstart
    button.addEventListener("touchstart", () => {
        button.classList.add("active");
    });

    // Remove active class on touchend and trigger vibration
    button.addEventListener("touchend", () => {
        button.classList.remove("active");
        // Trigger vibration on touchend
        if ("vibrate" in navigator) {
            navigator.vibrate(200); // Vibrate for 200 milliseconds
        }
    });

    // Also handle mouse clicks for desktops
    button.addEventListener("mousedown", () => {
        button.classList.add("active");
    });

    // Remove active class on mouseup and trigger vibration
    button.addEventListener("mouseup", () => {
        button.classList.remove("active");
        // Trigger vibration on mouseup
        if ("vibrate" in navigator) {
            navigator.vibrate(200); // Vibrate for 200 milliseconds
        }
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

// Check answer
function checkAnswer(selectedIndex) {
    const messageElement = document.getElementById("message");

    // Reset message element by removing the classes and triggering reflow
    messageElement.classList.remove("correct", "wrong");
    messageElement.style.opacity = "0"; // Hide message before updating content
    void messageElement.offsetWidth; // Trigger reflow

    if (selectedIndex === correctAnswerIndex) {
        score++;
        document.getElementById("score").innerText = score;
        messageElement.innerText = " 🎉 Correct! 🎉";
        messageElement.classList.add("correct"); // Apply correct style
        messageElement.style.opacity = "1"; // Show the message
        
        if (score > highScore) {
            highScore = score;
            localStorage.setItem("highscore", highScore);
            document.getElementById("highscore").innerText = highScore;
			triggerWiggleAndGlowAnimation();
            createConfetti();
        }

        setTimeout(() => {
            messageElement.style.opacity = "0"; // Hide message
            setTimeout(startQuiz, 300); // Adjust this delay to match your CSS transition duration

        }, 950); // Display message for 1 second

    } else {
        messageElement.innerText = ` 😕 Wrong! The correct answer was ${currentOptions[correctAnswerIndex].name.common}.`;
        score = 0;
        document.getElementById("score").innerText = score;
        messageElement.classList.add("wrong"); // Apply wrong style
        messageElement.style.opacity = "1"; // Show the message

        setTimeout(() => {
            messageElement.style.opacity = "0"; // Hide message
            setTimeout(startQuiz, 300); // Adjust this delay to match your CSS transition duration

        }, 1300); // Display wrong message for 3 seconds
    }
}

// Initialize the quiz on load
window.onload = function() {
    startQuiz();
};

// Add event listener to continent dropdown
document.getElementById("continent-select").addEventListener("change", startQuiz);
