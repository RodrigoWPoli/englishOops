import Database from 'better-sqlite3';
import * as data from './src/data.js';

const db = new Database('english_oops.db');
db.pragma('journal_mode = WAL');

// 1. Create Tables
db.exec(`
  CREATE TABLE IF NOT EXISTS modules (
    id TEXT PRIMARY KEY,
    title TEXT,
    subtitle TEXT,
    icon TEXT,
    color TEXT,
    accent TEXT,
    badgeId TEXT,
    minLevel INTEGER
  );

  CREATE TABLE IF NOT EXISTS questions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    module_id TEXT,
    type TEXT,
    text TEXT,
    options TEXT,
    correct INTEGER,
    explanation TEXT,
    passage TEXT,
    sub_questions TEXT,
    FOREIGN KEY(module_id) REFERENCES modules(id)
  );

  CREATE TABLE IF NOT EXISTS badges_data (
    id TEXT PRIMARY KEY,
    name TEXT,
    icon TEXT,
    desc TEXT
  );

  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    text TEXT,
    type TEXT -- 'roast' or 'praise'
  );

  CREATE TABLE IF NOT EXISTS settings (
    key TEXT PRIMARY KEY,
    value TEXT
  );

  CREATE TABLE IF NOT EXISTS profiles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    avatar TEXT,
    level INTEGER DEFAULT 1,
    xp INTEGER DEFAULT 0,
    streak INTEGER DEFAULT 0,
    max_streak INTEGER DEFAULT 0,
    total_correct INTEGER DEFAULT 0,
    total_answered INTEGER DEFAULT 0,
    badges TEXT DEFAULT '[]', -- JSON array
    module_stats TEXT DEFAULT '{}' -- JSON object
  );
`);

// Clear volatile data but KEEP PROFILES
db.prepare('DELETE FROM questions').run();
db.prepare('DELETE FROM modules').run();
db.prepare('DELETE FROM badges_data').run();
db.prepare('DELETE FROM messages').run();
db.prepare('DELETE FROM settings').run();

// 2. Seeding
db.transaction(() => {
  for (const mod of data.MODULES) {
    db.prepare(`INSERT INTO modules (id, title, subtitle, icon, color, accent, badgeId, minLevel) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`).run(
      mod.id, mod.title, mod.subtitle, mod.icon, mod.color, mod.accent, mod.badgeId, mod.minLevel || 1
    );
    for (const q of mod.questions) {
      db.prepare(`INSERT INTO questions (module_id, type, text, options, correct, explanation, passage, sub_questions) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`).run(
        mod.id, q.type, q.text || null, q.options ? JSON.stringify(q.options) : null,
        q.correct !== undefined ? (q.correct === true ? 0 : q.correct === false ? 1 : q.correct) : null,
        q.explanation || null, q.passage || null, q.subQuestions ? JSON.stringify(q.subQuestions) : null
      );
    }
  }
  for (const b of data.BADGES) {
    db.prepare('INSERT INTO badges_data (id, name, icon, desc) VALUES (?, ?, ?, ?)').run(b.id, b.name, b.icon, b.desc);
  }
  for (const m of data.ROAST_MESSAGES) db.prepare('INSERT INTO messages (text, type) VALUES (?, ?)').run(m, 'roast');
  for (const m of data.PRAISE_MESSAGES) db.prepare('INSERT INTO messages (text, type) VALUES (?, ?)').run(m, 'praise');
  db.prepare('INSERT INTO settings (key, value) VALUES (?, ?)').run('XP_PER_CORRECT', data.XP_PER_CORRECT.toString());
  db.prepare('INSERT INTO settings (key, value) VALUES (?, ?)').run('XP_PER_LEVEL', data.XP_PER_LEVEL.toString());
})();

// Initial profiles if missing
const count = db.prepare('SELECT count(*) as count FROM profiles').get();
if (count.count === 0) {
  const insertP = db.prepare('INSERT INTO profiles (name, avatar) VALUES (?, ?)');
  insertP.run('Linguist Bob', '/avatar_student_frustrated_...png');
  insertP.run('Grammar Cop', '/avatar_linguistic_detective_...png');
}

console.log('Database safely synchronized! 📦✨');
db.close();
