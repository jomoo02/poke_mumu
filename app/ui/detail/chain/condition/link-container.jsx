import React from 'react';
import Link from 'next/link';
import { MOVE_KO } from '@/app/translations/move';
import {
  makeFirstUpperCaseTextArray,
  getKoreanParticle,
  makeFirstUpperCase,
  getKoreanParticleForAnd,
  getKoreanSubjectParticle,
} from '@/app/lib/utils';
import { ALL_ITEM_KO, ITEM_EN } from '@/app/translations/item';
import { POKE_KO } from '@/app/translations/poke';

export function MoveLink({ move, language }) {
  const MOVE_HANDLE = {
    ko: {
      getText: (target) => MOVE_KO[target],
      getParticle: (target) => getKoreanParticle(MOVE_KO[target]),
    },
    en: {
      getText: (target) => makeFirstUpperCaseTextArray(target.split('-')),
    },
  };

  const { getText, getParticle } = MOVE_HANDLE[language];
  const moveText = getText(move);

  return (
    <span>
      <Link href={`move/${move}`} className="underline">{moveText}</Link>
      {getParticle && <span>{getParticle(move)}</span>}
    </span>
  );
}

export function ItemLink({ item, language, children }) {
  const itemKo = ALL_ITEM_KO[item];
  const itemEn = ITEM_EN[item] || item;
  const itemText = language === 'ko' ? itemKo : makeFirstUpperCaseTextArray(itemEn.split('-'));

  return (
    <span>
      <Link href={`item/${item}`} className="underline">{itemText}</Link>
      {children}
    </span>
  );
}

export function ItmeLinkWithParticle({ item, language }) {
  const particle = language === 'ko' ? getKoreanParticle(ALL_ITEM_KO[item]) : '';

  return (
    <ItemLink item={item} language={language}>
      {particle && <span>{particle}</span>}
    </ItemLink>
  );
}

export function PokeLink({ poke, language, children }) {
  const pokeEn = poke;
  const pokeKo = POKE_KO[poke];
  const text = language === 'ko' ? pokeKo : makeFirstUpperCase(pokeEn);

  return (
    <span>
      <Link href={`detail/${poke}`} className="underline">{text}</Link>
      {children}
    </span>
  );
}

export function PokeLinkWithSbjectParticle({ poke, language }) {
  const subjectParticle = language === 'ko' ? getKoreanSubjectParticle(POKE_KO[poke]) : '';

  return (
    <PokeLink poke={poke} language={language}>
      {subjectParticle && <span>{subjectParticle}</span>}
    </PokeLink>
  );
}

export function PokeLinkWithParticleForAnd({ poke, language }) {
  const particleForAnd = language === 'ko' ? getKoreanParticleForAnd(POKE_KO[poke]) : '';

  return (
    <PokeLink poke={poke} language={language}>
      {particleForAnd && <span>{particleForAnd}</span>}
    </PokeLink>
  );
}
