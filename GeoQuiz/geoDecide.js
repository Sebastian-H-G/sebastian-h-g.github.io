// ============================================================================
// Geography Quiz Game - Game Logic Module
// ============================================================================

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = 'https://pzyzdmndotuvbvfhxwad.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6eXpkbW5kb3R1dmJ2Zmh4d2FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4MDUxNzIsImV4cCI6MjA2MjM4MTE3Mn0.UpltfEmKUgYINeWP4aHPOkYT8cOx6nVi0cdE5bMAjqA';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);


const TOTAL_ROUNDS = 15;
const CATEGORIES = [
  'population',
  'area_sq_km',
  'passport_power',
  'forest_cover',
  'unesco_sites',
  'olympic_medals',
  'gdp_per_capita',
  'highest_point',
  'coastline',
  'borders'
];

const categoryDisplayNames = {
  population: '👥 Population',
  area_sq_km: '🌍 Land Area',
  passport_power: '🛂 Passport Power',
  forest_cover: '🌲 Forest Cover',
  unesco_sites: '🏛️ UNESCO Sites',
  olympic_medals: '🏅 Olympic Medals',
  gdp_per_capita: '💰 GDP per Capita',
  highest_point: '⛰️ Highest Point',
  coastline: '🌊 Coastline',
  borders: '🗺️ Number of Borders'
};

let gameState = {
  currentCategory: null,
  allCountries: [],
  usedCountries: new Set(),
  currentRound: 1,
  score: 0,
  topCountry: null,
  bottomCountry: null,
  gameActive: false,
  buttonsDisabled: false
};

// ============================================================================
// Initialization
// ============================================================================

async function initializeGeographyQuiz() {
  try {
    // Fetch all countries from Supabase
    const { data, error } = await supabase.from('countries')
        .select('*')
        .eq("country", true);
    
    if (error) {
      console.error('Error fetching countries:', error);
      showError('Failed to load countries. Please try again.');
      return;
    }

    gameState.allCountries = data;
    startNewGame();
  } catch (error) {
    console.error('Quiz initialization error:', error);
    showError('Failed to initialize game.');
  }
}

function startNewGame() {
  // Select random category
  gameState.currentCategory = CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)];
  gameState.usedCountries.clear();
  gameState.currentRound = 1;
  gameState.score = 0;
  gameState.gameActive = true;
  gameState.buttonsDisabled = false;

  updateCategoryDisplay();
  updateScoreDisplay();
  clearFeedback();
  setupEventListeners();
  nextRound();
}

// ============================================================================
// Game Logic
// ============================================================================

function getValidCountries(excludeValue = null) {
  return gameState.allCountries.filter(country => {
    if (gameState.usedCountries.has(country.abbreviation)) return false;

    // For borders category, ensure borders array is not empty
    if (gameState.currentCategory === 'borders') {
      if (!country.borders || !Array.isArray(country.borders) || country.borders.length === 0) return false;
    }

    // Exclude countries with the specified value if provided
    if (excludeValue !== null) {
      const value = getCountryValue(country);
      if (value === excludeValue) return false;
    }

    return true;
  });
}

function selectRandomCountry(excludeValue = null) {
  const validCountries = getValidCountries(excludeValue);
  if (validCountries.length === 0) {
    return null; // No more countries available
  }
  const country = validCountries[Math.floor(Math.random() * validCountries.length)];
  gameState.usedCountries.add(country.abbreviation);
  return country;
}

function getCountryValue(country) {
  const category = gameState.currentCategory;

  if (category === 'borders') {
    return country.borders ? country.borders.length : 0;
  }

  const value = country[category];
  return value !== null && value !== undefined ? value : 0;
}

function nextRound() {
  if (gameState.currentRound > TOTAL_ROUNDS) {
    endGame(true);
    return;
  }

  // If it's the first round, select both countries with different values
  if (gameState.currentRound === 1) {
    const topCountry = selectRandomCountry();
    if (!topCountry) {
      endGame(true);
      return;
    }
    const topValue = getCountryValue(topCountry);
    const bottomCountry = selectRandomCountry(topValue);
    if (!bottomCountry) {
      endGame(true);
      return;
    }
    gameState.topCountry = topCountry;
    gameState.bottomCountry = bottomCountry;
  } else {
    // Top becomes bottom
    gameState.bottomCountry = gameState.topCountry;
    // Select new top with different value from bottom
    const bottomValue = getCountryValue(gameState.bottomCountry);
    const topCountry = selectRandomCountry(bottomValue);
    if (!topCountry) {
      endGame(true);
      return;
    }
    gameState.topCountry = topCountry;
  }

  gameState.buttonsDisabled = false;

  renderRound();
}

function handleGuess(selectedCard) {
  if (gameState.buttonsDisabled || !gameState.gameActive) return;

  gameState.buttonsDisabled = true;

  const topValue = getCountryValue(gameState.topCountry);
  const bottomValue = getCountryValue(gameState.bottomCountry);
  const topIsHigher = topValue > bottomValue;
  const playerChoseTop = selectedCard === 'top';
  const playerIsCorrect = (playerChoseTop && topIsHigher) || (!playerChoseTop && !topIsHigher);

  // Reveal the hidden value
  const topValueElement = document.getElementById('topCountryValue');
  if (topValueElement) {
    topValueElement.textContent = formatValueWithUnit(topValue, gameState.currentCategory);
    topValueElement.classList.add('revealed');
  }

  if (playerIsCorrect) {
    gameState.score++;
    showFeedback('✓ Correct! Tap the next higher country.', 'correct');
    updateScoreDisplay();
    setTimeout(() => {
      gameState.currentRound++;
      updateRoundDisplay();
      nextRound();
    }, 1200);
  } else {
    showFeedback('✗ Incorrect! Game Over', 'incorrect');
    setTimeout(() => {
      endGame(false);
    }, 1500);
  }
}

