import { useState, useEffect, useCallback } from 'react';

const STATE_KEY = 'englishoops_state';

function defaultState() {
  return {
    xp: 0,
    level: 1,
    streak: 0,
    maxStreak: 0,
    totalCorrect: 0,
    totalAnswered: 0,
    badges: [],
    moduleStats: {},
  };
}

function loadState() {
  try {
    const saved = localStorage.getItem(STATE_KEY);
    return saved ? { ...defaultState(), ...JSON.parse(saved) } : defaultState();
  } catch {
    return defaultState();
  }
}

const API_BASE = 'http://localhost:3001/api';

export function useGameState(initialProfile = null) {
  const [state, setState] = useState(initialProfile);
  const [toasts, setToasts] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [gameData, setGameData] = useState({ modules: [], badges: [], roasts: [], praise: [], settings: {} });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!state?.id) return;
    localStorage.setItem(`englishoops_profile_${state.id}`, JSON.stringify(state));
    
    fetch(`${API_BASE}/profiles/${state.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state)
    });
  }, [state]);

  useEffect(() => {
    Promise.all([
      fetch(`${API_BASE}/questions`).then(res => res.json()),
      fetch(`${API_BASE}/bootstrap`).then(res => res.json())
    ]).then(([qs, bootstrap]) => {
      setQuestions(qs);
      setGameData(bootstrap);
      setReady(true);
    }).catch(err => {
      console.error('CRITICAL: Game startup failed:', err);
      addToast('🚧 Error connecting to the educational engine. Check server!', 'error');
    });

    const timer = setTimeout(() => setReady(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const addToast = useCallback((msg, type = '') => {
    const id = Date.now() + Math.random();
    setToasts(prev => [...prev, { id, msg, type }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3200);
  }, []);

  // Effect to Toast on Badge unlock
  useEffect(() => {
    if (!state?.badges || !ready) return;
    const lastBadgeId = state.badges[state.badges.length - 1];
    if (lastBadgeId) {
      const badge = gameData.badges.find(b => b.id === lastBadgeId);
      if (badge) {
        addToast(`🏅 Badge unlocked: ${badge.icon} ${badge.name}`, 'badge');
      }
    }
  }, [state?.badges?.length, addToast, gameData.badges, ready]);

  // Effect to Toast on Level Up
  useEffect(() => {
    if (!state?.level) return;
    const isFirstLoad = !localStorage.getItem(`last_seen_level_${state.id}`);
    const lastLevel = parseInt(localStorage.getItem(`last_seen_level_${state.id}`) || '1');
    if (state.level > lastLevel && !isFirstLoad) {
      addToast(`🌟 Level Up! You're now Level ${state.level}!`, 'level');
    }
    localStorage.setItem(`last_seen_level_${state.id}`, state.level.toString());
  }, [state?.level, state?.id, addToast]);

  const getXpNeeded = useCallback((level = state?.level || 1) => {
    return level * 100; // 100 for L1, 200 for L2, etc.
  }, [state?.level]);

  const getXpProgress = useCallback((s = state) => {
    if (!s) return 0;
    // Total XP required for level L = 50 * L * (L-1)
    const base = 50 * s.level * (s.level - 1);
    return s.xp - base;
  }, [state]);

  const getXpPercent = useCallback((s = state) => {
    if (!s) return 0;
    return Math.min((getXpProgress(s) / getXpNeeded(s.level)) * 100, 100);
  }, [getXpProgress, getXpNeeded, state]);

  const checkBadge = useCallback((id, currentState) => {
    if (currentState.badges.includes(id)) return currentState;
    const badge = gameData.badges.find(b => b.id === id);
    if (!badge) return currentState;
    if (id === 'level_5' && currentState.level < 5) return currentState;
    if (id === 'streak_5' && currentState.streak < 5) return currentState;

    return { ...currentState, badges: [...currentState.badges, id] };
  }, [gameData.badges]);

  const awardXP = useCallback((amount, streakBonus = 0) => {
    setState(prev => {
      const newXp = prev.xp + amount + streakBonus;
      // Solve for L: 50 * L * (L-1) <= newXp
      // 50L^2 - 50L - newXp <= 0
      // L = (50 + sqrt(2500 + 4*50*newXp)) / 100
      // L = (50 + sqrt(2500 + 200*newXp)) / 100
      const newLevel = Math.floor((50 + Math.sqrt(2500 + 200 * newXp)) / 100);
      let next = { ...prev, xp: newXp };

      if (newLevel > prev.level) {
        next.level = newLevel;
        addToast(`🌟 Level Up! You're now Level ${newLevel}!`, 'level');
        next = checkBadge('level_5', next);
      }
      return next;
    });
  }, [addToast, checkBadge]);

  const recordAnswer = useCallback((isCorrect, moduleId, multiplier = 1) => {
    setState(prev => {
      let next = {
        ...prev,
        totalAnswered: prev.totalAnswered + 1,
      };

      if (isCorrect) {
        next.totalCorrect = prev.totalCorrect + 1;
        next.streak = prev.streak + 1;
        next.maxStreak = Math.max(prev.maxStreak, next.streak);

        // XP and Level Up
        const streakBonus = next.streak > 1 ? (next.streak - 1) * 2 : 0;
        const xpPerCorrect = parseInt(gameData.settings.XP_PER_CORRECT || '10');
        next.xp += Math.round((xpPerCorrect + streakBonus) * multiplier);
        
        const newLevel = Math.floor((50 + Math.sqrt(2500 + 200 * next.xp)) / 100);
        if (newLevel > next.level) {
          next.level = newLevel;
          next = checkBadge('level_5', next);
        }
        
        next = checkBadge('streak_5', next);
      } else {
        next.streak = 0;
      }
      
      next = checkBadge('first_blood', next);
      return next;
    });
  }, [checkBadge, gameData.settings.XP_PER_CORRECT]);

  const saveModuleStats = useCallback((moduleId, correct, total) => {
    setState(prev => {
      let next = {
        ...prev,
        moduleStats: { ...prev.moduleStats, [moduleId]: { correct, total } },
      };
      const mod = { grammar_ace: 'grammar', culture_vulture: 'civilization', linguist: 'facts', bookworm: 'comprehension' };
      const badgeId = Object.keys(mod).find(k => mod[k] === moduleId);
      if (badgeId) next = checkBadge(badgeId, next);
      if (correct === total) next = checkBadge('perfectionist', next);
      return next;
    });
  }, [checkBadge]);

  return { state, toasts, questions, gameData, ready, getXpProgress, getXpPercent, getXpNeeded, recordAnswer, saveModuleStats, addToast, setState };
}
