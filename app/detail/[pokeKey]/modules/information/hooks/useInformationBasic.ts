import { useLanguage } from '@/app/language-provider';
import { localizedSubjects } from '../data/subject';
import {
  updatedKanto,
  localeIndexs,
  localesPokedexKo,
  localesPokedexEn,
} from '../data/localeNo';

function setNationalNo(nationalNo: number, localeSubjects) {
  const localeSubject = localeSubjects.nationalNo || 'national No';

  return {
    subject: localeSubject,
    content: nationalNo,
  };
}

function setName(name, localeSubjects, language) {
  const localeSubject = localeSubjects.name || 'name';

  const localeName = name[language] || name.ko || '포켓몬';

  return {
    subject: localeSubject,
    content: localeName,
  };
}

function setTypes(types, localeSubjects) {
  const localeSubject = localeSubjects.types || 'types';

  return {
    subject: localeSubject,
    content: types,
  };
}

function setForm(form, localeSubjects, language) {
  const localeSubject = localeSubjects.form || 'form';

  const localeForm = form[language] || form.ko || '기본 모습';

  return {
    subject: localeSubject,
    content: localeForm,
  };
}

function setLocaleNo(pokedexNumbers, localeSubjects, localePokedexs) {
  const localeSubject = localeSubjects.localeNo || 'locale No';

  const localePokedexsNo = pokedexNumbers.reduce((acc, { pokedex, entryNumber }) => {
    const localePokedex = localePokedexs[pokedex];
    const localeIndex = localeIndexs[pokedex];

    if (localePokedex) {
      acc.push({
        index: localeIndex,
        entryNumber,
        pokedex: localePokedex,
      });
    }

    if (localeIndex === 2) {
      acc.push({
        entryNumber,
        index: localeIndexs[updatedKanto],
        pokedex: localePokedexs[updatedKanto],
      });
    }

    return acc;
  }, []).sort((a, b) => a.index - b.index);

  return {
    subject: localeSubject,
    content: localePokedexsNo,
  };
}

export default function useInformationBasic(pokeInformation) {
  const { language } = useLanguage();

  const titles = {
    en: 'basic',
    ko: '기본 정보',
  };

  const localeTitle = titles[language] || titles.ko;

  const {
    types,
    name,
    form,
    pokedexNumbers,
    no: nationalNo,
  } = pokeInformation;

  const localeSubjects = localizedSubjects[language] || localizedSubjects.ko;

  const localePokedexs = language === 'en' ? localesPokedexEn
    : localesPokedexKo;

  const nationalNoObj = setNationalNo(nationalNo, localeSubjects);
  const nameObj = setName(name, localeSubjects, language);
  const typesObj = setTypes(types, localeSubjects);
  const formObj = setForm(form, localeSubjects, language);
  const localeNoObj = setLocaleNo(pokedexNumbers, localeSubjects, localePokedexs);

  return {
    title: localeTitle,
    nationalNo: nationalNoObj,
    name: nameObj,
    types: typesObj,
    form: formObj,
    localeNo: localeNoObj,
  };
}
