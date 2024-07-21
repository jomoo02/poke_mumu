'use client';

import React, { useState, useEffect, memo } from 'react';
import { VirtuosoGrid } from 'react-virtuoso';
import useScrollRestoration from '@/app/hooks/useScrollRestoration';
import PokeCardSkeleton from './card-skeleton';
import Card from './card';

const PokeCard = memo(({ basicInfo }) => <Card basicInfo={basicInfo} />);

PokeCard.displayName = 'PokeCard';

export default function PokeCardList({ initialData }) {
  const [isLoading, setIsLoading] = useState(true);
  const { setScrollPosition, getScrollPosition } = useScrollRestoration();

  useEffect(() => {
    const handlePageHide = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('pagehide', handlePageHide);

    return (() => {
      window.removeEventListener('pagehide', handlePageHide);
    });
  }, []);

  useEffect(() => {
    const scrollPosition = getScrollPosition();

    if (scrollPosition) {
      setTimeout(() => {
        window.scrollTo({ top: scrollPosition });
        setIsLoading(false);
      }, 200);
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <VirtuosoGrid
      style={{
        height: 500,
      }}
      overscan={300}
      data={initialData}
      useWindowScroll
      totalCount={initialData.length}
      itemContent={(_, basicInfo) => {
        if (isLoading) {
          return <PokeCardSkeleton />;
        }
        return <PokeCard basicInfo={basicInfo} />;
      }}
      listClassName="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 sm:gap-x-4 gap-y-3 sm:gap-y-4 justify-center items-center"
    />
  );
}
