// script.js
document.addEventListener('DOMContentLoaded', () => {const allCards = [
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
