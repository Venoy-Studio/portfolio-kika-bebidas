import React from 'react';
import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import '@/styles/globals.css';
import { DataProvider } from '@/context/DataContext';
import { StoreProvider } from '@/context/StoreContext';
import { CartProvider } from '@/context/CartContext';
import { StoreModal } from '@/components/store/StoreModal';
import { CartDrawer } from '@/components/store/CartDrawer';
import { MobileBottomNav } from '@/components/store/MobileBottomNav';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kika Bebidas — tem uma Kika perto de você',
  description:
    '5 lojas em Palhoça e São José. Veja ofertas, combos e o que está disponível agora na unidade mais perto de você.',
  icons: {
    icon: '/brand/kika-logo-instagram-150.webp',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${montserrat.variable} ${inter.className} min-h-dvh bg-background antialiased flex flex-col`}>
        <DataProvider>
          <StoreProvider>
            <CartProvider>
              {children}
              <MobileBottomNav />
              <StoreModal />
              <CartDrawer />
            </CartProvider>
          </StoreProvider>
        </DataProvider>
      </body>
    </html>
  );
}
