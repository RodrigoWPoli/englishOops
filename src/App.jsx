import React, { useState, useRef, useEffect } from 'react';
import { useGameState } from './hooks/useGameState';
import { ProfileSelect } from './components/ProfileSelect';
import { HomeScreen } from './components/HomeScreen';
import { QuizScreen } from './components/QuizScreen';
import { ResultsScreen } from './components/ResultsScreen';
import { HUD, ToastContainer } from './components/HUD';

const SCREEN = { PROFILE: 'profile', HOME: 'home', QUIZ: 'quiz', RESULTS: 'results' };

const MYSTERY_MODULE = {
  id: 'mystery',
  title: 'Mystery Mix 🎲',
  subtitle: 'Random questions from all unlocked modules. No mercy.',
  icon: '🎲',
  color: '#92400e',
  accent: '#f59e0b',
  badgeId: null,
  minLevel: 5,
  questionCount: 10,
};

function ErrorFallback({ error }) {
  return (
    <div style={{ color: 'white', background: 'red', padding: '20px', margin: '20px', borderRadius: '8px' }}>
      <h2>☢️ App Crash Detected ☢️</h2>
      <pre style={{ whiteSpace: 'pre-wrap' }}>{error.message}\n{error.stack}</pre>
    </div>
  );
}

export default function App() {
  const [error, setError] = useState(null);

  try {
    return <MainApp />;
  } catch (err) {
    return <ErrorFallback error={err} />;
  }
}

function MainApp() {
  const { 
    state, toasts, questions, gameData, ready, 
    getXpProgress, getXpPercent, getXpNeeded, 
    recordAnswer, saveModuleStats, setState 
  } = useGameState(null);
  
  const [screen, setScreen] = useState(SCREEN.PROFILE);
  const [activeModuleId, setActiveModuleId] = useState(null);
  const [quizMode, setQuizMode] = useState('normal');
  const [sessionKey, setSessionKey] = useState(0);
  const resultsRef = useRef(null);

  if (!ready) {
    return <div className="loading-screen">🤯 Seeding Linguistic Chaos...</div>;
  }

  // Handlers
  function handleSelectProfile(p) {
    setState(p);
    setScreen(SCREEN.HOME);
  }

  function handleStartModule(moduleId, mode = 'normal') {
    const allMods = [...(gameData.modules || []), MYSTERY_MODULE];
    const mod = allMods.find(m => m.id === moduleId);
    if (!mod || (state && state.level < mod.minLevel)) return;
    setQuizMode(mode);
    setActiveModuleId(moduleId);
    setSessionKey(Date.now());
    setScreen(SCREEN.QUIZ);
  }

  function handleFinish(mod, correct, total, mode = 'normal') {
    if (!state) return;
    saveModuleStats(mod.id, correct, total);
    const newBadges = [];
    resultsRef.current = { mod, correct, total, earnedBadges: newBadges, mode };
    setScreen(SCREEN.RESULTS);
  }

  const handleHome = () => { setActiveModuleId(null); setScreen(SCREEN.HOME); };
  const handleSwitchProfile = () => { setState(null); setScreen(SCREEN.PROFILE); };

  // This part is the most suspicious for crashes
  let xpProgress = 0;
  let xpPercent = 0;
  try {
    xpProgress = getXpProgress();
    xpPercent = getXpPercent();
  } catch (e) {
    console.error('XP Calc failed', e);
  }

  const showHud = state && screen !== SCREEN.HOME && screen !== SCREEN.PROFILE;

  return (
    <>
      {screen === SCREEN.PROFILE && <ProfileSelect onSelect={handleSelectProfile} />}
      
      {showHud && <HUD state={state} xpProgress={xpProgress} xpPercent={xpPercent} xpNeeded={getXpNeeded()} />}

      {screen === SCREEN.HOME && state && (
        <HomeScreen
          state={state}
          modules={[...(gameData.modules || []), MYSTERY_MODULE]}
          badges={gameData.badges || []}
          xpProgress={xpProgress}
          xpPercent={xpPercent}
          getXpNeeded={getXpNeeded}
          onStart={handleStartModule}
          onSwitchProfile={handleSwitchProfile}
        />
      )}

      {screen === SCREEN.QUIZ && activeModuleId && state && (
        <QuizScreen
          key={`${activeModuleId}-${sessionKey}`}
          moduleId={activeModuleId}
          questionsPool={questions || []}
          moduleData={
            [...(gameData.modules || []), MYSTERY_MODULE].find(m => m.id === activeModuleId)
          }
          allModules={[...(gameData.modules || []), MYSTERY_MODULE]}
          roasts={gameData.roasts || []}
          praise={gameData.praise || []}
          state={state}
          mode={quizMode}
          onBack={handleHome}
          onFinish={(mod, correct, total) => handleFinish(mod, correct, total, quizMode)}
          recordAnswer={recordAnswer}
        />
      )}

      {screen === SCREEN.RESULTS && resultsRef.current && (
        <ResultsScreen
          mod={resultsRef.current.mod}
          correct={resultsRef.current.correct}
          total={resultsRef.current.total}
          earnedBadges={resultsRef.current.earnedBadges}
          badgePool={gameData.badges || []}
          xpPerCorrect={parseInt(gameData.settings?.XP_PER_CORRECT || '10')}
          mode={resultsRef.current.mode}
          onRetry={() => setScreen(SCREEN.QUIZ)}
          onHome={handleHome}
        />
      )}

      <ToastContainer toasts={toasts || []} />
    </>
  );
}
