'use client';

import React, { useState, useEffect } from 'react';
import { fetchPokes } from '@/app/api/data';
import Card from './card';

export default function CardList({ initialPokeData }) {
  const [pokeDatas, setPokeDatas] = useState([]);
  const [pokeIndex, setPokeIndex] = useState(0);

  const clickMoreBtn = () => {
    setPokeIndex(pokeIndex + 1);
  };

  const fetchPoke = async () => {
    const data = await fetchPokes(pokeIndex);
    setPokeDatas([...pokeDatas, ...data]);
  };

  useEffect(() => {
    if (pokeIndex !== 0) {
      fetchPoke();
    }
  }, [pokeIndex]);

  return (
    <div className="flex w-full flex-col items-center min-h-screen">
      <div
        className="w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 sm:gap-x-4 gap-y-2.5 sm:gap-y-4 justify-center items-center"
      >
        {initialPokeData.map((basicInfo, index) => (
          <div key={basicInfo.id} className="flex justify-center">
            <Card
              basicInfo={basicInfo}
              isPriority={index <= 20}
            />
          </div>
        ))}
        {pokeDatas.map((basicInfo, index) => (
          <div key={basicInfo.id} className="flex justify-center">
            <Card
              basicInfo={basicInfo}
              isPriority={index <= 20}
            />
          </div>
        ))}
      </div>
      <div>
        <button onClick={clickMoreBtn} type="button" className="bg-gray-400 p-2 rounded-lg">
          더 보기
        </button>
      </div>
    </div>
  );
}
