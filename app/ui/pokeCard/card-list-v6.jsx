'use client';

import React, { useState, useEffect, memo } from 'react';
import { VirtuosoGrid, Virtuoso } from 'react-virtuoso';
import usePokeInfiniteQuery from '@/app/hooks/useInfiniteQuery';
import { useQuery } from '@tanstack/react-query';
import { fetchPoke } from '@/app/api/data';
import PokeCardSkleton from './card-skeleton';
import Card from './card';

const PokeCard = memo(({ basicInfo }) => <Card basicInfo={basicInfo} />);

PokeCard.displayName = 'PokeCard';

function CardListSkelton({ count = 1 }) {
  return (
    <>
      {Array.from({ length: 60 * count }, (_, index) => (
        <PokeCardSkleton key={`card-${index}`} />
      ))}
    </>
  );
}

function Footer({ isFetching, hasNextPage }) {
  if (isFetching) {
    return <CardListSkelton />;
  }
  return null;
}

export default function PokeCardListV6({ initialData }) {
  const [data, setData] = useState([]);
  const [visibleRange, setVisibleRange] = useState({
    startIndex: 0,
    endIndex: 0,
  });

  const [isScrolling, setIsScrolling] = useState(true);

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
        setIsScrolling(false);
      }, 300);

      sessionStorage.removeItem('pos2');
    } else if (!sessionInfo) {
      setIsScrolling(false);
    }
  }, [isLoading]);

  return (
    <VirtuosoGrid
      style={{
        height: 300,
        width: '100%',
      }}
      overscan={300}
      data={initialData}
      useWindowScroll
      // defaultItemHeight={224}
      totalCount={1198}
      itemContent={(index, basicInfo) => {
        if (isScrolling) {
          return <PokeCardSkleton />
        }
        return <PokeCard basicInfo={basicInfo} />
      }}
      listClassName="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 sm:gap-x-4 gap-y-3 sm:gap-y-4 justify-center items-center"
      // endReached={() => {
      //   if (hasNextPage && !isFetching) {
      //     fetchNextPage();
      //   }
      // }}
      // components={{
      //   Footer: () => (
      //     <Footer isFetching={isFetching} hasNextPage={hasNextPage} />
      //   ),
      // }}
    />
  );
}
