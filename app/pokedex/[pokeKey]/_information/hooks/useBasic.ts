import { useLanguage } from '@/app/language-provider';
import type { PokedexNumber } from '@/app/models/PokeV2';
import type { Poke } from '@/app/models/poke.type';
import {
  localPokedexIndexs,
  localizedLocalPokedexs,
  type LocalPokedexs,
} from '@/app/data/localPokedex';
import { localizedSubjects } from '../data/subject';

export type LocalNo = {
  index: number;
  entryNumber: number;
  pokedex: string;
};

function setLocalNo(pokedexNumbers: PokedexNumber[], localeLocalPokedexs: LocalPokedexs) {
  return pokedexNumbers.reduce((acc: LocalNo[], { pokedex, entryNumber }) => {
    const localePokedex = localeLocalPokedexs[pokedex];

    const pokedexIndex = localPokedexIndexs[pokedex];

    if (localePokedex) {
      acc.push({
        entryNumber,
        index: pokedexIndex,
        pokedex: localePokedex,
      });
    }

    if (pokedexIndex === 2) {
      const changedPokedex = 'updated-kanto';

      acc.push({
        entryNumber,
        index: localPokedexIndexs[changedPokedex],
        pokedex: localeLocalPokedexs[changedPokedex],
      });
    }
    return acc;
  }, []).sort((a, b) => a.index - b.index);
}

export default function useBasic(poke: Poke) {
  const { language } = useLanguage();

  const title = language === 'en' ? 'Basic' : '기본 정보';

  const localeSubjects = localizedSubjects[language];

  const {
    types,
    name,
    form,
    pokedexNumbers,
  } = poke;

  const localeName = name[language];

  const localeForm = form[language];

  const localePokedex = localizedLocalPokedexs[language];
  const localNo = setLocalNo(pokedexNumbers, localePokedex);

  return {
    title,
    nationalNo: {
      subject: localeSubjects.nationalNo,
      content: pokedexNumbers[0].entryNumber,
    },
    localNo: {
      subject: localeSubjects.localeNo,
      content: localNo,
    },
    name: {
      subject: localeSubjects.name,
      content: localeName,
    },
    form: {
      subject: localeSubjects.form,
      content: localeForm,
    },
    types: {
      subject: localeSubjects.types,
      content: types,
    },
  };
}
