import React from 'react';
import { useLanguage } from '@/app/language-provider';
import type { PartySpeciesPoke } from '@/app/data/partySpecies';
import { PokeLinkWithSubjectParticle } from '@/app/components/link-containers';
import {
  typesKo,
  type Type,
} from '@/app/data/pokeType';
import {
  makeFirstUpperCase,
} from '@/app/utils/utils';

function Species({ value }: { value: PartySpeciesPoke }) {
  const { language } = useLanguage();

  const localizedAffix = {
    ko: {
      prefix: '파티에',
      suffix: '있을 때',
    },
    en: {
      prefix: 'with',
      suffix: 'in party',
    },
  };

  const { prefix, suffix } = localizedAffix[language];

  return (
    <span>
      <span className="mr-1">{prefix}</span>
      <PokeLinkWithSubjectParticle poke={value} />
      <span className="ml-1">{suffix}</span>
    </span>
  );
}

function PartyType({ value }: { value: Type }) {
  const { language } = useLanguage();

  const content = language === 'en'
    ? `with a ${makeFirstUpperCase(value)}-type Pokémon in the party`
    : `${typesKo[value]} 타입 포켓몬을 지니고 있는 상태`;

  return <span>{content}</span>;
}

const ConditionParty = {
  type: PartyType,
  species: Species,
};

export default ConditionParty;
