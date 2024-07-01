'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/app/language-provider';
import TitleHeader from './title-header';

const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

const formClassMap = {
  10: 'grid grid-cols-3 md:grid-cols-5 gap-y-3 md:gap-y-5',
  18: 'grid grid-cols-3 md:grid-cols-6 gap-y-3 md:gap-y-5',
  20: 'grid grid-cols-3 md:grid-cols-5 gap-y-3 md:gap-y-5',
  28: 'grid grid-cols-3 md:grid-cols-7 gap-y-3 md:gap-y-5',
  5: 'flex flex-wrap gap-x-5 justify-around',
  6: 'grid grid-cols-3 md:grid-cols-6 gap-y-3 md:gap-y-5',
  8: 'grid grid-cols-3 md:grid-cols-4 gap-y-3 md:gap-y-5',
  9: 'grid grid-cols-3 gap-y-3 md:gap-y-5',
  0: 'flex flex-wrap gap-x-5 justify-evenly',
};

const languageContent = {
  ko: {
    one: '의 모습',
    many: '의 모습들',
  },
  en: {
    one: "'s form",
    many: "'s forms",
  },
};

const specialFormSrcMap = {
  '666': '/vivillon-icy-snow.png',
  '666-meadow': '/vivillon-meadow.png',
}

function FormInfo({ id, name, language }) {
  
  const src = specialFormSrcMap[id] || `${url}/${id}.png`; 
  return (
    <>
      <Image
        src={src}
        width={80}
        height={80}
        alt={id}
        priority
      />
      <div className="text-center text-sm font-medium capitalize">{name[language]}</div>
    </>
  );
}

export default function Forms({ forms, name, type }) {
  const { language } = useLanguage();

  const formCount = forms?.length || 0;
  const formClass = formClassMap[formCount] || formClassMap[0];

  const { one, many } = languageContent[language];
  const title = `${name[language]}${formCount > 1 ? many : one}`;

  return (
    <div>
      <TitleHeader type={type} title={title} />
      <div className={`border-2 border-t-0 ${type}-border rounded-b-sm px-1 md:px-5 pt-2.5 pb-3.5 ${formClass}`}>
        {forms.map(({ id, name: formName }) => (
          <div key={`${id}-${formName.en}`} className="flex flex-col justify-center items-center">
            <FormInfo id={id} name={formName} language={language} />
          </div>
        ))}
      </div>
    </div>
  );
}
