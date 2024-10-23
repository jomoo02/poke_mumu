import React from 'react';
import useListHeader from '../hooks/useListHeader';

export default function ListHeader() {
  const {
    name,
    type,
    total,
    hp,
    attack,
    defense,
    specialAttack,
    specialDefense,
    speed,
  } = useListHeader();

  const headerStatItems = [hp, attack, defense, specialAttack, specialDefense, speed];

  return (
    <div className="pokedex-header">
      <div className="w-card-number flex items-center justify-center">
        #
      </div>
      <div className="w-card-name flex items-center">
        {name}
      </div>
      <div className="w-card-type flex items-center justify-center">
        {type}
      </div>
      <div className="pokedex-header-total">
        {total}
      </div>
      {headerStatItems.map((item) => (
        <div key={item} className="pokedex-header-stat">
          {item}
        </div>
      ))}
    </div>
  );
}
