import React from 'react';
import { makeFirstUpperCase } from '@/app/lib/utils';

const PARTY_MAP_KO = {
  remoraid: '총어',
};

export default function PartySpeciesCase({ party, language }) {
  const text = language === 'ko' ? PARTY_MAP_KO[party] : makeFirstUpperCase(party);

  return (
    <div className="flex justify-center items-center text-sm">
      {text}
    </div>
  );
}
