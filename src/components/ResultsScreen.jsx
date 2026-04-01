import React from 'react';

export function ResultsScreen({ mod, correct, total, earnedBadges, badgePool, xpPerCorrect, mode, onRetry, onHome }) {
  const pct = Math.round((correct / total) * 100);
  const isSuddenDeath = mode === 'sudden-death';
  const survived = isSuddenDeath && correct === total;

  const emoji = survived ? '☠️' : pct === 100 ? '🏆' : pct >= 70 ? '🎉' : pct >= 40 ? '😅' : '💀';

  const title = isSuddenDeath
    ? survived
      ? '☠️ FLAWLESS DEATH RUN ☠️'
      : `💀 Eliminated on Q${correct + 1} 💀`
    : pct === 100 ? '👑 PERFECT SCORE! 👑'
    : pct >= 70 ? '🔥 Great work! 🔥'
    : pct >= 40 ? '🤔 Not bad... ish. 🤔'
    : '💀 You survived. Barely. 💀';

  const subtitle = isSuddenDeath
    ? survived
      ? `Answered all ${total} questions without a single mistake. Terrifying. 🧠`
      : `Got ${correct} right before crashing out. The run dies here.`
    : pct === 100 ? 'You are dangerously good at English. 🥵'
    : pct >= 70 ? `${correct}/${total} — genuinely impressive. 👏`
    : pct >= 40 ? `${correct}/${total}. Room to grow. A LOT of room. 🌱`
    : `${correct}/${total}. English has filed a restraining order. 📉`;

  // Boss XP is 3× for last question, so show a flat estimate
  const earnedXp = correct * xpPerCorrect;

  return (
    <div className="results-screen">
      <div className="results-emoji">{emoji}</div>
      <h2 className="results-title">{title}</h2>
      <div className="results-score">{correct}/{total}</div>
      <p className="results-subtitle">{subtitle}</p>
      <p className="results-xp">✨ +{earnedXp} XP earned this round ✨</p>

      {earnedBadges.length > 0 && (
        <div className="results-new-badges">
          {earnedBadges.map(id => {
            const b = badgePool.find(x => x.id === id);
            return b ? (
              <div key={id} className="badge-chip earned">
                <span className="badge-icon">{b.icon}</span>
                <span className="badge-name">{b.name}</span>
              </div>
            ) : null;
          })}
        </div>
      )}

      {isSuddenDeath && (
        <p style={{ fontSize: '0.8rem', color: 'var(--red)', fontWeight: 700, letterSpacing: '0.05em' }}>
          ☠️ SUDDEN DEATH RUN
        </p>
      )}

      <div className="results-btn-row">
        <button id="retry-btn" className="btn-primary" onClick={onRetry}>
          Try Again 🔄
        </button>
        <button id="home-btn" className="btn-secondary" onClick={onHome}>
          All Modules 🏠
        </button>
      </div>
    </div>
  );
}
