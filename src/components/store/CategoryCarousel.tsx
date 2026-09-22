'use client';

import React from 'react';
import Link from 'next/link';
import { useData } from '@/context/DataContext';
import { CarouselSection } from './CarouselSection';
import { cn } from '@/lib/utils';

export function CategoryCarousel({
  className,
  activeSlug = null,
}: {
  className?: string;
  activeSlug?: string | null;
}) {
  const { dataset } = useData();
  const items = [
    ...dataset.categories
      .filter((e) => e.featured !== false)
      .map((e) => ({
        id: e.id,
        label: e.name,
        image: e.image,
        href: `/produtos?categoria=${e.slug}`,
        tint: e.tint,
        order: e.order,
        match: e.slug,
      })),
    ...dataset.categoryShortcuts.map((e) => ({
      id: e.id,
      label: e.label,
      image: e.image,
      href: e.href,
      tint: '#121212',
      order: e.order,
      match: e.id,
    })),
  ].sort((a, b) => a.order - b.order);

  return (
    <CarouselSection
      className={className}
      title="Categorias"
      href="/produtos"
      hrefLabel="Ver catálogo"
      railClassName="gap-3 md:gap-4"
      stagger={false}
    >
      {items.map((item, index) => {
        const active = !!(item.match && item.match === activeSlug);
        return (
          <Link
            key={item.id}
            href={item.href}
            className="fx-load-pop group flex w-[72px] flex-col items-center gap-2 sm:w-[84px] lg:w-[92px]"
            style={{ '--fx-i': index } as React.CSSProperties}
          >
            <span
              className={cn(
                'relative block h-[68px] w-[68px] overflow-hidden rounded-full bg-surface-2 ring-offset-2 ring-offset-background transition sm:h-[80px] sm:w-[80px] lg:h-[88px] lg:w-[88px]',
                active ? 'ring-2 ring-primary' : 'group-hover:ring-2 group-hover:ring-border-strong'
              )}
              style={item.image ? undefined : { backgroundColor: `${item.tint}22` }}
            >
              {item.image && (
                <img
                  src={item.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              )}
            </span>
            <span
              className={cn(
                'w-full text-center text-[12px] font-medium leading-tight sm:text-[12.5px]',
                active ? 'font-semibold text-foreground' : 'text-foreground/85'
              )}
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </CarouselSection>
  );
}
