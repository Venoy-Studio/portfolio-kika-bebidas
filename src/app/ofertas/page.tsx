'use client';

import React, { useState, useMemo } from 'react';
import { Header } from '@/components/store/Header';
import { ProductCard } from '@/components/store/ProductCard';
import { Footer } from '@/components/store/Footer';
import { useData } from '@/context/DataContext';
import { useStore } from '@/context/StoreContext';
import { Tag, Sparkles } from 'lucide-react';

export default function OfertasPage() {
  const { dataset } = useData();
  const { selectedStore } = useStore();
  const [selectedCategory, setSelectedCategory] = useState('');

  const saleProducts = useMemo(() => {
    return dataset.products.filter((p) => {
      if (!p.active) return false;
      const promo = dataset.promotions.find(
        (pr) => pr.productId === p.id && pr.active
      );
      const regularPrice = p.regularPriceCents ?? p.priceCents;
      const salePrice = p.salePriceCents ?? promo?.promoPriceCents;
      const hasDiscount = !!salePrice && salePrice < regularPrice;
      if (!hasDiscount) return false;
      if (selectedCategory) {
        const cat = dataset.categories.find((c) => c.slug === selectedCategory);
        if (p.categoryId !== cat?.id && p.category !== selectedCategory) return false;
      }
      return true;
    });
  }, [dataset.products, dataset.promotions, dataset.categories, selectedCategory]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 py-8">
        <div className="shell">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-sale">
                <Tag className="h-5 w-5" />
                <span className="eyebrow">Economia garantida</span>
              </div>
              <h1 className="mt-1 font-display text-2xl font-bold md:text-3xl text-foreground">
                Ofertas da Semana — {selectedStore.displayName}
              </h1>
              <p className="mt-1 text-xs text-muted">
                Preços especiais válidos enquanto durarem os estoques nesta unidade.
              </p>
            </div>

            <span className="pill bg-sale/15 text-sale font-bold text-xs">
              {saleProducts.length} itens com desconto
            </span>
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-6">
            <button
              onClick={() => setSelectedCategory('')}
              className={`pill shrink-0 px-3 py-1.5 text-xs font-semibold transition ${
                !selectedCategory
                  ? 'bg-sale text-white'
                  : 'bg-surface border border-border text-foreground hover:bg-surface-2'
              }`}
            >
              Todas as ofertas
            </button>
            {dataset.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() =>
                  setSelectedCategory(selectedCategory === cat.slug ? '' : cat.slug)
                }
                className={`pill shrink-0 px-3 py-1.5 text-xs font-semibold transition ${
                  selectedCategory === cat.slug
                    ? 'bg-sale text-white'
                    : 'bg-surface border border-border text-foreground hover:bg-surface-2'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {saleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
