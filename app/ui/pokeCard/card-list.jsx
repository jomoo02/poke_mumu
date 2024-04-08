'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
    <div className="flex w-full flex-col justify-center items-center">
      <div className="grid grid-cols-6 gap-x-4 gap-y-2 min-h-screen justify-center items-center">
        {pokeDatas.map(({
          name, sprity, types, id, no, form, key,
        }) => (
          <Link key={key} href={`/${id}`}>
            <Card name={name} sprity={sprity} types={types} id={id} no={no} form={form} />
          </Link>
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
