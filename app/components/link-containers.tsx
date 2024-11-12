import React from 'react';
import Link from 'next/link';
import { movesKo, type MoveKey } from '@/app/data/move';
import {
  makeFirstUpperCaseTextArray,
  getKoreanParticle,
  makeFirstUpperCase,
  getKoreanParticleForAnd,
  getKoreanSubjectParticle,
} from '@/app/utils/utils';
import { totalItemsKo, itemsEn, type ItemKey } from '@/app/data/item';
import { partySpecies, type PartySpeciesPoke } from '../data/partySpecies';
import { tradeSpeciesKo, type TradeSpeciesPoke } from '../data/tradeSpecies';
import { useLanguage } from '../language-provider';
import type { Language } from '../language-provider';

type MoveLinkHandle = {
  getText: (target: MoveKey) => string;
  getParticle?: (target: MoveKey) => string;
};

export function MoveLink({ move }: {
  move: MoveKey,
}) {
  const { language } = useLanguage();

  const MOVE_HANDLE: Record<Language, MoveLinkHandle> = {
    ko: {
      getText: (target: MoveKey) => movesKo[target],
      getParticle: (target: MoveKey) => getKoreanParticle(movesKo[target]),
    },
    en: {
      getText: (target: string) => makeFirstUpperCaseTextArray(target.split('-')),
    },
  };

  const { getText, getParticle } = MOVE_HANDLE[language];
  const moveText = getText(move);

  return (
    <>
      <span>{moveText}</span>
      {getParticle && <span>{getParticle(move)}</span>}
    </>
  );
}

export function ItemLink({
  item,
  children,
}: {
  item: ItemKey,
  children?: React.ReactNode,
}) {
  const { language } = useLanguage();

  const itemKo = totalItemsKo[item];
  const itemEn = item in itemsEn ? itemsEn[item as keyof typeof itemsEn] : item;

  const itemText = language === 'ko' ? itemKo : makeFirstUpperCaseTextArray(itemEn.split('-'));

  return (
    <>
      <span className="text-nowrap">{itemText}</span>
      {children}
    </>
  );
}

export function ItmeLinkWithParticle({ item }: {
  item: ItemKey,
}) {
  const { language } = useLanguage();

  const particle = language === 'ko' ? getKoreanParticle(totalItemsKo[item]) : '';

  return (
    <ItemLink item={item}>
      {particle && <span>{particle}</span>}
    </ItemLink>
  );
}

export function PokeLink({ poke, children }: {
  poke: TradeSpeciesPoke | PartySpeciesPoke,
  children?: React.ReactNode,
}) {
  const { language } = useLanguage();

  const targetPokes = { ...partySpecies, ...tradeSpeciesKo };

  const pokeEn = poke;
  const pokeKo = targetPokes[poke];
  const text = language === 'ko' ? pokeKo : makeFirstUpperCase(pokeEn);

  return (
    <>
      <Link href={`/pokedex/${poke}`} className="underline hover:text-blue-400">{text}</Link>
      {children}
    </>
  );
}

export function PokeLinkWithSubjectParticle({ poke }: {
  poke: TradeSpeciesPoke | PartySpeciesPoke,
}) {
  const { language } = useLanguage();

  const targetPokes = { ...partySpecies, ...tradeSpeciesKo };
  const pokeKo = targetPokes[poke];
  const subjectParticle = language === 'ko' ? getKoreanSubjectParticle(pokeKo) : '';

  return (
    <PokeLink poke={poke}>
      {subjectParticle && <span>{subjectParticle}</span>}
    </PokeLink>
  );
}

export function PokeLinkWithParticleForAnd({ poke }: {
  poke: TradeSpeciesPoke | PartySpeciesPoke,
}) {
  const { language } = useLanguage();
  const targetPokes = { ...partySpecies, ...tradeSpeciesKo };
  const pokeKo = targetPokes[poke];
  const particleForAnd = language === 'ko' ? getKoreanParticleForAnd(pokeKo) : '';

  return (
    <PokeLink poke={poke}>
      {particleForAnd && <span>{particleForAnd}</span>}
    </PokeLink>
  );
}
