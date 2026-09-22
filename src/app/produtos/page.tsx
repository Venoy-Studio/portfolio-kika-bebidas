'use client';

import React, { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Header } from '@/components/store/Header';
import { ProductCard } from '@/components/store/ProductCard';
import { Footer } from '@/components/store/Footer';
import { useData } from '@/context/DataContext';
import { useStore } from '@/context/StoreContext';
import { Search, Filter, X } from 'lucide-react';

function ProdutosContent() {
  const searchParams = useSearchParams();
  const { dataset } = useData();
  const { selectedStore } = useStore();

  const initialCategory = searchParams.get('categoria') || '';
  const initialOccasion = searchParams.get('ocasiao') || '';
  const initialSearch = searchParams.get('busca') || '';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedOccasion, setSelectedOccasion] = useState(initialOccasion);
  const [search, setSearch] = useState(initialSearch);

  useEffect(() => {
    setSelectedCategory(searchParams.get('categoria') || '');
    setSelectedOccasion(searchParams.get('ocasiao') || '');
    if (searchParams.get('busca')) {
      setSearch(searchParams.get('busca') || '');
    }
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    return dataset.products.filter((product) => {
      if (!product.active) return false;

      // Category filter
      if (selectedCategory) {
        const cat = dataset.categories.find((c) => c.slug === selectedCategory);
        if (product.categoryId !== cat?.id && product.category !== selectedCategory) {
          return false;
        }
      }

      // Occasion filter
      if (selectedOccasion) {
        const occ = dataset.occasions.find((o) => o.slug === selectedOccasion);
        const tag = occ?.tag || selectedOccasion;
        const matchesTags = product.tags && product.tags.includes(tag);
        const matchesOccasions =
          product.occasions && product.occasions.includes(selectedOccasion);
        if (!matchesTags && !matchesOccasions) {
          return false;
        }
      }

      // Text search
      if (search.trim()) {
        const q = search.toLowerCase();
        const matchName = product.name.toLowerCase().includes(q);
        const matchBrand = product.brand.toLowerCase().includes(q);
        const matchDesc = product.description.toLowerCase().includes(q);
        if (!matchName && !matchBrand && !matchDesc) return false;
      }

      return true;
    });
  }, [dataset.products, dataset.categories, dataset.occasions, selectedCategory, selectedOccasion, search]);

  const clearFilters = () => {
    setSelectedCategory('');
    setSelectedOccasion('');
    setSearch('');
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="shell py-6">
          {/* Breadcrumb / Title */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4">
            <div>
              <h1 className="font-display text-2xl font-bold md:text-3xl text-foreground">
                Catálogo de Bebidas
              </h1>
              <p className="mt-1 text-xs text-muted">
                Preços e disponibilidade para a <strong className="text-foreground">{selectedStore.displayName}</strong>.
              </p>
            </div>
            <span className="text-xs font-semibold text-muted bg-surface px-3 py-1.5 rounded-full border border-border">
              {filteredProducts.length} itens encontrados
            </span>
          </div>

          {/* Search and Filters Bar */}
          <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Search */}
            <div className="relative w-full max-w-md">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Filtrar por nome, marca ou tipo..."
                className="w-full rounded-xl border border-border bg-surface pl-10 pr-4 py-2.5 text-sm text-foreground outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Clear filters button */}
            {(selectedCategory || selectedOccasion || search) && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 text-xs font-semibold text-sale hover:underline"
              >
                <X className="h-3.5 w-3.5" />
                Limpar todos os filtros
              </button>
            )}
          </div>

          {/* Categories Horizontal Tabs */}
          <div className="mt-4 flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
            <button
              onClick={() => setSelectedCategory('')}
              className={`pill shrink-0 px-3 py-1.5 text-xs font-semibold transition ${
                !selectedCategory
                  ? 'bg-primary text-white'
                  : 'bg-surface border border-border text-foreground hover:bg-surface-2'
              }`}
            >
              Todas as categorias
            </button>
            {dataset.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() =>
                  setSelectedCategory(selectedCategory === cat.slug ? '' : cat.slug)
                }
                className={`pill shrink-0 px-3 py-1.5 text-xs font-semibold transition ${
                  selectedCategory === cat.slug
                    ? 'bg-primary text-white'
                    : 'bg-surface border border-border text-foreground hover:bg-surface-2'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Occasions Tabs */}
          <div className="mt-2 flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-2">
            <span className="text-xs font-semibold text-muted shrink-0 mr-1">Ocasião:</span>
            {dataset.occasions.map((occ) => (
              <button
                key={occ.id}
                onClick={() =>
                  setSelectedOccasion(selectedOccasion === occ.slug ? '' : occ.slug)
                }
                className={`pill shrink-0 text-[11px] font-medium transition ${
                  selectedOccasion === occ.slug
                    ? 'bg-accent-strong text-white'
                    : 'bg-surface-2 text-muted hover:text-foreground'
                }`}
              >
                {occ.name}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="mt-6">
            {filteredProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border py-16 text-center">
                <Filter className="h-10 w-10 text-muted mb-3 opacity-40" />
                <h3 className="font-semibold text-base text-foreground">
                  Nenhum produto encontrado
                </h3>
                <p className="mt-1 text-xs text-muted max-w-sm">
                  Não encontramos produtos com os filtros selecionados. Tente buscar por outro termo ou limpar os filtros.
                </p>
                <button
                  onClick={clearFilters}
                  className="btn btn-ink mt-4 text-xs"
                >
                  Ver todos os produtos
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function ProdutosPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Carregando catálogo...</div>}>
      <ProdutosContent />
    </Suspense>
  );
}
