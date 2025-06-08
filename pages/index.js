import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="min-h-screen bg-[url('/austin-skyline.svg')] bg-cover bg-center flex flex-col items-center justify-center text-center p-8">
        <h1 className="text-4xl sm:text-6xl font-display text-limestone drop-shadow-lg mb-6">Austin Vibes</h1>
        <Link href="/events" className="bg-hotpink text-limestone px-6 py-3 rounded shadow-md hover:bg-turquoise transition-colors">Browse Events</Link>
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
