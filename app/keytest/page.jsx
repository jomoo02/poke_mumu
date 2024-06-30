import React from 'react';
import { fetchDetailPokeKey } from '../api/detail';

export default async function Page() {
  const data = await fetchDetailPokeKey();

  const tt = data.filter(({ pokeKey }) => !pokeKey);
  return (
    <div>
      {tt.map(({ forms, speciesName, pokeKey }, index) => (
        <div key={pokeKey} className="flex">
          <div>{speciesName.ko}</div>
          <div>{pokeKey}</div>
        </div>
      ))}
    </div>
  );
}
