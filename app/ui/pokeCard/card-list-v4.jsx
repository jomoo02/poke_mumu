'use client';

import React, { useEffect, useRef, useState } from 'react';
import { VirtuosoGrid } from 'react-virtuoso';
import usePokeInfiniteQuery from '@/app/hooks/useInfiniteQuery';
import Card from './card';
import PokeCardSkelton from './card-skeleton';

function CardListSkelton({ count = 1 }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 sm:gap-x-4 gap-y-3 sm:gap-y-4 justify-center items-center">
      {Array.from({ length: 60 * count }, (_, index) => (
        <PokeCardSkelton key={`card-${index}`} />
      ))}
    </div>
  );
}

export default function CardListV4({ }) {
  const [data, setData] = useState([]);
  const [visibleRange, setVisibleRange] = useState({
    startIndex: 0,
    endIndex: 0,
  });

  const {
    fetchNextPage, hasNextPage, isFetching, isLoading,
  } = usePokeInfiniteQuery(setData);

  useEffect(() => {
    const handlePageHide = () => {
      sessionStorage.setItem('pos2', JSON.stringify({ scroll: window.scrollY, index: visibleRange.endIndex }));
    };
    window.addEventListener('pagehide', handlePageHide);

    return (() => {
      window.removeEventListener('pagehide', handlePageHide);
    });
  }, [visibleRange]);

  useEffect(() => {
    const sessionInfo = sessionStorage.getItem('pos2');

    if (!isLoading && sessionInfo) {
      const { scroll } = JSON.parse(sessionInfo);

      setTimeout(() => {
        window.scrollTo({ top: scroll });
      }, 200);

      sessionStorage.removeItem('pos2');
    }
  }, [isLoading]);

  // if (isLoading) {
  //   return (
  //     <div className="w-10 h-10 bg-blue-100">loading</div>
  //   );
  // }

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
      endReached={() => {
        if (hasNextPage && !isFetching) {
          fetchNextPage();
        }
      }}
    />
  );
}
