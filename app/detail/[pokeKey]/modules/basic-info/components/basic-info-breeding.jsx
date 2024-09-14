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
  const e = useEggGroups(eggGroups);

  return (
    <div>{e}</div>
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

function GrowthRate({ growthRate }) {
  return <span>{growthRate}</span>;
}

function LocaleNo({ pokedexNumbers }) {
  return (
    <>
      {pokedexNumbers.map(({ entryNumber, pokedex }) => (
        <div key={pokedex}>
          <>{entryNumber}</>
          <>{pokedex}</>
        </div>
      ))}
    </>
  );
}

export default function BasicInfoBreeding({
  basicInfo,
}) {
  console.log(basicInfo);
  return (
    <div>
      <GenderRate genderRate={basicInfo.genderRate} />
      <EggGroups eggGroups={basicInfo.eggGroups} />
      <HatchCounter eggGroups={basicInfo.eggGroups} hatchCounter={basicInfo.hatchCounter} />
      <GrowthRate growthRate={basicInfo.growthRate} />
      <LocaleNo pokedexNumbers={basicInfo.pokedexNumbers} />
    </div>
  );
}
