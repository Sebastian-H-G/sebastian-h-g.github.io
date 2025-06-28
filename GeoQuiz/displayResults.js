// displayResults.js
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL      = 'https://pzyzdmndotuvbvfhxwad.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6eXpkbW5kb3R1dmJ2Zmh4d2FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4MDUxNzIsImV4cCI6MjA2MjM4MTE3Mn0.UpltfEmKUgYINeWP4aHPOkYT8cOx6nVi0cdE5bMAjqA';
const supabase          = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ...existing code...
// ...existing code...
const QUIZ_LOGOS = {
  "Countries of the World Quiz": "Logos/worldcountries2.webp",
  "World Countries Empty Map": "Logos/worldcountries2.webp",
  "World Countries by Border": "Logos/worldcountries2.webp",
  "World Countries Map Click": "Logos/worldcountries2.webp",
  "Countries of Africa": "Logos/africa.png",
  "Countries of Europe": "Logos/europe.webp",
  "Countries of Asia": "Logos/asia.webp",
  "Countries of South America": "Logos/samerica.webp",
  "Countries of North America": "Logos/namerica.webp",
  "Countries of Oceania": "Logos/oceania.webp",
  "Capital Quiz": "Logos/Capital.webp",
  "Flag Quiz": "Logos/Flag.webp",
  "Flag Color Quiz": "Logos/flag-color.PNG",
  "Map Quiz": "Logos/Map.webp",
  "River Quiz": "Logos/River.webp",
  "Mountain": "Logos/Mountain.webp",
  "Population": "Logos/Population.webp",
  "Deserts & Forests": "Logos/Desert&Forest.JPEG",
  "Cities Quiz": "Logos/Cities.JPEG",
  "Countries Shape Quiz": "Logos/shape.JPEG",
  "Memory": "Logos/Memory.webp",
  "USA States": "Logos/USA.JPEG",
  "USA States Capitals": "Logos/us-capitals.webp",
  "Germany States": "Logos/Germany.JPEG",
  "Deutschland Bundesländer Hauptstädte": "Logos/de-capitals.webp",
  "Estados de México": "Logos/Mexico.JPEG",
  "Capitales de los Estados de México": "Logos/mx-capitals.webp",
  "Countries and Region Database": "Logos/database.png",
  // Fallback for any quiz not listed above
};

// Helper to render results
async function renderResults(session) {
  const loadingElem = document.getElementById('loading');
  const table = document.getElementById('resultsTable');
  const tbody = table.querySelector('tbody');
  tbody.innerHTML = ""; // Clear previous results

  if (!session) {
    loadingElem.textContent = 'Bitte zuerst einloggen oder versuchen Sie die Seite erneut zu laden.';
    table.style.display = 'none';
    return;
  }

  // Fetch results for the current user
  const userId = session.user.id;
  const { data, error } = await supabase
    .from('quiz_results_with_name')
    .select('quiz_name, attained_score, attainable_score, completed, gave_up, played_at')
    .eq('user_id', userId) // <-- Only this user's results
    .order('played_at', { ascending: false });

  if (error) {
    console.error('Error loading results:', error);
    loadingElem.textContent = 'Fehler beim Laden der Ergebnisse.';
    table.style.display = 'none';
    return;
  }

  if (!data || data.length === 0) {
    loadingElem.textContent = 'Noch keine Ergebnisse.';
    table.style.display = 'none';
    return;
  }
  // Remove duplicates by quiz_name + played_at (or another unique key)
const seen = new Set();
const uniqueData = data.filter(row => {
  const key = row.quiz_name + '|' + row.played_at;
  if (seen.has(key)) return false;
  seen.add(key);
  return true;
});

// ...existing code...
  loadingElem.style.display = 'none';
  table.style.display = '';

  uniqueData.forEach(row => { // <-- use uniqueData here!
    const tr = document.createElement('tr');
    const logo = QUIZ_LOGOS[row.quiz_name] || "Logos/Geography.webp"; // fallback image

    tr.innerHTML = `
      <td>
        <img src="${logo}" alt="" style="width:28px;height:28px;vertical-align:middle;margin-right:8px;border-radius:5px;">
        ${row.quiz_name}
      </td>
      <td>${row.attained_score} / ${row.attainable_score}</td>
      <td>${row.completed ? '✔️' : '❌'}</td>
      <td>${row.gave_up ? '❌' : '/'}</td>
      <td>${new Date(row.played_at).toLocaleString(undefined, { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })}</td>
    `;

    tbody.appendChild(tr);
  });
// ...existing code...
}

let alreadyRendered = false;
window.addEventListener('DOMContentLoaded', () => {
  supabase.auth.onAuthStateChange((event, session) => {
    if (!alreadyRendered) {
      renderResults(session);
      alreadyRendered = true;
    }
  });

  supabase.auth.getSession().then(({ data: { session } }) => {
    if (!alreadyRendered) {
      renderResults(session);
      alreadyRendered = true;
    }
  });
});