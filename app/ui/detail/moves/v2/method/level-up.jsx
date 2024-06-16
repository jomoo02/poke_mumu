import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/app/language-provider';
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

const defaultSortOrder = { key: 'level', asc: true };

const sortMoves = (moves) => [...moves].sort((a, b) => a.level - b.level);

export default function LevelUpMethodMoves({ moves }) {
  const { language } = useLanguage();
  const [sortedMoves, setSortedMoves] = useState(sortMoves(moves));
  const [sortOrder, setSortOrder] = useState({ ...defaultSortOrder });

  const subTitleText = subTitleLanguageText[language];

  const handleSortMoves = (key) => {
    const isAsc = sortOrder.key === key ? !sortOrder.asc : false;
    setSortOrder({ key, asc: isAsc });

    setSortedMoves((beforeMoves) => {
      if (key === 'level') {
        const levelSortedMoves = sortMoves(beforeMoves);
        return isAsc ? levelSortedMoves : levelSortedMoves.reverse();
      }

      return [...beforeMoves].sort((a, b) => {
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
      });
    });
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
            firstRow={defaultFirstRow}
          />
          <div className="grid divide-y border-b">
            {sortedMoves.map(({ level, move }) => (
              <Move key={`${move.name.en}-${level}`} move={move} language={language}>
                <div className="w-14 text-sm px-2">{level}</div>
              </Move>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
