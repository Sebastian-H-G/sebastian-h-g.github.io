// badges.js

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = 'https://pzyzdmndotuvbvfhxwad.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6eXpkbW5kb3R1dmJ2Zmh4d2FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4MDUxNzIsImV4cCI6MjA2MjM4MTE3Mn0.UpltfEmKUgYINeWP4aHPOkYT8cOx6nVi0cdE5bMAjqA';
const sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: { persistSession: true, autoRefreshToken: true }
});

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
  return true;
}

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
  const { quizId, attained, attainable, completed, gaveUp = false, playedAt, timeTaken, timeAllowed } = ctx;
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return;
  const userId = user.id;
 
const profile = await getUserProfile(userId);
const userTimeZone = profile?.time_zone || 'UTC';  // ✅ safe fallback
const hour = getHourInTimeZone(playedAt, userTimeZone);


  // 1) Safe Bet: 3 passes in a row
  const last3 = await sb
    .from('quiz_results')
    .select('completed, gave_up')
    .eq('player', userId)
    .order('played_at', { ascending: false })
    .limit(3)
    .then(res => res.data || []);
  if (last3.length === 3 && last3.every(r => r.completed && !r.gave_up)) {
    await awardBadge(BADGE_IDS.safeBet);
  }

  // 2) Early Bird: 6 AM–noon
  if (hour >= 6 && hour < 12) await awardBadge(BADGE_IDS.earlyBird);

  // 3) On Fire: 3 perfects
  const perf3 = await sb
    .from('quiz_results')
    .select('attained_score, attainable_score, completed')
    .eq('player', userId)
    .order('played_at', { ascending: false })
    .limit(3)
    .then(res => res.data || []);
  if (perf3.length === 3 && perf3.every(r => r.completed && r.attained_score === r.attainable_score)) {
    await awardBadge(BADGE_IDS.onFire);
  }


    // 🆕 First Quiz: completed your first quiz
  if (completed) {
    const { count: firstCount } = await sb
      .from('quiz_results')
      .select('id', { count: 'exact', head: true })
      .eq('player', userId)
      .eq('completed', true);
    if (firstCount === 1) {
      await awardBadge(BADGE_IDS.firstQuiz);
    }
  }
  // 4) 10 Down & 5) 25 Strong
  const { count: doneCount } = await sb
    .from('quiz_results')
    .select('id', { count: 'exact', head: true })
    .eq('player', userId)
    .eq('completed', true);
  if (doneCount >= 10) await awardBadge(BADGE_IDS.tenDown);
  if (doneCount >= 25) await awardBadge(BADGE_IDS.twentyFiveStrong);

  // 6) Quick Learner
  if (timeTaken != null && timeAllowed != null && timeTaken <= timeAllowed / 2) {
    await awardBadge(BADGE_IDS.quickLearner);
  }

  // 7) Comeback Kid
  if (completed && gaveUp) {
    const history = await sb
      .from('quiz_results')
      .select('gave_up, completed')
      .eq('player', userId)
      .eq('quiz', quizId)
      .order('played_at', { ascending: true })
      .then(res => res.data || []);
    if (history.some(r => r.gave_up) && history.some(r => r.completed && !r.gave_up)) {
      await awardBadge(BADGE_IDS.comebackKid);
    }
  }

  // 8) Precision Hit
  if (completed && attained === attainable && attainable > 25) {
    await awardBadge(BADGE_IDS.precisionHit);
  }

  // 9) Night Owl
  if (completed && hour < 6) await awardBadge(BADGE_IDS.nightOwl);

  // 10) One Streak Wonder
  const perf2 = await sb
    .from('quiz_results')
    .select('attained_score, attainable_score, completed')
    .eq('player', userId)
    .order('played_at', { ascending: false })
    .limit(2)
    .then(res => res.data || []);
  if (perf2.length === 2 && perf2.every(r => r.completed && r.attained_score === r.attainable_score)) {
    await awardBadge(BADGE_IDS.oneStreak);
  }

  // 11) Badge Collector
  const { count: badgeCount } = await sb
    .from('user_badges')
    .select('badge_id', { count: 'exact', head: true })
    .eq('user_id', userId);
  if (badgeCount >= 5) await awardBadge(BADGE_IDS.collector);

  // 12) Flag Master (perfect on any flag quiz)
  if (completed && attained === attainable && await userCompletedAny(userId, QUIZ_CATEGORIES.flags)) {
    await awardBadge(BADGE_IDS.flagMaster);
  }

  // 13–16) Topic badges (completed any quiz in category)
  if (await userCompletedAny(userId, QUIZ_CATEGORIES.mountain)) await awardBadge(BADGE_IDS.mountain);
  if (await userCompletedAny(userId, QUIZ_CATEGORIES.island))   await awardBadge(BADGE_IDS.island);
  if (await userCompletedAny(userId, QUIZ_CATEGORIES.river))    await awardBadge(BADGE_IDS.river);
  if (await userCompletedAny(userId, QUIZ_CATEGORIES.desert))   await awardBadge(BADGE_IDS.desert);

  // 17) Global Grandmaster
  const { count: allDone } = await sb
    .from('quiz_results')
    .select('quiz', { count: 'exact', head: true })
    .eq('player', userId)
    .eq('completed', true);
  const { count: totalQuizzes } = await sb
    .from('quizzes')
    .select('id', { count: 'exact', head: true });
  if (allDone >= totalQuizzes) await awardBadge(BADGE_IDS.globalMaster);

  // 18) Seafarer
  if (await userCompletedAny(userId, QUIZ_CATEGORIES.seafarer)) await awardBadge(BADGE_IDS.seafarer);

  // 19) Ultimate GeoQuiz
  if (
    completed &&
    QUIZ_CATEGORIES.ultimate.includes(quizId) &&
    attained / attainable >= 0.5
  ) {
    await awardBadge(BADGE_IDS.ultimateGeo);
  }
  // ────────────────────────────────────────────────────────────────────────────
