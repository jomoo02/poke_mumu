import React from 'react';
import Image from 'next/image';
import typesKo from '@/app/translations/tpye';

export default function SearchPoke({
  no, name, types, form, sprity,
}) {
  const sprityUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${sprity}`;
  const formText = form.en === 'default' ? '' : form.ko;

  return (
    <div className="px-3 py-1">
      <div className="flex justify-between items-center">
        <div className="grid w-[240px] grid-cols-4 items-center">
          <Image
            src={sprityUrl}
            alt={name.en}
            width={40}
            height={40}
            priority
          />
          <span className="text-[13px] text-slate-600/95 font-semibold">
            no.
            {no}
          </span>
          <div className="flex flex-col justify-center h-9 col-span-2 px-2">
            <div className="text-slate-600 font-bold text-sm">{name.ko}</div>
            <div className="text-xs font-semibold text-slate-500/90">{formText}</div>
          </div>
        </div>
        <div className="flex gap-x-2 w-[158px]">
          {types.map((type) => (
            <div
              className={`${type} w-[75px] flex justify-center items-center font-bold text-sm text-white py-px rounded-md px-1.5`}
              key={type}
            >
              {typesKo[type]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
