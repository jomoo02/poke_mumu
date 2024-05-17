import { useState } from 'react';

const KEY = 'poke_local';

export default function useLocalStorage() {
  const getPokeLocal = () => JSON.parse(window.localStorage.getItem(KEY)) || [];
  const [localPokes, setLocalPokes] = useState(getPokeLocal());

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
    savePokeLocal,
  };
}
