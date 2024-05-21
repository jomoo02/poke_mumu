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
  'mount-lanakila': '라나키라마운틴',
};

function makeFirstUpperCase(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

function LevelUp({ condition, language }) {
  const sortOrder = condition.length !== 2 ? (
    ['min_level', 'time_of_day', 'location', 'gender', 'needs_overworld_rain']
  ) : (
    ['location', 'min_level', 'time_of_day', 'gender', 'needs_overworld_rain']
  );

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
          <span>가 있을 때 레벨 업</span>
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

  const beautyCase = () => {
    if (language === 'ko') {
      return '아름다운 수치가 MAX 상태에서 레벨 업';
    }
    return 'level up with max Beauty';
  };

  const genderCase = (gender) => {
    if (gender === 2) {
      return language === 'ko' ? '수컷' : 'Male';
    }
    return language === 'ko' ? '암컷' : 'Female';
  };

  const turnUpsideDownCase = () => {
    if (language === 'ko') {
      return '기기를 위아래 거꾸로 잡은 상태';
    }
    return 'holding console upside down';
  };

  const needsOverworldRainCase = () => {
    if (language === 'ko') {
      return '비가오는 필드';
    }
    return 'during rain';
  };

  const relativeNatureCase = (nature) => {
    if (language === 'ko') {
      return '원래 성격에 따라';
    }
    return `with a ${nature} Nature`;
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
    min_beauty: beautyCase,
    gender: genderCase,
    turn_upside_down: turnUpsideDownCase,
    needs_overworld_rain: needsOverworldRainCase,
    relative_nature: relativeNatureCase,
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
  const sortOrder = ['item', 'location', 'time_of_day', 'gender'];

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
  console.log(item);

  const genderCase = (gender) => {
    if (gender === 2) {
      return language === 'ko' ? '수컷' : 'Male';
    }
    return language === 'ko' ? '암컷' : 'Female';
  };

  const KEY_MAP = {
    location: locationCase,
    time_of_day: timeCase,
    gender: genderCase,
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

  const tradeSpeciesCase = (value) => {
    if (value === 'shelmet') {
      return language === 'ko' ? '쪼마리' : value;
    }
    return language === 'ko' ? '딱정곤' : value;
  };

  const KEY_MAP = {
    held_item: heldItemCase,
    trade_species: tradeSpeciesCase,
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

function AgileStyleMove({ condition, language }) {
  const direction = language === 'ko' ? 'flex-col-reverse' : 'flex-col';

  const getText = (move) => {
    if (language === 'ko') {
      return (
        <p>
          <span>{MOVE_KO[move]}</span>
          &nbsp;
          속공으로 20번 사용
        </p>
      );
    }
    return (
      <p>
        <span>use</span>
        &nbsp;
        <span>{move}</span>
        &nbsp;
        <span>20 times in Agile Style</span>
      </p>
    );
  };

  return (
    <div className={`flex ${direction} text-sm justify-center items-center`}>
      {condition.map(([, value]) => (
        <div key={value}>{getText(value)}</div>
      ))}
    </div>
  );
}

function Other({ condition, language }) {
  // eslint-disable-next-line consistent-return
  const ohterCases = (value) => {
    if (value === 'three-critical-hits') {
      if (language === 'ko') {
        return '한 전투에서 급소를 3번 맞힌다';
      }
      return 'achieve 3 critical hits in one battle';
    } if (value === 'empty spot in party, Pokeball in bag') {
      if (language === 'ko') {
        return '몬스터볼을 가지고 있는 상태에서 포켓몬 슬롯이 1자리 이상 비어 있을 때 토중몬 진화 시 빈 슬롯에 획득';
      }
      return value;
    } if (value === 'in Tower of Darkness in Galar') {
      return language === 'ko' ? '악의 탑을 공략해 악의 족자를 보여준다' : value;
    } if (value === 'in Tower of Water in Galar') {
      return language === 'ko' ? '물의 탑을 공략해 물의 족자를 보여준다' : value;
    }
    return value;
  };

  return (
    <div className="flex text-sm">
      {condition.map(([key, value]) => (
        <div key={key}>{ohterCases(value)}</div>
      ))}
    </div>
  );
}

function Spin({ language }) {
  const text = language === 'ko' ? (
    '사탕공예를 지니게 하고 L스틱으로 캐릭터를 계속 회전시킨다'
  ) : (
    'spin around holding Sweet'
  );

  return (
    <div className="flex text-sm">
      {text}
    </div>
  );
}

// function RecoilDamage({ condition }) {
//   return (1)
// }

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
        } if (trigger === 'agile-style-move') {
          return <AgileStyleMove key={trigger} condition={condition} language={language} />;
        } if (trigger === 'spin') {
          return <Spin key={trigger} language={language} />;
        }
        return <Other key={trigger} condition={condition} language={language} />;
      })}
    </div>
  );
}
