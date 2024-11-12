'use client';

import React from 'react';
import type { Type } from '@/app/data/pokeType';
import useHeader from '../hooks/useHeader';
import type { HeaderKey } from '../data/header';

export default function Header({
  type,
  headerKey,
}: {
  type: Type,
  headerKey: HeaderKey,
}) {
  const { headerContent } = useHeader(headerKey);

  return (
    <div className={`${type} rounded-t-md`}>
      <h2 className="text-white text-center font-semibold py-[3px] md:py-1.5 text-sm capitalize">
        {headerContent}
      </h2>
    </div>
  );
}
