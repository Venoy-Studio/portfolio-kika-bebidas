'use client';

import React from 'react';
import Link from 'next/link';
import { useData } from '@/context/DataContext';
import { CarouselSection } from './CarouselSection';
import { ArrowUpRight } from 'lucide-react';

export function OccasionGrid({ className = 'mt-10 md:mt-14' }: { className?: string }) {
  const { dataset } = useData();
  const occasions = (dataset.occasions || []).filter((e) => (e as any).active !== false);

  if (occasions.length === 0) return null;

  return (
    <CarouselSection
      className={className}
      eyebrow="Compre pelo motivo"
      title="O que você vai fazer hoje?"
      railClassName="gap-3 lg:grid lg:grid-cols-7 lg:overflow-visible"
      stagger="deal"
      parallax="wave"
    >
      {occasions.map((occ) => {
        const isArtOnly = !!occ.image && !occ.showText;
        return (
          <Link
            key={occ.id}
            href={`/produtos?ocasiao=${occ.slug}`}
            className="group relative block aspect-[3/4] w-[148px] overflow-hidden rounded-[16px] sm:w-[168px] lg:w-auto"
            style={{ backgroundColor: occ.image ? '#1d1a17' : occ.tint }}
          >
            {occ.image && (
              <img
                src={occ.image}
                alt=""
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              />
            )}
            {isArtOnly ? (
              <span className="sr-only">
                {occ.name}: {occ.caption}
              </span>
            ) : (
              <>
                <div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(10,10,10,0.82) 0%, rgba(10,10,10,0.15) 55%, rgba(10,10,10,0) 100%)',
                  }}
                />
                <span className="icon-btn absolute right-2.5 top-2.5 h-8 w-8 bg-white/15 text-white backdrop-blur-sm transition group-hover:bg-white group-hover:text-primary">
                  <ArrowUpRight size={16} />
                </span>
                <span className="absolute inset-x-3 bottom-3">
                  <span className="font-display block text-[16px] leading-tight text-white">
                    {occ.name}
                  </span>
                  <span className="mt-0.5 block text-[11.5px] leading-snug text-white/70">
                    {occ.caption}
                  </span>
                </span>
              </>
            )}
          </Link>
        );
      })}
    </CarouselSection>
  );
}
