import React from 'react';
import ConditionContainer from '../condition-container';

const TEXT_GENERATORS = {
  ko: (damage) => `누적 반동 데미지 ${damage} 이상 입은 상태에서`,
  en: (damage) => `after losing at least ${damage} HP from recoil damage`,
};

export default function RecoilDamageCase({ value, language }) {
  const text = TEXT_GENERATORS[language](value);

  return (
    <ConditionContainer>
      {text}
    </ConditionContainer>
  );
}
