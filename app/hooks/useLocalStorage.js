import { useState } from 'react';

const KEY = 'poke_local';

export default function useLocalStorage() {
  const getPokeLocal = () => JSON.parse(window.localStorage.getItem(KEY)) || [];
  const [localPokes, setLocalPokes] = useState(getPokeLocal());

  const filterPoke = (key, pokes) => pokes.filter(({ key: localPokeKey }) => {
    if (localPokeKey !== key) {
      return true;
    }
    return false;
  });

  const savePokeLocal = (poke) => {
    const filteredPokes = filterPoke(poke.key, localPokes);
    const savingPokes = JSON.stringify([{ ...poke }, ...filteredPokes.slice(0, 5)]);

    localStorage.setItem(KEY, savingPokes);
    setLocalPokes(getPokeLocal());
  };

  return {
    localPokes,
    savePokeLocal,
  };
}
