import React from 'react';
import Image from 'next/image';
import typesKo from '@/app/translations/type';
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
    <div className="px-2.5 sm:px-3 md:px-4 h-full">
      <div className="flex h-full justify-between items-center">
        <div className="grid w-[185px] xs:w-[250px] sm:w-[250px] md:w-[325px] xl:w-[350px] grid-cols-4 items-center h-full">
          <span className="text-[10px] xs:text-[12px] sm:text-[13px] text-slate-600/95 font-semibold">
            {noText}
          </span>
          <div className="w-[40px] h-[40px] xs:w-[50px] xs:h-[50px] xl:w-[60px] xl:h-[60px] relative">
            <Image
              src={sprityUrl}
              alt={name.en}
              fill
              sizes="40px"
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
          <div className={`flex h-full py-1 flex-col col-span-2 px-1 xl:px-2.5 ${pokeForm ? 'justify-around' : 'justify-center'}`}>
            <div className="leading-[20px] flex justify-center flex-col">
              <div className="text-[12px] xs:text-[14px] text-slate-600 font-semibold truncate">{pokeNameMain}</div>
              <div className="text-[12px] xs:text-[14px] text-slate-600 font-semibold truncate">{pokeNameSub}</div>
            </div>
            <div className="text-[11.5px] xs:text-xs leading-[18px] font-medium text-slate-500/90 truncate">{pokeForm}</div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-y-1 items-center sm:gap-x-2 md:gap-x-3 w-[62px] sm:w-[132px] md:w-[145px] lg:w-[140px] xl:w-[158px]">
          {types.map((type) => (
            <div
              className={`${type} w-[62px] xl:w-[75px] flex justify-center items-center font-semibold text-[12px] xs:text-[13px] xl:text-sm text-white py-px md:py-[1.5px] rounded-md px-1.5`}
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
