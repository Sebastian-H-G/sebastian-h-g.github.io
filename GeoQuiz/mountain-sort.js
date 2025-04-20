const riverData = [
    { name: 'Mount Everest', length: 8848 },
    { name: 'K2', length: 8611 },
    { name: 'Kangchenjunga', length: 8586 },
    { name: 'Lhotse', length: 8516 },
    { name: 'Makalu', length: 8485 },
    { name: 'Cho Oyu', length: 8188 },
    { name: 'Dhaulagiri', length: 8167 },
    { name: 'Manaslu', length: 8163 },
    { name: 'Nanga Parbat', length: 8126 },
    { name: 'Annapurna', length: 8091 },
    { name: 'Mont Blanc', length: 4807 },
    { name: 'Matterhorn', length: 4478 },
    { name: 'Grossglockner', length: 3798 },
    { name: 'Elbrus', length: 5642 },
    { name: 'Eiger', length: 3967 },
    { name: 'Zugspitze', length: 2962 },
    { name: 'Mount Olympus', length: 2355 },
    { name: 'Mount Etna', length: 3356 },
];

const riverBox = document.getElementById('rivers');
const dropZone = document.getElementById('dropzone');
const resultMessage = document.getElementById('resultMessage');
const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modalMessage');
const resetButton = document.getElementById('resetButton');
const showSolutionButton = document.getElementById('showSolutionButton');
const tryAgainButton = document.getElementById('tryAgainButton');
const riverCountSelect = document.getElementById('riverCount');

let riversChecked = false; // Variable to track if rivers have been checked

// Initialize sortable for drag and drop functionality
Sortable.create(riverBox, {
    group: "rivers",
    animation: 150
});
Sortable.create(dropZone, {
    group: "rivers",
    animation: 150
});

// Function to shuffle the rivers
function shuffleRivers(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Load rivers dynamically based on the selected count
function loadRivers(count = 5) {
    riverBox.innerHTML = '';
    const shuffledRivers = shuffleRivers(riverData.slice(0, count));
    shuffledRivers.forEach(river => {
        const li = document.createElement('li');
        li.textContent = river.name;
        li.setAttribute('data-length', river.length);
        riverBox.appendChild(li);
    });
}

// Initialize the river selection based on dropdown
riverCountSelect.addEventListener('change', function () {
    const selectedCount = parseInt(riverCountSelect.value);
    loadRivers(selectedCount);
});

// Load the default 10 rivers
loadRivers();

// Check if rivers are ordered correctly from longest to shortest
function checkOrder() {
    const dropItems = [...dropZone.querySelectorAll('li')];
    const lengths = dropItems.map(item => parseInt(item.getAttribute('data-length')));

    // Check if lengths are sorted from longest to shortest
    for (let i = 0; i < lengths.length - 1; i++) {
        if (lengths[i] < lengths[i + 1]) {
            return false; // Incorrect order found
        }
    }
    return true; // Correct order if no incorrect order is found
}

// Check button functionality
// Check button functionality
document.getElementById('checkButton').addEventListener('click', function () {
    const dropItems = [...dropZone.querySelectorAll('li')];
    const showSolutionButton = document.getElementById('showSolutionButton');
    const tryAgainButton = document.getElementById('tryAgainButton');

    if (dropItems.length === parseInt(riverCountSelect.value)) {
        if (checkOrder() && !riversChecked) {
            // Show correct message in modal
            modal.style.display = 'block';
            modalMessage.textContent = 'Correct! Well done!';
			modalMessage.style.fontWeight = 'bold';
            modalMessage.style.color = 'green'; // Set correct message color

            // Hide buttons when the answer is correct
            showSolutionButton.style.display = 'none';
            tryAgainButton.style.display = 'none';

            dropItems.forEach(item => {
                item.textContent += ` (${item.getAttribute('data-length')} m)`;
            });
            riversChecked = true; 

            // Automatically hide modal after 2 seconds
            setTimeout(() => {
                modal.style.display = 'none';
            }, 2000);
        } else if (riversChecked) {
            modal.style.display = 'block';
            modalMessage.textContent = 'Correct! You have already checked the answer.';
            modalMessage.style.color = 'green'; // Set correct message color
			modalMessage.style.fontWeight = 'bold';
            showSolutionButton.style.display = 'none';
            tryAgainButton.style.display = 'none';

            // Hide the modal after 2 seconds
            setTimeout(() => {
                modal.style.display = 'none';
            }, 2000);
        } else {
            // Show wrong message and ensure buttons are visible
            modal.style.display = 'block';
            modalMessage.textContent = 'Wrong! 😕 Please try again or see the solution!';
            modalMessage.style.color = 'red'; // Set wrong message color
			modalMessage.style.fontWeight = 'bold';
			showSolutionButton.style.margin = '10px';
            showSolutionButton.style.display = 'inline-block';
            tryAgainButton.style.display = 'inline-block';
        }
    } else {
        modal.style.display = 'block';
        modalMessage.textContent = 'Please sort all rivers before checking.';
        modalMessage.style.color = 'black'; // Default message color
        showSolutionButton.style.display = 'none';
		modalMessage.style.fontWeight = 'bold';
        tryAgainButton.style.display = 'none';
        
        // Automatically hide modal after 2 seconds
        setTimeout(() => {
            modal.style.display = 'none';
        }, 1000);
    }
});





// Reset functionality
resetButton.addEventListener('click', function () {
    location.reload();
});

// Show solution functionality
showSolutionButton.addEventListener('click', function () {
    dropZone.innerHTML = '';
    riverData.slice(0, parseInt(riverCountSelect.value))
        .sort((a, b) => b.length - a.length) // Longest to shortest order
        .forEach(river => {
            const li = document.createElement('li');
            li.textContent = `${river.name} (${river.length} m)`;
            li.setAttribute('data-length', river.length); // Keep data-length for checking
            dropZone.appendChild(li);
        });
    modal.style.display = 'none';
    resultMessage.textContent = ''; // Reset message for next check
    riversChecked = false; // Reset check state after showing solution
});

// Try again button
tryAgainButton.addEventListener('click', function () {
    modal.style.display = 'none';
});

// Load the rivers by default on page load
loadRivers();
