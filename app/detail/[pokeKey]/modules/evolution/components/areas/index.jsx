'use client';

import React from 'react';
import useAreas from '../../hooks/useAreas';

function Header({ title, type }) {
  return (
    <div
      className={`flex justify-center py-0.5 font-semibold items-center ${type} text-white text-sm`}
    >
      {title}
    </div>
  );
}

function Info({ areaInfo }) {
  return (
    <>
      {areaInfo.map(({ region, area }) => (
        <div
          key={region}
          className="grid divide-x grid-cols-5 text-sm  leading-4 font-medium h-10 items-stretch border-b-2 last:border-b-0"
        >
          <div className="flex justify-center items-center">
            {region}
          </div>
          <div className="col-span-4 flex items-center px-2">
            {area}
          </div>
        </div>
      ))}
    </>
  );
}

export default function EvolutionAreas({
  chainIndex,
  type,
}) {
  const { areas } = useAreas(chainIndex);

  if (areas.length === 0) {
    return null;
  }

  return (
    <>
      {areas.map(({ key, areaInfo, title }) => (
        <div key={key}>
          <Header title={title} type={type} />
          <Info areaInfo={areaInfo} />
        </div>
      ))}
    </>
  );
}
