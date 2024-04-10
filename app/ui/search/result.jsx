import React from 'react';
import SearchPoke from './poke';
import useLocalStorage from '@/app/hooks/useLocalStorage';

export default function SearchResult({ result }) {
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
      className="h-[50px]"
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

  const searchPokes = result.length === 0
    ? localPokes.map(renderPokeItem)
    : result.map(renderPokeItem);

  return (
    <div className="bg-white max-h-[250px] overflow-auto border rounded-b-md">
      <h3 className="text-slate-500 px-2 text-sm h-6">최근 검색한 포켓몬</h3>
      <div>{searchPokes}</div>
    </div>
  );
}
