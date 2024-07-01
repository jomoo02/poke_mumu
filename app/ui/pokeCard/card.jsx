import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/app/language-provider';
import useLocalStorage from '@/app/hooks/useLocalStorage';
import Type from '../detail/type';

function Container({ children }) {
  return (
    <div className="border-2 rounded-md border-slate-400 w-full h-[6.75rem] sm:h-56 py-2 px-3 sm:py-3 flex sm:flex-col">
      {children}
    </div>
  )
}

function Types({ types }) {
  return (
    <div className="flex gap-x-1 xs:gap-x-2 sm:gap-x-3 w-full">
      {types.map((type) => (
        <div key={type} className="w-1/2">
          <Type type={type} width="w-full" />
        </div>
      ))}
    </div>
  );
}

//   name, sprity, types, id, no, form, isPriority, order, pokeKey,
export default function Card({ basicInfo, isPriority }) {
  const { language } = useLanguage();

  const {
    name, sprity, types, id, no, form, order, pokeKey,
  } = basicInfo;

  const sprityUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${sprity}`;
  const isBlockFormText = form.en === 'default' ? 'hidden' : 'block';
  const pokeName = language === 'ko' ? name.ko : name.en;
  const pokeForm = language === 'ko' ? form.ko : form.en;

  const { saveLocalPoke } = useLocalStorage();

  const pokeData = {
    name, sprity, types, id, no, form, order, pokeKey,
  };

  return (
    <Container>
      <div className="w-1/2 sm:w-full">
        <div className="text-sm text-slate-600 font-semibold">
          {`No.${no}`}
        </div>
        <div className="flex w-full sm:my-1 pr-2.5 sm:pr-0 justify-center poke-card">
          <Link href={`/detail/${pokeKey}`} onClick={() => saveLocalPoke(pokeData)}>
            <div className="w-[64px] h-[64px] sm:w-20 sm:h-20 relative">
              <Image
                src={sprityUrl}
                alt={name.en}
                fill
                sizes="80px"
                style={{
                  objectFit: 'contain',
                }}
                priority={isPriority}
                loading={isPriority ? 'eager' : 'lazy'}
              />
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-between flex-1">
        <div className="flex flex-col">
          <div className="text-sm sm:text-base font-medium text-slate-700">
            {pokeName}
          </div>
          <div className={`${isBlockFormText} text-slate-500/90 text-[14px] leading-4 sm:text-[13x] font-medium`}>
            {pokeForm}
          </div>
        </div>
        <Types types={types} />
      </div>
    </Container>
  );
}
