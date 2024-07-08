document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const galleryItems = document.querySelectorAll('.gallery .item');
    const videos = document.querySelectorAll('.video-container .video-item');
    const noResultsMessage = document.getElementById('no-results');
    const filterDropdown = document.getElementById('filterDropdown');
    const settingsBtn = document.getElementById('settingsBtn');
    const settingsDropdown = document.getElementById('settingsDropdown');
    const settingsForm = document.getElementById('settingsForm');
    const logoSelect = document.getElementById('logoSelect');
    const colorSelect = document.getElementById('colorSelect');
    const filterContainer = document.querySelector('.filter-container'); // Select the filter container

    // Function to hide or show the "No results found" message
    function toggleNoResultsMessage(foundPhotos, foundVideos) {
        if (!foundPhotos && !foundVideos) {
            noResultsMessage.style.display = 'block';
        } else {
            noResultsMessage.style.display = 'none';
        }
    }

    // Search functionality
    searchInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            const searchTerm = searchInput.value.toLowerCase();
            let foundPhotos = false;
            let foundVideos = false;

            galleryItems.forEach(item => {
                const caption = item.getAttribute('data-caption').toLowerCase();
                const subtitle = item.querySelector('.subtitle').textContent.toLowerCase();
                if (caption.includes(searchTerm) || subtitle.includes(searchTerm)) {
                    item.style.display = '';
                    if (!item.getAttribute('data-category').includes('Videos')) {
                        foundPhotos = true;
                    }
                } else {
                    item.style.display = 'none';
                }
            });

            videos.forEach(video => {
                const videoTitle = video.querySelector('iframe').getAttribute('title').toLowerCase();
                if (videoTitle.includes(searchTerm)) {
                    video.style.display = 'block'; // Show video item if title matches search term
                    foundVideos = true;
                } else {
                    video.style.display = 'none';
                }
            });

            // Toggle no results message visibility
            toggleNoResultsMessage(foundPhotos, foundVideos);
        }
    });

    // Overlay functionality
    galleryItems.forEach((item, index) => {
        const overlay = item.querySelector('.overlay');

        item.addEventListener('click', () => {
            overlay.classList.add('active');
        });

        // Close button functionality
        const closeBtn = overlay.querySelector('.close-btn');
        closeBtn.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent the event from bubbling up to overlay
            overlay.classList.remove('active');
        });

        // Click outside overlay to close functionality (optional)
        overlay.addEventListener('click', (event) => {
            if (event.target === overlay) {
                overlay.classList.remove('active');
            }
        });
    });

    // Filter functionality
    filterDropdown.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            const category = event.target.getAttribute('data-category');

            // Show or hide gallery items based on selected category
            let foundPhotos = false;
            galleryItems.forEach(item => {
                const itemCategories = item.getAttribute('data-category').split(' ');
                if (category === 'all' || itemCategories.includes(category)) {
                    item.style.display = '';
                    if (!itemCategories.includes('Videos')) {
                        foundPhotos = true;
                    }
                } else {
                    item.style.display = 'none';
                }
            });

            // Show or hide videos based on selected category
            let foundVideos = false;
            videos.forEach(video => {
                if (category === 'all' || category === 'Videos') {
                    video.style.display = 'block'; // Show video item if videos category or all selected
                    foundVideos = true;
                } else {
                    video.style.display = 'none';
                }
            });

            // Toggle no results message visibility
            toggleNoResultsMessage(foundPhotos, foundVideos);
        }
    });

    // Settings functionality
    settingsBtn.addEventListener('click', () => {
        settingsDropdown.classList.toggle('show'); // Toggle visibility of settings dropdown
    });

    settingsForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission (we are not submitting, just applying settings)

        // Get selected logo option and apply
        const selectedLogo = logoSelect.value;
        // Replace logo image src with selected logo
        const logoImg = document.querySelector('.logo-img');
        logoImg.src = `Bilder/${selectedLogo}.png`;

        // Get selected color option and apply to navbar and filter icon
        const selectedColor = colorSelect.value;
        const navbar = document.querySelector('.navbar');
        navbar.style.backgroundColor = selectedColor;

        // Apply background color to filter icon container
        const filterIconContainer = document.querySelector('.filter-container');
        filterIconContainer.style.backgroundColor = '#333'; // Dark background color

        // Hide settings dropdown after applying settings
        settingsDropdown.classList.remove('show');
    });

    // Initial setup: Hide settings dropdown initially
    settingsDropdown.classList.remove('show');
});

document.addEventListener('DOMContentLoaded', function() {
    const customSelect = document.getElementById('colorSelectCustom');
    const selectedOption = customSelect.querySelector('.selected-option');
    const options = customSelect.querySelector('.options');
    const hiddenSelect = document.getElementById('colorSelect');

    customSelect.addEventListener('click', function(event) {
        if (event.target.classList.contains('selected-option')) {
            customSelect.classList.toggle('open');
        }
    });

    options.addEventListener('click', function(event) {
        const option = event.target.closest('.option');
        if (option) {
            const value = option.getAttribute('data-value');
            selectedOption.innerHTML = option.innerHTML;
            hiddenSelect.value = value;
            customSelect.classList.remove('open');
        }
    });

    // Close dropdown if clicked outside
    document.addEventListener('click', function(event) {
        if (!customSelect.contains(event.target)) {
            customSelect.classList.remove('open');
        }
    });
});
// Quill Editor initialisieren
        var quill = new Quill('#editor', {
            theme: 'snow',
            placeholder: 'Gib hier deinen Text ein...'
        });

        // Funktion zum Anzeigen von Nachrichten
        function showMessage(text) {
            var messageDiv = document.getElementById('message');
            messageDiv.textContent = text;
            messageDiv.style.display = 'block';
            setTimeout(function() {
                messageDiv.style.display = 'none';
            }, 3000);
        }

        // Funktion zum Speichern des Textes in Local Storage
        function saveText() {
            var text = quill.root.innerHTML;
            localStorage.setItem('savedText', text);
            showMessage('Text gespeichert!');
        }

        // Funktion zum Laden des Textes aus Local Storage
        function loadText() {
            var savedText = localStorage.getItem('savedText');
            if (savedText !== null) {
                quill.root.innerHTML = savedText;
                showMessage('Text geladen!');
            } else {
                showMessage('Kein gespeicherter Text gefunden.');
            }
        }

        // Beim Laden der Seite den gespeicherten Text anzeigen (falls vorhanden)
        window.onload = function() {
            var savedText = localStorage.getItem('savedText');
            if (savedText !== null) {
                quill.root.innerHTML = savedText;
            }
        }