'use client';

import React, { useState } from 'react';
import { useStore } from '@/context/StoreContext';
import { useData } from '@/context/DataContext';
import { MapPin, Crosshair, Loader2, X } from 'lucide-react';

export function StoreNotice() {
  const { store, storeConfirmed, hydrated, requestGeolocation, locating, openPicker } = useStore();
  const [dismissed, setDismissed] = useState(false);
  const { data } = useData();
  const storeNotice = data?.settings?.storeNotice;

  if (!storeNotice?.enabled || !hydrated || storeConfirmed || dismissed) {
    return null;
  }

  return (
    <div className="animate-rise mb-4 flex items-center gap-3 rounded-[16px] bg-primary px-4 py-3 text-white md:mb-5 md:px-5">
      <MapPin size={18} className="hidden shrink-0 text-accent sm:block" />
      <p className="min-w-0 flex-1 text-[13px] leading-snug md:text-[14px]">
        Mostrando preços e estoque da <strong className="font-semibold">Kika {store.name}</strong>.
        {storeNotice.text && <span className="hidden text-white/60 sm:inline"> {storeNotice.text}</span>}
      </p>
      <div className="flex shrink-0 items-center gap-1.5">
        <button
          type="button"
          onClick={requestGeolocation}
          disabled={locating}
          className="btn btn-light hidden px-3.5 py-2 text-[12.5px] sm:inline-flex"
        >
          {locating ? <Loader2 size={14} className="animate-spin" /> : <Crosshair size={14} />}
          Usar localização
        </button>
        <button
          type="button"
          onClick={openPicker}
          className="btn btn-light px-3.5 py-2 text-[12.5px] sm:bg-white/10 sm:text-white sm:hover:bg-white/20"
        >
          Escolher loja
        </button>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Dispensar"
          className="icon-btn h-8 w-8 text-white/60 hover:bg-white/10 hover:text-white"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
