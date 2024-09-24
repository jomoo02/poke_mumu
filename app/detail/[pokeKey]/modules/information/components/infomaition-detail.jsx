'use client';

import React from 'react';
import useInformationDetail from '../hooks/useInformationDetail';
import InfoContainer from './info-container';

function GrowthRate({ growthRate }) {
  const {
    subject,
    content,
  } = growthRate;

  const {
    atLevel50,
    atLevel100,
    growthRate: pokeGrowthRate,
  } = content;

  return (
    <InfoContainer subject={subject}>
      <div className="info-content grid gap-y-0.5">
        <div className="capitalize">{pokeGrowthRate}</div>
        <div className="flex gap-x-2 items-center">
          <span className="text-slate-500/90 text-xs xs:text-[13px] sm:text-sm">
            {atLevel50.text}
          </span>
          :
          <span>{atLevel50.value}</span>
        </div>
        <div className="flex gap-x-2 items-center">
          <span className="text-slate-500/90 text-xs xs:text-[13px] sm:text-sm">
            {atLevel100.text}
          </span>
          :
          <span>{atLevel100.value}</span>
        </div>
      </div>
    </InfoContainer>
  );
}

export default function InformationDetail({ pokeInfo }) {
  const {
    title,
    genera,
    height,
    weight,
    captureRate,
    growthRate,
  } = useInformationDetail(pokeInfo);

  return (
    <div>
      <h3 className="info-title">{title}</h3>
      <InfoContainer
        subject={genera.subject}
        content={genera.content}
      />
      <InfoContainer
        subject={height.subject}
        content={height.content}
      />
      <InfoContainer
        subject={weight.subject}
        content={weight.content}
      />
      <InfoContainer
        subject={captureRate.subject}
        content={captureRate.content}
      />
      <GrowthRate growthRate={growthRate} />
    </div>
  );
}
