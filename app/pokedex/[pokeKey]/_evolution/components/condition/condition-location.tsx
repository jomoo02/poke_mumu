import React from 'react';
import { useLanguage } from '@/app/language-provider';
import {
  localizedAreas,
  type Area,
} from '@/app/data/area';
import {
  regionKo,
  type Region,
} from '@/app/data/region';

function ConditionRegion({ value }: { value: Region }) {
  const { language } = useLanguage();

  const content = language === 'en' ? `in ${value}` : regionKo[value];

  return <span>{content}</span>;
}

function ConditionArea({ value }: { value: Area }) {
  const { language } = useLanguage();

  const localeAreas = localizedAreas[language];

  const contentEn = (() => {
    if (value === 'mossyRock') return `near a ${localeAreas.mossyRock}`;
    if (value === 'icyRock') return `near an ${localeAreas.icyRock}`;
    if (value === 'magneticField') return `in a ${localeAreas.magneticField}`;
    if (value === 'mountLanakila') return `at ${localeAreas.mountLanakila}`;
    return '';
  })();

  const contentKo = localeAreas[value] ? `${localeAreas[value]}에서` : '특정장소에서';

  const content = language === 'en'
    ? contentEn
    : contentKo;

  return <span>{content}</span>;
}

const ConditionLocation = {
  location: ConditionRegion,
  area: ConditionArea,
};

export default ConditionLocation;
