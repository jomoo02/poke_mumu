'use client';

import React from 'react';
import type { PokeDetail } from '@/app/models/Detail';
import type { Stat } from '@/app/data/stats';
import useDetail from '../hooks/useDetail';
import InfoItem from './info-item';

type AtLevel = {
  text: string;
  value: string;
};

function GrowthRate({
  subject,
  atLevel50,
  atLevel100,
  growthRate,
}: {
  subject: string;
  atLevel50: AtLevel;
  atLevel100: AtLevel;
  growthRate: string;
}) {
  return (
    <InfoItem subject={subject}>
      <div className="capitalize">{growthRate}</div>
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
    </InfoItem>
  );
}

function EffortStats({
  subject,
  effortStats,
}: {
  subject: string;
  effortStats: {
    stat: Stat;
    value: number;
  }[]
}) {
  return (
    <InfoItem subject={subject}>
      {effortStats.map(({ stat, value }) => (
        <div key={stat}>
          {`${stat}: ${value}`}
        </div>
      ))}
    </InfoItem>
  );
}

export default function Detail({
  pokeDetail,
}: {
  pokeDetail: PokeDetail,
}) {
  const {
    title,
    genera,
    height,
    weight,
    captureRate,
    growthRate,
    effortStats,
  } = useDetail(pokeDetail);

  const growthRateContent = growthRate.content;

  return (
    <div>
      <h3>{title}</h3>
      <InfoItem
        subject={genera.subject}
        content={genera.content}
      />
      <InfoItem
        subject={height.subject}
        content={height.content}
      />
      <InfoItem
        subject={weight.subject}
        content={weight.content}
      />
      <InfoItem
        subject={captureRate.subject}
        content={captureRate.content}
      />
      <GrowthRate
        subject={growthRate.subject}
        atLevel50={growthRateContent.atLevel50}
        atLevel100={growthRateContent.atLevel100}
        growthRate={growthRateContent.growthRate}
      />
      <EffortStats
        subject={effortStats.subject}
        effortStats={effortStats.content}
      />
    </div>
  );
}
