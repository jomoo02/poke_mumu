import useLocalStorage from '@/app/hooks/useLocalStorage';
import { Language, useLanguage } from '@/app/language-provider';
import { checkTextNumberType } from '@/app/utils/utils';
import type { SearchPoke } from '../types/search';

type Description = {
  notInput: string;
  pokeName: string;
  pokeNo: string;
};

export function useSearchResultDescription(inputText: string) {
  const { language } = useLanguage();

  const languageDescriptions: Record<Language, Description> = {
    ko: {
      notInput: '최근 검색한 포켓몬',
      pokeName: '(이)가 포함된',
      pokeNo: '도감 번호',
    },
    en: {
      notInput: 'Recently searched Pokémon',
      pokeName: 'Pokémon containing',
      pokeNo: 'Pokédex is',
    },
  };

  const isInputTextNumber = checkTextNumberType(inputText);

  const localeDescriptions = languageDescriptions[language];

  return {
    language,
    isInputTextNumber,
    descriptions: localeDescriptions,
  };
}

export function useSearchResult(inputText: string, result: SearchPoke[] | []) {
  const { localPokes } = useLocalStorage();

  const resultPokes = !inputText ? localPokes : result;

  return {
    resultPokes,
  };
}
