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

const localeAffix = {
  en: {
    prefix: 'in',
  },
  ko: {
    suffix: '에서',
  },
};

function checkKoLocationParticle(location) {
  return !Object.keys(regionsKo).includes(location) ? '에서' : '';
}

export default function Location({ value, language }) {
  const { prefix, suffix } = localeAffix[language] || localeAffix.en;

  const location = language === 'ko' ? locationsKo[value] : value;

  return (
    <>
      {prefix && <span className="mr-1">{prefix}</span>}
      <span className="capitalize inline-block">{location}</span>
      {suffix && checkKoLocationParticle(value) && <>{suffix}</>}
    </>
  );
}
