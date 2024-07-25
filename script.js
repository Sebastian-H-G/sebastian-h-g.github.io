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






// Customizing themes

// Modal functionality
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('myModal');
  const btn = document.getElementById('openModalButton');
  const span = document.getElementsByClassName('close')[0];

  // Open the modal
  btn.onclick = () => {
    modal.style.display = 'block';
    setTimeout(() => {
      modal.style.opacity = 1;
    }, 10); // Delay to trigger transition
  };

  // Close the modal
  span.onclick = () => {
    modal.style.opacity = 0;
    setTimeout(() => {
      modal.style.display = 'none';
    }, 500);
  };
  // Close modal when clicking outside of the modal content
  window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.opacity = 0;
      setTimeout(() => {
        modal.style.display = 'none';
      }, 500);
    }
  };
  loadSettings();
});
// Theme switching functionality
function changeTheme(themeName) {
  document.body.className = themeName;
  saveSettings('theme', themeName);
}

// Navbar theme switching functionality
function changeNavbarTheme(themeName) {
  const navbar = document.querySelector('.navbar');
  navbar.className = `navbar ${themeName}`;
  saveSettings('navbarTheme', themeName);
}
// Function to save settings to localStorage 
function saveSettings(key, value){
  localStorage.setItem(key, value);
}
// Function to load settings ferom localStorage
function loadSettings() {
  const theme = localStorage.getItem('theme');
  if (theme) {
    document.body.className = theme;
  }

  const navbarTheme = localStorage.getItem('navbarTheme');
  if (navbarTheme) {
    const navbar = document.querySelector('.navbar');
    navbar.className = `navbar ${navbarTheme}`;
  }
}

