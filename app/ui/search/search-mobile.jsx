'use client';

import React, { useState, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { fetchSearchPokes } from '@/app/api/search';
import SearchResult from './result';
import { useLanguage } from '@/app/language-provider';

export default function SearchMobile({ closeModal }) {
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

  return (
    <div className="backdrop-blur-sm bg-gray-200/30 z-20 fixed top-0 w-screen h-dvh">
      <div className="lg:py-10">
        <div className="flex flex-col items-center h-dvh lg:h-[500px]">
          <div className="h-full w-full lg:w-3/5 ">
            <div className="flex flex-col bg-white w-full h-full">
              <div className="h-9 flex w-full">
                <input
                  type="text"
                  onChange={handleSearch}
                  placeholder={inputPlaceholder}
                  className="w-full rounded-md px-2 py-0.5 text-sm h-8 focus:outline-none border"
                />
                <button onClick={closeModal} type="button">
                  close
                </button>
              </div>
              <div className="h-[calc(100dvh-2.3rem)] lg:h-full w-full flex">
                <SearchResult searchText={searchText} result={searchResult} />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
