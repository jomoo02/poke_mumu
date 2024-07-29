'use client';

import React from 'react';
import { useLanguage } from '@/app/language-provider';
import { getDefenseCompatibility } from '@/app/lib/type-compatibility';
import Type from '@/app/ui/detail/type';
import TitleHeader from './title-header';

const TYPE_GRID_COLS_MAP = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-1',
  3: 'md:grid-cols-1 lg:grid-cols-2',
  4: 'md:grid-cols-1 lg:grid-cols-2',
  8: 'md:grid-cols-3 lg:grid-cols-4',
  9: 'md:grid-cols-3 lg:grid-cols-4',
  10: 'md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5',
  11: 'md:grid-cols-4 lg:grid-cols-5',
  12: 'md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6',
  13: 'md:grid-cols-6 lg:grid-cols-7',
  14: 'md:grid-cols-6 lg:grid-cols-7',
  16: 'md:grid-cols-6 lg:grid-cols-7',
  0: 'md:grid-cols-2 lg:grid-cols-3',
};

const LANGUAGE_CONTENT = {
  ko: {
    title: '방어 상성',
    typeText: '타입',
    textDirection: 'flex-row',
  },
  en: {
    title: 'defense Compatibility',
    typeText: 'type',
    textDirection: 'flex-row-reverse',
  },
};

function TypeDefenseCompatibility({ types }) {
  const dfCompatibility = getDefenseCompatibility(types);
  const compatibilityValues = Object.keys(dfCompatibility).sort((a, b) => b - a);

  return (
    <div className="flex justify-center flex-col md:flex-row">
      {compatibilityValues.map((compatibilityValue) => {
        const curTypes = dfCompatibility[compatibilityValue];

        const gridCols = TYPE_GRID_COLS_MAP[curTypes.length] || TYPE_GRID_COLS_MAP[0];
        const isFlexAuto = curTypes.length <= 4 ? '' : 'flex-auto';

        return (
          <div
            key={compatibilityValue}
            className={`flex gap-x-2 md:flex-col border-b last:border-b-0 md:border-b-0 py-1.5 md:py-0 md:border-r ${isFlexAuto}`}
          >
            <div className="flex justify-center items-center md:py-1 md:border-b">
              <h3 className="text-[13px] md:text-sm w-16 font-medium text-center align-top">
                {`x ${compatibilityValue}`}
              </h3>
            </div>
            <div className="flex justify-center md:px-3.5 md:py-3">
              <div
                className={`grid grid-cols-3 sm:grid-cols-6 ${gridCols} gap-x-2.5 sm:gap-x-3 lg:gap-x-2.5 gap-y-2 sm:gap-y-2 lg:gap-y-2.5 justify-items-center`}
              >
                {curTypes.map((type) => (
                  <Type type={type} key={type} />
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function DefenseCompatibility({ types }) {
  const { language } = useLanguage();
  const mainType = types[0];
  const { title, typeText, textDirection } = LANGUAGE_CONTENT[language];

  return (
    <div>
      <TitleHeader type={mainType} title={title} />
      <div className={`border-2 border-t-0 ${mainType}-border rounded-b-sm`}>
        <div className={`flex ${textDirection} py-1 md:py-1.5 justify-center items-center gap-x-2.5 ${mainType}-bg1 border-b-2 ${mainType}-border`}>
          <div className="flex gap-x-2">
            {types.map((type) => (
              <div key={type}>
                <Type type={type} />
              </div>
            ))}
          </div>
          <div className="text-xs xs:text-sm font-medium capitalize">{typeText}</div>
        </div>
        <TypeDefenseCompatibility types={types} />
      </div>
    </div>
  );
}
