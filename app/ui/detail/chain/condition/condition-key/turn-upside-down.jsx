import React from 'react';
import ConditionContainer from '../condition-container';

export default function TurnUpsideDownCase({ language }) {
  const text = language === 'ko' ? (
    '기기를 위아래 거꾸로 잡은 상태'
  ) : 'holding console upside down';

  return (
    <ConditionContainer>
      {text}
    </ConditionContainer>
  );
}
