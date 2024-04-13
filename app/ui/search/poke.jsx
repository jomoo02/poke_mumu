import React from 'react';
import Image from 'next/image';
import typesKo from '@/app/translations/tpye';
import { useLanguage } from '@/app/language-provider';

export default function SearchPoke({
  no, name, types, form, sprity,
}) {
  const { language } = useLanguage();
  const sprityUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${sprity}`;
  const formText = language === 'ko' ? form.ko : form.en;
  const pokeForm = formText === 'default' ? '' : formText;
  const pokeNameMain = language === 'ko' ? name.ko : name.en;
  const pokeNameSub = language === 'ko' ? name.en : name.ko;
  const noText = `no.${no}`;

  const pokeType = (type) => (language === 'ko' ? typesKo[type] : type);

  return (
    <div className="px-6 h-full">
      <div className="flex h-full justify-between items-center">
        <div className="grid w-[340px] grid-cols-4 items-center h-full">
          <span className="text-[13px] text-slate-600/95 font-semibold">
            {noText}
          </span>
          <Image
            src={sprityUrl}
            alt={name.en}
            width={60}
            height={60}
            priority
          />
          <div className={`flex h-full py-1 flex-col col-span-2 px-5 ${pokeForm ? 'justify-between' : 'justify-center'}`}>
            <div className="leading-[20px] flex justify-center flex-col">
              <div className="text-[14px] text-slate-600 font-bold">{pokeNameMain}</div>
              <div className="text-[14px] text-slate-600 font-bold">{pokeNameSub}</div>
            </div>
            <div className="text-xs leading-[18px] font-semibold text-slate-500/90">{pokeForm}</div>
          </div>
        </div>
        <div className="flex gap-x-2 w-[158px]">
          {types.map((type) => (
            <div
              className={`${type} w-[75px] flex justify-center items-center font-bold text-sm text-white py-px rounded-md px-1.5`}
              key={type}
            >
              {pokeType(type)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
