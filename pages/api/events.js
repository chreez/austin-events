import { fetchEvents } from '../../src/api.js';

export default async function handler(req, res) {
  const events = await fetchEvents();
  res.status(200).json(events);
}
