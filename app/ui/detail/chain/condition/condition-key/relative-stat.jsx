import React from 'react';

const TEXT_GENERATORS = {
  en: (stat) => {
    if (stat === 1) {
      return 'Attack > Defense';
    } if (stat === -1) {
      return 'Attack < Defense';
    }
    return 'Attack = Defense';
  },
  ko: (stat) => {
    if (stat === 1) {
      return '공격이 방어보다 높다';
    } if (stat === -1) {
      return '방어가 공격보다 높다';
    }
    return '공격과 방어가 같다';
  },
};

export default function RelativeStatCase({ value, language }) {
  const text = TEXT_GENERATORS[language](value);

  return (
    <span>
      {text}
    </span>
  );
}
