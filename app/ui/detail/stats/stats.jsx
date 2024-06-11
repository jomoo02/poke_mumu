'use client';

import React from 'react';
import { statKo, statEn } from '@/app/translations/stat';
import { useLanguage } from '@/app/language-provider';
import Bar from '@/app/ui/detail/stats/bar';
import Header from '../Header';

const LANGUAGE_TEXT = {
  ko: {
    title: '스탯',
    baseText: '종족값',
    effortText: '노력치',
    totalText: '합계',
  },
  en: {
    title: 'stat',
    baseText: 'base stat',
    effortText: 'effort',
    totalText: 'total',
  },
};

function sumStats(stats) {
  return stats.reduce((acc, { value }) => acc + value, 0);
}

function makeTotalStats(base, effort) {
  return base.map(({ stat, value }) => {
    const foundEffort = effort.find(({ stat: effortStat }) => stat === effortStat);
    const effortValue = foundEffort ? foundEffort.value : 0;

    return {
      stat,
      value,
      effortValue,
    };
  });
}

function SubHeader({ baseText, effortText, type }) {
  return (
    <div className={
      `${type} grid grid-cols-5 gap-x-1 sm:gap-x-3 text-sm text-center text-white font-semibold items-center capitalize border-t border-[#fafaf9]`
      }
    >
      <div />
      <div className="col-span-3 py-[2.5px] sm:py-[5px]">{baseText}</div>
      <div className="py-[2.5px] sm:py-[5px]">{effortText}</div>
    </div>
  );
}

function StatRow({
  statText, value, effortValue, children, className,
}) {
  return (
    <div className="grid grid-cols-5 py-[2.5px] sm:py-[5px] gap-x-0.5 sm:gap-x-3 items-center min-h-6">
      <div className="text-[13px] leading-5 sm:text-sm text-right pr-0.5 sm:pr-1.5 capitalize">
        {statText}
      </div>
      <div className="col-span-3 flex items-center gap-x-1 md:gap-x-4 sm:px-2">
        <div className={`min-w-9 max-w-9 text-center text-[13px] leading-5 sm:text-sm ${className}`}>{value}</div>
        {children}
      </div>
      <div className={`text-center text-[13px] leading-5 sm:text-sm ${className}`}>{effortValue}</div>
    </div>
  );
}

export default function Stats({ base, effort, type }) {
  const { language } = useLanguage();
  const { totalText } = LANGUAGE_TEXT[language];
  const { title, baseText, effortText } = LANGUAGE_TEXT[language];

  const languageStat = language === 'ko' ? statKo : statEn;

  const stats = makeTotalStats(base, effort);
  const maxStatValue = Math.max(...base.map(({ value }) => value));
  const totalBaseStats = sumStats(base);
  const totalEffortStats = sumStats(effort);

  return (
    <div>
      <Header type={type} title={title} />
      <SubHeader type={type} baseText={baseText} effortText={effortText} />
      <div className={`grid border-2 border-t-0 ${type}-border divide-y rounded-b-sm`}>
        {stats.map(({ stat, value, effortValue }) => (
          <StatRow key={stat} statText={languageStat[stat]} value={value} effortValue={effortValue}>
            <Bar value={value} max={maxStatValue} />
          </StatRow>
        ))}
        <StatRow
          statText={totalText}
          value={totalBaseStats}
          effortValue={totalEffortStats}
          className="font-semibold"
        />
      </div>
    </div>
  );
}
