'use client';

import React from 'react';
import Type from '@/app/components/type';
import useBasicInfo from '../hooks/useBasicInfo';
import BasicInfoBreeding from './basic-info-breeding';
import BasicInfoDetail from './basic-info-detail';

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
  const basicInfos = useBasicInfo(pokeInfo);

  return (
    <div className="px-2 pb-1 md:pb-0 flex flex-col justify-center">
      {basicInfos.map((basicInfo) => (
        <Info
          key={basicInfo.key}
          info={basicInfo}
        />
      ))}
      <div>
        <BasicInfoBreeding basicInfo={pokeInfo.basicInfo} />
      </div>
      <div>
        <BasicInfoDetail basicInfo={pokeInfo.basicInfo} />
      </div>
    </div>
  );
}
