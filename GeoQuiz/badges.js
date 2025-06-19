// /js/badges.js

// 1️⃣ Initialize Supabase client (UMD build must be loaded first)
const SUPABASE_URL      = 'https://pzyzdmndotuvbvfhxwad.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6eXpkbW5kb3R1dmJ2Zmh4d2FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4MDUxNzIsImV4cCI6MjA2MjM4MTE3Mn0.UpltfEmKUgYINeWP4aHPOkYT8cOx6nVi0cdE5bMAjqA';
const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: { persistSession: true, autoRefreshToken: true }
});

// 2️⃣ Helper: award a badge if not already earned, with debug logging
async function awardBadge(badgeId) {
  // 1) Ensure we have a logged‑in user
  const { data: { user }, error: userErr } = await sb.auth.getUser();
  if (userErr || !user) {
    console.error('awardBadge(): no user session', userErr);
    return false;
  }
  const userId = user.id;

  // 2) Check if the badge is already earned
  const { data: exists, error: existsErr } = await sb
    .from('user_badges')
    .select('id')
    .eq('user_id', userId)
    .eq('badge_id', badgeId)
    .limit(1)
    .maybeSingle();

  if (existsErr) {
    console.error('awardBadge(): error checking existing badge', existsErr);
    return false;
  }
  if (exists) {
    console.log(`awardBadge(): user ${userId} already has badge ${badgeId}`);
    return false;
  }

  // 3) Insert the new badge row
  const { data: inserted, error: insertErr } = await sb
    .from('user_badges')
    .insert({
      user_id:   userId,
      badge_id:  badgeId,
      earned_at: new Date().toISOString()
    })
    .select()    // return the inserted row
    .single();

  if (insertErr) {
    console.error('awardBadge(): insert failed', insertErr);
    return false;
  }

  console.log('awardBadge(): successfully awarded', inserted);
  return true;
}

// 3️⃣ Main badge logic
/**
 * ctx: {
 *   quizId: string,
 *   attained: number,
 *   attainable: number,
 *   completed: boolean,
 *   gaveUp?: boolean,
 *   playedAt: string (ISO timestamp),
 *   timeTaken?: number,
 *   timeAllowed?: number
 * }
 */
