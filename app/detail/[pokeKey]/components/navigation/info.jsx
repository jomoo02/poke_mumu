'use client';

import React from 'react';
import { useLanguage } from '@/app/language-provider';

export default function PokeInfo({ info }) {
  const {
    name, form, no,
  } = info;

  const { language } = useLanguage();

  const isShowForm = form.en !== 'default' && form.en !== 'mega';

  return (
    <div className="flex items-center text-sm gap-x-2 py-1 flex-col justify-center">
      <div className="flex gap-x-2 text-sm md:text-base items-center capitalize">
        <span className="capitalize text-slate-500 font-semibold text-sm">
          {`no. ${no}`}
        </span>
        <span className="text-center text-slate-600/90 font-semibold text-[15px]">
          {name[language] || name.ko}
        </span>
      </div>
      {isShowForm && (
        <span className="text-slate-600 font-semibold text-xs leading-3">
          {`(${form[language] || form.ko})`}
        </span>
      )}
    </div>
  );
}
