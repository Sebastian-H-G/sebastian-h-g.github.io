const countries = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
 ];
        function normalizeCountryName(name) {
            return name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '').toLowerCase();
        }
        function displayCountriesTable() {
            const columns = 4; // Number of columns in the table
            let table = '<table><tr>';
            for (let i = 0; i < countries.length; i++) {
                const country = countries[i];
                const normalizedCountry = normalizeCountryName(country);
                const isGuessed = correctCountries.map(c => normalizeCountryName(c)).includes(normalizedCountry);
                const color = isGuessed ? 'green' : 'red';
                table += `<td style="color: ${color}">${country}</td>`;
                if ((i + 1) % columns === 0) {
                    table += '</tr><tr>';
                }
            }
            table += '</tr></table>';
            document.getElementById('countries-container').innerHTML = table;
        }
        
        const correctCountries = [];
        let score = 0;
        let timeRemaining = 5 * 60;
        
        const countryInput = document.getElementById('countryInput');
        const scoreBoard = document.getElementById('scoreBoard');
        const timerElement = document.getElementById('timer');
        
        countryInput.addEventListener('input', (e) => {
            checkCountry(e.target.value.trim());
        });
        
        function checkCountry(countryName) {
            countryName = countryName.toLowerCase();
            const normalizedCountryName = normalizeCountryName(countryName);
            if (countries.map(c => normalizeCountryName(c)).includes(normalizedCountryName) && !correctCountries.map(c => normalizeCountryName(c)).includes(normalizedCountryName)) {
                const originalCountryName = countries.find(c => normalizeCountryName(c) === normalizedCountryName);
                correctCountries.push(originalCountryName);
                score++;
                scoreBoard.textContent = `Score: ${score} / 50`;
                document.querySelector(`[title="${originalCountryName}"]`).classList.add('correct');
                countryInput.value = ''; // Clear the input field
            }
        }
        
        document.addEventListener('DOMContentLoaded', () => {
            let countdownInterval;
            let pauseCount = 0;
            const maxPauses = 2;
            let isPaused = false;
            function endGame() {
                countries.forEach(country => {
                    if (!correctCountries.includes(country)) {
                        document.querySelector(`[title="${country}"]`).classList.add('not-guessed');
                    }
                });
            }
            function checkAllStatesGuessed() {
                return correctCountries.length === countries.length;
            }
            
            function startCountdown() {
                countdownInterval = setInterval(() => {
                    if (!isPaused) {
                        timeRemaining--;
                        const minutes = Math.floor(timeRemaining / 60);
                        const seconds = timeRemaining % 60;
                        timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
                        if (timeRemaining <= 0 || checkAllStatesGuessed()) {
                            clearInterval(countdownInterval);
                            const messageElement = document.getElementById('message');
                            const giveUpButton = document.getElementById('giveUpButton');
                            
                            if (checkAllStatesGuessed()) {
                                createConfetti();
                                messageElement.textContent = `Congratulations! 👏 You named all states correctly. 🎉`;
                                messageElement.style.color = 'green';
                                pauseButton.style.display = 'none';
                                displayCountriesTable();
                                messageElement.classList.add('congrats-animation');
                                setTimeout(() => {
                                    messageElement.classList.remove('congrats-animation');
                                }, 1500);
                                
                                // Change "Give Up" button to "Restart" button
                                giveUpButton.textContent = 'Restart';
                                giveUpButton.onclick = () => location.reload();
                            } else {
                                messageElement.textContent = `Time is up! You named ${score} states.`;
                                // Change "Give Up" button to "Restart" button
                                giveUpButton.textContent = 'Restart';
                                giveUpButton.onclick = () => location.reload();
                                pauseButton.style.display = 'none';
                            }
                            
                            messageElement.style.display = 'block';
                            countryInput.disabled = true;
                            endGame();
                            // Disable the input field
                            displayCountriesTable();
                        }
                    }
                }, 1000);
            }     
            function endGame() {
                countries.forEach(country => {
                    const countryElement = document.querySelector(`[title="${country}"]`);
                    if (countryElement && !correctCountries.includes(country)) {
                        countryElement.classList.add('not-guessed');
                    }
                });
                displayCountriesTable(); // Ensure the table is displayed at the end of the game
            }
            // Confetti animation function
    function createConfetti() {
        const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548'];
    
        function createPiece() {
            const piece = document.createElement('div');
            piece.classList.add('confetti');
            piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            piece.style.width = Math.random() * 20 + 'px';
            piece.style.height = Math.random() * 20 + 'px';
            piece.style.left = (Math.random() * window.innerWidth) + 'px';
            piece.style.top = '-20px';
            piece.style.animationDuration = '2s'; // Set animation duration to 3 seconds
            document.body.appendChild(piece);
            piece.addEventListener('animationend', function() {
                piece.parentNode.removeChild(piece);
            });
        }
    
        // Adjust the number of confetti pieces
        const totalPieces = 700;
        const interval = 5; // milliseconds
    
        let i = 0;
        let intervalId = setInterval(function() {
            createPiece();
            i++;
            if (i >= totalPieces) {
                clearInterval(intervalId);
            }
        }, interval);
    }
    function getCentroid(path) {
        let length = path.getTotalLength();
        let numPoints = 1500; // Increase for better accuracy
        let sumX = 0, sumY = 0;

        for (let i = 0; i < numPoints; i++) {
            let point = path.getPointAtLength((i / numPoints) * length);
            sumX += point.x;
            sumY += point.y;
        }

        return { x: sumX / numPoints, y: sumY / numPoints };
    }

    function addStateLabels() {
        const statePaths = document.querySelectorAll("path");
        statePaths.forEach(state => {
            let center = getCentroid(state);
            
            let text = document.createElementNS("http://www.w3.org/2000/svg", "text");
            text.setAttribute("x", center.x);
            text.setAttribute("y", center.y);
            text.setAttribute("font-size", "5");
            text.setAttribute("fill", "black");
            text.setAttribute("dominant-baseline", "middle");
            text.textContent = state.id;

            document.getElementById("map").appendChild(text);

            // Adjust text horizontally based on its width
            let textWidth = text.getComputedTextLength();
            text.setAttribute("x", center.x - textWidth / 2);
        });
    }



    // Add event listener for keydown to detect Control + X
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'x') {
        isPaused = !isPaused; // Toggle the timerRunning variable
        pauseButton.disabled = true;
        if (timerRunning) {
            startTimer();
        } else {
            stopTimer();
        }
    }
});
document.getElementById('showlabels').addEventListener('click', addStateLabels);
function stopTimer() {
    isPaused = true;
}
            function togglePause() {
                const pauseButton = document.getElementById('pauseButton');
                if (!isPaused && pauseCount < maxPauses) {
                    isPaused = true;
                    pauseCount++;
                    pauseButton.classList.remove('pause');
                    pauseButton.classList.add('play');
                    countryInput.disabled = true;
                    document.getElementById('map-container').style.display = 'none'; // Disable map interaction
                    document.getElementById('pauseMessage').style.display = 'block';
                    document.getElementById('pauseMessage').textContent = `The Game is paused! Pauses left: ${maxPauses - pauseCount}`;
                } else if (isPaused) {
                    isPaused = false;
                    pauseButton.classList.remove('play');
                    pauseButton.classList.add('pause');
                    countryInput.disabled = false;
                    document.getElementById('map-container').style.display = 'block'; // Enable map interaction
                    document.getElementById('pauseMessage').style.display = 'none';
        
                    if (pauseCount >= maxPauses) {
                        pauseButton.disabled = true;
                        pauseButton.style.display = 'none';
                    }
                }
            }
        
            function giveUp() {
                clearInterval(countdownInterval);
                const messageElement = document.getElementById('message');
                messageElement.textContent = `You have up! You named ${score} states.`;
                messageElement.style.display = 'block';
                countryInput.value = ''; // Clear the input field
                displayCountriesTable(); // Ensure the table is displayed
                document.getElementById('pauseButton').style.display = 'none';
                document.getElementById('giveUpButton').style.display = 'none';
                document.getElementById('restartButton').style.display = 'block';
                document.getElementById('pauseMessage').style.display = 'none';
                document.getElementById('map-container').style.display = 'block';
                countryInput.disabled = true; // Disable the input field
                endGame();
            }
        
            function restartGame() {
                location.reload();
            }
        
            document.getElementById('pauseButton').addEventListener('click', togglePause);
            document.getElementById('giveUpButton').addEventListener('click', giveUp);
            document.getElementById('restartButton').addEventListener('click', restartGame);
        
            startCountdown();
        });
        startCountdown();
        
        
