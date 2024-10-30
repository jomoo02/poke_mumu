'use client';

import React, { Fragment } from 'react';
import type { PokeDetail } from '@/app/models/Detail';
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
      <span className="text-blue-500">
        {`${male.text}: ${male.value}`}
      </span>
      {', '}
      <span className="text-pink">
        {`${female.text}: ${female.value}`}
      </span>
    </InfoItem>
  );
}

function EggGroups({
  subject,
  eggGroups,
}: {
  subject: string;
  eggGroups: string[];
}) {
  return (
    <InfoItem subject={subject}>
      {eggGroups.map((eggGroup, index) => (
        <Fragment key={eggGroup}>
          {index > 0 && ', '}
          {eggGroup}
        </Fragment>
      ))}
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
      <h3 className="">{title}</h3>
      <EggGroups
        subject={eggGroups.subject}
        eggGroups={eggGroups.content}
      />
      <GenderRate
        subject={genderRate.subject}
        male={male}
        female={female}
        genderless={genderless}
      />
      <InfoItem subject={hatchCounter.subject}>
        {hatchCounter.content || '—'}
      </InfoItem>
    </div>
  );
}
