'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BannerSlide {
  id: string;
  href: string;
  alt: string;
  desktopSrc: string;
  desktopSrcSet?: string;
  mobileSrc: string;
  mobileSrcSet?: string;
}

const HERO_SLIDES: BannerSlide[] = [
  {
    id: 'hero-cervejas',
    href: '/produto/heineken-long-neck-330ml',
    alt: 'Oferta da semana: cerveja gelada com preço de caixa. Heineken long neck por R$ 5,99 na caixa fechada com 12.',
    desktopSrc: '/banners/arte-cerveja-gelada-desktop.webp',
    desktopSrcSet: '/banners/arte-cerveja-gelada-desktop-1280.webp 1280w, /banners/arte-cerveja-gelada-desktop.webp 2000w',
    mobileSrc: '/banners/arte-cerveja-gelada-mobile.webp',
    mobileSrcSet: '/banners/arte-cerveja-gelada-mobile-720.webp 720w, /banners/arte-cerveja-gelada-mobile.webp 1060w',
  },
  {
    id: 'hero-24h',
    href: '/lojas',
    alt: 'Unidade Jardim Eldorado, Palhoça: aberto 24 horas. A qualquer hora, tem Kika aberta.',
    desktopSrc: '/banners/arte-aberto-24h-desktop.webp',
    desktopSrcSet: '/banners/arte-aberto-24h-desktop-1280.webp 1280w, /banners/arte-aberto-24h-desktop.webp 2000w',
    mobileSrc: '/banners/arte-aberto-24h-mobile.webp',
    mobileSrcSet: '/banners/arte-aberto-24h-mobile-720.webp 720w, /banners/arte-aberto-24h-mobile.webp 1060w',
  },
  {
    id: 'hero-churrasco',
    href: '/combos',
    alt: 'Combo churrasco: cerveja, gelo e carvão num pedido só. Kit montado e conferido na sua Kika.',
    desktopSrc: '/banners/arte-churrasco-desktop.webp',
    desktopSrcSet: '/banners/arte-churrasco-desktop-1280.webp 1280w, /banners/arte-churrasco-desktop.webp 2000w',
    mobileSrc: '/banners/arte-churrasco-mobile.webp',
    mobileSrcSet: '/banners/arte-churrasco-mobile-720.webp 720w, /banners/arte-churrasco-mobile.webp 1060w',
  },
  {
    id: 'hero-destilados',
    href: '/produtos?ocasiao=destilados',
    alt: 'Destilados: Tanqueray por R$ 109,90. E mais rótulos de whisky, gin e vodka com desconto.',
    desktopSrc: '/banners/arte-tanqueray-desktop.webp',
    desktopSrcSet: '/banners/arte-tanqueray-desktop-1280.webp 1280w, /banners/arte-tanqueray-desktop.webp 2000w',
    mobileSrc: '/banners/arte-tanqueray-mobile.webp',
    mobileSrcSet: '/banners/arte-tanqueray-mobile-720.webp 720w, /banners/arte-tanqueray-mobile.webp 1060w',
  },
];

export function HeroCarousel() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToSlide = useCallback((index: number) => {
    if (!containerRef.current) return;
    const width = containerRef.current.clientWidth;
    containerRef.current.scrollTo({
      left: width * index,
      behavior: 'smooth',
    });
    setCurrentIdx(index);
  }, []);

  const handleNext = useCallback(() => {
    const nextIndex = (currentIdx + 1) % HERO_SLIDES.length;
    scrollToSlide(nextIndex);
  }, [currentIdx, scrollToSlide]);

  const handlePrev = useCallback(() => {
    const prevIndex = (currentIdx - 1 + HERO_SLIDES.length) % HERO_SLIDES.length;
    scrollToSlide(prevIndex);
  }, [currentIdx, scrollToSlide]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollLeft = containerRef.current.scrollLeft;
      const width = containerRef.current.clientWidth;
      if (width > 0) {
        const newIdx = Math.round(scrollLeft / width);
        if (newIdx !== currentIdx && newIdx >= 0 && newIdx < HERO_SLIDES.length) {
          setCurrentIdx(newIdx);
        }
      }
    };

    const el = containerRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll, { passive: true });
      return () => el.removeEventListener('scroll', handleScroll);
    }
  }, [currentIdx]);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <section
      aria-roledescription="carrossel"
      aria-label="Campanhas em destaque"
      data-parallax="hero"
      className="group/hero relative"
    >
      <div
        ref={containerRef}
        className="fx-hero-in no-scrollbar flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain rounded-[18px] bg-primary"
      >
        {HERO_SLIDES.map((slide, i) => (
          <div
            key={slide.id}
            className="w-full shrink-0 snap-center"
            aria-roledescription="slide"
            aria-label={`${i + 1} de ${HERO_SLIDES.length}`}
          >
            <Link
              className="group/banner block h-full focus-visible:outline-offset-[-4px]"
              aria-label={slide.alt}
              draggable={false}
              href={slide.href}
            >
              <div
                className="relative block h-full w-full overflow-hidden aspect-[3/2] md:aspect-[2000/680]"
                style={{ backgroundColor: '#141210' }}
              >
                <div className="fx-layer absolute inset-0">
                  <picture>
                    <source
                      media="(min-width: 768px)"
                      srcSet={slide.desktopSrcSet || slide.desktopSrc}
                      sizes="(min-width: 1280px) 1216px, 100vw"
                    />
                    <img
                      src={slide.mobileSrc}
                      srcSet={slide.mobileSrcSet}
                      sizes="100vw"
                      alt={slide.alt}
                      loading={i === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                      draggable={false}
                      className="w-full object-cover transition-transform duration-700 ease-out group-hover/banner:scale-[1.03] absolute inset-0 h-full"
                    />
                  </picture>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="pointer-events-none mt-2.5 flex justify-center md:absolute md:inset-x-0 md:bottom-4 md:mt-0">
        <div className="pointer-events-auto flex items-center gap-1.5 md:rounded-full md:bg-black/25 md:px-2 md:py-1.5 md:backdrop-blur-sm">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToSlide(i)}
              aria-label={`Ir para campanha ${i + 1}`}
              aria-current={i === currentIdx ? 'true' : 'false'}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentIdx
                  ? 'w-5 bg-primary md:bg-white'
                  : 'w-1.5 bg-black/20 hover:bg-black/40 md:bg-white/50 md:hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Prev / Next Arrows */}
      <div className="absolute bottom-3 right-4 hidden gap-2 opacity-0 transition group-hover/hero:opacity-100 focus-within:opacity-100 md:flex">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Campanha anterior"
          className="icon-btn h-10 w-10 bg-white/90 text-primary shadow-card hover:bg-white"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={handleNext}
          aria-label="Próxima campanha"
          className="icon-btn h-10 w-10 bg-white/90 text-primary shadow-card hover:bg-white"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
