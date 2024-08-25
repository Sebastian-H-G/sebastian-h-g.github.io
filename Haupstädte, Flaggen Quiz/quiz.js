const questions = [
    { 
        question: 'What is the capital of Albania? 🇦🇱', 
        correctAnswer: 'Tirana', 
        easyOptions: ['Tirana', 'Athens', 'Skopje', 'Podgorica'], 
        hardOptions: ['Tirana', 'Durrës', 'Vlorë', 'Shkodër'], 
        country: 'Albania'
    },
    { 
        question: 'What is the capital of Andorra? 🇦🇩', 
        correctAnswer: 'Andorra la Vella', 
        easyOptions: ['Andorra la Vella', 'Madrid', 'Paris', 'Rome'], 
        hardOptions: ['Andorra la Vella', 'Escaldes-Engordany', 'Encamp', 'La Massana'], 
        country: 'Andorra'
    },
    { 
        question: 'What is the capital of Austria? 🇦🇹', 
        correctAnswer: 'Vienna', 
        easyOptions: ['Vienna', 'Bratislava', 'Berlin', 'Prague'], 
        hardOptions: ['Vienna', 'Salzburg', 'Graz', 'Innsbruck'], 
        country: 'Austria'
    }
];

let currentQuestionIndex = 0;
let score = 0;
let highscore = localStorage.getItem('highscore') || 0;

// Function to generate questions based on difficulty
function generateQuestions(difficulty) {
    return questions; // No filtering, but could add filtering logic later
}

function loadQuestion() {
    const difficulty = document.getElementById('difficulty').value;
    const filteredQuestions = generateQuestions(difficulty);
    shuffle(filteredQuestions);

    const currentQuestion = filteredQuestions[currentQuestionIndex];
    document.getElementById('question').textContent = currentQuestion.question;

    let options = difficulty === 'easy' ? currentQuestion.easyOptions : currentQuestion.hardOptions;
    shuffle(options);

    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach((button, index) => {
        button.textContent = options[index];
        button.onclick = () => checkAnswer(button.textContent, currentQuestion.correctAnswer);
    });
}

function checkAnswer(selectedAnswer, correctAnswer) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = selectedAnswer === correctAnswer ? 'Correct!' : `Wrong! Correct answer: ${correctAnswer}`;
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Event listener for difficulty change
document.getElementById('difficulty').addEventListener('change', loadQuestion);

// Load first question on page load
window.onload = loadQuestion;
