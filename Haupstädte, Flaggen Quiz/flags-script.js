const flags = [
// Europa
    { country: 'Albanien', img: 'flags/al.webp', id: 'AL' },
    { country: 'Andorra', img: 'flags/ad.webp', id: 'AD' },
    { country: 'Belgien', img: 'flags/be.webp', id: 'BE' },
    { country: 'Bosnien und Herzegowina', img: 'flags/ba.webp', id: 'BA' },
    { country: 'Bulgarien', img: 'flags/bg.webp', id: 'BG' },
    { country: 'Dänemark', img: 'flags/dk.webp', id: 'DK' },
    { country: 'Deutschland', img: 'flags/de.webp', id: 'DE' },
    { country: 'Estland', img: 'flags/ee.webp', id: 'EE' },
    { country: 'Finnland', img: 'flags/fi.webp', id: 'FI' },
    { country: 'Frankreich', img: 'flags/fr.webp', id: 'FR' },
    { country: 'Griechenland', img: 'flags/gr.webp', id: 'GR' },
    { country: 'Irland', img: 'flags/ie.webp', id: 'IE' },
    { country: 'Island', img: 'flags/is.webp', id: 'IS' },
    { country: 'Italien', img: 'flags/it.webp', id: 'IT' },
    { country: 'Kosovo', img: 'flags/xk.webp', id: 'XK' },
    { country: 'Kroatien', img: 'flags/hr.webp', id: 'HR' },
    { country: 'Lettland', img: 'flags/lv.webp', id: 'LV' },
    { country: 'Liechtenstein', img: 'flags/li.webp', id: 'LI' },
    { country: 'Litauen', img: 'flags/lt.webp', id: 'LT' },
    { country: 'Luxemburg', img: 'flags/lu.webp', id: 'LU' },
    { country: 'Malta', img: 'flags/mt.webp', id: 'MT' },
    { country: 'Moldawien', img: 'flags/md.webp', id: 'MD' },
    { country: 'Monaco', img: 'flags/mc.webp', id: 'MC' },
    { country: 'Montenegro', img: 'flags/me.webp', id: 'ME' },
    { country: 'Niederlande', img: 'flags/nl.webp', id: 'NL' },
    { country: 'Nordmazedonien', img: 'flags/mk.webp', id: 'MK' },
    { country: 'Norwegen', img: 'flags/no.webp', id: 'NO' },
    { country: 'Österreich', img: 'flags/at.webp', id: 'AT' },
    { country: 'Polen', img: 'flags/pl.webp', id: 'PL' },
    { country: 'Portugal', img: 'flags/pt.webp', id: 'PT' },
    { country: 'Rumänien', img: 'flags/ro.webp', id: 'RO' },
    { country: 'Russland', img: 'flags/ru.webp', id: 'RU' },
    { country: 'San Marino', img: 'flags/sm.webp', id: 'SM' },
    { country: 'Schweden', img: 'flags/se.webp', id: 'SE' },
    { country: 'Schweiz', img: 'flags/ch.webp', id: 'CH' },
    { country: 'Serbien', img: 'flags/rs.webp', id: 'RS' },
    { country: 'Slowakei', img: 'flags/sk.webp', id: 'SK' },
    { country: 'Slowenien', img: 'flags/si.webp', id: 'SI' },
    { country: 'Spanien', img: 'flags/es.webp', id: 'ES' },
    { country: 'Tschechien', img: 'flags/cz.webp', id: 'CZ' },
    { country: 'Ukraine', img: 'flags/ua.webp', id: 'UA' },
    { country: 'Ungarn', img: 'flags/hu.webp', id: 'HU' },
    { country: 'Vereinigtes Königreich', img: 'flags/gb.webp', id: 'GB' },
    { country: 'Weißrussland', img: 'flags/by.webp', id: 'BY' },
    { country: 'Zypern', img: 'flags/cy.webp', id: 'CY' },
// Asien
	{ country: 'Afghanistan', img: 'flags/af.webp', id: 'AF' },
    { country: 'Armenien', img: 'flags/am.webp', id: 'AM' },
    { country: 'Aserbaidschan', img: 'flags/az.webp', id: 'AZ' },
    { country: 'Bahrain', img: 'flags/bh.webp', id: 'BH' },
    { country: 'Bangladesch', img: 'flags/bd.webp', id: 'BD' },
    { country: 'Bhutan', img: 'flags/bt.webp', id: 'BT' },
    { country: 'Brunei', img: 'flags/bn.webp', id: 'BN' },
    { country: 'China', img: 'flags/cn.webp', id: 'CN' },
    { country: 'Georgien', img: 'flags/ge.webp', id: 'GE' },
    { country: 'Indien', img: 'flags/in.webp', id: 'IN' },
    { country: 'Indonesien', img: 'flags/id.webp', id: 'ID' },
    { country: 'Irak', img: 'flags/iq.webp', id: 'IQ' },
    { country: 'Iran', img: 'flags/ir.webp', id: 'IR' },
    { country: 'Israel', img: 'flags/il.webp', id: 'IL' },
    { country: 'Japan', img: 'flags/jp.webp', id: 'JP' },
    { country: 'Jordanien', img: 'flags/jo.webp', id: 'JO' },
    { country: 'Kambodscha', img: 'flags/kh.webp', id: 'KH' },
    { country: 'Kasachstan', img: 'flags/kz.webp', id: 'KZ' },
    { country: 'Katar', img: 'flags/qa.webp', id: 'QA' },
    { country: 'Kirgisistan', img: 'flags/kg.webp', id: 'KG' },
    { country: 'Kuwait', img: 'flags/kw.webp', id: 'KW' },
    { country: 'Laos', img: 'flags/la.webp', id: 'LA' },
    { country: 'Libanon', img: 'flags/lb.webp', id: 'LB' },
    { country: 'Malaysia', img: 'flags/my.webp', id: 'MY' },
    { country: 'Malediven', img: 'flags/mv.webp', id: 'MV' },
    { country: 'Mongolei', img: 'flags/mn.webp', id: 'MN' },
    { country: 'Myanmar', img: 'flags/mm.webp', id: 'MM' },
    { country: 'Nepal', img: 'flags/np.webp', id: 'NP' },
    { country: 'Nordkorea', img: 'flags/kp.webp', id: 'KP' },
    { country: 'Oman', img: 'flags/om.webp', id: 'OM' },
    { country: 'Osttimor', img: 'flags/tl.webp', id: 'TL' },
    { country: 'Pakistan', img: 'flags/pk.webp', id: 'PK' },
    { country: 'Philippinen', img: 'flags/ph.webp', id: 'PH' },
    { country: 'Saudi-Arabien', img: 'flags/sa.webp', id: 'SA' },
    { country: 'Singapur', img: 'flags/sg.webp', id: 'SG' },
    { country: 'Sri Lanka', img: 'flags/lk.webp', id: 'LK' },
    { country: 'Südkorea', img: 'flags/kr.webp', id: 'KR' },
    { country: 'Syrien', img: 'flags/sy.webp', id: 'SY' },
    { country: 'Tadschikistan', img: 'flags/tj.webp', id: 'TJ' },
    { country: 'Thailand', img: 'flags/th.webp', id: 'TH' },
    { country: 'Turkmenistan', img: 'flags/tm.webp', id: 'TM' },
    { country: 'Usbekistan', img: 'flags/uz.webp', id: 'UZ' },
    { country: 'Vereinigte Arabische Emirate', img: 'flags/ae.webp', id: 'AE' },
    { country: 'Vietnam', img: 'flags/vn.webp', id: 'VN' },
    { country: 'Zypern', img: 'flags/cy.webp', id: 'CY' },	
// Nordamerika
    { country: 'Antigua und Barbuda', img: 'flags/ag.webp', id: 'AG' },
    { country: 'Bahamas', img: 'flags/bs.webp', id: 'BS' },
    { country: 'Barbados', img: 'flags/bb.webp', id: 'BB' },
    { country: 'Belize', img: 'flags/bz.webp', id: 'BZ' },
    { country: 'Costa Rica', img: 'flags/cr.webp', id: 'CR' },
    { country: 'Dominica', img: 'flags/dm.webp', id: 'DM' },
    { country: 'Dominikanische Republik', img: 'flags/do.webp', id: 'DO' },
    { country: 'El Salvador', img: 'flags/sv.webp', id: 'SV' },
    { country: 'Grenada', img: 'flags/gd.webp', id: 'GD' },
    { country: 'Guatemala', img: 'flags/gt.webp', id: 'GT' },
    { country: 'Haiti', img: 'flags/ht.webp', id: 'HT' },
    { country: 'Honduras', img: 'flags/hn.webp', id: 'HN' },
    { country: 'Jamaika', img: 'flags/jm.webp', id: 'JM' },
    { country: 'Kanada', img: 'flags/ca.webp', id: 'CA' },
    { country: 'Kuba', img: 'flags/cu.webp', id: 'CU' },
    { country: 'Mexiko', img: 'flags/mx.webp', id: 'MX' },
    { country: 'Nicaragua', img: 'flags/ni.webp', id: 'NI' },
    { country: 'Panama', img: 'flags/pa.webp', id: 'PA' },
    { country: 'St. Kitts und Nevis', img: 'flags/kn.webp', id: 'KN' },
    { country: 'St. Lucia', img: 'flags/lc.webp', id: 'LC' },
    { country: 'St. Vincent und die Grenadinen', img: 'flags/vc.webp', id: 'VC' },
    { country: 'Trinidad und Tobago', img: 'flags/tt.webp', id: 'TT' },
    { country: 'USA', img: 'flags/us.webp', id: 'US' },
// Südamerika
    { country: 'Argentinien', img: 'flags/ar.webp', id: 'AR' },
    { country: 'Bolivien', img: 'flags/bo.webp', id: 'BO' },
    { country: 'Brasilien', img: 'flags/br.webp', id: 'BR' },
    { country: 'Chile', img: 'flags/cl.webp', id: 'CL' },
    { country: 'Ecuador', img: 'flags/ec.webp', id: 'EC' },
    { country: 'Guyana', img: 'flags/gy.webp', id: 'GY' },
    { country: 'Kolumbien', img: 'flags/co.webp', id: 'CO' },
    { country: 'Paraguay', img: 'flags/py.webp', id: 'PY' },
    { country: 'Peru', img: 'flags/pe.webp', id: 'PE' },
    { country: 'Suriname', img: 'flags/sr.webp', id: 'SR' },
    { country: 'Uruguay', img: 'flags/uy.webp', id: 'UY' },
    { country: 'Venezuela', img: 'flags/ve.webp', id: 'VE' },
// Afrika
    { country: 'Algerien', img: 'flags/dz.webp', id: 'DZ' },
    { country: 'Angola', img: 'flags/ao.webp', id: 'AO' },
    { country: 'Äquatorialguinea', img: 'flags/gq.webp', id: 'GQ' },
    { country: 'Äthiopien', img: 'flags/et.webp', id: 'ET' },
    { country: 'Benin', img: 'flags/bj.webp', id: 'BJ' },
    { country: 'Botswana', img: 'flags/bw.webp', id: 'BW' },
    { country: 'Burkina Faso', img: 'flags/bf.webp', id: 'BF' },
    { country: 'Burundi', img: 'flags/bi.webp', id: 'BI' },
    { country: 'Dschibuti', img: 'flags/dj.webp', id: 'DJ' },
    { country: 'Elfenbeinküste', img: 'flags/ci.webp', id: 'CI' },
    { country: 'Eritrea', img: 'flags/er.webp', id: 'ER' },
    { country: 'Eswatini', img: 'flags/sz.webp', id: 'SZ' },
    { country: 'Gabun', img: 'flags/ga.webp', id: 'GA' },
    { country: 'Gambia', img: 'flags/gm.webp', id: 'GM' },
    { country: 'Ghana', img: 'flags/gh.webp', id: 'GH' },
    { country: 'Guinea', img: 'flags/gn.webp', id: 'GN' },
    { country: 'Guinea-Bissau', img: 'flags/gw.webp', id: 'GW' },
    { country: 'Kamerun', img: 'flags/cm.webp', id: 'CM' },
    { country: 'Kap Verde', img: 'flags/cv.webp', id: 'CV' },
    { country: 'Kenia', img: 'flags/ke.webp', id: 'KE' },
    { country: 'Komoren', img: 'flags/km.webp', id: 'KM' },
    { country: 'Demokratische Republik Kongo', img: 'flags/cd.webp', id: 'CD' },
    { country: 'Republik Kongo', img: 'flags/cg.webp', id: 'CG' },
    { country: 'Lesotho', img: 'flags/ls.webp', id: 'LS' },
    { country: 'Liberia', img: 'flags/lr.webp', id: 'LR' },
    { country: 'Libyen', img: 'flags/ly.webp', id: 'LY' },
    { country: 'Madagaskar', img: 'flags/mg.webp', id: 'MG' },
    { country: 'Malawi', img: 'flags/mw.webp', id: 'MW' },
    { country: 'Mali', img: 'flags/ml.webp', id: 'ML' },
    { country: 'Marokko', img: 'flags/ma.webp', id: 'MA' },
    { country: 'Mauretanien', img: 'flags/mr.webp', id: 'MR' },
    { country: 'Mauritius', img: 'flags/mu.webp', id: 'MU' },
    { country: 'Mosambik', img: 'flags/mz.webp', id: 'MZ' },
    { country: 'Namibia', img: 'flags/na.webp', id: 'NA' },
    { country: 'Niger', img: 'flags/ne.webp', id: 'NE' },
    { country: 'Nigeria', img: 'flags/ng.webp', id: 'NG' },
    { country: 'Ruanda', img: 'flags/rw.webp', id: 'RW' },
    { country: 'Sambia', img: 'flags/zm.webp', id: 'ZM' },
    { country: 'São Tomé und Príncipe', img: 'flags/st.webp', id: 'ST' },
    { country: 'Senegal', img: 'flags/sn.webp', id: 'SN' },
    { country: 'Seychellen', img: 'flags/sc.webp', id: 'SC' },
    { country: 'Sierra Leone', img: 'flags/sl.webp', id: 'SL' },
    { country: 'Simbabwe', img: 'flags/zw.webp', id: 'ZW' },
    { country: 'Somalia', img: 'flags/so.webp', id: 'SO' },
    { country: 'Sudan', img: 'flags/sd.webp', id: 'SD' },
    { country: 'Südsudan', img: 'flags/ss.webp', id: 'SS' },
    { country: 'Tansania', img: 'flags/tz.webp', id: 'TZ' },
    { country: 'Togo', img: 'flags/tg.webp', id: 'TG' },
    { country: 'Tschad', img: 'flags/td.webp', id: 'TD' },
    { country: 'Tunesien', img: 'flags/tn.webp', id: 'TN' },
    { country: 'Uganda', img: 'flags/ug.webp', id: 'UG' },
    { country: 'Zentralafrikanische Republik', img: 'flags/cf.webp', id: 'CF' },
// Ozeanien und Sonstige
    { country: 'Australien', img: 'flags/au.webp', id: 'AU' },
    { country: 'Fidschi', img: 'flags/fj.webp', id: 'FJ' },
    { country: 'Kiribati', img: 'flags/ki.webp', id: 'KI' },
    { country: 'Marshallinseln', img: 'flags/mh.webp', id: 'MH' },
    { country: 'Mikronesien', img: 'flags/fm.webp', id: 'FM' },
    { country: 'Nauru', img: 'flags/nr.webp', id: 'NR' },
    { country: 'Neuseeland', img: 'flags/nz.webp', id: 'NZ' },
    { country: 'Palau', img: 'flags/pw.webp', id: 'PW' },
    { country: 'Papua-Neuguinea', img: 'flags/pg.webp', id: 'PG' },
    { country: 'Salomonen', img: 'flags/sb.webp', id: 'SB' },
    { country: 'Samoa', img: 'flags/ws.webp', id: 'WS' },
    { country: 'Tonga', img: 'flags/to.webp', id: 'TO' },
    { country: 'Tuvalu', img: 'flags/tv.webp', id: 'TV' },
    { country: 'Vanuatu', img: 'flags/vu.webp', id: 'VU' },
    { country: 'Türkei', img: 'flags/tr.webp', id: 'TR' },
];

