document.addEventListener('DOMContentLoaded', function() {
    // Check login state on page load
    if (localStorage.getItem('loggedIn') === 'true') {
        showAppMenu();
    } else {
        showLockscreen();
    }
});

document.getElementById('showPasswordField').addEventListener('click', function() {
    document.querySelector('.password-field').classList.remove('hidden');
    document.querySelector('.background').style.filter = 'blur(5px)';
    this.classList.add('hidden');
});

document.getElementById('unlockButton').addEventListener('click', function() {
    var password = document.getElementById('password').value;
    if (password === '1234') { // Example password
        localStorage.setItem('loggedIn', 'true'); // Save login state
        showAppMenu();
    } else {
        alert('Incorrect password');
    }
});

document.getElementById('logoutButton').addEventListener('click', function() {
    localStorage.removeItem('loggedIn'); // Clear login state
    showLockscreen();
});

document.getElementById('darkModeToggle').addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});

document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetPageId = this.getAttribute('href').substring(1); // Get page ID without the #
        
        // Hide all pages
        document.querySelectorAll('.page').forEach(page => page.classList.remove('visible'));
        
        // Show the targeted page
        document.getElementById(targetPageId).classList.add('visible');

        // Highlight the active icon
        document.querySelectorAll('.navbar a').forEach(navLink => navLink.classList.remove('active'));
        this.classList.add('active');
    });
});

function updateClock() {
    const clockElement = document.getElementById('clock');
    const dayOfWeekElement = document.getElementById('dayOfWeek');
    
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    dayOfWeekElement.textContent = now.toLocaleDateString('en-US', options);
}

setInterval(updateClock, 1000);
updateClock();

function showAppMenu() {
    document.querySelector('.lockscreen').classList.add('hidden');
    document.querySelector('.app-menu').classList.remove('hidden');
    document.querySelector('.background').classList.add('hidden');
    document.querySelector('.background').style.filter = 'blur(0)';
}

function showLockscreen() {
    document.querySelector('.lockscreen').classList.remove('hidden');
    document.querySelector('.app-menu').classList.add('hidden');
    document.getElementById('showPasswordField').classList.remove('hidden');
    document.querySelector('.password-field').classList.add('hidden');
    document.getElementById('password').value = '';
    document.querySelector('.background').classList.remove('hidden');
    document.querySelector('.background').style.filter = 'blur(0)';
}