// 1) Explorer: tried quizzes in 3 different categories
// ────────────────────────────────────────────────────────────────────────────
{
  // 1a) fetch all completed quiz IDs
  const { data: played } = await sb
    .from('quiz_results')
    .select('quiz')
    .eq('player', userId)
    .eq('completed', true);
  const quizIds = (played || []).map(r => r.quiz);

  if (quizIds.length > 0) {
    // 1b) fetch categories for those quizzes
    const { data: quizzes } = await sb
      .from('quizzes')
      .select('category')
      .in('id', quizIds);
    const categories = new Set((quizzes || []).map(q => q.category));

    if (categories.size >= 3) {
      await awardBadge(BADGE_IDS.explorer);
    }
  }
}

// ────────────────────────────────────────────────────────────────────────────
// 2) Rising Star: achieved a perfect score on *any* quiz
// ────────────────────────────────────────────────────────────────────────────
{
  const { data: allResults } = await sb
    .from('quiz_results')
    .select('attained_score, attainable_score')
    .eq('player', userId);

  if ((allResults || []).some(r => r.attained_score === r.attainable_score)) {
    await awardBadge(BADGE_IDS.risingStar);
  }
}

// ────────────────────────────────────────────────────────────────────────────
// 3) Mastermind: completed *all* quizzes in *any one* category
// ────────────────────────────────────────────────────────────────────────────
{
  // 3a) get list of categories
  const { data: allQuizzes } = await sb.from('quizzes').select('id, category');
  const byCategory = {};
  (allQuizzes || []).forEach(q => {
    byCategory[q.category] = byCategory[q.category] || [];
    byCategory[q.category].push(q.id);
  });

  // 3b) for each category, compare counts
  await Promise.all(Object.entries(byCategory).map(async ([cat, ids]) => {
    // total quizzes in this category
    const total = ids.length;
    // completed by user
    const { count: done } = await sb
      .from('quiz_results')
      .select('id', { head: true, count: 'exact' })
      .eq('player', userId)
      .eq('completed', true)
      .in('quiz', ids);

    if (done >= total && total > 0) {
      await awardBadge(BADGE_IDS.mastermind);
    }
  }));
}

