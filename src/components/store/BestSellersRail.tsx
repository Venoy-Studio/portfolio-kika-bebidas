'use client';

import React from 'react';
import { useData } from '@/context/DataContext';
import { useStore } from '@/context/StoreContext';
import { ProductCard } from './ProductCard';
import { CarouselSection } from './CarouselSection';

export function BestSellersRail({ className = 'mt-10 md:mt-14' }: { className?: string }) {
  const { dataset } = useData();
  const { selectedStore } = useStore();

  const bestSellers = [...dataset.products]
    .filter((p) => p.active)
    .sort((a, b) => (b.popularity || 0) - (a.popularity || 0))
    .slice(0, 14);

  if (bestSellers.length === 0) return null;

  return (
    <CarouselSection
      className={className}
      eyebrow="Os campeões daqui"
      title={`Mais vendidos na ${selectedStore.name}`}
      href="/produtos"
    >
      {bestSellers.map((product) => (
        <ProductCard key={product.id} product={product} variant="rail" origin="mais-vendidos" />
      ))}
    </CarouselSection>
  );
}
