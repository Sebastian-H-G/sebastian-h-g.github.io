// quizApi.js
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL      = 'https://pzyzdmndotuvbvfhxwad.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6eXpkbW5kb3R1dmJ2Zmh4d2FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4MDUxNzIsImV4cCI6MjA2MjM4MTE3Mn0.UpltfEmKUgYINeWP4aHPOkYT8cOx6nVi0cdE5bMAjqA';
export const supabase    = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 1) Hide the page until we know auth status
document.documentElement.style.visibility = 'hidden';

(async function checkSession() {
  // 2) Grab the currently stored session (if any)
  const { data: { session }, error } = await supabase.auth.getSession();
  if (error || !session) {
    alert('Please log in on the homepage first!');
    return window.location.replace('index.html');
  }
  // 3) All good—show the page
  document.documentElement.style.visibility = '';
})();

// 4) If they log out in another tab or the session expires:
supabase.auth.onAuthStateChange((event, session) => {
  if (!session) {
    alert('Session expired or logged out - please log in again!');
    window.location.replace('index.html');
  }
});

/**
 * Inserts a quiz result row for the currently-logged-in user.
 */
export async function saveQuizResult({
  quizId, attainedScore, attainableScore, completed
}) {
  // Ensure fresh user info
  const { data: { session }, error: sessErr } = await supabase.auth.getSession();
  if (sessErr) throw sessErr;
  if (!session) throw new Error('Not authenticated');

  const userId = session.user.id;
  const { data, error } = await supabase
    .from('quiz_results')
    .insert([{
      player:           userId,
      quiz:             quizId,
      attained_score:   attainedScore,
      attainable_score: attainableScore,
      completed:        completed
    }]);
  if (error) throw error;
  return data;
}
