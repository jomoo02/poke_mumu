import React from 'react';
import Ability from './ability';

export default function Abilities({ abilities }) {
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
