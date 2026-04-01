# EnglishOops

A gamified English quiz app that roasts you for bad grammar. Built with React + Vite on the frontend and an Express + SQLite backend.

## Features

- **Multiple quiz modules** unlocked by level progression:
  - **Tense Crimes** (Level 1) — grammar so bad it should be illegal
  - **Culture Shock** (Level 2) — things that will confuse you about English-speaking countries
  - **Language Chaos** (Level 3) — proof that English is a mess
  - **Read the Room** (Level 4) — reading comprehension with chaotic texts
  - **Mystery Mix** (Level 5) — random questions from all unlocked modules
- **Multiple question types**: multiple choice, true/false, and reading comprehension with sub-questions
- **XP and leveling system** with streaks and badges
- **Multiple player profiles** with persistent stats (SQLite)
- **Roast messages** when you get answers wrong, praise when you don't

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Vite |
| Backend | Express 5, Node.js |
| Database | SQLite via `better-sqlite3` |

## Getting Started

### Prerequisites

- Node.js 18+

### Install

```bash
npm install
```

### Initialize the database

```bash
node db_init.js
```

This creates `english_oops.db` and seeds all modules, questions, badges, and messages. Safe to re-run — it preserves existing player profiles.

### Run

**Both frontend and backend together:**

```bash
npm run start-all
```

**Or separately:**

```bash
npm run dev      # Vite dev server (frontend)
npm run server   # Express API server on port 3001
```

The frontend runs on `http://localhost:5173` (default Vite port) and the API runs on `http://localhost:3001`.

### Build for production

```bash
npm run build
npm run preview
```

## Project Structure

```
english-oops/
├── src/
│   ├── App.jsx              # Root component and screen routing
│   ├── data.js              # All questions, modules, badges, and messages
│   ├── hooks/
│   │   └── useGameState.js  # Game logic, XP, streaks, badge unlocks
│   └── components/
│       ├── ProfileSelect.jsx
│       ├── HomeScreen.jsx
│       ├── QuizScreen.jsx
│       ├── ResultsScreen.jsx
│       └── HUD.jsx          # Heads-up display and toast notifications
├── server.js                # Express API (profiles, questions, bootstrap)
├── db_init.js               # Database schema creation and seeding
└── add_questions.js         # Utility script for adding questions to the DB
```

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/bootstrap` | Modules, badges, roast/praise messages, settings |
| GET | `/api/questions` | All questions |
| GET | `/api/profiles` | All player profiles |
| POST | `/api/profiles` | Create a new profile |
| PUT | `/api/profiles/:id` | Save profile progress |

## Adding Questions

Edit `src/data.js` to add questions to a module, then re-run `node db_init.js` to sync the database. Alternatively, use `add_questions.js` to insert questions directly.