// Navbar navigation functionality
function navigate(section) {
  const modalBody = document.getElementById('modalBody');
  let content = '';

  switch (section) {
    case 'home':
      content = '<h2>Welcome to the Modal Home</h2><p>This is the home section of the modal.</p>';
      break;
    case 'themes':
      content = `
        <h2>Customizable Themes</h2>
        <div class="theme-selector">
          <button class="theme-btn" style="background-color: #ffffff; color: #333;" onclick="changeTheme('theme-default')">Default</button>
          <button class="theme-btn" style="background-color: #121212; color: white;" onclick="changeTheme('theme-dark')">Dark</button>
          <button class="theme-btn" style="background-color: #f0f0f0; color: #333;" onclick="changeTheme('theme-light')">Light</button>
          <button class="theme-btn" style="background-color: #ff6b6b; color: white;" onclick="changeTheme('theme-colorful')">Colorful</button>
          <button class="theme-btn" style="background-color: #ffff00; color: #333;" onclick="changeTheme('theme-yellow')">Yellow</button>
          <button class="theme-btn" style="background-color: #98ff98; color: #333;" onclick="changeTheme('theme-mint-green')">Mint Green</button>
          <button class="theme-btn" style="background-color: #fbb6ce; color: #333;" onclick="changeTheme('theme-pale-pink')">Pale Pink</button>
          <button class="theme-btn" style="background-color: #4682b4; color: white;" onclick="changeTheme('theme-steel-blue')">Steel Blue</button>
          <button class="theme-btn" style="background-color: #00ffff; color: #333;" onclick="changeTheme('theme-cyan')">Cyan</button>
          <button class="theme-btn" style="background-color: #8b0000; color: white;" onclick="changeTheme('theme-dark-red')">Dark Red</button>
          <button class="theme-btn" style="background-color: #008080; color: white;" onclick="changeTheme('theme-teal')">Teal</button>
          <button class="theme-btn" style="background-color: #dcb1b1; color: #333;" onclick="changeTheme('theme-dusty-rose')">Dusty Rose</button>
          <button class="theme-btn" style="background-color: #ffa500; color: #333;" onclick="changeTheme('theme-orange')">Orange</button>
          <button class="theme-btn" style="background-color: #191970; color: white;" onclick="changeTheme('theme-midnight-blue')">Midnight Blue</button>
          <button class="theme-btn" style="background-color: #6b8e23; color: white;" onclick="changeTheme('theme-olive-green')">Olive Green</button>
          <button class="theme-btn" style="background-color: #a9a9a9; color: #333;" onclick="changeTheme('theme-warm-grey')">Warm Grey</button>
          <button class="theme-btn" style="background-color: #4169e1; color: white;" onclick="changeTheme('theme-royal-blue')">Royal Blue</button>
          <button class="theme-btn" style="background-color: #9c9a6c; color: #333;" onclick="changeTheme('theme-sage-green')">Sage Green</button>
          <button class="theme-btn" style="background-color: #b7410e; color: white;" onclick="changeTheme('theme-rust')">Rust</button>
          <button class="theme-btn" style="background-color: #add8e6; color: #333;" onclick="changeTheme('theme-light-blue')">Light Blue</button>
          <button class="theme-btn" style="background-color: #8a9a5b; color: white;" onclick="changeTheme('theme-moss-green')">Moss Green</button>
          <button class="theme-btn" style="background-color: #ff0000; color: white;" onclick="changeTheme('theme-bright-red')">Bright Red</button>
        </div>
         <h2>Navbar Themes</h2>
          <div class="theme-selector">
            <button class="theme-btn" data-color="#333333" style="background-color: #333333; color: white;" onclick="changeNavbarTheme('navbar-theme-default')">Default</button>
            <button class="theme-btn" data-color="#000000" style="background-color: #000000; color: white;" onclick="changeNavbarTheme('navbar-theme-dark')">Dark</button>
            <button class="theme-btn" data-color="#ffffff" style="background-color: #ffffff; color: #333;" onclick="changeNavbarTheme('navbar-theme-light')">Light</button>
            <button class="theme-btn" data-color="#ff6b6b" style="background-color: #ff6b6b; color: white;" onclick="changeNavbarTheme('navbar-theme-colorful')">Colorful</button>
            <button class="theme-btn" data-color="#001f3f" style="background-color: #001f3f; color: white;" onclick="changeNavbarTheme('navbar-theme-navy-blue')">Navy Blue</button>
            <button class="theme-btn" data-color="#d3d3d3" style="background-color: #d3d3d3; color: #333;" onclick="changeNavbarTheme('navbar-theme-light-gray')">Light Gray</button>
            <button class="theme-btn" data-color="#2f4f4f" style="background-color: #2f4f4f; color: white;" onclick="changeNavbarTheme('navbar-theme-dark-slate-gray')">Dark Slate Gray</button>
            <button class="theme-btn" data-color="#e6e6fa" style="background-color: #e6e6fa; color: #333;" onclick="changeNavbarTheme('navbar-theme-lavender')">Lavender</button>
            <button class="theme-btn" data-color="#228b22" style="background-color: #228b22; color: white;" onclick="changeNavbarTheme('navbar-theme-forest-green')">Forest Green</button>
            <button class="theme-btn" data-color="#6a5acd" style="background-color: #6a5acd; color: white;" onclick="changeNavbarTheme('navbar-theme-slate-blue')">Slate Blue</button>
            <button class="theme-btn" data-color="#ff6347" style="background-color: #ff6347; color: white;" onclick="changeNavbarTheme('navbar-theme-tomato-red')">Tomato Red</button>
            <button class="theme-btn" data-color="#9932cc" style="background-color: #9932cc; color: white;" onclick="changeNavbarTheme('navbar-theme-dark-orchid')">Dark Orchid</button>
            <button class="theme-btn" data-color="#a0522d" style="background-color: #a0522d; color: white;" onclick="changeNavbarTheme('navbar-theme-sienna')">Sienna</button>
            <button class="theme-btn" data-color="#eee8aa" style="background-color: #eee8aa; color: #333;" onclick="changeNavbarTheme('navbar-theme-pale-goldenrod')">Pale Goldenrod</button>
      `;
      break;
    case 'settings':
      content = '<h2>Settings</h2><p>This is the settings section.</p>';
      break;
    default:
      content = '<h2>Welcome</h2><p>Select a section from the navbar.</p>';
      break;
  }


  modalBody.innerHTML = content;

  // Highlight the active navbar item
  highlightActiveNavItem(section);
}

// Function to highlight the active navbar item
function highlightActiveNavItem(activeSection) {
  const navItems = document.querySelectorAll('.modal-navbar a');
  navItems.forEach(item => item.classList.remove('active'));
  const activeItem = document.querySelector(`.modal-navbar a[href="#${activeSection}"]`);
  if (activeItem) {
    activeItem.classList.add('active');
  }
}

// Load default section
document.addEventListener('DOMContentLoaded', () => {
  navigate('home');
});
