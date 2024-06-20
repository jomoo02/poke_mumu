'use client';

import { useEffect, useState } from 'react';

const KEY = 'poke_local';

export default function useLocalStorage() {
  const [localPokes, setLocalPokes] = useState([]);

  const excludePokeById = (id) => localPokes.filter((poke) => poke.id !== id);

  const savePokeLocal = (poke) => {
    const filteredPokes = excludePokeById(poke.id);

    const savingPokes = JSON.stringify(
      [
        { ...poke },
        ...filteredPokes.slice(0, 5),
      ],
    );
    window.localStorage.setItem(KEY, savingPokes);
  };

  const getLocalPokes = () => JSON.parse(window?.localStorage?.getItem(KEY)) || [];

  useEffect(() => {
    const localPoke = getLocalPokes();
    setLocalPokes(localPoke);
  }, []);

  return {
    localPokes,
    savePokeLocal,
  };
}
