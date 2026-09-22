'use client';

import React from 'react';
import Link from 'next/link';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { useStore } from '@/context/StoreContext';
import { useData } from '@/context/DataContext';
import { formatPriceParts, formatPrice, cn } from '@/lib/utils';
import { Plus } from 'lucide-react';

export function ProductCard({
  product,
  variant = 'rail',
  origin = 'catalogo',
  customWidth,
  className,
}: {
  product: Product;
  variant?: 'grid' | 'rail';
  origin?: string;
  customWidth?: string;
  className?: string;
}) {
  const { addItem } = useCart();
  const { selectedStoreId } = useStore();
  const { dataset } = useData();

  const inventoryItem = dataset.inventory.find(
    (inv) => inv.storeId === selectedStoreId && inv.productId === product.id
  );
  const status = inventoryItem?.status ?? 'disponivel';
  const isOutOfStock = status === 'esgotado' || status === 'indisponivel';
  const isLowStock = status === 'poucas-unidades' || status === 'ultimas-unidades';

  const promo = dataset.promotions.find(
    (p) =>
      p.active &&
      p.productId === product.id &&
      (!p.storeIds || p.storeIds.includes(selectedStoreId))
  );

  const regularPrice = product.regularPriceCents ?? product.priceCents;
  const salePrice = product.salePriceCents ?? promo?.promoPriceCents ?? null;
  const price = salePrice ?? regularPrice;
  const hasDiscount = !!salePrice && salePrice < regularPrice;
  const discountPercent = hasDiscount
    ? Math.round(((regularPrice - salePrice) / regularPrice) * 100)
    : 0;
  const promoBadge = promo?.label || promo?.badge;

  const { integer, decimal } = formatPriceParts(price);
  const productSlug = product.slug || product.id;

  return (
    <article
      className={cn(
        'group relative flex flex-col rounded-[16px] bg-surface p-2 transition duration-200 hover:shadow-lift',
        variant === 'rail' && 'w-[152px] sm:w-[180px] lg:w-[200px]',
        customWidth,
        className
      )}
    >
      <Link
        href={`/produto/${productSlug}`}
        className="flex flex-1 flex-col"
        aria-label={`${product.name} ${product.volume}`}
      >
        <div className="relative aspect-square overflow-hidden rounded-[12px] bg-white">
          <div className="absolute inset-0 p-1.5 transition-transform duration-300 ease-out group-hover:scale-[1.04]">
            <img
              src={product.image}
              alt={product.name}
              sizes="(min-width: 1024px) 240px, 45vw"
              loading="lazy"
              decoding="async"
              draggable="false"
              className={`h-full w-full object-contain transition duration-300 ${
                isOutOfStock ? 'opacity-40 grayscale' : ''
              }`}
            />
          </div>

          <div className="absolute left-2 top-2 flex flex-col items-start gap-1">
            {hasDiscount && (
              <span className="badge-off">-{discountPercent}%</span>
            )}
            {promoBadge && (
              <span className="inline-flex items-center rounded-full bg-primary px-2 py-[5px] text-[10px] font-bold leading-none text-white">
                {promoBadge}
              </span>
            )}
            {isOutOfStock && (
              <span className="inline-flex items-center rounded-full bg-off-soft px-2 py-0.5 text-[10px] font-bold text-sale">
                Esgotado
              </span>
            )}
          </div>

          {product.imageIsIllustrative && (
            <span className="absolute bottom-1.5 left-2 text-[9px] font-medium text-subtle">
              Imagem ilustrativa
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col px-1 pt-2.5">
          <h3 className="clamp-2 text-[13px] font-semibold leading-[1.3] text-foreground md:text-[13.5px]">
            {product.name}
          </h3>
          <p className="mt-0.5 text-[12px] text-muted">{product.volume}</p>

          {isLowStock && !isOutOfStock && (
            <span className="pill bg-warn-soft text-warn mt-1.5 self-start">
              <span className="h-1.5 w-1.5 rounded-full bg-warn" />
              Últimas unidades
            </span>
          )}

          <div className="mt-auto flex items-end justify-between gap-2 pt-2.5">
            <div className="flex flex-col">
              {hasDiscount && (
                <span className="tabular-nums line-through text-[11.5px] text-subtle">
                  {formatPrice(regularPrice)}
                </span>
              )}
              <span
                className={`font-display inline-flex items-start leading-none tabular-nums ${
                  hasDiscount ? 'text-sale' : 'text-foreground'
                }`}
              >
                <span className="mr-0.5 mt-[0.2em] font-bold text-[11px]">R$</span>
                <span className="text-[18px] md:text-[20px]">{integer}</span>
                <span className="mt-[0.15em] font-bold text-[11px]">,{decimal}</span>
              </span>
            </div>
            <span className="h-9 w-9 shrink-0" aria-hidden="true" />
          </div>
        </div>
      </Link>

      <div className="absolute bottom-3 right-3">
        <button
          type="button"
          disabled={isOutOfStock}
          onClick={(e) => {
            e.preventDefault();
            if (!isOutOfStock) {
              addItem({ kind: 'product', refId: product.id });
            }
          }}
          aria-label={`Adicionar ${product.name} ao carrinho`}
          className={`icon-btn h-9 w-9 text-white ${
            isOutOfStock
              ? 'bg-subtle/50 cursor-not-allowed'
              : 'bg-primary hover:bg-primary-hover active:scale-95'
          }`}
        >
          <Plus className="h-[18px] w-[18px]" strokeWidth={2.4} />
        </button>
      </div>
    </article>
  );
}
