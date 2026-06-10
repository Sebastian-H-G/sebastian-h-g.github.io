import { saveTriviaResult } from './saveTriviaResults.js';

const game_id = "7d5e5850-518b-4c07-91e7-aecde9de0490";
let gave_up = false;
let mistakes = 0;

function triggerVibration(pattern = 50) {
  // ✅ Standard vibration (Android, etc.)
  if ("vibrate" in navigator) {
    navigator.vibrate(pattern);
  }

  // ⚠️ Safari iOS hack (toggle checkbox to trigger haptic)
  const el = document.getElementById("hapticTrigger");
  if (el) {
    el.checked = !el.checked;
  }
}

// Attach to navbar buttons
document.getElementById("navHome").addEventListener("click", () => {
  triggerVibration(40); // short tap
});

document.getElementById("navStats").addEventListener("click", () => {
  triggerVibration([20, 30, 20]); // double pulse
});

  // --- SPA Navigation State ---
  const mainContent = document.getElementById('mainContent');
  const bottomNav = document.getElementById('bottomNav');
  const templates = {
    start: document.getElementById('startScreen'),
    guess: document.getElementById('guessCountryGame'),
    geo: document.getElementById('geoDicidePage'),
    stats: document.getElementById('statsPage')
  };

  // Render the start screen
  function showStartScreen() {
    mainContent.innerHTML = '';
    mainContent.appendChild(templates.start.content.cloneNode(true));
    bottomNav.style.display = 'flex';
    document.body.classList.remove('game-mode');
    // set home nav active
    setActiveNav('navHome');
    // Add event listeners for game selection
    setTimeout(() => {
      document.getElementById('gameGuessCountry').onclick = showGuessCountryGame;
      document.getElementById('gameGeoDecide').onclick = showGeoDecide;
    }, 0);
  }

  // Render Guess the Country game
  function showGuessCountryGame() {
    mainContent.innerHTML = '';
    // Hide navbar
    bottomNav.style.display = 'none';
    // clear active nav when in-game
    setActiveNav(null);
    // Render the game container
    const gameDiv = document.createElement('div');
    gameDiv.id = 'guessCountryGameContainer';
    // Clone the template markup and append
    const template = document.getElementById('guessCountryGameMarkup');
    if (template) {
      gameDiv.appendChild(template.content.cloneNode(true));
    }
    mainContent.appendChild(gameDiv);
    // Add event for back button
    setTimeout(() => {
      document.getElementById('gtcBackBtn').onclick = showStartScreen;
    }, 0);
    // Re-initialize the game logic
    setTimeout(initGuessCountryGame, 0);
  }

  // Render GeoDecide game
  async function showGeoDecide() {
    mainContent.innerHTML = '';
    bottomNav.style.display = 'none';
    document.body.classList.add('game-mode');
    // clear active nav when in-game
    setActiveNav(null);
    mainContent.appendChild(templates.geo.content.cloneNode(true));
    // Initialize the GeoDecide game
    setTimeout(async () => {
      const { initializeGeographyQuiz } = await import('./geoDecide.js');
      await initializeGeographyQuiz();
    }, 0);
  }

  // Render Stats page
  function showStats() {
    mainContent.innerHTML = '';
    mainContent.appendChild(templates.stats.content.cloneNode(true));
    bottomNav.style.display = 'flex';
    document.body.classList.remove('game-mode');
    // set stats nav active
    setActiveNav('navStats');
  }

  // Navbar event listeners: update URL hash so links can deep-link
  document.getElementById('navHome').onclick = () => { location.hash = '#home'; };
  document.getElementById('navStats').onclick = () => { location.hash = '#stats'; };

  // helper to set active nav button (id) or clear (null)
  function setActiveNav(id) {
    try {
      const btns = bottomNav.querySelectorAll('button');
      btns.forEach(b => {
        if (id && b.id === id) {
          b.classList.add('active');
          b.setAttribute('aria-pressed', 'true');
        } else {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        }
      });
    } catch (e) { /* ignore */ }
  }

  // Routing: map location.hash to pages so direct links work
  function routeFromHash() {
    const h = (location.hash || '').replace('#', '').toLowerCase();
    if (h === 'guess') {
      showGuessCountryGame();
    } else if (h === 'geo') {
      showGeoDecide();
    } else if (h === 'stats') {
      showStats();
    } else {
      // default/home
      showStartScreen();
    }
  }

  // handle back/forward and initial load
  window.addEventListener('hashchange', routeFromHash);
  // route once on load
  routeFromHash();

  // Handle navigation from GeoDecide game
  window.addEventListener('navigateToHome', () => {
    showStartScreen();
  });

  // --- Guess the Country Game Logic (moved into function for SPA) ---
  let SUPABASE_URL = "https://pzyzdmndotuvbvfhxwad.supabase.co";
  let SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6eXpkbW5kb3R1dmJ2Zmh4d2FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4MDUxNzIsImV4cCI6MjA2MjM4MTE3Mn0.UpltfEmKUgYINeWP4aHPOkYT8cOx6nVi0cdE5bMAjqA";
  let supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
  let targetCountry = null;
  let guessedAbbreviations = [];
  let allCountryNames = [];
  let germanToEnglish = {};
  let allGermanNames = [];
  let englishByGerman = {};
  let guessCount = 0;

  function initGuessCountryGame() {
    // Reset state
    targetCountry = null;
    guessedAbbreviations = [];
    allCountryNames = [];
    germanToEnglish = {};
    allGermanNames = [];
    englishByGerman = {};
    guessCount = 0;
    // Load target and autocomplete
    loadTarget();
    // Setup input listeners
    const guessInput = document.getElementById("guessInput");
    const suggestionsDiv = document.getElementById("suggestions");
    guessInput.addEventListener("input", onGuessInput);
    guessInput.addEventListener("blur", function() {
      setTimeout(() => { suggestionsDiv.innerHTML = ""; }, 120);
    });
    guessInput.addEventListener("keydown", function(e) {
      if (e.key === "Enter") submitGuess(); suggestionsDiv.innerHTML = "";
    });
    // Give Up button logic
    const giveUpBtn = document.getElementById('giveUpBtn');
    if (giveUpBtn) {
      giveUpBtn.onclick = function() {
        if (!targetCountry) return;
        // Show the win modal with a "gave up" message instead of an alert
        gave_up = true;
        onQuizComplete();
        showWinModal(targetCountry, guessCount, true);
      };
    }
  }

  // --- Original game logic (adapted for SPA) ---
  async function loadTarget() {
    try {
      const { count, error: countError } = await supabaseClient
        .from("countries")
        .select("*", { count: "exact", head: true })
        .eq("country", true);
      if (countError) throw countError;
      const randomIndex = Math.floor(Math.random() * count);
      const { data, error } = await supabaseClient
        .from("countries")
        .select("name, continent, avg_temp, population, area_sq_km, borders, flag, landlocked, abbreviation")
        .eq("country", true)
        .range(randomIndex, randomIndex)
        .single();
      if (error) throw error;
      targetCountry = data;
      // Fetch all country names, german names, and different spellings for autocomplete
      const { data: allNames, error: namesError } = await supabaseClient
        .from("countries")
        .select("name, german_name, different_spellings")
        .eq("country", true);
      if (!namesError && Array.isArray(allNames)) {
        allCountryNames = allNames.map(row => row.name);
        allGermanNames = allNames.map(row => row.german_name || "");
        germanToEnglish = {};
        englishByGerman = {};
        window.countrySpellings = allNames.map(row => {
          let spellings = [row.name];
          if (row.german_name) spellings.push(row.german_name);
          if (row.different_spellings) {
            let extra = row.different_spellings.split(/[,;]/).map(s => s.trim()).filter(Boolean);
            spellings = spellings.concat(extra);
          }
          return { name: row.name, spellings };
        });
        allNames.forEach(row => {
          if (row.german_name && row.name) {
            germanToEnglish[row.german_name.toLowerCase()] = row.name;
            englishByGerman[row.german_name.toLowerCase()] = row.name;
          }
        });
      }
    } catch (err) {
      console.error("Error loading target:", err);
    }
  }

  function normalizeString(str) {
    return str ? str.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase() : "";
  }

  function onGuessInput() {
    const guessInput = document.getElementById("guessInput");
    const suggestionsDiv = document.getElementById("suggestions");
    const value = normalizeString(guessInput.value.trim());
    suggestionsDiv.innerHTML = "";
    if (!value || allCountryNames.length === 0) return;
    if (germanToEnglish[value]) {
      guessInput.value = germanToEnglish[value];
    }
    let startsWithMatches = [];
    let containsMatches = [];
    let secondaryMatches = [];
    if (window.countrySpellings) {
      for (const entry of window.countrySpellings) {
        const mainNorm = normalizeString(entry.name);
        if (mainNorm.startsWith(value)) {
          startsWithMatches.push(entry.name);
        } else if (mainNorm.includes(value)) {
          containsMatches.push(entry.name);
        } else if (entry.spellings.some(sp => sp !== entry.name && normalizeString(sp).includes(value))) {
          secondaryMatches.push(entry.name);
        }
      }
    }
    const allMatches = startsWithMatches.concat(containsMatches, secondaryMatches);
    if (allMatches.length === 0) return;
    const list = document.createElement("div");
    list.className = 'suggestions-list';
    allMatches.slice(0, 10).forEach(name => {
      const item = document.createElement("div");
      item.innerText = name;
      item.className = 'suggestion-item';
      item.addEventListener("mousedown", function(e) {
        e.preventDefault();
        guessInput.value = name;
        suggestionsDiv.innerHTML = "";
        // Submit the selected suggestion; do NOT re-focus the input
        submitGuess();
      });
      list.appendChild(item);
    });
    if (list.lastChild) list.lastChild.style.borderBottom = "none";
    suggestionsDiv.appendChild(list);
  }

  async function submitGuess() {
    const guessInput = document.getElementById("guessInput");
    const suggestionsDiv = document.getElementById("suggestions");
    const guessNameRaw = guessInput.value.trim();
    if (!guessNameRaw) return;
    try {
      const { data: possible, error } = await supabaseClient
        .from("countries")
        .select("name, continent, avg_temp, population, area_sq_km, borders, flag, landlocked, abbreviation")
        .eq("country", true);
      if (error || !possible || !Array.isArray(possible)) {
        // alert("Country not found!");
        return;
      }
      const guess = possible.find(row => normalizeString(row.name) === normalizeString(guessNameRaw));
      if (!guess) {
        // alert("Country not found!");
        return;
      }
      if (guessedAbbreviations.includes(guess.abbreviation)) {
        alert("You already guessed this country!");
        return;
      }
      guessedAbbreviations.push(guess.abbreviation);
      renderResult(guess);
      // After a successful (valid) submission, clear and blur the input
      try {
        if (guessInput) { guessInput.value = ''; guessInput.blur(); }
        if (suggestionsDiv) { suggestionsDiv.innerHTML = ''; }
      } catch (e) { /* ignore focus-related errors */ }
    } catch (err) {
      console.error(err);
    }
  }

  function compareNumeric(guessVal, targetVal) {
    if (guessVal === targetVal) return "green";
    return guessVal < targetVal ? "neutral arrow-up" : "neutral arrow-down";
  }

  function renderResult(guess) {
    guessCount++;
    const cardGroup = document.createElement("div");
    cardGroup.className = "guess-card";
    const inner = document.createElement("div");
    inner.style.padding = "18px 24px 24px 24px";
    const header = document.createElement("div");
    header.className = "guess-header";
    if (guess.flag) {
      const flagimg = document.createElement("img");
      flagimg.src = guess.flag;
      flagimg.alt = "Flag";
      flagimg.style.display = "inline-flex";
      flagimg.style.alignItems = "center";
      flagimg.style.justifyContent = "center";
      flagimg.style.width = "50px";
      flagimg.style.maxHeight = "60px";
      flagimg.style.height = "auto";
      flagimg.style.maxHeight = "60px";
      flagimg.style.border = "1px solid #ccc";
      flagimg.style.marginRight = "12px";
      header.appendChild(flagimg);
    }
    const nameSpan = document.createElement("span");
    nameSpan.className = "guess-title";
    nameSpan.innerText = guess.name;
    header.appendChild(nameSpan);
    const numSpan = document.createElement("span");
    numSpan.className = "guess-number";
    numSpan.innerText = `#${guessCount}`;
    header.appendChild(numSpan);
    inner.appendChild(header);
    const grid = document.createElement("div");
    grid.className = "stats-grid";
    const allGreen = guess.name === targetCountry.name;
    const cardData = [
      ["CONTINENT", guess.continent, allGreen ? "green" : (guess.continent === targetCountry.continent ? "green" : "red")],
      ["LANDLOCKED", guess.landlocked ? "Yes" : "No", allGreen ? "green" : (guess.landlocked === targetCountry.landlocked ? "green" : "red")],
      ["NEIGHBOR", (Array.isArray(targetCountry.borders) ? targetCountry.borders.includes(guess.abbreviation) : false) ? "Yes" : "No", allGreen ? "green" : ((Array.isArray(targetCountry.borders) ? targetCountry.borders.includes(guess.abbreviation) : false) ? "green" : "red")],
      ["AVG TEMP", formatTemp(guess.avg_temp), allGreen ? "green" : compareNumeric(guess.avg_temp, targetCountry.avg_temp)],
      ["POPULATION", formatPopulation(guess.population), allGreen ? "green" : compareNumeric(guess.population, targetCountry.population)],
      ["LAND AREA", formatArea(guess.area_sq_km), allGreen ? "green" : compareNumeric(guess.area_sq_km, targetCountry.area_sq_km)]
    ];
    const cardEls = cardData.map(([label, value, className]) => {
      const el = createCard(label, value, className);
      el.classList.add('card-appear');
      grid.appendChild(el);
      return el;
    });
    inner.appendChild(grid);
    cardGroup.appendChild(inner);
    const resultsEl = document.getElementById("results");
    // Trigger a subtle pop animation on the results container
    if (resultsEl) {
      resultsEl.classList.remove('results-pop');
      // Force reflow to restart animation
      void resultsEl.offsetWidth;
      resultsEl.classList.add('results-pop');
      resultsEl.prepend(cardGroup);
      setTimeout(() => { resultsEl.classList.remove('results-pop'); }, 500);
    } else {
      document.getElementById("results").prepend(cardGroup);
    }
    if (allGreen) {
      requestAnimationFrame(() => {
        cardEls.forEach((el, i) => {
          setTimeout(() => {
            el.classList.remove('card-appear', 'card-appear-active');
            el.classList.add('card-wave');
          }, 80 * i);
        });
      });
    } else {
      requestAnimationFrame(() => {
        cardEls.forEach((el, i) => {
          setTimeout(() => {
            el.classList.add('card-appear-active');
          }, 120 * i);
        });
      });
    }
    if (guess.name === targetCountry.name) {
      setTimeout(() => {
        showWinModal(targetCountry, guessCount);
        onQuizComplete();
      }, 1800);
    }
  }

  function showWinModal(country, guesses) {
    createConfetti();
    // Animate win page in. If called with gaveUp=true, show a different message.
    // The optional third parameter (gaveUp) is passed via arguments.
    const gaveUp = arguments.length >= 3 && !!arguments[2];
    const winPage = document.getElementById('winPage');
    // Remember previous body overflow so we can restore it when modal closes
    try {
      const prevOverflow = document.body.style.overflow || '';
      winPage.dataset.prevOverflow = prevOverflow;
    } catch (e) { /* ignore */ }
    winPage.classList.add('active');
    // Disable page scrolling while modal is active
    try { document.body.style.overflow = 'hidden'; } catch (e) { /* ignore */ }
    // Set the flag image src
    const img = document.getElementById('winFlagImg');
    if (img) {
      img.src = country.flag || '';
      img.alt = country.name + ' flag';
    }
    // Update texts depending on gaveUp
    if (gaveUp) {
      document.getElementById('winText').textContent = `You gave up — the answer was ${country.name}.`;
      document.getElementById('winGuesses').textContent = `You gave up after ${guesses} guess${guesses === 1 ? '' : 'es'}.`;
    } else {
      document.getElementById('winText').textContent = `You guessed ${country.name}!`;
      document.getElementById('winGuesses').textContent = `in ${guesses} guess${guesses === 1 ? '' : 'es'} — congrats!`;
    }
    // Play again button logic — use local query for guessInput to avoid relying on outer scope
    const playAgainBtn = document.getElementById('playAgainBtn');
    playAgainBtn.onclick = function() {
      winPage.classList.remove('active');
      setTimeout(() => {
        // Restore previous overflow value (if any)
        try {
          const prev = winPage.dataset.prevOverflow || '';
          document.body.style.overflow = prev;
          delete winPage.dataset.prevOverflow;
        } catch (e) { /* ignore */ }
        document.getElementById('results').innerHTML = '';
        guessedAbbreviations = [];
        guessCount = 0;
        loadTarget();
        const guessInputEl = document.getElementById('guessInput');
        if (guessInputEl) { guessInputEl.value = ''; guessInputEl.focus(); }
      }, 500);
    };
    // Back button logic
    document.getElementById('winBackBtn').onclick = function() {
      winPage.classList.remove('active');
      setTimeout(() => {
        try {
          const prev = winPage.dataset.prevOverflow || '';
          document.body.style.overflow = prev;
          delete winPage.dataset.prevOverflow;
        } catch (e) { /* ignore */ }
        showStartScreen();
      }, 500);
    };
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
    piece.style.animationDuration = '2s'; // Set animation duration to 3 seconds
    document.body.appendChild(piece);
    piece.addEventListener('animationend', function() {
        piece.parentNode.removeChild(piece);
    });
}

