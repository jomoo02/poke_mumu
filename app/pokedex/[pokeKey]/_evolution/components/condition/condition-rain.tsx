import React from 'react';
import { useLanguage } from '@/app/language-provider';

function NeedsOverworldRain() {
  const { language } = useLanguage();

  const localizedContent = {
    en: 'during rain',
    ko: '비가 오는 필드',
  };

  const content = localizedContent[language];

  return <span>{content}</span>;
}

const ConditionRain = {
  rain: NeedsOverworldRain,
};

export default ConditionRain;
