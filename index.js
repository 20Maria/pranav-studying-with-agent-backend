import 'dotenv/config';
import express from 'express';
import sql from './db.js';
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Sample Backend!</h1><p>The server is running successfully. Try <a href="/api/status">/api/status</a> or <a href="/api/time">/api/time</a>.</p>');
});

app.get('/api/status', (req, res) => {
  res.json({
    status: 'online',
    message: 'The server is healthy and responding.',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/time', (req, res) => {
  res.json({
    currentTime: new Date().toString(),
    iso: new Date().toISOString(),
    unix: Math.floor(Date.now() / 1000)
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
