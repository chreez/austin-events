import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="text-center">
        <h1 className="sr-only">Austin Vibes</h1>
        <img src="/austin-skyline.svg" alt="Austin skyline with Austin Vibes text" className="w-full h-auto" />
        <div className="py-8">
          <Link href="/events" className="bg-hotpink text-limestone px-6 py-3 rounded shadow-md hover:bg-turquoise transition-colors">Browse Events</Link>
        </div>
      </section>
      <section className="p-8 bg-limestone text-earth flex flex-col items-center gap-4 max-w-md mx-auto">
        <h2 className="text-3xl font-display">Keep Austin Connected</h2>
        <p>From backyard shows to local art fairs, we&apos;re the hub for everything happening on the East Side.</p>
        <p>Sign up for our weekly newsletter and never miss a beat.</p>
        <form className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <input type="text" placeholder="Name" className="border p-2 flex-grow" />
          <input type="email" placeholder="Email" className="border p-2 flex-grow" />
          <button type="submit" className="bg-sunset text-limestone px-4 py-2 rounded">Sign Up</button>
        </form>
        <Link href="/events" className="bg-cactus text-limestone px-4 py-2 rounded shadow hover:bg-turquoise transition-colors">Explore Events</Link>
      </section>
    </>
  );
}
