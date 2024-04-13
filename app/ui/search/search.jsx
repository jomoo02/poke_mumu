'use client';

import React, { useState, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { fetchSearchPokes } from '@/app/api/search';
import SearchResult from './result';
import { useLanguage } from '@/app/language-provider';

export default function Search() {
  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const { language } = useLanguage();

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

  const onClickEvent = (e) => {
    if (!e.target.closest('.search')) {
      setIsFocused(false);
    }
  };

  useEffect(() => {
    fetchSearch();
  }, [searchText]);

  useEffect(() => {
    window.addEventListener('click', onClickEvent);
    console.log('hello');

    return (() => {
      window.removeEventListener('click', onClickEvent);
    });
  }, []);

  return (
    <div className="relative flex justify-center items-center search w-full">
      <input
        type="text"
        onChange={handleSearch}
        onFocus={() => setIsFocused(true)}
        placeholder={inputPlaceholder}
        className={`w-full rounded-md px-2 py-0.5 text-sm h-8 focus:outline-none border ${isFocused ? 'rounded-b-none border-b-0' : ''}`}
      />
      {isFocused
        ? (
          <div className="flex flex-col absolute top-8 w-full">
            <SearchResult searchText={searchText} result={searchResult} />
          </div>
        )
        : null}
    </div>
  );
}
