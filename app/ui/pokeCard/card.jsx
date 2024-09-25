import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/app/language-provider';
import useLocalStorage from '@/app/hooks/useLocalStorage';
import useScrollRestoration from '@/app/hooks/useScrollRestoration';
import Type from '../detail/type';

const SPRITY_BASE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

function Container({ children }) {
  return (
    <div
      className="border-2 rounded-md border-slate-400
      w-full min-h-[6.75rem] h-[6.75rem] xs:h-[12.2rem] sm:h-56 px-2 py-1.5 xs:py-2 sm:p-3 flex xs:flex-col"
    >
      {children}
    </div>
  );
}

function Types({ types }) {
  return (
    <div className="grid grid-cols-2 gap-x-1 xs:gap-x-2 sm:gap-x-3">
      {types.map((type) => (
        <Type type={type} width="w-full" key={type} />
      ))}
    </div>
  );
}

function PokeImage({ src, alt }) {
  return (
    <div className="w-[64px] h-[64px] sm:w-20 sm:h-20 relative">
      <Image
        placeholder="blur"
        blurDataURL="/pokeball.svg"
        src={src}
        alt={alt}
        fill
        sizes="80px"
        style={{
          objectFit: 'contain',
        }}
      />
    </div>
  );
}

export default function Card({ basicInfo }) {
  const { language } = useLanguage();

  const {
    name, sprity, types, no, form, pokeKey,
  } = basicInfo;

  const sprityUrl = `${SPRITY_BASE_URL}/${sprity}`;
  const isBlockFormText = form.en === 'default' ? 'hidden' : 'block';
  const pokeName = name[language] || name.en;
  const pokeForm = form[language] || form.en;

  const { saveLocalPoke } = useLocalStorage();
  const { setScrollPosition } = useScrollRestoration();

  const handleClick = () => {
    saveLocalPoke(basicInfo);
    setScrollPosition(window.scrollY);
  };

  return (
    <Container>
      <div className="w-1/2 xs:w-full">
        <div className="text-sm text-slate-600 font-semibold">
          {`No.${no}`}
        </div>
        <Link
          onClick={handleClick}
          href={`/detail/${pokeKey}`}
        >
          <div className="flex xs:my-1 pr-4 xs:pr-0 justify-center poke-card">
            <PokeImage src={sprityUrl} alt={name.en} />
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
