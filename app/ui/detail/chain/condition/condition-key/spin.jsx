import React from 'react';
import ConditionContainer from '../condition-container';

const LANGUAGE_CONTENT = {
  ko: {
    item: '사탕공예',
    suffix: '를 지니게하고 L스틱으로 캐릭터를 계속 회전',
    className: '',
  },
  en: {
    item: 'Sweet',
    prefix: 'Spin holding a',
    className: 'gap-x-1',
  },
};

export default function SpinCase({ language }) {
  const {
    item, prefix, suffix, className,
  } = LANGUAGE_CONTENT[language];

  return (
    <ConditionContainer className={className}>
      {prefix && <span>{prefix}</span>}
      <span>{item}</span>
      {suffix && <span>{suffix}</span>}
    </ConditionContainer>
  );
}
