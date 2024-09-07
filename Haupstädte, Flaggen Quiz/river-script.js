document.addEventListener('DOMContentLoaded', () => {
    loadQuiz();
    initializeMap();
});

async function loadQuiz() {
    const questions = [
        {
            question: "Which river is the longest?",
            options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
            answer: "Nile"
        },
        {
            question: "Which river flows through Egypt?",
            options: ["Nile", "Amazon", "Ganges", "Rhine"],
            answer: "Nile"
        }
    ];

    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = ''; // Clear any existing content

    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        questionDiv.innerHTML = `
            <h2>Question ${index + 1}</h2>
            <p>${q.question}</p>
            ${q.options.map((opt) => `
                <button onclick="checkAnswer('${opt}', '${q.answer}')">${opt}</button>
            `).join('')}
        `;

        quizContainer.appendChild(questionDiv);
    });
}

function checkAnswer(selected, correct) {
    if (selected === correct) {
        alert("Correct!");
    } else {
        alert("Incorrect. Try again.");
    }
}

function initializeMap() {
    const map = L.map('map').setView([20, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([20, 0]).addTo(map)
        .bindPopup('Example River Location')
        .openPopup();
}
