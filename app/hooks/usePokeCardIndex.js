const KEY = 'poke-card-index';

export default function usePokeCardIndex() {
  const getPokeCardIndex = () => Number(sessionStorage.getItem(KEY));

  const setPokeCardIndex = (no) => {
    const index = Math.floor((no - 1) / 240);
    sessionStorage.setItem(KEY, index);
  };

  return {
    getPokeCardIndex,
    setPokeCardIndex,
  };
}
