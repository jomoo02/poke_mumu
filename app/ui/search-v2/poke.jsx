import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/app/language-provider';
import useLocalStorage from '@/app/hooks/useLocalStorage';
import Type from '../detail/type';

function getSprityUrl(sprity) {
  const defaultUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

  return `${defaultUrl}/${sprity}`;
}

function getLanguageTexts(pokeInfo, language) {
  const { name, no, form } = pokeInfo;

  const formText = form.en === 'default' ? '' : form[language];
  const mainName = name[language];
  const subName = language === 'ko' ? name.en : name.ko;
  const noText = `no.${no}`;

  return {
    formText,
    mainName,
    subName,
    noText,
  };
}

function PokeBasicInfo({ pokeInfo }) {
  const { language } = useLanguage();

  const {
    noText, formText, mainName, subName,
  } = getLanguageTexts(pokeInfo, language);
  const sprityUrl = getSprityUrl(pokeInfo.sprity);

  return (
    <div className="grid w-[185px] xs:w-[250px] sm:w-[250px] md:w-[325px] xl:w-[350px] grid-cols-4 items-center h-full">
      <span className="text-[10px] xs:text-[12px] sm:text-[13px] text-slate-600/95 font-semibold">
        {noText}
      </span>
      <div className="relative w-[40px] h-[40px] xs:w-[50px] xs:h-[50px] xl:w-[60px] xl:h-[60px]">
        <Image
          src={sprityUrl}
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
        className={`flex h-full py-1 flex-col col-span-2 px-1 xl:px-2.5 ${formText ? 'justify-around' : 'justify-center'}`}
      >
        <div className="leading-[20px] flex flex-col justify-center ">
          <div className="text-[12px] xs:text-[14px] text-slate-600 font-semibold truncate">{mainName}</div>
          <div className="text-[11.5px] xs:text-[13.5px] text-slate-600 font-semibold truncate">{subName}</div>
        </div>
        <div className="text-[11.5px] xs:text-xs leading-[18px] font-medium text-slate-500/90 truncate">{formText}</div>
      </div>
    </div>
  );
}

function PokeTypes({ types }) {
  return (
    <div
      className="flex flex-col sm:flex-row gap-y-1 items-center sm:gap-x-2 md:gap-x-3
        w-[62px] sm:w-[132px] md:w-[145px] lg:w-[140px] xl:w-[158px]"
    >
      {types.map((type) => (
        <Type type={type} key={type} />
      ))}
    </div>
  );
}

export default function SearchPoke({ pokeInfo }) {
  const { saveLocalPoke } = useLocalStorage();

  const { types, pokeKey } = pokeInfo;

  const handlePokeClick = (targetPoke) => {
    saveLocalPoke(targetPoke);
  };

  const handleEnterKeyForSave = (e, targetPoke) => {
    if (e.key === 'Enter') {
      saveLocalPoke(targetPoke);
    }
  };

  return (
    <div className="px-2.5 sm:px-3 md:px-4 h-full">
      <div className="flex h-full justify-between items-center">
        <Link
          href={`/detail/${pokeKey}`}
          onClick={() => handlePokeClick(pokeInfo)}
          onKeyDown={(e) => handleEnterKeyForSave(e, pokeInfo)}
          prefetch
        >
          <PokeBasicInfo pokeInfo={pokeInfo} />
        </Link>
        <PokeTypes types={types} />
      </div>
    </div>
  );
}
