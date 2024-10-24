import React from 'react';
import SearchdPoke from './search-poke';
import {
  useSearchResultDescription,
  useSearchResult,
} from '../hooks/useSearchResult';
import { SearchPoke } from '../types/search';

function SearchDescription({ inputText }: { inputText: string }) {
  const {
    language,
    isInputTextNumber,
    descriptions,
  } = useSearchResultDescription(inputText);

  const {
    notInput,
    pokeName,
    pokeNo,
  } = descriptions;

  if (!inputText) {
    return <div>{notInput}</div>;
  }

  if (language === 'ko') {
    return (
      <div className="flex gap-x-1">
        <div className={`flex gap-x-1 ${isInputTextNumber && 'flex-row-reverse'}`}>
          <span className="text-slate-600 underline">
            {inputText}
          </span>
          <span>{isInputTextNumber ? pokeNo : pokeName}</span>
        </div>
        <span>포켓몬</span>
      </div>
    );
  }

  return (
    <div className="flex gap-x-1">
      <span>{isInputTextNumber ? pokeNo : pokeName}</span>
      <span className="text-slate-600 underline">{inputText}</span>
    </div>
  );
}

export default function SearchResult({ inputText, searchResult }: {
  inputText: string,
  searchResult: SearchPoke[],
}) {
  const {
    resultPokes,
  } = useSearchResult(inputText, searchResult);

  return (
    <>
      <div className="text-slate-500 px-3 text-xs lg:text-sm min-h-7 h-7 flex items-center font-medium">
        <SearchDescription inputText={inputText} />
      </div>
      <div className="grid grid-cols-1 divide-y gap-y-1">
        {resultPokes.map((poke) => (
          <div key={poke.order} className="h-[75px] xs:px-2 py-0.5">
            <SearchdPoke pokeInfo={poke} />
          </div>
        ))}
      </div>
    </>
  );
}
