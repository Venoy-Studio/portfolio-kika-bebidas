'use client';

import React from 'react';
import Link from 'next/link';
import {
  Wallet,
  ShoppingCart,
  Eye,
  Store,
  ArrowUpRight,
  ArrowDownRight,
  Search,
} from 'lucide-react';

const REVENUE_DATA = [
  { date: '02/09', amount: 'R$ 4.189,00', orders: 47, height: 41, isWeekend: false },
  { date: '03/09', amount: 'R$ 3.924,00', orders: 44, height: 38, isWeekend: false },
  { date: '04/09', amount: 'R$ 4.667,00', orders: 52, height: 46, isWeekend: false },
  { date: '05/09', amount: 'R$ 8.123,00', orders: 91, height: 80, isWeekend: true },
  { date: '06/09', amount: 'R$ 9.476,00', orders: 108, height: 93, isWeekend: true },
  { date: '07/09', amount: 'R$ 7.012,00', orders: 79, height: 69, isWeekend: true },
  { date: '08/09', amount: 'R$ 3.885,00', orders: 43, height: 38, isWeekend: false },
  { date: '09/09', amount: 'R$ 4.041,00', orders: 46, height: 40, isWeekend: false },
  { date: '10/09', amount: 'R$ 4.418,00', orders: 49, height: 43, isWeekend: false },
  { date: '11/09', amount: 'R$ 4.893,00', orders: 55, height: 48, isWeekend: false },
  { date: '12/09', amount: 'R$ 8.764,00', orders: 97, height: 86, isWeekend: true },
  { date: '13/09', amount: 'R$ 10.127,00', orders: 114, height: 100, isWeekend: true },
  { date: '14/09', amount: 'R$ 7.389,00', orders: 83, height: 73, isWeekend: true },
  { date: '15/09', amount: 'R$ 4.126,00', orders: 46, height: 41, isWeekend: false },
];

const STORE_PERFORMANCE = [
  { name: 'Jardim Eldorado', orders: 312, revenue: 'R$ 27.845,00', percent: '14.2%', positive: true, barWidth: '100%' },
  { name: 'São Sebastião', orders: 271, revenue: 'R$ 23.189,00', percent: '9.6%', positive: true, barWidth: '83%' },
  { name: 'Brejaru', orders: 154, revenue: 'R$ 12.043,00', percent: '3.1%', positive: false, barWidth: '43%' },
  { name: 'Sertão do Maruim', orders: 118, revenue: 'R$ 9.127,00', percent: '6.8%', positive: true, barWidth: '33%' },
  { name: 'Unidade 5', orders: 79, revenue: 'R$ 5.482,00', percent: '2.4%', positive: true, barWidth: '20%' },
];

const TOP_PRODUCTS = [
  { name: 'Heineken Long Neck', views: '3.241', cart: '894', store: 'Jardim Eldorado' },
  { name: 'Gelo em Cubos', views: '2.876', cart: '1.142', store: 'São Sebastião' },
  { name: 'Eisenbahn Pilsen Lata', views: '2.654', cart: '812', store: 'Brejaru' },
  { name: 'Coca-Cola Original', views: '2.198', cart: '776', store: 'Jardim Eldorado' },
  { name: 'Tanqueray London Dry', views: '1.943', cart: '421', store: 'Jardim Eldorado' },
  { name: 'Red Bull Energy Drink', views: '1.811', cart: '598', store: 'São Sebastião' },
  { name: 'Johnnie Walker Red Label', views: '1.687', cart: '356', store: 'São Sebastião' },
  { name: 'Amstel Lager Lata', views: '1.522', cart: '645', store: 'Unidade 5' },
];

const COMBOS_STATS = [
  { name: 'Combo Churrasco', views: '2.412', orders: 187, conversion: '7.8%' },
  { name: 'Combo Festa', views: '1.688', orders: 121, conversion: '7.2%' },
  { name: 'Combo Esquenta', views: '1.394', orders: 98, conversion: '7.0%' },
  { name: 'Combo Gin Tônica', views: '1.102', orders: 74, conversion: '6.7%' },
  { name: 'Combo Whisky', views: '876', orders: 52, conversion: '5.9%' },
  { name: 'Combo Gelada', views: '741', orders: 63, conversion: '8.5%' },
];

