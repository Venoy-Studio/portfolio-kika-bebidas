'use client';

import React from 'react';
import { Header } from '@/components/store/Header';
import { Footer } from '@/components/store/Footer';
import { useData } from '@/context/DataContext';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import { Plus, Users, Check } from 'lucide-react';

export default function CombosPage() {
  const { dataset } = useData();
  const { addItem } = useCart();

  const activeCombos = dataset.combos.filter((c) => c.active);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 py-8">
        <div className="shell">
          <div className="border-b border-border pb-4 mb-8">
            <h1 className="font-display text-2xl font-bold md:text-3xl text-foreground">
              Combos e Kits Prontos
            </h1>
            <p className="mt-1 text-xs text-muted">
              Kits montados para churrasco, esquenta e festas. Praticidade e economia na sua Kika.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {activeCombos.map((combo) => (
              <article
                key={combo.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-card transition duration-200 hover:shadow-lift"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-surface-2">
                  <img
                    src={combo.image}
                    alt={combo.name}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 pill bg-black/60 text-white backdrop-blur-sm text-xs font-semibold flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    Serve {combo.serves}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-bold text-foreground">
                    {combo.name}
                  </h3>
                  <p className="mt-1 text-xs text-muted leading-relaxed">
                    {combo.description}
                  </p>

                  {/* Included items */}
                  {combo.items && combo.items.length > 0 && (
                    <div className="mt-4 border-t border-border pt-3">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-muted mb-2">
                        Itens inclusos no kit:
                      </p>
                      <ul className="space-y-1.5">
                        {combo.items.map((it, idx) => {
                          const p = dataset.products.find((prod) => prod.id === it.productId);
                          return (
                            <li
                              key={idx}
                              className="flex items-center gap-2 text-xs text-foreground/90"
                            >
                              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-accent-soft text-accent-strong text-[10px] font-bold">
                                <Check className="h-2.5 w-2.5" />
                              </span>
                              <span>
                                <strong>{it.quantity}x</strong> {p ? p.name : it.productId}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}

                  <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                    <div>
                      <span className="text-[11px] text-muted block">Valor do combo</span>
                      <span className="font-display text-xl font-bold text-foreground">
                        {formatPrice(combo.priceCents)}
                      </span>
                    </div>

                    <button
                      onClick={() => addItem({ kind: 'combo', refId: combo.id })}
                      className="btn btn-ink flex items-center gap-1.5 text-xs font-semibold"
                    >
                      <Plus className="h-4 w-4" />
                      Pedir combo
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
