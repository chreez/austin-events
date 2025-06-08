import { useEffect, useState } from 'react';
import Link from 'next/link';

function Filter({ label, value, options, onChange }) {
  return (
    <label className="mr-2">
      {label}
      <select className="ml-1 border p-1" value={value} onChange={e => onChange(e.target.value)}>
        <option value="">All</option>
        {options.map(opt => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </label>
  );
}

export default function Events() {
  const [events, setEvents] = useState([]);
  const [category, setCategory] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    fetch('/api/events').then(res => res.json()).then(setEvents);
  }, []);

  const filtered = events.filter(e => {
    return (!category || e.category === category) && (!role || e.role === role);
  });

  const recommended = filtered.slice(0, 1);

  const categories = Array.from(new Set(events.map(e => e.category)));
  const roles = Array.from(new Set(events.map(e => e.role)));

  return (
    <>
      <section className="min-h-screen bg-[url('/austin-skyline.svg')] bg-cover bg-center flex items-center justify-center p-8">
        <h1 className="text-3xl sm:text-5xl font-display text-limestone drop-shadow-lg">Austin Events</h1>
      </section>
      <main className="p-8 bg-limestone text-earth max-w-4xl mx-auto">
        <Link href="/" className="text-hotpink underline mb-4 inline-block">Back Home</Link>
        <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-2">
          <Filter label="Category" value={category} options={categories} onChange={setCategory} />
          <Filter label="Role" value={role} options={roles} onChange={setRole} />
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {filtered.map(e => (
            <li key={e.id} className="p-4 bg-white rounded shadow">{e.title} - {e.category}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-display text-hotpink mb-2">Recommended</h2>
        <ul>
          {recommended.map(e => (
            <li key={e.id}>{e.title}</li>
          ))}
        </ul>
      </main>
    </>
  );
}
