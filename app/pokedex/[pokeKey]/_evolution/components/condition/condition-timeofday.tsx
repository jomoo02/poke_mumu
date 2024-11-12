import React from 'react';
import { useLanguage } from '@/app/language-provider';
import {
  localizedTimeOfDay,
  type TimeOfDay,
} from '@/app/data/timeOfDay';

function TimeOfDays({ value }: { value: TimeOfDay }) {
  const { language } = useLanguage();

  const localeTimeOfDay = localizedTimeOfDay[language];

  const content = localeTimeOfDay[value];

  return <span>{content}</span>;
}

const ConditionTimeOfDay = {
  timeOfDay: TimeOfDays,
};

export default ConditionTimeOfDay;
