import Link from 'next/link';

const fmtD = d => (d ? new Date(d).toLocaleDateString('en-US', { dateStyle: 'medium' }) : '');
const fmtT = d => (d ? new Date(d).toLocaleTimeString('en-US', { timeStyle: 'short' }) : '');

export default function EventRow({ event }) {
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
    <tr style={style} className="bg-cover bg-center text-limestone hover:bg-opacity-75">
      <td className="p-2 font-semibold underline text-hotpink">
        <Link href={`/events/${event.id}`}>{event.title}</Link>
      </td>
      <td className="p-2">{fmtD(event.start)}</td>
      <td className="p-2">{fmtT(event.start)}</td>
      <td className="p-2">{event.averageCost ? `$${event.averageCost}` : 'N/A'}</td>
    </tr>
  );
}
