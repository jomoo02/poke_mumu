import React, { useState } from 'react';
import { useLanguage } from '@/app/language-provider';
import sortMovesWithKey from '@/app/lib/move-sort';
import MethodHeader from '../method-header';
import Move from '../move';

const subTitleLanguageText = {
  en: 'moves learnt by level up',
  ko: '레벌 업으로 익히는 기술',
};

const defaultFirstRow = {
  key: 'level',
  width: 'w-14',
  text: 'Lv.',
};

function Moves({ moves, sortOrder }) {
  const { key, asc } = sortOrder;

  const { language } = useLanguage();

  const sortedMoves = sortMovesWithKey(moves, key, language, asc);

  return (
    <div className="grid divide-y border-b">
      {sortedMoves.map(({ level, move }) => (
        <Move key={`${move.name.en}-${level}`} move={move} language={language}>
          <div className="w-14 text-sm px-2 font-medium">{level}</div>
        </Move>
      ))}
    </div>
  );
}

export default function LevelUpMethodMoves({ moves }) {
  const { language } = useLanguage();

  const [sortOrder, setSortOrder] = useState({ key: 'level', asc: true });

  const subTitleText = subTitleLanguageText[language] || subTitleLanguageText.ko;

  const handleColumnHeaderClick = (key) => {
    const isAsc = sortOrder.key === key ? !sortOrder.asc : false;
    setSortOrder({ key, asc: isAsc });
  };

  return (
    <div className="overflow-hidden">
      <h3 className="capitalize font-bold text-slate-800 mb-2.5 text-lg">
        {subTitleText}
      </h3>
      <div className="flex">
        <div className="grid overflow-x-auto py-0.5">
          <MethodHeader
            onColumnHeaderClick={handleColumnHeaderClick}
            sortOrder={sortOrder}
            firstRow={defaultFirstRow}
          />
          <Moves moves={moves} sortOrder={sortOrder} />
        </div>
      </div>
    </div>
  );
}
