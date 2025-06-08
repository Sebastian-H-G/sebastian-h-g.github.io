// displayResults.js
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL      = 'https://pzyzdmndotuvbvfhxwad.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6eXpkbW5kb3R1dmJ2Zmh4d2FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4MDUxNzIsImV4cCI6MjA2MjM4MTE3Mn0.UpltfEmKUgYINeWP4aHPOkYT8cOx6nVi0cdE5bMAjqA';
const supabase          = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ...existing code...
const QUIZ_LOGOS = {
  "Countries of the World Quiz": "Logos/worldcountries.webp",
  "World Countries Empty Map": "Logos/worldcountries.webp",
  "World Countries by Border": "Logos/worldcountries.webp",
  "World Countries Map Click": "Logos/worldcountries.webp",
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

async function init() {
  // 1) Enforce login
  const { data: { session } } = await supabase.auth.getSession();
if (!session) {
  document.getElementById('loading').textContent = 'Bitte zuerst einloggen.';
  return;
}


  // 2) Fetch results for the current user
const { data, error } = await supabase
  .from('quiz_results_with_name')
  .select('quiz_name, attained_score, attainable_score, completed, gave_up, played_at')
  .order('played_at', { ascending: false });
    console.log('Fetched results:', { data, error });

  if (error) {
    console.error('Error loading results:', error);
    document.getElementById('loading').textContent = 'Fehler beim Laden der Ergebnisse.';
    return;
  }

  // 3) Render
  document.getElementById('loading').style.display = 'none';
  const table = document.getElementById('resultsTable');
  const tbody = table.querySelector('tbody');
  table.style.display = '';

// ...existing code...
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
// ...existing code...

  if (data.length === 0) {
    document.getElementById('loading').textContent = 'Noch keine Ergebnisse.';
    table.style.display = 'none';
  }
}

window.addEventListener('DOMContentLoaded', init);
