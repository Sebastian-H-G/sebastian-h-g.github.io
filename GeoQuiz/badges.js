// badges.js

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = 'https://pzyzdmndotuvbvfhxwad.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6eXpkbW5kb3R1dmJ2Zmh4d2FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4MDUxNzIsImV4cCI6MjA2MjM4MTE3Mn0.UpltfEmKUgYINeWP4aHPOkYT8cOx6nVi0cdE5bMAjqA';
const sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: { persistSession: true, autoRefreshToken: true }
});


// ── notifier + styles setup ────────────────────────────────────────
;(function(){
  // 1) create container (centered at top)
  const container = document.createElement('div');
  container.id = 'notification-container';
  Object.assign(container.style, {
    position:      'fixed',
    top:           '1rem',
    left:          '50%',
    transform:     'translateX(-50%)',
    width:         '400px',
    zIndex:        10000,
    display:       'flex',
    flexDirection: 'column',
    alignItems:    'center',
    pointerEvents: 'none',
  });
  document.body.appendChild(container);

  // 2) inject Apple‑style CSS
  const css = document.createElement('style');
  css.textContent = `
    #notification-container .notification {
      display: flex;
      align-items: center;
      width: 100%;
      margin-bottom: 0.75rem;
      padding: 0.75rem 1rem;
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 12px;
      color: #000;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 0.95rem;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
      opacity: 0;
      transform: translateY(-20px);
      transition: opacity 0.4s ease, transform 0.4s ease;
      pointer-events: auto;
    }
    #notification-container .notification.show {
      opacity: 1;
      transform: translateY(0);
    }
    #notification-container .notification img {
      flex-shrink: 0;
      width: 40px;
      height: 40px;
      border-radius: 8px;
      margin-right: 0.75em;
      object-fit: cover;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    #notification-container .notification .message {
      flex: 1;
      line-height: 1.3;
    }
  `;
  document.head.appendChild(css);

  // 3) notify function
  window.notify = function(message, duration = 3500, imageUrl = null) {
    const msg = document.createElement('div');
    msg.className = 'notification';

    if (imageUrl) {
      const img = document.createElement('img');
      img.src = imageUrl;
      img.alt = '';
      msg.appendChild(img);
    }

    const text = document.createElement('div');
    text.className = 'message';
    text.textContent = message;
    msg.appendChild(text);

    container.appendChild(msg);

    // slide down + fade in
    requestAnimationFrame(() => msg.classList.add('show'));

    // fade out + remove
    setTimeout(() => {
      msg.classList.remove('show');
      msg.addEventListener('transitionend', () => msg.remove(), { once: true });
    }, duration);
  };
})();



// Predeclare all badge IDs
const BADGE_IDS = {
  safeBet:           'd08d8896-5d97-48ce-91a8-289e35a4997d',
  earlyBird:         '3e3a1562-8973-4328-9f18-d8678a31a1d8',
  onFire:            '4676ff5f-9f2e-4620-b455-06b33b90afa1',
  tenDown:           '194edf76-e5ab-4876-a44b-d6079e773687',
  twentyFiveStrong:  '3ccf0110-f518-41a6-a38b-39b625da1d8a',
  quickLearner:      '5abc6b38-ecb2-4df6-a7d3-47a65ac23e73',
  comebackKid:       'eb17035b-0bca-4daf-9fad-fd2748b7571d',
  precisionHit:      '8ad34d24-0d43-45c5-80ef-1a2a55803eae',
  nightOwl:          '85511a20-9e85-46e7-9f1c-2f3070de363a',
  oneStreak:         '237357b3-3ef4-46c4-bab5-95ac04b8c859',
  collector:         'c89119d5-b3d1-4dd5-b306-01ae3635f318',
  flagMaster:        '16854b65-675e-4840-99d6-fdb1c3d46eb4',
  mountain:          '2cf594fc-4f68-4591-a5cf-a00e9db5482d',
  island:            'b70ee408-19b6-4c9f-b3f1-54660fb4d36c',
  river:             '8ffe125c-b2a9-43f8-b45a-150cea2dcc2b',
  desert:            '2cb1c3f5-e98e-456b-ab64-d27e2f84dae6',
  globalMaster:      '6a6ee4a4-1818-4719-be17-39b94f871bf5',
  seafarer:          '11e95ccc-995f-4fe3-8233-ec12fe8c6fe2',
  ultimateGeo:       '4c4d0255-1ff9-4d0e-b0f7-d666f4b409cb',
  firstQuiz:         'bc61abcb-0e8b-429e-9b4c-ca6c4958a912',
  explorer:          '8260ace0-aa9b-4800-82d8-5c8a375f464c',
  dailyDrifter:      '2fc07eb1-c0e2-4292-9151-bd90793790de',
  risingStar:        '6e3b95fe-0577-4b92-b3d3-6b3ca4513248',
  mastermind:        '5a9a1c48-c5b7-4762-b5d0-f56c602fa8bc',
  champion:          'f88cca2d-b71a-4a47-ba2e-91660cac9e1a',
  climber:           'fc5485d1-2786-4232-b567-452105fec685',
  hugo:              'a35c592c-f1aa-486b-8966-244caea27847',
  streak3:           '733f62a5-56c5-41d5-92b0-39e9b940aa36',
  streak5:           'f0c1f3c6-f759-4134-982b-c00881f318cb',
  streak7:           '973a6175-1fc0-497f-b54b-33ec1b9c810b',
  streak10:           '8b2aca2b-6b71-40b1-80c2-521152a0576e',
  streak14:           '80c649a3-b7cc-49c1-801c-7f906a8376de',

  weekendWarrior:   '6a75fedf-6ec3-4b51-96f8-d5eab34b0154',
  insomniac:       '3f55896e-4a26-4b6e-8eb5-e67655e5d27a',
};

