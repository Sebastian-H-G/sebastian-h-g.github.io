// script.js
document.addEventListener('DOMContentLoaded', () => {
    const allCards = [
    { name: 'Germany', img: 'flags/de.webp' },
    { name: 'France', img: 'flags/fr.webp' },
    { name: 'Italy', img: 'flags/it.webp' },
    { name: 'Spain', img: 'flags/es.webp' },
    { name: 'United Kingdom', img: 'flags/gb.webp' },
    { name: 'Netherlands', img: 'flags/nl.webp' },
    { name: 'Belgium', img: 'flags/be.webp' },
    { name: 'Switzerland', img: 'flags/ch.webp' },
    { name: 'Austria', img: 'flags/at.webp' },
    { name: 'Sweden', img: 'flags/se.webp' },
    { name: 'Norway', img: 'flags/no.webp' },
    { name: 'Denmark', img: 'flags/dk.webp' },
    { name: 'Finland', img: 'flags/fi.webp' },
    { name: 'Ireland', img: 'flags/ie.webp' },
    { name: 'Portugal', img: 'flags/pt.webp' },
    { name: 'Greece', img: 'flags/gr.webp' },
    { name: 'Poland', img: 'flags/pl.webp' },
    { name: 'Czech Republic', img: 'flags/cz.webp' },
    { name: 'Hungary', img: 'flags/hu.webp' },
    { name: 'Slovakia', img: 'flags/sk.webp' },
    { name: 'Slovenia', img: 'flags/si.webp' },
    { name: 'Croatia', img: 'flags/hr.webp' },
    { name: 'Bulgaria', img: 'flags/bg.webp' },
    { name: 'Romania', img: 'flags/ro.webp' },
    { name: 'Serbia', img: 'flags/rs.webp' },
    { name: 'Montenegro', img: 'flags/me.webp' },
    { name: 'North Macedonia', img: 'flags/mk.webp' },
    { name: 'Albania', img: 'flags/al.webp' },
    { name: 'Bosnia and Herzegovina', img: 'flags/ba.webp' },
    { name: 'Estonia', img: 'flags/ee.webp' },
    { name: 'Latvia', img: 'flags/lv.webp' },
    { name: 'Lithuania', img: 'flags/lt.webp' },
    { name: 'Ukraine', img: 'flags/ua.webp' },
    { name: 'Moldova', img: 'flags/md.webp' },
    { name: 'Belarus', img: 'flags/by.webp' },
    { name: 'Russia', img: 'flags/ru.webp' },
    { name: 'Turkey', img: 'flags/tr.webp' },
    { name: 'Cyprus', img: 'flags/cy.webp' },
    { name: 'Iceland', img: 'flags/is.webp' },
    { name: 'Liechtenstein', img: 'flags/li.webp' },
    { name: 'Monaco', img: 'flags/mc.webp' },
    { name: 'San Marino', img: 'flags/sm.webp' },
    { name: 'Vatican City', img: 'flags/va.webp' },
];

    const maxPairs = 12;
    let cardsArray = [];
    let currentPlayer = 1;
    let player1Score = 0;
    let player2Score = 0;
    let isTwoPlayerMode = false;

    function selectRandomPairs() {
        const shuffled = [...allCards].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, maxPairs);
    }

    function createCardsArray() {
        const selectedPairs = selectRandomPairs();
        cardsArray = [];
        selectedPairs.forEach(pair => {
            cardsArray.push({ ...pair, type: 'name' });
            cardsArray.push({ ...pair, type: 'flag' });
        });
    }
    const board = document.getElementById('game-board');
    const winMessage = document.getElementById('win-message');
    const restartBtn = document.getElementById('restart-btn');
    const currentPlayerElement = document.getElementById('current-player');
    const switchTurnBtn = document.getElementById('switch-turn-btn');
    const returnToModeBtn = document.getElementById('return-to-mode-btn');
    const modeSelection = document.getElementById('mode-selection');
    const status = document.getElementById('status');
    const singlePlayerBtn = document.getElementById('single-player-btn');
    const twoPlayerBtn = document.getElementById('two-player-btn');
    let firstCard, secondCard;
    let lockBoard = false;
    let matchedPairs = 0;

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function createBoard() {
        createCardsArray();
        shuffle(cardsArray);
        board.innerHTML = '';
        cardsArray.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.classList.add('card');
            cardElement.dataset.name = card.name;
            cardElement.dataset.type = card.type;
            cardElement.innerHTML = `
                <div class="card-face front"></div>
                <div class="card-face back">${card.type === 'name' ? card.name : `<img src="${card.img}" alt="${card.name}">`}</div>
                <div class="animation-overlay"></div>
            `;
            cardElement.addEventListener('click', flipCard);
            board.appendChild(cardElement);
        });
    }

    function flipCard() {
        if (lockBoard) return;
        if (this === firstCard) return;

        this.classList.add('flipped');

        if (!firstCard) {
            firstCard = this;
            return;
        }

        secondCard = this;
        lockBoard = true;

        checkForMatch();
    }
    function checkForMatch() {
        const isMatch = firstCard.dataset.name === secondCard.dataset.name &&
                        firstCard.dataset.type !== secondCard.dataset.type;

        if (isMatch) {
            disableCards();
            updateScore();
        } else {
            unflipCards();
        }
    }

    function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);

        firstCard.classList.add('correct');
        secondCard.classList.add('correct');

        matchedPairs++;
        resetBoard();

        if (matchedPairs === maxPairs) {
            setTimeout(showWinMessage, 500);
        }
    }

    function updateScore() {
        if (isTwoPlayerMode) {
            if (currentPlayer === 1) {
                player1Score++;
            } else {
                player2Score++;
            }
        }
    }

    function unflipCards() {
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            resetBoard();
        }, 1000);
    }

    function resetBoard() {
        [firstCard, secondCard, lockBoard] = [null, null, false];
        if (isTwoPlayerMode) {
            switchTurn();
        }
    }
