// displayResults.js
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL      = 'https://pzyzdmndotuvbvfhxwad.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6eXpkbW5kb3R1dmJ2Zmh4d2FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4MDUxNzIsImV4cCI6MjA2MjM4MTE3Mn0.UpltfEmKUgYINeWP4aHPOkYT8cOx6nVi0cdE5bMAjqA';
const supabase          = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function init() {
  // 1) Enforce login
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    alert('Bitte einloggen, um Ergebnisse zu sehen.');
    return window.location.replace('index.html');
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

  data.forEach(row => {
    const tr = document.createElement('tr');
// Inside data.forEach(row => { ... })
tr.innerHTML = `
  <td>${row.quiz_name}</td>
  <td>${row.attained_score}</td>
  <td>${row.attainable_score}</td>
  <td>${row.completed ? '✔️' : '❌'}</td>
  <td>${new Date(row.played_at).toLocaleString()}</td>
  <td>${row.gave_up ? '❌' : '✔️'}</td>
`;

    tbody.appendChild(tr);
  });

  if (data.length === 0) {
    document.getElementById('loading').textContent = 'Noch keine Ergebnisse.';
    table.style.display = 'none';
  }
}

window.addEventListener('DOMContentLoaded', init);
