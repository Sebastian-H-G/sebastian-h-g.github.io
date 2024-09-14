let score = 0;
let highscore = localStorage.getItem('riverHighScore') || 0;
document.getElementById('highscore').innerText = highscore;

let map;
let mapInitialized = false;

// Rivers Data (Simulated API)
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
    {
        name: "Yangtze",
        countries: ["China"],
        length: 6300,
        mouth: "East China Sea",
        trivia: "The Yangtze is the longest river in Asia.",
        flow: "East",
        coordinates: [31.2304, 121.4737],
    },
    {
        name: "Mississippi",
        countries: ["United States"],
        length: 3730,
        mouth: "Gulf of Mexico",
        trivia: "The Mississippi is the second-longest river in North America.",
        flow: "South",
        coordinates: [29.1527, -89.2506],
    },
    {
        name: "Yenisei",
        countries: ["Russia"],
        length: 5539,
        mouth: "Kara Sea",
        trivia: "The Yenisei River is the largest river system flowing into the Arctic Ocean.",
        flow: "North",
        coordinates: [70.0000, 86.5000],
    },
    {
        name: "Yellow River",
        countries: ["China"],
        length: 5464,
        mouth: "Bohai Sea",
        trivia: "The Yellow River is often called the cradle of Chinese civilization.",
        flow: "East",
        coordinates: [38.0700, 118.5100],
    },
    {
        name: "Congo",
        countries: ["Democratic Republic of the Congo", "Republic of the Congo"],
        length: 4700,
        mouth: "Atlantic Ocean",
        trivia: "The Congo River is the deepest river in the world.",
        flow: "West",
        coordinates: [-6.2676, 12.3753],
    },
    {
        name: "Amur",
        countries: ["Russia", "China"],
        length: 2824,
        mouth: "Sea of Okhotsk",
        trivia: "The Amur River forms the natural border between the Russian Far East and Northeastern China.",
        flow: "East",
        coordinates: [52.0330, 140.1660],
    },
    {
        name: "Lena",
        countries: ["Russia"],
        length: 4400,
        mouth: "Laptev Sea",
        trivia: "The Lena is the 11th longest river in the world and flows through Siberia.",
        flow: "North",
        coordinates: [72.4000, 126.5000],
    },
    {
        name: "Mekong",
        countries: ["China", "Myanmar", "Laos", "Thailand", "Cambodia", "Vietnam"],
        length: 4350,
        mouth: "South China Sea",
        trivia: "The Mekong River is one of the world's most biologically diverse areas.",
        flow: "South",
        coordinates: [9.3700, 106.3500],
    },
    {
        name: "Murray",
        countries: ["Australia"],
        length: 2508,
        mouth: "Southern Ocean",
        trivia: "The Murray is Australia's longest river and part of the Murray-Darling Basin.",
        flow: "Southwest",
        coordinates: [-35.5500, 139.2667],
    },
    {
        name: "Volga",
        countries: ["Russia"],
        length: 3530,
        mouth: "Caspian Sea",
        trivia: "The Volga is the longest river in Europe.",
        flow: "South",
        coordinates: [46.8000, 47.5000],
    },
    {
        name: "Danube",
        countries: ["Germany", "Austria", "Slovakia", "Hungary", "Croatia", "Serbia", "Romania", "Bulgaria", "Moldova", "Ukraine"],
        length: 2850,
        mouth: "Black Sea",
        trivia: "The Danube flows through more countries than any other river in the world.",
        flow: "East",
        coordinates: [45.1625, 29.2700],
    },
    {
        name: "Ganges",
        countries: ["India", "Bangladesh"],
        length: 2525,
        mouth: "Bay of Bengal",
        trivia: "The Ganges is considered sacred by Hindus and is an important spiritual river in India.",
        flow: "East",
        coordinates: [22.0800, 89.6250],
    },
    {
        name: "Rhine",
        countries: ["Switzerland", "Germany", "Netherlands"],
        length: 1233,
        mouth: "North Sea",
        trivia: "The Rhine is one of the most important waterways in Europe.",
        flow: "North",
        coordinates: [51.9675, 4.1239],
    },
    {
        name: "Indus",
        countries: ["Pakistan", "India", "China"],
        length: 3180,
        mouth: "Arabian Sea",
        trivia: "The Indus River is one of the longest rivers in Asia and was central to the Indus Valley Civilization.",
        flow: "Southwest",
        coordinates: [24.7167, 67.8000],
    },
    {
        name: "Tigris",
        countries: ["Turkey", "Iraq"],
        length: 1850,
        mouth: "Persian Gulf",
        trivia: "The Tigris, along with the Euphrates, is part of the historically significant Mesopotamia region.",
        flow: "Southeast",
        coordinates: [30.5500, 48.5250],
    },
    {
        name: "Euphrates",
        countries: ["Turkey", "Syria", "Iraq"],
        length: 2800,
        mouth: "Persian Gulf",
        trivia: "The Euphrates is the longest river in Western Asia.",
        flow: "Southeast",
        coordinates: [30.5500, 48.5250],
    },
    {
        name: "Dnieper",
        countries: ["Russia", "Belarus", "Ukraine"],
        length: 2200,
        mouth: "Black Sea",
        trivia: "The Dnieper is an important river for transportation and energy in Ukraine.",
        flow: "South",
        coordinates: [46.6667, 31.4167],
    },
    {
        name: "Zambezi",
        countries: ["Zambia", "Angola", "Namibia", "Botswana", "Zimbabwe", "Mozambique"],
        length: 2574,
        mouth: "Indian Ocean",
        trivia: "The Zambezi is famous for the Victoria Falls, one of the largest and most spectacular waterfalls in the world.",
        flow: "East",
        coordinates: [-18.3639, 36.3830],
    },
	{
    name: "Elbe",
    countries: ["Germany", "Czech Republic"],
    length: 1094,
    mouth: "North Sea",
    trivia: "The Elbe River runs through major German cities like Dresden and Hamburg.",
    flow: "Northwest",
    coordinates: [53.5500, 9.9937],
},
{
    name: "Main",
    countries: ["Germany"],
    length: 524,
    mouth: "Rhine River",
    trivia: "The Main River flows through the city of Frankfurt and is a major tributary of the Rhine.",
    flow: "West",
    coordinates: [50.1109, 8.6821],
},
{
    name: "Weser",
    countries: ["Germany"],
    length: 452,
    mouth: "North Sea",
    trivia: "The Weser River is the longest river entirely in Germany.",
    flow: "Northwest",
    coordinates: [53.0844, 8.8004],
},
{
    name: "Rio Grande",
    countries: ["United States", "Mexico"],
    length: 3034,
    mouth: "Gulf of Mexico",
    trivia: "The Rio Grande forms part of the border between the United States and Mexico.",
    flow: "Southeast",
    coordinates: [25.9692, -97.3678],
},
{
    name: "Lerma",
    countries: ["Mexico"],
    length: 750,
    mouth: "Lake Chapala",
    trivia: "The Lerma River is one of Mexico’s most important rivers, providing water to the Mexico City metropolitan area.",
    flow: "West",
    coordinates: [20.6736, -103.3440],
},
{
    name: "Balsas",
    countries: ["Mexico"],
    length: 770,
    mouth: "Pacific Ocean",
    trivia: "The Balsas River flows through southern Mexico and was historically a key agricultural area.",
    flow: "Southwest",
    coordinates: [17.2640, -101.8617],
},
{
    name: "Columbia",
    countries: ["United States", "Canada"],
    length: 2000,
    mouth: "Pacific Ocean",
    trivia: "The Columbia River is the largest river in the Pacific Northwest region of North America.",
    flow: "West",
    coordinates: [46.2530, -124.0135],
},
{
    name: "Ohio",
    countries: ["United States"],
    length: 1579,
    mouth: "Mississippi River",
    trivia: "The Ohio River forms the southern border of Ohio and Indiana, and its basin is a significant industrial area in the United States.",
    flow: "West",
    coordinates: [37.0333, -89.1000],
},
{
    name: "Potomac",
    countries: ["United States"],
    length: 652,
    mouth: "Chesapeake Bay",
    trivia: "The Potomac River flows through Washington, D.C., and is often referred to as the 'Nation's River.'",
    flow: "East",
    coordinates: [38.8951, -77.0364],
},
  // Add more rivers as needed
];

