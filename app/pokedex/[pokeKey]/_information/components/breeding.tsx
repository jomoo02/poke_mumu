'use client';

import React from 'react';
import type { PokeDetail } from '@/app/models/detail.type';
import useBreeding from '../hooks/useBreeding';
import InfoItem from './info-item';

interface Gender {
  text: string;
  value: number | boolean;
}

function GenderRate({
  male,
  female,
  genderless,
  subject,
}: {
  subject: string;
  male: Gender;
  female: Gender;
  genderless: Gender;
}) {
  if (genderless.value) {
    return (
      <InfoItem
        subject={subject}
        content={genderless.text}
      />
    );
  }

  return (
    <InfoItem subject={subject}>
      <div className="text-slate-600 text-sm sm:text-[15px] font-semibold capitalize">
        <span className="text-blue-500">
          {`${male.text}: ${male.value}`}
        </span>
        {', '}
        <span className="text-pink-500">
          {`${female.text}: ${female.value}`}
        </span>
      </div>
    </InfoItem>
  );
}

export default function Breeding({
  pokeDetail,
}: {
  pokeDetail: PokeDetail;
}) {
  const {
    title,
    genderRate,
    eggGroups,
    hatchCounter,
  } = useBreeding(pokeDetail);

  const {
    male,
    female,
    genderless,
  } = genderRate.content;

  return (
    <div>
      <h3 className="info-title">{title}</h3>
      <InfoItem
        subject={eggGroups.subject}
        content={eggGroups.content.join(', ')}
      />
      <GenderRate
        subject={genderRate.subject}
        male={male}
        female={female}
        genderless={genderless}
      />
      <InfoItem
        subject={hatchCounter.subject}
        content={hatchCounter.content || '—'}
      />
    </div>
  );
}
