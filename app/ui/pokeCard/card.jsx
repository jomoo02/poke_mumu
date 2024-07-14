'use client';

import React, { useOptimistic } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { setPokeCardIndex } from '@/app/actions/action';
import { useLanguage } from '@/app/language-provider';
import usePokeCardIndex from '@/app/hooks/usePokeCardIndex';
import useLocalStorage from '@/app/hooks/useLocalStorage';
import Type from '../detail/type';

const SPRITY_BASE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

function Container({ children }) {
  return (
    <div className="border-2 rounded-md border-slate-400 w-full min-h-[6.75rem] h-[6.75rem] sm:h-56 px-2 py-1.5 sm:p-3 flex sm:flex-col">
      {children}
    </div>
  );
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

function FormButton({ info }) {
  const {
    name, sprity, types, no, form, pokeKey, order,
  } = info;

  const sprityUrl = `${SPRITY_BASE_URL}/${sprity}`;
  const setPokeCardIndexWithOrder = setPokeCardIndex.bind(null, info);
  const router = useRouter();

  return (
    <form
      action={async () => {
        await setPokeCardIndexWithOrder();
        // router.push(`/detail/${pokeKey}`);
      }}
    >
      <div className="flex sm:my-1 pr-4 sm:pr-0 justify-center poke-card">
        <button type="submit">
          <div className="w-[64px] h-[64px] sm:w-20 sm:h-20 relative">
            <Image
              src={sprityUrl}
              alt={name.en}
              fill
              sizes="80px"
              style={{
                objectFit: 'contain',
              }}
              priority
            />
          </div>
        </button>
      </div>
    </form>
  );
}

export default function Card({ basicInfo, cardIndex }) {
  const { language } = useLanguage();

  const {
    name, sprity, types, no, form, pokeKey, order,
  } = basicInfo;

  const sprityUrl = `${SPRITY_BASE_URL}/${sprity}`;
  const isBlockFormText = form.en === 'default' ? 'hidden' : 'block';
  const pokeName = name[language] || name.en;
  const pokeForm = form[language] || form.en;

  const { saveLocalPoke } = useLocalStorage();
  // const { setPokeCardIndex } = usePokeCardIndex();

  const handleClick = () => {
    saveLocalPoke(basicInfo);
    // setPokeCardIndex(order);
    const scroll = window.scrollY;
    const index = cardIndex;
    sessionStorage.setItem('pos2', JSON.stringify({ scroll, index }));

    setPokeCardIndex(basicInfo);
  };

  return (
    <Container>
      <div className="w-1/2 sm:w-full">
        <div className="text-sm text-slate-600 font-semibold">
          {`No.${no}`}
        </div>
        <FormButton info={basicInfo} />
        {/* <Link
          onClick={handleClick}
          href={`/detail/${pokeKey}`}
        >
          <div className="flex sm:my-1 pr-4 sm:pr-0 justify-center poke-card">
            <div className="w-[64px] h-[64px] sm:w-20 sm:h-20 relative">
              <Image
                src={sprityUrl}
                alt={name.en}
                fill
                sizes="80px"
                style={{
                  objectFit: 'contain',
                }}
                priority
              />
            </div>
          </div>
        </Link> */}
      </div>
      <div className="flex flex-col justify-between flex-1">
        <div className="flex flex-col">
          <div className="text-sm sm:text-base font-medium text-slate-700">
            {pokeName}
          </div>
          <div className={`${isBlockFormText} text-slate-500/90 text-[13px] sm:text-[14px] leading-4 font-medium`}>
            {pokeForm}
          </div>
        </div>
        <Types types={types} />
      </div>
    </Container>
  );
}
