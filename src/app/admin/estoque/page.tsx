'use client';

import React, { useState } from 'react';
import { useData } from '@/context/DataContext';
import { InventoryItem } from '@/types';
import { Search, Boxes, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

export default function AdminEstoquePage() {
  const { dataset, updateInventory } = useData();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStore, setFilterStore] = useState('');

  const filteredProducts = dataset.products.filter((p) => {
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      return p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q);
    }
    return true;
  });

  const getStatus = (storeId: string, productId: string): InventoryItem['status'] => {
    const item = dataset.inventory.find(
      (inv) => inv.storeId === storeId && inv.productId === productId
    );
    return item?.status ?? 'disponivel';
  };

  const storesToRender = filterStore
    ? dataset.stores.filter((s) => s.id === filterStore)
    : dataset.stores;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-[24px] font-bold text-foreground">Estoque por Loja</h1>
          <p className="mt-1 text-[13.5px] text-ink-muted">
            Altere o status em tempo real. Qualquer alteração reflete imediatamente na vitrine da unidade correspondente.
          </p>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <div className="relative flex-1 w-full">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-muted" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Filtrar por nome do produto ou marca..."
            className="w-full rounded-xl border border-line bg-surface pl-10 pr-4 py-2.5 text-xs text-foreground outline-none focus:border-ink"
          />
        </div>

        <select
          value={filterStore}
          onChange={(e) => setFilterStore(e.target.value)}
          className="rounded-xl border border-line bg-surface px-3 py-2.5 text-xs text-foreground outline-none focus:border-ink w-full sm:w-auto"
        >
          <option value="">Todas as 5 lojas</option>
          {dataset.stores.map((s) => (
            <option key={s.id} value={s.id}>
              {s.displayName}
            </option>
          ))}
        </select>
      </div>

      {/* Inventory Matrix Table */}
      <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-line text-[11px] uppercase tracking-wider text-ink-muted bg-surface-sunken/40">
                <th className="p-3.5 min-w-[220px]">Produto</th>
                {storesToRender.map((store) => (
                  <th key={store.id} className="p-3.5 min-w-[150px] text-center">
                    {store.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr
                  key={product.id}
                  className="border-b border-line last:border-b-0 hover:bg-surface-2/30 transition"
                >
                  <td className="p-3.5">
                    <div className="flex items-center gap-2.5">
                      <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg bg-surface-2 p-1">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-foreground truncate max-w-[180px]">
                          {product.name}
                        </p>
                        <p className="text-[10px] text-ink-muted">{product.volume}</p>
                      </div>
                    </div>
                  </td>

                  {storesToRender.map((store) => {
                    const status = getStatus(store.id, product.id);

                    return (
                      <td key={store.id} className="p-3.5 text-center">
                        <select
                          value={status}
                          onChange={(e) =>
                            updateInventory(
                              store.id,
                              product.id,
                              e.target.value as InventoryItem['status']
                            )
                          }
                          className={`rounded-lg px-2.5 py-1.5 text-xs font-semibold outline-none cursor-pointer transition border ${
                            status === 'disponivel'
                              ? 'bg-ok-soft text-ok border-ok/30'
                              : status === 'poucas-unidades' || status === 'ultimas-unidades'
                              ? 'bg-warn-soft text-warn border-warn/30'
                              : 'bg-sale/10 text-sale border-sale/30'
                          }`}
                        >
                          <option value="disponivel">Disponível</option>
                          <option value="ultimas-unidades">Poucas unidades</option>
                          <option value="indisponivel">Esgotado</option>
                        </select>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
