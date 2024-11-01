import React from 'react';
import {
  PokeLinkWithParticleForAnd,
} from '@/app/components/link-containers';
import type { TradeSpeciesPoke } from '@/app/data/tradeSpecies';
import { useLanguage } from '@/app/language-provider';

function Species({ value }: { value: TradeSpeciesPoke }) {
  const { language } = useLanguage();

  const prefiex = language === 'en' ? 'for' : '';

  return (
    <span>
      {prefiex && <span className="mr-1">{prefiex}</span>}
      <PokeLinkWithParticleForAnd poke={value} />
    </span>
  );
}

const ConditionTrade = {
  species: Species,
};

export default ConditionTrade;
