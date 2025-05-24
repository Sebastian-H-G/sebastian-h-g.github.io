// quizApi.js
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL      = 'https://pzyzdmndotuvbvfhxwad.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6eXpkbW5kb3R1dmJ2Zmh4d2FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4MDUxNzIsImV4cCI6MjA2MjM4MTE3Mn0.UpltfEmKUgYINeWP4aHPOkYT8cOx6nVi0cdE5bMAjqA';
export const supabase    = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 1) Hide the page until we know auth status
console.log('[quizApi] Hiding page until auth is verified');
document.documentElement.style.visibility = 'hidden';

(async function checkSession() {
  console.log('[quizApi] Checking existing session...');
  const { data: { session }, error } = await supabase.auth.getSession();
  console.log('[quizApi] getSession result:', { session, error });
  if (error) {
    console.error('[quizApi] Error retrieving session:', error);
  }
  if (!session) {
    console.warn('[quizApi] No session found—redirecting to index.html');
    alert('Please log in on the homepage first!');
    return window.location.replace('index.html');
  }
  console.log('[quizApi] Session valid for user:', session.user.id);
  document.documentElement.style.visibility = '';
})();

// 2) Listen for future auth state changes
supabase.auth.onAuthStateChange((event, session) => {
  console.log('[quizApi] onAuthStateChange event:', event, session);
  if (!session) {
    console.warn('[quizApi] Session ended—redirecting to index.html');
    alert('Session expired or logged out - please log in again!');
    window.location.replace('index.html');
  }
});

/**
 * Inserts a quiz result row for the currently-logged-in user.
 *
 * @param {Object} params
 * @param {string} params.quizId
 * @param {number} params.attainedScore
 * @param {number} params.attainableScore
 * @param {boolean} params.completed
 */
export async function saveQuizResult({
  quizId,
  attainedScore,
  attainableScore,
  completed
}) {
  console.log('[quizApi] saveQuizResult called with:', {
    quizId,
    attainedScore,
    attainableScore,
    completed
  });

  // Ensure fresh user info
  console.log('[quizApi] Retrieving session before insert...');
  const { data: { session }, error: sessErr } = await supabase.auth.getSession();
  console.log('[quizApi] getSession for save result:', { session, sessErr });
  if (sessErr) {
    console.error('[quizApi] Error getting session:', sessErr);
    throw sessErr;
  }
  if (!session) {
    console.error('[quizApi] No session—user not authenticated');
    throw new Error('Not authenticated');
  }

  const userId = session.user.id;
  console.log('[quizApi] Inserting quiz result for user:', userId);

  // Perform the insert
  const { data, error } = await supabase
    .from('quiz_results')
    .insert([{
      player:           userId,
      quiz:             quizId,
      attained_score:   attainedScore,
      attainable_score: attainableScore,
      completed:        completed
    }]);

  console.log('[quizApi] Insert response:', { data, error });
  if (error) {
    console.error('[quizApi] Error inserting quiz result:', error);
    throw error;
  }

  console.log('[quizApi] Quiz result saved successfully:', data);
  return data;
}
