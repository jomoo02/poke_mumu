import React from 'react';
import Type from '@/app/components/type';
import { formatPokedexNumber } from '@/app/utils/formatPokedexNumber';
import useLocaleNo from '../hooks/useLocaleNo';
import useForm from '../hooks/useForm';
import useName from '../hooks/useName';

function NationalNo({ no }) {
  return (
    <div className="info-container">
      <div className="info-subject">전국도감 번호</div>
      <div className="info-content">{formatPokedexNumber(no)}</div>
    </div>
  );
}

function Name({ name }) {
  const {
    subject,
    name: pokeName,
  } = useName(name);

  return (
    <div className="info-container">
      <div className="info-subject">{subject}</div>
      <div className="info-content">{pokeName}</div>
    </div>
  );
}

function Types({ types }) {
  return (
    <div className="info-container">
      <div className="info-subject">타입</div>
      <div className="info-content flex gap-x-2">
        {types.map((type) => <Type type={type} key={type} />)}
      </div>
    </div>
  );
}

function Form({ form }) {
  const {
    subject,
    form: pokeForm,
  } = useForm(form);

  return (
    <div className="info-container">
      <div className="info-subject">
        {subject}
      </div>
      <div className="info-content capitalize">
        {pokeForm}
      </div>
    </div>
  );
}

function LocaleNo({ pokedexNumbers }) {
  const {
    subject,
    localePokedexs,
  } = useLocaleNo(pokedexNumbers);

  return (
    <div className="info-container">
      <div className="info-subject">{subject}</div>
      <div className="grid gap-y-0.5">
        {localePokedexs.map(({ pokedex, entryNumber, index }) => (
          <div key={index} className="flex info-content">
            <span className="w-12">{formatPokedexNumber(entryNumber)}</span>
            <span className="text-xs sm:text-sm text-slate-500/90">{pokedex}</span>
          </div>
        ))}
      </div>

    </div>
  );
}

export default function BasicInfoBasic({
  basicInfo,
  types,
  no,
  form,
  name,
}) {
  const {
    pokedexNumbers,
  } = basicInfo;

  return (
    <div>
      <div className="info-title">기본 정보</div>
      <NationalNo no={no} />
      <Name name={name} />
      <Types types={types} />
      <Form form={form} />
      <LocaleNo pokedexNumbers={pokedexNumbers} />
    </div>
  );
}
