import { useLanguage } from '@/app/language-provider';

export default function useNotExistVersion() {
  const { language } = useLanguage();

  const texts = {
    en: 'A version where the Pokémon does not exist',
    ko: '해당 포켓몬이 존재하지 않는 버전',
  };

  const localeText = texts[language] || texts.ko;

  return {
    text: localeText,
  };
}
