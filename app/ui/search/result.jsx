import React from 'react';
import SearchPoke from './poke';
import useLocalStorage from '@/app/hooks/useLocalStorage';
import { checkTextNumberType } from '@/app/lib/utils';

export default function SearchResult({ searchText, result }) {
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
      className="h-[50px] py-1 first:pt-0.5 first:h-[48px]"
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

  const h3Text = !searchText ? '최근 검색한 포켓몬' : (
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

  return (
    <div className="bg-white max-h-[250px] overflow-auto border rounded-b-md">
      <h3 className="text-slate-500 px-2 text-sm h-6 flex items-center">{h3Text}</h3>
      <div className="grid grid-cols-1 divide-y">{searchPokes}</div>
    </div>
  );
}
