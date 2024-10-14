'use client';

import React from 'react';
import { useLanguage } from '@/app/language-provider';
import typesKo from '@/app/translations/type';
import { PokeTypeItem } from '../data/pokeType';

interface PokeTypeProps {
  type: PokeTypeItem;
  width?: string;
}

export default function PokeType({
  type,
  width = 'w-[60px] xs:w-[63px]',
}: PokeTypeProps) {
  const { language } = useLanguage();

  const localeType = language === 'ko' ? typesKo[type] : type;

  return (
    <div
      className={
        `${width} leading-[22px] xs:leading-[23px] px-px font-medium text-sm text-center rounded-[5px] border border-zinc-700/80 text-white ${type} type-text capitalize`
      }
    >
      {localeType}
    </div>
  );
}
