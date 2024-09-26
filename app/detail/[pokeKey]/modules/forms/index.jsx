import React from 'react';
import { fetchPokeKey } from '@/app/api/data';
import { fetchDetail } from '@/app/api/detail';
import Header from '../../components/header';
import Forms from './components/forms';
import { headerKeys } from '../../data/header';

export default async function PokeForms({ pokeKey }) {
  const [{ types, name }, { forms }] = await Promise.all([
    fetchPokeKey(pokeKey),
    fetchDetail(pokeKey),
  ]);

  if (!types || !name) {
    return null;
  }

  if (!forms || forms.length === 0) {
    return null;
  }

  const type = types[0];

  const headerKey = headerKeys.forms;

  return (
    <div>
      <Header
        type={type}
        headerKey={headerKey}
      />
      <Forms
        forms={forms}
        type={type}
      />
    </div>
  );
}
