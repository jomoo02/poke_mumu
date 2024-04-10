'use client';

import React, { useState, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { fetchSearchPokes } from '../../api/data';
import SearchResult from './result';

export default function Search() {
  const [searhText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = useDebouncedCallback((e) => {
    setSearchText(e.target.value);
  }, 300);

  const fetchSearch = async () => {
    if (searhText) {
      const data = await fetchSearchPokes(searhText);
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
  }, [searhText]);

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
        placeholder="도감 번호 또는 포켓몬 이름"
        className={`w-full rounded-md px-2 py-0.5 text-sm h-8 focus:outline-none border ${isFocused ? 'rounded-b-none border-b-0' : ''}`}
      />
      {isFocused
        ? (
          <div className="flex flex-col absolute top-8 w-full">
            <SearchResult result={searchResult} />
          </div>
        )
        : null}
    </div>
  );
}
