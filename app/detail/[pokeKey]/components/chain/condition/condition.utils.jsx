import React from 'react';
import {
  MoveLink,
  ItmeLinkWithParticle,
} from '@/app/components/link-containers';

const renderAgileStyle = (value, language) => {
  const localeContent = {
    ko: {
      suffix: '속공으로 20번 사용',
    },
    en: {
      prefix: 'Use',
      suffix: 'in the agile style 20 times in Hisui',
    },
  };

  const { prefix, suffix } = localeContent[language];

  return (
    <>
      {prefix && <span className="mr-1">{prefix}</span>}
      <MoveLink move={value} language={language} />
      <span className="ml-1">{suffix}</span>
    </>
  );
};

const renderGender = (value, language) => {
  const genderMap = {
    male: 2,
    female: 1,
  };

  const { male } = genderMap;

  const localeGenderContent = {
    male: {
      ko: '수컷',
      en: 'Male',
    },
    female: {
      ko: '암컷',
      en: 'Female',
    },
  };

  const gender = value === male ? localeGenderContent.male : localeGenderContent.female;
  const content = gender[language] || gender.ko;
  return <span>{content}</span>;
};

const renderCondition = (key, value, laguage) => {
  switch (key) {
    case 'agile_style':
      return renderAgileStyle(value, laguage);
    case 'gender':
      return renderGender(value, laguage);
    default:
      return renderAgileStyle(value, laguage);
  }
};

export default renderCondition;
