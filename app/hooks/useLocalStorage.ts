import { useEffect, useState } from 'react';
import type { SearchPoke } from '../search/types/search';

const KEY = 'poke_local';

export default function useLocalStorage() {
  const [localPokes, setLocalPokes] = useState([]);

  const excludePokeByOrder = (order: number) => (
    localPokes.filter((poke: SearchPoke) => poke.order !== order)
  );

  const saveLocalPoke = (poke: SearchPoke) => {
    const filteredPokes = excludePokeByOrder(poke.order);

    const savingPokes = JSON.stringify(
      [
        { ...poke },
        ...filteredPokes.slice(0, 5),
      ],
    );
    window.localStorage.setItem(KEY, savingPokes);
  };

  const getLocalPokes = () => {
    const items = window.localStorage.getItem(KEY);

    if (items) {
      return JSON.parse(items);
    }

    return [];
  };

  useEffect(() => {
    const localPoke = getLocalPokes();
    setLocalPokes(localPoke);
  }, []);

  return {
    localPokes,
    saveLocalPoke,
  };
}
