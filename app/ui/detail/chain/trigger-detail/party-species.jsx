import React from 'react';
import { makeFirstUpperCase } from '@/app/lib/utils';

const PARTY_MAP_KO = {
  remoraid: '총어',
};

export default function PartySpeciesCase({ party, language }) {
  const partyPoke = language === 'ko' ? PARTY_MAP_KO[party] : makeFirstUpperCase(party);

  const getRes = () => {
    if (language === 'ko') {
      return (
        <div className="flex gap-x-1">
          <span>파티에</span>
          <span>
            <span>{partyPoke}</span>
            가
          </span>
          <span>있을</span>
          <span>때</span>
        </div>
      );
    }

    return (
      <div className="flex gap-x-1">
        <span>with</span>
        <span>{partyPoke}</span>
        <span>in</span>
        <span>party</span>
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
