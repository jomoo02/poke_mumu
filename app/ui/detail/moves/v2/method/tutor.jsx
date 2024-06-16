import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/app/language-provider';
import MethodHeader from '../method-header';
import Move from '../move';

const subTitleLanguageText = {
  en: 'move Tutor moves',
  ko: 'NPC로부터 배울 수 있는 기술',
};

const defaultSortOrder = { key: 'name', asc: true };

const sortMoves = (moves) => [...moves].sort((a, b) => a.move.type.localeCompare(b.move.type));

export default function LevelUpMethodMoves({ moves }) {
  const { language } = useLanguage();
  const [sortedMoves, setSortedMoves] = useState(sortMoves(moves));
  const [sortOrder, setSortOrder] = useState({ ...defaultSortOrder });

  const subTitleText = subTitleLanguageText[language];

  const handleSortMoves = (key) => {
    const isAsc = sortOrder.key === key ? !sortOrder.asc : false;
    setSortOrder({ key, asc: isAsc });

    setSortedMoves((beforeMoves) => [...beforeMoves].sort((a, b) => {
      if (key === 'name') {
        return isAsc
          ? a.move.name[language].localeCompare(b.move.name[language])
          : b.move.name[language].localeCompare(a.move.name[language]);
      } if (['type', 'damage_class'].includes(key)) {
        return isAsc
          ? a.move[key].localeCompare(b.move[key])
          : b.move[key].localeCompare(a.move[key]);
      }
      return isAsc ? a.move[key] - b.move[key] : b.move[key] - a.move[key];
    }));
  };

  useEffect(() => {
    setSortedMoves(sortMoves(moves));
    setSortOrder({ ...defaultSortOrder });
  }, [moves]);

  return (
    <div className="overflow-hidden">
      <h3 className="capitalize">{subTitleText}</h3>
      <div className="flex justify-center xl:justify-start">
        <div className="grid overflow-x-auto py-0.5">
          <MethodHeader
            onSort={handleSortMoves}
            sortOrder={sortOrder}
          />
          <div className="grid divide-y border-b">
            {sortedMoves.map(({ move }) => (
              <Move key={move.name.en} move={move} language={language} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