// Adjust the number of confetti pieces
const totalPieces = 800;
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


  function createCard(label, value, className) {
    const div = document.createElement("div");
    div.className = "card " + className;
    const labelDiv = document.createElement("div");
    labelDiv.className = "card-label";
    labelDiv.innerText = label;
    const valueDiv = document.createElement("div");
    valueDiv.className = "card-value";
    valueDiv.style.display = "flex";
    valueDiv.style.alignItems = "center";
    const arrowSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="14" font-weight="bold" height="14" fill="currentColor" viewBox="0 0 256 256" class="shrink-0" style="margin-right:6px;"><path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path></svg>';
    const xSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="14" font-weight="bold" height="14" fill="currentColor" viewBox="0 0 256 256" class="shrink-0" style="margin-right:6px;"><path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"></path></svg>';
    const checkSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="14" font-weight="bold" height="14" fill="currentColor" viewBox="0 0 256 256" class="shrink-0" style="margin-right:6px;"><path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path></svg>';
    const iconValueWrapper = document.createElement("span");
    iconValueWrapper.style.whiteSpace = "nowrap";
    if (className && className.includes("arrow-up")) {
      const upArrow = document.createElement("span");
      upArrow.innerHTML = arrowSVG;
      upArrow.firstChild.style.transform = "rotate(180deg)";
      iconValueWrapper.appendChild(upArrow);
      iconValueWrapper.appendChild(document.createTextNode(value));
    } else if (className && className.includes("arrow-down")) {
      const downArrow = document.createElement("span");
      downArrow.innerHTML = arrowSVG;
      iconValueWrapper.appendChild(downArrow);
      iconValueWrapper.appendChild(document.createTextNode(value));
    } else if (className && className.includes("red")) {
      const xIcon = document.createElement("span");
      xIcon.innerHTML = xSVG;
      iconValueWrapper.appendChild(xIcon);
      iconValueWrapper.appendChild(document.createTextNode(value));
    } else if (className && className.includes("green")) {
      const checkIcon = document.createElement("span");
      checkIcon.innerHTML = checkSVG;
      iconValueWrapper.appendChild(checkIcon);
      iconValueWrapper.appendChild(document.createTextNode(value));
    } else {
      iconValueWrapper.innerText = value;
    }
    valueDiv.appendChild(iconValueWrapper);
    div.appendChild(labelDiv);
    div.appendChild(valueDiv);
    return div;
  }

  function formatTemp(temp) {
    if (temp === undefined || temp === null) return "?";
    return temp.toFixed(1) + "°C";
  }
  function formatPopulation(pop) {
    if (pop === undefined || pop === null) return "?";
    if (pop >= 1_000_000) return (pop / 1_000_000).toFixed(1) + "M";
    if (pop >= 1_000) return Math.round(pop / 1_000) + "K";
    return pop;
  }
  function formatArea(area) {
    if (area === undefined || area === null) return "?";
    if (area >= 1_000_000) return (area / 1_000_000).toFixed(1) + "M";
    if (area >= 1_000) return Math.round(area / 1_000) + "K";
    return area;
  }

  // --- Initial load ---
  showStartScreen();
