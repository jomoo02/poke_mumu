'use client';

import React from 'react';
import { statKo } from '@/app/translations/stat';
import { useLanguage } from '@/app/language-provider';

function fillMissingStatPropertiesEffort(base, effort) {
  return base.map(({ stat }) => {
    const effortStatObj = effort.find(({ stat: effortStat }) => stat === effortStat);
    if (effortStatObj) {
      return effortStatObj;
    }
    return { stat, value: 0 };
  });
}

function sumStats(stats) {
  return stats.reduce((acc, { value }) => acc + value, 0);
}

function convertStatsNames(language, stats) {
  const totalText = language === 'ko' ? '합계' : 'Total';
  const totalObj = { stat: totalText, value: sumStats(stats) };

  if (language === 'ko') {
    return [...stats.map(({ stat, value }) => ({ value, stat: statKo[stat] })), totalObj];
  }
  return [...stats, totalObj];
}

export default function Stats({ base, effort, type }) {
  const { language } = useLanguage();
  const filledEffort = fillMissingStatPropertiesEffort(base, effort);
  const baseText = language === 'ko' ? '종족값' : 'baseStats';
  const effortText = language === 'ko' ? '노력치' : 'effortStats';
  const baseStats = convertStatsNames(language, base);
  const effortStats = convertStatsNames(language, filledEffort);

  return (
    <div>
      <h3 className="text-2xl my-4">종족치</h3>
      <div className="grid grid-cols-8">
        <div className={`${type}`} />
        {baseStats.map(({ stat }) => (
          <div
            key={stat}
            className={
            `flex justify-center items-center ${type} h-11 text-xs sm:text-sm lg:text-base text-white font-medium text-balance text-center`
            }
          >
            {stat}
          </div>
        ))}
        <div className="flex justify-center items-center h-11 text-xs sm:text-sm lg:text-base">
          {baseText}
        </div>
        {baseStats.map(({ stat, value }) => (
          <div key={stat} className="flex justify-center items-center h-11 text-xs sm:text-sm lg:text-base">
            {value}
          </div>
        ))}
        <div className="flex justify-center items-center h-11 text-xs sm:text-sm lg:text-base">
          {effortText}
        </div>
        {effortStats.map(({ stat, value }) => (
          <div key={stat} className="flex justify-center items-center h-11 text-xs sm:text-sm lg:text-base">
            {value}
          </div>
        ))}
      </div>
    </div>
  );
}
