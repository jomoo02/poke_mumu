import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/app/language-provider';
import useLocalStorage from '@/app/hooks/useLocalStorage';
import Type from '../detail/type';

export default function Card({
  name, sprity, types, id, no, form, isPriority, order,
}) {
  const { language } = useLanguage();
  const sprityUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${sprity}`;
  const isBlockFormText = form.en === 'default' ? 'hidden' : 'block';
  const pokeNoText = `No.${no}, id.${id}`;
  const pokeName = language === 'ko' ? name.ko : name.en;
  const pokeForm = language === 'ko' ? form.ko : form.en;

  const { savePokeLocal } = useLocalStorage();
  const pokeData = {
    name, sprity, types, id, no, form, order,
  };

  return (
    <div className="border-2 rounded-md border-slate-400 w-full h-[108px] xs:h-52 sm:h-56 px-2 py-2 xs:px-3 xs:py-3 flex xs:flex-col gap-x-1 xs:gap-x-0">
      <div className="w-1/2 xs:w-full">
        <div className="text-sm text-slate-600 font-medium">{pokeNoText}</div>
        <div className="flex w-full my-1 pr-2 xs:pr-0 justify-center poke-card">
          <Link href={`/${order}`} onClick={() => savePokeLocal(pokeData)}>
            <div className="w-[64px] h-[64px] xs:w-20 xs:h-20 xl:w-[84px] xl:h-[84px] relative">
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
        <div className="flex flex-col sm:gap-y-0.5">
          <div className="text-sm sm:text-base font-medium text-slate-700">
            {pokeName}
          </div>
          <div className={`${isBlockFormText} text-slate-600/90 text-[14px] leading-4 sm:leading-5 sm:text-[15px]`}>
            {pokeForm}
          </div>
        </div>

        <div className="flex gap-x-2 w-full">
          {types.map((type) => (
            <div key={type} className="md:px-1 w-1/2">
              <Type type={type} width="w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
