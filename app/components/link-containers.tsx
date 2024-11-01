import React from 'react';
import Link from 'next/link';
import { MOVE_KO, type MoveKey } from '@/app/translations/move';
import {
  makeFirstUpperCaseTextArray,
  getKoreanParticle,
  makeFirstUpperCase,
  getKoreanParticleForAnd,
  getKoreanSubjectParticle,
} from '@/app/utils/utils';
import { ALL_ITEM_KO, ITEM_EN, type ItemKey } from '@/app/translations/item';
import { POKE_KO, type PokeKey } from '@/app/translations/poke';
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
      getText: (target: MoveKey) => MOVE_KO[target],
      getParticle: (target: MoveKey) => getKoreanParticle(MOVE_KO[target]),
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

  const itemKo = ALL_ITEM_KO[item];
  const itemEn = item in ITEM_EN ? ITEM_EN[item as keyof typeof ITEM_EN] : item;

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

  const particle = language === 'ko' ? getKoreanParticle(ALL_ITEM_KO[item]) : '';

  return (
    <ItemLink item={item}>
      {particle && <span>{particle}</span>}
    </ItemLink>
  );
}

export function PokeLink({ poke, children }: {
  poke: PokeKey,
  children?: React.ReactNode,
}) {
  const { language } = useLanguage();

  const pokeEn = poke;
  const pokeKo = POKE_KO[poke];
  const text = language === 'ko' ? pokeKo : makeFirstUpperCase(pokeEn);

  return (
    <>
      <Link href={`/detail/${poke}`} className="underline hover:text-blue-400">{text}</Link>
      {children}
    </>
  );
}

export function PokeLinkWithSubjectParticle({ poke }: {
  poke: PokeKey,
}) {
  const { language } = useLanguage();
  const subjectParticle = language === 'ko' ? getKoreanSubjectParticle(POKE_KO[poke]) : '';

  return (
    <PokeLink poke={poke}>
      {subjectParticle && <span>{subjectParticle}</span>}
    </PokeLink>
  );
}

export function PokeLinkWithParticleForAnd({ poke }: {
  poke: PokeKey,
}) {
  const { language } = useLanguage();
  const particleForAnd = language === 'ko' ? getKoreanParticleForAnd(POKE_KO[poke]) : '';

  return (
    <PokeLink poke={poke}>
      {particleForAnd && <span>{particleForAnd}</span>}
    </PokeLink>
  );
}
