import React from 'react';
import { useLanguage } from '@/app/language-provider';

function Gender({ value }: { value: 1 | 2 }) {
  const { language } = useLanguage();

  const localizedGenderMap = {
    en: {
      1: 'female',
      2: 'male',
    },
    ko: {
      1: '수컷',
      2: '암컷',
    },
  };

  const localeGenderMap = localizedGenderMap[language];

  const content = localeGenderMap[value];

  return <span>{content}</span>;
}

const ConditionGender = {
  gender: Gender,
};

export default ConditionGender;
