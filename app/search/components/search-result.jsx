import React from 'react';
import SearchPoke from './search-poke';
import {
  useSearchDescription,
  useSearchResult,
} from '../hooks/useSearchResult';

function SearchDescription({ inputText }) {
  const {
    isTextNumber,
    notInputText,
    normalCaseText,
    numberCaseText,
    language,
  } = useSearchDescription(inputText);

  if (!inputText) {
    return <div>{notInputText}</div>;
  }

  if (language === 'ko') {
    return (
      <div className="flex gap-x-1">
        <div className={`flex gap-x-1 ${isTextNumber && 'flex-row-reverse'}`}>
          <span className="text-slate-600 underline">
            {inputText}
          </span>
          <span>{isTextNumber ? numberCaseText : normalCaseText}</span>
        </div>
        <span>포켓몬</span>
      </div>
    );
  }

  return (
    <div className="flex gap-x-1">
      <span>{isTextNumber ? numberCaseText : normalCaseText}</span>
      <span className="text-slate-600 underline">{inputText}</span>
    </div>
  );
}

export default function SearchResult({ inputText, searchResult }) {
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
          <div key={poke.id} className="h-[75px] xs:px-2 py-0.5">
            <SearchPoke pokeInfo={poke} />
          </div>
        ))}
      </div>
    </>
  );
}
