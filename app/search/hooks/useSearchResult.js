import useLocalStorage from '@/app/hooks/useLocalStorage';
import { useLanguage } from '@/app/language-provider';
import { checkTextNumberType } from '@/app/utils/utils';

export function useSearchDescription(inputText) {
  const { language } = useLanguage();

  const notInputTexts = {
    ko: '최근 검색한 포켓몬',
    en: 'Recently searched Pokémon',
  };

  const localeNotInputText = notInputTexts[language] || notInputTexts.ko;

  const isTextNumber = checkTextNumberType(inputText);

  const resultTexts = {
    ko: {
      text: '(이)가 포함된',
      textNumber: '도감 번호',
    },
    en: {
      text: 'Pokémon containing',
      textNumber: 'Pokédex is',
    },
  };

  const localeResultText = resultTexts[language] || resultTexts.ko;

  const normalCaseText = localeResultText.text;
  const numberCaseText = localeResultText.textNumber;

  return {
    language,
    isTextNumber,
    normalCaseText,
    numberCaseText,
    notInputText: localeNotInputText,
  };
}

export function useSearchResult(inputText, result) {
  const { localPokes } = useLocalStorage();

  const resultPokes = !inputText ? localPokes : result;

  return {
    resultPokes,
  };
}
