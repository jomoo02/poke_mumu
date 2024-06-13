import React, { useState } from 'react';
import { useLanguage } from '@/app/language-provider';
import MethodHeader from '../method-header';
import Move from '../move';

export default function LevelUpMethodMoves({ moves }) {
  const { language } = useLanguage();
  const [sortedMoves, setSortedMoves] = useState(
    [...moves].sort((a, b) => a.level - b.level),
  );
  const [sortOrder, setSortOrder] = useState({ key: 'level', asc: true });

  if (moves.length === 0) {
    return null;
  }

  const subTitleLanguageText = {
    en: 'moves learnt by level up',
    ko: '레벌 업으로 익히는 기술',
  };

  const subTitleText = subTitleLanguageText[language];

  const sortMoves = (key) => {
    const isAsc = sortOrder.key === key ? !sortOrder.asc : false;
    setSortOrder({ key, asc: isAsc });

    const nextMoves = [...sortedMoves].sort((a, b) => {
      if (key === 'level') {
        return isAsc ? a.level - b.level : b.level - a.level;
      } if (key === 'name') {
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

    setSortedMoves(nextMoves);
  };

  return (
    <div className="overflow-hidden">
      <h3 className="capitalize">{subTitleText}</h3>
      <div className="flex justify-center xl:justify-start">
        <div className="grid overflow-x-auto py-0.5">
          <MethodHeader language={language} onSort={sortMoves}>
            <button
              className="w-10 text-sm"
              type="button"
              onClick={() => sortMoves('level')}
            >
              Lv.
            </button>
          </MethodHeader>
          <div>
            {sortedMoves.map(({ level, move }) => (
              <Move key={`${move.name.en}-${level}`} move={move} language={language}>
                <div className="w-10 text-sm">{level}</div>
              </Move>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
