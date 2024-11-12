'use client';

import React from 'react';
import CloseIcon from '@/app/components/icons/close';
import SearchIcon from '@/app/components/icons/search';
import {
  useSearch,
  useSearchPlaceholder,
} from '../hooks/useSearch';
import SearchResult from './search-result';

function SearchInput({
  inputTextOnChange,
  closeSearch,
}: {
  inputTextOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  closeSearch: () => void,
}) {
  const { placeholderText } = useSearchPlaceholder();

  const handleInputTextOnChange = (e: React.ChangeEvent<HTMLInputElement>) => inputTextOnChange(e);

  const handleCloseOnClick = () => closeSearch();

  return (
    <div className="min-h-9 max-h-9 flex justify-center border-b px-2 gap-x-0.5 items-center">
      <SearchIcon size="1.45rem" />
      <input
        type="text"
        onChange={handleInputTextOnChange}
        placeholder={placeholderText}
        className="flex-1 px-2 py-1 h-8 focus:outline-none font-medium"
      />
      <button
        type="button"
        onClick={handleCloseOnClick}
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
    inputTextOnChange,
    searchResult,
  } = useSearch();

  return (
    <div className="flex flex-col bg-white h-full lg:border lg:border-zinc-400/80 lg:rounded-l-xl lg:rounded-tr-xl py-0.5 lg:shadow-lg">
      <SearchInput
        inputTextOnChange={inputTextOnChange}
        closeSearch={closeSearch}
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
