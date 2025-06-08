import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
const Image = NextImage.default || NextImage;

function formatDate(dateStr) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-US', { dateStyle: 'medium' });
}

function formatTime(dateStr) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleTimeString('en-US', { timeStyle: 'short' });
}

export default function EventDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [event, setEvent] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/events/${id}`).then(res => res.json()).then(setEvent);
    }
  }, [id]);

  if (!event) {
    return <main className="p-8">Loading...</main>;
  }

  return (
    <main className="p-8 space-y-4 bg-limestone text-earth min-h-screen">
      <Link href="/events" className="text-hotpink underline">Back to events</Link>
      <h1 className="text-2xl font-display">{event.title}</h1>
      {event.image && (
        <Image
          src={event.image}
          alt=""
          width={800}
          height={450}
          unoptimized
          className="w-full h-auto"
        />
      )}
      <p>Date: {formatDate(event.start)}</p>
      <p>Time: {formatTime(event.start)}</p>
      <p>
        <a href={event.url} target="_blank" rel="noopener noreferrer" className="text-hotpink underline">
          Buy Tickets
        </a>
      </p>
    </main>
  );
}
