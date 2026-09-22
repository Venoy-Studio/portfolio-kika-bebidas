'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/store/Header';
import { Footer } from '@/components/store/Footer';
import { useStore } from '@/context/StoreContext';
import {
  MapPin,
  Clock,
  CheckCircle,
  ExternalLink,
  MessageCircle,
  ShoppingBag,
} from 'lucide-react';

const DAYS_OF_WEEK = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
];

export default function LojasPage() {
  const router = useRouter();
  const { storesWithDistance, selectedStoreId, setSelectedStoreId } = useStore();

  const handleSelectStore = (storeId: string) => {
    setSelectedStoreId(storeId, 'lojas-page');
    router.push('/');
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 py-8">
        <div className="shell">
          <div className="border-b border-border pb-4 mb-8">
            <h1 className="font-display text-2xl font-bold md:text-3xl text-foreground">
              Nossas 5 Lojas
            </h1>
            <p className="mt-1 text-xs text-muted">
              Encontre a Kika Bebidas mais próxima de você em Palhoça e São José.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {storesWithDistance.map((store) => {
              const isCurrent = store.id === selectedStoreId;
              const is24h = store.features.includes('24h');

              return (
                <div
                  key={store.id}
                  className={`flex flex-col overflow-hidden rounded-2xl border bg-surface shadow-card transition duration-200 ${
                    isCurrent
                      ? 'border-primary ring-2 ring-primary/20'
                      : 'border-border hover:shadow-lift'
                  }`}
                >
                  {/* Photo */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-surface-2">
                    <img
                      src={store.photo}
                      alt={store.displayName}
                      className="h-full w-full object-cover"
                    />
                    {is24h && (
                      <span className="absolute top-3 left-3 pill bg-primary text-white text-xs font-bold flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        Aberto 24 Horas
                      </span>
                    )}
                    {isCurrent && (
                      <span className="absolute top-3 right-3 pill bg-[#1e7a4c] text-white text-xs font-bold flex items-center gap-1">
                        <CheckCircle className="h-3 w-3" />
                        Sua Loja Ativa
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h2 className="font-bold text-lg text-foreground">
                          {store.displayName}
                        </h2>
                        <p className="text-xs text-muted mt-0.5">
                          {store.neighborhood}, {store.city} — {store.state}
                        </p>
                      </div>
                      {store.distanceKm !== undefined && (
                        <span className="pill bg-surface-2 text-muted text-xs font-bold shrink-0">
                          {store.distanceKm} km
                        </span>
                      )}
                    </div>

                    <div className="mt-4 flex items-start gap-2 text-xs text-muted">
                      <MapPin className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                      <span>{store.address}</span>
                    </div>

                    {/* Features */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {store.features.map((feat) => (
                        <span
                          key={feat}
                          className="pill bg-surface-2 text-[11px] font-medium text-foreground capitalize"
                        >
                          ✓ {feat}
                        </span>
                      ))}
                    </div>

                    {/* Hours summary */}
                    <div className="mt-4 rounded-xl bg-surface-2/60 p-3 text-xs">
                      <p className="font-semibold text-foreground mb-1 flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-muted" />
                        Horário de atendimento:
                      </p>
                      <p className="text-muted">
                        {is24h
                          ? 'Aberto sem parar: 24 horas por dia, 7 dias por semana.'
                          : 'Segunda a Domingo das 10:00 às 02:00.'}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="mt-6 flex flex-col gap-2 border-t border-border pt-4">
                      <button
                        onClick={() => handleSelectStore(store.id)}
                        className={`btn flex items-center justify-center gap-2 text-xs font-bold ${
                          isCurrent
                            ? 'bg-surface-2 text-foreground hover:bg-surface-3'
                            : 'btn-ink'
                        }`}
                      >
                        <ShoppingBag className="h-4 w-4" />
                        {isCurrent ? 'Loja já selecionada' : 'Comprar nesta loja'}
                      </button>

                      <div className="flex gap-2">
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                            `Kika Bebidas ${store.address}`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline flex-1 flex items-center justify-center gap-1.5 text-xs text-muted hover:text-foreground"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          Ver no Mapa
                        </a>

                        <a
                          href={`https://wa.me/5548999999999?text=${encodeURIComponent(
                            `Olá! Gostaria de informações sobre a Kika ${store.displayName}.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline flex-1 flex items-center justify-center gap-1.5 text-xs text-[#1e7a4c] hover:bg-ok/10"
                        >
                          <MessageCircle className="h-3.5 w-3.5" />
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
