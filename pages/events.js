import { useEffect, useState } from 'react';
import Link from 'next/link';
import Hero from '../components/Hero';
import EventRow from '../components/EventRow';

function FilterChips({ options, value, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onChange('')}
        className={`px-3 py-1 rounded ${value === '' ? 'bg-hotpink text-white' : 'bg-white border'}`}
      >
        All
      </button>
      {options.map(opt => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          className={`px-3 py-1 rounded ${value === opt ? 'bg-hotpink text-white' : 'bg-white border'}`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export default function Events() {
  const [events, setEvents] = useState([]);
  const [category, setCategory] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch('/api/events').then(res => res.json()).then(setEvents);
  }, []);

  const filtered = events.filter(e => {
    const matchesCategory = !category || e.category === category;
    const matchesQuery = !query || e.title.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const categories = Array.from(new Set(events.map(e => e.category)));

  const sorted = [...filtered].sort((a, b) => {
    if (!a.start) return 1;
    if (!b.start) return -1;
    return new Date(a.start) - new Date(b.start);
  });

  const now = new Date();
  const todayStr = now.toDateString();
  const eventsToday = sorted.filter(
    e => e.start && new Date(e.start).toDateString() === todayStr
  );
  const upcoming = sorted.filter(
    e => e.start && new Date(e.start) > now && new Date(e.start).toDateString() !== todayStr
  );
  const noDate = sorted.filter(e => !e.start);
  const upcomingByDate = {};
  for (const ev of upcoming) {
    const ds = new Date(ev.start).toDateString();
    if (!upcomingByDate[ds]) upcomingByDate[ds] = [];
    upcomingByDate[ds].push(ev);
  }

  return (
    <>
      <Hero title="Austin Events" />
      <main className="p-8 bg-limestone text-earth max-w-4xl mx-auto">
        <Link href="/" className="text-hotpink underline mb-4 inline-block">Back Home</Link>
        <div className="mb-4 flex flex-col gap-4">
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search events"
            className="border p-2"
          />
          <FilterChips options={categories} value={category} onChange={setCategory} />
        </div>
        {eventsToday.length > 0 && (
          <section className="mb-6">
            <h2 className="text-xl font-display mb-2">Events Today</h2>
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="p-2">Title</th>
                  <th className="p-2">Date</th>
                  <th className="p-2">Time</th>
                  <th className="p-2">Avg Ticket Cost</th>
                </tr>
              </thead>
              <tbody>
                {eventsToday.map(e => (
                  <EventRow key={e.id} event={e} />
                ))}
              </tbody>
            </table>
          </section>
        )}

        <section className="mb-6">
          <h2 className="text-xl font-display mb-2">Upcoming Dates</h2>
          {Object.entries(upcomingByDate).map(([date, evs]) => (
            <div key={date} className="mb-4">
              <h3 className="text-lg font-semibold mb-1">
                {new Date(date).toLocaleDateString('en-US', { dateStyle: 'medium' })}
              </h3>
              <table className="w-full text-left">
                <tbody>
                  {evs.map(e => (
                    <EventRow key={e.id} event={e} />
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </section>

        {noDate.length > 0 && (
          <section className="mb-6">
            <h2 className="text-xl font-display mb-2">Events without dates</h2>
            <table className="w-full text-left">
              <tbody>
                {noDate.map(e => (
                  <EventRow key={e.id} event={e} />
                ))}
              </tbody>
            </table>
          </section>
        )}
      </main>
    </>
  );
}
