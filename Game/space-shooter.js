const startButton = document.getElementById('start-button');
const restartButton = document.getElementById('restart-button');
const achievementsButton = document.getElementById('achievements-button');
const closeAchievementsButton = document.getElementById('close-achievements');
const startScreen = document.getElementById('start-screen');
const game = document.getElementById('game');
const endScreen = document.getElementById('end-screen');
const achievementsScreen = document.getElementById('achievements');
const spaceship = document.getElementById('spaceship');
const scoreDisplay = document.getElementById('score');
const highscoreDisplay = document.getElementById('highscore');
const finalScoreDisplay = document.getElementById('final-score');
const bestScoreDisplay = document.getElementById('best-score');
const notification = document.getElementById('notification');
const livesDisplay = document.getElementById('lives');

const leftButton = document.getElementById('left-button');
const rightButton = document.getElementById('right-button');
const shootButton = document.getElementById('shoot-button');

let score = 0;
let highscore = localStorage.getItem('highscore') || 0;
let canShoot = true;
let boosterActive = false;
let ultraBoosterActive = false;
let permanentUpgrade = false;
let indestructibleActive = false;
let rapidFireActive = false;
let lives = 3;
let gameInterval;
let rockInterval;
let boosterInterval;
let ultraBoosterInterval;
let indestructibleBoosterInterval;
let permanentUpgradeInterval;
let rapidFireBoosterInterval;
let rockCreationInterval = 1000;
const minRockCreationInterval = 300;
let rockIntervalDecrement = 50;
let rockAdjustInterval;
let keys = {};

highscoreDisplay.textContent = `Highscore: ${highscore}`;
livesDisplay.textContent = `Lives: ${lives}`;

function startGame() {
    score = 0;
    lives = 3;
    scoreDisplay.textContent = `Score: ${score}`;
    livesDisplay.textContent = '❤️'.repeat(lives);
    spaceship.style.left = '50%';
    spaceship.style.display = 'block';
    game.style.display = 'block';
    startScreen.style.display = 'none';
    endScreen.style.display = 'none';
    achievementsScreen.style.display = 'none';
    gameInterval = setInterval(gameLoop, 20);
    rockInterval = setInterval(createRock, rockCreationInterval);
    boosterInterval = setInterval(createBooster, 16000); // Create boosters every 10 seconds
    ultraBoosterInterval = setInterval(createUltraBooster, 24000); // Create ultra boosters every 22 seconds
    indestructibleBoosterInterval = setInterval(createIndestructibleBooster, 31000); // Create indestructible boosters every 33 seconds
    permanentUpgradeInterval = setInterval(createPermanentUpgrade, 63000); // Create permanent upgrades every 62 seconds
    rapidFireBoosterInterval = setInterval(createRapidFireBooster, 28000); // Create rapid fire boosters every 25 seconds
    rockAdjustInterval = setInterval(adjustRockCreationInterval, 5000); // Adjust rock creation interval every 5 seconds
createStars();
}
function endGame() {
    clearInterval(gameInterval);
    clearInterval(rockInterval);
    clearInterval(boosterInterval);
    clearInterval(ultraBoosterInterval);
    clearInterval(indestructibleBoosterInterval);
    clearInterval(permanentUpgradeInterval);
    clearInterval(rapidFireBoosterInterval);
    clearInterval(rockAdjustInterval);
    document.querySelectorAll('.rock').forEach(rock => rock.remove());
    document.querySelectorAll('.bullet').forEach(bullet => bullet.remove());
    document.querySelectorAll('.booster').forEach(booster => booster.remove());
    document.querySelectorAll('.ultra-booster').forEach(booster => booster.remove());
    document.querySelectorAll('.indestructible-booster').forEach(booster => booster.remove());
    document.querySelectorAll('.permanent-upgrade').forEach(upgrade => upgrade.remove());
    document.querySelectorAll('.rapid-fire-booster').forEach(booster => booster.remove());
    spaceship.style.display = 'none';
    game.style.display = 'none';
    endScreen.style.display = 'flex';
    finalScoreDisplay.textContent = `Your Score: ${score}`;
    
    if (score > highscore) {
        highscore = score;
        localStorage.setItem('highscore', highscore);
        
        // Ensure the class is added
        bestScoreDisplay.classList.add('highscore-broken');
        
        // Remove the class after the animation ends
        bestScoreDisplay.addEventListener('animationend', () => {
            bestScoreDisplay.classList.remove('highscore-broken');
        }, { once: true });
        
        bestScoreDisplay.textContent = `New Highscore: ${highscore}`;
    } else {
        bestScoreDisplay.textContent = `Highscore: ${highscore}`;
    }
}

