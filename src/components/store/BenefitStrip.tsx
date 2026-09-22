'use client';

import React from 'react';
import Link from 'next/link';
import { useData } from '@/context/DataContext';
import { MapPin, Clock, PackageCheck, MessageCircle } from 'lucide-react';

const BENEFIT_ICONS: Record<string, any> = {
  lojas: MapPin,
  relogio: Clock,
  estoque: PackageCheck,
  whatsapp: MessageCircle,
};

export function BenefitStrip({ className }: { className?: string }) {
  const { data } = useData();
  const { benefits, showBenefits } = data?.settings || {};

  if (!showBenefits || !benefits || benefits.length === 0) return null;

  return (
    <section className={`relative z-10 ${className ?? ''}`} aria-label="Por que comprar na Kika">
      <ul
        className="rail rail-bleed gap-2.5 md:grid md:gap-3 md:overflow-visible md:[grid-template-columns:repeat(var(--cols),minmax(0,1fr))]"
        style={{ '--cols': Math.min(benefits.length, 5) } as React.CSSProperties}
      >
        {benefits.map(({ id, icon, title, text, href }, o) => {
          const Icon = BENEFIT_ICONS[icon] ?? MapPin;
          return (
            <li
              key={id}
              className="fx-load-up w-[210px] md:w-auto"
              style={{ '--fx-i': o } as React.CSSProperties}
            >
              <Link
                href={href || '/'}
                className="flex h-full items-center gap-3 rounded-[14px] bg-surface px-3.5 py-3 transition hover:bg-surface-2"
              >
                <span className="icon-btn h-10 w-10 shrink-0 bg-accent-soft text-accent-strong">
                  <Icon size={18} />
                </span>
                <span className="min-w-0">
                  <span className="block text-[13.5px] font-semibold leading-tight">{title}</span>
                  <span className="block truncate text-[12px] text-muted">{text}</span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
