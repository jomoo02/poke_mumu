import React from 'react';
import Image from 'next/image';
import typesKo from '@/app/translations/tpye';

export default function Card({
  name, sprity, types, id, no, form,
}) {
  const sprityUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${sprity}`;
  const isBlockFormText = form.en === 'default' ? 'hidden' : 'block';

  return (
    <div className="border-2 border-slate-400 w-56 h-56 p-3 flex flex-col">
      <div className="text-sm text-slate-600 font-medium">No.{no} id.{id}</div>
      <div className="flex justify-center my-0.5">
        <Image
          src={sprityUrl}
          alt={name.en}
          width={85}
          height={85}
          priority
        />
      </div>
      <div className="flex flex-col justify-between flex-1">
        <div className="flex flex-col gap-y-0.5">
          <div className="font-medium text-slate-700">
            {name.ko}
            {' '}
            {name.en}
          </div>
          <div className={`${isBlockFormText} text-slate-600/90 leading-5 text-[15px]`}>
            {form.en}
            {' '}
            {form.ko}
          </div>
        </div>

        <div className="flex gap-x-2">
          {types?.map((type) => (
            <div className={`type ${type} w-[94px] flex justify-center items-center font-extrabold`} key={type}>
              {typesKo[type]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
