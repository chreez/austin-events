import { useRouter } from 'next/router';
import type { FrontendEvent } from '../src/api.ts';

const fmtD = d => (d ? new Date(d).toLocaleDateString('en-US', { dateStyle: 'medium' }) : '');
const fmtT = d => (d ? new Date(d).toLocaleTimeString('en-US', { timeStyle: 'short' }) : '');

export interface EventRowProps {
  event: FrontendEvent;
}

/** Row displaying a single event in a table */
export default function EventRow({ event }: EventRowProps) {
  const router = useRouter();
  const bg = event.image ? { backgroundImage: `url(${event.image})` } : undefined;
  return (
    <tr
      onClick={() => router.push(`/events/${event.id}`)}
      style={bg}
      className="hover:bg-base-200 cursor-pointer bg-center bg-cover text-base-content"
    >
      <td className="p-3 font-semibold">{event.title}</td>
      <td className="p-3">{fmtD(event.start)}</td>
      <td className="p-3">{fmtT(event.start)}</td>
    </tr>
  );
}
