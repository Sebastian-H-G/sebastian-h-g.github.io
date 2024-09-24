const rivers = [
    { name: 'Amazon', length: 6400 },
    { name: 'Nile', length: 6650 },
    { name: 'Yangtze', length: 6300 },
    { name: 'Mississippi', length: 6275 },
    { name: 'Yenisei', length: 5539 },
    { name: 'Yellow River', length: 5464 },
    { name: 'Ob-Irtysh', length: 5410 },
    { name: 'Parana', length: 4880 },
    { name: 'Congo', length: 4700 },
    { name: 'Amur', length: 4444 },
    { name: 'Lena', length: 4400 },
    { name: 'Mekong', length: 4350 },
    { name: 'Mackenzie', length: 4241 },
    { name: 'Niger', length: 4184 },
    { name: 'Brahmaputra', length: 3848 },
    { name: 'Danube', length: 2860 },
    { name: 'Zambezi', length: 2574 },
    { name: 'Ganges', length: 2525 },
    { name: 'Rhine', length: 1233 }
];

let draggedItem = null;
let draggedIndex = null;
let selectedRivers = [];
let isSolutionShown = false;  // New flag to track if solution was shown

const riverList = document.getElementById('river-list');
const dropZone = document.getElementById('drop-zone');
const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modal-message');
const checkBtn = document.getElementById('check-btn');
const retryBtn = document.getElementById('retry-btn');
const showSolutionBtn = document.getElementById('show-solution-btn');
const resetBtn = document.getElementById('reset-btn');
const riverCountSelect = document.getElementById('river-count');

// Event listener for the river count selector
riverCountSelect.addEventListener('change', () => {
    initRivers();  // Re-initialize the rivers when the river count is changed
});

// Initialize rivers
function initRivers() {
    const riverCount = parseInt(riverCountSelect.value) || 10;  // Default to 10 rivers if nothing is selected
    selectedRivers = rivers.slice(0, riverCount);  // Get first 'riverCount' rivers from the list
    shuffleArray(selectedRivers);  // Shuffle them
    renderRivers();  // Render the shuffled rivers
    isSolutionShown = false;  // Reset flag when quiz is initialized
}


// Shuffle the array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Render rivers in the list
function renderRivers() {
    riverList.innerHTML = '';  // Clear the river list first
    selectedRivers.forEach((river, index) => {
        const riverItem = document.createElement('div');
        riverItem.classList.add('river-item');
        riverItem.setAttribute('draggable', 'true');
        riverItem.textContent = river.name;
        riverItem.dataset.length = river.length;  // Attach river length
        riverItem.dataset.index = index;

        // Add event listeners for dragging (mouse and touch)
        riverItem.addEventListener('dragstart', dragStart);
        riverItem.addEventListener('touchstart', touchStart, { passive: true });
        
        riverList.appendChild(riverItem);  // Add the river to the list
    });
}

// Drag and drop (for mouse)
function dragStart(e) {
    draggedItem = this;
    draggedIndex = Array.from(this.parentNode.children).indexOf(this);
    setTimeout(() => this.style.display = 'none', 0);
}

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    const afterElement = getDragAfterElement(dropZone, e.clientY);
    if (afterElement == null) {
        dropZone.appendChild(draggedItem);
    } else {
        dropZone.insertBefore(draggedItem, afterElement);
    }
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    draggedItem.style.display = 'block';
    draggedItem = null;
});

// Touch support for smartphones (enhanced)
function touchStart(e) {
    draggedItem = this;
    draggedIndex = Array.from(this.parentNode.children).indexOf(this);
    e.target.addEventListener('touchmove', touchMove);
    e.target.addEventListener('touchend', touchEnd);
}

function touchMove(e) {
    const touch = e.touches[0];
    const afterElement = getDragAfterElement(dropZone, touch.clientY);
    if (afterElement == null) {
        dropZone.appendChild(draggedItem);
    } else {
        dropZone.insertBefore(draggedItem, afterElement);
    }
}

function touchEnd(e) {
    e.target.removeEventListener('touchmove', touchMove);
    draggedItem = null;
}

// Find the element to place dragged item before
function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.river-item:not(.dragging)')];
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

// Check button logic
checkBtn.addEventListener('click', () => {
    const droppedItems = Array.from(dropZone.querySelectorAll('.river-item'));
    
    if (droppedItems.length === 0) {
        alert('Please drop the rivers in the drop zone before checking.');
        return;
    }

    // New condition: Check if all rivers are sorted
    if (droppedItems.length !== selectedRivers.length) {
        alert('Please sort all rivers before checking.');
        return;
    }

    const isCorrect = droppedItems.every((item, index) => {
        const riverLength = parseInt(item.dataset.length);
        return index === 0 || riverLength <= parseInt(droppedItems[index - 1].dataset.length);
    });

    showModal(isCorrect);
});



// Show modal with result
// Show modal with result
// Show modal with result
function showModal(isCorrect) {
    modal.classList.remove('hidden');
    modalMessage.textContent = isCorrect ? 'Correct! Well done!' : 'Incorrect! Try again.';
    modalMessage.parentElement.classList.toggle('correct', isCorrect);
    modalMessage.parentElement.classList.toggle('incorrect', !isCorrect);

    if (isCorrect) {
        // Show only the reset button when correct
        retryBtn.classList.add('hidden');
        showSolutionBtn.classList.add('hidden');
        resetBtn.classList.remove('hidden');
    } else {
        // Show retry and show solution buttons when incorrect
        retryBtn.classList.remove('hidden');
        showSolutionBtn.classList.remove('hidden');
        resetBtn.classList.remove('hidden');
    }
}


// Retry without resetting
retryBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
});

// Show solution and reset
resetBtn.addEventListener('click', resetQuiz);
showSolutionBtn.addEventListener('click', showSolution);

function resetQuiz() {
    modal.classList.add('hidden');
    renderRivers(); // Reset the river list
    isSolutionShown = false;  // Reset the solution flag
}

function showSolution() {
    const correctOrder = selectedRivers.sort((a, b) => b.length - a.length);
    dropZone.innerHTML = '';
    correctOrder.forEach(river => {
        const riverItem = document.createElement('div');
        riverItem.classList.add('river-item');
        riverItem.textContent = `${river.name} (${river.length} km)`;
        dropZone.appendChild(riverItem);
    });
    modal.classList.add('hidden');
    isSolutionShown = true;  // Set flag to indicate solution has been shown
}

// Initialize the quiz on page load
document.addEventListener('DOMContentLoaded', () => {
    initRivers();
});