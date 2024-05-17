import React from 'react';
import Image from 'next/image';
import { ITEM_KO, TRADE_ITEM_KO } from '../../translations/item';

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

function Detail({ detail }) {
  if (detail.length === 0) {
    return null;
  }

  const TRIGGER = {
    trade: '통신교환',
    'use-item': '사용',
  };

  const CONDITION_MAP_KO = {
    min_level: '레벨',
    time_of_day: '에 레벨업',
  };

  const TIME_OF_DAY_MAP_KO = {
    night: '밤',
    day: '낮',
    dusk: '황혼',
  };

  const getConditionText = (key, value) => {
    if (key === 'min_level') {
      return `${CONDITION_MAP_KO[key]} ${value}`;
    } if (key === 'time_of_day') {
      return `${TIME_OF_DAY_MAP_KO[value]}에 레벨업`;
    } if (key === 'item') {
      return `${ITEM_KO[value] || value}`;
    } if (key === 'location') {
      return `${value}에서`;
    } if (key === 'min_happiness') {
      return `친밀도 ${value} 레벨업`;
    } if (key === 'held_item') {
      return `${TRADE_ITEM_KO[value]}을 지닌 상태에서`;
    }
    return `${value}`;
  };

  const detailTexts = detail.map(({ trigger, condition }, index) => (
    <div key={`${trigger}-${index}`} className="flex justify-center items-center">
      {condition.map(([key, value]) => (
        <div key={`${key}-${value}`}>
          {getConditionText(key, value)}
        </div>
      ))}
      <div>{TRIGGER[trigger]}</div>
    </div>
  ));

  return (
    <div className="min-h-36 flex items-center justify-center md:w-40 lg:w-64 flex-col">
      {detailTexts}
    </div>
  );
}

function ChainItem({
  to, detail, name, id,
}) {
  const src = getSprityUrl(id);

  return (
    <div className="md:flex">
      <div className="flex justify-center">
        <div className="md:flex">
          <Detail detail={detail} />
          <div className="w-20 md:w-24 flex flex-col items-center justify-center">
            <div className="w-16 h-16 md:w-20 relative md:h-20">
              <Image
                src={src}
                alt={name}
                fill
                size="70px"
                priority
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div>{name}</div>
          </div>
        </div>
      </div>
      <NextChainItem nextChainItem={to} />
    </div>
  );
}

export default function Chain({ chain, chainIndex }) {
  if (!chain) {
    return null;
  }

  return (
    <div>
      <h3 className="text-2xl">진화</h3>
      <div>{chainIndex}</div>
      <div className={gridColumn[chain.length]}>
        {chain.map(({
          name, to, detail, id,
        }) => (
          <ChainItem
            key={id}
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
