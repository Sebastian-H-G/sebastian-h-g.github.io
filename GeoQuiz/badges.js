// /js/badges.js

// Supabase client must already be loaded globally as `supabase`
const SUPABASE_URL      = 'https://pzyzdmndotuvbvfhxwad.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6eXpkbW5kb3R1dmJ2Zmh4d2FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4MDUxNzIsImV4cCI6MjA2MjM4MTE3Mn0.UpltfEmKUgYINeWP4aHPOkYT8cOx6nVi0cdE5bMAjqA';
const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: { persistSession: true, autoRefreshToken: true }
});

/**
 * Awards a badge to the current user if not already earned
 */
async function awardBadge(badgeId) {
  const { data: { user }, error: userErr } = await sb.auth.getUser();
  if (userErr || !user) return false;
  const userId = user.id;

  const { data: exists } = await sb
    .from('user_badges')
    .select('id')
    .eq('user_id', userId)
    .eq('badge_id', badgeId)
    .limit(1)
    .maybeSingle();
  if (exists) return false;

  const { error: insertErr } = await sb
    .from('user_badges')
    .insert({ user_id: userId, badge_id: badgeId, earned_at: new Date().toISOString() });

  return !insertErr;
}

/**
 * Checks badge rules and awards accordingly
 * ctx: { quizId (string), attained, attainable, completed, gaveUp, playedAt (ISO string), timeTaken, timeAllowed }
 */
async function checkAndAwardBadges(ctx) {
  const { quizId, attained, attainable, completed, gaveUp, playedAt, timeTaken, timeAllowed } = ctx;
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return;

  // parse hour of completion
  const hour = new Date(playedAt).getHours();

  // Arrays of UUID strings for multi-quiz categories
  const FLAG_QUIZ_IDS      = ['1ea67bf9-6155-48d0-865e-c36c7a667698', '5debf2f5-8ff8-4432-b77f-e1dfca21ce66' ];
  const MOUNTAIN_QUIZ_IDS  = ['d6b5d79e-95e5-4621-ae95-920302037abd'];
  const ISLAND_QUIZ_IDS    = ['...'];
  const RIVER_QUIZ_IDS     = ['f4b2dbe9-68f1-4124-9db3-7f14d9c02234'];
  const DESERT_QUIZ_IDS    = ['e11cc112-f091-47be-ac29-75bd34d53960'];
  const SEAFARER_QUIZ_IDS  = ['...'];
  const GEOQUIZ_QUIZ_IDS   = ['...'];

  // 1) Safe bet: 3 passes in a row without failing
  const { data: last3 } = await sb
    .from('quiz-results')
    .select('completed, gave_up')
    .eq('player', user.id)
    .order('played_at', { ascending: false })
    .limit(3);
  if (last3.length === 3 && last3.every(r => r.completed && !r.gave_up)) {
    await awardBadge('<SAFE_BET_BADGE_ID>');
  }

  // 2) Early bird: between 6 AM and 12 PM
  if (hour >= 6 && hour < 12) await awardBadge('<EARLY_BIRD_BADGE_ID>');

  // 3) On fire: 3 perfects in a row
  const { data: perf3 } = await sb
    .from('quiz-results')
    .select('attained_score, attainable_score, completed')
    .eq('player', user.id)
    .order('played_at', { ascending: false })
    .limit(3);
  if (perf3.length === 3 && perf3.every(r => r.completed && r.attained_score === r.attainable_score)) {
    await awardBadge('<ON_FIRE_BADGE_ID>');
  }

  // 4 & 5) 10 down & 25 strong
  const { count: totalDone } = await sb
    .from('quiz-results')
    .select('id', { count: 'exact', head: true })
    .eq('player', user.id)
    .eq('completed', true);
  if (totalDone >= 10) await awardBadge('<TEN_DOWN_BADGE_ID>');
  if (totalDone >= 25) await awardBadge('<TWENTYFIVE_STRONG_BADGE_ID>');

  // 6) Quick learner: half time
  if (timeTaken != null && timeAllowed != null && timeTaken <= timeAllowed / 2) {
    await awardBadge('<QUICK_LEARNER_BADGE_ID>');
  }

  // 7) Comeback kid
  if (completed && !gaveUp) {
    const { data: history } = await sb
      .from('quiz-results')
      .select('gave_up, completed')
      .eq('player', user.id)
      .eq('quiz', quizId)
      .order('played_at', { ascending: true });
    if (history.some(r => r.gave_up) && history.some(r => r.completed && !r.gave_up)) {
      await awardBadge('<COMEBACK_KID_BADGE_ID>');
    }
  }

  // 8) Precision hit
  if (completed && attained === attainable && attainable > 25) {
    await awardBadge('<PRECISION_HIT_BADGE_ID>');
  }

  // 9) Night owl
  if (completed && hour < 6) await awardBadge('<NIGHT_OWL_BADGE_ID>');

  // 10) One streak wonder: 2 perfect
  const { data: perf2 } = await sb
    .from('quiz-results')
    .select('attained_score, attainable_score, completed')
    .eq('player', user.id)
    .order('played_at', { ascending: false })
    .limit(2);
  if (perf2.length === 2 && perf2.every(r => r.completed && r.attained_score === r.attainable_score)) {
    await awardBadge('<ONE_STREAK_BADGE_ID>');
  }

  // 11) Badge collector
  const { count: badgeCount } = await sb
    .from('user_badges')
    .select('badge_id', { count: 'exact', head: true })
    .eq('user_id', user.id);
  if (badgeCount >= 5) await awardBadge('<COLLECTOR_BADGE_ID>');

  // 12) Flag master: any in FLAG_QUIZ_IDS
  if (completed && attained === attainable && FLAG_QUIZ_IDS.includes(quizId)) {
    await awardBadge('<FLAG_MASTER_BADGE_ID>');
  }

  // 13–16) Specific topics
  if (completed && MOUNTAIN_QUIZ_IDS.includes(quizId)) await awardBadge('<MOUNTAIN_BADGE_ID>');
  if (completed && ISLAND_QUIZ_IDS.includes(quizId))   await awardBadge('<ISLAND_BADGE_ID>');
  if (completed && RIVER_QUIZ_IDS.includes(quizId))    await awardBadge('<RIVER_BADGE_ID>');
  if (completed && DESERT_QUIZ_IDS.includes(quizId))   await awardBadge('<DESERT_BADGE_ID>');

  // 17) Global grandmaster
  const { count: doneCount } = await sb
    .from('quiz-results')
    .select('quiz', { count: 'exact', head: true })
    .eq('player', user.id)
    .eq('completed', true);
  const { count: quizTotal } = await sb
    .from('quizzes')
    .select('id', { count: 'exact', head: true });
  if (doneCount >= quizTotal) await awardBadge('<GLOBAL_MASTER_BADGE_ID>');

  // 18) Seafarer
  if (completed && SEAFARER_QUIZ_IDS.includes(quizId)) await awardBadge('<SEAFARER_BADGE_ID>');

  // 19) Ultimate GeoQuiz
  if (completed && GEOQUIZ_QUIZ_IDS.includes(quizId) && attained/attainable >= 0.5) {
    await awardBadge('<ULTIMATE_GEO_BADGE_ID>');
  }
}

// Expose for pages
window.checkAndAwardBadges = checkAndAwardBadges;
