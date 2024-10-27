'use client';

import React from 'react';
import CloseIcon from '@/app/components/icons/close';
import SearchIcon from '@/app/components/icons/search';
import {
  usePokeSearch,
  useSearchPlaceholder,
}
  from '../hooks/usePokeSearch';
import SearchResult from './search-result';

function SearchInput({
  handleInputTextChange,
  handleCloseClick,
}: {
  handleInputTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  handleCloseClick: () => void,
}) {
  const { placeholderText } = useSearchPlaceholder();

  return (
    <div className="min-h-9 max-h-9 flex justify-center border-b px-2 gap-x-0.5 items-center">
      <SearchIcon size="1.45rem" />
      <input
        type="text"
        onChange={handleInputTextChange}
        placeholder={placeholderText}
        className="flex-1 px-2 py-1 h-8 focus:outline-none font-medium"
      />
      <button
        type="button"
        onClick={handleCloseClick}
        aria-label="Close"
        className=""
      >
        <CloseIcon size="1.75rem" />
      </button>
    </div>
  );
}

export default function Search() {
  const {
    inputText,
    closeSearch,
    handleInputTextChange,
    searchResult,
  } = usePokeSearch();

  return (
    <div className="flex flex-col bg-white h-full lg:border lg:border-zinc-400/80 lg:rounded-l-xl lg:rounded-tr-xl py-0.5 lg:shadow-lg">
      <SearchInput
        handleInputTextChange={handleInputTextChange}
        handleCloseClick={closeSearch}
      />
      <div className="h-[calc(100dvh-2.3rem)] flex-1 overflow-y-auto">
        <SearchResult
          inputText={inputText}
          searchResult={searchResult}
        />
      </div>
    </div>
  );
}
