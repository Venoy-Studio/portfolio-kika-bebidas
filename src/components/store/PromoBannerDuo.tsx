'use client';

import React from 'react';
import Link from 'next/link';

export function PromoBannerDuo({ className = 'mt-10 md:mt-14' }: { className?: string }) {
  return (
    <section className={className} aria-label="Campanhas">
      <div className="rail rail-bleed md:grid md:grid-cols-2 md:gap-4 md:overflow-visible md:[scroll-snap-type:none]">
        {/* Banner 1: Combo gin tônica */}
        <div data-parallax="rise" className="w-[86%] overflow-hidden rounded-[16px] sm:w-[70%] md:w-auto">
          <Link
            className="group/banner block h-full focus-visible:outline-offset-[-4px]"
            aria-label="Combo gin tônica: gin, tônica e gelo em um pedido só."
            draggable={false}
            href="/combos"
          >
            <div
              className="relative block h-full w-full overflow-hidden aspect-[1080/760] md:aspect-[2/1]"
              style={{ backgroundColor: '#141210' }}
            >
              <div className="fx-layer absolute inset-0">
                <picture>
                  <source
                    media="(min-width: 768px)"
                    srcSet="/banners/arte-combo-gin-desktop-800.webp 800w, /banners/arte-combo-gin-desktop.webp 1600w"
                    sizes="(min-width: 1280px) 600px, 50vw"
                  />
                  <img
                    src="/banners/arte-combo-gin-mobile.webp"
                    srcSet="/banners/arte-combo-gin-mobile-720.webp 720w, /banners/arte-combo-gin-mobile.webp 1080w"
                    sizes="86vw"
                    alt="Combo gin tônica: gin, tônica e gelo em um pedido só."
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className="w-full object-cover transition-transform duration-700 ease-out group-hover/banner:scale-[1.03] absolute inset-0 h-full"
                  />
                </picture>
              </div>
            </div>
          </Link>
        </div>

        {/* Banner 2: Monster leve 3 pague 2 */}
        <div data-parallax="rise" className="w-[86%] overflow-hidden rounded-[16px] sm:w-[70%] md:w-auto">
          <Link
            className="group/banner block h-full focus-visible:outline-offset-[-4px]"
            aria-label="Esquenta: Monster leve 3 pague 2."
            draggable={false}
            href="/produto/monster-energy-473ml"
          >
            <div
              className="relative block h-full w-full overflow-hidden aspect-[1080/760] md:aspect-[2/1]"
              style={{ backgroundColor: '#141210' }}
            >
              <div className="fx-layer absolute inset-0">
                <picture>
                  <source
                    media="(min-width: 768px)"
                    srcSet="/banners/arte-monster-desktop-800.webp 800w, /banners/arte-monster-desktop.webp 1600w"
                    sizes="(min-width: 1280px) 600px, 50vw"
                  />
                  <img
                    src="/banners/arte-monster-mobile.webp"
                    srcSet="/banners/arte-monster-mobile-720.webp 720w, /banners/arte-monster-mobile.webp 1080w"
                    sizes="86vw"
                    alt="Esquenta: Monster leve 3 pague 2."
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className="w-full object-cover transition-transform duration-700 ease-out group-hover/banner:scale-[1.03] absolute inset-0 h-full"
                  />
                </picture>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
