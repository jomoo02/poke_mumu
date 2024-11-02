'use client';

import React from 'react';
import PokeType from '@/app/components/poke-type';
import type { Poke } from '@/app/models/poke.type';
import InfoItem from './info-item';
import useBasic, { type LocalNo } from '../hooks/useBasic';

function LocalNoList({
  subject,
  localNos,
}: {
  subject: string;
  localNos: LocalNo[]
}) {
  return (
    <InfoItem subject={subject}>
      <div className="grid gap-y-1.5 sm:gap-y-1">
        {localNos.map(({ pokedex, entryNumber }) => (
          <div key={pokedex} className="flex info-content">
            <span className="min-w-11 max-w-11 sm:min-w-12 sm:max-w-12 flex items-center">
              {entryNumber.toString().padStart(4, '0')}
            </span>
            <span className="text-xs sm:text-sm text-slate-500/90 flex items-center">
              {`(${pokedex})`}
            </span>
          </div>
        ))}
      </div>
    </InfoItem>
  );
}

export default function Basic({
  poke,
}: {
  poke: Poke;
}) {
  const {
    title,
    name,
    nationalNo,
    types,
    form,
    localNo,
  } = useBasic(poke);

  return (
    <div>
      <h3 className="info-title">{title}</h3>
      <InfoItem
        subject={nationalNo.subject}
        content={nationalNo.content}
      />
      <InfoItem
        subject={name.subject}
        content={name.content}
      />
      <InfoItem
        subject={form.subject}
        content={form.content}
      />
      <InfoItem
        subject={types.subject}
      >
        <div className="flex gap-x-2">
          {types.content.map((type) => <PokeType key={type} type={type} />)}
        </div>
      </InfoItem>
      <LocalNoList
        subject={localNo.subject}
        localNos={localNo.content}
      />
    </div>
  );
}
