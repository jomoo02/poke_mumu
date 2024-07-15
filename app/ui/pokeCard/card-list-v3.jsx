'use client';

import React, { useEffect } from 'react';
import { VirtuosoGrid } from 'react-virtuoso';
import Card from './card';

export default function CardListV3({ initialData }) {
  useEffect(() => {
    const sessionInfo = sessionStorage.getItem('pos2');

    if (sessionInfo) {
      const { scroll } = JSON.parse(sessionInfo);

      setTimeout(() => {
        window.scrollTo({ top: scroll });
      }, 300);

      sessionStorage.removeItem('pos2');
    }
  }, []);

  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.setItem('pos2', JSON.stringify({ scroll: window.scrollY }));
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return (() => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    });
  }, []);

  return (
    <VirtuosoGrid
      style={{
        height: 800,
        width: '100%',
      }}
      overscan={300}
      useWindowScroll
      data={initialData}
      totalCount={1196}
      listClassName="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 sm:gap-x-4 gap-y-3 sm:gap-y-4 justify-center items-center"
      itemContent={(index, basicInfo) => (
        <Card basicInfo={basicInfo} />
      )}
    />
  );
}
