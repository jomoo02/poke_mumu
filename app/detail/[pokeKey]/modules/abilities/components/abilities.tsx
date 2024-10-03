import React from 'react';
import Ability from './ability';
import { AbilitiesType } from '../../../types/abilities.type';

type AbilitiesProps = {
  abilities: AbilitiesType,
};

export default function Abilities({ abilities }: AbilitiesProps) {
  return (
    <>
      {abilities.map((ability) => (
        <Ability
          key={ability.name.en}
          ability={ability}
        />
      ))}
    </>
  );
}
