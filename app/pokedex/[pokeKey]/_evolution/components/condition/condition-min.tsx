import React from 'react';
import { useLanguage } from '@/app/language-provider';

function MinAffection({ value }: { value: number }) {
  const { language } = useLanguage();

  const localizedContent = {
    en: `min affection ${value}`,
    ko: `절친도 ${value}단계 이상일 때`,
  };

  const localeContent = localizedContent[language];

  return <span>{localeContent}</span>;
}

function MinBeauty() {
  const { language } = useLanguage();

  const localizedContent = {
    ko: '아름다움 수치 MAX 상태에서',
    en: 'max Beauty',
  };
  const localeContent = localizedContent[language];

  return <span>{localeContent}</span>;
}

function MinHappiness() {
  const { language } = useLanguage();

  const localizedContent = {
    en: 'with high Friendship',
    ko: '친밀도가 높은 상태에서',
  };
  const localeContent = localizedContent[language];

  return <span>{localeContent}</span>;
}

function MinLevel({ value }: { value: number }) {
  const content = `Level ${value}`;

  return <span>{content}</span>;
}

const ConditionMin = {
  affection: MinAffection,
  beauty: MinBeauty,
  happiness: MinHappiness,
  level: MinLevel,
};

export default ConditionMin;
