const godsAndDomains = {
  "Odin": "wisdom, war, and death",
  "Thor": "thunder and protection",
  "Loki": "trickery and chaos",
  "Freya": "love, beauty, and fertility",
  "Frey": "fertility, prosperity, and peace",
  "Tyr": "war and justice",
  "Baldur": "light, purity, and beauty",
  "Heimdall": "guardianship and foresight",
  "Hel": "underworld and death",
  "Njord": "sea and wealth",
  "Skadi": "winter and hunting",
  "Frigg": "marriage and motherhood",
  "Sif": "fertility and harvest",
  "Idunn": "youth and apples",
  "Bragi": "poetry and eloquence",
  "Vidar": "vengeance and silence",
  "Vili": "will and wisdom",
  "Ve": "creation and sanctity",
  "Eir": "healing",
  "Forseti": "justice and reconciliation",
  "Hodr": "darkness and winter",
  "Ullr": "archery and skiing",
  "Ran": "sea and drowned souls",
  "Aegir": "sea and brewing",
  "Fenrir": "destruction",
  "Jormungandr": "sea and world serpent",
  "Sleipnir": "speed and travel",
  "Surtr": "fire and destruction",
  "Ymir": "primordial creation",
  "Nidhogg": "destruction and underworld",
  "Gullveig": "gold and greed",
  "Valkyries": "choosers of the slain",
  "Nanna": "grief and love",
  "Sigyn": "loyalty and endurance",
  "Modi": "battle and bravery",
  "Magni": "strength",
  "Hoenir": "indecision and silence",
  "Kvasir": "wisdom and inspiration",
  "Mimir": "knowledge and wisdom",
  "Angrboda": "giants and dark prophecy",
  "Valknut": "death and transition",
  "Hrimthur": "frost giants",
  "Thrym": "frost and giants",
  "Geirrod": "giants and trickery",
  "Surt": "fire giants",
  "Aud": "prosperity",
  "Dagur": "day and light",
  "Dellingr": "dawn",
  "Nott": "night",
  "Sol": "sun",
  "Mani": "moon",
  "Alfheim": "elves and light",
  "Svartalfheim": "dark elves and craft",
  "Muspelheim": "fire and heat",
  "Niflheim": "ice and cold",
  "Vanaheim": "fertility and wisdom",
  "Jotunheim": "giants and chaos",
  "Midgard": "humans and earth",
  "Asgard": "gods and heavens",
  "Ragnarok": "end of the world",
  "Borr": "creation and ancestry",
  "Bestla": "giants and creation",
  "Fenja": "strength and toil",
  "Menja": "strength and toil",
  "Fafnir": "greed and dragons",
  "Regin": "smithing and cunning",
  "Andvari": "wealth and curses",
  "Hymir": "giants and fishing",
  "Aurboda": "mountains and nature",
  "Skaði": "hunting and mountains",
  "Thialfi": "speed and service",
  "Roskva": "service",
  "Bolverk": "deception and labor",
  "Grimnir": "wisdom and disguise",
  "Harbard": "sea and disguise",
  "Alvis": "knowledge and craftsmanship",
  "Draupnir": "abundance",
  "Hati": "pursuit of the moon",
  "Skoll": "pursuit of the sun",
  "Garm": "guardian of Hel",
  "Vidofnir": "guardianship and wisdom",
  "Sindri": "craftsmanship and dwarves",
  "Brokk": "craftsmanship and dwarves",
  "Hrungnir": "giants and battle",
  "Hugi": "thought and speed",
  "Muninn": "memory",
  "Huginn": "thought",
  "Gjallarhorn": "alert and battle",
  "Yggdrasil": "life and the cosmos",
  "Bifrost": "rainbow bridge and connection",
  "Fjorgyn": "earth and nature"
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
