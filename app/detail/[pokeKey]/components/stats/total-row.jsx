'use client';

import React from 'react';
import { useLanguage } from '@/app/language-provider';
import StatRow from './stat-row';

export default function TotalRow({ totalStat, totalEffort }) {
  const localeText = {
    ko: {
      totalStatText: '합계',
      totalEffortText: '노력치',
    },
    en: {
      totalStatText: 'total',
      totalEffortText: 'effort',
    },
  };
  const { language } = useLanguage();

  const { totalStatText, totalEffortText } = localeText[language] || localeText.ko;

  return (
    <StatRow
      stat
    />
  );
}
