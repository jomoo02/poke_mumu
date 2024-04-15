import React from 'react';
import SearchPoke from './poke';
import useLocalStorage from '@/app/hooks/useLocalStorage';
import { checkTextNumberType } from '@/app/lib/utils';
import { useLanguage } from '@/app/language-provider';

export default function SearchResult({ searchText, result }) {
  const { language } = useLanguage();
  const { localPokes, savePokeLocal } = useLocalStorage();

  const handleClick = (poke) => {
    savePokeLocal(poke);
  };

  const handleKeyDown = (e, poke) => {
    if (e.key === 'Enter') {
      savePokeLocal(poke);
    }
  };

  const renderPokeItem = (poke) => (
    <div
      key={poke.key}
      className="h-[80px] py-1 first:h-[79px] border-t"
      onClick={() => handleClick(poke)}
      onKeyDown={(e) => handleKeyDown(e, poke)}
      tabIndex={0}
      role="button"
      aria-label="button"
    >
      <SearchPoke
        no={poke.no}
        name={poke.name}
        types={poke.types}
        form={poke.form}
        sprity={poke.sprity}
      />
    </div>
  );

  const searchPokes = !searchText
    ? localPokes.map(renderPokeItem)
    : result.map(renderPokeItem);

  const isTextNumber = checkTextNumberType(searchText);

  const h3TextKo = !searchText ? '최근 검색한 포켓몬' : (
    <div className="flex gap-x-1">
      <div className={`flex gap-x-1 ${isTextNumber ? 'flex-row-reverse' : ''}`}>
        <span className="text-slate-600">
          {isTextNumber ? `${searchText}` : `${searchText}`}
        </span>
        <span>{isTextNumber ? '도감번호' : '(이)가 포함된' }</span>
      </div>
      <span>포켓몬</span>
    </div>
  );

  const h3TextEn = !searchText ? 'Recently searched Pokemon' : (
    <div className="flex gap-x-1">
      <div className="flex gap-x-1">
        <span>{isTextNumber ? 'Pokedex is' : 'Pokemon containing' }</span>
        <span className="text-slate-600">
          {isTextNumber ? `${searchText}` : `${searchText}`}
        </span>
      </div>
    </div>
  );

  const h3Text = language === 'ko' ? h3TextKo : h3TextEn;

  return (
    <div className="bg-white border rounded-b-md z-10">
      <h3 className="text-slate-500 px-2 text-xs h-7 flex items-center font-medium">{h3Text}</h3>
      <div className="">{searchPokes}</div>
    </div>
  );
}
