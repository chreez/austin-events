import { fetchEvents } from '../../../src/api.js';

export default async function handler(req, res) {
  const { id } = req.query;
  const events = await fetchEvents();
  const event = events.find(e => String(e.id) === id);
  if (event) {
    res.status(200).json(event);
  } else {
    res.status(404).json({ error: 'Not found' });
  }
}
