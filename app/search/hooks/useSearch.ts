import { useLanguage } from '@/app/language-provider';
import useDebouncedInput from '@/app/hooks/useDebouncedInput';
import useLockBodyScroll from '@/app/hooks/useLockBodyScroll';
import useEscKeyListener from '@/app/hooks/useEscKeyListener';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { fetchSearch } from '../api/search';
import type { SearchPoke } from '../types/search';

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
    inputTextOnChange: handleChange,
    searchResult: result,
  };
}
