// script.js (merged with Script 2 functionality)

// Function to highlight the current page icon
function highlightCurrentPageIcon() {
    const navbarIcons = document.querySelectorAll('.navbar-icons a');
    const currentPage = window.location.pathname.split('/').pop(); // Get the current page file name

    navbarIcons.forEach(iconLink => {
        const iconHref = iconLink.getAttribute('href');
        if (iconHref === currentPage) {
            const iconImg = iconLink.querySelector('img');
            iconImg.classList.add('highlighted-icon');
        }
    });
}

// Call the function to highlight the current page icon
highlightCurrentPageIcon();

const darkModeToggle = document.getElementById('darkModeToggle');

// Function to check if dark mode is enabled
function isDarkModeEnabled() {
    return localStorage.getItem('theme') === 'dark-mode';
}

// Function to enable dark mode
function enableDarkMode() {
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark-mode');
}

// Function to disable dark mode
function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light-mode');
}

// Function to toggle dark mode based on the checkbox
function toggleDarkMode() {
    if (darkModeToggle.checked) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
}

// On page load, check if dark mode is enabled and update toggle accordingly
document.addEventListener('DOMContentLoaded', () => {
    if (isDarkModeEnabled()) {
        enableDarkMode();
        darkModeToggle.checked = true;
    } else {
        disableDarkMode();
        darkModeToggle.checked = false;
    }
});

darkModeToggle.addEventListener('change', toggleDarkMode);

// Handle login and other functionalities (unchanged)

window.onload = function() {
    var remember = localStorage.getItem('remember') === 'true';
    if (remember) {
        var username = localStorage.getItem('username');
        var password = localStorage.getItem('password');
        var avatarSrc = localStorage.getItem('avatar');
        document.getElementById('uname').value = username;
        document.getElementById('psw').value = password;
        document.getElementById('remember').checked = true;

        displayUserInfo(username, avatarSrc);
        unlockContent();
    }
}

window.onclick = function(event) {
    var modal = document.getElementById('id01');
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target === document.getElementById('error-modal')) {
        document.getElementById('error-modal').style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', initPage);

function initPage() {
    if (checkLoggedIn()) {
        unlockContent();
    }
}

function checkLoggedIn() {
    return localStorage.getItem('loggedIn') === 'true';
}

function displayUserInfo(username, avatar) {
    document.getElementById('display-username').textContent = username;
    document.getElementById('info-username').textContent = username;
    document.getElementById('user-avatar').src = avatar;
    document.getElementById('user-info').style.display = 'block';
}

function unlockContent() {
    document.getElementById('main-content').style.display = 'block';
}

function handleLogin(event) {
    event.preventDefault();
    const enteredUsername = document.getElementById('uname').value;
    const enteredPassword = document.getElementById('psw').value;
    const selectedAvatar = document.querySelector('input[name="avatar"]:checked')?.value;

    const correctUsername = "Sebastian";
    const correctPassword = "Airways";

    if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
        localStorage.setItem('loggedIn', 'true');
        document.getElementById('id01').style.display = 'none';
        displaySuccessMessage();
        displayUserInfo(enteredUsername, selectedAvatar);
        unlockContent();
    } else {
        document.getElementById('error-modal').style.display = 'block';
    }
}

function displaySuccessMessage() {
    const successModal = document.getElementById('success-modal');
    successModal.style.display = 'block';
    setTimeout(() => {
        successModal.style.display = 'none';
    }, 1000);
}

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const fromFirstPage = urlParams.get('fromFirstPage');

    if (fromFirstPage === 'true') {
        flashButton();
    }
});

function flashButton() {
    const button = document.getElementById('flashButton');
    button.classList.add('flash-button');
    setTimeout(() => {
        button.classList.remove('flash-button');
    }, 1000);
}