// Debug helpers — set `targetCountry` manually from the browser console for testing
window.setTargetCountryDirect = function(obj) {
  targetCountry = obj;
  guessedAbbreviations = [];
  guessCount = 0;
  const resEl = document.getElementById('results');
  if (resEl) resEl.innerHTML = '';
  console.log('targetCountry set (direct):', targetCountry);
};

window.setTargetCountryByName = async function(name) {
  if (!name) return console.warn('Provide a country name or abbreviation');
  try {
    // Try exact / case-insensitive match first
    let res = await supabaseClient
      .from('countries')
      .select('name, continent, avg_temp, population, area_sq_km, borders, flag, landlocked, abbreviation')
      .eq('country', true)
      .ilike('name', name)
      .limit(1)
      .single();
    if (res.error || !res.data) {
      // fallback: partial match
      res = await supabaseClient
        .from('countries')
        .select('name, continent, avg_temp, population, area_sq_km, borders, flag, landlocked, abbreviation')
        .eq('country', true)
        .ilike('name', `%${name}%`)
        .limit(1)
        .single();
    }
    if (res && res.data) {
      targetCountry = res.data;
      guessedAbbreviations = [];
      guessCount = 0;
      const resEl = document.getElementById('results');
      if (resEl) resEl.innerHTML = '';
      console.log('targetCountry set (by name):', targetCountry);
      return targetCountry;
    }
    // try abbreviation fallback
    const abbr = String(name).trim().toUpperCase();
    const abbrRes = await supabaseClient
      .from('countries')
      .select('name, continent, avg_temp, population, area_sq_km, borders, flag, landlocked, abbreviation')
      .eq('country', true)
      .eq('abbreviation', abbr)
      .limit(1)
      .single();
    if (abbrRes && abbrRes.data) {
      targetCountry = abbrRes.data;
      guessedAbbreviations = [];
      guessCount = 0;
      const resEl = document.getElementById('results');
      if (resEl) resEl.innerHTML = '';
      console.log('targetCountry set (by abbreviation):', targetCountry);
      return targetCountry;
    }
    console.warn('No country found for', name);
  } catch (err) {
    console.error('Error setting targetCountry:', err);
  }
};
async function onQuizComplete() {
  console.log('onQuizComplete called with:', { game_id, guessCount, gave_up, mistakes });
  try {
    // 1) Save the quiz result
    const { data: savedResult, error } = await saveTriviaResult({
      game_id,
      guessCount,
      gave_up,
      mistakes,
      targetCountry,
    });
    if (error) throw error;
    console.log('Result saved:', savedResult);

    // 2) Run badge checks
    //    We need to pass exactly the shape checkAndAwardBadges() expects:
    // await checkAndAwardBadges({
    //  game_id:     savedResult.game_id,
    //  guessCount:   savedResult.guessCount,
    //  gave_up:     savedResult.gave_up,
    //  mistakes:    savedResult.mistakes,
    //  played_at:   savedResult.played_at || new Date().toISOString(),
    //  });
    
   } catch (err) {
     // 3) Then update your UI (e.g. show results + any new badges)
     console.error('Save failed:', err.message);
   }
}
// ...existing code...
