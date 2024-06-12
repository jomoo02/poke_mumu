import React, { useState, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { fetchSearchPokes } from '@/app/api/search';
import { useLanguage } from '@/app/language-provider';
import CloseIcon from '../icons/close';
import SearchIcon from '../icons/search';
import SearchResult from './result';

export default function Search({ closeModal }) {
  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const { language } = useLanguage();
  const htmlOverflowClass = 'overflow-y-hidden';

  const inputPlaceholder = language === 'ko' ? '도감 번호 또는 포켓몬 이름' : 'Pokedex number or Pokemon name';

  const handleSearch = useDebouncedCallback((e) => {
    setSearchText(e.target.value);
  }, 300);

  const fetchSearch = async () => {
    if (searchText) {
      const data = await fetchSearchPokes(searchText);
      setSearchResult(data);
    } else {
      setSearchResult([]);
    }
  };

  useEffect(() => {
    fetchSearch();
  }, [searchText]);

  useEffect(() => {
    const htmlTag = document.querySelector('body');
    htmlTag.classList.add(htmlOverflowClass);

    return () => {
      htmlTag.classList.remove(htmlOverflowClass);
    };
  }, []);

  useEffect(() => {
    const escKeyModalClose = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', escKeyModalClose);

    return () => {
      window.removeEventListener('keydown', escKeyModalClose);
    };
  }, []);

  return (
    <div className="backdrop-blur-sm bg-gray-200/30 z-20 fixed top-0 w-screen h-dvh">
      <div className="h-full lg:py-10">
        <div className="flex flex-col items-center h-dvh lg:h-[500px]">
          <div className="h-full w-full lg:w-3/5">
            <div className="flex flex-col bg-white w-full h-full lg:rounded-xl lg:shadow-2xl lg:shadow-slate-400">
              <div className="min-h-9 h-9 w-full flex justify-center items-center border-b px-2 gap-x-0.5">
                <div className="flex items-center h-7 w-7 justify-center">
                  <SearchIcon size="1.45rem" />
                </div>
                <input
                  type="text"
                  onChange={handleSearch}
                  placeholder={inputPlaceholder}
                  className="flex-1 py-1 text-base h-8 focus:outline-none px-2 font-medium"
                />
                <button onClick={closeModal} type="button" aria-label="Close" className="flex items-center h-7 w-7">
                  <CloseIcon size="1.75rem" />
                </button>
              </div>
              <div className="h-[calc(100dvh-2.3rem)] flex-1 overflow-hidden w-full flex">
                <SearchResult
                  searchText={searchText}
                  result={searchResult}
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