// ────────────────────────────────────────────────────────────────────────────
// 4) Champion: completed 5 quizzes in a row
// ────────────────────────────────────────────────────────────────────────────
{
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
    await awardBadge(BADGE_IDS.champion);
  }
}

// ────────────────────────────────────────────────────────────────────────────
// 5) The Climber: improved your score after retrying the *same* quiz
// ────────────────────────────────────────────────────────────────────────────
{
  const { data: history } = await sb
    .from('quiz_results')
    .select('quiz, attained_score, played_at')
    .eq('player', userId)
    .order('played_at', { ascending: true });

  // group by quizId
  const byQuiz = {};
  (history || []).forEach(r => {
    byQuiz[r.quiz] = byQuiz[r.quiz] || [];
    byQuiz[r.quiz].push(r.attained_score);
  });

  // check any quiz where max score > first score
  const improved = Object.values(byQuiz).some(scores => {
    return scores.length >= 2 && Math.max(...scores) > scores[0];
  });
  if (improved) {
    await awardBadge(BADGE_IDS.climber);
  }
}

// ────────────────────────────────────────────────────────────────────────────
// 6) Daily Drifter: did *the same* quiz twice in one day, ≥3 hours apart
// ────────────────────────────────────────────────────────────────────────────
{
  const { data: attempts } = await sb
    .from('quiz_results')
    .select('quiz, played_at')
    .eq('player', userId)
    .order('played_at', { ascending: true });

  // bucket by quizId + calendar date
  const bucket = {};
  (attempts || []).forEach(r => {
    const date = new Date(r.played_at).toISOString().slice(0, 10);
    const key  = `${r.quiz}::${date}`;
    bucket[key] = bucket[key] || [];
    bucket[key].push(new Date(r.played_at).getTime());
  });

  // for any bucket, check min‑max difference ≥ 3h
  const threeHours = 3 * 60 * 60 * 1000;
  const drifter = Object.values(bucket).some(times => {
    if (times.length < 2) return false;
    const minT = Math.min(...times);
    const maxT = Math.max(...times);
    return (maxT - minT) >= threeHours;
  });
  if (drifter) {
    await awardBadge(BADGE_IDS.dailyDrifter);
  }
}

