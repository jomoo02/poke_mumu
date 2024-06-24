import React from 'react';
import useLocalStorage from '@/app/hooks/useLocalStorage';
import { useLanguage } from '@/app/language-provider';
import { checkTextNumberType } from '@/app/lib/utils';
import SearchPoke from './poke';

function SearchDescription({ inputText }) {
  const { language } = useLanguage();

  const isTextNumber = checkTextNumberType(inputText);

  if (!inputText) {
    return (
      <div>
        {language === 'ko' ? '최근 검색한 포켓몬' : 'Recently searched Pokemon'}
      </div>
    );
  }

  if (language === 'ko') {
    return (
      <div className="flex gap-x-1">
        <div className={`flex gap-x-1 ${isTextNumber && 'flex-row-reverse'}`}>
          <span className="text-slate-600 underline">
            {inputText}
          </span>
          <span>{isTextNumber ? '도감번호' : '(이)가 포함된'}</span>
        </div>
        <span>포켓몬</span>
      </div>
    );
  }

  return (
    <div className="flex gap-x-1">
      <span>{isTextNumber ? 'Pokedex is' : 'Pokemon containing'}</span>
      <span className="text-slate-600 underline">{inputText}</span>
    </div>
  );
}

export default function SearchResult({ inputText, result }) {
  const { localPokes } = useLocalStorage();

  return (
    <>
      <div className="text-slate-500 px-3 text-xs lg:text-sm min-h-7 h-7 flex items-center font-medium">
        <SearchDescription inputText={inputText} />
      </div>
      <div className="grid grid-cols-1 divide-y gap-y-1">
        {(!inputText ? localPokes : result).map((poke) => (
          <div key={poke.id} className="h-[75px] xs:px-2 py-0.5">
            <SearchPoke pokeInfo={poke} />
          </div>
        ))}
      </div>
    </>
  );
}