// Question types
const questionTypes = ["country", "length", "mouth", "trivia", "flow"];

// Function to check answer
function checkAnswer(selectedElement) {
    const selectedOption = selectedElement.innerText;
    const feedbackElement = document.getElementById("feedback-message");
    
    if (selectedOption === correctAnswer) {
        score++;
        document.getElementById("score").innerText = score;
        feedbackElement.innerText = "Correct!";
        feedbackElement.style.color = "green";

        if (score > highscore) {
            highscore = score;
            localStorage.setItem("riverHighScore", highscore);
            document.getElementById("highscore").innerText = highscore;
        }
        setTimeout(() => {
            feedbackElement.innerText = ""; // Clear the message after a short delay
            loadQuestion(); // Load new question
        }, 1000);
    } else {
        score = 0;
        document.getElementById("score").innerText = score;
        feedbackElement.innerText = `Wrong! The correct answer was ${correctAnswer}.`;
        feedbackElement.style.color = "red";

        setTimeout(() => {
            feedbackElement.innerText = ""; // Clear the message after a short delay
            loadQuestion(); // Load new question
        }, 2000);
    }
}

// Utility function to shuffle an array (Fisher-Yates shuffle)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Generate random options for questions
function generateRandomOptions(correctOption, allOptions) {
    const shuffledOptions = shuffle(allOptions);
    const selectedOptions = shuffledOptions.slice(0, 3).filter(opt => opt !== correctOption);
    return shuffle([correctOption, ...selectedOptions]);
}

