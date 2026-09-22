'use client';

import React from 'react';
import { useData } from '@/context/DataContext';
import { useStore } from '@/context/StoreContext';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import { Plus } from 'lucide-react';
import { CarouselSection } from './CarouselSection';

export function ComboSection({ className = 'mt-10 md:mt-14' }: { className?: string }) {
  const { dataset } = useData();
  const { selectedStore } = useStore();
  const { addItem } = useCart();

  const comboOrder = [
    'combo-festa',
    'combo-whisky',
    'combo-churrasco',
    'combo-gelada',
    'combo-gin',
    'combo-esquenta',
  ];

  const combos = comboOrder
    .map((id) => dataset.combos.find((c) => c.id === id))
    .filter((c): c is NonNullable<typeof c> => !!c && c.active);

  if (combos.length === 0) return null;

  return (
    <CarouselSection
      className={className}
      eyebrow="Kits fechados"
      title="Combos para a ocasião"
      description={`Montados e conferidos na Kika ${selectedStore.name}. Um pedido só, tudo junto.`}
      href="/combos"
      hrefLabel="Todos os combos"
      railClassName="gap-3 md:gap-4"
    >
      {combos.map((combo) => {
        const regularPriceCents =
          combo.regularPriceCents ||
          combo.items.reduce((sum, item) => {
            const p = dataset.products.find((prod) => prod.id === item.productId);
            return sum + (p ? p.priceCents * item.quantity : 0);
          }, 0);

        const savingsCents = Math.max(0, regularPriceCents - combo.priceCents);
        const discountPercent =
          regularPriceCents > 0
            ? Math.round((savingsCents / regularPriceCents) * 100)
            : 0;

        return (
          <article
            key={combo.id}
            className="group flex flex-col overflow-hidden rounded-[18px] bg-primary text-white w-[270px] sm:w-[300px] lg:w-[312px]"
          >
            <div data-parallax="photo" className="relative aspect-[3/2] overflow-hidden bg-[#1d1a17]">
              <div className="fx-layer absolute inset-0">
                <img
                  src={combo.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1/3"
                style={{
                  background:
                    'linear-gradient(to top, rgba(18,18,18,0.55), rgba(18,18,18,0))',
                }}
              />
              {savingsCents > 0 && (
                <span className="absolute left-3 top-3 rounded-full bg-accent px-2.5 py-1 text-[11px] font-bold text-white">
                  Economize {formatPrice(savingsCents)}
                </span>
              )}
              {discountPercent > 0 && (
                <span className="badge-off absolute right-3 top-3">
                  -{discountPercent}%
                </span>
              )}
            </div>

            <div className="flex flex-1 flex-col p-4">
              <p className="eyebrow text-accent">Combo · Serve {combo.serves}</p>
              <h3 className="font-display mt-1 text-[19px] leading-tight">{combo.name}</h3>

              <ul className="mt-2.5 space-y-1 text-[12.5px] leading-snug text-white/70">
                {combo.items.map((item, idx) => {
                  const prod = dataset.products.find((p) => p.id === item.productId);
                  return (
                    <li key={idx} className="flex gap-2">
                      <span className="w-7 shrink-0 font-semibold tabular-nums text-white">
                        {item.quantity}x
                      </span>
                      <span className="min-w-0 truncate">
                        {prod ? prod.name : item.productId}{' '}
                        {prod?.volume && (
                          <span className="text-white/45">{prod.volume}</span>
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-auto flex items-end justify-between gap-3 pt-4">
                <div>
                  {regularPriceCents > combo.priceCents && (
                    <p className="text-[12px] tabular-nums text-white/40 line-through">
                      {formatPrice(regularPriceCents)}
                    </p>
                  )}
                  <p className="font-display text-[24px] leading-none tabular-nums">
                    {formatPrice(combo.priceCents)}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => addItem({ kind: 'combo', refId: combo.id })}
                  className="btn shrink-0 px-4 py-2.5 text-[13px] btn-light"
                >
                  <Plus className="h-[15px] w-[15px]" strokeWidth={2.4} />
                  Adicionar
                </button>
              </div>
            </div>
          </article>
        );
      })}
    </CarouselSection>
  );
}
