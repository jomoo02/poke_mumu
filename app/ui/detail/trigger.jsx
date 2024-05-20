import React from 'react';
import { useLanguage } from '@/app/language-provider';
import { ITEM_KO, TRADE_ITEM_KO, HELD_ITEM_KO } from '../../translations/item';
import { MOVE_KO } from '../../translations/move';

const TIME_OF_DAY_MAP_KO = {
  night: '밤',
  day: '낮',
  dusk: '황혼',
  'full-moon': '보름달',
};

const LOCATION = {
  alola: '알로라지방',
  galar: '가라르지방',
  hisui: '히스이지방',
};

function makeFirstUpperCase(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

function LevelUp({ condition, language }) {
  const sortOrder = condition.length !== 2 ? ['min_level', 'time_of_day', 'location'] : ['location', 'min_level', 'time_of_day'];
  const direction = language === 'ko' ? 'flex-col-reverse' : 'flex-col';
  const directionItem = language === 'ko' ? 'flex-row-reverse' : 'flex-row';

  const sortedCondition = condition.sort((a, b) => {
    const index1 = sortOrder.indexOf(a[0]);
    const index2 = sortOrder.indexOf(b[0]);
    return index1 - index2;
  });

  const [firstKey, firstValue] = sortedCondition[0];
  const etcConditions = sortedCondition.slice(1);

  const minLevelCase = (level) => `Level ${level}`;

  const timeCase = (time) => {
    const timeUC = makeFirstUpperCase(time);
    if (language === 'en') {
      return ['dusk', 'full-mon'].includes(time) ? timeUC : `${timeUC}time`;
    }
    return `${TIME_OF_DAY_MAP_KO[time]}에 레벨 업`;
  };

  const locationCase = (location) => {
    if (language === 'ko') {
      return `${LOCATION[location]}에서`;
    }
    return `in ${location}`;
  };

  const happinessCase = () => {
    if (language === 'ko') {
      return '친밀도가 높은 상태에서 레벨 업';
    }
    return 'high Friendship';
  };

  const ohterCase = (value) => value;

  const physicalCase = (value) => {
    if (value === 1) {
      return language === 'ko' ? '공격이 방어보다 높다' : 'Attack > Defense';
    } if (value === -1) {
      return language === 'ko' ? '방어가 공격보다 높다' : 'Attack < Defense';
    }
    return language === 'ko' ? '공격과 방어가 같다' : 'Attack = Defense';
  };

  const knownMoveCase = (value) => {
    if (language === 'ko') {
      // return `${MOVE_KO[value]} 배운 상태에서 레벨 업`;
      return (
        <>
          <span>{MOVE_KO[value]}</span>
          <span>&nbsp;</span>
          <span>배운 상태에서 레벨 업</span>
        </>
      );
    }
    return (
      <>
        <span>after</span>
        <span>&nbsp;</span>
        <span>{value}</span>
        <span>&nbsp;</span>
        <span>learned</span>
      </>
    );
  };

  const heldItemCase = (item) => {
    const text = language === 'ko' ? '지닌 상태에서' : 'holding';
    const itemText = language === 'ko' ? HELD_ITEM_KO[item] : item;
    return (
      <span className={`flex ${directionItem}`}>
        <span>{text}</span>
        <span>&nbsp;</span>
        <span>{itemText}</span>
      </span>
    );
  };

  const partySpeciesCase = (party) => {
    if (language === 'ko') {
      let poke = '';
      if (party === 'remoraid') {
        poke = '총어';
      }
      return (
        <>
          <span>파티에</span>
          &nbsp;
          <span>{poke}</span>
          <span>가 있을 때</span>
        </>
      );
    }
    return (
      <>
        <span>with</span>
        &nbsp;
        <span>{party}</span>
        <span>in party</span>
      </>
    );
  };

  const KEY_MAP = {
    min_level: minLevelCase,
    time_of_day: timeCase,
    location: locationCase,
    min_happiness: happinessCase,
    other: ohterCase,
    relative_physical_stats: physicalCase,
    known_move: knownMoveCase,
    held_item: heldItemCase,
    party_species: partySpeciesCase,
  };

  return (
    <div className="text-sm">
      <div className="flex justify-center">
        {KEY_MAP[firstKey] && KEY_MAP[firstKey](firstValue)}
      </div>
      <div className={`flex ${direction}`}>
        {etcConditions.map(([key, value]) => (
          <div key={key} className="flex justify-center">
            {KEY_MAP[key] && KEY_MAP[key](value)}
          </div>
        ))}
      </div>

    </div>
  );
}

function UseItem({ condition, language }) {
  const sortOrder = ['item', 'location', 'time_of_day'];

  const direction = language === 'ko' ? 'flex-col-reverse' : 'flex-col';

  const sortedCondition = condition.sort((a, b) => {
    const index1 = sortOrder.indexOf(a[0]);
    const index2 = sortOrder.indexOf(b[0]);
    return index1 - index2;
  });
  const timeCase = (time) => {
    const timeUC = makeFirstUpperCase(time);
    if (language === 'en') {
      return ['dusk', 'full-moon'].includes(time) ? timeUC : `${timeUC}time`;
    }
    return `${TIME_OF_DAY_MAP_KO[time]}일 때`;
  };

  const [, item] = sortedCondition[0];
  const itemText = language === 'ko' ? ITEM_KO[item] : item;
  const etcCondition = sortedCondition.slice(1);

  const locationCase = (location) => {
    if (language === 'ko') {
      return `${LOCATION[location]}에서`;
    }
    return `in ${location}`;
  };

  const itemCase = () => {
    if (language === 'en') {
      return <span>use</span>;
    }
    return null;
  };

  const KEY_MAP = {
    location: locationCase,
    time_of_day: timeCase,
  };

  return (
    <div className={`text-sm flex ${direction} items-center`}>
      <div className="flex justify-center gap-x-1">
        <span>{itemCase()}</span>
        <span>{itemText}</span>
      </div>
      {etcCondition.map(([key, value]) => (
        <div key={key} className="flex justify-center">
          {KEY_MAP[key] && KEY_MAP[key](value)}
        </div>
      ))}
    </div>
  );
}

function Trade({ condition, language }) {
  const direction = language === 'ko' ? 'flex-col-reverse' : 'flex-col';
  const directionItem = language === 'ko' ? 'flex-row-reverse' : 'flex-row';

  const title = language === 'ko' ? '통신교환' : 'trade';

  const heldItemCase = (item) => {
    const text = language === 'ko' ? '지닌 상태에서' : 'holding';
    const itemText = language === 'ko' ? TRADE_ITEM_KO[item] : item;
    return (
      <span className={`flex ${directionItem}`}>
        <span>{text}</span>
        <span>&nbsp;</span>
        <span>{itemText}</span>
      </span>
    );
  };

  const KEY_MAP = {
    held_item: heldItemCase,
  };

  return (
    <div className={`flex ${direction} text-sm justify-center items-center`}>
      <span>{title}</span>
      {condition.map(([key, value]) => (
        <div key={key} className="flex justify-center">
          {KEY_MAP[key] && KEY_MAP[key](value)}
        </div>
      ))}
    </div>
  );
}

function Other({ condition, language }) {
  const ohterCases = (value) => {
    if (value === 'three-critical-hits') {
      if (language === 'ko') {
        return '한 전투에서 급소를 3번 맞힌다';
      }
      return 'achieve 3 critical hits in one battle';
    }
  };

  return (
    <div className="flex text-sm">
      {condition.map(([key, value]) => (
        <div key={key}>{ohterCases(value)}</div>
      ))}
    </div>
  );
}

export default function Triggier({ detail }) {
  const { language } = useLanguage();
  return (
    <div className="grid divide-y">
      {detail.map(({ trigger, condition }) => {
        if (trigger === 'level-up') {
          return <LevelUp key={trigger} condition={condition} language={language} />;
        } if (trigger === 'use-item') {
          return <UseItem key={trigger} condition={condition} language={language} />;
        } if (trigger === 'trade') {
          return <Trade key={trigger} condition={condition} language={language} />;
        }
        return <Other key={trigger} condition={condition} language={language} />;
      })}
    </div>
  );
}
