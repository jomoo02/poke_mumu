'use client';

import React, { forwardRef, useEffect, useRef, useState } from 'react';
import useIntersectionObserver from '@/app/hooks/useIntersectionObserver';
import { Virtuoso, VirtuosoGrid } from 'react-virtuoso';
import PokeCardSkelton from './card-skeleton';
import fetchPokes from '../../api/data';
import Card from './card';

const gridComponents = {
  List: forwardRef(({ style, children, ...props }, ref) => (
    <div
      ref={ref}
      {...props}
      style={{
        ...style,
      }}
      className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 sm:gap-x-4 gap-y-3 sm:gap-y-4 justify-center items-center"
    >
      {children}
    </div>
  )),
};

export default function CardListV3({ initialData }) {
  const [curIndex, setCurIndex] = useState(() => {
    if (typeof window !== 'undefined') {
      const sessionInfo = window?.sessionStorage?.getItem('pos2') || null;
      if (sessionInfo) {
        const { index, scroll } = JSON.parse(sessionInfo);
        return index;
      }
    }

    return 0;
  });
  const virRef = useRef();
  useEffect(() => {
    const sessionInfo = sessionStorage.getItem('pos2');

    if (sessionInfo && virRef.current) {
      const { index, scroll } = JSON.parse(sessionInfo);
      console.log(index, virRef);
      setCurIndex(index);
      console.log(scroll);
      setTimeout(() => {
        window.scrollTo({ top: scroll });
      }, 100);
    }
  }, [virRef]);

  return (
    <>
      <VirtuosoGrid
        ref={virRef}
        style={{
          height: 500,
          width: '100%',
        }}
        useWindowScroll
        data={initialData}
        totalCount={1196}
        components={gridComponents}
        itemContent={(index, basicInfo) => (
          <Card basicInfo={basicInfo} />
        )}
        // initialTopMostItemIndex={curIndex}
      />
      <style>{`html, body, #root { margin: 0; padding: 0 }`}</style>
    </>
  );
}
