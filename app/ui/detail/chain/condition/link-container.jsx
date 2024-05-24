import React from 'react';
import Link from 'next/link';
import { MOVE_KO } from '@/app/translations/move';
import { makeFirstUpperCaseTextArray, getKoreanParticle } from '@/app/lib/utils';
import { ALL_ITEM_KO, ITEM_EN } from '@/app/translations/item';

export function MoveLink({ move, language }) {
  if (language === 'ko') {
    const moveKo = MOVE_KO[move];
    return (
      <span>
        <Link href={`move/${move}`} className="underline">{moveKo}</Link>
        <span>{getKoreanParticle(moveKo)}</span>
      </span>
    );
  }
  return (
    <span>
      <Link href={`move/${move}`}>{makeFirstUpperCaseTextArray(move.split('-'))}</Link>
    </span>
  );
}

export function ItemLink({ item, language, children }) {
  const itemKo = ALL_ITEM_KO[item];
  const itemEn = ITEM_EN[item] || item;
  const itemText = language === 'ko' ? itemKo : makeFirstUpperCaseTextArray(itemEn.split('-'));

  return (
    <span>
      <Link href={`item/${item}`} className="underline">{itemText}</Link>
      {children}
    </span>
  );
}

export function ItmeLinkWithParticle({ item, language }) {
  const particle = language === 'ko' ? getKoreanParticle(ALL_ITEM_KO[item]) : '';

  if (particle) {
    return (
      <ItemLink item={item} language={language}>
        <span>{particle}</span>
      </ItemLink>
    );
  }
  return <ItemLink item={item} language={language} />;
}
