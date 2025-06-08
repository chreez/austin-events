import React from 'react';
import Image from "next/image";

export interface HeroProps {
  title?: string;
  children?: React.ReactNode;
}

/** Displays the skyline banner shared across pages */
export default function Hero({ title = 'Austin Vibes', children }: HeroProps) {
  return (
    <section className="text-center">
      <h1 className="sr-only">{title}</h1>
      <Image width={500} height={500} src="/austin-skyline.svg" alt={`${title} skyline`} className="w-full h-auto" />
      {children && <div className="py-8">{children}</div>}
    </section>
  );
}
