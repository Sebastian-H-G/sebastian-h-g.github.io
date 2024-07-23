document.getElementById('showPasswordField').addEventListener('click', function() {
    document.querySelector('.password-field').classList.remove('hidden');
    document.querySelector('.background').style.filter = 'blur(5px)';
    this.classList.add('hidden');
});

document.getElementById('unlockButton').addEventListener('click', function() {
    var password = document.getElementById('password').value;
    if (password === 'esteban1492') { // Example password
        document.querySelector('.lockscreen').classList.add('hidden');
        document.querySelector('.app-menu').classList.remove('hidden');
        document.querySelector('.background').classList.add('hidden');
        document.querySelector('.background').style.filter = 'blur(0)';
    } else {
        alert('Incorrect password');
    }
});

document.getElementById('logoutButton').addEventListener('click', function() {
    document.querySelector('.lockscreen').classList.remove('hidden');
    document.querySelector('.app-menu').classList.add('hidden');
    document.getElementById('showPasswordField').classList.remove('hidden');
    document.querySelector('.password-field').classList.add('hidden');
    document.getElementById('password').value = '';
    document.querySelector('.background').classList.remove('hidden');
    document.querySelector('.background').style.filter = 'blur(0)';
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
