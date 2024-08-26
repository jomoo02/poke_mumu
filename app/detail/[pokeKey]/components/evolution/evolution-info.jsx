'use client';

import React from 'react';
import { getLocationInfos } from './evolution-info/utils';

function extractConditions(chain) {
  let conditions = [];

  chain.forEach((item) => {
    if (item.detail) {
      item.detail.forEach((detail) => {
        if (detail.condition) {
          conditions = conditions.concat(detail.condition);
        }
      });
    }

    if (item.to && item.to.length > 0) {
      conditions = conditions.concat(extractConditions(item.to));
    }
  });

  return conditions;
}

export default function EvolutionInfo({ chainIndex }) {
  // const conditions = extractConditions(chain);
  const infos = getLocationInfos(chainIndex);
  return (
    <>
      {infos.map(({ key, info}) => (
        <div key={key} className="border-y my-1">
          {info.ko.map(({ region, area }) => (
            <div key={region} className="flex">
              <div>{region}:</div>
              <div>{area}</div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
