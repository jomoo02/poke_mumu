import React from 'react';
import ConditionContainer from '../condition-container';

const LANGUAGE_CONTENT = {
  ko: {
    prefix: '원래 성격에 따라',
    amped: '노력, 고집, 개구쟁이, 용감, 온순, 장난꾸러기, 촐랑, 덜렁, 변덕, 건방, 성급, 명랑, 천진난만',
    lowKey: '외로움, 대담, 무사태평, 조심, 의젓, 수줍음, 냉정, 차분, 얌전, 신중, 겁쟁이, 성실',
  },
  en: {
    prefix: 'Nature: ',
    amped: 'Hardy, Brave, Adamant, Naughty, Docile, Impish, Lax, Hasty, Jolly, Naive, Rash, Sassy, or Quirky',
    lowKey: 'Lonely, Bold, Relaxed, Timid, Serious, Modest Mild, Quiet, Bashful, Calm, Gentle, or Careful',
  },
};

export default function RelativeNature({ value, language }) {
  const { prefix, amped, lowKey } = LANGUAGE_CONTENT[language];
  const natures = value === 'amped' ? amped : lowKey;

  return (
    <ConditionContainer>
      <span>{prefix}</span>
      <span className="text-xs">{`(${natures})`}</span>
    </ConditionContainer>
  );
}
