import { Inter } from 'next/font/google';
import './styles/globals.css';
import './styles/type.css';
import React from 'react';
import { LanguageProvider } from './language-provider';
import Header from './components/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Poké MuMu',
  description: '포켓몬 도감',
};

export default function RootLayout({ children, modal }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <LanguageProvider>
          <Header />
          <div>
            {modal}
          </div>
          <main className="sm:px-8 md:px-10 py-6 min-h-svh xl:px-16">
            {children}
          </main>
          <div id="modal" />
          <footer className="h-32" />
        </LanguageProvider>
      </body>
    </html>
  );
}
