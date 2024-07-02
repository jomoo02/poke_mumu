import React from 'react';
import Link from 'next/link';
import SearchIcon from '@/app/ui/icons/search';
import ThemeToggleButton from './theme-toggle-button';

export default function Header() {
  return (
    <header className="z-30 top-0 sticky">
      <div
        className="flex bg-orange-400 h-16 justify-between items-center px-2.5 xs:px-6 sm:px-8 md:px-12"
      >
        <h2 className="text-white text-xl font-black">
          <Link href="/">
            Poke MuMu
          </Link>
        </h2>
        <div className="flex gap-x-2 xs:gap-x-6 items-center h-11">
          <Link href="/search" scroll={false}>
            <SearchIcon size="1.8rem" color="#fff" />
          </Link>
          <ThemeToggleButton />
        </div>
      </div>
    </header>
  );
}
