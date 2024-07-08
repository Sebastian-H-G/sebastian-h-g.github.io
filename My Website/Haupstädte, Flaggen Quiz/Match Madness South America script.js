// Match Madness South America script.js
const countries = [
    "Argentina", "Bolivia", "Brazil", "Chile", "Colombia",
    "Ecuador", "Guyana", "Paraguay", "Peru", "Suriname",
    "Uruguay", "Venezuela"
];

const capitals = [
    "Buenos Aires", "Sucre", "Brasília", "Santiago", "Bogotá",
    "Quito", "Georgetown", "Asunción", "Lima", "Paramaribo",
    "Montevideo", "Caracas"
];

let pairs = [];
let selected = [];
let queue = [];
let score = 0;
let timer;

document.addEventListener("DOMContentLoaded", () => {
    initializeGame();
    startTimer(120);
});

function initializeGame() {
    pairs = countries.map((country, index) => ({ country, capital: capitals[index] }));
    pairs = shuffleArray(pairs);
    queue = pairs.slice(5);
    pairs = pairs.slice(0, 5);

    const countryColumn = document.getElementById('countries');
    const capitalColumn = document.getElementById('capitals');

    countryColumn.innerHTML = '';
    capitalColumn.innerHTML = '';

    const shuffledCountries = shuffleArray(pairs.map(pair => pair.country));
    const shuffledCapitals = shuffleArray(pairs.map(pair => pair.capital));

    shuffledCountries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.textContent = country;
        countryDiv.dataset.type = 'country';
        countryDiv.dataset.match = pairs.find(pair => pair.country === country).capital;
        countryDiv.addEventListener('click', handleSelection);
        countryColumn.appendChild(countryDiv);
    });

    shuffledCapitals.forEach(capital => {
        const capitalDiv = document.createElement('div');
        capitalDiv.textContent = capital;
        capitalDiv.dataset.type = 'capital';
        capitalDiv.dataset.match = pairs.find(pair => pair.capital === capital).country;
        capitalDiv.addEventListener('click', handleSelection);
        capitalColumn.appendChild(capitalDiv);
    });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function handleSelection(event) {
    const selectedElement = event.target;
    if (selected.length === 0 || (selected.length === 1 && selected[0].dataset.type !== selectedElement.dataset.type)) {
        selected.push(selectedElement);
    }

    if (selected.length === 2) {
        if (selected[0].dataset.match === selected[1].textContent) {
            selected.forEach(element => element.classList.add('correct'));
            setTimeout(() => {
                selected.forEach(element => element.remove());
                addNewPair();
                score++;
                updateScore();
                selected = [];
                checkWinCondition();
            }, 500); // Short delay before removing elements
        } else {
            selected.forEach(element => element.classList.add('wrong'));
            setTimeout(() => {
                selected.forEach(element => element.classList.remove('wrong'));
                selected = [];
                score = 0; // Reset score on wrong pair
                updateScore();
            }, 500); // Short delay to show wrong indication
        }
    }
}

function addNewPair() {
    if (queue.length > 0) {
        const newPair = queue.shift();
        const countryColumn = document.getElementById('countries');
        const capitalColumn = document.getElementById('capitals');

        const newCountryDiv = document.createElement('div');
        newCountryDiv.textContent = newPair.country;
        newCountryDiv.dataset.type = 'country';
        newCountryDiv.dataset.match = newPair.capital;
        newCountryDiv.addEventListener('click', handleSelection);

        const newCapitalDiv = document.createElement('div');
        newCapitalDiv.textContent = newPair.capital;
        newCapitalDiv.dataset.type = 'capital';
        newCapitalDiv.dataset.match = newPair.country;
        newCapitalDiv.addEventListener('click', handleSelection);

        countryColumn.appendChild(newCountryDiv);
        capitalColumn.appendChild(newCapitalDiv);
    }
}

function updateScore() {
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = `Score: ${score}`;
}

function checkWinCondition() {
    if (document.getElementById('countries').children.length === 0 && queue.length === 0) {
        clearTimeout(timer);
        alert(`You won with a score of ${score}!`);
    }
}

function startTimer(duration) {
    let timeRemaining = duration;
    const timerElement = document.getElementById('timer');

    timer = setInterval(() => {
        timeRemaining--;
        timerElement.textContent = `Time left: ${timeRemaining} seconds`;

        if (timeRemaining <= 0) {
            clearInterval(timer);
            alert('Time is up!');
            initializeGame();
        }
    }, 1000);
}
