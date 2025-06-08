import type { NextApiRequest, NextApiResponse } from 'next';
import { fetchEvents } from '../../src/api.ts';

/** API route returning a list of events */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const events = await fetchEvents();
  console.log('API /events returning', events.length, 'events');
  res.status(200).json(events);
}
