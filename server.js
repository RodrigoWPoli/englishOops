import express from 'express';
import Database from 'better-sqlite3';
import cors from 'cors';

const app = express();
const db = new Database('english_oops.db');

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.get('/', (req, res) => res.send('EnglishOops Backend is READY! 🚀'));

// Helper to convert DB Profile to Frontend Profile
function mapProfile(p) {
  if (!p) return null;
  return {
    ...p,
    totalCorrect: p.total_correct || 0,
    totalAnswered: p.total_answered || 0,
    maxStreak: p.max_streak || 0,
    badges: p.badges ? JSON.parse(p.badges) : [],
    moduleStats: p.module_stats ? JSON.parse(p.module_stats) : {}
  };
}

// --- Questions ---
app.get('/api/questions', (req, res) => {
  const questions = db.prepare('SELECT * FROM questions').all();
  res.json(questions.map(q => ({
    ...q,
    options: q.options ? JSON.parse(q.options) : null,
    subQuestions: q.sub_questions ? JSON.parse(q.sub_questions) : null
  })));
});

// --- Bootstrap Data ---
app.get('/api/bootstrap', (req, res) => {
  const modules = db.prepare(`
    SELECT m.*, COUNT(q.id) as questionCount
    FROM modules m
    LEFT JOIN questions q ON m.id = q.module_id
    GROUP BY m.id
    ORDER BY m.minLevel ASC
  `).all();
  const badges = db.prepare('SELECT * FROM badges_data').all();
  const messages = db.prepare('SELECT * FROM messages').all();
  const settings = db.prepare('SELECT * FROM settings').all();
  
  res.json({
    modules,
    badges,
    roasts: messages.filter(m => m.type === 'roast').map(m => m.text),
    praise: messages.filter(m => m.type === 'praise').map(m => m.text),
    settings: Object.fromEntries(settings.map(s => [s.key, s.value]))
  });
});

// --- Profiles ---
app.get('/api/profiles', (req, res) => {
  const profiles = db.prepare('SELECT * FROM profiles').all();
  res.json(profiles.map(mapProfile));
});

app.post('/api/profiles', (req, res) => {
  const { name, avatar } = req.body;
  const insert = db.prepare('INSERT INTO profiles (name, avatar, level, xp, streak, max_streak, total_correct, total_answered, badges, module_stats) VALUES (?, ?, 1, 0, 0, 0, 0, 0, \'[]\', \'{}\')');
  const result = insert.run(name, avatar || '/avatar_student_frustrated_...png');
  const newProfile = db.prepare('SELECT * FROM profiles WHERE id = ?').get(result.lastInsertRowid);
  res.json(mapProfile(newProfile));
});

app.put('/api/profiles/:id', (req, res) => {
  const { id } = req.params;
  const s = req.body; // state from frontend
  
  const update = db.prepare(`
    UPDATE profiles SET 
      level = ?, 
      xp = ?, 
      streak = ?, 
      max_streak = ?, 
      total_correct = ?, 
      total_answered = ?, 
      badges = ?, 
      module_stats = ?
    WHERE id = ?
  `);
  
  update.run(
    s.level, 
    s.xp, 
    s.streak, 
    s.maxStreak, 
    s.totalCorrect, 
    s.totalAnswered, 
    JSON.stringify(s.badges || []), 
    JSON.stringify(s.moduleStats || {}), 
    id
  );
  
  res.json({ success: true });
});

const PORT = 3001;
app.listen(PORT, () => console.log(`🚀 Final Fixed EnglishOops server! http://127.0.0.1:${PORT}`));
