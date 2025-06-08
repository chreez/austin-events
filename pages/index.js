import Link from 'next/link';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <>
      <Hero>
        <Link
          href="/events"
          className="btn btn-primary bg-hotpink text-limestone border-none"
        >
          Browse Events
        </Link>
      </Hero>
    </>
  );
}
