import React, { useState } from 'react';
import { useLanguage } from '@/app/language-provider';
import sortMovesWithKey from '@/app/lib/move-sort';
import MethodHeader from '../method-header';
import Move from '../move';

const subTitleLanguageText = {
  en: 'move Tutor moves',
  ko: 'NPC로부터 배울 수 있는 기술',
};

function SortMoves({ moves, sortOrder }) {
  const { key, asc } = sortOrder;

  const { language } = useLanguage();

  const sortedMoves = sortMovesWithKey(moves, key, language, asc);

  return (
    <div className="grid divide-y border-b">
      {sortedMoves.map(({ move }) => (
        <Move key={move.name.en} move={move} language={language} />
      ))}
    </div>
  );
}

export default function LevelUpMethodMoves({ moves }) {
  const { language } = useLanguage();
  const [sortOrder, setSortOrder] = useState({ key: 'move', asc: true });

  const subTitleText = subTitleLanguageText[language] || subTitleLanguageText.ko;

  const handleColumnHeaderClick = (key) => {
    const isAsc = sortOrder.key === key ? !sortOrder.asc : false;
    setSortOrder({ key, asc: isAsc });
  };

  return (
    <div className="overflow-hidden">
      <h3 className="capitalize font-bold text-slate-800 mb-2.5 text-lg min-w-[600px]">
        {subTitleText}
      </h3>
      <div className="flex">
        <div className="grid overflow-x-auto py-0.5">
          <MethodHeader
            onColumnHeaderClick={handleColumnHeaderClick}
            sortOrder={sortOrder}
          />
          <SortMoves moves={moves} sortOrder={sortOrder} />
        </div>
      </div>
    </div>
  );
}
