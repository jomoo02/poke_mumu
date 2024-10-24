import { useState, useEffect } from 'react';
import { useLanguage } from '@/app/language-provider';
import { useRouter } from 'next/navigation';
import useDebouncedInput from '@/app/hooks/useDebouncedInput';
import useLockBodyScroll from '@/app/hooks/useLockBodyScroll';
import useEscKeyListener from '@/app/hooks/useEscKeyListener';
import { fetchSearch } from '../api/search';

export function useSearchPlaceholder() {
  const { language } = useLanguage();

  const placeholderLanguageText = {
    ko: '도감 번호 또는 포켓몬 이름',
    en: 'Pokédex Number or Pokémon Name',
  };

  const localePlaceholderText = placeholderLanguageText[language]
    || placeholderLanguageText.ko;

  return {
    placeholderText: localePlaceholderText,
  };
}

export function useSearch() {
  const {
    inputText,
    handleChange,
  } = useDebouncedInput();

  const [result, setResult] = useState([]);

  const router = useRouter();
  const closeSearch = () => router.back();

  useEscKeyListener(closeSearch);

  useLockBodyScroll();

  useEffect(() => {
    const fetchSearchPoke = async () => {
      const data = inputText ? (await fetchSearch(inputText)) : [];
      setResult(data);
    };

    fetchSearchPoke();
    console.log(result);
  }, [inputText]);

  return {
    inputText,
    closeSearch,
    handleInputTextChange: handleChange,
    searchResult: result,
  };
}
