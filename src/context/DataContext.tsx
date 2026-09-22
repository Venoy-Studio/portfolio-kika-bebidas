'use client';

import React, { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react';
import { Dataset, Product, Banner, Promotion, Combo, Store, InventoryItem } from '@/types';
import { initialDataset } from '@/data/initialDataset';

const DATASET_STORAGE_KEY = 'kika:dataset:v5';

interface DataContextType {
  data: Dataset;
  dataset: Dataset;
  isLoaded: boolean;
  upsertProduct: (product: Product) => void;
  deleteProduct: (id: string) => void;
  updateInventory: (storeId: string, productId: string, status: InventoryItem['status']) => void;
  upsertBanner: (banner: Banner) => void;
  deleteBanner: (id: string) => void;
  upsertPromotion: (promo: Promotion) => void;
  deletePromotion: (id: string) => void;
  upsertCombo: (combo: Combo) => void;
  deleteCombo: (id: string) => void;
  upsertStore: (store: Store) => void;
  resetDataset: () => void;
}

const DataContext = createContext<DataContextType | null>(null);

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [dataset, setDataset] = useState<Dataset>(initialDataset);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(DATASET_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setDataset((prev) => ({
          ...prev,
          ...parsed,
          settings: {
            ...initialDataset.settings,
            ...(parsed.settings || {}),
          },
        }));
      }
    } catch (e) {
      console.error('Error loading dataset from localStorage:', e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    if (!isLoaded) return;
    try {
      window.localStorage.setItem(DATASET_STORAGE_KEY, JSON.stringify(dataset));
    } catch (e) {
      console.error('Error saving dataset to localStorage:', e);
    }
  }, [dataset, isLoaded]);

  const upsertProduct = useCallback((product: Product) => {
    setDataset((prev) => {
      const idx = prev.products.findIndex((p) => p.id === product.id);
      const newProducts = [...prev.products];
      if (idx >= 0) {
        newProducts[idx] = product;
        return { ...prev, products: newProducts };
      }
      newProducts.unshift(product);
      // Generate default inventory for this new product in all stores
      const newInventory = [
        ...prev.inventory,
        ...prev.stores.map((s) => ({
          storeId: s.id,
          productId: product.id,
          status: 'disponivel' as const,
        })),
      ];
      return { ...prev, products: newProducts, inventory: newInventory };
    });
  }, []);

  const deleteProduct = useCallback((id: string) => {
    setDataset((prev) => ({
      ...prev,
      products: prev.products.filter((p) => p.id !== id),
      inventory: prev.inventory.filter((inv) => inv.productId !== id),
    }));
  }, []);

  const updateInventory = useCallback(
    (storeId: string, productId: string, status: InventoryItem['status']) => {
      setDataset((prev) => {
        const idx = prev.inventory.findIndex(
          (inv) => inv.storeId === storeId && inv.productId === productId
        );
        const newInv = [...prev.inventory];
        if (idx >= 0) {
          newInv[idx] = { ...newInv[idx], status };
        } else {
          newInv.push({ storeId, productId, status });
        }
        return { ...prev, inventory: newInv };
      });
    },
    []
  );

  const upsertBanner = useCallback((banner: Banner) => {
    setDataset((prev) => {
      const idx = prev.banners.findIndex((b) => b.id === banner.id);
      const newBanners = [...prev.banners];
      if (idx >= 0) {
        newBanners[idx] = banner;
      } else {
        newBanners.unshift(banner);
      }
      return { ...prev, banners: newBanners };
    });
  }, []);

  const deleteBanner = useCallback((id: string) => {
    setDataset((prev) => ({
      ...prev,
      banners: prev.banners.filter((b) => b.id !== id),
    }));
  }, []);

  const upsertPromotion = useCallback((promo: Promotion) => {
    setDataset((prev) => {
      const idx = prev.promotions.findIndex((p) => p.id === promo.id);
      const newPromos = [...prev.promotions];
      if (idx >= 0) {
        newPromos[idx] = promo;
      } else {
        newPromos.unshift(promo);
      }
      return { ...prev, promotions: newPromos };
    });
  }, []);

  const deletePromotion = useCallback((id: string) => {
    setDataset((prev) => ({
      ...prev,
      promotions: prev.promotions.filter((p) => p.id !== id),
    }));
  }, []);

  const upsertCombo = useCallback((combo: Combo) => {
    setDataset((prev) => {
      const idx = prev.combos.findIndex((c) => c.id === combo.id);
      const newCombos = [...prev.combos];
      if (idx >= 0) {
        newCombos[idx] = combo;
      } else {
        newCombos.unshift(combo);
      }
      return { ...prev, combos: newCombos };
    });
  }, []);

  const deleteCombo = useCallback((id: string) => {
    setDataset((prev) => ({
      ...prev,
      combos: prev.combos.filter((c) => c.id !== id),
    }));
  }, []);

  const upsertStore = useCallback((store: Store) => {
    setDataset((prev) => ({
      ...prev,
      stores: prev.stores.map((s) => (s.id === store.id ? store : s)),
    }));
  }, []);

  const resetDataset = useCallback(() => {
    try {
      window.localStorage.removeItem(DATASET_STORAGE_KEY);
    } catch {}
    setDataset(initialDataset);
  }, []);

  const value = useMemo(
    () => ({
      data: dataset,
      dataset,
      isLoaded,
      upsertProduct,
      deleteProduct,
      updateInventory,
      upsertBanner,
      deleteBanner,
      upsertPromotion,
      deletePromotion,
      upsertCombo,
      deleteCombo,
      upsertStore,
      resetDataset,
    }),
    [
      dataset,
      isLoaded,
      upsertProduct,
      deleteProduct,
      updateInventory,
      upsertBanner,
      deleteBanner,
      upsertPromotion,
      deletePromotion,
      upsertCombo,
      deleteCombo,
      upsertStore,
      resetDataset,
    ]
  );

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}
