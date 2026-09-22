'use client';

import React, { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react';
import { CartItem } from '@/types';
import { useStore } from './StoreContext';
import { useData } from './DataContext';
import { formatPrice } from '@/lib/utils';

const CART_STORAGE_KEY = 'kika:carrinho:v4';

interface CartContextType {
  items: CartItem[];
  addItem: (item: { kind: 'product' | 'combo'; refId: string }, quantity?: number) => void;
  removeItem: (kind: 'product' | 'combo', refId: string) => void;
  updateQuantity: (kind: 'product' | 'combo', refId: string, quantity: number) => void;
  clearCart: () => void;
  totalCount: number;
  subtotalCents: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  getWhatsAppOrderUrl: () => string;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const { selectedStoreId, selectedStore } = useStore();
  const { dataset } = useData();
  const [storeCarts, setStoreCarts] = useState<Record<string, CartItem[]>>({});
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Load from localStorage
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(CART_STORAGE_KEY);
      if (saved) {
        setStoreCarts(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Error loading cart:', e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (!isLoaded) return;
    try {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(storeCarts));
    } catch (e) {
      console.error('Error saving cart:', e);
    }
  }, [storeCarts, isLoaded]);

  const items = useMemo(() => {
    return storeCarts[selectedStoreId] || [];
  }, [storeCarts, selectedStoreId]);

  const addItem = useCallback(
    (item: { kind: 'product' | 'combo'; refId: string }, qty: number = 1) => {
      setStoreCarts((prev) => {
        const currentItems = prev[selectedStoreId] || [];
        const existingIdx = currentItems.findIndex(
          (i) => i.kind === item.kind && i.refId === item.refId
        );
        let updated: CartItem[];

        if (existingIdx >= 0) {
          updated = [...currentItems];
          updated[existingIdx] = {
            ...updated[existingIdx],
            quantity: updated[existingIdx].quantity + qty,
          };
        } else {
          updated = [...currentItems, { ...item, quantity: qty }];
        }

        return {
          ...prev,
          [selectedStoreId]: updated,
        };
      });
      setIsCartOpen(true);
    },
    [selectedStoreId]
  );

  const removeItem = useCallback(
    (kind: 'product' | 'combo', refId: string) => {
      setStoreCarts((prev) => {
        const currentItems = prev[selectedStoreId] || [];
        return {
          ...prev,
          [selectedStoreId]: currentItems.filter(
            (i) => !(i.kind === kind && i.refId === refId)
          ),
        };
      });
    },
    [selectedStoreId]
  );

  const updateQuantity = useCallback(
    (kind: 'product' | 'combo', refId: string, quantity: number) => {
      if (quantity <= 0) {
        removeItem(kind, refId);
        return;
      }

      setStoreCarts((prev) => {
        const currentItems = prev[selectedStoreId] || [];
        const updated = currentItems.map((i) =>
          i.kind === kind && i.refId === refId ? { ...i, quantity } : i
        );
        return {
          ...prev,
          [selectedStoreId]: updated,
        };
      });
    },
    [selectedStoreId, removeItem]
  );

  const clearCart = useCallback(() => {
    setStoreCarts((prev) => ({
      ...prev,
      [selectedStoreId]: [],
    }));
  }, [selectedStoreId]);

  const totalCount = useMemo(() => {
    return items.reduce((acc, item) => acc + item.quantity, 0);
  }, [items]);

  const subtotalCents = useMemo(() => {
    return items.reduce((acc, item) => {
      if (item.kind === 'product') {
        const prod = dataset.products.find((p) => p.id === item.refId);
        if (!prod) return acc;
        const promo = dataset.promotions.find(
          (pr) => pr.productId === prod.id && pr.active
        );
        const price =
          prod.salePriceCents ??
          promo?.promoPriceCents ??
          prod.priceCents ??
          prod.regularPriceCents ??
          0;
        return acc + price * item.quantity;
      } else {
        const combo = dataset.combos.find((c) => c.id === item.refId);
        if (!combo) return acc;
        return acc + combo.priceCents * item.quantity;
      }
    }, 0);
  }, [items, dataset.products, dataset.combos, dataset.promotions]);

  const getWhatsAppOrderUrl = useCallback(() => {
    let text = `Olá, Kika Bebidas (${selectedStore.displayName})!\n`;
    text += `Gostaria de fazer o seguinte pedido para retirada/entrega:\n\n`;

    items.forEach((item, index) => {
      if (item.kind === 'product') {
        const p = dataset.products.find((prod) => prod.id === item.refId);
        if (p) {
          const promo = dataset.promotions.find(
            (pr) => pr.productId === p.id && pr.active
          );
          const price =
            p.salePriceCents ??
            promo?.promoPriceCents ??
            p.priceCents ??
            p.regularPriceCents ??
            0;
          text += `${index + 1}. ${item.quantity}x ${p.name} (${p.volume}) — ${formatPrice(price * item.quantity)}\n`;
        }
      } else {
        const c = dataset.combos.find((combo) => combo.id === item.refId);
        if (c) {
          text += `${index + 1}. ${item.quantity}x ${c.name} — ${formatPrice(c.priceCents * item.quantity)}\n`;
        }
      }
    });

    text += `\n*Total:* ${formatPrice(subtotalCents)}\n`;
    text += `*Unidade:* ${selectedStore.displayName}${selectedStore.address ? ` (${selectedStore.address})` : ''}\n`;
    text += `\nPor favor, confirmem a disponibilidade dos itens. Obrigado!`;

    const cleanPhone = (selectedStore.whatsapp || selectedStore.phone || '48991234567').replace(/\D/g, '');
    const phone = cleanPhone.startsWith('55') ? cleanPhone : `55${cleanPhone}`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  }, [items, dataset.products, dataset.combos, selectedStore, subtotalCents]);

  const value = useMemo(
    () => ({
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      totalCount,
      subtotalCents,
      isCartOpen,
      setIsCartOpen,
      getWhatsAppOrderUrl,
    }),
    [
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      totalCount,
      subtotalCents,
      isCartOpen,
      setIsCartOpen,
      getWhatsAppOrderUrl,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
