'use client';

import React from 'react';
import Link from 'next/link';

export function PromoStrip({
  position = 0,
  className = 'mt-10 md:mt-14',
}: {
  position?: number;
  className?: string;
}) {
  return (
    <section data-parallax="rise" className={`overflow-hidden rounded-[16px] ${className}`} aria-label="Campanha">
      <Link
        className="group/banner block h-full focus-visible:outline-offset-[-4px]"
        aria-label="Para presentear: whisky 12 anos para quem merece. Black Label, Chivas e Buchanan's na sua Kika."
        draggable={false}
        href="/produtos?categoria=whisky"
      >
        <div className="relative block h-full w-full overflow-hidden" style={{ backgroundColor: '#141210' }}>
          <div className="fx-layer relative">
            <picture className="block">
              <source
                media="(min-width: 768px)"
                srcSet="/banners/arte-presentes-desktop.webp"
                sizes="(min-width: 1280px) 1216px, 100vw"
              />
              <img
                src="/banners/arte-presentes-mobile.webp"
                sizes="100vw"
                alt="Para presentear: whisky 12 anos para quem merece. Black Label, Chivas e Buchanan's na sua Kika."
                loading="lazy"
                decoding="async"
                draggable={false}
                className="w-full object-cover transition-transform duration-700 ease-out group-hover/banner:scale-[1.03] block h-auto"
              />
            </picture>
          </div>
        </div>
      </Link>
    </section>
  );
}
