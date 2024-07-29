'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/app/language-provider';
import TitleHeader from '../title-header';
import GenMoves from './gen-moves';

const titleLanguageText = {
  ko: '기술',
  en: 'move',
};

const otherGenLanguageText = {
  ko: '다른 세대',
  en: 'In other generations',
};

function GenButton({
  children,
  className,
  handleBtnClick,
  isActive,
}) {
  const commonClass = 'flex items-center justify-center rounded-md px-2 py-1 h-7 min-w-10 md:min-w-11 md:max-w-11';

  if (isActive) {
    return (
      <div className={`${commonClass} ${className} text-white`}>
        {children}
      </div>
    );
  }

  return (
    <button
      type="button"
      className={`bg-slate-200 hover:bg-slate-400/90 ${commonClass}`}
      onClick={handleBtnClick}
    >
      {children}
    </button>
  );
}

export default function Moves({ moves, type }) {
  const { language } = useLanguage();

  const gens = moves.map(({ gen }) => gen);

  const [targetGen, setTargetGen] = useState(gens.at(-1));

  const genMoves = moves.find(({ gen }) => gen === targetGen)?.genMoves;

  const title = titleLanguageText[language] || titleLanguageText.ko;

  const handleTargetGenClick = (gen) => {
    setTargetGen(gen);
  };

  return (
    <div className="overflow-hidden">
      <TitleHeader type={type} title={title} />
      <div className={`border-2 border-t-0 ${type}-border rounded-b-sm`}>
        <div className="flex gap-x-1.5 items-center px-2 py-2.5 border-b">
          <div className="text-sm font-medium pr-2 text-nowrap">
            {otherGenLanguageText[language]}
          </div>
          <div className="flex gap-x-2 flex-wrap gap-y-2 items-center">
            {gens.map((gen) => (
              <GenButton
                key={gen}
                className={type}
                handleBtnClick={() => handleTargetGenClick(gen)}
                isActive={gen === targetGen}
              >
                <span className="text-sm md:text-base font-medium text-slate-80">
                  {gen}
                </span>
                <span className="font-semibold text-[12px] leading-[24px]">
                  th
                </span>
              </GenButton>
            ))}
          </div>
        </div>
        <GenMoves
          type={type}
          genMoves={genMoves}
          key={targetGen}
        />
      </div>
    </div>
  );
}
