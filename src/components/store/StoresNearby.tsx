'use client';

import React from 'react';
import Link from 'next/link';
import { useStore } from '@/context/StoreContext';
import { useData } from '@/context/DataContext';
import { Crosshair, ArrowRight } from 'lucide-react';

interface PinCoord {
  id: string;
  name: string;
  cx: number;
  cy: number;
}

const PIN_COORDS: PinCoord[] = [
  { id: 'loja-sao-sebastiao', name: 'São Sebastião', cx: 404.7, cy: 446 },
  { id: 'loja-jardim-eldorado', name: 'Jardim Eldorado', cx: 606, cy: 283.9 },
  { id: 'loja-brejaru', name: 'Brejaru', cx: 534.1, cy: 347.7 },
  { id: 'loja-sertao-do-maruim', name: 'Sertão do Maruim', cx: 74, cy: 74 },
];

export function StoresNearby({ className = 'mt-10 md:mt-14' }: { className?: string }) {
  const { dataset } = useData();
  const { selectedStoreId, setSelectedStoreId, setIsStoreModalOpen } = useStore();

  const stores = dataset.stores;

  return (
    <section className={className}>
      <div data-reveal="title" className="mb-4 flex items-end justify-between gap-4 md:mb-5">
        <div className="min-w-0">
          <p className="eyebrow mb-1 text-accent-strong">Onde a gente está</p>
          <h2 className="font-display text-[20px] leading-[1.15] md:text-[26px] text-foreground">
            <span className="fx-mask">
              <span className="fx-line">Uma Kika perto de você</span>
            </span>
          </h2>
          <p className="fx-desc mt-1 max-w-[62ch] text-[13px] leading-snug md:text-[14px] text-muted">
            5 lojas em Palhoça e São José. Toque numa unidade para ver os preços e o estoque dela.
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <Link
            className="group inline-flex items-center gap-1 whitespace-nowrap text-[13px] font-semibold transition text-foreground hover:text-accent-strong"
            href="/lojas"
          >
            Ver lojas
            <ArrowRight className="h-[15px] w-[15px] transition group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      <div className="grid gap-3 [&>*]:min-w-0 lg:grid-cols-[1.25fr_1fr] lg:gap-4">
        {/* Interactive Schematic Map */}
        <div
          data-reveal="map"
          className="relative overflow-hidden bg-[#E9E4DB] aspect-[4/3] rounded-[18px] sm:aspect-[16/10] lg:aspect-auto lg:min-h-[400px]"
        >
          <svg
            viewBox="0 0 680 520"
            className="h-full w-full"
            role="img"
            aria-label="Mapa esquemático das unidades Kika em Palhoça e São José"
          >
            <path d="M584 0 Q530 156 610 286 Q670 416 620 520 L680 520 L680 0 Z" fill="#CFDCDF" />
            <path d="M0 62.4 Q110 145.6 70 270.4 Q30 395.2 120 520 L0 520 Z" fill="#D8DCCB" />
            <g stroke="#FFFFFF" fill="none" strokeLinecap="round">
              <path d="M421.6 -10 Q340 182 380.8 322.4 Q421.6 442 340 530" strokeWidth="11" />
              <path
                d="M421.6 -10 Q340 182 380.8 322.4 Q421.6 442 340 530"
                stroke="#C08A3E"
                strokeWidth="2"
                strokeDasharray="14 12"
              />
              <path d="M60 145.6 Q272 114.4 680 176.8" strokeWidth="5" />
              <path d="M40 343.2 Q306 312 680 364" strokeWidth="5" />
              <path d="M149.6 0 Q204 260 163.2 520" strokeWidth="4" />
            </g>
            <text x="52" y="44" className="fill-ink/35" fontSize="15" fontWeight="700" letterSpacing="2">
              SÃO JOSÉ
            </text>
            <text x="52" y="494" className="fill-ink/35" fontSize="15" fontWeight="700" letterSpacing="2">
              PALHOÇA
            </text>
            <text x="628" y="260" textAnchor="end" className="fill-[#5A8494]" fontSize="12" fontWeight="600" letterSpacing="1.5">
              BAÍA SUL
            </text>

            {/* Pins */}
            {PIN_COORDS.map((pin, i) => {
              const isSelected = selectedStoreId === pin.id;
              return (
                <g
                  key={pin.id}
                  className="cursor-pointer"
                  role="button"
                  tabIndex={0}
                  aria-label={`Kika ${pin.name}`}
                  onClick={() => setSelectedStoreId(pin.id)}
                >
                  <circle cx={pin.cx} cy={pin.cy} r="30" fill="transparent" />
                  <g
                    style={{
                      transform: `translate(${pin.cx}px, ${pin.cy}px) scale(${isSelected ? 1.18 : 1})`,
                      transformOrigin: 'center',
                      transition: 'transform 0.22s cubic-bezier(0.22,1,0.36,1)',
                    }}
                  >
                    <ellipse cx="0" cy="3" rx="11" ry="4" fill="#101014" opacity="0.18" />
                    <g className="fx-pin" style={{ '--fx-i': i } as React.CSSProperties}>
                      <path
                        d="M0-34c-8.6 0-15.5 7-15.5 15.6C-15.5-9 0 2-0 2s15.5-11 15.5-20.4C15.5-27 8.6-34 0-34Z"
                        fill={isSelected ? '#C08A3E' : '#121212'}
                        stroke="#fff"
                        strokeWidth="2.5"
                      />
                      <circle cx="0" cy="-19" r="5.4" fill="#fff" />
                    </g>
                  </g>
                  <text
                    x={pin.cx}
                    y={pin.cy + 22}
                    textAnchor="middle"
                    fontSize={isSelected ? '13' : '12'}
                    fontWeight="700"
                    className={isSelected ? 'fill-accent-strong' : 'fill-ink'}
                    style={{
                      paintOrder: 'stroke',
                      stroke: '#E9E4DB',
                      strokeWidth: 4,
                    }}
                  >
                    {pin.name}
                  </text>
                </g>
              );
            })}
          </svg>
          <p className="absolute bottom-2 right-3 text-[10.5px] text-ink/40">
            Mapa esquemático · posição aproximada dos bairros
          </p>
        </div>

        {/* Store List */}
        <div className="flex flex-col gap-2">
          <button
            type="button"
            onClick={() => setIsStoreModalOpen(true)}
            className="btn btn-primary tap w-full"
          >
            <Crosshair className="h-4 w-4" />
            Qual fica mais perto de mim?
          </button>

          <ul data-reveal-stagger="up" className="flex flex-1 flex-col gap-2">
            {stores.map((store) => {
              const isSelected = selectedStoreId === store.id;
              return (
                <li key={store.id} className="flex-1">
                  <button
                    type="button"
                    onClick={() => setSelectedStoreId(store.id)}
                    className={`flex h-full w-full items-center gap-3 rounded-[14px] px-3 py-2.5 text-left transition ${
                      isSelected
                        ? 'bg-primary text-white'
                        : 'bg-surface hover:bg-surface-2'
                    }`}
                  >
                    <span className="h-11 w-11 shrink-0 overflow-hidden rounded-[10px] bg-surface-2">
                      <img
                        src={store.photo || store.image || `/stores/${store.id.replace('loja-', 'loja-')}.webp`}
                        sizes="44px"
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover"
                      />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center gap-2">
                        <span className="truncate text-[14.5px] font-semibold">
                          {store.name}
                        </span>
                        {isSelected && (
                          <span className="pill bg-white/15 text-[10px] text-white">
                            Sua loja
                          </span>
                        )}
                      </span>
                      <span
                        className={`mt-0.5 flex items-center gap-1.5 truncate text-[12px] ${
                          isSelected ? 'text-white/65' : 'text-muted'
                        }`}
                      >
                        <span>{store.hoursSummary || 'Horário a confirmar'}</span>
                        <span>· {store.city || 'Palhoça'}</span>
                      </span>
                    </span>
                    <ArrowRight
                      className={`h-4 w-4 shrink-0 ${
                        isSelected ? 'text-white' : 'text-subtle'
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          <Link className="btn btn-quiet tap w-full" href="/lojas">
            Endereços e horários
            <ArrowRight className="h-[15px] w-[15px]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
