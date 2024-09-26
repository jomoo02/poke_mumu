import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Type from '@/app/components/type';
import {
  useSearchPokeInfo,
  useSearchPokeHandle,
} from '../hooks/useSearchPoke';

function PokeInfo({ pokeInfo }) {
  const {
    noText,
    mainName,
    subName,
    form,
    imageSrc,
  } = useSearchPokeInfo(pokeInfo);
  return (
    <div className="grid w-[225px] xs:w-[250px] sm:w-[250px] md:w-[325px] xl:w-[350px] grid-cols-4 items-center h-full">
      <span className="text-[10px] xs:text-[12px] sm:text-[13px] text-slate-600/95 font-semibold">
        {noText}
      </span>
      <div className="relative w-[45px] h-[45px] xs:w-[50px] xs:h-[50px] xl:w-[60px] xl:h-[60px]">
        <Image
          src={imageSrc}
          alt={mainName}
          fill
          sizes="40px"
          style={{
            objectFit: 'contain',
          }}
          priority
        />
      </div>
      <div
        className={`flex h-full py-1 flex-col col-span-2 px-1 xl:px-2.5 ${form ? 'justify-around' : 'justify-center'}`}
      >
        <div className="leading-[20px] flex flex-col justify-center ">
          <div className="text-[12px] xs:text-[14px] text-slate-600 font-semibold truncate">
            {mainName}
          </div>
          <div className="text-[11.5px] xs:text-[13.5px] text-slate-600 font-semibold truncate">
            {subName}
          </div>
        </div>
        <div className="text-[11.5px] xs:text-xs leading-[18px] font-medium text-slate-500/90 truncate">
          {form}
        </div>
      </div>
    </div>
  );
}

function PokeTypes({ types }) {
  return (
    <div
      className="flex flex-col sm:flex-row gap-y-1 items-center sm:gap-x-2 md:gap-x-3 w-[62px] sm:w-[132px] md:w-[145px] lg:w-[140px] xl:w-[158px]"
    >
      {types.map((type) => (
        <Type type={type} key={type} />
      ))}
    </div>
  );
}

export default function SearchPoke({ pokeInfo }) {
  const { types, pokeKey } = pokeInfo;

  const {
    handleEnterKeyForSave,
    handlePokeClick,
  } = useSearchPokeHandle(pokeInfo);

  return (
    <div className="px-2.5 sm:px-3 md:px-4 h-full">
      <div className="flex h-full justify-between items-center">
        <Link
          href={`/detail/${pokeKey}`}
          onClick={handlePokeClick}
          onKeyDown={handleEnterKeyForSave}
          prefetch
        >
          <PokeInfo pokeInfo={pokeInfo} />
        </Link>
        <PokeTypes types={types} />
      </div>
    </div>
  );
}
