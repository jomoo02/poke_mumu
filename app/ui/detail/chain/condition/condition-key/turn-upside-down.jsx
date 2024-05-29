import React from 'react';

const LANGUAGE_CONTENT = {
  ko: '기기를 위아래 거꾸로 잡은 상태',
  en: 'holding console upside down',
};

export default function TurnUpsideDownCase({ language }) {
  const text = LANGUAGE_CONTENT[language];

  return (
    <span>
      {text}
    </span>
  );
}
