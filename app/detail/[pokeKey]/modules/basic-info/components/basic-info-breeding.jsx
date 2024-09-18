import React, { Fragment } from 'react';
import useBasicInfoBreeding from '../hooks/useBaiscInfoBreeding';
import useGenderRate from '../hooks/useGenderRate';
import useEggGroups from '../hooks/useEggGroups';
import useHatchCounter from '../hooks/useHatchCounter';

function GenderRate({ genderRate }) {
  const {
    subject,
    genderless,
    male,
    female,
  } = useGenderRate(genderRate);

  if (genderless.value) {
    return (
      <div className="info-container">
        <div className="info-subject">{subject}</div>
        <div className="info-content">{genderless.text}</div>
      </div>
    );
  }

  return (
    <div className="info-container">
      <div className="info-subject">{subject}</div>
      <div className="info-content">
        <span className="text-blue-500">
          {`${male.text}: ${male.value}%`}
        </span>
        {', '}
        <span className="text-pink-500">
          {`${female.text}: ${female.value}%`}
        </span>
      </div>
    </div>
  );
}

function EggGroups({ eggGroups }) {
  const {
    subject,
    eggGroups: eggGroupsInfo,
  } = useEggGroups(eggGroups);

  return (
    <div className="info-container">
      <div className="info-subject">{subject}</div>
      <div className="info-content">
        {eggGroupsInfo.map((eggGroup, index) => (
          <Fragment key={eggGroup}>
            {index > 0 && ', '}
            {eggGroup}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function HatchCounter({ hatchCounter, eggGroups }) {
  const {
    subject,
    hatchCounter: pokeHatchCounter,
  } = useHatchCounter(hatchCounter, eggGroups);

  return (
    <div className="info-container">
      <div className="info-subject">{subject}</div>
      <div className="info-content">{pokeHatchCounter || '—'}</div>
    </div>
  );
}

export default function BasicInfoBreeding({
  basicInfo,
}) {
  const { title } = useBasicInfoBreeding();

  return (
    <div>
      <div className="info-title">{title}</div>
      <EggGroups eggGroups={basicInfo.eggGroups} />
      <GenderRate genderRate={basicInfo.genderRate} />
      <HatchCounter eggGroups={basicInfo.eggGroups} hatchCounter={basicInfo.hatchCounter} />
    </div>
  );
}
