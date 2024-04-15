'use client';

import React, { useState, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { createPortal } from 'react-dom';
import { fetchSearchPokes } from '@/app/api/search';
import SearchResult from './result';
import { useLanguage } from '@/app/language-provider';

export default function SearchMobile() {
  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showModal, setShowModal] = useState(false);
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

  useEffect(() => {
    fetchSearch();
  }, [searchText]);

  return (
    <div className="bg-blue-200">
      <button onClick={() => setShowModal(true)} type="button">
        show
      </button>
      {showModal && createPortal(
        <div className="absolute top-0 justify-center items-center w-full bg-blue-400 z-20">
          <button onClick={() => setShowModal(false)} type="button">bttn</button>
          <input
            type="text"
            onChange={handleSearch}
            placeholder={inputPlaceholder}
            className="w-full rounded-md px-2 py-0.5 text-sm h-8 focus:outline-none border"
          />
          <div className="flex flex-col w-full">
            <SearchResult searchText={searchText} result={searchResult} />
          </div>
        </div>,
        document.body,
      )}

    </div>
  );
}
