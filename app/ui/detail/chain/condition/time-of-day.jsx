import React from 'react';
import { makeFirstUpperCaseTextArray } from '@/app/lib/utils';

export default function TimeOfDayCase({ value, language }) {
  const TIME_OF_DAY_MAP_KO = {
    night: '밤',
    day: '낮',
    dusk: '황혼',
    'full-moon': '보름달',
  };

  const getTimeText = (time) => {
    if (language === 'en') {
      return ['dusk', 'full-mon'].includes(time) ? time : `${makeFirstUpperCaseTextArray(time.split('-'))}time`;
    }
    return TIME_OF_DAY_MAP_KO[time];
  };

  const timeText = getTimeText(value);

  return (
    <div className="text-sm flex justify-center items-center">
      {timeText}
    </div>
  );
}
