const canvas = document.getElementById('caveCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



// =====================
// BAT SPRITES
// =====================
const batImages = {
    up: new Image(),
    normal: new Image(),
    down: new Image()
};

batImages.up.src = 'bat_images/bat_up.png';
batImages.normal.src = 'bat_images/bat_normal.png';
batImages.down.src = 'bat_images/bat_down.png';

// =====================
// GAME STATE
// =====================
let gameState = 'start'; // start | playing | gameover
let lastTime = performance.now();

// =====================
// CAVE SETTINGS
// =====================
const sliceWidth = 50;
let caveHeight = canvas.height / 4;
let totalSlices = Math.ceil(canvas.width / sliceWidth) + 2;
const slices = [];

// =====================
// SCROLL MOTION
// =====================
let speed = 200;
let acceleration = 30;
let maxSpeed = 700;
let offsetX = 0;

// =====================
// BAT
// =====================
const bat = {
    x: canvas.width * 0.25,
    y: canvas.height / 2,
    radius: 15, // still used for collision
    velocity: 0,
    gravity: 1800,
    liftForce: -1400,
    flapImpulse: -600,

    // animation
    sprite: 'normal',
    animTimer: 0
};

let holding = false;

// =====================
// OBSTACLES
// =====================
const obstacles = [];
const obstacleWidth = 35;
let obstacleTimer = 0;
let obstacleInterval = 2.5;
let maxObstaclesOnScreen = 1;

// =====================
// HELPERS
// =====================
function lerp(a, b, t) {
    return a + (b - a) * t;
}

function circleRectCollision(cx, cy, r, rx, ry, rw, rh) {
    const closestX = Math.max(rx, Math.min(cx, rx + rw));
    const closestY = Math.max(ry, Math.min(cy, ry + rh));
    const dx = cx - closestX;
    const dy = cy - closestY;
    return dx * dx + dy * dy <= r * r;
}

// =====================
// CAVE GENERATION
// =====================
function generateSlice() {
    return {
        top: Math.random() * (caveHeight / 2),
        bottom: Math.random() * (caveHeight / 2)
    };
}

function initCave() {
    slices.length = 0;
    for (let i = 0; i < totalSlices; i++) {
        slices.push(generateSlice());
    }
}

initCave();

// =====================
// OBSTACLE GENERATION
// =====================
function generateObstacle() {
    const fromTop = Math.random() < 0.5;
    const height = 80 + Math.random() * 160;

    const toothHeight = 14; // vertical size of each tooth
    const toothDepth = 8;   // how much it cuts inward
    const toothCount = Math.floor(height / toothHeight);

    obstacles.push({
        x: canvas.width + obstacleWidth,
        y: fromTop ? 0 : canvas.height - height,
        width: obstacleWidth,
        height,
        vx: -(speed * 0.9),
        vy: fromTop ? 60 : -60,
        toothHeight,
        toothDepth,
        toothCount
    });
}



// =====================
// DRAWING
// =====================
function drawCave() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Top
    ctx.beginPath();
    ctx.moveTo(0, 0);
    slices.forEach((s, i) => {
        const x = i * sliceWidth - offsetX;
        ctx.lineTo(x, s.top);
    });
    ctx.lineTo(canvas.width, 0);
    ctx.closePath();
    ctx.fillStyle = '#3e205f';
    ctx.fill();

    // Bottom
    ctx.beginPath();
    ctx.moveTo(0, canvas.height);
    slices.forEach((s, i) => {
        const x = i * sliceWidth - offsetX;
        ctx.lineTo(x, canvas.height - s.bottom);
    });
    ctx.lineTo(canvas.width, canvas.height);
    ctx.closePath();
    ctx.fillStyle = '#4E2A84';
    ctx.fill();
}


function drawObstacles() {
    ctx.fillStyle = '#0f0f0f'; // darker = sharper look

    obstacles.forEach(o => {
        ctx.beginPath();

        const spikeHeight = o.toothHeight;
        const spikeDepth = o.toothDepth;

        // --- LEFT SIDE (top → bottom, spikes) ---
        ctx.moveTo(o.x, o.y);

        for (let i = 0; i < o.toothCount; i++) {
            const yTop = o.y + i * spikeHeight;
            const yMid = yTop + spikeHeight / 2;
            const yBottom = yTop + spikeHeight;

            // spike tip
            ctx.lineTo(o.x + spikeDepth, yMid);
            ctx.lineTo(o.x, yBottom);
        }

        // Bottom edge (flat)
        ctx.lineTo(o.x + o.width, o.y + o.height);

        // --- RIGHT SIDE (bottom → top, mirrored spikes) ---
        for (let i = o.toothCount - 1; i >= 0; i--) {
            const yTop = o.y + i * spikeHeight;
            const yMid = yTop + spikeHeight / 2;
            const yBottom = yTop + spikeHeight;

            ctx.lineTo(o.x + o.width - spikeDepth, yMid);
            ctx.lineTo(o.x + o.width, yTop);
        }

        // Top edge (flat)
        ctx.closePath();
        ctx.fill();
    });
}





function drawBat() {
    const img = batImages[bat.sprite];

    const size = bat.radius * 5.6; // tweak visually
    ctx.drawImage(
        img,
        bat.x - size / 2,
        bat.y - size / 2,
        size,
        size
    );
}