async function checkAndAwardBadges(ctx) {
  const {
    quizId,
    attained,
    attainable,
    completed,
    gaveUp = false,
    playedAt,
    timeTaken,
    timeAllowed
  } = ctx;

  const { data: { user } } = await sb.auth.getUser();
  if (!user) return;
  const userId = user.id;
  const hour   = new Date(playedAt).getHours();

  // Quiz ID categories (fill in your IDs)
  const FLAG_QUIZ_IDS     = ['1ea67bf9-6155-48d0-865e-c36c7a667698', '5debf2f5-8ff8-4432-b77f-e1dfca21ce66'];
  const MOUNTAIN_QUIZ_IDS = ['d6b5d79e-95e5-4621-ae95-920302037abd'];
  const ISLAND_QUIZ_IDS   = [];
  const RIVER_QUIZ_IDS    = ['f4b2dbe9-68f1-4124-9db3-7f14d9c02234'];
  const DESERT_QUIZ_IDS   = ['e11cc112-f091-47be-ac29-75bd34d53960'];
  const SEAFARER_QUIZ_IDS = [];
  const GEOQUIZ_QUIZ_IDS  = [];

  // Helper: fetch recent results
  async function fetchRecent(limit, cols) {
    const { data } = await sb
      .from('quiz_results')
      .select(cols)
      .eq('player', userId)
      .order('played_at', { ascending: false })
      .limit(limit);
    return data || [];
  }

  // 1) Safe Bet: 3 passes in a row
  const last3 = await fetchRecent(3, 'completed, gave_up');
  if (last3.length === 3 && last3.every(r => r.completed && !r.gave_up)) {
    await awardBadge('<SAFE_BET_BADGE_ID>');
  }

  // 2) Early Bird: 6 AM–noon
  if (hour >= 6 && hour < 12) await awardBadge('<EARLY_BIRD_BADGE_ID>');

  // 3) On Fire: 3 perfects
  const perf3 = await fetchRecent(3, 'attained_score, attainable_score, completed');
  if (perf3.length === 3 && perf3.every(r => r.completed && r.attained_score === r.attainable_score)) {
    await awardBadge('<ON_FIRE_BADGE_ID>');
  }

  // 4) 10 Down & 5) 25 Strong
  const { count: doneCount } = await sb
    .from('quiz_results')
    .select('id', { count: 'exact', head: true })
    .eq('player', userId)
    .eq('completed', true);
  if (doneCount >= 10) await awardBadge('<TEN_DOWN_BADGE_ID>');
  if (doneCount >= 25) await awardBadge('<TWENTYFIVE_STRONG_BADGE_ID>');

  // 6) Quick Learner
  if (timeTaken != null && timeAllowed != null && timeTaken <= timeAllowed / 2) {
    await awardBadge('<QUICK_LEARNER_BADGE_ID>');
  }

  // 7) Comeback Kid
  if (completed) {
    const history = await sb
      .from('quiz_results')
      .select('gave_up, completed')
      .eq('player', userId)
      .eq('quiz', quizId)
      .order('played_at', { ascending: true })
      .then(r => r.data || []);
    if (history.some(r => r.gave_up) && history.some(r => r.completed && !r.gave_up)) {
      await awardBadge('<COMEBACK_KID_BADGE_ID>');
    }
  }

  // 8) Precision Hit
  if (completed && attained === attainable && attainable > 25) {
    await awardBadge('<PRECISION_HIT_BADGE_ID>');
  }

  // 9) Night Owl
  if (completed && hour < 6) await awardBadge('<NIGHT_OWL_BADGE_ID>');

  // 10) One Streak Wonder
  const perf2 = await fetchRecent(2, 'attained_score, attainable_score, completed');
  if (perf2.length === 2 && perf2.every(r => r.completed && r.attained_score === r.attainable_score)) {
    await awardBadge('<ONE_STREAK_BADGE_ID>');
  }

  // 11) Badge Collector
  const { count: badgeCount } = await sb
    .from('user_badges')
    .select('badge_id', { count: 'exact', head: true })
    .eq('user_id', userId);
  if (badgeCount >= 5) await awardBadge('<COLLECTOR_BADGE_ID>');

  // 12) Flag Master
  if (completed && attained === attainable && FLAG_QUIZ_IDS.includes(quizId)) {
    await awardBadge('<FLAG_MASTER_BADGE_ID>');
  }

  // 13–16) Topic badges
  if (completed && MOUNTAIN_QUIZ_IDS.includes(quizId)) await awardBadge('<MOUNTAIN_BADGE_ID>');
  if (completed && ISLAND_QUIZ_IDS.includes(quizId))   await awardBadge('<ISLAND_BADGE_ID>');
  if (completed && RIVER_QUIZ_IDS.includes(quizId))    await awardBadge('<RIVER_BADGE_ID>');
  if (completed && DESERT_QUIZ_IDS.includes(quizId))   await awardBadge('<DESERT_BADGE_ID>');

  // 17) Global Grandmaster
  const { count: allDone } = await sb
    .from('quiz_results')
    .select('quiz',   { count: 'exact', head: true })
    .eq('player', userId)
    .eq('completed', true);
  const { count: totalQuizzes } = await sb
    .from('quizzes')
    .select('id',    { count: 'exact', head: true });
  if (allDone >= totalQuizzes) await awardBadge('<GLOBAL_MASTER_BADGE_ID>');

  // 18) Seafarer
  if (completed && SEAFARER_QUIZ_IDS.includes(quizId)) await awardBadge('<SEAFARER_BADGE_ID>');

  // 19) Ultimate GeoQuiz
  if (completed && GEOQUIZ_QUIZ_IDS.includes(quizId) && attained / attainable >= 0.5) {
    await awardBadge('<ULTIMATE_GEO_BADGE_ID>');
  }
}

// 4️⃣ Expose for your pages
globalThis.checkAndAwardBadges = checkAndAwardBadges;
