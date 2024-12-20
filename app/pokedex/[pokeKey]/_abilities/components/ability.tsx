'use client';

import React from 'react';
import type { Ability } from '@/app/models/detail.type';
import useAbility from '../hooks/useAbility';

interface PokeAbilityProps {
  ability: Ability;
}

export default function PokeAbility({
  ability,
}: PokeAbilityProps) {
  const {
    name,
    flavorText,
    backGroundColor,
    hiddenAbilityLabel,
  } = useAbility(ability);

  return (
    <div className={`grid grid-cols-10 gap-x-1 min-h-12 ${backGroundColor}`}>
      <h3
        className="col-span-3 xl:col-span-2 border-r py-0.5 px-1 text-sm md:text-[15px] flex flex-col items-center justify-center"
      >
        {name}
        {hiddenAbilityLabel && (
          <span className="text-xs md:text-sm text-center">
            {`(${hiddenAbilityLabel})`}
          </span>
        )}
      </h3>
      <p className="col-span-7 text-pretty text-sm md:text-[15px] p-2 md:px-3 flex items-center">
        {flavorText}
      </p>
    </div>
  );
}
