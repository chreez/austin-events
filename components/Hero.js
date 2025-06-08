import React from 'react';

export default function Hero({ title = 'Austin Vibes', children }) {
  return (
    <section className="text-center">
      <h1 className="sr-only">{title}</h1>
      <img src="/austin-skyline.svg" alt={`${title} skyline`} className="w-full h-auto" />
      {children && (
        <div className="container mx-auto py-8 px-4">{children}</div>
      )}
    </section>
  );
}
