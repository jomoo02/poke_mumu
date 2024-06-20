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

const inputPlaceholderLanguageText = {
  ko: '도감 번호 또는 포켓몬 이름',
  en: 'Pokedex number or Pokemon name',
};

export default function Search() {
  const { inputText, handleChange } = useDebouncedInput();
  const { result } = usePokeSearch(inputText);

  const { language } = useLanguage();

  const inputPlaceholder = inputPlaceholderLanguageText[language]
    || inputPlaceholderLanguageText.ko;

  const router = useRouter();
  const closeModal = () => router.back();

  useEscKeyListener(closeModal);

  useLockBodyScroll();

  return (
    <div className="backdrop-blur-sm bg-gray-200/30 z-20 top-0 lg:top-20 left-0 absolute w-screen">
      <div className="lg:py-10">
        <div className="flex flex-col items-center h-screen lg:h-[500px]">
          <div className="h-full w-full lg:w-3/5">
            <div className="flex flex-col bg-white w-full h-full lg:rounded-xl lg:shadow-2xl lg:shadow-slate-400">
              <div className="min-h-9 h-9 w-full flex justify-center items-center border-b px-2 gap-x-0.5">
                <div className="flex items-center h-7 w-7 justify-center">
                  <SearchIcon size="1.45rem" />
                </div>
                <input
                  type="text"
                  onChange={handleChange}
                  placeholder={inputPlaceholder}
                  className="flex-1 py-1 text-base h-8 focus:outline-none px-2 font-medium"
                />
                <button onClick={closeModal} type="button" aria-label="Close" className="flex items-center h-7 w-7">
                  <CloseIcon size="1.75rem" />
                </button>
              </div>
              <div className="h-[calc(100dvh-2.3rem)] flex-1 overflow-hidden w-full flex">
                <SearchResult
                  searchText={inputText}
                  result={result}
                  closeModal={closeModal}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
