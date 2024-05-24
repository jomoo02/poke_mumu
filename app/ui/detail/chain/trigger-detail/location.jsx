import React from 'react';

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
  const locationText = language === 'ko' ? LOCATION[value] : `in ${value}`;

  return (
    <div className="flex justify-center items-center text-sm">
      {locationText}
    </div>
  );
}
