import React from 'react';
import { ITEM_KO, TRADE_ITEM_KO, HELD_ITEM_KO } from '@/app/translations/item';
import { makeFirstUpperCaseTextArray } from '@/app/lib/utils';

export default function ItemCase({ value, language }) {
  const allItem = { ...ITEM_KO, ...TRADE_ITEM_KO, ...HELD_ITEM_KO };
  const itemText = language === 'ko' ? allItem[value] : makeFirstUpperCaseTextArray(value.split('-'));

  return (
    <div className="flex justify-center items-center text-sm">
      {itemText}
    </div>
  );
}
