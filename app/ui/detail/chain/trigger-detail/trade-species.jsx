import React from 'react';
import { makeFirstUpperCase } from '@/app/lib/utils';

const SPECIES_MAP_KO = {
  shelmet: '쪼마리',
  karrablast: '딱정곤',
};

export default function TradeSpeciesCase({ species, language }) {
  const text = language === 'ko' ? SPECIES_MAP_KO[species] : makeFirstUpperCase(species);

  return (
    <div className="flex justify-center items-center text-sm">
      {text}
    </div>
  );
}
