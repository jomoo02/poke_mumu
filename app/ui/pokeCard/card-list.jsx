'use client';

import React, { useState, useEffect } from 'react';
import { fetchPokes } from '@/app/api/data';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import usePokeInfiniteQuery from '../../hooks/useInfiniteQuery';
import Card from './card';

export default function CardList({ initialPokeData }) {
  // const [pokeDatas, setPokeDatas] = useState([]);
  // const [pokeIndex, setPokeIndex] = useState(0);
  const { isIntersecting, ref } = useIntersectionObserver();

  const {
    pokeData: pokeDatas, fetchNextPage, hasNextPage, isFetching, status,
  } = usePokeInfiniteQuery();

  useEffect(() => {
    if (hasNextPage && isIntersecting && !isFetching) {
      console.log(pokeDatas);
      fetchNextPage();
    }
  }, [isIntersecting]);

  // const fetchPoke = async () => {
  //   console.log(pokeIndex);
  //   const data = await fetchPokes(pokeIndex);
  //   setPokeDatas([...pokeDatas, ...data]);
  // };

  // useEffect(() => {
  //   if (pokeIndex !== 0) {
  //     fetchPoke();
  //   }
  // }, [pokeIndex]);

  // useEffect(() => {
  //   if (isIntersecting) {
  //     setPokeIndex((index) => index + 1);
  //   }
  // }, [isIntersecting]);

  return (
    <div className="flex w-full flex-col items-center min-h-screen">
      <div
        className="w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 sm:gap-x-4 gap-y-3 sm:gap-y-4 justify-center items-center"
      >
        {initialPokeData.map((basicInfo, index) => (
          <Card
            key={basicInfo.id}
            basicInfo={basicInfo}
            isPriority={index <= 20}
          />
        ))}
        {status === 'pending' ? <div>loading</div> : pokeDatas.map((basicInfo, index) => (
          <Card
            key={basicInfo.id}
            basicInfo={basicInfo}
            isPriority={index <= 20}
          />
        ))}
      </div>
      <div ref={ref} />
    </div>
  );
}