function createConfetti() {
    const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548'];

    function createPiece() {
        const piece = document.createElement('div');
        piece.classList.add('confetti');
        piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        piece.style.width = Math.random() * 20 + 'px';
        piece.style.height = Math.random() * 20 + 'px';
        piece.style.left = (Math.random() * window.innerWidth) + 'px';
        piece.style.top = '-20px';
        piece.style.animationDuration = '3s'; // Set animation duration to 3 seconds
        document.body.appendChild(piece);
        piece.addEventListener('animationend', function() {
            piece.parentNode.removeChild(piece);
        });
    }

    // Adjust the number of confetti pieces
    const totalPieces = 700;
    const interval = 5; // milliseconds

    let i = 0;
    let intervalId = setInterval(function() {
        createPiece();
        i++;
        if (i >= totalPieces) {
            clearInterval(intervalId);
        }
    }, interval);
}

    function showWinMessage() {
    let winnerMessage = '';

    if (isTwoPlayerMode) {
        if (player1Score > player2Score) {
            winnerMessage = `
                <h2>🎉 Player 1 wins! 🎉</h2>
                <img src="Bilder/win.png" alt="Player 1 Trophy" class="win-image"><br><button id="restart-btn">Restart Game</button>
            `;
        } else if (player2Score > player1Score) {
            winnerMessage = `
                <h2>🎉 Player 2 wins! 🎉</h2>
                <img src="Bilder/win.png" alt="Player 2 Trophy" class="win-image"><br><button id="restart-btn">Restart Game</button>
            `;
        } else {
            winnerMessage = `
                <h2>🤝 It\'s a tie! 🤝</h2><br>
            <br><button id="restart-btn">Restart Game</button>`;
        }
    } else {
        winnerMessage = `
            <h2>🏆 Congratulations, you won! 🏆</h2>
            <img src="Bilder/win.png" alt="Winner" class="win-image"><br>
            <button id="restart-btn">Restart Game</button>
        `;
    }

    document.getElementById('win-message').innerHTML = winnerMessage;
    winMessage.classList.remove('hidden');
      createConfetti();
}

    function restartGame() {
        matchedPairs = 0;
        player1Score = 0;
        player2Score = 0;
        currentPlayer = 1;
        isTwoPlayerMode = false;
        currentPlayerElement.textContent = 'Player 1';
        status.classList.add('hidden');
        modeSelection.classList.remove('hidden');
        winMessage.classList.add('hidden');
        board.classList.add('hidden');
    }

    function startGame(mode) {
        isTwoPlayerMode = mode === 'two-player';
        modeSelection.classList.add('hidden');
        status.classList.remove('hidden');
        board.classList.remove('hidden');
        createBoard();
    }
  function switchTurn() {
  currentPlayer = (currentPlayer === 1) ? 2 : 1;
  currentPlayerElement.textContent = `Player ${currentPlayer}`;
}

// Attach event listener
switchTurnBtn.addEventListener('click', switchTurn);
function returnToModeSelection() {
  restartGame();
}

// Attach event listener
returnToModeBtn.addEventListener('click', returnToModeSelection);

    singlePlayerBtn.addEventListener('click', () => startGame('single-player'));
    twoPlayerBtn.addEventListener('click', () => startGame('two-player'));
    restartBtn.addEventListener('click', restartGame);
    switchTurnBtn.addEventListener('click', switchTurn);
    returnToModeBtn.addEventListener('click', returnToModeSelection);

    // Initialize game
    restartGame();
});
