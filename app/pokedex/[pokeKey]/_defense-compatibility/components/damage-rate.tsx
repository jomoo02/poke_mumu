import React from 'react';
import PokeType from '@/app/components/poke-type';
import type { Type } from '@/app/data/pokeType';

interface DamageRateProps {
  damageRate: number;
  types: Type[];
}

export default function DamageRate({
  damageRate,
  types,
}: DamageRateProps) {
  const getGridColsClassName = (count: number) => {
    if (count <= 2) return 'md:grid-cols-1';
    if (count <= 4) return 'md:grid-cols-2';
    if (count <= 7) return 'md:grid-cols-2 lg:grid-cols-3';
    if (count <= 9) return 'md:grid-cols-3 lg:grid-cols-4';
    if (count === 10) return 'md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5';
    if (count === 11) return 'md:grid-cols-4 lg:grid-cols-5';
    if (count === 12) return 'md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6';
    if (count === 15) return 'md:grid-cols-5 lg:grid-cols-6';
    return 'md:grid-cols-6 lg:grid-cols-7';
  };

  const gridColsClassName = getGridColsClassName(types.length);

  return (
    <>
      <div className="flex justify-center items-center md:py-1 md:border-b text-[13px] md:text-sm font-semibold min-w-16">
        {`x ${damageRate}`}
      </div>
      <div className="flex justify-center md:px-3.5 md:py-3">
        <div
          className={`grid grid-cols-3 sm:grid-cols-6 ${gridColsClassName} gap-x-2.5 sm:gap-x-3 lg:gap-x-2.5 gap-y-2 sm:gap-y-2 lg:gap-y-2.5 justify-items-center`}
        >
          {types.map((type) => (
            <PokeType type={type} key={type} />
          ))}
        </div>
      </div>
    </>
  );
}
