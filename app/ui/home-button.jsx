'use client';

import React from 'react';
import useScrollRestoration from '@/app/hooks/useScrollRestoration';
import Link from 'next/link';

export default function HomeButton() {
  const { removeScrollPosition } = useScrollRestoration();

  return (
    <div className="text-white text-xl font-black">
      <Link href="/" onClick={removeScrollPosition}>
        Poke MuMu
      </Link>
    </div>
  );
}
