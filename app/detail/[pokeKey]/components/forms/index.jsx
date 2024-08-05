import React, { Suspense } from 'react';
import { fetchPokeKey } from '@/app/api/data';
import { fetchDetail } from '@/app/api/detail';
import Header from '../header';
import Form from './form';
import FormSkeleton from './skeleton';

const formsClassMap = {
  10: 'grid grid-cols-3 md:grid-cols-5 gap-y-3 md:gap-y-5',
  18: 'grid grid-cols-3 md:grid-cols-6 gap-y-3 md:gap-y-5',
  20: 'grid grid-cols-3 md:grid-cols-5 gap-y-3 md:gap-y-5',
  28: 'grid grid-cols-3 md:grid-cols-7 gap-y-3 md:gap-y-5',
  5: 'flex flex-wrap gap-x-5 justify-around',
  4: 'grid grid-cols-2 lg:grid-cols-4 gap-y-5',
  6: 'grid grid-cols-3 lg:grid-cols-6 gap-y-3 md:gap-y-5',
  8: 'grid grid-cols-3 md:grid-cols-4 gap-y-3 md:gap-y-5',
  9: 'grid grid-cols-3 gap-y-3 md:gap-y-5',
  0: 'flex flex-wrap gap-x-5 justify-evenly',
};

async function Forms({ pokeKey }) {
  const [{ types, name }, { forms }] = await Promise.all([
    fetchPokeKey(pokeKey),
    fetchDetail(pokeKey),
  ]);

  const type = types[0];

  const formCount = forms.length;
  const category = formCount === 1 ? 'form' : 'forms';

  const formsClassName = formsClassMap[formCount] || formsClassMap[0];

  return (
    <>
      <Header type={type} category={category} text={name} />
      <div className={`border-2 border-t-0 ${type}-border rounded-b-sm px-1 md:px-5 pt-2.5 pb-3.5 ${formsClassName}`}>
        {forms.map(({ id, name: formName }) => (
          <Form id={id} name={formName} key={`${id}-${name.en}`} />
        ))}
      </div>
    </>
  );
}

export default function PokeForms({ pokeKey }) {
  return (
    <div>
      <Suspense fallback={<FormSkeleton />}>
        <Forms pokeKey={pokeKey} />
      </Suspense>
    </div>
  );
}
