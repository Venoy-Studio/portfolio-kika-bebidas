import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(cents: number): string {
  return (cents / 100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

export function formatPriceParts(cents: number): { integer: string; decimal: string } {
  const formatted = (cents / 100).toFixed(2);
  const [integer, decimal] = formatted.split('.');
  return { integer, decimal };
}

export function calculateDistanceKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export const CEP_DATABASE: { prefix: string; label: string; coords: { lat: number; lng: number } }[] = [
  { prefix: "88130", label: "Centro, Palhoça", coords: { lat: -27.6455, lng: -48.67 } },
  { prefix: "88131", label: "Aririú, Palhoça", coords: { lat: -27.6748, lng: -48.6621 } },
  { prefix: "88132", label: "Jardim Eldorado, Palhoça", coords: { lat: -27.6305, lng: -48.6555 } },
  { prefix: "88133", label: "Brejaru, Palhoça", coords: { lat: -27.6361, lng: -48.6662 } },
  { prefix: "88134", label: "Passa Vinte, Palhoça", coords: { lat: -27.6291, lng: -48.6663 } },
  { prefix: "88135", label: "Bela Vista, Palhoça", coords: { lat: -27.6702, lng: -48.6802 } },
  { prefix: "88136", label: "São Sebastião, Palhoça", coords: { lat: -27.6545, lng: -48.6751 } },
  { prefix: "88137", label: "Pagani, Palhoça", coords: { lat: -27.6538, lng: -48.6785 } },
  { prefix: "88103", label: "Campinas, São José", coords: { lat: -27.5931, lng: -48.6132 } },
  { prefix: "88104", label: "Kobrasol, São José", coords: { lat: -27.5901, lng: -48.6142 } },
  { prefix: "88106", label: "Forquilhinhas, São José", coords: { lat: -27.5992, lng: -48.6362 } },
  { prefix: "88117", label: "Sertão do Maruim, São José", coords: { lat: -27.588, lng: -48.695 } },
];

export function formatDistance(distanceKm: number | null | undefined): string | null {
  if (distanceKm == null || Number.isNaN(distanceKm)) return null;
  if (distanceKm < 0.1) return "bem pertinho";
  if (distanceKm < 1) return `${10 * Math.round(100 * distanceKm)} m`;
  return `${distanceKm.toFixed(1).replace(".", ",")} km`;
}

function parseMinutes(timeStr: string): number {
  const [h, m] = timeStr.split(":").map(Number);
  return 60 * h + m;
}

function formatHour(timeStr: string): string {
  const [h, m] = timeStr.split(":");
  return m === "00" ? `${h}h` : `${h}h${m}`;
}

export function getStoreStatus(store: { hours: { day: number; opens: string; closes: string }[] }, date: Date = new Date()) {
  if (!store.hours || store.hours.length === 0) return null;
  const is24h = store.hours.length === 7 && store.hours.every(h => h.opens && h.opens === h.closes);
  if (is24h) {
    return { open: true, label: "Aberta 24h", detail: "Aberta 24 horas" };
  }

  const dayNames = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];
  const currentDay = date.getDay();
  const currentMinutes = 60 * date.getHours() + date.getMinutes();

  // Check previous day overnight shift
  const prevDay = ((currentDay - 1) % 7 + 7) % 7;
  const prevShift = store.hours.find(h => h.day === prevDay);
  if (prevShift?.opens && prevShift.closes) {
    const opensMin = parseMinutes(prevShift.opens);
    const closesMin = parseMinutes(prevShift.closes);
    if (closesMin < opensMin && currentMinutes < closesMin) {
      return { open: true, label: "Aberta agora", detail: `Aberta até ${formatHour(prevShift.closes)}` };
    }
  }

  const todayShift = store.hours.find(h => h.day === currentDay);
  if (todayShift?.opens && todayShift.closes) {
    const opensMin = parseMinutes(todayShift.opens);
    const closesMin = parseMinutes(todayShift.closes);
    const isOpen = closesMin < opensMin ? currentMinutes >= opensMin : (currentMinutes >= opensMin && currentMinutes < closesMin);
    if (isOpen) {
      return { open: true, label: "Aberta agora", detail: `Aberta até ${formatHour(todayShift.closes)}` };
    }
    if (currentMinutes < opensMin) {
      return { open: false, label: "Fechada", detail: `Abre às ${formatHour(todayShift.opens)}` };
    }
  }

  for (let offset = 1; offset <= 7; offset++) {
    const nextDay = (currentDay + offset) % 7;
    const nextShift = store.hours.find(h => h.day === nextDay);
    if (nextShift?.opens) {
      const dayLabel = offset === 1 ? "amanhã" : dayNames[nextDay];
      return { open: false, label: "Fechada", detail: `Abre ${dayLabel} às ${formatHour(nextShift.opens)}` };
    }
  }

  return { open: false, label: "Fechada", detail: "Consulte a unidade" };
}

