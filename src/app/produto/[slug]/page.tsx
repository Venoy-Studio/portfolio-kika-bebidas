'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Header } from '@/components/store/Header';
import { Footer } from '@/components/store/Footer';
import { useData } from '@/context/DataContext';
import { useStore } from '@/context/StoreContext';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import {
  ArrowLeft,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Plus,
  Minus,
  ShoppingBag,
  MessageCircle,
  Store,
} from 'lucide-react';

export default function ProdutoDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const { dataset } = useData();
  const { selectedStoreId, setSelectedStoreId } = useStore();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  // Match by slug or id (e.g. "heineken-long-neck-330ml" or "p-heineken-330")
  const product = dataset.products.find((p) => {
    const cleanId = p.id.replace('p-', '');
    return p.slug === slug || cleanId === slug || p.id === slug;
  }) || dataset.products[0];

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <div className="shell flex flex-1 flex-col items-center justify-center py-20 text-center">
          <h1 className="text-xl font-bold">Produto não encontrado</h1>
          <Link href="/produtos" className="btn btn-ink mt-4 text-xs">
            Voltar ao catálogo
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const regularPrice = product.regularPriceCents ?? product.priceCents;
  const promo = dataset.promotions.find(
    (p) => p.productId === product.id && p.active
  );
  const salePrice = product.salePriceCents ?? promo?.promoPriceCents ?? null;
  const price = salePrice ?? regularPrice;
  const hasDiscount = !!salePrice && salePrice < regularPrice;
  const discountPercent = hasDiscount
    ? Math.round(((regularPrice - salePrice) / regularPrice) * 100)
    : 0;

  // Selected store inventory
  const currentInv = dataset.inventory.find(
    (inv) => inv.storeId === selectedStoreId && inv.productId === product.id
  );
  const currentStatus = currentInv?.status ?? 'disponivel';
  const isOutOfStock = currentStatus === 'esgotado' || currentStatus === 'indisponivel';

  const handleAddToCart = () => {
    if (!isOutOfStock) {
      addItem({ kind: 'product', refId: product.id }, quantity);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 py-6 md:py-10">
        <div className="shell">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-xs text-muted">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-1 hover:text-foreground transition"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Voltar
            </button>
            <span>/</span>
            <Link href="/produtos" className="hover:text-foreground">
              Catálogo
            </Link>
            <span>/</span>
            <span className="text-foreground truncate max-w-[200px]">{product.name}</span>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {/* Image */}
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-card flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
              />
              {hasDiscount && (
                <span className="absolute top-4 left-4 badge-off text-xs">
                  -{discountPercent}% OFF
                </span>
              )}
              <span className="absolute bottom-3 left-4 text-[10px] text-subtle">
                Imagem ilustrativa
              </span>
            </div>

            {/* Details */}
            <div className="flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                {product.brand}
              </span>
              <h1 className="mt-1 font-display text-2xl font-bold md:text-3xl text-foreground">
                {product.name}
              </h1>
              <p className="mt-1 text-sm font-medium text-muted">{product.volume}</p>

              {/* Price */}
              <div className="mt-4 flex items-baseline gap-3">
                <span className="font-display text-3xl font-bold text-sale">
                  {formatPrice(price)}
                </span>
                {hasDiscount && (
                  <span className="text-base text-subtle line-through">
                    {formatPrice(regularPrice)}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="mt-4 text-xs leading-relaxed text-muted border-t border-border pt-4">
                {product.description}
              </p>

              {/* Attributes badges */}
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                {product.temperature && (
                  <span className="pill bg-cold/15 text-cold-dark">
                    ❄️ {product.temperature}
                  </span>
                )}
                {!!product.alcoholByVolume && product.alcoholByVolume > 0 && (
                  <span className="pill bg-surface-2 text-muted">
                    Teor alcoólico: {product.alcoholByVolume}%
                  </span>
                )}
                {product.packageType && (
                  <span className="pill bg-surface-2 text-muted">
                    Embalagem: {product.packageType}
                  </span>
                )}
              </div>

              {/* Quantity and Actions */}
              <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 border-t border-border pt-6">
                <div className="flex items-center justify-between sm:justify-start rounded-xl border border-border bg-surface-2 p-1">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="icon-btn h-9 w-9 text-foreground hover:bg-white"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-10 text-center font-bold text-sm">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="icon-btn h-9 w-9 text-foreground hover:bg-white"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                <button
                  type="button"
                  disabled={isOutOfStock}
                  onClick={handleAddToCart}
                  className={`btn flex-1 gap-2 py-3.5 text-sm font-semibold ${
                    isOutOfStock
                      ? 'bg-subtle/40 text-white cursor-not-allowed'
                      : 'btn-ink'
                  }`}
                >
                  <ShoppingBag className="h-4 w-4" />
                  {isOutOfStock ? 'Esgotado nesta loja' : 'Adicionar ao carrinho'}
                </button>
              </div>

              {/* Stock in all 5 Stores */}
              <div className="mt-8 rounded-2xl border border-border bg-surface p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Store className="h-4 w-4 text-primary" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
                    Disponibilidade na rede Kika
                  </h3>
                </div>

                <div className="space-y-2">
                  {dataset.stores.map((st) => {
                    const inv = dataset.inventory.find(
                      (i) => i.storeId === st.id && i.productId === product.id
                    );
                    const stStatus = inv?.status ?? 'disponivel';
                    const isSelected = st.id === selectedStoreId;

                    return (
                      <div
                        key={st.id}
                        className={`flex items-center justify-between rounded-xl p-2.5 text-xs transition ${
                          isSelected ? 'bg-surface-2 font-semibold' : 'hover:bg-surface-2/60'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-foreground">{st.displayName}</span>
                          {isSelected && (
                            <span className="pill bg-primary text-white text-[9px]">
                              Sua Kika
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-2">
                          {stStatus === 'disponivel' && (
                            <span className="flex items-center gap-1 text-ok font-semibold">
                              <CheckCircle className="h-3.5 w-3.5" />
                              Disponível
                            </span>
                          )}
                          {(stStatus === 'poucas-unidades' || stStatus === 'ultimas-unidades') && (
                            <span className="flex items-center gap-1 text-warn font-semibold">
                              <AlertTriangle className="h-3.5 w-3.5" />
                              Poucas unidades
                            </span>
                          )}
                          {(stStatus === 'esgotado' || stStatus === 'indisponivel') && (
                            <span className="flex items-center gap-1 text-sale font-semibold">
                              <XCircle className="h-3.5 w-3.5" />
                              Esgotado
                            </span>
                          )}

                          {!isSelected && (
                            <button
                              onClick={() => setSelectedStoreId(st.id, 'manual')}
                              className="text-subtle hover:text-foreground underline ml-2"
                            >
                              Selecionar loja
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
