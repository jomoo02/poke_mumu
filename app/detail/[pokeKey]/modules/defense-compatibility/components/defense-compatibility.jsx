import React from 'react';
import { getDefenseCompatibility } from '@/app/lib/type-compatibility';
import Type from '@/app/components/type';
import DamageRate from './damage-rate';

function PokeTypes({ pokeTypes }) {
  const mainType = pokeTypes[0];

  return (
    <div className={`flex py-1 md:py-1.5 justify-center items-center gap-x-2.5 border-b-2 ${mainType}-border`}>
      <div className="flex gap-x-2">
        {pokeTypes.map((type) => <Type key={type} type={type} />)}
      </div>
    </div>
  );
}

export default function DefenseCompatibility({ pokeTypes }) {
  const mainType = pokeTypes[0];

  const defenseCompatibility = getDefenseCompatibility(pokeTypes);

  const damageRateContainerClassName = (typesCount) => {
    const defaultClassName = 'flex gap-x-2 md:flex-col border-b last:border-b-0 md:border-b-0 py-1.5 md:py-0 md:border-r';

    if (typesCount > 4) {
      return `${defaultClassName} flex-auto`;
    }

    return defaultClassName;
  };

  return (
    <div className={`border-2 border-t-0 ${mainType}-border rounded-b-sm`}>
      <PokeTypes pokeTypes={pokeTypes} />
      <div className="flex justify-center flex-col md:flex-row">
        {defenseCompatibility.map(({ damageRate, types }) => (
          <div
            key={damageRate}
            className={damageRateContainerClassName(types.length)}
          >
            <DamageRate.Text damageRate={damageRate} />
            <DamageRate.Types types={types} />
          </div>
        ))}
      </div>
    </div>
  );
}
