'use client';

import React, { useState, useEffect } from 'react';
import Card from './card';
import { fetchPokes } from '@/app/api/data';

export default function CardList() {
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
    fetchPoke();
  }, [pokeIndex]);

  return (
    <div className="flex w-full flex-col items-center min-h-screen">
      <div className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 xs:gap-x-2 sm:gap-x-4 gap-y-1.5 xs:gap-y-2 sm:gap-y-4 justify-center items-center">
        {pokeDatas.map(({
          name, sprity, types, id, no, form, key,
        }) => (
          <div key={key} className="flex justify-center">
            <Card name={name} sprity={sprity} types={types} id={id} no={no} form={form} />
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