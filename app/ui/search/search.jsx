'use client';

import React from 'react';
import { useLanguage } from '@/app/language-provider';
import { useRouter } from 'next/navigation';
import useDebouncedInput from '@/app/hooks/useDebouncedInput';
import usePokeSearch from '@/app/hooks/usePokeSearch';
import useLockBodyScroll from '@/app/hooks/useLockBodyScroll';
import useEscKeyListener from '@/app/hooks/useEscKeyListener';
import CloseIcon from '@/app/ui/icons/close';
import SearchIcon from '@/app/ui/icons/search';
import SearchResult from '@/app/ui/search/result';

const placeholderLanguageText = {
  ko: '도감 번호 또는 포켓몬 이름',
  en: 'Pokedex number or Pokemon name',
};

function SearchInput({ handleChange, handleClickClose }) {
  const { language } = useLanguage();

  const placeholder = placeholderLanguageText[language]
    || placeholderLanguageText.ko;

  return (
    <div className="min-h-9 max-h-9 flex justify-center border-b px-2 gap-x-0.5 items-center">
      <SearchIcon size="1.45rem" />
      <input
        type="text"
        onChange={handleChange}
        placeholder={placeholder}
        className="flex-1 px-2 py-1 h-8 focus:outline-none font-medium"
      />
      <button
        type="button"
        onClick={handleClickClose}
        aria-label="Close"
        className=""
      >
        <CloseIcon size="1.75rem" />
      </button>
    </div>
  );
}

export default function Search() {
  const { inputText, handleChange } = useDebouncedInput();
  const { result } = usePokeSearch(inputText);

  const router = useRouter();
  const closeModal = () => router.back();

  useEscKeyListener(closeModal);

  useLockBodyScroll();

  return (
    <div className="flex flex-col bg-white h-full lg:border lg:border-zinc-400/80 lg:rounded-l-xl lg:rounded-tr-xl py-0.5 lg:shadow-lg">
      <SearchInput handleChange={handleChange} handleClickClose={closeModal} />
      <div className="h-[calc(100dvh-2.3rem)] flex-1 overflow-y-auto">
        <SearchResult
          inputText={inputText}
          result={result}
        />
      </div>
    </div>
  );
}
