'use client';

import React, { useEffect, Suspense, Fragment } from 'react';
import { fetchPokes } from '@/app/api/data';
import usePokeCardIndex from '@/app/hooks/usePokeCardIndex';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import usePokeInfiniteQuery from '../../hooks/useInfiniteQuery';
import Card from './card';
import PokeCardSkelton from './card-skeleton';

function CardListSkelton() {
  return (
    <>
      {Array.from({ length: 240 }, (_, index) => (
        <PokeCardSkelton key={`card-${index}`} />
      ))}
    </>
  );
}

export default function CardListClient() {
  // const [cardIndex, setCardIndex] = useState(0);
  const { isIntersecting, ref } = useIntersectionObserver();
  // const { getPokeCardIndex } = usePokeCardIndex();

  const {
    pokeData: pokeDatas, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading,
  } = usePokeInfiniteQuery();

  useEffect(() => {
    if (hasNextPage && isIntersecting && !isFetchingNextPage) {
      fetchNextPage();
    }
    console.log(pokeDatas);
  }, [isIntersecting]);

  // useEffect(() => {
  //   if (!isLoading) {
  //     const scrollY = sessionStorage.getItem('pos2');
  //     console.log('이동');
  //     window.scrollTo({ top: scrollY });
  //   }
  // }, [isLoading]);

  // useEffect(() => {
  //   const handleBeforeUnload = () => {
  //     sessionStorage.setItem('pos2', window.scrollY);
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
        <Suspense fallback={<CardListSkelton />}>
          {pokeDatas?.pages.map((pages, index) => (
            <Fragment key={pokeDatas.pageParams[index]}>
              {pages.map((basicInfo) => (
                <Card
                  key={basicInfo.id}
                  basicInfo={basicInfo}
                />
              ))}
            </Fragment>
          ))}
        </Suspense>
        {hasNextPage && isFetchingNextPage ? <CardListSkelton /> : null}
      </div>
      <div ref={ref} />
    </div>
  );
}