'use client';

import React from 'react';
import { useLanguage } from '@/app/language-provider';

function GenButton({
  className,
  isActive,
  handleClick,
  children,
}) {
  const commonClassName = 'flex items-center justify-center rounded-md px-2 py-1 h-7 min-w-10 md:min-w-11 md:max-w-11';

  if (isActive) {
    return (
      <div className={`${commonClassName} ${className} text-white`}>
        {children}
      </div>
    );
  }

  return (
    <button
      type="button"
      className={`bg-slate-200 hover:bg-slate-400/90 ${commonClassName}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

function GenGroup({
  gens,
  type,
  targetGen,
  setTargetGen,
}) {
  return (
    <div className="flex gap-x-2 flex-wrap gap-y-2 items-center">
      {gens.map((gen) => (
        <GenButton
          key={gen}
          className={type}
          handleClick={() => setTargetGen(gen)}
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
  );
}

export default function GenMoves({
  type,
  gens,
  targetGen,
  setTargetGen,
  children,
}) {
  const { language } = useLanguage();

  const localeOtherGenText = {
    ko: '다른 세대',
    en: 'In other generations',
  };

  // const gens = moves.map(({ gen }) => gen);

  // const [targetGen, setTargetGen] = useState(gens.at(-1));

  // const genMoves = moves.find(({ gen }) => gen === targetGen)?.genMoves;

  return (
    <>
      <div className="flex gap-x-1.5 items-center px-2 py-2.5 border-b">
        <div className="text-sm font-medium pr-2 text-nowrap">
          {localeOtherGenText[language]}
        </div>
        <GenGroup
          gens={gens}
          type={type}
          targetGen={targetGen}
          setTargetGen={setTargetGen}
        />
      </div>
      {children}
      {/* <VersionMoves
        key={targetGen}
        genMoves={genMoves}
        type={type}
      /> */}
    </>
  );
}
