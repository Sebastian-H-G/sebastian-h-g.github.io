const riversData = [
  { name: 'Nile', length: 6852 },
  { name: 'Amazon', length: 6400 },
  { name: 'Yangtze', length: 6275 },
  { name: 'Mississippi', length: 5464 },
  { name: 'Yenisei', length: 5539 },
  { name: 'Yellow River', length: 5464 },
  { name: 'Ob', length: 5410 },
  { name: 'Paraná', length: 4880 },
  { name: 'Congo', length: 4700 },
  { name: 'Amur', length: 4444 },
  { name: 'Lena', length: 4400 },
  { name: 'Mekong', length: 4350 },
  { name: 'Mackenzie', length: 4241 },
  { name: 'Niger', length: 4180 },
  { name: 'Murray-Darling', length: 3672 },
  { name: 'Volga', length: 3531 },
  { name: 'Danube', length: 2860 },
  { name: 'Zambezi', length: 2574 },
  { name: 'Ganges', length: 2525 },
  { name: 'Indus', length: 3180 },
  { name: 'Tigris', length: 1900 },
  { name: 'Rhine', length: 1233 }
];

function shuffleRivers(rivers) {
  for (let i = rivers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [rivers[i], rivers[j]] = [rivers[j], rivers[i]];
  }
  return rivers;
}

function populateRivers() {
  const riverList = document.querySelector('.river-list');
  riverList.innerHTML = '';
  const dropZone = document.querySelector('.drop-zone');
  dropZone.innerHTML = '<p id="drop-zone-text" "class="fixed-text">Drop the rivers here in order:</p>';

  const shuffledRivers = shuffleRivers(riversData);

  shuffledRivers.forEach(river => {
    const riverElement = document.createElement('p');
    riverElement.textContent = river.name;
    riverElement.draggable = true;
    riverElement.setAttribute('data-length', river.length);
    riverElement.classList.add('river-item');
    riverList.appendChild(riverElement);

    riverElement.addEventListener('dragstart', function() {
      draggedItem = this;
      setTimeout(() => this.style.display = 'none', 0);
    });

    riverElement.addEventListener('dragend', function() {
      setTimeout(() => {
        draggedItem.style.display = 'block';
        draggedItem = null;
      }, 0);
    });
  });
}

const dropZone = document.querySelector('.drop-zone');
const riverList = document.querySelector('.river-list');
let draggedItem = null;
let solutionShown = false;

dropZone.addEventListener('dragover', function(e) {
  e.preventDefault();
  this.classList.add('drag-over');
});

dropZone.addEventListener('dragleave', function() {
  this.classList.remove('drag-over');
});

dropZone.addEventListener('drop', function(e) {
  e.preventDefault();
  this.classList.remove('drag-over');
  if (draggedItem) {
    const dropChildren = Array.from(dropZone.querySelectorAll('p:not(.fixed-text)')); // Exclude the fixed text
    let dropped = false;

    dropChildren.forEach(child => {
      const rect = child.getBoundingClientRect();
      if (e.clientY < rect.top + rect.height / 2 && !dropped) {
        dropZone.insertBefore(draggedItem, child);
        dropped = true;
      }
    });

    if (!dropped) {
      dropZone.appendChild(draggedItem);
    }
  }
});

riverList.addEventListener('dragover', function(e) {
  e.preventDefault();
});

riverList.addEventListener('drop', function(e) {
  e.preventDefault();
  if (draggedItem) {
    riverList.appendChild(draggedItem);
  }
});

document.getElementById('submit').addEventListener('click', function() {
  const droppedRivers = dropZone.querySelectorAll('p:not(.fixed-text)'); // Exclude the fixed text
  let correctOrder = true;

  if (solutionShown) {
    showCorrectMessage();
    return;
  }

  const droppedLengths = Array.from(droppedRivers).map(p => parseInt(p.getAttribute('data-length')));
  const correctLengths = riversData.sort((a, b) => b.length - a.length).map(river => river.length);

  for (let i = 0; i < droppedRivers.length; i++) {
    const length = droppedLengths[i];
    const correctLength = correctLengths[i];

    if (length === correctLength) {
      droppedRivers[i].classList.add('correct');
      droppedRivers[i].style.backgroundColor = 'green'; // Highlight green when correct
    } else {
      droppedRivers[i].classList.add('incorrect');
      droppedRivers[i].style.backgroundColor = 'red';
droppedRivers[i].style.boxShadow = 'none';	 
      correctOrder = false;
    }
  }

  const modal = document.querySelector('.modal');
  const message = document.querySelector('.message');
  const showSolutionButton = document.querySelector('#show-solution');
  const resetButton = document.querySelector('#reset');

  modal.classList.remove('hidden');
  if (correctOrder) {
    message.textContent = 'Correct! You sorted the rivers by length.';
    showSolutionButton.style.display = 'none';  // Hide "Show Solution" button
    resetButton.style.display = 'inline-block'; // Show only "Reset" button
  } else {
    message.textContent = 'Incorrect. Try again or show the solution.';
    showSolutionButton.style.display = 'inline-block';
    resetButton.style.display = 'inline-block';
  }
});

document.getElementById('show-solution').addEventListener('click', function() {
  dropZone.innerHTML = '<p class="fixed-text">Drop the rivers here in order:</p>'; // Keep the fixed text
  riversData.sort((a, b) => b.length - a.length).forEach(river => {
    const correctRiver = document.createElement('p');
    correctRiver.textContent = `${river.name} - ${river.length} km`;
    correctRiver.classList.add('correct');
    correctRiver.style.backgroundColor = 'green'; // Mark the solution rivers as correct (green)
    dropZone.appendChild(correctRiver);
  });
  const resetButton = document.querySelector('#reset');
  const modal = document.querySelector('.modal');
  modal.classList.add('hidden');
  resetButton.style.display = 'inline-block';
  solutionShown = true;
});

document.getElementById('reset').addEventListener('click', function() {
  document.querySelector('.modal').classList.add('hidden');
  document.getElementById('reset').style.display = 'none';
  solutionShown = false;
  populateRivers();
});

function showCorrectMessage() {
  const modal = document.querySelector('.modal');
  const message = document.querySelector('.message');
  message.textContent = 'Correct! You sorted the rivers by length.';
  modal.classList.remove('hidden');
  const resetButton = document.querySelector('#reset');
  resetButton.style.display = 'inline-block';
}

// Initialize
populateRivers();
