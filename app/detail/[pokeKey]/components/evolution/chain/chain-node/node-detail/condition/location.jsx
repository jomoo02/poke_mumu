import React from 'react';

const regionsKo = {
  alola: '알로라지방',
  galar: '가라르지방',
  hisui: '히스이지방',
};

const locationsKo = {
  'mount-lanakila': '라나키라마운틴',
  'magnetic-field': '특정장소',
  'mossy-rock': '특정장소',
  'icy-rock': '특정장소',
  ...regionsKo,
};

const locaitionHandlerWithLanguage = {
  en: {
    getLocation: (location) => `in ${location}`,
  },
  ko: {
    getLocation: (location) => {
      const locationText = locationsKo[location] || '';
      const particle = !Object.keys(regionsKo).includes(location) ? '에서' : '';
      return `${locationText}${particle}`;
    },
  },
};

export default function Location({ value, language }) {
  const { getLocation } = locaitionHandlerWithLanguage[language];

  const content = getLocation(value);

  return (
    <>
      {content}
    </>
  );
}
