import React from 'react';
import { makeFirstUpperCaseTextArray } from '@/app/lib/utils';

export default function TimeOfDayCase({ time, language }) {
  const TIME_OF_DAY_MAP_KO = {
    night: '밤',
    day: '낮',
    dusk: '황혼',
    'full-moon': '보름달',
  };

  const getTimeText = (timeValue) => {
    if (language === 'en') {
      return ['dusk', 'full-mon'].includes(timeValue) ? timeValue : `${makeFirstUpperCaseTextArray(timeValue.split('-'))}time`;
    }
    return `${TIME_OF_DAY_MAP_KO[timeValue]}`;
  };

  const timeText = getTimeText(time);

  return (
    <div className="text-sm flex justify-center items-center">
      {timeText}
    </div>
  );
}
