'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Card from './card';
import getPokes from '@/app/api/pokeapi/poke';

export default function CardList() {
  const [pokeDatas, setPokeDatas] = useState([]);
  const [pokeIndex, setPokeIndex] = useState(0);

  const clickBtn = () => {
    setPokeIndex(pokeIndex + 1);
  };

  const fetchPoke = async () => {
    const data = await getPokes(pokeIndex);
    console.log(data);
    setPokeDatas([...pokeDatas, ...data]);
  };

  useEffect(() => {
    fetchPoke();
  }, [pokeIndex]);

  return (
    <div className="flex w-full flex-col justify-center items-center">
      <div className="grid grid-cols-6 gap-x-4 gap-y-2 min-h-screen justify-center items-center">
        {pokeDatas.map(({
          name, sprity, types, id, no, form,
        }) => (
          <Link key={id} href={`/${id}`}>
            <Card name={name} sprity={sprity} types={types} id={id} no={no} form={form} />
          </Link>
        ))}
      </div>
      <div>
        <button onClick={clickBtn} className="bg-blue-200" type="button">
          btn
        </button>
      </div>
    </div>
  );
}
