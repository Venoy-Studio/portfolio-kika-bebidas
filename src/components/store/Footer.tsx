'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useStore } from '@/context/StoreContext';

export function Footer() {
  const router = useRouter();
  const { setSelectedStoreId } = useStore();

  const handleSelectStore = (storeId: string) => {
    setSelectedStoreId(storeId);
    router.push('/produtos');
  };

  return (
    <footer className="mt-16 bg-primary text-white md:mt-24">
      <div className="shell py-12 md:py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.4fr)]">
          <div>
            <img
              src="/brand/kika-logo-instagram-150.webp"
              alt="Kika Bebidas"
              width={64}
              height={64}
              loading="lazy"
              decoding="async"
              className="block shrink-0 rounded-full bg-black"
              style={{ width: '64px', height: '64px' }}
            />
            <p className="mt-4 max-w-[34ch] text-[14px] leading-relaxed text-white/60">
              Tradição, qualidade e confiança. 5 lojas em Palhoça e São José — uma delas aberta 24 horas.
            </p>
            <a
              href="https://www.instagram.com/kikabebidas.demo/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-[13px] font-semibold transition hover:bg-white hover:text-primary"
            >
              @kikabebidas
            </a>
          </div>

          <div>
            <p className="eyebrow mb-5 text-accent">Nossas unidades</p>
            <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2 xl:grid-cols-3">
              <li>
                <p className="text-[15px] font-semibold">São Sebastião</p>
                <p className="mt-1 text-[13px] leading-snug text-white/55">
                  Rua Tomaz Domingos da Silveira, 3041<br />
                  Palhoça — SC
                </p>
                <p className="mt-1 text-[12.5px] text-white/45">Seg a Dom 10h - 02h</p>
                <div className="mt-2 flex gap-4 text-[12.5px] font-semibold">
                  <button
                    type="button"
                    onClick={() => handleSelectStore('loja-sao-sebastiao')}
                    className="text-accent transition hover:text-white"
                  >
                    Ver produtos
                  </button>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Rua%20Tomaz%20Domingos%20da%20Silveira%2C%203041%2C%20S%C3%A3o%20Sebasti%C3%A3o%2C%20Palho%C3%A7a%20-%20SC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 transition hover:text-white"
                  >
                    Como chegar
                  </a>
                </div>
              </li>

              <li>
                <p className="text-[15px] font-semibold">Jardim Eldorado</p>
                <p className="mt-1 text-[13px] leading-snug text-white/55">
                  Rua Pedro Álvares Cabral, 895<br />
                  Palhoça — SC
                </p>
                <p className="mt-1 text-[12.5px] text-white/45">Todos os dias 24 horas</p>
                <div className="mt-2 flex gap-4 text-[12.5px] font-semibold">
                  <button
                    type="button"
                    onClick={() => handleSelectStore('loja-jardim-eldorado')}
                    className="text-accent transition hover:text-white"
                  >
                    Ver produtos
                  </button>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Rua%20Pedro%20%C3%81lvares%20Cabral%2C%20895%2C%20Jardim%20Eldorado%2C%20Palho%C3%A7a%20-%20SC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 transition hover:text-white"
                  >
                    Como chegar
                  </a>
                </div>
              </li>

              <li>
                <p className="text-[15px] font-semibold">Brejaru</p>
                <p className="mt-1 text-[13px] leading-snug text-white/55">
                  Rua Padre José de Anchieta, 960<br />
                  Palhoça — SC
                </p>
                <p className="mt-1 text-[12.5px] text-white/45">Seg a Qui 10h - 00h · Sex a Sáb 10h - 04h · Dom 10h - 00h</p>
                <div className="mt-2 flex gap-4 text-[12.5px] font-semibold">
                  <button
                    type="button"
                    onClick={() => handleSelectStore('loja-brejaru')}
                    className="text-accent transition hover:text-white"
                  >
                    Ver produtos
                  </button>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Rua%20Padre%20Jos%C3%A9%20de%20Anchieta%2C%20960%2C%20Brejaru%2C%20Palho%C3%A7a%20-%20SC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 transition hover:text-white"
                  >
                    Como chegar
                  </a>
                </div>
              </li>

              <li>
                <p className="text-[15px] font-semibold">Sertão do Maruim</p>
                <p className="mt-1 text-[13px] leading-snug text-white/55">
                  Endereço a confirmar<br />
                  São José — SC
                </p>
                <p className="mt-1 text-[12.5px] text-white/45">Horário a confirmar</p>
                <div className="mt-2 flex gap-4 text-[12.5px] font-semibold">
                  <button
                    type="button"
                    onClick={() => handleSelectStore('loja-sertao-do-maruim')}
                    className="text-accent transition hover:text-white"
                  >
                    Ver produtos
                  </button>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Kika%20Bebidas%20Sert%C3%A3o%20do%20Maruim%2C%20S%C3%A3o%20Jos%C3%A9%20-%20SC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 transition hover:text-white"
                  >
                    Como chegar
                  </a>
                </div>
              </li>

              <li>
                <p className="text-[15px] font-semibold">Unidade 5</p>
                <p className="mt-1 text-[13px] leading-snug text-white/55">
                  Endereço a confirmar<br />
                  Palhoça ou São José — SC
                </p>
                <p className="mt-1 text-[12.5px] text-white/45">Horário a confirmar</p>
                <div className="mt-2 flex gap-4 text-[12.5px] font-semibold">
                  <button
                    type="button"
                    onClick={() => handleSelectStore('loja-unidade-5')}
                    className="text-accent transition hover:text-white"
                  >
                    Ver produtos
                  </button>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Kika%20Bebidas%20A%20confirmar%2C%20Palho%C3%A7a%20ou%20S%C3%A3o%20Jos%C3%A9%20-%20SC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 transition hover:text-white"
                  >
                    Como chegar
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-[12px] text-white/45 md:flex-row md:items-center md:justify-between">
          <p>Venda de bebida alcoólica proibida para menores de 18 anos. Se beber, não dirija.</p>
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            <Link className="hover:text-white" href="/produtos">
              Produtos
            </Link>
            <Link className="hover:text-white" href="/ofertas">
              Ofertas
            </Link>
            <Link className="hover:text-white" href="/combos">
              Combos
            </Link>
            <Link className="hover:text-white" href="/lojas">
              Lojas
            </Link>
            <Link className="hover:text-white" href="/admin">
              Painel do lojista
            </Link>
          </nav>
        </div>

        <p className="mt-5 text-[11px] leading-relaxed text-white/30">
          Protótipo de demonstração. Preços, ofertas, estoque e métricas são fictícios. Imagens de produtos e ambientes são provisórias (bases de licença livre) e serão substituídas pelos arquivos oficiais.
        </p>
      </div>
    </footer>
  );
}
