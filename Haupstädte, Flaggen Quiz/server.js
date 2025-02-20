const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(express.json());

// Connect to SQLite database (or create it)
const db = new sqlite3.Database('./highscores.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to SQLite database.');
  }
});

// Create highscores table if it doesn't exist
db.run(`CREATE TABLE IF NOT EXISTS highscores (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT NOT NULL,
  score INTEGER NOT NULL
)`);

// Endpoint to get all highscores
app.get('/highscores', (req, res) => {
    const sql = `SELECT username, score FROM highscores ORDER BY score DESC`;  // Fetch all highscores, ordered by score

    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        res.json(rows);  // Respond with the highscores as a JSON array
    });
});

// POST endpoint to save a score
app.post('/save-score', (req, res) => {
  const { username, score } = req.body;
  if (!username || score === undefined) {
    return res.status(400).json({ error: 'Username and score are required.' });
  }

  const sql = `INSERT INTO highscores (username, score) VALUES (?, ?)`;
  db.run(sql, [username, score], function(err) {
    if (err) {
      return res.status(500).json({ error: 'Database error.' });
    }
    res.json({ success: true, id: this.lastID });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
