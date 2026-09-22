'use client';

import React from 'react';
import { useData } from '@/context/DataContext';
import { useStore } from '@/context/StoreContext';
import { ProductCard } from './ProductCard';
import { CarouselSection } from './CarouselSection';

export function OffersRail({ className = 'mt-10 md:mt-14' }: { className?: string }) {
  const { dataset } = useData();
  const { selectedStore, selectedStoreId } = useStore();

  const offers = dataset.products.filter((product) => {
    if (!product.active) return false;
    const promo = dataset.promotions.find(
      (p) =>
        p.productId === product.id &&
        p.active &&
        (!p.storeIds || p.storeIds.includes(selectedStoreId))
    );
    const hasDiscount =
      (!!product.salePriceCents &&
        product.salePriceCents < (product.regularPriceCents ?? product.priceCents)) ||
      (!!promo?.promoPriceCents && promo.promoPriceCents < product.priceCents);
    return hasDiscount;
  });

  if (offers.length === 0) return null;

  return (
    <CarouselSection
      className={className}
      eyebrow={`${offers.length} ofertas hoje`}
      title={`Ofertas na Kika ${selectedStore.name}`}
      href="/ofertas"
    >
      {offers.map((product) => (
        <ProductCard key={product.id} product={product} variant="rail" origin="ofertas" />
      ))}
    </CarouselSection>
  );
}
