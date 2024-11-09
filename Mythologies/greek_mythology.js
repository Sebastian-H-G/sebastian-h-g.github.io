const godsAndDomains = {
  "Zeus": "sky and thunder",
  "Poseidon": "sea",
  "Hades": "underworld",
  "Athena": "wisdom and war",
  "Ares": "war",
  "Apollo": "music, prophecy, and the sun",
  "Artemis": "hunt and the moon",
  "Demeter": "harvest and agriculture",
  "Aphrodite": "love and beauty",
  "Hephaestus": "fire and forge",
  "Hera": "marriage and family",
  "Hermes": "trade and travel",
  "Dionysus": "wine and festivity",
  "Selene": "moon",
  "Hestia": "hearth and home",
  "Eros": "love and desire",
  "Hypnos": "sleep",
  "Nike": "victory",
  "Nemesis": "retribution",
  "Iris": "rainbows and communication",
  "Tyche": "fortune and luck",
  "Eos": "dawn",
  "Helios": "sun",
  "Pan": "nature and shepherds",
  "Cronus": "time",
  "Rhea": "fertility and motherhood",
  "Gaia": "earth",
  "Uranus": "sky",
  "Nyx": "night",
  "Erebus": "darkness",
  "Ananke": "necessity and inevitability",
  "Hemera": "day",
  "Phobos": "fear",
  "Deimos": "terror",
  "Thanatos": "death",
  "Moros": "doom",
  "Keres": "violent death",
  "Chiron": "wisdom and healing",
  "Asclepius": "medicine and healing",
  "Hecate": "magic and crossroads",
  "Persephone": "spring and the underworld",
  "Eileithyia": "childbirth",
  "Metis": "wisdom and deep thought",
  "Mnemosyne": "memory",
  "Themis": "justice and order",
  "Oceanus": "ocean",
  "Tethys": "freshwater",
  "Prometheus": "forethought and craft",
  "Epimetheus": "afterthought",
  "Atlas": "endurance",
  "Selene": "moon",
  "Leto": "motherhood",
  "Theia": "sight and shining light",
  "Coeus": "intellect and inquiry",
  "Crius": "constellations",
  "Hyperion": "heavenly light",
  "Iapetus": "mortality",
  "Eurus": "east wind",
  "Notus": "south wind",
  "Zephyrus": "west wind",
  "Boreas": "north wind",
  "Aether": "upper air",
  "Eris": "discord",
  "Charon": "ferryman of the dead",
  "Cerberus": "guard of the underworld",
  "Harmonia": "harmony",
  "Psyche": "soul",
  "Aether": "bright upper sky",
  "Achilles": "heroic strength",
  "Heracles": "strength and heroism",
  "Orpheus": "music and poetry",
  "Pandora": "curiosity",
  "Hebe": "youth",
  "Lachesis": "fate and measuring lifespan",
  "Clotho": "fate and spinning life thread",
  "Atropos": "fate and cutting life thread",
  "Calliope": "epic poetry",
  "Clio": "history",
  "Euterpe": "lyric poetry",
  "Melpomene": "tragedy",
  "Terpsichore": "dance",
  "Erato": "love poetry",
  "Polyhymnia": "sacred song",
  "Urania": "astronomy",
  "Thalia": "comedy",
  "Ceto": "sea monsters",
  "Phorcys": "hidden dangers of the deep",
  "Nereus": "sea's rich bounty",
  "Triton": "sea messenger",
  "Proteus": "elusive sea changes",
  "Echidna": "monsters and mother of beasts",
  "Ladon": "dragon guardianship"
};


let score = 0;
let highScore = localStorage.getItem('highScore') || 0;

// Assuming the highScore element is already in the HTML
const questionElement = document.querySelector('.question');
const optionsElement = document.querySelector('.options');
const messageElement = document.querySelector('.message');
const scoreElement = document.querySelector('.score');
const highScoreElement = document.querySelector('.highscore'); // Directly select from the HTML

// Initialize the high score display
highScoreElement.textContent = `High Score: ${highScore}`;

function generateQuestion() {
  const gods = Object.keys(godsAndDomains);
  const randomGod = gods[Math.floor(Math.random() * gods.length)];
  const domain = godsAndDomains[randomGod];

  const questionType = Math.random() > 0.5 
    ? `Who is the god of ${domain}?` 
    : `Which god/goddess is ${randomGod}?`;

  let correctAnswer = randomGod;
  if (questionType.includes('Which god/goddess is')) {
    correctAnswer = domain;
  }

  const allAnswers = questionType.includes('Who is')
    ? gods
    : Object.values(godsAndDomains);

  const shuffledAnswers = shuffleAnswers(allAnswers, correctAnswer);

  return { questionType, correctAnswer, shuffledAnswers };
}

function shuffleAnswers(allAnswers, correctAnswer) {
  const shuffled = allAnswers.filter(ans => ans !== correctAnswer)
                              .sort(() => Math.random() - 0.5)
                              .slice(0, 3);
  shuffled.push(correctAnswer);
  return shuffled.sort(() => Math.random() - 0.5);
}

function loadQuestion() {
  const { questionType, correctAnswer, shuffledAnswers } = generateQuestion();
  questionElement.textContent = questionType;

  optionsElement.innerHTML = '';
  shuffledAnswers.forEach(option => {
    const button = document.createElement('button');
    button.textContent = option;
    button.addEventListener('click', () => checkAnswer(option, correctAnswer));
    optionsElement.appendChild(button);
  });

  // Hide the message before showing the next question
  messageElement.textContent = '';
}

function checkAnswer(selected, correct) {
  if (selected === correct) {
    score++;
    messageElement.textContent = "Correct!";
    messageElement.style.color = "green";
    if (score > highScore) {
      highScore = score;
      localStorage.setItem('highScore', highScore);
      highScoreElement.textContent = `High Score: ${highScore}`;
    }
  } else {
    score = 0;
    messageElement.textContent = `Wrong! The correct answer was ${correct}.`;
    messageElement.style.color = "red";
  }
  scoreElement.textContent = `Score: ${score}`;

  // Hide the message before showing the next question
  setTimeout(() => {
    loadQuestion();
  }, 1500);  // 1.5 seconds delay before loading the next question
}

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

loadQuestion();
