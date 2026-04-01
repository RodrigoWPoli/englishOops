export function HomeScreen({ state, modules, badges, xpProgress, xpPercent, getXpNeeded, onStart, onSwitchProfile }) {
  const totalAnswered = state?.totalAnswered || 0;
  const totalCorrect = state?.totalCorrect || 0;
  const maxStreak = state?.maxStreak || 0;
  const level = state?.level || 1;
  const xp = state?.xp || 0;

  const accuracy =
    totalAnswered > 0
      ? Math.round((totalCorrect / totalAnswered) * 100)
      : 0;

  return (
    <div className="home">
      <div className="home-hero">
        <button className="switch-profile-btn" onClick={onSwitchProfile} title="Change Profile">
          <img src={state.avatar} alt={state.name} className="switch-profile-avatar" />
          <span>Switch Profile</span>
        </button>
        <span className="home-logo">🤯</span>
        <h1 className="home-title">EnglishOops</h1>
        <p className="home-subtitle">
          Learn English the hard, hilarious, and occasionally humiliating way.
        </p>
      </div>

      {/* Stats */}
      <div className="stats-bar">
        <div className="stat-item">
          <span className="stat-value">🏅 {level}</span>
          <span className="stat-label">Level</span>
        </div>
        <div className="stat-divider" />
        <div className="stat-item">
          <span className="stat-value">💎 {xp}</span>
          <span className="stat-label">Total XP</span>
        </div>
        <div className="stat-divider" />
        <div className="stat-item">
          <span className="stat-value">⚡ {maxStreak}</span>
          <span className="stat-label">Best Streak</span>
        </div>
        <div className="stat-divider" />
        <div className="stat-item">
          <span className="stat-value">🎯 {accuracy}%</span>
          <span className="stat-label">Accuracy</span>
        </div>
      </div>

      {/* XP bar */}
      <div className="xp-section">
        <div className="xp-header">
          <span className="xp-header-level">🚀 Level {level}</span>
          <span>✨ {xpProgress} / {getXpNeeded(level)} XP to Level {level + 1}</span>
        </div>
        <div className="xp-bar-home">
          <div className="xp-fill-home" style={{ width: `${xpPercent}%` }} />
        </div>
      </div>

      <div className="section-header" style={{ width: '100%' }}>
        <div className="section-title">Choose Your Suffering</div>
        <div className="module-grid">
          {modules.map(mod => {
            const stats = state.moduleStats[mod.id];
            const isLocked = state.level < mod.minLevel;
            const isMystery = mod.id === 'mystery';
            const doneLabel = isMystery
              ? '10 random questions · all modules'
              : stats
                ? `${stats.correct}/${stats.total} correct last run`
                : `${mod.questionCount || 0} questions available`;

            return (
              <div
                key={mod.id}
                className={`module-card ${isLocked ? 'locked' : ''} ${isMystery ? 'mystery-card' : ''}`}
                id={`module-${mod.id}`}
                role="button"
                tabIndex={isLocked ? -1 : 0}
                style={{ position: 'relative', borderColor: 'rgba(255,255,255,0.08)' }}
                onClick={() => !isLocked && onStart(mod.id, 'normal')}
                onKeyDown={e => e.key === 'Enter' && !isLocked && onStart(mod.id, 'normal')}
                onMouseEnter={e => !isLocked && (e.currentTarget.style.borderColor = mod.accent)}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
              >
                {/* Sudden death button — regular modules only */}
                {!isLocked && !isMystery && (
                  <button
                    className="sd-btn"
                    title="Sudden Death: one wrong answer ends the run"
                    onClick={e => { e.stopPropagation(); onStart(mod.id, 'sudden-death'); }}
                  >
                    ☠️ Sudden Death
                  </button>
                )}

                <span className="module-icon">{mod.icon}</span>
                <div className="module-title" style={{ color: mod.accent }}>
                  {mod.title}
                </div>
                {isLocked ? (
                  <div className="module-lock-tag">🔓 Unlock at Level {mod.minLevel}</div>
                ) : (
                  <div className="module-subtitle">{mod.subtitle}</div>
                )}
                {!isLocked && <div className="module-count">{doneLabel}</div>}
              </div>
            );
          })}
        </div>
      </div>

      {/* Badges */}
      <div className="badges-section">
        <div className="section-title">
          Badges ({state.badges.length}/{badges.length} unlocked)
        </div>
        <div className="badges-grid">
          {badges.map(b => {
            const earned = state.badges.includes(b.id);
            return (
              <div key={b.id} className={`badge-chip ${earned ? 'earned' : 'locked'}`} title={b.desc}>
                <span className="badge-icon">{b.icon}</span>
                <span className="badge-name">{b.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