const LOST_SEARCHES = [
  { query: 'vinho do porto', store: 'Jardim Eldorado', count: '84 buscas' },
  { query: 'espeto de carne', store: 'São Sebastião', count: '61 buscas' },
  { query: 'whisky japonês', store: 'Jardim Eldorado', count: '47 buscas' },
  { query: 'cerveja sem glúten', store: 'Brejaru', count: '38 buscas' },
  { query: 'carvão de coco', store: 'Unidade 5', count: '29 buscas' },
];

export default function AdminOverviewPage() {
  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-[24px] font-bold leading-tight tracking-[-0.025em] text-foreground">
            Visão geral
          </h1>
          <p className="mt-1 max-w-[70ch] text-[13.5px] leading-snug text-ink-muted">
            Últimos 14 dias · dados simulados para demonstração. Em produção, alimentados pelo PDV e pelo analytics do site.
          </p>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {/* Metric 1 */}
        <div className="border border-line bg-surface p-4 rounded-xl shadow-sm">
          <div className="flex items-start justify-between">
            <p className="eyebrow text-ink-muted">Vendas pelo site</p>
            <Wallet className="h-4 w-4 text-ink-muted" />
          </div>
          <p className="mt-2.5 text-[26px] font-bold leading-none tracking-[-0.02em] text-foreground">
            R$ 85.034,00
          </p>
          <div className="mt-2 flex items-center gap-2 text-[12px]">
            <span className="inline-flex items-center gap-0.5 font-semibold tabular-nums text-ok">
              <ArrowUpRight className="h-3.5 w-3.5" />
              11.4%
            </span>
          </div>
        </div>

        {/* Metric 2 */}
        <div className="border border-line bg-surface p-4 rounded-xl shadow-sm">
          <div className="flex items-start justify-between">
            <p className="eyebrow text-ink-muted">Pedidos</p>
            <ShoppingCart className="h-4 w-4 text-ink-muted" />
          </div>
          <p className="mt-2.5 text-[26px] font-bold leading-none tracking-[-0.02em] text-foreground">
            954
          </p>
          <div className="mt-2 flex items-center gap-2 text-[12px]">
            <span className="inline-flex items-center gap-0.5 font-semibold tabular-nums text-ok">
              <ArrowUpRight className="h-3.5 w-3.5" />
              8.7%
            </span>
            <span className="text-ink-muted">Ticket médio R$ 89,13</span>
          </div>
        </div>

        {/* Metric 3 */}
        <div className="border border-line bg-surface p-4 rounded-xl shadow-sm">
          <div className="flex items-start justify-between">
            <p className="eyebrow text-ink-muted">Acessos</p>
            <Eye className="h-4 w-4 text-ink-muted" />
          </div>
          <p className="mt-2.5 text-[26px] font-bold leading-none tracking-[-0.02em] text-foreground">
            12.522
          </p>
          <div className="mt-2 flex items-center gap-2 text-[12px]">
            <span className="inline-flex items-center gap-0.5 font-semibold tabular-nums text-ok">
              <ArrowUpRight className="h-3.5 w-3.5" />
              16.2%
            </span>
            <span className="text-ink-muted">Conversão 7.6%</span>
          </div>
        </div>

        {/* Metric 4 */}
        <div className="border border-line bg-surface p-4 rounded-xl shadow-sm">
          <div className="flex items-start justify-between">
            <p className="eyebrow text-ink-muted">Unidade mais acessada</p>
            <Store className="h-4 w-4 text-ink-muted" />
          </div>
          <p className="mt-2.5 text-[26px] font-bold leading-none tracking-[-0.02em] text-foreground">
            Jardim Eldorado
          </p>
          <div className="mt-2 flex items-center gap-2 text-[12px]">
            <span className="inline-flex items-center gap-0.5 font-semibold tabular-nums text-ok">
              <ArrowUpRight className="h-3.5 w-3.5" />
              14.2%
            </span>
            <span className="text-ink-muted">4.182 acessos</span>
          </div>
        </div>
      </div>

      {/* Revenue Chart Section */}
      <section className="overflow-hidden rounded-[14px] border border-line bg-surface shadow-sm">
        <header className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-4 py-3">
          <div>
            <h2 className="text-[14.5px] font-bold text-foreground">Faturamento por dia</h2>
            <p className="mt-0.5 text-[12.5px] text-ink-muted">
              Sexta e sábado concentram o movimento — informação direta para programar campanha.
            </p>
          </div>
        </header>
        <div className="p-4">
          <div className="flex h-[168px] items-end gap-1.5 pt-6">
            {REVENUE_DATA.map((day, idx) => (
              <div key={idx} className="group relative flex flex-1 flex-col items-center gap-1.5 h-full justify-end">
                {/* Tooltip */}
                <div className="pointer-events-none absolute -top-8 left-1/2 z-20 hidden -translate-x-1/2 whitespace-nowrap rounded bg-ink px-2 py-1 text-[11px] font-semibold text-white shadow group-hover:block">
                  {day.amount} · {day.orders} pedidos
                </div>
                {/* Bar */}
                <div
                  className={`w-full rounded-t transition-colors ${
                    day.isWeekend ? 'bg-kika hover:bg-sale/90' : 'bg-ink/80 hover:bg-ink'
                  }`}
                  style={{ height: `${day.height}%` }}
                />
                <span className="text-[10px] tabular-nums text-ink-muted">{day.date}</span>
              </div>
            ))}
          </div>

          <div className="mt-3 flex items-center gap-4 text-[12px] text-ink-muted border-t border-line pt-3">
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-sm bg-kika" /> Sexta a domingo
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-sm bg-ink/80" /> Demais dias
            </span>
          </div>
        </div>
      </section>

      {/* Store Performance & Top Products Grid */}
      <div className="grid gap-4 xl:grid-cols-2">
        {/* Performance by store */}
        <section className="overflow-hidden rounded-[14px] border border-line bg-surface shadow-sm">
          <header className="border-b border-line px-4 py-3">
            <h2 className="text-[14.5px] font-bold text-foreground">Desempenho por unidade</h2>
            <p className="mt-0.5 text-[12.5px] text-ink-muted">Acessos, pedidos e receita no período.</p>
          </header>
          <div className="p-4">
            <div className="space-y-3.5">
              {STORE_PERFORMANCE.map((store) => (
                <div key={store.name}>
                  <div className="mb-1.5 flex items-baseline justify-between gap-3">
                    <span className="text-[13.5px] font-semibold text-foreground">{store.name}</span>
                    <div className="flex items-baseline gap-2 text-[12.5px]">
                      <span className="tabular-nums text-ink-muted">{store.orders} pedidos</span>
                      <span className="font-bold tabular-nums text-foreground">{store.revenue}</span>
                      <span
                        className={`inline-flex items-center gap-0.5 font-semibold tabular-nums ${
                          store.positive ? 'text-ok' : 'text-kika'
                        }`}
                      >
                        {store.positive ? (
                          <ArrowUpRight className="h-3 w-3" />
                        ) : (
                          <ArrowDownRight className="h-3 w-3" />
                        )}
                        {store.percent}
                      </span>
                    </div>
                  </div>
                  <div className="h-2 w-full rounded-full bg-surface-sunken overflow-hidden">
                    <div
                      className="h-full bg-ink rounded-full"
                      style={{ width: store.barWidth }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top products table */}
        <section className="overflow-hidden rounded-[14px] border border-line bg-surface shadow-sm">
          <header className="border-b border-line px-4 py-3">
            <h2 className="text-[14.5px] font-bold text-foreground">Produtos mais acessados</h2>
            <p className="mt-0.5 text-[12.5px] text-ink-muted">O que as pessoas procuram — nem sempre é o que mais vende.</p>
          </header>
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="border-b border-line text-left text-[11.5px] uppercase tracking-[0.06em] text-ink-muted">
                  <th className="px-4 py-2 font-semibold">Produto</th>
                  <th className="px-2 py-2 text-right font-semibold">Views</th>
                  <th className="px-2 py-2 text-right font-semibold">Carrinho</th>
                  <th className="px-4 py-2 text-right font-semibold">Unidade</th>
                </tr>
              </thead>
              <tbody>
                {TOP_PRODUCTS.map((prod, idx) => (
                  <tr key={idx} className="border-b border-line last:border-b-0 hover:bg-surface-2/40">
                    <td className="max-w-[190px] truncate px-4 py-2.5 font-medium text-foreground">
                      {prod.name}
                    </td>
                    <td className="px-2 py-2.5 text-right tabular-nums text-foreground">{prod.views}</td>
                    <td className="px-2 py-2.5 text-right tabular-nums text-ok font-semibold">{prod.cart}</td>
                    <td className="px-4 py-2.5 text-right text-ink-muted">{prod.store}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {/* Combos & Lost Searches Grid */}
      <div className="grid gap-4 xl:grid-cols-2">
        {/* Combos table */}
        <section className="overflow-hidden rounded-[14px] border border-line bg-surface shadow-sm">
          <header className="border-b border-line px-4 py-3">
            <h2 className="text-[14.5px] font-bold text-foreground">Combos</h2>
            <p className="mt-0.5 text-[12.5px] text-ink-muted">Kits são o maior ticket médio da vitrine.</p>
          </header>
          <div className="p-4 space-y-2.5">
            {COMBOS_STATS.map((combo, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between gap-3 border-b border-line pb-2.5 last:border-b-0 last:pb-0 text-xs"
              >
                <span className="min-w-0 flex-1 truncate text-[13.5px] font-medium text-foreground">
                  {combo.name}
                </span>
                <span className="shrink-0 tabular-nums text-ink-muted">{combo.views} views</span>
                <span className="w-20 shrink-0 text-right font-bold tabular-nums text-foreground">
                  {combo.orders} pedidos
                </span>
                <span className="w-12 shrink-0 text-right font-semibold tabular-nums text-ok">
                  {combo.conversion}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Lost Searches */}
        <section className="overflow-hidden rounded-[14px] border border-line bg-surface shadow-sm">
          <header className="border-b border-line px-4 py-3">
            <h2 className="text-[14.5px] font-bold text-foreground">Buscaram e a rede não tinha</h2>
            <p className="mt-0.5 text-[12.5px] text-ink-muted">
              Demanda perdida. Cada linha é uma decisão de compra para o próximo pedido ao fornecedor.
            </p>
          </header>
          <div className="p-4">
            <ul className="space-y-2.5">
              {LOST_SEARCHES.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-between gap-3 border-b border-line pb-2.5 last:border-b-0 last:pb-0"
                >
                  <span className="flex min-w-0 items-center gap-2">
                    <Search className="h-3.5 w-3.5 shrink-0 text-ink-muted" />
                    <span className="truncate text-[13.5px] font-medium text-foreground">
                      “{item.query}”
                    </span>
                  </span>
                  <span className="flex shrink-0 items-center gap-3">
                    <span className="text-[12.5px] text-ink-muted">{item.store}</span>
                    <span className="pill bg-warn-soft text-warn font-semibold text-[11px]">
                      {item.count}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      {/* CTA card */}
      <section className="overflow-hidden rounded-[14px] border border-line bg-surface shadow-sm p-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-[14px] font-bold text-foreground">Quer ver o efeito na vitrine?</p>
            <p className="mt-1 max-w-[62ch] text-[13px] leading-snug text-ink-muted">
              Altere o estoque de um produto em uma unidade e abra a loja: o card muda na hora, e o cliente passa a ver em qual Kika o item está disponível.
            </p>
          </div>
          <div className="flex gap-2">
            <Link className="btn btn-ink text-xs font-semibold" href="/admin/estoque">
              Editar estoque
            </Link>
            <Link className="btn btn-outline text-xs font-semibold" href="/">
              Abrir a loja
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
