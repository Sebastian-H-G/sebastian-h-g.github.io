// quizApi.js

import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL      = 'https://pzyzdmndotuvbvfhxwad.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6eXpkbW5kbW5kb3R1dmJ2Zmh4d2FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4MDUxNzIsImV4cCI6MjA2MjM4MTE3Mn0.UpltfEmKUgYINeWP4aHPOkYT8cOx6nVi0cdE5bMAjqA';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// --- BLOCK UNAUTHENTICATED ACCESS --- //

// 1) Hide body until we know user is valid
document.documentElement.style.visibility = 'hidden';

// 2) Initial check
supabase.auth.getUser()
  .then(({ data: { user }, error }) => {
    if (error || !user) {
      alert('Bitte zuerst auf der Startseite einloggen!');
      return window.location.replace('/index.html');
    }
    // session ok → show page
    document.documentElement.style.visibility = '';
  });

// 3) If auth state ever changes (e.g. user signs out), redirect
supabase.auth.onAuthStateChange((event, session) => {
  if (!session) {
    alert('Session abgelaufen oder ausgeloggt – bitte neu einloggen!');
    window.location.replace('/index.html');
  }
});


/**
 * Inserts a quiz result row for the currently-logged-in user.
 *
 * @param {Object} params
 * @param {string}  params.quizId
 * @param {number}  params.attainedScore
 * @param {number}  params.attainableScore
 * @param {boolean} params.completed
 * @returns {Promise<Object[]>} the inserted row(s)
 */
export async function saveQuizResult({
  quizId,
  attainedScore,
  attainableScore,
  completed
}) {
  const { data: { user }, error: authError } = await supabase.auth.getUser();
  if (authError)   throw authError;
  if (!user)       throw new Error('Not authenticated');

  const { data, error } = await supabase
    .from('quiz_results')
    .insert([{
      player:           user.id,
      quiz:             quizId,
      attained_score:   attainedScore,
      attainable_score: attainableScore,
      completed:        completed
    }]);
  if (error) throw error;
  return data;
}
