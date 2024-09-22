import { useLanguage } from '@/app/language-provider';
import { formatMeasurement } from '@/app/utils/format';
import {
  localizedSubjects,
  subjectKo,
} from '../data/subject';

export default function useBasicInfo(pokeInfo) {
  const {
    no,
    name,
    form,
    types,
    weight,
    height,
    basicInfo,
  } = pokeInfo;

  const { language } = useLanguage();

  const subjects = localizedSubjects[language] || subjectKo;

  const basicInfos = {
    no: {
      key: 'no',
      subject: subjects.no,
      content: no,
    },
    name: {
      key: 'name',
      subject: subjects.name,
      content: name[language] || name.ko || '',
    },
    types: {
      key: 'types',
      subject: subjects.types,
      content: types,
    },
    form: {
      key: 'form',
      subject: subjects.form,
      content: form[language] || form.ko || '',
    },
  };

  return Object.values(basicInfos);
}