function gameLoop() {
    if (keys['ArrowLeft']) {
        moveSpaceship('left');
    }
    if (keys['ArrowRight']) {
        moveSpaceship('right');
    }

    document.querySelectorAll('.bullet').forEach(bullet => {
        const bulletRect = bullet.getBoundingClientRect();
        bullet.style.bottom = `${parseInt(bullet.style.bottom) + 5}px`;
        if (bulletRect.bottom <= 0) {
            bullet.remove();
        }
        document.querySelectorAll('.rock').forEach(rock => {
            if (isCollision(bullet, rock)) {
                createExplosion(rock);
                bullet.remove();
                rock.remove();
                score++;
                scoreDisplay.textContent = `Score: ${score}`;
            }
        });
    });

    document.querySelectorAll('.rock').forEach(rock => {
        const rockRect = rock.getBoundingClientRect();
        rock.style.top = `${parseInt(rock.style.top) + 3}px`;
        if (rockRect.top >= window.innerHeight) {
            rock.remove();
        }
        if (isCollision(rock, spaceship) && !indestructibleActive) {
            loseLife();
            rock.remove();
        }
    });

    document.querySelectorAll('.booster').forEach(booster => {
        const boosterRect = booster.getBoundingClientRect();
        booster.style.top = `${parseInt(booster.style.top) + 2}px`;
        if (boosterRect.top >= window.innerHeight) {
            booster.remove();
        }
        if (isCollision(booster, spaceship)) {
            activateBooster();
            booster.remove();
        }
    });

    document.querySelectorAll('.ultra-booster').forEach(booster => {
        const boosterRect = booster.getBoundingClientRect();
        booster.style.top = `${parseInt(booster.style.top) + 2}px`;
        if (boosterRect.top >= window.innerHeight) {
            booster.remove();
        }
        if (isCollision(booster, spaceship)) {
            activateUltraBooster();
            booster.remove();
        }
    });

    document.querySelectorAll('.indestructible-booster').forEach(booster => {
        const boosterRect = booster.getBoundingClientRect();
        booster.style.top = `${parseInt(booster.style.top) + 2}px`;
        if (boosterRect.top >= window.innerHeight) {
            booster.remove();
        }
        if (isCollision(booster, spaceship)) {
            activateIndestructible();
            booster.remove();
        }
    });

    document.querySelectorAll('.rapid-fire-booster').forEach(booster => {
        const boosterRect = booster.getBoundingClientRect();
        booster.style.top = `${parseInt(booster.style.top) + 2}px`;
        if (boosterRect.top >= window.innerHeight) {
            booster.remove();
        }
        if (isCollision(booster, spaceship)) {
            activateRapidFire();
            booster.remove();
        }
    });

    document.querySelectorAll('.permanent-upgrade').forEach(upgrade => {
        const upgradeRect = upgrade.getBoundingClientRect();
        upgrade.style.top = `${parseInt(upgrade.style.top) + 2}px`;
        if (upgradeRect.top >= window.innerHeight) {
            upgrade.remove();
        }
        if (isCollision(upgrade, spaceship)) {
            activatePermanentUpgrade();
            upgrade.remove();
        }
    });
}
function createRock() {
    const rock = document.createElement('div');
    rock.className = 'rock';

    // Create and append multiple layers to the rock
    for (let i = 0; i < 20; i++) {
        const layer = document.createElement('div');
        layer.className = 'layer';
        rock.appendChild(layer);
    }

    rock.style.left = `${Math.random() * (window.innerWidth - 50)}px`;
    rock.style.top = '0px';
    document.body.appendChild(rock); // Assuming you append to the body or another container
}


function createBooster() {
    const booster = document.createElement('div');
    booster.className = 'booster';
    booster.style.left = `${Math.random() * (window.innerWidth - 30)}px`;
    booster.style.top = '0px';
    game.appendChild(booster);
}

function createUltraBooster() {
    const booster = document.createElement('div');
    booster.className = 'ultra-booster';
    booster.style.left = `${Math.random() * (window.innerWidth - 30)}px`;
    booster.style.top = '0px';
    game.appendChild(booster);
}

function createIndestructibleBooster() {
    const booster = document.createElement('div');
    booster.className = 'indestructible-booster';
    booster.style.left = `${Math.random() * (window.innerWidth - 30)}px`;
    booster.style.top = '0px';
    game.appendChild(booster);
}

function createRapidFireBooster() {
    const booster = document.createElement('div');
    booster.className = 'rapid-fire-booster';
    booster.style.left = `${Math.random() * (window.innerWidth - 30)}px`;
    booster.style.top = '0px';
    game.appendChild(booster);
}

function createPermanentUpgrade() {
    const upgrade = document.createElement('div');
    upgrade.className = 'permanent-upgrade';
    upgrade.style.left = `${Math.random() * (window.innerWidth - 30)}px`;
    upgrade.style.top = '0px';
    game.appendChild(upgrade);
}

function activateBooster() {
    boosterActive = true;
    showNotification("Triple Shot Booster Activated!");
    setTimeout(() => boosterActive = false, 10000); // Booster lasts for 10 seconds
}

function activateUltraBooster() {
    ultraBoosterActive = true;
    showNotification("Ultra Shot Booster Activated!");
    setTimeout(() => ultraBoosterActive = false, 10000); // Booster lasts for 10 seconds
}

