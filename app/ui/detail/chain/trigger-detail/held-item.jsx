import React from 'react';
import { ITEM_KO, TRADE_ITEM_KO, HELD_ITEM_KO } from '@/app/translations/item';
import { makeFirstUpperCaseTextArray, getKoreanParticle } from '@/app/lib/utils';

export default function HeldItemCase({ item, language }) {
  const allItem = { ...ITEM_KO, ...TRADE_ITEM_KO, ...HELD_ITEM_KO };
  const itemText = language === 'ko' ? allItem[item] : makeFirstUpperCaseTextArray(item.split('-'));
  const text = language === 'ko' ? `${itemText}${getKoreanParticle(itemText)}지닌채` : `holding ${itemText}`;

  return (
    <div className="flex justify-center items-center text-sm">
      {text}
    </div>
  );
}
