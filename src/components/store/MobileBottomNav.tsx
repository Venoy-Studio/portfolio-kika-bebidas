'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { Home, LayoutGrid, Tag, MapPin, ShoppingBag } from 'lucide-react';

export function MobileBottomNav() {
  const pathname = usePathname();
  const { totalCount, setIsCartOpen } = useCart();

  // Don't display mobile store bottom bar on admin pages
  if (pathname.startsWith('/admin')) {
    return null;
  }

  const isHome = pathname === '/';
  const isCategories = pathname.startsWith('/produtos');
  const isOffers = pathname.startsWith('/ofertas');
  const isStores = pathname.startsWith('/lojas');

  return (
    <>
      <div className="h-[72px] md:hidden" aria-hidden="true" />
      <nav
        aria-label="Navegação principal"
        className="pb-safe fixed inset-x-0 bottom-0 z-50 border-t border-border bg-surface/95 shadow-bar backdrop-blur-md md:hidden"
      >
        <div className="mx-auto grid h-[62px] max-w-lg grid-cols-5">
          <Link
            href="/"
            aria-current={isHome ? 'page' : undefined}
            className={`flex flex-col items-center justify-center gap-1 text-[10.5px] font-semibold transition ${
              isHome ? 'text-foreground' : 'text-subtle'
            }`}
          >
            <span
              className={`flex h-7 w-12 items-center justify-center rounded-full transition ${
                isHome ? 'bg-surface-2' : ''
              }`}
            >
              <Home className="h-5 w-5" strokeWidth={isHome ? 2.3 : 1.8} />
            </span>
            Início
          </Link>

          <Link
            href="/produtos"
            aria-current={isCategories ? 'page' : undefined}
            className={`flex flex-col items-center justify-center gap-1 text-[10.5px] font-semibold transition ${
              isCategories ? 'text-foreground' : 'text-subtle'
            }`}
          >
            <span
              className={`flex h-7 w-12 items-center justify-center rounded-full transition ${
                isCategories ? 'bg-surface-2' : ''
              }`}
            >
              <LayoutGrid className="h-5 w-5" strokeWidth={isCategories ? 2.3 : 1.8} />
            </span>
            Categorias
          </Link>

          <Link
            href="/ofertas"
            aria-current={isOffers ? 'page' : undefined}
            className={`flex flex-col items-center justify-center gap-1 text-[10.5px] font-semibold transition ${
              isOffers ? 'text-foreground' : 'text-subtle'
            }`}
          >
            <span
              className={`flex h-7 w-12 items-center justify-center rounded-full transition ${
                isOffers ? 'bg-surface-2' : ''
              }`}
            >
              <Tag className="h-5 w-5" strokeWidth={isOffers ? 2.3 : 1.8} />
            </span>
            Ofertas
          </Link>

          <Link
            href="/lojas"
            aria-current={isStores ? 'page' : undefined}
            className={`flex flex-col items-center justify-center gap-1 text-[10.5px] font-semibold transition ${
              isStores ? 'text-foreground' : 'text-subtle'
            }`}
          >
            <span
              className={`flex h-7 w-12 items-center justify-center rounded-full transition ${
                isStores ? 'bg-surface-2' : ''
              }`}
            >
              <MapPin className="h-5 w-5" strokeWidth={isStores ? 2.3 : 1.8} />
            </span>
            Lojas
          </Link>

          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            aria-label={`Carrinho com ${totalCount} itens`}
            className="flex flex-col items-center justify-center gap-1 text-[10.5px] font-semibold text-subtle hover:text-foreground"
          >
            <span className="relative flex h-7 w-12 items-center justify-center">
              <ShoppingBag className="h-5 w-5" strokeWidth={1.8} />
              {totalCount > 0 && (
                <span className="absolute -top-0.5 right-2 flex h-4 w-4 items-center justify-center rounded-full bg-sale text-[9.5px] font-bold text-white">
                  {totalCount}
                </span>
              )}
            </span>
            Carrinho
          </button>
        </div>
      </nav>
    </>
  );
}
