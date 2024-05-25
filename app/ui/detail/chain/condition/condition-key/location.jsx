import React from 'react';
import ConditionContainer from '../condition-container';

const LOCATION = {
  alola: '알로라지방',
  galar: '가라르지방',
  hisui: '히스이지방',
  'mount-lanakila': '라나키라마운틴',
  'magnetic-field': '특정장소',
  'mossy-rock': '특정장소',
  'icy-rock': '특정장소',
};

export default function LocationCase({ value, language }) {
  const location = language === 'ko' ? LOCATION[value] : `in ${value}`;
  const getText = () => {
    if (language === 'ko') {
      return ![LOCATION.alola, LOCATION.galar, LOCATION.hisui].includes(location) ? '에서' : '';
    }
    return '';
  };

  const text = getText();

  return (
    <ConditionContainer>
      {location}
      {text}
    </ConditionContainer>
  );
}
