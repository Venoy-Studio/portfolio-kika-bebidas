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

export default function ProdutoClient() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;

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

  // Selected store stock info
  const selectedStore = dataset.stores.find((s) => s.id === selectedStoreId);
  const stockItem = dataset.inventory.find(
    (inv) => inv.storeId === selectedStoreId && inv.productId === product.id
  );
  const isAvailable = stockItem ? stockItem.status === 'disponivel' : true;
  const isLowStock = stockItem ? (stockItem.status === 'ultimas-unidades' || stockItem.status === 'poucas-unidades') : false;
  const isOutOfStock = stockItem ? (stockItem.status === 'esgotado' || stockItem.status === 'indisponivel') : false;

  const handleAddToCart = () => {
    if (isOutOfStock) return;
    addItem({ kind: 'product', refId: product.id }, quantity);
  };

  return (
    <div className="flex min-h-screen flex-col bg-sand-50">
      <Header />

      <main className="flex-1 pb-24">
        {/* Breadcrumb / Back button */}
        <div className="shell py-4">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-sand-600 hover:text-ink transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </button>
        </div>

        <div className="shell">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 bg-white rounded-3xl p-6 md:p-10 border border-sand-200/60 shadow-sm">
            {/* Left: Product Image */}
            <div className="relative flex items-center justify-center bg-sand-50/50 rounded-2xl p-6 min-h-[300px] md:min-h-[420px]">
              {hasDiscount && (
                <span className="absolute top-4 left-4 rounded-full bg-crimson text-white px-3 py-1 text-xs font-bold shadow-sm">
                  -{discountPercent}%
                </span>
              )}
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-[320px] md:max-h-[380px] w-auto object-contain transition-transform duration-300 hover:scale-105"
                />
              ) : (
                <div className="text-sand-400 text-sm">Sem imagem</div>
              )}
            </div>

            {/* Right: Product Details & Purchase Controls */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-sand-500 bg-sand-100 px-2.5 py-0.5 rounded-full">
                    {product.category || product.categoryId || 'Bebidas'}
                  </span>
                  {product.volume && (
                    <span className="text-[11px] font-medium text-sand-500">
                      {product.volume}
                    </span>
                  )}
                </div>

                <h1 className="font-serif text-2xl md:text-3xl font-bold text-ink leading-tight mb-3">
                  {product.name}
                </h1>

                {/* Price block */}
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-3xl font-bold text-amber-700">
                    {formatPrice(price)}
                  </span>
                  {hasDiscount && (
                    <span className="text-base text-sand-400 line-through">
                      {formatPrice(regularPrice)}
                    </span>
                  )}
                </div>

                {/* Store Stock Status */}
                <div className="rounded-2xl bg-sand-50 p-4 border border-sand-200/60 mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-sand-700 flex items-center gap-1.5">
                      <Store className="h-4 w-4 text-amber-600" />
                      Loja selecionada:
                    </span>
                    <span className="text-xs font-semibold text-ink">
                      {selectedStore ? selectedStore.name : 'Loja padrão'}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs">
                    {isOutOfStock ? (
                      <>
                        <XCircle className="h-4 w-4 text-crimson" />
                        <span className="font-semibold text-crimson">
                          Esgotado nesta unidade
                        </span>
                      </>
                    ) : isLowStock ? (
                      <>
                        <AlertTriangle className="h-4 w-4 text-amber-500" />
                        <span className="font-semibold text-amber-600">
                          Últimas unidades disponíveis
                        </span>
                      </>
                    ) : (
                      <>
                        <CheckCircle className="h-4 w-4 text-emerald-600" />
                        <span className="font-semibold text-emerald-600">
                          Em estoque para retirada ou entrega imediata
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Description */}
                {product.description && (
                  <div className="text-sm text-sand-600 leading-relaxed mb-6">
                    <p>{product.description}</p>
                  </div>
                )}
              </div>

              {/* Quantity and Add to Cart Button */}
              <div className="space-y-3 pt-6 border-t border-sand-100">
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-sand-300 rounded-xl bg-white p-1">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      disabled={quantity <= 1 || isOutOfStock}
                      className="h-9 w-9 flex items-center justify-center rounded-lg text-sand-600 hover:bg-sand-100 disabled:opacity-40 transition-colors"
                      aria-label="Diminuir quantidade"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-10 text-center font-bold text-sm text-ink">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      disabled={isOutOfStock}
                      className="h-9 w-9 flex items-center justify-center rounded-lg text-sand-600 hover:bg-sand-100 disabled:opacity-40 transition-colors"
                      aria-label="Aumentar quantidade"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    disabled={isOutOfStock}
                    className="btn btn-amber flex-1 py-3 text-sm font-bold shadow-md hover:shadow-lg disabled:opacity-50 disabled:shadow-none transition-all"
                  >
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    {isOutOfStock ? 'Indisponível' : 'Adicionar à Sacola'}
                  </button>
                </div>

                {/* WhatsApp button fallback */}
                <a
                  href={`https://wa.me/5548999999999?text=${encodeURIComponent(
                    `Olá, tenho interesse no produto ${product.name} no Kika Bebidas.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost w-full py-2 text-xs font-semibold text-sand-600 hover:text-emerald-700 flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="h-4 w-4 text-emerald-600" />
                  Pedir informações pelo WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
