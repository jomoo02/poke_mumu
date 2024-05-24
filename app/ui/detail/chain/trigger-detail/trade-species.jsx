import React from 'react';
import { makeFirstUpperCase, getKoreanParticleForAnd } from '@/app/lib/utils';

const SPECIES_MAP_KO = {
  shelmet: '쪼마리',
  karrablast: '딱정곤',
};

export default function TradeSpeciesCase({ species, language }) {
  const speciesPoke = language === 'ko' ? SPECIES_MAP_KO[species] : makeFirstUpperCase(species);

  const getRes = () => {
    if (language === 'ko') {
      return (
        <div>
          <span>{speciesPoke}</span>
          <span>{getKoreanParticleForAnd(speciesPoke)}</span>
        </div>
      );
    }
    return (
      <div className="flex gap-x-1">
        <span>for</span>
        <span>{speciesPoke}</span>
      </div>
    );
  };

  const res = getRes();

  return (
    <div className="flex justify-center items-center text-sm">
      {res}
    </div>
  );
}
