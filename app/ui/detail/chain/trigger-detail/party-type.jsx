import React from 'react';
import typesKo from '@/app/translations/type';
import { makeFirstUpperCase } from '@/app/lib/utils';

export default function PartyTypeCase({ type, language }) {
  const getKoText = (partyType) => `${partyType} 타입 포켓몬을 지니고 있는 상태`;
  const getEnText = (partyType) => `with a ${partyType}-type Pokémon in the party`;

  const res = language === 'ko' ? getKoText(typesKo[type]) : getEnText(makeFirstUpperCase(type));

  return (
    <div className="flex justify-center items-center text-sm">
      {res}
    </div>
  );
}
