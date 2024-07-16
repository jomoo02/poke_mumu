'use client';

import React, { useEffect, useState } from 'react';
import { VirtuosoGrid } from 'react-virtuoso';
import { fetchAllPoke } from '@/app/api/data';
import { useSuspenseQuery } from '@tanstack/react-query';
import Card from './card';

export default function CardListV5() {
  const { data, isFetching } = useSuspenseQuery({ queryKey: ['pre'], queryFn: fetchAllPoke });
  const [visibleRange, setVisibleRange] = useState({
    startIndex: 0,
    endIndex: 0,
  });

  // const {
  //   fetchNextPage, hasNextPage, isFetching, isLoading,
  // } = usePokeInfiniteQuery(setData);

  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.setItem('pos2', JSON.stringify({ scroll: window.scrollY, index: visibleRange.endIndex }));
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return (() => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    });
  }, [visibleRange]);

  useEffect(() => {
    const sessionInfo = sessionStorage.getItem('pos2');

    if (sessionInfo) {
      const { scroll } = JSON.parse(sessionInfo);

      setTimeout(() => {
        window.scrollTo({ top: scroll });
      }, 100);
    }
  }, []);

  if (isFetching) {
    return (
      <div>...fetching</div>
    );
  }

  return (
    <VirtuosoGrid
      style={{
        height: 800,
        width: '100%',
      }}
      overscan={300}
      useWindowScroll
      data={data}
      totalCount={1198}
      rangeChanged={setVisibleRange}
      listClassName="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 sm:gap-x-4 gap-y-3 sm:gap-y-4 justify-center items-center"
      itemContent={(index, basicInfo) => (
        <Card basicInfo={basicInfo} />
      )}
    />
  );
}
