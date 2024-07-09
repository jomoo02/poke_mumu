'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollTop() {
  const pathname = usePathname();

  useEffect(() => {
    const pathnamePiece = pathname.split('/');

    if (pathnamePiece[1] === 'detail' || pathname === '/') {
      window.scrollTo({ top: 0 });
    }
  }, [pathname]);

  return <div />;
}
