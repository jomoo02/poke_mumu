import React from 'react';
import { makeFirstUpperCaseTextArray } from '@/app/lib/utils';

const TIME_OF_DAY_MAP_KO = {
  night: '밤',
  day: '낮',
  dusk: '황혼',
  'full-moon': '보름달',
};

const TEXT_GENERATORS = {
  ko: (time) => TIME_OF_DAY_MAP_KO[time],
  en: (time) => (['dusk', 'full-mon'].includes(time) ? time : `${makeFirstUpperCaseTextArray(time.split('-'))}time`),
};

export default function TimeOfDayCase({ value, language }) {
  const text = TEXT_GENERATORS[language](value);

  return (
    <span>
      {text}
    </span>
  );
}
