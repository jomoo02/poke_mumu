import React from 'react';
import { useLanguage } from '@/app/language-provider';

export default function AreaInfo({ areaInfo }) {
  const { language } = useLanguage();

  const localeAreaInfo = areaInfo[language] || areaInfo.ko;

  return (
    <>
      {localeAreaInfo.map(({ region, area }) => (
        <div
          key={region}
          className="grid divide-x grid-cols-5 text-sm  leading-4 font-medium h-10 items-stretch border-b-2 last:border-b-0"
        >
          <div className="flex justify-center items-center">
            {region}
          </div>
          <div className="col-span-4 flex items-center px-2">
            {area}
          </div>
        </div>
      ))}
    </>
  );
}