// ────────────────────────────────────────────────────────────────────────────
// 7) The Hugo Badge: typed "hugo" into any input field
// ────────────────────────────────────────────────────────────────────────────
// 👂 Hugo badge: type "hugo" or "help me" anywhere
document.addEventListener('input', async e => {
  if (e.target.tagName.toLowerCase() !== 'input') return;
  const val = e.target.value.trim().toLowerCase();
  if (val === 'hugo' || val === 'help me') {
    console.log('🧙 You typed a secret phrase — awarding Hugo badge...');
    await awardBadge(BADGE_IDS.hugo);
  }
});
// 3 Streak: completed 1 quiz per day for 3 consecutive days
  {
    const { data: results } = await sb
      .from('quiz_results')
      .select('played_at')
      .eq('player', userId)
      .eq('completed', true)
      .order('played_at', { ascending: false });

    if (results && results.length > 0) {
      // Group by date string (e.g., "2025-07-21")
      const daysPlayed = new Set(
        results.map(r => new Date(r.played_at).toISOString().slice(0, 10))
      );

      const today = new Date();
      let streak = 0;

      for (let i = 0; i < 3; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        const isoDate = date.toISOString().slice(0, 10);
        if (daysPlayed.has(isoDate)) {
          streak++;
        } else {
          break; // streak broken
        }
      }

      if (streak === 3) {
        await awardBadge(BADGE_IDS.streak3);
      }
    }
  }
  // 5 day streak
    {
    const { data: results } = await sb
      .from('quiz_results')
      .select('played_at')
      .eq('player', userId)
      .eq('completed', true)
      .order('played_at', { ascending: false });

    if (results && results.length > 0) {
      // Group by date string (e.g., "2025-07-21")
      const daysPlayed = new Set(
        results.map(r => new Date(r.played_at).toISOString().slice(0, 10))
      );

      const today = new Date();
      let streak = 0;

      for (let i = 0; i < 5; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        const isoDate = date.toISOString().slice(0, 10);
        if (daysPlayed.has(isoDate)) {
          streak++;
        } else {
          break; // streak broken
        }
      }

      if (streak === 5) {
        await awardBadge(BADGE_IDS.streak3);
      }
    }
  }
  // 7 day streak
    {
    const { data: results } = await sb
      .from('quiz_results')
      .select('played_at')
      .eq('player', userId)
      .eq('completed', true)
      .order('played_at', { ascending: false });

    if (results && results.length > 0) {
      // Group by date string (e.g., "2025-07-21")
      const daysPlayed = new Set(
        results.map(r => new Date(r.played_at).toISOString().slice(0, 10))
      );

      const today = new Date();
      let streak = 0;

      for (let i = 0; i < 7; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        const isoDate = date.toISOString().slice(0, 10);
        if (daysPlayed.has(isoDate)) {
          streak++;
        } else {
          break; // streak broken
        }
      }

      if (streak === 7) {
        await awardBadge(BADGE_IDS.streak3);
      }
    }
  }
  // 10 day streak
    {
    const { data: results } = await sb
      .from('quiz_results')
      .select('played_at')
      .eq('player', userId)
      .eq('completed', true)
      .order('played_at', { ascending: false });

    if (results && results.length > 0) {
      // Group by date string (e.g., "2025-07-21")
      const daysPlayed = new Set(
        results.map(r => new Date(r.played_at).toISOString().slice(0, 10))
      );

      const today = new Date();
      let streak = 0;

      for (let i = 0; i < 10; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        const isoDate = date.toISOString().slice(0, 10);
        if (daysPlayed.has(isoDate)) {
          streak++;
        } else {
          break; // streak broken
        }
      }

      if (streak === 10) {
        await awardBadge(BADGE_IDS.streak3);
      }
    }
  }
  // 14 day streak
    {
    const { data: results } = await sb
      .from('quiz_results')
      .select('played_at')
      .eq('player', userId)
      .eq('completed', true)
      .order('played_at', { ascending: false });

    if (results && results.length > 0) {
      // Group by date string (e.g., "2025-07-21")
      const daysPlayed = new Set(
        results.map(r => new Date(r.played_at).toISOString().slice(0, 10))
      );

      const today = new Date();
      let streak = 0;

      for (let i = 0; i < 14; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        const isoDate = date.toISOString().slice(0, 10);
        if (daysPlayed.has(isoDate)) {
          streak++;
        } else {
          break; // streak broken
        }
      }

      if (streak === 14) {
        await awardBadge(BADGE_IDS.streak3);
      }
    }
  }
  




  // 21) Weekend Warrior: completed 10 quizzes on a weekend (Saturday or Sunday)
{
  const { data: weekendResults, error } = await sb
    .from('quiz_results')
    .select('played_at')
    .eq('player', userId)
    .eq('completed', true);

  if (!error && weekendResults) {
    const weekendCount = weekendResults.reduce((count, r) => {
      const day = new Date(r.played_at).getDay(); // 0 = Sunday, 6 = Saturday
      return (day === 0 || day === 6) ? count + 1 : count;
    }, 0);

    if (weekendCount >= 10) {
      await awardBadge(BADGE_IDS.weekendWarrior);
    }
  }
}

// INSOMNIAC PLAYER Completed a quiz between 2am and 5am
{
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
      await awardBadge(BADGE_IDS.insomniac);
    }
  }
}


}
