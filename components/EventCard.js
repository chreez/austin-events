import React from 'react';

function formatDate(dateStr) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleString('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short'
  });
}

export default function EventCard({ event }) {
  return (
    <li className="relative group p-4 bg-white rounded shadow overflow-hidden">
      {event.image && (
        <img
          src={event.image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-40 transition-opacity"
        />
      )}
      <div className="relative space-y-1">
        <h3 className="text-lg font-semibold">
          <a
            href={event.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-hotpink underline"
          >
            {event.title}
          </a>
        </h3>
        <p className="text-sm">{event.category}</p>
        <p className="text-sm">
          {formatDate(event.start)}
          {event.end ? ` - ${formatDate(event.end)}` : ''}
        </p>
        {event.price && <p className="text-sm">${event.price}</p>}
      </div>
    </li>
  );
}
