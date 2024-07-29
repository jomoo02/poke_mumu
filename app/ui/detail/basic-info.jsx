'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/app/language-provider';
import Type from './type';
import TitleHeader from './title-header';

const languageText = {
  ko: {
    title: '기본 정보',
    typeText: '타입',
    nationalText: '전국도감 번호',
    nameText: '이름',
    formText: '모습',
  },
  en: {
    title: 'default info',
    typeText: 'type',
    nationalText: 'national no',
    nameText: 'name',
    formText: 'form',
  },
};

function Title({ basicInfo }) {
  const { no, name, form } = basicInfo;
  const { language } = useLanguage();

  return (
    <h2 className="mb-2 sm:mb-3">
      <span className="sm:text-xl text-slate-500 font-semibold">
        {`No. ${no}`}
      </span>
      <span className="ml-1.5 sm:ml-2 mr-[3px] sm:mr-1 sm:text-xl text-slate-600/90 font-bold">
        {name[language] || name.ko}
      </span>
      {form.en !== 'default' && form.en !== 'mega' && (
        <span className="text-xs sm:text-base text-slate-600/90 font-semibold">
          {`(${form[language] || form.ko})`}
        </span>
      )}
    </h2>
  );
}

function Info({
  subject, children, className, order,
}) {
  const containerBorder = order === 'first' ? 'border-y' : 'border-b';

  return (
    <div className={`flex gap-x-5 md:gap-x-10 py-1 items-center min-w-72 capitalize ${containerBorder}`}>
      <div className="w-24 text-right text-slate-500 font-semibold text-sm">{subject}</div>
      <div className={`${className} text-slate-600 font-semibold text-[15px]`}>{children}</div>
    </div>
  );
}

export default function BasicInfo({ basicInfo }) {
  const {
    no, name, sprity, order, form, types,
  } = basicInfo;
  const { language } = useLanguage();

  const exceptionOrder = [];
  const basicUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork';
  const url = exceptionOrder.includes(Number(order)) ? `/${order}.png` : `${basicUrl}/${sprity}`;

  const mainType = types[0];

  const {
    title, typeText, nationalText, nameText, formText,
  } = languageText[language];

  return (
    <div>
      <Title basicInfo={basicInfo} />
      <TitleHeader title={title} type={mainType} />
      <div className={`border-2 border-t-0 ${mainType}-border md:py-3 md:flex md:justify-evenly`}>
        <div className="flex justify-center items-center py-3 md:py-0">
          <Image
            src={url}
            alt={name.en}
            width={200}
            height={200}
            priority
          />
        </div>
        <div className="px-2 pb-1 md:pb-0 flex flex-col justify-center">
          <Info subject={nationalText} order="first">
            {no}
          </Info>
          <Info subject={nameText}>
            {name[language]}
          </Info>
          <Info subject={typeText} className="flex gap-x-2">
            {types.map((type) => <Type type={type} key={type} />)}
          </Info>
          <Info subject={formText}>
            {form[language]}
          </Info>
        </div>
      </div>
    </div>
  );
}
