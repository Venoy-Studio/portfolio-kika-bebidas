'use client';

import React, { useState } from 'react';
import { useStore } from '@/context/StoreContext';
import { MapPin, X, Clock, Check, Search } from 'lucide-react';

export function StoreModal() {
  const {
    isStoreModalOpen,
    setIsStoreModalOpen,
    storesWithDistance,
    selectedStoreId,
    setSelectedStoreId,
    setClosestStoreByCep,
    userLocation,
  } = useStore();

  const [cepInput, setCepInput] = useState('');
  const [cepError, setCepError] = useState(false);

  if (!isStoreModalOpen) return null;

  const handleCepSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = setClosestStoreByCep(cepInput);
    if (success) {
      setCepError(false);
      setIsStoreModalOpen(false);
    } else {
      setCepError(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div>
            <h2 className="text-xl font-bold text-foreground">Escolha sua Kika</h2>
            <p className="text-xs text-muted">
              Veja o estoque, ofertas e horários da unidade mais próxima.
            </p>
          </div>
          <button
            onClick={() => setIsStoreModalOpen(false)}
            className="icon-btn h-8 w-8 text-muted hover:bg-surface-2 hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* CEP Search */}
        <form onSubmit={handleCepSubmit} className="mt-4">
          <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5">
            Buscar por CEP ou bairro
          </label>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                value={cepInput}
                onChange={(e) => setCepInput(e.target.value)}
                placeholder="Ex: 88132-000 ou seu CEP"
                className="w-full rounded-xl border border-border bg-surface-2 px-3.5 py-2.5 text-sm text-foreground outline-none transition focus:border-primary focus:bg-white"
              />
            </div>
            <button
              type="submit"
              className="btn btn-ink flex items-center gap-1.5 px-4 text-xs font-semibold"
            >
              <Search className="h-3.5 w-3.5" />
              Buscar
            </button>
          </div>
          {cepError && (
            <p className="mt-1 text-xs text-sale">
              CEP não mapeado. Selecione uma das 5 unidades abaixo.
            </p>
          )}
          {userLocation && (
            <p className="mt-1 text-xs text-ok flex items-center gap-1">
              <Check className="h-3.5 w-3.5" />
              Localização detectada: {userLocation.label}
            </p>
          )}
        </form>

        {/* Store List */}
        <div className="mt-4 max-h-[380px] space-y-2.5 overflow-y-auto pr-1">
          {storesWithDistance.map((store) => {
            const isSelected = store.id === selectedStoreId;
            const is24h = store.features.includes('24h');

            return (
              <button
                key={store.id}
                type="button"
                onClick={() => setSelectedStoreId(store.id, 'manual')}
                className={`flex w-full items-center justify-between rounded-xl border p-3.5 text-left transition ${
                  isSelected
                    ? 'border-primary bg-surface-2 ring-1 ring-primary'
                    : 'border-border hover:border-border-strong hover:bg-surface-2/60'
                }`}
              >
                <div className="min-w-0 flex-1 pr-3">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-sm text-foreground">{store.displayName}</h3>
                    {is24h && (
                      <span className="pill bg-accent-soft text-accent-strong text-[10px]">
                        Aberto 24h
                      </span>
                    )}
                    {store.distanceKm !== undefined && (
                      <span className="pill bg-surface-3 text-muted text-[10px]">
                        {store.distanceKm} km
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-xs text-muted truncate">{store.address}</p>
                  <p className="mt-1 flex items-center gap-1 text-[11px] text-subtle">
                    <Clock className="h-3 w-3" />
                    {is24h
                      ? 'Aberto 24 horas todos os dias'
                      : 'Seg a Dom: 10:00 às 02:00'}
                  </p>
                </div>

                <div className="shrink-0">
                  {isSelected ? (
                    <span className="icon-btn h-7 w-7 bg-primary text-white">
                      <Check className="h-4 w-4" />
                    </span>
                  ) : (
                    <span className="text-xs font-semibold text-muted hover:text-foreground">
                      Selecionar
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
