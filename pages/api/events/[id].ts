import type { NextApiRequest, NextApiResponse } from 'next';
import { fetchEvents } from '../../../src/api.ts';

/** API route returning a single event */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  const events = await fetchEvents();
  const event = events.find(e => String(e.id) === id);
  if (event) {
    console.log('API /events/[id] found', id);
    res.status(200).json(event);
  } else {
    res.status(404).json({ error: 'Not found' });
  }
}
