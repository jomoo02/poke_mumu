'use client';

import React from 'react';
import Type from '@/app/components/type';
import useBasicInfo from '../hooks/useBasicInfo';

function Content({ contentKey, content }) {
  if (contentKey === 'types') {
    return (
      <div className="flex gap-x-2">
        {content.map((type) => <Type type={type} key={type} />)}
      </div>
    );
  } if (contentKey === 'form') {
    return (
      <div className="text-slate-600 text-sm sm:text-[15px] flex items-center capitalize">
        {content}
      </div>
    );
  }

  return (
    <div className="text-slate-600 text-sm sm:text-[15px] flex items-center">
      {content}
    </div>
  );
}

function Info({ info }) {
  const {
    subject,
    content,
    key,
  } = info;

  return (
    <div className="flex gap-x-5 md:gap-x-10 py-1 items-center font-semibold min-w-72 min-h-[35px] border-b">
      <div className="w-24 text-slate-500 text-[13px] sm:text-sm capitalize flex items-center justify-end">
        {subject}
      </div>
      <Content
        contentKey={key}
        content={content}
      />
    </div>
  );
}

export default function BasicInfo({ pokeInfo }) {
  const basicInfos = useBasicInfo(pokeInfo);

  return (
    <div className="px-2 pb-1 md:pb-0 flex flex-col justify-center">
      {basicInfos.map((basicInfo) => (
        <Info
          key={basicInfo.key}
          info={basicInfo}
        />
      ))}
    </div>
  );
}
