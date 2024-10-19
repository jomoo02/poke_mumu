import { useEffect, useState } from 'react';
import type { PokeItem } from '../pokedex/types/poke';

const KEY = 'poke_local';

// export default function useLocalStorage() {
//   const [localPokes, setLocalPokes] = useState([]);

//   const excludePokeById = (id: number) => localPokes.filter((poke: PokeDataType) => poke.id !== id);

//   const saveLocalPoke = (poke: PokeDataType) => {
//     const filteredPokes = excludePokeById(poke.id);

//     const savingPokes = JSON.stringify(
//       [
//         { ...poke },
//         ...filteredPokes.slice(0, 5),
//       ],
//     );
//     window.localStorage.setItem(KEY, savingPokes);
//   };

//   const getLocalPokes = () => {
//     const items = window.localStorage.getItem(KEY);

//     if (items) {
//       return JSON.parse(items);
//     }

//     return [];
//   };

//   useEffect(() => {
//     const localPoke = getLocalPokes();
//     setLocalPokes(localPoke);
//   }, []);

//   return {
//     localPokes,
//     saveLocalPoke,
//   };
// }

export default function useLocalStorage() {
  const [localPokes, setLocalPokes] = useState([]);

  const excludePokeByOrder = (order: number) => (
    localPokes.filter((poke: PokeItem) => poke.order !== order)
  );

  const saveLocalPoke = (poke: PokeItem) => {
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
