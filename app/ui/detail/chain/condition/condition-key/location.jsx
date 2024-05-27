import React from 'react';
import ConditionContainer from '../condition-container';

const REGION = {
  alola: '알로라지방',
  galar: '가라르지방',
  hisui: '히스이지방',
};

const LOCATION_KO = {
  'mount-lanakila': '라나키라마운틴',
  'magnetic-field': '특정장소',
  'mossy-rock': '특정장소',
  'icy-rock': '특정장소',
  ...REGION,
};

const LOCATION_HANDLERS = {
  en: {
    getLocation: (location) => `in ${location}`,
  },
  ko: {
    getLocation: (location) => LOCATION_KO[location],
    getText: (location) => (!Object.keys(REGION).includes(location) ? '에서' : ''),
  },
};

export default function LocationCase({ value, language }) {
  const { getLocation, getText } = LOCATION_HANDLERS[language];
  const location = getLocation(value);
  const text = getText ? getText(value) : '';

  return (
    <ConditionContainer>
      {location}
      {text}
    </ConditionContainer>
  );
}
