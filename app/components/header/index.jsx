import React from 'react';
import Link from 'next/link';
import SearchIcon from '@/app/components/icons/search';
import ThemeToggleButton from './theme-toggle-button';
import HomeButton from './home-button';

export default function Header() {
  return (
    <header className="z-[100] top-0 sticky flex bg-orange-400 h-14 justify-between items-center px-2.5 xs:px-6 sm:px-8 md:px-12">
      <HomeButton />
      <div className="flex gap-x-2 xs:gap-x-6 items-center h-11">
        <Link
          href="/search"
          scroll={false}
          aria-label="poke-search"
        >
          <SearchIcon
            size="1.8rem"
            color="#fff"
          />
        </Link>
        <ThemeToggleButton />
      </div>
    </header>
  );
}
