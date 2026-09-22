'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import { useStore } from '@/context/StoreContext';
import { useData } from '@/context/DataContext';
import { X, Plus, Minus, Trash2, ShoppingBag, MessageCircle } from 'lucide-react';
import { formatPrice } from '@/lib/utils';
import Image from 'next/image';

export function CartDrawer() {
  const {
    isCartOpen,
    setIsCartOpen,
    items,
    updateQuantity,
    removeItem,
    clearCart,
    subtotalCents,
    totalCount,
    getWhatsAppOrderUrl,
  } = useCart();
  const { selectedStore } = useStore();
  const { dataset } = useData();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm">
      <div className="flex h-full w-full max-w-md flex-col bg-white shadow-2xl animate-in slide-in-from-right duration-200">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border p-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-primary" />
            <div>
              <h2 className="text-base font-bold leading-tight text-foreground">
                Carrinho ({totalCount})
              </h2>
              <p className="text-xs text-muted">
                Kika {selectedStore.displayName}
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="icon-btn h-8 w-8 text-muted hover:bg-surface-2 hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center p-6">
              <ShoppingBag className="h-12 w-12 text-subtle mb-3 opacity-40" />
              <h3 className="font-semibold text-foreground">Seu carrinho está vazio</h3>
              <p className="mt-1 text-xs text-muted">
                Adicione bebidas ou combos para fazer seu pedido direto no WhatsApp.
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="btn btn-ink mt-4 text-xs"
              >
                Explorar produtos
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item) => {
                let name = '';
                let price = 0;
                let image = '';
                let subtitle = '';

                if (item.kind === 'product') {
                  const prod = dataset.products.find((p) => p.id === item.refId);
                  if (prod) {
                    name = prod.name;
                    const promo = dataset.promotions.find(
                      (pr) => pr.productId === prod.id && pr.active
                    );
                    price =
                      prod.salePriceCents ??
                      promo?.promoPriceCents ??
                      prod.priceCents ??
                      prod.regularPriceCents ??
                      0;
                    image = prod.image;
                    subtitle = prod.volume;
                  }
                } else {
                  const combo = dataset.combos.find((c) => c.id === item.refId);
                  if (combo) {
                    name = combo.name;
                    price = combo.priceCents;
                    image = combo.image;
                    subtitle = combo.serves;
                  }
                }

                return (
                  <div
                    key={`${item.kind}-${item.refId}`}
                    className="flex items-center gap-3 rounded-xl border border-border p-3"
                  >
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-surface-2">
                      <img
                        src={image}
                        alt={name}
                        className="h-full w-full object-contain p-1"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h4 className="truncate text-xs font-semibold text-foreground">
                        {name}
                      </h4>
                      <p className="text-[11px] text-muted">{subtitle}</p>
                      <p className="mt-1 font-bold text-xs text-foreground">
                        {formatPrice(price)}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <div className="flex items-center rounded-lg border border-border bg-surface-2 p-0.5">
                        <button
                          onClick={() =>
                            updateQuantity(item.kind, item.refId, item.quantity - 1)
                          }
                          className="icon-btn h-6 w-6 text-foreground hover:bg-white"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-bold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.kind, item.refId, item.quantity + 1)
                          }
                          className="icon-btn h-6 w-6 text-foreground hover:bg-white"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.kind, item.refId)}
                        className="icon-btn h-7 w-7 text-subtle hover:text-sale"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border bg-surface-2/40 p-4">
            <div className="mb-3 flex items-center justify-between text-sm">
              <span className="text-muted">Subtotal</span>
              <span className="font-bold text-lg text-foreground">
                {formatPrice(subtotalCents)}
              </span>
            </div>

            <a
              href={getWhatsAppOrderUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-[#1EBE5D] active:scale-[0.98]"
            >
              <MessageCircle className="h-5 w-5" />
              Pedir pelo WhatsApp
            </a>

            <div className="mt-2 flex justify-between items-center">
              <button
                onClick={clearCart}
                className="text-[11px] text-muted hover:text-sale"
              >
                Limpar carrinho
              </button>
              <span className="text-[11px] text-subtle">
                Retirada ou entrega combinada no chat
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
