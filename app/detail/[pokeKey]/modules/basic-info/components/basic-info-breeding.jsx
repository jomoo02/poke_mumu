import React from 'react';
import useGenderRate from '../hooks/useGenderRate';
import useEggGroups from '../hooks/useEggGroups';

function GenderRate({ genderRate }) {
  const {
    isGenderless,
    male,
    female,
  } = useGenderRate(genderRate);

  if (isGenderless) {
    return <div>무성</div>;
  }

  return (
    <div>
      <span>수컷: {male}</span>
      <span>암컷: {female}</span>
    </div>
  );
}

function EggGroups({ eggGroups }) {
  const localeEggGroups = useEggGroups(eggGroups);

  return (
    <div className="flex">
      {localeEggGroups.map((eggGroup, index) => (
        <div key={eggGroup}>
          {index > 0 && ', '}
          {eggGroup}
        </div>
      ))}
    </div>
  );
}

function HatchCounter({ eggGroups, hatchCounter }) {
  if (eggGroups[0] === 'no-eggs') {
    return (
      <div>-</div>
    );
  }
  return (
    <div>{hatchCounter}</div>
  );
}

export default function BasicInfoBreeding({
  basicInfo,
}) {
  return (
    <div>
      <GenderRate genderRate={basicInfo.genderRate} />
      <EggGroups eggGroups={basicInfo.eggGroups} />
      <HatchCounter eggGroups={basicInfo.eggGroups} hatchCounter={basicInfo.hatchCounter} />
    </div>
  );
}