// ⏺ Define quiz categories with arrays of quiz IDs
const QUIZ_CATEGORIES = {
  flags:    ['1ea67bf9-6155-48d0-865e-c36c7a667698', '5debf2f5-8ff8-4432-b77f-e1dfca21ce66'],
  mountain: ['d6b5d79e-95e5-4621-ae95-920302037abd'],
  island:   ['2af0e4dc-7424-4d89-9b2c-6ee30fe1904e'],
  river:    ['f4b2dbe9-68f1-4124-9db3-7f14d9c02234'],
  desert:   ['e11cc112-f091-47be-ac29-75bd34d53960'],
  seafarer: ['448d3bf1-c981-451b-b98d-45bf5cd29fee'],
  ultimate: ['73c658e3-954f-4743-a01b-f1011b6d9402']
};

// 2️⃣ Helper: award a badge if not already earned, with debug logging
// ...existing code...
async function awardBadge(badgeId) {
  const { data: { user }, error: userErr } = await sb.auth.getUser();
  if (userErr || !user) {
    console.error('awardBadge(): no user session', userErr);
    return false;
  }
  const userId = user.id;

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

  // Fetch badge info (for icon_url and name)
  const { data: badge, error: badgeErr } = await sb
    .from('badges')
    .select('name, icon_url')
    .eq('id', badgeId)
    .single();

  if (badgeErr) {
    console.error('awardBadge(): error fetching badge info', badgeErr);
    return false;
  }

  const { data: inserted, error: insertErr } = await sb
    .from('user_badges')
    .insert({ user_id: userId, badge_id: badgeId, earned_at: new Date().toISOString() })
    .select()
    .single();

  if (insertErr) {
    console.error('awardBadge(): insert failed', insertErr);
    return false;
  }

  console.log('awardBadge(): successfully awarded', inserted);
  // Return badge info for notification
  return badge;
}
// ...existing code...

async function getUserProfile(userId) {
  const { data, error } = await sb
    .from('profiles')
    .select('time_zone, latitude, longitude')
    .eq('id', userId)
    .single();

  if (error) {
    console.error('Error fetching user profile:', error);
    return null;
  }
  return data;
}



function getHourInTimeZone(dateString, timeZone) {
  const date = new Date(dateString);
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone,
    hour: 'numeric',
    hour12: false,
  });
  return parseInt(formatter.format(date), 10);
}


