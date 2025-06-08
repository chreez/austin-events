import { useRouter } from 'next/router';

const fmtD = d => (d ? new Date(d).toLocaleDateString('en-US', { dateStyle: 'medium' }) : '');
const fmtT = d => (d ? new Date(d).toLocaleTimeString('en-US', { timeStyle: 'short' }) : '');

export default function EventRow({ event }) {
  const router = useRouter();
  const style = event.image
    ? {
        backgroundImage: `url(${event.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'multiply',
        backgroundColor: 'rgba(0,0,0,0.5)'
      }
    : undefined;
  return (
    <tr
      onClick={() => router.push(`/events/${event.id}`)}
      style={style}
      className="bg-cover bg-center text-limestone hover:bg-opacity-75 cursor-pointer"
    >
      <td className="p-2 font-semibold">{event.title}</td>
      <td className="p-2">{fmtD(event.start)}</td>
      <td className="p-2">{fmtT(event.start)}</td>
    </tr>
  );
}
