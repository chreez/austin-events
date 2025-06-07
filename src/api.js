import events from './events.js';

export async function fetchEvents() {
  // In a real app, fetch from Ticketmaster here.
  return events.map(e => ({
    ...e,
    tags: [e.category.toLowerCase(), e.role]
  }));
}

export function recommendEvents(events, tag) {
  const filtered = events.filter(e => e.tags.includes(tag));
  return filtered.length ? filtered : events;
}
