'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/app/language-provider';
import { ITEM_KO, TRADE_ITEM_KO } from '../../../translations/item';
import Trigger from '../trigger';
import TriggierV2 from './triggerV2';

const getSprityUrl = (id) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

const gridColumn = {
  1: 'grid grid-cols-1',
  2: 'grid grid-cols-2 md:grid-cols-1',
  3: 'grid grid-cols-3 md:grid-cols-1',
  4: 'grid-grid-cols-4 md:grid-cols-1',
  7: 'grid grid-cols-7 md:grid-cols-1',
  8: 'grid grid-cols-8 md:grid-cols-1',
};

function NextChainItem({ nextChainItem }) {
  if (nextChainItem.length === 0) {
    return null;
  }

  return (
    <div className={gridColumn[nextChainItem.length]}>
      {nextChainItem.map(({
        name, to, detail, id,
      }) => (
        <ChainItem
          key={id}
          name={name}
          to={to}
          detail={detail}
          id={id}
        />
      ))}
    </div>
  );
}

function Detail({ detail, name }) {
  if (detail.length === 0) {
    return null;
  }

  // const detailTexts = detail.map(({ trigger, condition }, index) => (
  //   <div key={`${trigger}-${index}`} className="flex justify-center items-center">
  //     {condition.map(([key, value]) => (
  //       <div key={`${key}-${value}`}>
  //         {getConditionText(key, value)}
  //       </div>
  //     ))}
  //     <div>{TRIGGER[trigger]}</div>
  //   </div>
  // ));

  return (
    <div className="min-h-36 flex items-center justify-center md:w-40 lg:w-64 flex-col">
      <TriggierV2 detail={detail} name={name} />
    </div>
  );
}

function ChainItem({
  to, detail, name, id,
}) {
  const { language } = useLanguage();
  const nameLan = language === 'ko' ? name.ko : name.en;
  const src = getSprityUrl(id);

  return (
    <div className="md:flex">
      <div className="flex justify-center">
        <div className="md:flex">
          <Detail detail={detail} name={name.en} />
          <div className="w-20 md:w-24 flex flex-col items-center justify-center">
            {/* <div className="w-16 h-16 md:w-20 relative md:h-20">
              <Image
                src={src}
                alt={nameLan}
                fill
                size="70px"
                priority
                style={{ objectFit: 'contain' }}
              />
            </div> */}
            <div>{nameLan}</div>
          </div>
        </div>
      </div>
      <NextChainItem nextChainItem={to} />
    </div>
  );
}

export default function Chain({ chainData }) {
  if (!chainData) {
    return null;
  }

  const { chain, index: chainIndex } = chainData;

  return (
    <div>
      <h3 className="text-2xl">진화</h3>
      <div>{chainIndex}</div>
      <div className={gridColumn[chain.length]}>
        {chain.map(({
          name, to, detail, id,
        }) => (
          <ChainItem
            key={`${id}-${name.en}`}
            to={to}
            detail={detail}
            name={name}
            id={id}
          />
        ))}
      </div>
    </div>
  );
}
