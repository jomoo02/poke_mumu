'use client';

import React, { Fragment } from 'react';
import useInformationBreeding from '../hooks/useInformationBreeding';
import InfoContainer from './info-container';

function GenderRate({ genderRate }) {
  const {
    subject,
    content,
  } = genderRate;

  const {
    genderless,
    male,
    female,
  } = content;

  if (genderless.value) {
    return (
      <InfoContainer
        subject={subject}
        content={genderless.text}
      />
    );
  }

  return (
    <InfoContainer subject={subject}>
      <div className="info-content">
        <span className="text-blue-500">
          {`${male.text}: ${male.value}%`}
        </span>
        {', '}
        <span className="text-pink-500">
          {`${female.text}: ${female.value}%`}
        </span>
      </div>
    </InfoContainer>
  );
}

function EggGroups({ eggGroups }) {
  const {
    subject,
    content,
  } = eggGroups;

  return (
    <InfoContainer subject={subject}>
      <div className="info-content">
        {content.map((eggGroup, index) => (
          <Fragment key={eggGroup}>
            {index > 0 && ', '}
            {eggGroup}
          </Fragment>
        ))}
      </div>
    </InfoContainer>
  );
}

export default function InformationBreeding({ pokeInfo }) {
  const {
    title,
    genderRate,
    eggGroups,
    hatchCounter,
  } = useInformationBreeding(pokeInfo);

  return (
    <div>
      <h3 className="info-title">{title}</h3>
      <EggGroups eggGroups={eggGroups} />
      <GenderRate genderRate={genderRate} />
      <InfoContainer subject={hatchCounter.subject}>
        <div className="info-content">{hatchCounter.content || '—'}</div>
      </InfoContainer>
    </div>
  );
}
