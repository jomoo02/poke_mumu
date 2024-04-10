import { useEffect, useState } from 'react';

export default function useLocalStorage() {
  const KEY = 'poke_local';
  const [localPokes, setLocalPokes] = useState(
    JSON.parse(window.localStorage.getItem(KEY)) || [],
  );

  const getPokeLocal = () => JSON.parse(window.localStorage.getItem(KEY)) || [];

  const filterPoke = (id, pokes) => pokes.filter(({ id: localPokeId }) => {
    if (localPokeId !== id) {
      return true;
    }
    return false;
  });

  const savePokeLocal = (poke) => {
    const filteredPokes = filterPoke(poke.id, localPokes);
    const savingPokes = JSON.stringify([{ ...poke }, ...filteredPokes.slice(0, 5)]);

    localStorage.setItem(KEY, savingPokes);
    setLocalPokes(getPokeLocal());
  };

  return {
    localPokes,
    getPokeLocal,
    savePokeLocal,
  };
}
