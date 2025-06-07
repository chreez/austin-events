import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));

import { fetchEvents } from './api.js';

app.get('/api/events', async (req, res) => {
  const events = await fetchEvents();
  res.json(events);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
