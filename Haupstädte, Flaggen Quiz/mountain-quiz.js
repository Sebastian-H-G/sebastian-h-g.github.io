const mountainData = [
  {
    name: "Mount Everest",
    range: "Himalayas",
    image: "everest.jpg",
    country: ["Nepal", "China"],
    height: 8848,
    prominence: 8848,
    features: ["Glaciers", "Snow-covered peak"],
    facts: ["Part of the Seven Summits", "First ascent in 1953"]
  },
  {
    name: "K2",
    range: "Karakoram",
    image: "k2.jpg",
    country: ["Pakistan", "China"],
    height: 8611,
    prominence: 4017,
    features: ["Steep slopes", "Snow"],
    facts: ["Second highest mountain in the world", "No winter ascent until 2021"]
  },
  {
    name: "Kangchenjunga",
    range: "Himalayas",
    image: "kangchenjunga.jpg",
    country: ["Nepal", "India"],
    height: 8586,
    prominence: 3922,
    features: ["Glaciers", "Snow"],
    facts: ["Third highest mountain in the world", "First climbed in 1955"]
  },


];



let score = 0;
let currentQuestionIndex = 0;
let highScore = localStorage.getItem('highScore') ? parseInt(localStorage.getItem('highScore')) : 0;
const usedOptions = new Set(); // Track used options to avoid duplicates

// Utility function to get unique random options, including the correct answer
function getUniqueRandomOptions(correct, options) {
  const uniqueOptions = new Set(); // Use a set to avoid duplicates
  uniqueOptions.add(correct); // Ensure the correct answer is included

  // Randomly pick unique options until we have enough
  while (uniqueOptions.size < 4) {
    const randomOption = options[Math.floor(Math.random() * options.length)];
    uniqueOptions.add(randomOption);
  }

  const optionArray = Array.from(uniqueOptions); // Convert Set back to Array

  // Shuffle the array so that the correct answer appears in a random position
  return shuffle(optionArray); 
}

// Shuffle function to randomize the array
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}


// Display the initial high score on page load
document.getElementById('highscore').innerText = `High Score: ${highScore}`;

// Function to display the next question
function showNextQuestion() {
  resetState();
  const randomMountain = mountainData[Math.floor(Math.random() * mountainData.length)];
  const questionType = Math.floor(Math.random() * 6); // Randomize question type
  const questionContainer = document.getElementById('question-container');
  const nextButton = document.getElementById('next-button');

  switch (questionType) {
    case 0:
      // Identify the Mountain by image
      showQuestion({
        type: 'identifyMountain',
        question: `Which mountain is this?`,
        image: randomMountain.image,
        correctAnswer: randomMountain.name,
        options: getUniqueRandomOptions(randomMountain.name, mountainData.map(m => m.name))
      });
      break;
    case 1:
      // Mountain Range
      showQuestion({
        type: 'mountainRange',
        question: `Which mountain range does ${randomMountain.name} belong to?`,
        correctAnswer: randomMountain.range,
        options: getUniqueRandomOptions(randomMountain.range, mountainData.map(m => m.range))
      });
      break;
    case 2:
      // Country Location
      showQuestion({
        type: 'countryLocation',
        question: `In which country/countries is ${randomMountain.name} located?`,
        correctAnswer: randomMountain.country.join(', '),
        options: getUniqueRandomOptions(randomMountain.country.join(', '), [].concat(...mountainData.map(m => m.country)))
      });
      break;
    case 3:
      // Mountain Peak to Base Distance (Height or Prominence)
      showQuestion({
        type: 'mountainHeightProminence',
        question: `What is the height or prominence of ${randomMountain.name}?`,
        correctAnswer: `${randomMountain.height} meters`,
        options: getUniqueRandomOptions(`${randomMountain.height} meters`, mountainData.map(m => `${m.height} meters`))
      });
      break;
    case 4:
      // Mountain Features
      showQuestion({
        type: 'mountainFeatures',
        question: `Which features are associated with ${randomMountain.name}?`,
        correctAnswer: randomMountain.features.join(', '),
        options: getUniqueRandomOptions(randomMountain.features.join(', '), [].concat(...mountainData.map(m => m.features)).flat())
      });
      break;
    case 5:
      // Multiple-Choice Facts (Single true fact)
      const correctFact = randomMountain.facts[0];
      const incorrectFacts = getIncorrectFacts(correctFact);

      showQuestion({
        type: 'mountainFacts',
        question: `Which of the following facts is true about ${randomMountain.name}?`,
        correctAnswer: correctFact,
        options: shuffle([correctFact, ...incorrectFacts])
      });
      break;
  }

  nextButton.style.display = 'none'; // Hide next button until question is answered
}