let correctAnswer;

function loadQuestion() {
    const randomRiver = riverData[Math.floor(Math.random() * riverData.length)];
    const questionType = questionTypes[Math.floor(Math.random() * questionTypes.length)];

    let questionText;
    let options = [];

    // Clear previous options
    const optionElements = document.querySelectorAll(".option");
    optionElements.forEach(option => option.remove());

    if (questionType === "country") {
        questionText = `Through which country does the ${randomRiver.name} flow?`;
        let allCountries = riverData.flatMap(river => river.countries);
        options = generateRandomOptions(randomRiver.countries[0], allCountries);
        correctAnswer = randomRiver.countries[0];
    } else if (questionType === "length") {
        questionText = `What is the length of the ${randomRiver.name}?`;
        let lengthOptions = [randomRiver.length, randomRiver.length + 1000, randomRiver.length - 500, randomRiver.length + 2000];
        options = shuffle(lengthOptions.map(len => `${len} km`));
        correctAnswer = `${randomRiver.length} km`;
    } else if (questionType === "mouth") {
        questionText = `Where does the ${randomRiver.name} lead to?`;
        let allMouths = riverData.map(river => river.mouth);
        options = generateRandomOptions(randomRiver.mouth, allMouths);
        correctAnswer = randomRiver.mouth;
    } else if (questionType === "trivia") {
        questionText = `Trivia: ${randomRiver.trivia}`;
        options = ["True", "False"];
        correctAnswer = "True"; // Assuming trivia statements are always true
    } else if (questionType === "flow") {
        questionText = `In which direction does the ${randomRiver.name} flow?`;
        options = ["East", "West", "North", "South"];
        correctAnswer = randomRiver.flow;
    }

    document.getElementById("question").innerText = questionText;

    // Add options dynamically
    const optionsContainer = document.querySelector(".options");
    options.forEach(optionText => {
        const optionElement = document.createElement("li");
        optionElement.className = "option";
        optionElement.innerText = optionText;
        optionElement.onclick = function () {
            checkAnswer(this);
        };
        optionsContainer.appendChild(optionElement);
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
