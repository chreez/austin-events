import Link from 'next/link';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <>
      <Hero>
        <Link href="/events" className="bg-hotpink text-limestone px-6 py-3 rounded shadow-md hover:bg-turquoise transition-colors">Browse Events</Link>
      </Hero>
    </>
  );
}
