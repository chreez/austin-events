import React from 'react';
import NextImage from 'next/image';
const Image = NextImage.default || NextImage;

export default function Hero({ title = 'Austin Vibes', children }) {
  return (
    <section className="text-center">
      <h1 className="sr-only">{title}</h1>
      <Image
        src="/austin-skyline.svg"
        alt={`${title} skyline`}
        width={600}
        height={300}
        className="w-full h-auto"
      />
      {children && (
        <div className="container mx-auto py-8 px-4">{children}</div>
      )}
    </section>
  );
}
