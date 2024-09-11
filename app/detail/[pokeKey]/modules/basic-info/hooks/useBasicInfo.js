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
    genera: {
      key: 'genera',
      subject: subjects.genera,
      content: basicInfo.genera[language] || basicInfo.genera.ko,
    },
    eggGroups: {
      key: 'egg-groups',
      subject: subjects.eggGroups,
      content: basicInfo.eggGroups,
    },
    genderRate: {
      key: 'gender-rate',
      subject: subjects.genderRate,
      content: basicInfo.genderRate,
    },
    captureRate: {
      key: 'capture-rate',
      subject: subjects.captureRate,
      content: basicInfo.captureRate,
    },
    growthRate: {
      key: 'growth-rate',
      subject: subjects.growthRate,
      content: basicInfo.growthRate,
    },
  };

  return Object.values(basicInfos);
}
