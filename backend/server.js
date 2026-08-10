const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize SQLite database
const dbPath = path.resolve(__dirname, 'messages.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database', err.message);
  } else {
    console.log('Connected to the SQLite database.');
    // Create table if it doesn't exist
    db.run(`CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);
  }
});

// Routes
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide name, email, and message.' });
  }

  const sql = 'INSERT INTO messages (name, email, message) VALUES (?, ?, ?)';
  db.run(sql, [name, email, message], function(err) {
    if (err) {
      console.error('Database error:', err.message);
      return res.status(500).json({ error: 'Failed to save message.' });
    }
    console.log(`A row has been inserted with rowid ${this.lastID}`);
    res.status(201).json({ success: true, message: 'Message received successfully!', id: this.lastID });
  });
});

app.get('/api/messages', (req, res) => {
  const sql = 'SELECT * FROM messages ORDER BY created_at DESC';
  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(500).send('Failed to fetch messages.');
    }

    let html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Portfolio Messages</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background: #f4f4f5; color: #18181b; padding: 2rem; }
        .container { max-width: 800px; margin: 0 auto; }
        h1 { border-bottom: 2px solid #e4e4e7; padding-bottom: 1rem; margin-bottom: 2rem; }
        .message-card { background: white; border: 1px solid #e4e4e7; border-radius: 8px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
        .header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem; }
        .name { font-weight: 700; font-size: 1.2rem; margin: 0; }
        .email { color: #71717a; font-size: 0.9rem; margin-top: 0.2rem; }
        .date { color: #a1a1aa; font-size: 0.8rem; }
        .text { white-space: pre-wrap; line-height: 1.5; color: #3f3f46; margin: 0; background: #f8fafc; padding: 1rem; border-radius: 6px; border: 1px solid #e2e8f0; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Inbox</h1>
        ${rows.length === 0 ? '<p>No messages received yet.</p>' : ''}
        ${rows.map(row => `
          <div class="message-card">
            <div class="header">
              <div>
                <h2 class="name">${row.name}</h2>
                <div class="email"><a href="mailto:${row.email}">${row.email}</a></div>
              </div>
              <div class="date">${new Date(row.created_at).toLocaleString()}</div>
            </div>
            <p class="text">${row.message}</p>
          </div>
        `).join('')}
      </div>
    </body>
    </html>
    `;
    
    res.send(html);
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
