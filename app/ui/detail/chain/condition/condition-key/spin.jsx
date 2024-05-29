import React from 'react';

const LANGUAGE_CONTENT = {
  ko: {
    item: '사탕공예',
    suffix: '를 지니게하고 L스틱으로 캐릭터를 계속 회전',
  },
  en: {
    item: 'Sweet',
    prefix: 'Spin holding a',
  },
};

export default function SpinCase({ language }) {
  const {
    item, prefix, suffix,
  } = LANGUAGE_CONTENT[language];

  return (
    <>
      {prefix && <span>{prefix}</span>}
      <span className={language === 'en' ? 'ml-1' : ''}>{item}</span>
      {suffix && <span>{suffix}</span>}
    </>
  );
}
