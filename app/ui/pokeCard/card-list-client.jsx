'use client';

import React, { useState, useEffect, Suspense, useLayoutEffect } from 'react';
import { fetchPokes } from '@/app/api/data';
import usePokeCardIndex from '@/app/hooks/usePokeCardIndex';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import usePokeInfiniteQuery from '../../hooks/useInfiniteQuery';
import Card from './card';
import PokeCardSkelton from './card-skeleton';

function CardListSkelton({ cardIndex }) {
  const cardLenth = Math.min(Number(cardIndex + 1) * 240, 1198);
  return (
    <>
      {Array.from({ length: cardLenth }, (_, index) => (
        <PokeCardSkelton key={`card-${index}`} />
      ))}
    </>
  );
}

export default function CardListClient() {
  const [cardIndex, setCardIndex] = useState(0);
  const { isIntersecting, ref } = useIntersectionObserver();
  const { getPokeCardIndex } = usePokeCardIndex();

  const {
    pokeData: pokeDatas, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading,
  } = usePokeInfiniteQuery();

  useEffect(() => {
    if (hasNextPage && isIntersecting && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [isIntersecting]);

  useLayoutEffect(() => {
    setCardIndex(getPokeCardIndex());
  }, []);

  // useEffect(() => {
  //   console.log('@@@@@@@@@@@');
  //   const position = sessionStorage.getItem('pos');

  //   if (!isLoading && position) {
  //     // sessionStorage.removeItem('pos');
  //     // console.log(position);
  //     window.scrollTo({ top: position });
  //     // sessionStorage.removeItem('pos');
  //     // console.log('removeItem');
  //   }
  // }, [isLoading]);

  // useEffect(() => {
  //   const handleBeforeUnload = () => {
  //     sessionStorage.setItem('pos2', window.);
  //     console.log('setItem@@');
  //   };
  //   window.addEventListener('beforeunload', handleBeforeUnload);

  //   return (() => {
  //     window.removeEventListener('beforeunload', handleBeforeUnload);
  //   });
  // }, []);

  return (
    <div className="flex w-full flex-col items-center">
      <div
        className="w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 sm:gap-x-4 gap-y-3 sm:gap-y-4 justify-center items-center"
      >

        {(isLoading) ? (
          <CardListSkelton cardIndex={cardIndex} />
        ) : (
          <>
            {/* {initialPokeData.map((basicInfo, index) => (
              <Card
                key={basicInfo.id}
                basicInfo={basicInfo}
                priority={index <= 20}
              />
            ))} */}
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
