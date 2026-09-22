'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function useCarousel() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [state, setState] = useState({
    canPrev: false,
    canNext: false,
  });

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setState({
      canPrev: el.scrollLeft > 8,
      canNext: el.scrollLeft < maxScroll - 8,
    });
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    update();
    el.addEventListener('scroll', update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      el.removeEventListener('scroll', update);
      ro.disconnect();
    };
  }, [update]);

  const scrollBy = useCallback((direction: number) => {
    const el = ref.current;
    if (el) {
      el.scrollBy({
        left: direction * Math.max(280, 0.82 * el.clientWidth),
        behavior: 'smooth',
      });
    }
  }, []);

  return {
    ref,
    ...state,
    scrollBy,
  };
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  href,
  hrefLabel = 'Ver tudo',
  tone = 'dark',
  controls,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  href?: string;
  hrefLabel?: string;
  tone?: 'dark' | 'light';
  controls?: React.ReactNode;
  className?: string;
}) {
  const isLight = tone === 'light';
  return (
    <div
      data-reveal="title"
      className={cn('mb-4 flex items-end justify-between gap-4 md:mb-5', className)}
    >
      <div className="min-w-0">
        {eyebrow && (
          <p className={cn('eyebrow mb-1', isLight ? 'text-accent' : 'text-accent-strong')}>
            {eyebrow}
          </p>
        )}
        <h2
          className={cn(
            'font-display text-[20px] leading-[1.15] md:text-[26px]',
            isLight ? 'text-white' : 'text-foreground'
          )}
        >
          <span className="fx-mask">
            <span className="fx-line">{title}</span>
          </span>
        </h2>
        {description && (
          <p
            className={cn(
              'fx-desc mt-1 max-w-[62ch] text-[13px] leading-snug md:text-[14px]',
              isLight ? 'text-white/60' : 'text-muted'
            )}
          >
            {description}
          </p>
        )}
      </div>
      <div className="flex shrink-0 items-center gap-2">
        {controls}
        {href && (
          <Link
            href={href}
            className={cn(
              'group inline-flex items-center gap-1 whitespace-nowrap text-[13px] font-semibold transition',
              isLight ? 'text-white hover:text-accent' : 'text-foreground hover:text-accent-strong'
            )}
          >
            {hrefLabel}
            <ArrowRight size={15} className="transition group-hover:translate-x-0.5" />
          </Link>
        )}
      </div>
    </div>
  );
}

export function CarouselSection({
  eyebrow,
  title,
  description,
  href,
  hrefLabel = 'Ver tudo',
  tone = 'dark',
  children,
  className,
  railClassName,
  id,
  stagger = 'up',
  parallax,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  href?: string;
  hrefLabel?: string;
  tone?: 'dark' | 'light';
  children: React.ReactNode;
  className?: string;
  railClassName?: string;
  id?: string;
  stagger?: string | false;
  parallax?: string;
}) {
  const { ref, canPrev, canNext, scrollBy } = useCarousel();
  const isLight = tone === 'light';

  const renderArrow = (dir: -1 | 1, enabled: boolean) => (
    <button
      type="button"
      onClick={() => scrollBy(dir)}
      disabled={!enabled}
      aria-label={dir === 1 ? 'Avançar' : 'Voltar'}
      className={cn(
        'icon-btn hidden h-9 w-9 border md:inline-flex',
        isLight
          ? 'border-white/20 text-white enabled:hover:bg-white enabled:hover:text-primary'
          : 'border-border-strong bg-surface text-foreground enabled:hover:border-primary enabled:hover:bg-primary enabled:hover:text-white',
        'disabled:opacity-30'
      )}
    >
      {dir === 1 ? <ChevronRight size={17} /> : <ChevronLeft size={17} />}
    </button>
  );

  return (
    <section id={id} className={className}>
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
        href={href}
        hrefLabel={hrefLabel}
        tone={tone}
        controls={
          (canPrev || canNext) && (
            <div className="mr-1 flex gap-1.5">
              {renderArrow(-1, canPrev)}
              {renderArrow(1, canNext)}
            </div>
          )
        }
      />
      <div
        ref={ref}
        data-reveal-stagger={stagger || undefined}
        data-parallax={parallax}
        className={cn('rail rail-bleed pb-1', railClassName)}
      >
        {children}
      </div>
    </section>
  );
}
