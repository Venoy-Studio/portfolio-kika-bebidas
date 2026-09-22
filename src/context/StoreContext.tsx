'use client';

import React, { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react';
import { Store } from '@/types';
import { useData } from './DataContext';
import { calculateDistanceKm, CEP_DATABASE, getStoreStatus, formatDistance } from '@/lib/utils';

const STORE_STORAGE_KEY = 'kika:loja-selecionada:v3';
const STORE_STORAGE_KEY_V2 = 'kika:loja:v2';
const LOCATION_STORAGE_KEY = 'kika:localizacao:v1';
const DEFAULT_STORE_ID = 'loja-sao-sebastiao';

interface UserLocation {
  coords: { lat: number; lng: number };
  label: string;
}

export interface StoreContextType {
  // Original names
  selectedStore: Store;
  selectedStoreId: string;
  setSelectedStoreId: (id: string, source?: string) => void;
  userLocation: UserLocation | null;
  setUserLocation: (loc: UserLocation | null) => void;
  storesWithDistance: (Store & { distanceKm?: number })[];
  isStoreModalOpen: boolean;
  setIsStoreModalOpen: (open: boolean) => void;
  setClosestStoreByCep: (cep: string) => boolean;

  // Official bundle aliases
  store: Store;
  storeId: string;
  storeConfirmed: boolean;
  hydrated: boolean;
  isLoaded: boolean;
  rankedStores: (Store & { distanceKm?: number })[];
  distanceKm: number | null;
  distance: string | null;
  coords: { lat: number; lng: number } | null;
  locationLabel: string | null;
  locationSource: string | null;
  locating: boolean;
  locationError: string | null;
  selectStore: (id: string, source?: string) => void;
  requestGeolocation: () => void;
  applyZip: (cep: string) => { ok: boolean; message: string };
  clearLocation: () => void;
  pickerOpen: boolean;
  openPicker: () => void;
  closePicker: () => void;
  onboardingOpen: boolean;
  dismissOnboarding: () => void;
  status: { open: boolean; label: string; detail: string } | null;
  statusText: string | null;
}

const StoreContext = createContext<StoreContextType | null>(null);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const { dataset } = useData();
  const [selectedStoreId, setSelectedStoreIdState] = useState<string>(DEFAULT_STORE_ID);
  const [storeConfirmed, setStoreConfirmed] = useState<boolean>(false);
  const [userLocation, setUserLocationState] = useState<UserLocation | null>(null);
  const [locationSource, setLocationSource] = useState<string | null>(null);
  const [isStoreModalOpen, setIsStoreModalOpen] = useState<boolean>(false);
  const [locating, setLocating] = useState<boolean>(false);
  const [locationError, setLocationError] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Load from localStorage
  useEffect(() => {
    try {
      const savedStore = window.localStorage.getItem(STORE_STORAGE_KEY) || window.localStorage.getItem(STORE_STORAGE_KEY_V2);
      if (savedStore) {
        const parsed = JSON.parse(savedStore);
        if (parsed?.id) {
          setSelectedStoreIdState(parsed.id);
          setStoreConfirmed(true);
          if (parsed.source) setLocationSource(parsed.source);
        }
      }
      const savedLoc = window.localStorage.getItem(LOCATION_STORAGE_KEY);
      if (savedLoc) {
        const parsed = JSON.parse(savedLoc);
        if (parsed?.coords) setUserLocationState(parsed);
      }
    } catch (e) {
      console.error('Error reading store from localStorage:', e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const selectStore = useCallback((id: string, source: string = 'manual') => {
    setSelectedStoreIdState(id);
    setStoreConfirmed(true);
    setLocationSource(source);
    try {
      const payload = JSON.stringify({ id, source });
      window.localStorage.setItem(STORE_STORAGE_KEY, payload);
      window.localStorage.setItem(STORE_STORAGE_KEY_V2, payload);
    } catch (e) {
      console.error(e);
    }
    setIsStoreModalOpen(false);
  }, []);

  const setSelectedStoreId = selectStore;

  const setUserLocation = useCallback((loc: UserLocation | null) => {
    setUserLocationState(loc);
    try {
      if (loc) {
        window.localStorage.setItem(LOCATION_STORAGE_KEY, JSON.stringify(loc));
      } else {
        window.localStorage.removeItem(LOCATION_STORAGE_KEY);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  // Compute stores with distance from userLocation
  const storesWithDistance = useMemo(() => {
    const list = dataset.stores.map((s) => {
      if (userLocation?.coords && s.lat && s.lng) {
        const dist = calculateDistanceKm(
          userLocation.coords.lat,
          userLocation.coords.lng,
          s.lat,
          s.lng
        );
        return { ...s, distanceKm: Math.round(dist * 10) / 10 };
      }
      return { ...s, distanceKm: undefined };
    });
    if (userLocation?.coords) {
      return [...list].sort((a, b) => (a.distanceKm ?? 999) - (b.distanceKm ?? 999));
    }
    return list;
  }, [dataset.stores, userLocation]);

  const selectedStore = useMemo(() => {
    return (
      dataset.stores.find((s) => s.id === selectedStoreId) ||
      dataset.stores[0] || {
        id: DEFAULT_STORE_ID,
        slug: 'sao-sebastiao',
        name: 'São Sebastião',
        displayName: 'Kika São Sebastião',
        city: 'Palhoça',
        state: 'SC',
        neighborhood: 'São Sebastião',
        address: 'Rua Tomaz Domingos da Silveira, 3041',
        zip: null,
        phone: null,
        whatsapp: null,
        lat: -27.658,
        lng: -48.672,
        photo: '/stores/loja-1.webp',
        photoIsIllustrative: true,
        hours: [],
        features: [],
        zipPrefixes: [],
        provenance: {},
        active: true,
      }
    );
  }, [dataset.stores, selectedStoreId]);

  const storeStatus = useMemo(() => {
    return getStoreStatus(selectedStore);
  }, [selectedStore]);

  const distanceKm = useMemo(() => {
    const found = storesWithDistance.find((s) => s.id === selectedStoreId);
    return found?.distanceKm ?? null;
  }, [storesWithDistance, selectedStoreId]);

  const formattedDist = useMemo(() => {
    return formatDistance(distanceKm);
  }, [distanceKm]);

  const requestGeolocation = useCallback(() => {
    if (typeof navigator === 'undefined' || !navigator.geolocation) {
      setLocationError('Seu navegador não permite localização. Informe seu CEP.');
      return;
    }
    setLocating(true);
    setLocationError(null);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        const label = 'Sua localização atual';
        setUserLocation({ coords, label });
        // Rank stores
        let closestStore = dataset.stores[0];
        let minDist = 999999;
        dataset.stores.forEach((s) => {
          if (s.lat && s.lng) {
            const d = calculateDistanceKm(coords.lat, coords.lng, s.lat, s.lng);
            if (d < minDist) {
              minDist = d;
              closestStore = s;
            }
          }
        });
        if (closestStore) {
          selectStore(closestStore.id, 'gps');
        }
        setLocating(false);
      },
      () => {
        setLocating(false);
        setLocationError('Não conseguimos sua localização. Informe seu CEP.');
      },
      { enableHighAccuracy: false, timeout: 8000, maximumAge: 300000 }
    );
  }, [dataset.stores, selectStore, setUserLocation]);

  const setClosestStoreByCep = useCallback(
    (cep: string): boolean => {
      const cleanCep = cep.replace(/\D/g, '');
      if (cleanCep.length < 5) return false;
      const prefix = cleanCep.slice(0, 5);
      const match = CEP_DATABASE.find((item) => item.prefix === prefix);
      if (!match) return false;

      setUserLocation({
        coords: match.coords,
        label: match.label,
      });

      let closestStore = dataset.stores[0];
      let minDistance = 999999;

      for (const store of dataset.stores) {
        if (store.lat && store.lng) {
          const dist = calculateDistanceKm(
            match.coords.lat,
            match.coords.lng,
            store.lat,
            store.lng
          );
          if (dist < minDistance) {
            minDistance = dist;
            closestStore = store;
          }
        }
      }

      if (closestStore) {
        selectStore(closestStore.id, 'cep');
        return true;
      }
      return false;
    },
    [dataset.stores, selectStore, setUserLocation]
  );

  const applyZip = useCallback(
    (cep: string) => {
      const success = setClosestStoreByCep(cep);
      if (!success) {
        return {
          ok: false,
          message: 'Ainda não temos loja perto desse CEP. Escolha uma unidade abaixo.',
        };
      }
      return { ok: true, message: 'Localização atualizada com sucesso.' };
    },
    [setClosestStoreByCep]
  );

  const clearLocation = useCallback(() => {
    setUserLocation(null);
    setLocationSource('manual');
    setLocationError(null);
  }, [setUserLocation]);

  const value = useMemo(
    () => ({
      selectedStore,
      selectedStoreId,
      setSelectedStoreId,
      userLocation,
      setUserLocation,
      storesWithDistance,
      isStoreModalOpen,
      setIsStoreModalOpen,
      setClosestStoreByCep,

      store: selectedStore,
      storeId: selectedStoreId,
      storeConfirmed,
      hydrated: isLoaded,
      isLoaded,
      rankedStores: storesWithDistance,
      distanceKm,
      distance: formattedDist,
      coords: userLocation?.coords ?? null,
      locationLabel: userLocation?.label ?? null,
      locationSource,
      locating,
      locationError,
      selectStore,
      requestGeolocation,
      applyZip,
      clearLocation,
      pickerOpen: isStoreModalOpen,
      openPicker: () => setIsStoreModalOpen(true),
      closePicker: () => setIsStoreModalOpen(false),
      onboardingOpen: false,
      dismissOnboarding: () => {},
      status: storeStatus,
      statusText: storeStatus?.detail ?? null,
    }),
    [
      selectedStore,
      selectedStoreId,
      setSelectedStoreId,
      userLocation,
      setUserLocation,
      storesWithDistance,
      isStoreModalOpen,
      setIsStoreModalOpen,
      setClosestStoreByCep,
      storeConfirmed,
      isLoaded,
      distanceKm,
      formattedDist,
      locationSource,
      locating,
      locationError,
      selectStore,
      requestGeolocation,
      applyZip,
      clearLocation,
      storeStatus,
    ]
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
}
