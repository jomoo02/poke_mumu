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
  if (language === 'ko') {
    const moveKo = MOVE_KO[move];
    return (
      <span>
        <Link href={`move/${move}`} className="underline">{moveKo}</Link>
        <span>{getKoreanParticle(moveKo)}</span>
      </span>
    );
  }
  return (
    <span>
      <Link href={`move/${move}`}>{makeFirstUpperCaseTextArray(move.split('-'))}</Link>
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

  if (particle) {
    return (
      <ItemLink item={item} language={language}>
        <span>{particle}</span>
      </ItemLink>
    );
  }
  return <ItemLink item={item} language={language} />;
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

  if (subjectParticle) {
    return (
      <PokeLink poke={poke} language={language}>
        <span>{subjectParticle}</span>
      </PokeLink>
    );
  }

  return <PokeLink poke={poke} language={language} />;
}

export function PokeLinkWithParticleForAnd({ poke, language }) {
  const particleForAnd = language === 'ko' ? getKoreanParticleForAnd(POKE_KO[poke]) : '';

  if (particleForAnd) {
    return (
      <PokeLink poke={poke} language={language}>
        <span>{particleForAnd}</span>
      </PokeLink>
    );
  }

  return <PokeLink poke={poke} language={language} />;
}
