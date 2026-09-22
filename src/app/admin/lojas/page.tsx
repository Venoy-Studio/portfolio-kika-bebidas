'use client';

import React, { useState } from 'react';
import { useData } from '@/context/DataContext';
import { Store } from '@/types';
import { Store as StoreIcon, Edit2, X, Clock, MapPin } from 'lucide-react';

export default function AdminLojasPage() {
  const { dataset, upsertStore } = useData();
  const [editingStore, setEditingStore] = useState<Store | null>(null);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingStore) return;
    upsertStore(editingStore);
    setEditingStore(null);
  };

  const toggle24h = (store: Store) => {
    const is24h = store.features.includes('24h');
    const updatedFeatures = is24h
      ? store.features.filter((f) => f !== '24h')
      : [...store.features, '24h'];
    upsertStore({ ...store, features: updatedFeatures });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-[24px] font-bold text-foreground">Lojas Físicas</h1>
          <p className="mt-1 text-[13.5px] text-ink-muted">
            Configuração das 5 unidades da rede Kika em Palhoça e São José.
          </p>
        </div>
      </div>

      {/* Stores Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {dataset.stores.map((store) => {
          const is24h = store.features.includes('24h');

          return (
            <div
              key={store.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-sm"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-surface-2">
                <img
                  src={store.photo}
                  alt={store.displayName}
                  className="h-full w-full object-cover"
                />
                {is24h && (
                  <span className="absolute top-3 left-3 pill bg-primary text-white text-[10px] font-bold">
                    Aberto 24h
                  </span>
                )}
                <span
                  className={`absolute top-3 right-3 pill text-[10px] font-bold ${
                    store.active ? 'bg-ok text-white' : 'bg-ink text-white/70'
                  }`}
                >
                  {store.active ? 'Unidade Ativa' : 'Desativada'}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-base text-foreground">
                      {store.displayName}
                    </h3>
                    <p className="text-xs text-ink-muted">
                      {store.neighborhood}, {store.city} — {store.state}
                    </p>
                  </div>
                </div>

                <div className="mt-3 flex items-start gap-2 text-xs text-ink-muted">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-primary mt-0.5" />
                  <span>{store.address}</span>
                </div>

                <div className="mt-3 flex flex-wrap gap-1">
                  {store.features.map((f) => (
                    <span
                      key={f}
                      className="pill bg-surface-2 text-[10px] text-foreground font-medium capitalize"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {store.notes && (
                  <p className="mt-3 text-[11px] text-ink-muted italic border-t border-line pt-2">
                    {store.notes}
                  </p>
                )}

                <div className="mt-4 flex items-center justify-between border-t border-line pt-3">
                  <button
                    type="button"
                    onClick={() => toggle24h(store)}
                    className="text-xs font-semibold text-ink-muted hover:text-foreground flex items-center gap-1"
                  >
                    <Clock className="h-3.5 w-3.5" />
                    {is24h ? 'Desmarcar 24h' : 'Marcar 24h'}
                  </button>

                  <button
                    onClick={() => setEditingStore(store)}
                    className="btn btn-outline py-1 px-3 text-xs font-semibold flex items-center gap-1"
                  >
                    <Edit2 className="h-3 w-3" />
                    Editar
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Edit Modal */}
      {editingStore && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-2xl bg-surface p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-line pb-4">
              <h3 className="text-base font-bold text-foreground">
                Editar {editingStore.displayName}
              </h3>
              <button
                onClick={() => setEditingStore(null)}
                className="icon-btn h-8 w-8 text-ink-muted hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="mt-4 space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-foreground mb-1">
                  Nome de Exibição
                </label>
                <input
                  type="text"
                  required
                  value={editingStore.displayName}
                  onChange={(e) =>
                    setEditingStore({ ...editingStore, displayName: e.target.value })
                  }
                  className="w-full rounded-xl border border-line bg-surface-2 px-3 py-2 text-foreground outline-none focus:border-ink"
                />
              </div>

              <div>
                <label className="block font-semibold text-foreground mb-1">
                  Endereço Completo
                </label>
                <input
                  type="text"
                  value={editingStore.address || ''}
                  onChange={(e) =>
                    setEditingStore({ ...editingStore, address: e.target.value })
                  }
                  className="w-full rounded-xl border border-line bg-surface-2 px-3 py-2 text-foreground outline-none focus:border-ink"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-foreground mb-1">
                    Bairro
                  </label>
                  <input
                    type="text"
                    value={editingStore.neighborhood}
                    onChange={(e) =>
                      setEditingStore({
                        ...editingStore,
                        neighborhood: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-line bg-surface-2 px-3 py-2 text-foreground outline-none focus:border-ink"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-foreground mb-1">
                    Cidade
                  </label>
                  <input
                    type="text"
                    value={editingStore.city}
                    onChange={(e) =>
                      setEditingStore({ ...editingStore, city: e.target.value })
                    }
                    className="w-full rounded-xl border border-line bg-surface-2 px-3 py-2 text-foreground outline-none focus:border-ink"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-foreground mb-1">
                  Observações Internas
                </label>
                <textarea
                  rows={2}
                  value={editingStore.notes || ''}
                  onChange={(e) =>
                    setEditingStore({ ...editingStore, notes: e.target.value })
                  }
                  className="w-full rounded-xl border border-line bg-surface-2 px-3 py-2 text-foreground outline-none focus:border-ink"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="store-active"
                  checked={editingStore.active}
                  onChange={(e) =>
                    setEditingStore({ ...editingStore, active: e.target.checked })
                  }
                  className="h-4 w-4 rounded border-line text-ink"
                />
                <label htmlFor="store-active" className="font-semibold text-foreground">
                  Unidade Ativa
                </label>
              </div>

              <div className="flex justify-end gap-2 border-t border-line pt-4">
                <button
                  type="button"
                  onClick={() => setEditingStore(null)}
                  className="btn btn-outline text-xs"
                >
                  Cancelar
                </button>
                <button type="submit" className="btn btn-ink text-xs font-semibold">
                  Salvar Loja
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
