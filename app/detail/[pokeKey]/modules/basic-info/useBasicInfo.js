import { useLanguage } from '@/app/language-provider';
import { formatMeasurement } from '@/app/utils/format';

const subjectsWithLanguage = {
  ko: {
    no: '전국도감 번호',
    name: '이름',
    types: '타입',
    form: '모습',
    height: '키',
    weight: '몸무게',
  },
  en: {
    no: 'national no',
    name: 'name',
    types: 'type',
    form: 'form',
    height: 'height',
    weight: 'weight',
  },
};

export default function useBasicInfo(pokeInfo) {
  const {
    no,
    name,
    form,
    types,
    weight,
    height,
  } = pokeInfo;

  const { language } = useLanguage();

  const subjects = subjectsWithLanguage[language] || subjectsWithLanguage.ko;

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
    height: {
      key: 'height',
      subject: subjects.height,
      content: formatMeasurement(height, 'm'),
    },
    weight: {
      key: 'weight',
      subject: subjects.weight,
      content: formatMeasurement(weight, 'kg'),
    },
  };

  return Object.values(basicInfos);
}
