'use client';

import React, { useState, useEffect, Suspense, useLayoutEffect } from 'react';
import { fetchPokes } from '@/app/api/data';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import usePokeInfiniteQuery from '../../hooks/useInfiniteQuery';
import Card from './card';
import PokeCardSkelton from './card-skeleton';

function CardListSkelton() {
  const [cardCount, setCardCount] = useState(240);

  useLayoutEffect(() => {
    const index = sessionStorage.getItem('poke-card-index');
    if (index) {
      setCardCount((index + 2) * 240);
    }
  }, []);

  return (
    <>
      {Array.from({ length: cardCount }, (_, index) => (
        <PokeCardSkelton key={`card-${index}`} />
      ))}
    </>
  );
}

export default function CardList({ initialPokeData }) {
  const { isIntersecting, ref } = useIntersectionObserver();

  const {
    pokeData: pokeDatas, fetchNextPage, hasNextPage, isFetchingNextPage, status, isLoading,
  } = usePokeInfiniteQuery();

  useEffect(() => {
    console.log(hasNextPage, isIntersecting, isLoading, isFetchingNextPage);
    if (hasNextPage && isIntersecting && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [isIntersecting]);

  useEffect(() => {
    const position = sessionStorage.getItem('pos');
    console.log('1', position, status);
    if (!isLoading && position) {
      window.scrollTo({ top: position });
    }
  }, [isLoading]);

  return (
    <div className="flex w-full flex-col items-center min-h-screen">
      <div
        className="w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 sm:gap-x-4 gap-y-3 sm:gap-y-4 justify-center items-center"
      >
        {(isLoading) ? (
          <CardListSkelton />
        ) : (
          <>
            {initialPokeData.map((basicInfo, index) => (
              <Card
                key={basicInfo.id}
                basicInfo={basicInfo}
                priority={index <= 20}
              />
            ))}
            {pokeDatas.map((basicInfo) => (
              <Card
                key={basicInfo.id}
                basicInfo={basicInfo}
              />
            ))}
          </>
        )}
      </div>
      <div ref={ref} />
    </div>
  );
}
