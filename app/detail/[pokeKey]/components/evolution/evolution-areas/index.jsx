'use client';

import React from 'react';
import { getLocationInfos } from './utils';
import AreaHeader from './area-header';
import AreaInfo from './area-info';

export default function EvolutionAreas({ chainIndex, type }) {
  const areaInfos = getLocationInfos(chainIndex);

  if (!areaInfos) {
    return null;
  }

  return (
    <>
      {areaInfos.map(({ key, areaInfo, title }) => (
        <div key={key}>
          <AreaHeader title={title} type={type} />
          <AreaInfo areaInfo={areaInfo} />
        </div>
      ))}
    </>
  );
}
