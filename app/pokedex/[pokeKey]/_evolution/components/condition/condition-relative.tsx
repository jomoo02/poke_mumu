import React from 'react';
import { useLanguage } from '@/app/language-provider';

function Nature({ value }: { value: 'amped' | 'lowKey' }) {
  const { language } = useLanguage();

  const localizedNatures = {
    en: {
      amped: 'Hardy, Brave, Adamant, Naughty, Docile, Impish, Lax, Hasty, Jolly, Naive, Rash, Sassy, or Quirky',
      lowKey: 'Lonely, Bold, Relaxed, Timid, Serious, Modest Mild, Quiet, Bashful, Calm, Gentle, or Careful',
    },
    ko: {
      amped: '노력, 고집, 개구쟁이, 용감, 온순, 장난꾸러기, 촐랑, 덜렁, 변덕, 건방, 성급, 명랑, 천진난만',
      lowKey: '외로움, 대담, 무사태평, 조심, 의젓, 수줍음, 냉정, 차분, 얌전, 신중, 겁쟁이, 성실',
    },
  };

  const localeNatures = localizedNatures[language];

  const targetNatures = localeNatures[value];

  return <span className="text-xs">{targetNatures}</span>;
}

function PhysicalStats({ value }: { value: number }) {
  const { language } = useLanguage();

  const localizedContentFn = {
    en: (stat: number) => {
      if (stat === 1) return 'Attack > Defense';
      if (stat === -1) return 'Attack < Defense';
      return 'Attack = Defense';
    },
    ko: (stat: number) => {
      if (stat === 1) return '공격 > 방어';
      if (stat === -1) return '공격 < 방어';
      return '공격 = 방어';
    },
  };

  const localeContentFn = localizedContentFn[language];

  const content = localeContentFn(value);
  return <span>{content}</span>;
}

const ConditionRelative = {
  nature: Nature,
  physicalStats: PhysicalStats,
};

export default ConditionRelative;
