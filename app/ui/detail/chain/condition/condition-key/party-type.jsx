import React from 'react';
import typesKo from '@/app/translations/type';
import { makeFirstUpperCase } from '@/app/lib/utils';

const TEXT_GENERATORS = {
  ko: (partyType) => `${typesKo[partyType]} 타입 포켓몬을 지니고 있는 상태`,
  en: (partyType) => `with a ${makeFirstUpperCase(partyType)}-type Pokémon in the party`,
};

export default function PartyTypeCase({ value, language }) {
  const text = TEXT_GENERATORS[language](value);

  return (
    <span>
      {text}
    </span>
  );
}
