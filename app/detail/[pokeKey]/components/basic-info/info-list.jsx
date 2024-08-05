'use client';

import React from 'react';
import { useLanguage } from '@/app/language-provider';
import Type from '@/app/ui/detail/type';
import { formatMeasurement } from '../../utils/format';

const localeTexts = {
  ko: {
    nationalText: '전국도감 번호',
    nameText: '이름',
    typeText: '타입',
    formText: '모습',
    heightText: '키',
    weightText: '몸무게',
  },
  en: {
    nationalText: 'national no',
    nameText: 'name',
    typeText: 'type',
    formText: 'form',
    heightText: 'height',
    weightText: 'weight',
  },
};

function Info({
  subject, children, className, order,
}) {
  const containerBorder = order === 'first' ? 'border-y' : 'border-b';

  return (
    <div className={`flex gap-x-5 md:gap-x-10 py-1 items-center min-w-72 ${containerBorder} min-h-[35px]`}>
      <div className="w-24 text-right text-slate-500 font-semibold text-sm capitalize">{subject}</div>
      <div className={`${className} text-slate-600 font-semibold text-[15px]`}>{children}</div>
    </div>
  );
}

export default function InfoList({ basicInfo }) {
  const {
    no, name, form, types, weight, height,
  } = basicInfo;

  const { language } = useLanguage();

  const infoTexts = localeTexts[language] || localeTexts.ko;

  return (
    <div className="px-2 pb-1 md:pb-0 flex flex-col justify-center">
      <Info subject={infoTexts.nationalText} order="first">
        {no}
      </Info>
      <Info subject={infoTexts.nameText}>
        {name[language]}
      </Info>
      <Info subject={infoTexts.typeText} className="flex gap-x-2">
        {types.map((type) => <Type type={type} key={type} />)}
      </Info>
      <Info subject={infoTexts.formText} className="capitalize">
        {form[language]}
      </Info>
      <Info subject={infoTexts.heightText}>
        {formatMeasurement(height, 'm')}
      </Info>
      <Info subject={infoTexts.weightText}>
        {formatMeasurement(weight, 'kg')}
      </Info>
    </div>
  );
}
