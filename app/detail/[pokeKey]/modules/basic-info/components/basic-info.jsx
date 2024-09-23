'use client';

import React from 'react';
import Type from '@/app/components/type';
import BasicInfoBreeding from './basic-info-breeding';
import BasicInfoDetail from './basic-info-detail';
import BasicInfoBasic from './info-basic';

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
  } if (contentKey === 'egg-groups') {
    return (
      <div className="flex gap-x-2">
        {content.map((group) => <span key={group}>{group}</span>)}
      </div>
    );
  }

  return (
    <div className="info-content">
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
    <div className="info-container">
      <div className="info-subject">
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
  return (
    <div className="px-2 2xl:px-10 pb-1 md:pb-4 grid xl:grid-cols-2 xl:gap-x-8 2xl:gap-x-14 gap-y-4">
      <BasicInfoBasic
        basicInfo={pokeInfo.basicInfo}
        types={pokeInfo.types}
        no={pokeInfo.no}
        form={pokeInfo.form}
        name={pokeInfo.name}
      />
      <div className="grid gap-y-4 gap-x-6 xl:gap-y-6">
        <BasicInfoDetail
          basicInfo={pokeInfo.basicInfo}
          weight={pokeInfo.weight}
          height={pokeInfo.height}
        />
        <BasicInfoBreeding basicInfo={pokeInfo.basicInfo} />
      </div>
    </div>
  );
}
