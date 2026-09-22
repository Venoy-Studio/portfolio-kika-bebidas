'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useStore } from '@/context/StoreContext';
import { useCart } from '@/context/CartContext';
import {
  MapPin,
  ChevronDown,
  ShoppingBag,
  Search,
  Tag,
  Store as StoreIcon,
} from 'lucide-react';

export function Header() {
  const router = useRouter();
  const { selectedStore, setIsStoreModalOpen, status, statusText } = useStore();
  const { totalCount, setIsCartOpen } = useCart();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/produtos?busca=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push('/produtos');
    }
  };

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="shell flex h-[60px] items-center gap-2.5 md:hidden">
        <Link aria-label="Kika Bebidas — início" className="shrink-0" href="/">
          <img
            src="/brand/kika-logo-instagram-150.webp"
            alt="Kika Bebidas"
            width={40}
            height={40}
            loading="eager"
            decoding="async"
            className="block shrink-0 rounded-full bg-black"
            style={{ width: '40px', height: '40px' }}
          />
        </Link>

        <button
          type="button"
          onClick={() => setIsStoreModalOpen(true)}
          className="tap flex min-w-0 flex-1 items-center gap-1 rounded-[12px] px-2 text-left"
        >
          <span className="min-w-0">
            <span className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-muted">
              <MapPin className="h-[11px] w-[11px]" />
              Sua Kika
            </span>
            <span className="flex items-center gap-1 text-[14.5px] font-semibold leading-tight text-foreground">
              <span className="truncate">{selectedStore.name}</span>
              <ChevronDown className="h-[15px] w-[15px] shrink-0 text-muted" />
            </span>
            {statusText && (
              <span className="flex items-center gap-1 truncate text-[11.5px] leading-tight">
                <span className={status?.open ? 'text-success' : 'text-muted'}>{statusText}</span>
              </span>
            )}
          </span>
        </button>

        <button
          type="button"
          onClick={() => setIsCartOpen(true)}
          aria-label={`Carrinho com ${totalCount} itens`}
          className="icon-btn relative h-11 w-11 shrink-0 bg-surface text-foreground shadow-card"
        >
          <ShoppingBag className="h-5 w-5" />
          {totalCount > 0 && (
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-sale text-[11px] font-bold text-white">
              {totalCount}
            </span>
          )}
        </button>
      </div>

      {/* Mobile Sticky Search Bar */}
      <div className="fx-header sticky top-0 z-50 bg-background/95 pb-2.5 pt-1 backdrop-blur-md md:hidden">
        <div className="shell">
          <div className="relative w-full">
            <form role="search" onSubmit={handleSearchSubmit}>
              <div className="relative">
                <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted h-[17px] w-[17px]" />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={`Buscar bebidas na Kika ${selectedStore.name}`}
                  aria-label="Buscar produtos"
                  enterKeyHint="search"
                  className="w-full rounded-full border border-transparent bg-surface-2 pl-11 pr-11 text-foreground outline-none transition placeholder:text-muted focus:border-border-strong focus:bg-surface focus:shadow-[0_0_0_4px_rgba(18,18,18,0.06)] h-11 text-[14px]"
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Desktop Header */}
      <header className="fx-header sticky top-0 z-50 hidden border-b border-border bg-background/95 backdrop-blur-md md:block">
        <div className="shell flex h-[76px] items-center gap-4 lg:gap-6">
          <Link aria-label="Kika Bebidas — início" className="shrink-0" href="/">
            <img
              src="/brand/kika-logo-instagram-150.webp"
              alt="Kika Bebidas"
              width={48}
              height={48}
              loading="eager"
              decoding="async"
              className="block shrink-0 rounded-full bg-black"
              style={{ width: '48px', height: '48px' }}
            />
          </Link>

          {/* Store Selector Button */}
          <button
            type="button"
            onClick={() => setIsStoreModalOpen(true)}
            className="group flex shrink-0 items-center gap-2.5 rounded-full border border-border bg-surface py-1.5 pl-1.5 pr-3 text-left transition hover:border-border-strong"
          >
            <span className="icon-btn h-8 w-8 bg-primary text-white">
              <MapPin className="h-[15px] w-[15px]" />
            </span>
            <span className="min-w-0">
              <span className="block text-[10.5px] font-semibold uppercase leading-none tracking-[0.08em] text-muted">
                Sua Kika
              </span>
              <span className="mt-1 flex items-center gap-1.5 text-[13px] font-semibold leading-none text-foreground">
                <span className="max-w-[150px] truncate">{selectedStore.name}</span>
                {statusText && (
                  <span className={status?.open ? 'text-[11px] font-normal text-success' : 'text-[11px] font-normal text-muted'}>
                    · {statusText}
                  </span>
                )}
              </span>
            </span>
            <ChevronDown className="h-[15px] w-[15px] shrink-0 text-muted transition group-hover:text-foreground" />
          </button>

          {/* Search Form */}
          <div className="relative w-full min-w-0 flex-1">
            <form role="search" onSubmit={handleSearchSubmit}>
              <div className="relative">
                <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted h-[18px] w-[18px]" />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={`Buscar bebidas na Kika ${selectedStore.name}`}
                  aria-label="Buscar produtos"
                  enterKeyHint="search"
                  className="w-full rounded-full border border-transparent bg-surface-2 pl-11 pr-4 text-foreground outline-none transition placeholder:text-muted focus:border-border-strong focus:bg-surface focus:shadow-[0_0_0_4px_rgba(18,18,18,0.06)] h-12 text-[15px]"
                />
              </div>
            </form>
          </div>

          {/* Shortcuts Nav */}
          <nav className="flex shrink-0 items-center gap-0.5" aria-label="Atalhos">
            <Link
              className="flex flex-col items-center gap-0.5 rounded-[12px] px-2.5 py-1.5 text-[11.5px] font-medium text-muted transition hover:bg-surface-2 hover:text-foreground"
              href="/ofertas"
            >
              <Tag className="h-5 w-5" strokeWidth={1.8} />
              Ofertas
            </Link>
            <Link
              className="flex flex-col items-center gap-0.5 rounded-[12px] px-2.5 py-1.5 text-[11.5px] font-medium text-muted transition hover:bg-surface-2 hover:text-foreground"
              href="/lojas"
            >
              <StoreIcon className="h-5 w-5" strokeWidth={1.8} />
              Lojas
            </Link>
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="relative flex flex-col items-center gap-0.5 rounded-[12px] px-2.5 py-1.5 text-[11.5px] font-medium text-muted transition hover:bg-surface-2 hover:text-foreground"
              aria-label={`Carrinho com ${totalCount} itens`}
            >
              <ShoppingBag className="h-5 w-5" strokeWidth={1.8} />
              Carrinho
              {totalCount > 0 && (
                <span className="absolute top-1 right-2 flex h-4 w-4 items-center justify-center rounded-full bg-sale text-[9.5px] font-bold text-white">
                  {totalCount}
                </span>
              )}
            </button>
          </nav>
        </div>

        {/* Secondary Navigation */}
        <div className="shell flex h-10 items-center gap-6 text-[13px]">
          <nav className="no-scrollbar flex min-w-0 items-center gap-5 overflow-x-auto" aria-label="Categorias">
            <Link className="shrink-0 font-medium text-foreground/80 transition hover:text-foreground" href="/produtos?categoria=cervejas">
              Cervejas
            </Link>
            <Link className="shrink-0 font-medium text-foreground/80 transition hover:text-foreground" href="/produtos?ocasiao=destilados">
              Destilados
            </Link>
            <Link className="shrink-0 font-medium text-foreground/80 transition hover:text-foreground" href="/produtos?categoria=vinhos-e-espumantes">
              Vinhos
            </Link>
            <Link className="shrink-0 font-medium text-foreground/80 transition hover:text-foreground" href="/produtos?categoria=energeticos">
              Energéticos
            </Link>
            <Link className="shrink-0 font-medium text-foreground/80 transition hover:text-foreground" href="/produtos?categoria=refrigerantes">
              Refrigerantes
            </Link>
            <Link className="shrink-0 font-medium text-foreground/80 transition hover:text-foreground" href="/produtos?categoria=gelo">
              Gelo
            </Link>
            <Link className="shrink-0 font-medium text-foreground/80 transition hover:text-foreground" href="/combos">
              Combos
            </Link>
            <Link className="shrink-0 font-semibold text-sale transition hover:opacity-80" href="/ofertas">
              Ofertas da semana
            </Link>
          </nav>
          <Link
            className="ml-auto shrink-0 text-[12px] text-subtle transition hover:text-foreground"
            href="/admin"
          >
            Painel do lojista
          </Link>
        </div>
      </header>
    </>
  );
}