// Function to show a question and generate options
function showQuestion({ type, question, correctAnswer, options, image = null }) {
  const questionContainer = document.getElementById('question-container');
  const feedbackMessage = document.getElementById('feedback-message');
  feedbackMessage.innerHTML = ''; // Clear any previous messages

  let questionHtml = `<h1 class="question">${question}</h1>`;

  if (image) {
    questionHtml += `<img src="${image}" alt="Mountain Image" style="max-width: 100%; height: auto;">`;
  }

  // Add the options container with the class "options"
  questionHtml += `<div class="options">`;

  // Shuffle the options so the correct answer appears randomly
  const shuffledOptions = shuffle(options); // Ensure options are shuffled

  shuffledOptions.forEach(option => {
    // Add class "option" to each button
    questionHtml += `<button class="option" onclick="checkAnswer('${option}', '${correctAnswer}')">${option}</button>`;
  });

  questionHtml += `</div>`; // Close the options container

  questionContainer.innerHTML = questionHtml;
}




// Function to check if the selected answer is correct
function checkAnswer(selectedAnswer, correctAnswer) {
    const feedbackMessage = document.getElementById('feedback-message');
    const scoreElement = document.getElementById('score');
    const nextButton = document.getElementById('next-button');
    const buttons = document.querySelectorAll('#question-container button'); // Select all buttons

    if (selectedAnswer === correctAnswer) {
        score++;
        feedbackMessage.innerHTML = `<p class="correct" style="color: green;">Correct!</p>`;
    } else {
        score = 0; // Reset score to 0 on wrong answer
        feedbackMessage.innerHTML = `<p class="wrong" style="color: red;">Wrong! The correct answer was: ${correctAnswer}</p>`;
    }

    // Disable all buttons
    buttons.forEach(button => button.disabled = true);

    // Update score display
    scoreElement.innerHTML = `Score: ${score}`;
    
    // Check for high score
    if (score > highScore) {
        highScore = score;
        localStorage.setItem('highScore', highScore); // Save high score to localStorage
        document.getElementById('highscore').innerText = `High Score: ${highScore}`; // Update high score display
    }

    nextButton.style.display = 'inline'; // Show the next button
}

// Utility functions
function getUniqueRandomOptions(correct, options) {
  const uniqueOptions = new Set(); // Use a set to avoid duplicates
  uniqueOptions.add(correct); // Ensure the correct answer is included

  // Randomly pick unique options
  while (uniqueOptions.size < 4) {
    const randomOption = options[Math.floor(Math.random() * options.length)];
    uniqueOptions.add(randomOption);
  }

  return Array.from(uniqueOptions); // Convert back to array
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function resetState() {
  document.getElementById('question-container').innerHTML = '';
  document.getElementById('feedback-message').innerHTML = '';
  document.getElementById('next-button').style.display = 'none';
  usedOptions.clear(); // Clear used options for the next question
}

function getIncorrectFacts(correctFact) {
  const allFacts = mountainData.flatMap(mountain => mountain.facts);
  const filteredFacts = allFacts.filter(fact => fact !== correctFact); // Remove the correct fact
  return shuffle(filteredFacts).slice(0, 3); // Get 3 incorrect facts
}

// Start the quiz
showNextQuestion();
