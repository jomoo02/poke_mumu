import { useLanguage } from '@/app/language-provider';
import {
  localeIndexs,
  localesKo,
  updatedKanto,
} from '../data/localeNo';

export default function useLocaleNo(pokedexNumbers) {
  const { language } = useLanguage();

  const subjectEn = 'locale No';
  const subjectKo = '도감 번호';

  const localeSubject = language === 'en' ? subjectEn : subjectKo;

  const localePokedexs = pokedexNumbers.reduce((acc, { pokedex, entryNumber }) => {
    const localePokedex = localesKo[pokedex];
    const index = localeIndexs[pokedex];

    if (localePokedex) {
      acc.push({
        index,
        entryNumber,
        pokedex: localePokedex,
      });
    }

    if (index === 2) {
      acc.push({
        entryNumber,
        index: localeIndexs[updatedKanto],
        pokedex: localesKo[updatedKanto],
      });
    }
    return acc;
  }, []).sort((a, b) => a.index - b.index);

  return {
    localePokedexs,
    subject: localeSubject,
  };
}
