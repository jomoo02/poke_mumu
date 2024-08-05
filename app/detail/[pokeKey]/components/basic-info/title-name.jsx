'use client';

import React from 'react';
import { useLanguage } from '@/app/language-provider';

export default function TitleName({ basicInfo }) {
  const { no, name, form } = basicInfo;
  const { language } = useLanguage();

  return (
    <h2 className="mb-2 sm:mb-4">
      <span className="sm:text-xl text-slate-500 font-semibold capitalize">
        {`no. ${no}`}
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