let currentFlagIndex;
let currentScore = 0;
// Set a unique key for this game/file
const uniqueKey = 'uniqueGameIdentifier6'; // Change this for each game/file

// Retrieve high score from localStorage using the unique key
let highScore = localStorage.getItem(`highScore_${uniqueKey}`) ? parseInt(localStorage.getItem(`highScore_${uniqueKey}`)) : 0;

// Update the high score display
document.getElementById('highScore').innerText = highScore;

document.addEventListener('DOMContentLoaded', () => {
    currentFlagIndex = Math.floor(Math.random() * flags.length);
    loadFlag();
    document.getElementById('toggleMapButton').addEventListener('click', toggleMap);
    document.getElementById('highScore').textContent = highScore; // Set initial high score on page load
});

function loadFlag() {
    const flag = flags[currentFlagIndex];
    document.getElementById('flag-image').src = flag.img;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    const options = generateRandomOptions(flag.country);
    options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });

    updateHighlight(flag.id);
    removeMessage();
}

function generateRandomOptions(correctCountry) {
    const allCountries = flags.map(flag => flag.country);
    const randomOptions = [correctCountry];
    
    while (randomOptions.length < 4) {
        const randomCountry = allCountries[Math.floor(Math.random() * allCountries.length)];
        if (!randomOptions.includes(randomCountry)) {
            randomOptions.push(randomCountry);
        }
    }

    return shuffleArray(randomOptions);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function checkAnswer(selectedOption) {
    const flag = flags[currentFlagIndex];
    if (selectedOption === flag.country) {
        showMessage('Richtig! 🎉', 'green');
        setTimeout(() => {
            currentFlagIndex = Math.floor(Math.random() * flags.length);
            loadFlag();
        }, 1000);
        updateScore(1); // Update score on correct answer
    } else {
        showMessage('✖️ Falsch, versuche es nochmal.', 'red');
    }
}

// Function to update the score
function updateScore(change) {
    let currentScore = parseInt(document.getElementById('currentScore').innerText);
    currentScore += change;
    document.getElementById('currentScore').innerText = currentScore;
    
    if (currentScore > highScore) {
        highScore = currentScore;
        localStorage.setItem(`highScore_${uniqueKey}`, highScore);
        document.getElementById('highScore').innerText = highScore;

        // Trigger confetti and update high score animation when high score is broken
        createConfetti();
        showHighScoreAnimation(highScore);
    }
}

function showHighScoreAnimation(newScore) {
    const highScoreSpan = document.getElementById('highScore');
    const fireBackground = document.getElementById('fire-background');
    
    highScoreSpan.textContent = newScore;
    highScoreSpan.classList.add('grow');
    document.getElementById('high-score').classList.add('wiggle');

    fireBackground.style.display = 'block';
    setTimeout(() => {
        highScoreSpan.classList.remove('grow');
        document.getElementById('high-score').classList.remove('wiggle');
        fireBackground.style.display = 'none';
    }, 4000); // Delay in milliseconds
}

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
        piece.style.animationDuration = '3s'; // Set animation duration to 3 seconds
        document.body.appendChild(piece);
        piece.addEventListener('animationend', function() {
            piece.parentNode.removeChild(piece);
        });
    }

    const totalPieces = 700;
    const interval = 5;

    let i = 0;
    let intervalId = setInterval(function() {
        createPiece();
        i++;
        if (i >= totalPieces) {
            clearInterval(intervalId);
        }
    }, interval);
}

function updateHighlight(countryId) {
    removeHighlight();
    const countryElement = document.getElementById(countryId);
    if (countryElement) {
        countryElement.classList.add('highlight');
    }
}

function removeHighlight() {
    const highlightedElements = document.querySelectorAll('.highlight');
    highlightedElements.forEach(element => {
        element.classList.remove('highlight');
    });
}

function showMessage(message, color) {
    let messageElement = document.getElementById('message');
    if (!messageElement) {
        messageElement = document.createElement('div');
        messageElement.id = 'message';
        document.body.appendChild(messageElement);
    }
    messageElement.textContent = message;
    messageElement.style.backgroundColor = color;

    if (color === 'red') {
        messageElement.classList.add('wrong');
    } else {
        messageElement.classList.remove('wrong');
    }

    messageElement.classList.add('show');

    setTimeout(() => {
        messageElement.classList.remove('show');
        messageElement.classList.remove('wrong');
    }, 1500);
}

function removeMessage() {
    const messageElement = document.getElementById('message');
    if (messageElement) {
        messageElement.classList.remove('show');
    }
}

function toggleMap() {
    const mapContainer = document.getElementById('map-container');
    mapContainer.classList.toggle('show');
}
