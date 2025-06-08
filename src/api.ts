import events, { Event } from './events.ts';

/** Fetch event data from Ticketmaster or fall back to local fixtures */
export interface FrontendEvent extends Event {
  averageCost?: number;
  tags: string[];
}
export async function fetchEvents(): Promise<FrontendEvent[]> {
  const apiKey = process.env.TICKETMASTER_API_KEY;
  if (apiKey) {
    try {
      const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&city=Austin&size=20`;
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        const now = new Date();
        const eventsData = (data._embedded?.events || []).filter(ev => {
          const saleStart = ev.sales?.public?.startDateTime;
          const status = ev.dates?.status?.code;
          if (status && status !== 'onsale') return false;
          if (saleStart && new Date(saleStart) > now) return false;
          return true;
        });
        console.log(`Fetched ${eventsData.length} events from Ticketmaster`);
        return eventsData.map(ev => {
          console.log(JSON.stringify(ev), 'test ')
          
          const price = ev.priceRanges?.[0];
          const avg =
            price?.min && price?.max
              ? (price.min + price.max) / 2
              : price?.min || price?.max;
          return {
            id: ev.id,
            title: ev.name,
            category: ev.classifications?.[0]?.segment?.name || 'Other',
            url: ev.url,
            image: ev.images?.[0]?.url,
            start: ev.dates?.start?.dateTime,
            end: ev.dates?.end?.dateTime,
            averageCost: avg,
            role: 'guest',
            tags: [
              (ev.classifications?.[0]?.segment?.name || 'other').toLowerCase(),
              'guest'
            ]
          };
        });
      }
    } catch (err) {
      console.error('Ticketmaster API failed', err);
    }
  }
  return events.map(e => ({
    ...e,
    averageCost: e.price,
    tags: [e.category.toLowerCase(), e.role]
  }));
}

/** Choose events that match the given tag, falling back to the full list */
export function recommendEvents(events: FrontendEvent[], tag: string): FrontendEvent[] {
  const filtered = events.filter(e => e.tags.includes(tag));
  return filtered.length ? filtered : events;
}