function activateIndestructible() {
    indestructibleActive = true;
    spaceship.style.boxShadow = "0 0 20px 10px rgba(255, 255, 0, 0.8)";
    showNotification("Indestructible Booster Activated!");
    setTimeout(() => {
        indestructibleActive = false;
        spaceship.style.boxShadow = "none";
    }, 10000); // Indestructible lasts for 10 seconds
}

function activateRapidFire() {
    rapidFireActive = true;
    showNotification("Rapid Fire Booster Activated!");
    setTimeout(() => rapidFireActive = false, 10000); // Rapid fire lasts for 10 seconds
}

function activatePermanentUpgrade() {
    permanentUpgrade = true;
    showNotification("Permanent Bullet Upgrade Acquired!");
}

function createExplosion(element) {
    const explosion = document.createElement('div');
    explosion.className = 'explosion';
    explosion.style.left = `${element.getBoundingClientRect().left}px`;
    explosion.style.top = `${element.getBoundingClientRect().top}px`;
    game.appendChild(explosion);
    setTimeout(() => explosion.remove(), 500);
}

function moveSpaceship(direction) {
    let left = parseInt(window.getComputedStyle(spaceship).left);

    if (direction === 'left' && left > 0) {
        spaceship.style.left = `${left - 10}px`;
    } else if (direction === 'right' && left + spaceship.offsetWidth < window.innerWidth) {
        spaceship.style.left = `${left + 10}px`;
    }
}

function shoot() {
    if (canShoot || rapidFireActive) {
        if (ultraBoosterActive || permanentUpgrade) {
            createBullet(-15); // Leftmost bullet
            createBullet(-10); // Left bullet
            createBullet(-5);  // Slightly left bullet
            createBullet(0);   // Center bullet
            createBullet(5);   // Slightly right bullet
            createBullet(10);  // Right bullet
            createBullet(15);  // Rightmost bullet
        } else if (boosterActive) {
            createBullet(-10); // Left bullet
            createBullet(0);   // Center bullet
            createBullet(10);  // Right bullet
        } else {
            createBullet(0);   // Single bullet
        }
        if (!rapidFireActive) {
            canShoot = false;
            setTimeout(() => canShoot = true, 500);
        }
    }
}
function createBullet(offset) {
    const bullet = document.createElement('div');
    bullet.className = 'bullet';
    bullet.style.left = `${spaceship.getBoundingClientRect().left + 22 + offset}px`;
    bullet.style.bottom = '138px';
    game.appendChild(bullet);
    moveBullet(bullet);
}

function moveBullet(bullet) {
    const bulletInterval = setInterval(() => {
        const bulletRect = bullet.getBoundingClientRect();
        bullet.style.bottom = `${parseInt(bullet.style.bottom) + 5}px`;
        if (bulletRect.bottom <= 0) {
            clearInterval(bulletInterval);
            bullet.remove();
        }
    }, 20);
}

function isCollision(elem1, elem2) {
    const rect1 = elem1.getBoundingClientRect();
    const rect2 = elem2.getBoundingClientRect();
    return !(rect1.top > rect2.bottom || 
             rect1.bottom < rect2.top || 
             rect1.left > rect2.right || 
             rect1.right < rect2.left);
}

function adjustRockCreationInterval() {
    if (rockCreationInterval > minRockCreationInterval) {
        rockCreationInterval -= rockIntervalDecrement;
        clearInterval(rockInterval);
        rockInterval = setInterval(createRock, rockCreationInterval);
    }
}
function loseLife() {
    lives--;
    livesDisplay.textContent = '❤️'.repeat(lives);
    if (lives === 0) {
        endGame();
    }
}

function showNotification(message) {
    notification.textContent = message;
    notification.style.display = 'block';
    setTimeout(() => notification.style.display = 'none', 2000);
}
function createStars() {
            const background = document.getElementById('background');
            const numStars = 100;
            for (let i = 0; i < numStars; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.top = Math.random() * 100 + 'vh';
                star.style.left = Math.random() * 100 + 'vw';
                // Add different animation delays to create a more natural effect
                star.style.animationDelay = Math.random() * 10 + 's';
                background.appendChild(star);
            }
        }
startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', startGame);
achievementsButton.addEventListener('click', () => {
    achievementsScreen.style.display = 'flex';
});
closeAchievementsButton.addEventListener('click', () => {
    achievementsScreen.style.display = 'none';
});

window.addEventListener('keydown', (event) => {
    keys[event.key] = true;
    if (event.key === ' ') {
        shoot();
    }
});

window.addEventListener('keyup', (event) => {
    keys[event.key] = false;
});

// Touch controls for mobile devices
leftButton.addEventListener('touchstart', () => keys['ArrowLeft'] = true);
leftButton.addEventListener('touchend', () => keys['ArrowLeft'] = false);
rightButton.addEventListener('touchstart', () => keys['ArrowRight'] = true);
rightButton.addEventListener('touchend', () => keys['ArrowRight'] = false);
shootButton.addEventListener('touchstart', shoot);


function toggleFullScreen() {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                }
            }
        }
