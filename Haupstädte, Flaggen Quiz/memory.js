// script.js
document.addEventListener('DOMContentLoaded', () => {const allCards = [
    { name: 'Germany', img: 'flags/de.png' },
    { name: 'France', img: 'flags/fr.png' },
    { name: 'Italy', img: 'flags/it.png' },
    { name: 'Spain', img: 'flags/es.png' },
    { name: 'United Kingdom', img: 'flags/gb.png' },
    { name: 'Netherlands', img: 'flags/nl.png' },
    { name: 'Belgium', img: 'flags/be.png' },
    { name: 'Switzerland', img: 'flags/ch.png' },
    { name: 'Austria', img: 'flags/at.png' },
    { name: 'Sweden', img: 'flags/se.png' },
    { name: 'Norway', img: 'flags/no.png' },
    { name: 'Denmark', img: 'flags/dk.png' },
    { name: 'Finland', img: 'flags/fi.png' },
    { name: 'Ireland', img: 'flags/ie.png' },
    { name: 'Portugal', img: 'flags/pt.png' },
    { name: 'Greece', img: 'flags/gr.png' },
    { name: 'Poland', img: 'flags/pl.png' },
    { name: 'Czech Republic', img: 'flags/cz.png' },
    { name: 'Hungary', img: 'flags/hu.png' },
    { name: 'Slovakia', img: 'flags/sk.png' },
    { name: 'Slovenia', img: 'flags/si.png' },
    { name: 'Croatia', img: 'flags/hr.png' },
    { name: 'Bulgaria', img: 'flags/bg.png' },
    { name: 'Romania', img: 'flags/ro.png' },
    { name: 'Serbia', img: 'flags/rs.png' },
    { name: 'Montenegro', img: 'flags/me.png' },
    { name: 'North Macedonia', img: 'flags/mk.png' },
    { name: 'Albania', img: 'flags/al.png' },
    { name: 'Bosnia and Herzegovina', img: 'flags/ba.png' },
    { name: 'Estonia', img: 'flags/ee.png' },
    { name: 'Latvia', img: 'flags/lv.png' },
    { name: 'Lithuania', img: 'flags/lt.png' },
    { name: 'Ukraine', img: 'flags/ua.png' },
    { name: 'Moldova', img: 'flags/md.png' },
    { name: 'Belarus', img: 'flags/by.png' },
    { name: 'Russia', img: 'flags/ru.png' },
    { name: 'Turkey', img: 'flags/tr.png' },
    { name: 'Cyprus', img: 'flags/cy.png' },
    { name: 'Iceland', img: 'flags/is.png' },
    { name: 'Liechtenstein', img: 'flags/li.png' },
    { name: 'Monaco', img: 'flags/mc.png' },
    { name: 'San Marino', img: 'flags/sm.png' },
    { name: 'Vatican City', img: 'flags/va.png' },
];

    const maxPairs = 12;
    let cardsArray = [];

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

    function unflipCards() {
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            resetBoard();
        }, 1500);
    }

    function resetBoard() {
        [firstCard, secondCard, lockBoard] = [null, null, false];
    }

    function showWinMessage() {
        winMessage.classList.remove('hidden');
    }

    function restartGame() {
        matchedPairs = 0;
        winMessage.classList.add('hidden');
        createBoard();
    }

    restartBtn.addEventListener('click', restartGame);

    createBoard();
});
