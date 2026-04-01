import Database from 'better-sqlite3';
const db = new Database('english_oops.db');
const modules = db.prepare('SELECT id FROM modules').all();
const questions = db.prepare('SELECT id FROM questions LIMIT 1').all();
console.log('DB TEST:', { modules, questions });
db.close();