// Helper: check if user ever completed any given quiz IDs
async function userCompletedAny(userId, quizIds) {
  if (!quizIds.length) return false;
  const { count } = await sb
    .from('quiz_results')
    .select('id', { count: 'exact', head: true })
    .eq('player', userId)
    .eq('completed', true)
    .in('quiz', quizIds);
  return count > 0;
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
export async function checkAndAwardBadges(ctx) {
  try {
    const { quizId, attained, attainable, completed, gaveUp = false, playedAt, timeTaken, timeAllowed } = ctx;
    const { data: { user }, error: userErr } = await sb.auth.getUser();
    if (userErr || !user) return;
    const userId = user.id;

    let profile, userTimeZone, hour;
    try {
      profile = await getUserProfile(userId);
      userTimeZone = profile?.time_zone || 'UTC';
      hour = getHourInTimeZone(playedAt, userTimeZone);
    } catch (err) {
      console.error('Error fetching profile/timezone:', err);
      userTimeZone = 'UTC';
      hour = getHourInTimeZone(playedAt, userTimeZone);
    }

    // 1) Safe Bet: 3 passes in a row
    try {
      const last3 = await sb
        .from('quiz_results')
        .select('completed, gave_up')
        .eq('player', userId)
        .order('played_at', { ascending: false })
        .limit(3)
        .then(res => res.data || []);
      if (last3.length === 3 && last3.every(r => r.completed && !r.gave_up)) {
        const badge = await awardBadge(BADGE_IDS.safeBet);
        if (badge) notify(`🏅 You earned the "${badge.name}" badge!`, 4000, badge.icon_url);
      }
    } catch (err) { console.error('Safe Bet badge error:', err); }

    // 2) Early Bird: 6 AM–noon
    try {
      if (hour >= 6 && hour < 12) {
        const badge = await awardBadge(BADGE_IDS.earlyBird);
        if (badge) notify(`🏅 You earned the "${badge.name}" badge!`, 4000, badge.icon_url);
      }
    } catch (err) { console.error('Early Bird badge error:', err); }

    // 3) On Fire: 3 perfects
    try {
      const perf3 = await sb
        .from('quiz_results')
        .select('attained_score, attainable_score, completed')
        .eq('player', userId)
        .order('played_at', { ascending: false })
        .limit(3)
        .then(res => res.data || []);
      if (perf3.length === 3 && perf3.every(r => r.completed && r.attained_score === r.attainable_score)) {
        const badge = await awardBadge(BADGE_IDS.onFire);
        if (badge) notify(`🏅 You earned the "${badge.name}" badge!`, 4000, badge.icon_url);
      }
    } catch (err) { console.error('On Fire badge error:', err); }

    // First Quiz
    try {
      if (completed) {
        const { count: firstCount } = await sb
          .from('quiz_results')
          .select('id', { count: 'exact', head: true })
          .eq('player', userId)
          .eq('completed', true);
        if (firstCount === 1) {
          const badge = await awardBadge(BADGE_IDS.firstQuiz);
          if (badge) notify(`🏅 You earned the "${badge.name}" badge!`, 4000, badge.icon_url);
        }
      }
    } catch (err) { console.error('First Quiz badge error:', err); }

    // 4) 10 Down & 5) 25 Strong
    try {
      const { count: doneCount } = await sb
        .from('quiz_results')
        .select('id', { count: 'exact', head: true })
        .eq('player', userId)
        .eq('completed', true);
      if (doneCount >= 10) {
        const badge = await awardBadge(BADGE_IDS.tenDown);
        if (badge) notify(`🏅 You earned the "${badge.name}" badge!`, 4000, badge.icon_url);
      }
      if (doneCount >= 25) {
        const badge = await awardBadge(BADGE_IDS.twentyFiveStrong);
        if (badge) notify(`🏅 You earned the "${badge.name}" badge!`, 4000, badge.icon_url);
      }
    } catch (err) { console.error('10/25 badge error:', err); }

    // 6) Quick Learner
    try {
      if (timeTaken != null && timeAllowed != null && timeTaken <= timeAllowed / 2) {
        const badge = await awardBadge(BADGE_IDS.quickLearner);
        if (badge) notify(`🏅 You earned the "${badge.name}" badge!`, 4000, badge.icon_url);
      }
    } catch (err) { console.error('Quick Learner badge error:', err); }

    // 7) Comeback Kid
    try {
      if (completed && gaveUp) {
        const history = await sb
          .from('quiz_results')
          .select('gave_up, completed')
          .eq('player', userId)
          .eq('quiz', quizId)
          .order('played_at', { ascending: true })
          .then(res => res.data || []);
        if (history.some(r => r.gave_up) && history.some(r => r.completed && !r.gave_up)) {
          const badge = await awardBadge(BADGE_IDS.comebackKid);
          if (badge) notify(`🏅 You earned the "${badge.name}" badge!`, 4000, badge.icon_url);
        }
      }
    } catch (err) { console.error('Comeback Kid badge error:', err); }

    // 8) Precision Hit
    try {
      if (completed && attained === attainable && attainable > 25) {
        const badge = await awardBadge(BADGE_IDS.precisionHit);
        if (badge) notify(`🏅 You earned the "${badge.name}" badge!`, 4000, badge.icon_url);
      }
    } catch (err) { console.error('Precision Hit badge error:', err); }

    // 9) Night Owl
    try {
      if (completed && hour < 6) {
        const badge = await awardBadge(BADGE_IDS.nightOwl);
        if (badge) notify(`🏅 You earned the "${badge.name}" badge!`, 4000, badge.icon_url);
      }
    } catch (err) { console.error('Night Owl badge error:', err); }

    // 10) One Streak Wonder
    try {
      const perf2 = await sb
        .from('quiz_results')
        .select('attained_score, attainable_score, completed')
        .eq('player', userId)
        .order('played_at', { ascending: false })
        .limit(2)
        .then(res => res.data || []);
      if (perf2.length === 2 && perf2.every(r => r.completed && r.attained_score === r.attainable_score)) {
        const badge = await awardBadge(BADGE_IDS.oneStreak);
        if (badge) notify(`🏅 You earned the "${badge.name}" badge!`, 4000, badge.icon_url);
      }
    } catch (err) { console.error('One Streak badge error:', err); }

    // 11) Badge Collector
    try {
      const { count: badgeCount } = await sb
        .from('user_badges')
        .select('badge_id', { count: 'exact', head: true })
        .eq('user_id', userId);
      if (badgeCount >= 5) {
        const badge = await awardBadge(BADGE_IDS.collector);
        if (badge) notify(`🏅 You earned the "${badge.name}" badge!`, 4000, badge.icon_url);
      }
    } catch (err) { console.error('Badge Collector error:', err); }

    // …continue below…
	    // 12) Flag Master
    try {
      if (completed && attained === attainable && await userCompletedAny(userId, QUIZ_CATEGORIES.flags)) {
        const badge = await awardBadge(BADGE_IDS.flagMaster);
        if (badge) notify(`🏅 You earned the "${badge.name}" badge!`, 4000, badge.icon_url);
      }
    } catch (err) { console.error('Flag Master badge error:', err); }

    // 13–16) Topic badges
    try {
      if (await userCompletedAny(userId, QUIZ_CATEGORIES.mountain)) {
        const badge = await awardBadge(BADGE_IDS.mountain);
        if (badge) notify(`🏅 You earned the "${badge.name}" badge!`, 4000, badge.icon_url);
      }
      if (await userCompletedAny(userId, QUIZ_CATEGORIES.island)) {
        const badge = await awardBadge(BADGE_IDS.island);
        if (badge) notify(`🏅 You earned the "${badge.name}" badge!`, 4000, badge.icon_url);
      }
      if (await userCompletedAny(userId, QUIZ_CATEGORIES.river)) {
        const badge = await awardBadge(BADGE_IDS.river);
        if (badge) notify(`🏅 You earned the "${badge.name}" badge!`, 4000, badge.icon_url);
      }
      if (await userCompletedAny(userId, QUIZ_CATEGORIES.desert)) {
        const badge = await awardBadge(BADGE_IDS.desert);
        if (badge) notify(`🏅 You earned the "${badge.name}" badge!`, 4000, badge.icon_url);
      }
    } catch (err) { console.error('Topic badges error:', err); }

    // 17) Global Grandmaster
    try {
      const { count: allDone } = await sb
        .from('quiz_results')
        .select('quiz', { count: 'exact', head: true })
        .eq('player', userId)
        .eq('completed', true);
      const { count: totalQuizzes } = await sb
        .from('quizzes')
        .select('id', { count: 'exact', head: true });
      if (allDone >= totalQuizzes) {
        const badge = await awardBadge(BADGE_IDS.globalMaster);
        if (badge) notify(`🏅 You earned the "${badge.name}" badge!`, 4000, badge.icon_url);
      }
    } catch (err) { console.error('Global Grandmaster badge error:', err); }

    // 18) Seafarer
    try {
      if (await userCompletedAny(userId, QUIZ_CATEGORIES.seafarer)) {
        const badge = await awardBadge(BADGE_IDS.seafarer);
        if (badge) notify(`🏅 You earned the "${badge.name}" badge!`, 4000, badge.icon_url);
      }
    } catch (err) { console.error('Seafarer badge error:', err); }

    // 19) Ultimate GeoQuiz
    try {
      if (
        completed &&
        QUIZ_CATEGORIES.ultimate.includes(quizId) &&
        attained / attainable >= 0.5
      ) {
        const badge = await awardBadge(BADGE_IDS.ultimateGeo);
        if (badge) notify(`🏅 You earned the "${badge.name}" badge!`, 4000, badge.icon_url);
      }
    } catch (err) { console.error('Ultimate GeoQuiz badge error:', err); }

    // Explorer badge
    try {
      const { data: played } = await sb
        .from('quiz_results')
        .select('quiz')
        .eq('player', userId)
        .eq('completed', true);
      const quizIds = (played || []).map(r => r.quiz);

      if (quizIds.length > 0) {
        const { data: quizzes } = await sb
          .from('quizzes')
          .select('category')
          .in('id', quizIds);
        const categories = new Set((quizzes || []).map(q => q.category));
        if (categories.size >= 3) {
          const badge = await awardBadge(BADGE_IDS.explorer);
          if (badge) notify(`🏅 You earned the "${badge.name}" badge!`, 4000, badge.icon_url);
        }
      }
    } catch (err) { console.error('Explorer badge error:', err); }

    // Rising Star badge
    try {
      const { data: allResults } = await sb
        .from('quiz_results')
        .select('attained_score, attainable_score')
        .eq('player', userId);

      if ((allResults || []).some(r => r.attained_score === r.attainable_score)) {
        const badge = await awardBadge(BADGE_IDS.risingStar);
        if (badge) notify(`🏅 You earned the "${badge.name}" badge!`, 4000, badge.icon_url);
      }
    } catch (err) { console.error('Rising Star badge error:', err); }

    // Mastermind badge
    try {
      const { data: allQuizzes } = await sb.from('quizzes').select('id, category');
      const byCategory = {};
      (allQuizzes || []).forEach(q => {
        byCategory[q.category] = byCategory[q.category] || [];
        byCategory[q.category].push(q.id);
      });

      await Promise.all(Object.entries(byCategory).map(async ([cat, ids]) => {
        const total = ids.length;
        const { count: done } = await sb
          .from('quiz_results')
          .select('id', { head: true, count: 'exact' })
          .eq('player', userId)
          .eq('completed', true)
          .in('quiz', ids);

        if (done >= total && total > 0) {
          const badge = await awardBadge(BADGE_IDS.mastermind);
          if (badge) notify(`🏅 You earned the "${badge.name}" badge!`, 4000, badge.icon_url);
        }
      }));
    } catch (err) { console.error('Mastermind badge error:', err); }

    // Champion badge
    try {
      const { data: recent5 } = await sb
        .from('quiz_results')
        .select('completed')
        .eq('player', userId)
        .order('played_at', { ascending: false })
        .limit(5);

      if (
        recent5 &&
        recent5.length === 5 &&
        recent5.every(r => r.completed)
      ) {
        const badge = await awardBadge(BADGE_IDS.champion);
        if (badge) notify(`🏅 You earned the "${badge.name}" badge!`, 4000, badge.icon_url);
      }
    } catch (err) { console.error('Champion badge error:', err); }

    // The Climber badge
    try {
      const { data: history } = await sb
        .from('quiz_results')
        .select('quiz, attained_score, played_at')
        .eq('player', userId)
        .order('played_at', { ascending: true });

      const byQuiz = {};
      (history || []).forEach(r => {
        byQuiz[r.quiz] = byQuiz[r.quiz] || [];
        byQuiz[r.quiz].push(r.attained_score);
      });

      const improved = Object.values(byQuiz).some(scores => {
        return scores.length >= 2 && Math.max(...scores) > scores[0];
      });
      if (improved) {
        const badge = await awardBadge(BADGE_IDS.climber);
        if (badge) notify(`🏅 You earned the "${badge.name}" badge!`, 4000, badge.icon_url);
      }
    } catch (err) { console.error('Climber badge error:', err); }

    // Daily Drifter badge
    try {
      const { data: attempts } = await sb
        .from('quiz_results')
        .select('quiz, played_at')
        .eq('player', userId)
        .order('played_at', { ascending: true });

      const bucket = {};
      (attempts || []).forEach(r => {
        const date = new Date(r.played_at).toISOString().slice(0, 10);
        const key  = `${r.quiz}::${date}`;
        bucket[key] = bucket[key] || [];
        bucket[key].push(new Date(r.played_at).getTime());
      });

      const threeHours = 3 * 60 * 60 * 1000;
      const drifter = Object.values(bucket).some(times => {
        if (times.length < 2) return false;
        const minT = Math.min(...times);
        const maxT = Math.max(...times);
        return (maxT - minT) >= threeHours;
      });
      if (drifter) {
        const badge = await awardBadge(BADGE_IDS.dailyDrifter);
        if (badge) notify(`🏅 You earned the "${badge.name}" badge!`, 4000, badge.icon_url);
      }
    } catch (err) { console.error('Daily Drifter badge error:', err); }

    // Streak badges
    try {
      const { data: profile, error } = await sb
        .from('profiles')
        .select('streak_count')
        .eq('id', userId)
        .single();

      if (!error && profile?.streak_count >= 3) {
        const badge = await awardBadge(BADGE_IDS.streak3);
        if (badge) notify(`🏅 You earned the "${badge.name}" badge!`, 4000, badge.icon_url);
      }
      if (!error && profile?.streak_count >= 5) {
        const badge = await awardBadge(BADGE_IDS.streak5);
        if (badge) notify(`🏅 You earned the "${badge.name}" badge!`, 4000, badge.icon_url);
      }
      if (!error && profile?.streak_count >= 7) {
        const badge = await awardBadge(BADGE_IDS.streak7);
        if (badge) notify(`🏅 You earned the "${badge.name}" badge!`, 4000, badge.icon_url);
      }
      if (!error && profile?.streak_count >= 10) {
        const badge = await awardBadge(BADGE_IDS.streak10);
        if (badge) notify(`🏅 You earned the "${badge.name}" badge!`, 4000, badge.icon_url);
      }
      if (!error && profile?.streak_count >= 14) {
        const badge = await awardBadge(BADGE_IDS.streak14);
        if (badge) notify(`🏅 You earned the "${badge.name}" badge!`, 4000, badge.icon_url);
      }
    } catch (err) { console.error('Streak badge error:', err); }

    // Weekend Warrior badge
    try {
      const { data: weekendResults, error } = await sb
        .from('quiz_results')
        .select('played_at')
        .eq('player', userId)
        .eq('completed', true);

      if (!error && weekendResults) {
        const weekendCount = weekendResults.reduce((count, r) => {
          const day = new Date(r.played_at).getDay();
          return (day === 0 || day === 6) ? count + 1 : count;
        }, 0);

        if (weekendCount >= 10) {
          const badge = await awardBadge(BADGE_IDS.weekendWarrior);
          if (badge) notify(`🏅 You earned the "${badge.name}" badge!`, 4000, badge.icon_url);
        }
      }
    } catch (err) { console.error('Weekend Warrior badge error:', err); }

    // Insomniac badge
    try {
      const { data: nightQuizzes, error } = await sb
        .from('quiz_results')
        .select('played_at')
        .eq('player', userId)
        .eq('completed', true);

      if (!error && nightQuizzes) {
        const hasNightQuiz = nightQuizzes.some(r => {
          const hour = new Date(r.played_at).getHours();
          return hour >= 2 && hour < 5;
        });

        if (hasNightQuiz) {
          const badge = await awardBadge(BADGE_IDS.insomniac);
          if (badge) notify(`🏅 You earned the "${badge.name}" badge!`, 4000, badge.icon_url);
        }
      }
    } catch (err) { console.error('Insomniac badge error:', err); }
  } catch (err) {
    // Catch-all for any unexpected error
    console.error('checkAndAwardBadges() unexpected error:', err);
  }
}

// ────────────────────────────────────────────────────────────────────────────
// 7) The Hugo Badge: typed "hugo" into any input field
// ────────────────────────────────────────────────────────────────────────────
export function setupLiveBadgeListeners() {
  document.addEventListener('input', async e => {
    try {
      if (e.target.tagName.toLowerCase() !== 'input') return;
      const val = e.target.value.trim().toLowerCase();
      if (val === 'hugo' || val === 'help me') {
        await awardBadge(BADGE_IDS.hugo);
      }
    } catch (err) {
      console.error('setupLiveBadgeListeners error:', err);
    }
  });
}