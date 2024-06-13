import React from 'react';
import { useLanguage } from '@/app/language-provider';
import MethodHeader from '../method-header';
import Move from '../move';

export default function LevelUpMethodMoves({ moves }) {
  const { language } = useLanguage();

  if (moves.length === 0) {
    return null;
  }

  const subTitleLanguageText = {
    en: 'move Tutor moves',
    ko: 'NPC로부터 배울 수 있는 기술',
  };

  const subTitleText = subTitleLanguageText[language];
  const sortedMoves = [...moves].sort((a, b) => a.move.type.localeCompare(b.move.type));

  return (
    <div className="overflow-hidden">
      <h3 className="capitalize">{subTitleText}</h3>
      <div className="flex justify-center xl:justify-start">
        <div className="grid overflow-x-auto py-0.5">
          <MethodHeader language={language} />
          <div>
            {sortedMoves.map(({ move }) => (
              <Move key={move.name.en} move={move} language={language} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
