'use client';

import React from 'react';
import { useData } from '@/context/DataContext';
import { ProductCard } from './ProductCard';
import { CarouselSection } from './CarouselSection';

interface TagRailProps {
  className?: string;
  tag?: string;
  eyebrow?: string;
  title?: string;
  href?: string;
}

export function TagRail({
  className = 'mt-10 md:mt-14',
  tag = 'destilado',
  eyebrow = 'Whisky, gin e vodka',
  title = 'Destilados',
  href = '/produtos?ocasiao=destilados',
}: TagRailProps) {
  const { dataset } = useData();

  const destiladoCategories = ['cat-whisky', 'cat-vodka', 'cat-gin'];

  const products = dataset.products.filter((p) => {
    if (!p.active) return false;
    const matchesCategory = destiladoCategories.includes(p.categoryId);
    const matchesTag = p.tags && (p.tags.includes(tag) || p.tags.includes('destilados'));
    return matchesCategory || matchesTag;
  });

  if (products.length === 0) return null;

  return (
    <CarouselSection
      className={className}
      eyebrow={eyebrow}
      title={title}
      href={href}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} variant="rail" origin="vitrine" />
      ))}
    </CarouselSection>
  );
}
