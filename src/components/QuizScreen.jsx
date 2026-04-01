import React, { useState, useMemo, useRef } from 'react';

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function flattenQuestions(moduleQuestions) {
  const flat = [];
  moduleQuestions.forEach((q, qi) => {
    if (q.type === 'comprehension') {
      const subs = q.subQuestions || q.sub_questions || [];
      subs.forEach((sq, sqi) => {
        flat.push({ ...q, subQuestions: subs, subIndex: sqi, _qi: qi });
      });
    } else {
      if (q.type === 'mcq' && !q._shuffled) {
        const indices = q.options.map((_, i) => i);
        const shuffledIndices = shuffle(indices);
        const shuffledOptions = shuffledIndices.map(i => q.options[i]);
        const newCorrect = shuffledIndices.indexOf(q.correct);
        flat.push({ ...q, options: shuffledOptions, correct: newCorrect, _shuffled: true });
      } else {
        flat.push(q);
      }
    }
  });
  return flat;
}

const QUESTIONS_PER_SESSION = 5;
const MYSTERY_COUNT = 10;

export function QuizScreen({ moduleId, questionsPool, moduleData, allModules, roasts, praise, state, mode = 'normal', onBack, onFinish, recordAnswer }) {
  const mod = moduleData;
  const isSuddenDeath = mode === 'sudden-death';
  const isMystery = moduleId === 'mystery';

  const initialLevelRef = useRef(state?.level);

  const [questions] = useState(() => {
    let pool;
    if (isMystery) {
      const unlockedIds = (allModules || [])
        .filter(m => m.id !== 'mystery' && initialLevelRef.current >= m.minLevel)
        .map(m => m.id);
      pool = questionsPool.filter(q => unlockedIds.includes(q.module_id));
    } else {
      pool = questionsPool.filter(q => q.module_id === moduleId);
    }
    const count = isMystery ? MYSTERY_COUNT : QUESTIONS_PER_SESSION;
    const selected = shuffle(pool).slice(0, Math.min(pool.length, count));
    return flattenQuestions(selected);
  });

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [correct, setCorrect] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const gameOverRef = useRef(false);

  const q = questions[current];
  const isLast = current === questions.length - 1;
  const isBoss = isLast;
  const progress = Math.round((current / questions.length) * 100);

  const correctIdx = useMemo(() => {
    if (!q) return 0;
    if (q.type === 'comprehension') {
      const sub = q.subQuestions[q.subIndex];
      return sub.correct;
    }
    if (q.type === 'tf') return q.correct === true || q.correct === 0 ? 0 : 1;
    return q.correct;
  }, [q]);

  const options = useMemo(() => {
    if (!q) return [];
    if (q.type === 'comprehension') return q.subQuestions[q.subIndex].options;
    if (q.type === 'tf') return ['TRUE ✅', 'FALSE ❌'];
    return q.options;
  }, [q]);

  const questionText = useMemo(() => {
    if (!q) return '';
    if (q.type === 'comprehension') {
      const sub = q.subQuestions[q.subIndex];
      return sub.text || sub.q || '';
    }
    return q.text;
  }, [q]);

  const typeLabel =
    q?.type === 'comprehension' ? '📖 Comprehension'
    : q?.type === 'tf' ? '✅ True or False'
    : '🔘 Multiple Choice';

  function handleSelect(idx) {
    if (selected !== null) return;
    setSelected(idx);
    const isCorrect = idx === correctIdx;
    if (isCorrect) setCorrect(c => c + 1);
    if (!isCorrect && isSuddenDeath) {
      gameOverRef.current = true;
      setGameOver(true);
    }
    const multiplier = isBoss ? 3 : 1;
    recordAnswer(isCorrect, moduleId === 'mystery' ? (q.module_id || moduleId) : moduleId, multiplier);
    setFeedback({
      isCorrect,
      message: isCorrect ? pick(praise) : pick(roasts),
      explanation: q.explanation || '',
    });
  }

  function handleNext() {
    if (isLast || gameOverRef.current) {
      onFinish(mod, correct, questions.length);
      return;
    }
    setCurrent(c => c + 1);
    setSelected(null);
    setFeedback(null);
  }

  const nextLabel = gameOver
    ? '💀 Game Over'
    : isLast
      ? 'See Results 🎉'
      : 'Next Question →';

  let cardClass = 'question-card';
  if (feedback) cardClass += feedback.isCorrect ? ' correct-card' : ' wrong-card';
  if (isBoss && !feedback) cardClass += ' boss-card';

  return (
    <div className="quiz-screen" style={{
      '--module-color': mod.color,
      '--module-accent': mod.accent,
    }}>
      {/* Header */}
      <div className="quiz-header">
        <button className="quiz-back" onClick={onBack}>← Home</button>
        <span className="quiz-module-title">{mod.icon} {mod.title}</span>
      </div>

      {/* Mode banners */}
      {isSuddenDeath && (
        <div className="quiz-sd-banner">
          ☠️ SUDDEN DEATH — one wrong answer and it's over
        </div>
      )}

      {/* Progress */}
      <div className="quiz-progress">
        <div className="quiz-progress-label">
          <span>Question {current + 1} of {questions.length}</span>
          <span>{progress}%</span>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{
            width: `${progress}%`,
            background: `linear-gradient(90deg, ${mod.color}, ${mod.accent})`,
          }} />
        </div>
      </div>

      {/* Question Card */}
      <div className={cardClass}>

        {/* Boss banner */}
        {isBoss && (
          <div className="boss-banner">
            💀 BOSS QUESTION — correct answer worth 3× XP
          </div>
        )}

        <div className="question-badge" style={{
          background: `${mod.color}22`,
          color: mod.accent,
        }}>
          {typeLabel}
        </div>

        {q?.type === 'comprehension' && (
          <div className="passage-box">{q.passage}</div>
        )}
        {q?.type === 'comprehension' && (
          <div className="sub-q-label">
            Question {q.subIndex + 1} of {q.subQuestions.length}
          </div>
        )}

        <div className={q?.type === 'comprehension' ? 'sub-q-text' : 'question-text'}>
          {questionText}
        </div>

        <div className="options-grid">
          {options.map((opt, i) => {
            let cls = 'option-btn';
            if (selected !== null) {
              if (i === selected && i === correctIdx) cls += ' selected-correct';
              else if (i === selected && i !== correctIdx) cls += ' selected-wrong';
              else if (i === correctIdx) cls += ' reveal-correct';
            }
            return (
              <button
                key={i}
                id={`option-${i}`}
                className={cls}
                disabled={selected !== null}
                onClick={() => handleSelect(i)}
              >
                <span className="option-letter">
                  {q?.type === 'tf' ? (i === 0 ? 'T' : 'F') : String.fromCharCode(65 + i)}
                </span>
                {opt}
              </button>
            );
          })}
        </div>
      </div>

      {/* Feedback */}
      {feedback && (
        <div className={`feedback-box ${feedback.isCorrect ? 'correct-fb' : 'wrong-fb'}`}>
          <div className="feedback-headline">{feedback.message}</div>
          {feedback.explanation && (
            <div className="feedback-explanation">💡 {feedback.explanation}</div>
          )}
          {isBoss && feedback.isCorrect && (
            <div className="feedback-explanation" style={{ color: 'var(--yellow)', marginTop: 6 }}>
              ⭐ Boss bonus! 3× XP awarded.
            </div>
          )}
        </div>
      )}

      {/* Next button */}
      {feedback && (
        <button
          id="next-btn"
          className="next-btn"
          style={{ background: gameOver
            ? 'linear-gradient(135deg, #7f1d1d, #dc2626)'
            : `linear-gradient(135deg, ${mod.color}, ${mod.accent})` }}
          onClick={handleNext}
        >
          {nextLabel}
        </button>
      )}
    </div>
  );
}
