'use client';

import React from 'react';
import { Header } from '@/components/store/Header';
import { StoreNotice } from '@/components/store/StoreNotice';
import { HeroCarousel } from '@/components/store/HeroCarousel';
import { BenefitStrip } from '@/components/store/BenefitStrip';
import { CategoryCarousel } from '@/components/store/CategoryCarousel';
import { OffersRail } from '@/components/store/OffersRail';
import { PromoBannerDuo } from '@/components/store/PromoBannerDuo';
import { BestSellersRail } from '@/components/store/BestSellersRail';
import { ComboSection } from '@/components/store/ComboSection';
import { PromoStrip } from '@/components/store/PromoStrip';
import { TagRail } from '@/components/store/TagRail';
import { OccasionGrid } from '@/components/store/OccasionGrid';
import { StoresNearby } from '@/components/store/StoresNearby';
import { Footer } from '@/components/store/Footer';
import { useData } from '@/context/DataContext';

export default function HomePage() {
  const { data } = useData();
  const tagRailSetting = data?.settings?.tagRail;

  return (
    <div className="flex min-h-dvh flex-col">
      <Header />

      <main className="flex-1">
        <div className="shell pt-2 md:pt-6">
          <StoreNotice />

          {/* Section 1: Hero Carousel */}
          <HeroCarousel />

          {/* Section 2: Por que comprar na Kika */}
          <BenefitStrip className="mt-4 md:mt-5" />

          {/* Section 3: Categorias */}
          <CategoryCarousel className="mt-8 md:mt-12" />

          {/* Section 4: Ofertas na Kika */}
          <OffersRail className="mt-10 md:mt-14" />

          {/* Section 5: Campanhas (Duo Gin + Monster) */}
          <PromoBannerDuo className="mt-10 md:mt-14" />

          {/* Section 6: Mais vendidos */}
          <BestSellersRail className="mt-10 md:mt-14" />

          {/* Section 7: Combos */}
          <ComboSection className="mt-10 md:mt-14" />

          {/* Section 8: Faixa Whisky 12 anos */}
          <PromoStrip position={0} className="mt-10 md:mt-14" />

          {/* Section 9: Destilados (Trilho temático) */}
          <TagRail
            className="mt-10 md:mt-14"
            tag={tagRailSetting?.tag || 'destilado'}
            eyebrow={tagRailSetting?.eyebrow || 'Whisky, gin e vodka'}
            title={tagRailSetting?.title || 'Destilados'}
            href="/produtos?ocasiao=destilados"
          />

          {/* Section 10: O que você vai fazer hoje? (Ocasiões) */}
          <OccasionGrid className="mt-10 md:mt-14" />

          {/* Section 11: Uma Kika perto de você (Lojas) */}
          <StoresNearby className="mt-10 md:mt-14" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
