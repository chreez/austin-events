import events from './events.js';

export async function fetchEvents() {
  const apiKey = process.env.TICKETMASTER_API_KEY;
  if (apiKey) {
    try {
      const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&city=Austin&size=20`;
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        const eventsData = data._embedded?.events || [];
        return eventsData.map(ev => ({
          id: ev.id,
          title: ev.name,
          category: ev.classifications?.[0]?.segment?.name || 'Other',
          url: ev.url,
          image: ev.images?.[0]?.url,
          start: ev.dates?.start?.dateTime,
          end: ev.dates?.end?.dateTime,
          price: ev.priceRanges?.[0]?.min,
          role: 'guest',
          tags: [
            (ev.classifications?.[0]?.segment?.name || 'other').toLowerCase(),
            'guest'
          ]
        }));
      }
    } catch (err) {
      console.error('Ticketmaster API failed', err);
    }
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
