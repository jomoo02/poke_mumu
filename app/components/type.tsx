'use client';

import React from 'react';
import { useLanguage } from '@/app/language-provider';
import typesKo from '@/app/translations/type';

export type TypeItem =
  'normal'
  | 'fire'
  | 'water'
  | 'grass'
  | 'electric'
  | 'ice'
  | 'fighting'
  | 'poison'
  | 'ground'
  | 'flying'
  | 'psychic'
  | 'bug'
  | 'rock'
  | 'ghost'
  | 'dragon'
  | 'dark'
  | 'steel'
  | 'fairy';

export default function Type({
  type,
  width = 'w-[60px] xs:w-[63px]',
}: {
  type: TypeItem,
  width?: string,
}) {
  const { language } = useLanguage();

  const typeText = language === 'ko' ? typesKo[type] : type;

  return (
    <div
      className={
        `${width} leading-[22px] xs:leading-[23px] px-px font-medium text-sm text-center
        rounded-[5px] border border-zinc-700/80 text-white ${type} type-text capitalize`
      }
    >
      {typeText}
    </div>
  );
}
