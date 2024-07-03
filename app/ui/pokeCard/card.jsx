import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/app/language-provider';
import useLocalStorage from '@/app/hooks/useLocalStorage';
import usePokeCardIndex from '@/app/hooks/usePokeCardIndex';
import Type from '../detail/type';

const SPRITY_BASE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

function Container({ children }) {
  return (
    <div className="border-2 rounded-md border-slate-400 w-full h-[6.75rem] sm:h-56 px-2 py-1.5 sm:p-3 flex sm:flex-col">
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

export default function Card({ basicInfo, isPriority }) {
  const { language } = useLanguage();

  const {
    name, sprity, types, no, form, pokeKey, order,
  } = basicInfo;

  const sprityUrl = `${SPRITY_BASE_URL}/${sprity}`;
  const isBlockFormText = form.en === 'default' ? 'hidden' : 'block';
  const pokeName = name[language] || name.en;
  const pokeForm = form[language] || form.en;

  const { saveLocalPoke } = useLocalStorage();

  const { setPokeCardIndex } = usePokeCardIndex();

  const handleClick = () => {
    saveLocalPoke(basicInfo);
    // setPokeCardIndex(order);
  };

  return (
    <Container>
      <div className="w-1/2 sm:w-full">
        <div className="text-sm text-slate-600 font-semibold">
          {`No.${no}`}
        </div>
        <Link href={`/detail/${pokeKey}`} onClick={handleClick}>
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
                priority={isPriority}
              />
            </div>
          </div>
        </Link>
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
