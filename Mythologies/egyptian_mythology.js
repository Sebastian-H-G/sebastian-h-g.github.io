const godsAndDomains = {
  "Ra/Re": "sun and creation",
  "Osiris": "underworld and rebirth",
  "Isis": "magic and motherhood",
  "Horus": "sky and kingship",
  "Anubis": "mummification and afterlife",
  "Set": "chaos and storms",
  "Thoth": "wisdom and writing",
  "Hathor": "love and music",
  "Sekhmet": "war and healing",
  "Bastet": "home and fertility",
  "Ptah": "craftsmen and creation",
  "Sobek": "crocodiles and rivers",
  "Nephthys": "mourning and protection",
  "Nut": "sky",
  "Geb": "earth",
  "Shu": "air",
  "Tefnut": "moisture",
  "Ma'at": "truth and justice",
  "Amun": "air and kingship",
  "Mut": "motherhood",
  "Khonsu": "moon",
  "Hapi": "Nile and fertility",
  "Atum": "creation and sunset",
  "Khepri": "sunrise and rebirth",
  "Seshat": "writing and knowledge",
  "Taweret": "childbirth and fertility",
  "Bes": "household and childbirth",
  "Serqet": "scorpions and healing",
  "Anhur": "war and hunting",
  "Montu": "war",
  "Min": "fertility and harvest",
  "Neith": "war and weaving",
  "Wadjet": "protection and kingship",
  "Nekhbet": "vulture and protection",
  "Renenutet": "harvest and nourishment",
  "Aker": "horizon and underworld",
  "Babi": "baboons and aggression",
  "Heka": "magic and medicine",
  "Khnum": "creation and water",
  "Satet": "floods and fertility",
  "Anuket": "Nile and fertility",
  "Mehet-Weret": "cosmic waters",
  "Banebdjedet": "fertility and virility",
  "Shezmu": "wine and execution",
  "Meretseger": "valleys and punishment",
  "Qetesh": "love and beauty",
  "Ammit": "devourer of souls",
  "Ihy": "music and joy",
  "Amunet": "mystery and creation",
  "Heh": "infinity",
  "Kuk": "darkness",
  "Nun": "primordial waters",
  "Naunet": "primordial waters",
  "Tatenen": "earth and creation",
  "Wepwawet": "war and funerary rites",
  "Aten": "sun disk",
  "Neper": "grain and harvest",
  "Sopdet": "stars and fertility",
  "Shai": "destiny and fate",
  "Ruty": "lion gods and horizon",
  "Hedjet": "white crown and kingship",
  "Nefertem": "lotus and healing",
  "Horus the Elder": "sky and protection",
  "Horus the Younger": "vengeance and kingship",
  "Maahes": "war and protection",
  "Pakhet": "war and hunting",
  "Sebiumeker": "protection and fertility",
  "Ahti": "chaos and strength",
  "Dedwen": "wealth and incense",
  "Ha": "deserts and oases",
  "Ra-Horakhty": "sun and kingship",
  "Kherty": "underworld and protection",
  "Tutu": "protection",
  "Petbe": "revenge and justice",
  "Resheph": "war and plague",
  "Kebehwet": "purification",
  "Sopdu": "war and protection",
  "Nefertari": "beauty and charm",
  "Sia": "perception and intellect",
  "Hu": "speech and authority",
  "Weret-hekau": "magic and protection",
  "Hauron": "deserts and protection",
  "Sebek-Ra": "Nile and fertility",
  "Raet-Tawy": "sun and sovereignty",
  "Amentet": "west and afterlife",
  "Nehebkau": "protection and binding",
  "Iabet": "purity and renewal",
  "Shesmu": "wine and oil",
  "Heryshaf": "creation and fertility",
  "Tayet": "weaving and mummification"
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