// =====================
// SCREENS
// =====================
function drawStartScreen() {
    ctx.fillStyle = '#1a102a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#FFD700';
    ctx.font = '64px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Bat Cave', canvas.width / 2, canvas.height / 2 - 80);

    ctx.fillStyle = '#ffffff';
    ctx.font = '28px sans-serif';
    ctx.fillText('Tap or Click to Start', canvas.width / 2, canvas.height / 2);
}

function drawGameOver() {
    ctx.fillStyle = 'rgba(0,0,0,0.6)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#fff';
    ctx.font = '48px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Game Over', canvas.width / 2, canvas.height / 2 - 40);

    ctx.font = '24px sans-serif';
    ctx.fillText('Tap or Click to Restart', canvas.width / 2, canvas.height / 2 + 20);
}

// =====================
// COLLISION
// =====================
function checkCaveCollision() {
    const worldX = bat.x + offsetX;
    const index = Math.floor(worldX / sliceWidth);
    const a = slices[index];
    const b = slices[index + 1];
    if (!a || !b) return false;

    const t = (worldX % sliceWidth) / sliceWidth;
    const topY = lerp(a.top, b.top, t);
    const bottomY = lerp(
        canvas.height - a.bottom,
        canvas.height - b.bottom,
        t
    );

    return (
        bat.y - bat.radius <= topY ||
        bat.y + bat.radius >= bottomY
    );
}

function checkObstacleCollision() {
    for (const o of obstacles) {
        if (
            circleRectCollision(
                bat.x,
                bat.y,
                bat.radius,
                o.x,
                o.y,
                o.width,
                o.height
            )
        ) {
            return true;
        }
    }
    return false;
}

// =====================
// INPUT
// =====================
function flap() {
    bat.velocity = bat.flapImpulse;

    // start animation cycle
    bat.sprite = 'up';
    bat.animTimer = 0.12; // seconds until next frame
}

window.addEventListener('pointerdown', () => {
    if (gameState === 'start') {
        startGame();
        return;
    }
    if (gameState === 'gameover') {
        restartGame();
        return;
    }
    holding = true;
    flap();
});

window.addEventListener('pointerup', () => holding = false);
window.addEventListener('pointercancel', () => holding = false);

// =====================
// GAME CONTROL
// =====================
function startGame() {
    gameState = 'playing';
    lastTime = performance.now();
}

function restartGame() {
    gameState = 'playing';
    speed = 200;
    offsetX = 0;
    bat.y = canvas.height / 2;
    bat.velocity = 0;
    obstacles.length = 0;
    obstacleTimer = 0;
    obstacleInterval = 2.5;
    maxObstaclesOnScreen = 1;
    lastTime = performance.now();
    initCave();
}

// =====================
// GAME LOOP
// =====================
function animate(time) {
    const delta = (time - lastTime) / 1000;
    lastTime = time;

    if (gameState === 'playing') {
        // =====================
        // Difficulty
        // =====================
        speed = Math.min(speed + acceleration * delta, maxSpeed);
        if (speed > 350) obstacleInterval = 2;
        if (speed > 500) maxObstaclesOnScreen = 2;

        // =====================
        // Scroll cave
        // =====================
        offsetX += speed * delta;
        if (offsetX >= sliceWidth) {
            offsetX -= sliceWidth;
            slices.shift();
            slices.push(generateSlice());
        }

        // =====================
        // Obstacles
        // =====================
        obstacleTimer += delta;
        if (obstacleTimer >= obstacleInterval && obstacles.length < maxObstaclesOnScreen) {
            obstacleTimer = 0;
            generateObstacle();
        }

        obstacles.forEach(o => {
            o.x += o.vx * delta;
            o.y += o.vy * delta;

            if (o.vy > 0 && o.y + o.height > canvas.height) {
                o.y = canvas.height - o.height;
                o.vy = 0;
            }
            if (o.vy < 0 && o.y < 0) {
                o.y = 0;
                o.vy = 0;
            }
        });

        for (let i = obstacles.length - 1; i >= 0; i--) {
            if (obstacles[i].x + obstacles[i].width < 0) {
                obstacles.splice(i, 1);
            }
        }

        // =====================
        // Bat physics
        // =====================
        bat.velocity += bat.gravity * delta;
        if (holding) bat.velocity += bat.liftForce * delta;
        bat.y += bat.velocity * delta;

        // =====================
        // Bat sprite animation
        // =====================
        if (bat.animTimer > 0) {
            bat.animTimer -= delta;

            if (bat.animTimer <= 0) {
                if (bat.sprite === 'up') {
                    bat.sprite = 'normal';
                    bat.animTimer = 0.08;
                } else if (bat.sprite === 'normal') {
                    bat.sprite = 'down';
                    bat.animTimer = 0.08;
                } else if (bat.sprite === 'down') {
                    bat.sprite = 'normal';
                }
            }
        }

        // =====================
        // Collision
        // =====================
        if (checkCaveCollision() || checkObstacleCollision()) {
            gameState = 'gameover';
            bat.velocity = 0;
        }
    }

    // =====================
    // Drawing
    // =====================
    drawCave();
    drawObstacles();
    drawBat();

    if (gameState === 'start') drawStartScreen();
    if (gameState === 'gameover') drawGameOver();

    requestAnimationFrame(animate);
}

// =====================
// RESIZE
// =====================
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    caveHeight = canvas.height / 2;
    totalSlices = Math.ceil(canvas.width / sliceWidth) + 2;
    initCave();
});

// =====================
// START
// =====================
requestAnimationFrame(animate);
