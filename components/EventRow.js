import { useRouter } from 'next/router';

const fmtD = d => (d ? new Date(d).toLocaleDateString('en-US', { dateStyle: 'medium' }) : '');
const fmtT = d => (d ? new Date(d).toLocaleTimeString('en-US', { timeStyle: 'short' }) : '');

export default function EventRow({ event }) {
  const router = useRouter();
  const bg = event.image ? { backgroundImage: `url(${event.image})` } : undefined;
  return (
    <tr
      onClick={() => router.push(`/events/${event.id}`)}
      style={bg}
      className="bg-center bg-cover bg-black/40 bg-blend-multiply backdrop-blur-sm text-limestone hover:bg-black/60 cursor-pointer text-lg"
    >
      <td className="p-3 font-semibold">{event.title}</td>
      <td className="p-3">{fmtD(event.start)}</td>
      <td className="p-3">{fmtT(event.start)}</td>
    </tr>
  );
}
