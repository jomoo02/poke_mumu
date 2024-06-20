import { useState, useEffect } from 'react';
import { fetchSearchPokes } from '@/app/api/search';

export default function usePokeSearch(inputText) {
  const [result, setResult] = useState([]);

  useEffect(() => {
    const fetchSearch = async () => {
      const data = inputText ? (await fetchSearchPokes(inputText)) : [];
      setResult(data);
    };

    fetchSearch();
  }, [inputText]);

  return {
    result,
  };
}
