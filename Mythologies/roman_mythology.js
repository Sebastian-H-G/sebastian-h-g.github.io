const godsAndDomains = {
  "Jupiter": "sky and thunder",
  "Neptune": "sea",
  "Pluto": "underworld",
  "Minerva": "wisdom and war",
  "Mars": "war",
  "Apollo": "music, prophecy, and the sun",
  "Diana": "hunt and the moon",
  "Ceres": "harvest and agriculture",
  "Venus": "love and beauty",
  "Vulcan": "fire and forge",
  "Juno": "marriage and family",
  "Mercury": "trade and travel",
  "Bacchus": "wine and festivity",
  "Luna": "moon",
  "Vesta": "hearth and home",
  "Cupid": "love and desire",
  "Somnus": "sleep",
  "Victoria": "victory",
  "Nemesis": "retribution",
  "Iris": "rainbows and messages",
  "Fortuna": "fortune and luck",
  "Aurora": "dawn",
  "Sol": "sun",
  "Faunus": "nature and shepherds",
  "Saturn": "time and agriculture",
  "Ops": "fertility and motherhood",
  "Terra": "earth",
  "Caelus": "sky",
  "Nox": "night",
  "Scelus": "guilt and crime",
  "Necessitas": "necessity",
  "Dies": "day",
  "Pavor": "fear",
  "Terror": "terror",
  "Mors": "death",
  "Fatum": "fate",
  "Letum": "death and destruction",
  "Chiron": "wisdom and healing",
  "Aesculapius": "medicine and healing",
  "Trivia": "magic and crossroads",
  "Proserpina": "spring and the underworld",
  "Lucina": "childbirth",
  "Sapientia": "wisdom",
  "Memoria": "memory",
  "Iustitia": "justice and fairness",
  "Oceanus": "ocean",
  "Tethys": "freshwater",
  "Prometheus": "forethought",
  "Epimetheus": "afterthought",
  "Atlas": "endurance",
  "Selene": "moon",
  "Latona": "motherhood",
  "Theia": "shining light",
  "Coelus": "intellect",
  "Crius": "constellations",
  "Hyperion": "light",
  "Iapetus": "mortality",
  "Venti": "winds",
  "Eurus": "east wind",
  "Auster": "south wind",
  "Favonius": "west wind",
  "Aquilo": "north wind",
  "Aether": "upper air",
  "Discordia": "discord",
  "Charon": "ferryman of the dead",
  "Cerberus": "guardian of the underworld",
  "Concordia": "harmony",
  "Anima": "soul",
  "Hebe": "youth",
  "Parcae": "fates",
  "Nona": "fate and life thread spinning",
  "Decima": "fate and life thread measuring",
  "Morta": "fate and life thread cutting",
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
  "Phorcys": "sea dangers",
  "Nereus": "sea's bounty",
  "Triton": "sea messenger",
  "Proteus": "changeable sea",
  "Echidna": "mother of monsters",
  "Ladon": "guardian dragon",
  "Furiae": "vengeance spirits",
  "Janus": "beginnings and transitions",
  "Quirinus": "war and state"
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
