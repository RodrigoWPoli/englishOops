import React from 'react';

export function HUD({ state, xpProgress, xpPercent, xpNeeded }) {
  return (
    <div className="hud">
      <div className="hud-left">
        <span className="hud-streak" title="Current Streak">🔥 {state.streak}</span>
        <span className="hud-level" title="User Level">⭐ Lv. {state.level}</span>
      </div>
      <div className="hud-xp-wrap">
        <div className="hud-xp-bar">
          <div className="hud-xp-fill" style={{ width: `${xpPercent}%` }} />
        </div>
        <span className="hud-xp-label">💎 {xpProgress} / {xpNeeded} XP</span>
      </div>
    </div>
  );
}

export function ToastContainer({ toasts }) {
  return (
    <div className="toast-container">
      {toasts.map(t => (
        <div key={t.id} className={`toast ${t.type}`}>{t.msg}</div>
      ))}
    </div>
  );
}
