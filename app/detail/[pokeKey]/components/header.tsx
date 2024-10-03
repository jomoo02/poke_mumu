'use client';

import React from 'react';
import useHeader from '../hooks/useHeader';
import { PokeTypeType } from '../types/defense-compatibility.type';
import { HeaderKeyType } from '../data/header.typs';

export default function Header({
  type,
  headerKey,
}: {
  type: PokeTypeType,
  headerKey: HeaderKeyType,
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
