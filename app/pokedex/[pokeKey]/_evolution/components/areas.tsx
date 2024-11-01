'use client';

import React from 'react';
import type { Type } from '@/app/data/pokeType';
import useAreas from '../hooks/useAreas';

interface AreasProps {
  chainIndex: number;
  type: Type;
}

export default function Areas({
  chainIndex,
  type,
}: AreasProps) {
  const { areaInfoList } = useAreas(chainIndex);

  if (areaInfoList.length === 0) {
    return null;
  }

  return (
    <>
      {areaInfoList.map(({ key, areaInfo, title }) => (
        <div key={key}>
          <div
            className={`flex justify-center py-0.5 font-semibold items-center ${type} text-white text-sm`}
          >
            {title}
          </div>
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
        </div>
      ))}
    </>
  );
}
