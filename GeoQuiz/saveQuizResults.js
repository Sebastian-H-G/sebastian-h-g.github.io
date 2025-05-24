import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL     = 'https://pzyzdmndotuvbvfhxwad.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6eXpkbW5kb3R1dmJ2Zmh4d2FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4MDUxNzIsImV4cCI6MjA2MjM4MTE3Mn0.UpltfEmKUgYINeWP4aHPOkYT8cOx6nVi0cdE5bMAjqA'
const supabase         = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

/**
 * Inserts a quiz result row for the currently‑logged‑in user.
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
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('Not authenticated')

  const { data, error } = await supabase
    .from('quiz_results')
    .insert([{
      player:           user.id,
      quiz:             quizId,
      attained_score:   attainedScore,
      attainable_score: attainableScore,
      completed:        completed
    }])

  if (error) throw error
  return data
}
