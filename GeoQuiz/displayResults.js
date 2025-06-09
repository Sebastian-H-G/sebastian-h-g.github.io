// displayResults.js
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL      = 'https://pzyzdmndotuvbvfhxwad.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6eXpkbW5kb3R1dmJ2Zmh4d2FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4MDUxNzIsImV4cCI6MjA2MjM4MTE3Mn0.UpltfEmKUgYINeWP4aHPOkYT8cOx6nVi0cdE5bMAjqA';
const supabase          = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

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
  "USA States": "Logos/USA.JPEG",
  "USA States Capitals": "Logos/us-capitals.webp",
  "Deutschland Bundesländer": "Logos/Germany.JPEG",
  "Deutschland Bundesländer Hauptstädte": "Logos/de-capitals.webp",
  "Estados de México": "Logos/Mexico.JPEG",
  "Capitales de los Estados de México": "Logos/mx-capitals.webp",
  // Add more as needed
};
// ...existing code...
// Helper to render results
async function renderResults(session) {
  const loadingElem = document.getElementById('loading');
  const table = document.getElementById('resultsTable');
  const tbody = table.querySelector('tbody');
  tbody.innerHTML = ""; // Clear previous results

  if (!session) {
    loadingElem.textContent = 'Bitte zuerst einloggen.';
    table.style.display = 'none';
    return;
  }

  // Fetch results for the current user
  const { data, error } = await supabase
    .from('quiz_results_with_name')
    .select('quiz_name, attained_score, attainable_score, completed, gave_up, played_at')
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

  loadingElem.style.display = 'none';
  table.style.display = '';

  data.forEach(row => {
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
      <td>${new Date(row.played_at).toLocaleString()}</td>
    `;

    tbody.appendChild(tr);
  });
}

// Listen for auth state changes and DOMContentLoaded
window.addEventListener('DOMContentLoaded', () => {
  // Listen for auth state changes (handles login after page load)
  supabase.auth.onAuthStateChange((event, session) => {
    renderResults(session);
  });

  // Also check immediately in case session is already available (e.g. after refresh)
  supabase.auth.getSession().then(({ data: { session } }) => {
    renderResults(session);
  });
});