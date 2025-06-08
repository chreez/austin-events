import events from './events.js';

export async function fetchEvents() {
  // In a real app, fetch from Ticketmaster when an API key is set.
  const apiKey = process.env.TICKETMASTER_API_KEY;
  if (apiKey) {
    // This example just demonstrates reading the key; replace with real fetch.
    console.log('Using Ticketmaster API key');
  }
  return events.map(e => ({
    ...e,
    tags: [e.category.toLowerCase(), e.role]
  }));
}

export function recommendEvents(events, tag) {
  const filtered = events.filter(e => e.tags.includes(tag));
  return filtered.length ? filtered : events;
}
