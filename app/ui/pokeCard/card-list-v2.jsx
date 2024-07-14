'use client';

import React, { Fragment, useEffect, useMemo, useState } from 'react';
import useIntersectionObserver from '@/app/hooks/useIntersectionObserver';
import PokeCardSkelton from './card-skeleton';
import fetchPokes from '../../api/data';
import Card from './card';

function splitArrayIntoChunks(arr, chunkSize = 240) {
  const result = [];
  let index = 0;
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    result.push({ data: chunk, cardIndex: index, isView: false });
    index += 1;
  }
  return result;
}

function CardList({ data, cardIndex }) {
  return (
    <>
      {data.map((basicInfo) => (
        <Card
          key={basicInfo.id}
          basicInfo={basicInfo}
          cardIndex={cardIndex}
        />
      ))}
    </>
  );
}

export default function CardListV2({ initialData }) {
  const [curCardIndex, setCurCardIndex] = useState(0);
  const [hasNext, setHasNext] = useState(true);

  const { isIntersecting, ref } = useIntersectionObserver();

  const [pokeDatas, setPokeDatas] = useState(splitArrayIntoChunks(initialData));
  pokeDatas[0].isView = true;

  const [prefetched, setPrefetched] = useState(false);

  useEffect(() => {
    const sessionInfo = sessionStorage.getItem('pos2');
    if (sessionInfo) {
      const { index } = JSON.parse(sessionInfo);

      const pres = Array.from({ length: index }, (_, i) => i + 1);

      setPokeDatas((before) => {
        const after = [...before];
        pres.forEach((pre) => {
          after[pre].isView = true;
        });
        return after;
      });

      setCurCardIndex(Number(index));
    }
    setPrefetched(true);
  }, []);

  useEffect(() => {
    if (prefetched) {
      const sessionInfo = sessionStorage.getItem('pos2');
      if (sessionInfo) {
        const { scroll } = JSON.parse(sessionInfo);
        window.scrollTo({ top: scroll });
      }
    }
  }, [prefetched]);

  useEffect(() => {
    if (isIntersecting && hasNext) {
      const index = curCardIndex + 1;
      setPokeDatas((beforePokeDatas) => {
        const afterPokeDatas = [...beforePokeDatas];
        afterPokeDatas[index].isView = true;
        return afterPokeDatas;
      });
      setCurCardIndex(index);
    }
  }, [isIntersecting, hasNext]);

  useEffect(() => {
    if (curCardIndex >= 4) {
      setHasNext(false);
    }
  }, [curCardIndex]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.setItem('pos2', JSON.stringify({ scroll: window.scrollY, index: curCardIndex }));
      console.log('setItem@@');
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return (() => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    });
  }, [curCardIndex]);

  return (
    <div>
      <div className="grid grid-cols-4">
        {pokeDatas.map(({ data, cardIndex, isView }) => (
          <Fragment key={cardIndex}>
            {isView ? <CardList data={data} cardIndex={cardIndex} index={cardIndex} /> : null}
          </Fragment>
        ))}
      </div>
      <div ref={ref} />
    </div>
  );
}
