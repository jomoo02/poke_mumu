'use client';

import React from 'react';
import Type from '@/app/components/type';
import { formatPokedexNumber } from '@/app/utils/formatPokedexNumber';
import useInformationBasic from '../hooks/useInformationBasic';
import InfoContainer from './info-container';

function LocaleNo({ localeNo }) {
  const {
    subject,
    content,
  } = localeNo;

  return (
    <InfoContainer subject={subject}>
      <div className="grid gap-y-1.5 sm:gap-y-0.5">
        {content.map(({ pokedex, entryNumber, index }) => (
          <div key={index} className="flex info-content">
            <span className="min-w-11 max-w-11 sm:min-w-12 sm:max-w-12 flex items-center">
              {formatPokedexNumber(entryNumber)}
            </span>
            <span className="text-xs sm:text-sm text-slate-500/90 flex items-center">
              {`(${pokedex})`}
            </span>
          </div>
        ))}
      </div>
    </InfoContainer>
  );
}

export default function InformationBasic({ pokeInfo }) {
  const {
    title,
    nationalNo,
    name,
    types,
    form,
    localeNo,
  } = useInformationBasic(pokeInfo);

  return (
    <div>
      <h3 className="info-title">{title}</h3>
      <InfoContainer
        subject={nationalNo.subject}
        content={formatPokedexNumber(nationalNo.content)}
      />
      <InfoContainer
        subject={name.subject}
        content={name.content}
      />
      <InfoContainer subject={types.subject}>
        <div className="flex gap-x-2">
          {types.content.map((type) => <Type key={type} type={type} />)}
        </div>
      </InfoContainer>
      <InfoContainer
        subject={form.subject}
        content={form.content}
      />
      <LocaleNo localeNo={localeNo} />
    </div>
  );
}
