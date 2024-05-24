import React from 'react';

function ConditionContainer({ children }) {
  return (
    <div className="flex justify-center items-center">
      {children}
    </div>
  );
}

export default function GenderCase({ value, language }) {
  const GENEDER_MAP = {
    2: { ko: '수컷', en: 'Male' },
    1: { ko: '암컷', en: 'Female' },
  };
  const gender = GENEDER_MAP[value]?.[language];

  return (
    <ConditionContainer>
      {gender}
    </ConditionContainer>
  );
}
