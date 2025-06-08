import { useEffect, useState } from 'react';
import Link from 'next/link';
import Hero from '../components/Hero';
import EventCard from '../components/EventCard';

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
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {filtered.map(e => (
            <EventCard key={e.id} event={e} />
          ))}
        </ul>
      </main>
    </>
  );
}
