let score = 0;
let highscore = localStorage.getItem('riverHighScore') || 0;
document.getElementById('highscore').innerText = highscore;

let map;
let mapInitialized = false;

// Rivers Data (Simulated API)
const riverData = [
    {
        name: "Amazon",
        countries: ["Brazil", "Peru", "Colombia"],
        length: 6400,
        mouth: "Atlantic Ocean",
        trivia: "The Amazon River is the largest river by discharge volume of water in the world.",
        flow: "East",
        coordinates: [-3.4653, -62.2159],
    },
    {
        name: "Nile",
        countries: ["Egypt", "Sudan", "Uganda"],
        length: 6650,
        mouth: "Mediterranean Sea",
        trivia: "The Nile River is widely regarded as the longest river in the world.",
        flow: "North",
        coordinates: [30.0444, 31.2357],
    },
    // Add more rivers as needed
];

// Question types
const questionTypes = ["country", "length", "mouth", "trivia", "flow"];

// Load Question
function loadQuestion() {
    const difficulty = document.getElementById("difficulty").value;
    const randomRiver = riverData[Math.floor(Math.random() * riverData.length)];
    const questionType = questionTypes[Math.floor(Math.random() * questionTypes.length)];

    let questionText;
    let options = [];
    let correctAnswer;

    if (questionType === "country") {
        questionText = `Through which country does the ${randomRiver.name} flow?`;
        options = ["USA", "Brazil", "China", "Egypt"];
        correctAnswer = randomRiver.countries.includes(options[1]) ? options[1] : randomRiver.countries[0];
    } else if (questionType === "length") {
        questionText = `What is the length of the ${randomRiver.name}?`;
        options = ["6400 km", "7000 km", "5000 km", "3000 km"];
        correctAnswer = `${randomRiver.length} km`;
    } else if (questionType === "mouth") {
        questionText = `Where does the ${randomRiver.name} lead to?`;
        options = ["Atlantic Ocean", "Mediterranean Sea", "Pacific Ocean", "Indian Ocean"];
        correctAnswer = randomRiver.mouth;
    } else if (questionType === "trivia") {
        questionText = `Trivia: ${randomRiver.trivia}`;
        options = ["True", "False"];
        correctAnswer = "True";
    } else if (questionType === "flow") {
        questionText = `In which direction does the ${randomRiver.name} flow?`;
        options = ["East", "West", "North", "South"];
        correctAnswer = randomRiver.flow;
    }

    document.getElementById("question").innerText = questionText;
    const optionElements = document.querySelectorAll(".option");
    optionElements.forEach((option, index) => {
        option.innerText = options[index];
    });

    optionElements.forEach((option, index) => {
        option.onclick = function () {
            if (options[index] === correctAnswer) {
                score++;
                document.getElementById("score").innerText = score;
                if (score > highscore) {
                    highscore = score;
                    localStorage.setItem("riverHighScore", highscore);
                    document.getElementById("highscore").innerText = highscore;
                }
                loadQuestion(); // Load new question
            } else {
                score = 0;
                document.getElementById("score").innerText = score;
                alert("Wrong! Score reset.");
                loadQuestion(); // Load new question
            }
        };
    });

    // Map Integration
    document.getElementById("toggle-map").addEventListener("click", () => {
        const mapContainer = document.getElementById("map-container");
        if (!mapInitialized) {
            initializeMap(randomRiver.coordinates);
            mapInitialized = true;
        } else {
            map.setView(randomRiver.coordinates, 5); // Reset map to the new river's location
        }

        // Toggle map visibility
        if (mapContainer.style.display === "none") {
            mapContainer.style.display = "block";
            setTimeout(() => map.invalidateSize(), 0); // Ensure map renders properly when shown
        } else {
            mapContainer.style.display = "none";
        }
    });
}

// Initialize Map
function initializeMap(coords) {
    map = L.map("map").setView(coords, 5);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker(coords).addTo(map).bindPopup("River Location").openPopup();
}

// Initialize the first question
loadQuestion();
