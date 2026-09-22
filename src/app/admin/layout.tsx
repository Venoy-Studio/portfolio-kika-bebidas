'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useData } from '@/context/DataContext';
import {
  LayoutDashboard,
  Wine,
  Boxes,
  Image as ImageIcon,
  Tag,
  Package,
  Store,
  RotateCcw,
  ArrowLeft,
} from 'lucide-react';

const ADMIN_NAV = [
  { href: '/admin', label: 'Visão geral', icon: LayoutDashboard },
  { href: '/admin/produtos', label: 'Produtos', icon: Wine },
  { href: '/admin/estoque', label: 'Estoque por loja', icon: Boxes },
  { href: '/admin/banners', label: 'Banners', icon: ImageIcon },
  { href: '/admin/promocoes', label: 'Promoções', icon: Tag },
  { href: '/admin/combos', label: 'Combos', icon: Package },
  { href: '/admin/lojas', label: 'Lojas', icon: Store },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { resetDataset } = useData();

  const handleReset = () => {
    if (confirm('Deseja realmente restaurar todos os dados para o padrão de demonstração?')) {
      resetDataset();
      alert('Dados restaurados com sucesso!');
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-surface-sunken lg:flex-row">
      {/* Desktop Sidebar */}
      <aside className="hidden w-[232px] shrink-0 flex-col border-r border-line bg-ink lg:flex">
        <div className="border-b border-white/10 px-5 py-5">
          <img
            src="/brand/kika-logo-instagram-150.webp"
            alt="Kika Bebidas"
            width={44}
            height={44}
            className="block shrink-0 rounded-full bg-black"
          />
          <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">
            Painel do lojista
          </p>
        </div>

        <nav className="flex-1 p-3">
          <ul className="space-y-0.5">
            {ADMIN_NAV.map((item) => {
              const Icon = item.icon;
              const isActive =
                item.href === '/admin'
                  ? pathname === '/admin'
                  : pathname.startsWith(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-[13.5px] font-medium transition ${
                      isActive
                        ? 'bg-white/10 font-semibold text-white'
                        : 'text-white/55 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="space-y-1 border-t border-white/10 p-3">
          <button
            type="button"
            onClick={handleReset}
            className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-[13px] text-white/50 transition hover:bg-white/5 hover:text-white"
          >
            <RotateCcw className="h-4 w-4" />
            Restaurar demonstração
          </button>
          <Link
            href="/"
            className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-[13px] text-white/50 transition hover:bg-white/5 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para a loja
          </Link>
        </div>
      </aside>

      {/* Mobile Topbar */}
      <header className="sticky top-0 z-40 border-b border-line bg-ink lg:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2.5">
            <img
              src="/brand/kika-logo-instagram-150.webp"
              alt="Kika Bebidas"
              width={32}
              height={32}
              className="block shrink-0 rounded-full bg-black"
            />
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/40">
              Painel
            </span>
          </div>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={handleReset}
              aria-label="Restaurar demonstração"
              className="tap flex items-center justify-center p-2 text-white/50 hover:text-white"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
            <Link
              href="/"
              className="tap flex items-center gap-1.5 px-2 text-[12.5px] text-white/70 hover:text-white"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Loja
            </Link>
          </div>
        </div>

        <nav className="rail no-scrollbar gap-0 px-2 pb-1">
          {ADMIN_NAV.map((item) => {
            const Icon = item.icon;
            const isActive =
              item.href === '/admin'
                ? pathname === '/admin'
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex shrink-0 items-center gap-2 border-b-2 px-3 py-2 text-[13px] font-medium transition whitespace-nowrap ${
                  isActive
                    ? 'border-gold font-semibold text-white'
                    : 'border-transparent text-white/50 hover:text-white'
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </header>

      {/* Main Admin Content Area */}
      <main className="min-w-0 flex-1">
        {/* Demonstration Notice */}
        <div className="border-b border-gold/40 bg-gold/15 px-4 py-2 text-[12px] text-ink-soft lg:px-8">
          <strong className="font-bold">Demonstração.</strong> Sem login e sem servidor — as alterações ficam salvas apenas neste navegador e já aparecem na vitrine.
        </div>

        <div className="p-4 pb-16 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