function endGame(won) {
  gameState.gameActive = false;
  showGameOverModal(gameState.score, won);
}

// ============================================================================
// UI Rendering
// ============================================================================

function renderRound() {
  const topCountry = gameState.topCountry;
  const bottomCountry = gameState.bottomCountry;
  const bottomValue = getCountryValue(bottomCountry);

  // Render top country
  document.getElementById('topCountryName').textContent = topCountry.name;
  document.getElementById('topCountryFlag').src = topCountry.flag;
  document.getElementById('topCountryValue').textContent = '?';
  document.getElementById('topCountryValue').classList.remove('revealed');

  // Render bottom country
  document.getElementById('bottomCountryName').textContent = bottomCountry.name;
  document.getElementById('bottomCountryFlag').src = bottomCountry.flag;
  document.getElementById('bottomCountryValue').textContent = formatValueWithUnit(bottomValue, gameState.currentCategory);

  updateRoundDisplay();
}

function updateCategoryDisplay() {
  const categoryElement = document.getElementById('quizCategory');
  if (categoryElement) {
    categoryElement.textContent = categoryDisplayNames[gameState.currentCategory] || gameState.currentCategory;
  }
}

function updateScoreDisplay() {
  const scoreElement = document.getElementById('scoreCounter');
  if (scoreElement) {
    scoreElement.textContent = gameState.score;
  }
}

function updateRoundDisplay() {
  const roundElement = document.getElementById('roundCounter');
  if (roundElement) {
    roundElement.innerHTML = `
  <span>${gameState.currentRound}</span>
  <span>/</span>
  <span>${TOTAL_ROUNDS}</span>
`;
  }
}

function clearFeedback() {
  const feedbackElement = document.getElementById('quizFeedback');
  if (feedbackElement) {
    feedbackElement.textContent = '';
    feedbackElement.className = 'quiz-feedback';
  }
}

function showFeedback(message, type) {
  const feedbackElement = document.getElementById('quizFeedback');
  if (feedbackElement) {
    feedbackElement.textContent = message;
    feedbackElement.className = `quiz-feedback ${type}`;
  }
}

function showError(message) {
  showFeedback(message, 'incorrect');
}

function formatValue(value) {
  if (typeof value !== 'number') return '-';

  if (value >= 1000000000) {
    return (value / 1000000000).toFixed(1) + 'B';
  }
  if (value >= 1000000) {
    return (value / 1000000).toFixed(1) + 'M';
  }
  if (value >= 1000) {
    return (value / 1000).toFixed(1) + 'K';
  }

  return value.toFixed(0);
}

function formatValueWithUnit(value, category) {
  const formatted = formatValue(value);
  const units = {
    population: ' people',
    area_sq_km: ' km²',
    passport_power: '',
    forest_cover: '%',
    unesco_sites: ' sites',
    olympic_medals: ' medals',
    gdp_per_capita: ' $',
    highest_point: ' m',
    coastline: ' km',
    borders: ' borders'
  };
  return formatted + (units[category] || '');
}

function showGameOverModal(finalScore, won) {
  // Create a modal overlay
  const modal = document.createElement('div');
  modal.className = 'quiz-game-over-modal';
  modal.innerHTML = `
    <div class="quiz-game-over-content">
      <div class="quiz-game-over-title">${won ? '🎉 Game Complete!' : '💔 Game Over'}</div>
      <div class="quiz-game-over-score">Score: <span>${finalScore}/15</span></div>
      <div class="quiz-game-over-message">
        ${won ? 'You completed all 15 rounds!' : 'You made it to round ' + gameState.currentRound + '.'}
      </div>
      <button class="quiz-game-over-btn" id="playAgainQuizBtn">Play Again</button>
      <button class="quiz-game-over-btn secondary" id="backToHomeQuizBtn">Back to Home</button>
    </div>
  `;

  document.body.appendChild(modal);

  document.getElementById('playAgainQuizBtn').addEventListener('click', () => {
    modal.remove();
    startNewGame();
  });

  document.getElementById('backToHomeQuizBtn').addEventListener('click', () => {
    modal.remove();
    navigateToHome();
  });

  // Trigger animation
  setTimeout(() => modal.classList.add('active'), 10);
}

// ============================================================================
// Event Listeners
// ============================================================================

function setupEventListeners() {
  const topCountryCard = document.getElementById('topCountryCard');
  const bottomCountryCard = document.getElementById('bottomCountryCard');
  const backBtn = document.getElementById('quizBackBtn');

  if (topCountryCard) {
    topCountryCard.onclick = () => handleGuess('top');
    topCountryCard.onkeydown = (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        handleGuess('top');
      }
    };
  }
  if (bottomCountryCard) {
    bottomCountryCard.onclick = () => handleGuess('bottom');
    bottomCountryCard.onkeydown = (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        handleGuess('bottom');
      }
    };
  }
  if (backBtn) {
    backBtn.onclick = () => navigateToHome();
  }
}

// ============================================================================
// Navigation
// ============================================================================

function navigateToHome() {
  gameState.gameActive = false;
  // Dispatch custom event or call your existing navigation function
  window.dispatchEvent(new CustomEvent('navigateToHome'));
}

// ============================================================================
// Export for external use
// ============================================================================

export { initializeGeographyQuiz, gameState };