import React from 'react';
import useLocalStorage from '@/app/hooks/useLocalStorage';
import { checkTextNumberType } from '@/app/lib/utils';
import { useLanguage } from '@/app/language-provider';
import SearchPoke from './poke';

export default function SearchResult({ searchText, result, closeModal }) {
  const { language } = useLanguage();
  const { localPokes } = useLocalStorage();

  const renderPokeItem = (poke) => (
    <div
      key={poke.key}
      className="h-[75px] xs:px-2 py-0.5"
    >
      <SearchPoke
        no={poke.no}
        name={poke.name}
        types={poke.types}
        form={poke.form}
        sprity={poke.sprity}
        id={poke.id}
        order={poke.order}
        closeModal={closeModal}
        pokeKey={poke.key}
      />
    </div>
  );

  const searchPokes = (
    <div className="grid grid-cols-1 divide-y gap-y-1">
      {!searchText
        ? localPokes.map(renderPokeItem)
        : result.map(renderPokeItem)}
    </div>
  );

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
    <div className="flex-1 flex flex-col overflow-y-auto">
      <div className="text-slate-500 flex-initial px-3 text-xs min-h-7 h-7 flex items-center font-medium">{h3Text}</div>
      <div className="flex-1">{searchPokes}</div>
    </div>
  );
}
