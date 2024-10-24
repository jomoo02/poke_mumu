import useDebouncedInput from '@/app/hooks/useDebouncedInput';
import useLockBodyScroll from '@/app/hooks/useLockBodyScroll';
import useEscKeyListener from '@/app/hooks/useEscKeyListener';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { fetchSearch } from '../api/search';
import type { SearchPoke } from '../types/search';

export default function usePokeSearch() {
  const {
    inputText,
    handleChange,
  } = useDebouncedInput();

  const [result, setResult] = useState<SearchPoke[] | []>([]);

  const router = useRouter();

  const closeSearch = () => router.back();

  useEscKeyListener(closeSearch);

  useLockBodyScroll();

  useEffect(() => {
    const search = async () => {
      const data = inputText ? (await fetchSearch(inputText)) : [];
      setResult(data);
    };

    search();
  }, [inputText]);

  return {
    inputText,
    closeSearch,
    handleInputTextChange: handleChange,
    searchResult: result,
  };
}
