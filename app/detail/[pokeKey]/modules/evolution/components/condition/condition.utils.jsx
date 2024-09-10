import React from 'react';
import {
  MoveLink,
  ItemLink,
  ItmeLinkWithParticle,
  PokeLinkWithSbjectParticle,
  PokeLinkWithParticleForAnd,
} from '@/app/components/link-containers';
import typesKo from '@/app/translations/type';
import {
  makeFirstUpperCase,
  makeFirstUpperCaseTextArray,
} from '@/app/lib/utils';
import {
  getOtherConditionContent,
  getAreaInfoWithKey,
} from '../../utils/conditionUtils';

const contentMap = {
  agile_style: {
    affix: {
      ko: {
        suffix: '속공으로 20번 사용',
      },
      en: {
        prefix: 'Use',
        suffix: 'in the agile style 20 times in Hisui',
      },
    },
    renderContent: (value, language) => <MoveLink move={value} language={language} />,
  },
  gender: {
    renderContent: (value, language) => {
      const genderText = {
        2: {
          ko: '수컷',
          en: 'Male',
        },
        1: {
          ko: '암컷',
          en: 'Female',
        },
      };
      const gender = genderText[value] || genderText[2];

      return gender[language] || gender.ko;
    },
  },
  held_item: {
    affix: {
      ko: {
        suffix: '지닌채',
      },
      en: {
        prefix: 'holding',
      },
    },
    renderContent: (value, language) => <ItmeLinkWithParticle item={value} language={language} />,
  },
  item: {
    renderContent: (value, language) => <ItemLink item={value} language={language} />,
  },
  known_move_type: {
    renderContent: (value, language) => {
      const content = language === 'ko' ? `${typesKo[value]}타입 기술을 배우고` : `after ${value}-type move learned`;
      return <span>{content}</span>;
    },
  },
  known_move: {
    affix: {
      ko: {
        suffix: '배운 상태에서',
      },
      en: {
        prefix: 'knowing',
      },
    },
    renderContent: (value, language) => <MoveLink move={value} language={language} />,
  },
  min_affection: {
    renderContent: (value, language) => {
      const text = language === 'ko' ? `절친도 ${value}단계 이상일 때`
        : `min affection ${value}`;

      return <span>{text}</span>;
    },
  },
  min_beauty: {
    renderContent: (_, language) => {
      const localeText = {
        ko: '아름다움 수치 MAX 상태에서',
        en: 'max Beauty',
      };

      return <span>{localeText[language] || localeText.ko}</span>;
    },
  },
  min_happiness: {
    renderContent: (_, language) => {
      const localeText = {
        en: 'with high Friendship',
        ko: '친밀도가 높은 상태에서',
      };

      return <span>{localeText[language] || localeText.ko}</span>;
    },
  },
  min_level: {
    renderContent: (value) => (
      <>
        <span className="mr-1">Level</span>
        <span>{value}</span>
      </>
    ),
  },
  needs_overworld_rain: {
    renderContent: (_, language) => {
      const localeText = {
        en: 'during rain',
        ko: '비가 오는 필드',
      };

      return <span>{localeText[language] || localeText.ko}</span>;
    },
  },
  party_species: {
    affix: {
      ko: {
        prefix: '파티에',
        suffix: '있을 때',
      },
      en: {
        prefix: 'with',
        suffix: 'in party',
      },
    },
    renderContent: (value, language) => (
      <PokeLinkWithSbjectParticle poke={value} language={language} />
    ),
  },
  party_type: {
    renderContent: (value, language) => {
      const content = language === 'ko'
        ? `${typesKo[value]} 타입 포켓몬을 지니고 있는 상태`
        : `with a ${makeFirstUpperCase(value)}-type Pokémon in the party`;
      return <span>{content}</span>;
    },
  },
  recoil_damage: {
    renderContent: (value, language) => {
      const content = language === 'ko'
        ? `누적 반동 데미지 ${value} 이상 입은 상태에서`
        : `after losing at least ${value} HP from recoil damage`;
      return <span>{content}</span>;
    },
  },
  relative_nature: {
    affix: {
      ko: {
        prefix: '원래 성격에 따라',
      },
      en: {
        prefix: 'Nature:',
      },
    },
    renderContent: (value, language) => {
      const natureLocaleMap = {
        ko: {
          amped: '노력, 고집, 개구쟁이, 용감, 온순, 장난꾸러기, 촐랑, 덜렁, 변덕, 건방, 성급, 명랑, 천진난만',
          lowKey: '외로움, 대담, 무사태평, 조심, 의젓, 수줍음, 냉정, 차분, 얌전, 신중, 겁쟁이, 성실',
        },
        en: {
          amped: 'Hardy, Brave, Adamant, Naughty, Docile, Impish, Lax, Hasty, Jolly, Naive, Rash, Sassy, or Quirky',
          lowKey: 'Lonely, Bold, Relaxed, Timid, Serious, Modest Mild, Quiet, Bashful, Calm, Gentle, or Careful',
        },
      };

      const localeNatures = natureLocaleMap[language] || natureLocaleMap.ko;
      const natures = localeNatures[value] || localeNatures.amped;

      return <span className="text-xs">{natures}</span>;
    },
  },
  relative_physical_stats: {
    renderContent: (value, language) => {
      const localeContentWithStat = {
        en: (stat) => {
          if (stat === 1) {
            return 'Attack > Defense';
          } if (stat === -1) {
            return 'Attack < Defense';
          }
          return 'Attack = Defense';
        },
        ko: (stat) => {
          if (stat === 1) {
            return '공격이 방어보다 높다';
          } if (stat === -1) {
            return '방어가 공격보다 높다';
          }
          return '공격과 방어가 같다';
        },
      };
      const localeContent = localeContentWithStat[language] || localeContentWithStat.ko;
      const content = localeContent(value) || localeContent(1);

      return <span>{content}</span>;
    },
  },
  spin: {
    affix: {
      ko: {
        suffix: '지니게하고 L스틱으로 캐릭터를 계속 회전',
      },
      en: {
        prefix: 'Spin holding a',
      },
    },
    renderContent: (_, language) => {
      const content = language === 'ko' ? '사탕공예를' : 'Sweet';
      return <span>{content}</span>;
    },
  },
  strong_style: {
    affix: {
      ko: {
        suffix: '강공으로 20번 사용',
      },
      en: {
        prefix: 'Use',
        suffix: 'in the strong style 20 times in LA only',
      },
    },
    renderContent: (value, language) => <MoveLink move={value} language={language} />,
  },
  time_of_day: {
    renderContent: (value, language) => {
      const timeKoTexts = {
        night: '밤',
        day: '낮',
        dusk: '황혼',
        'full-moon': '보름달',
      };

      const localeContent = {
        ko: timeKoTexts[value],
        en: ['dusk', 'full-moon'].includes(value)
          ? makeFirstUpperCaseTextArray(value.split('-'))
          : `${makeFirstUpperCaseTextArray(value.split('-'))}time`,
      };

      const content = localeContent[language] || localeContent.ko;

      return <span>{content}</span>;
    },
  },
  trade: {
    affix: {
      ko: {},
      en: {
        prefix: 'for',
      },
    },
    renderContent: (value, language) => (
      <PokeLinkWithParticleForAnd poke={value} language={language} />
    ),
  },
  trade_species: {
    affix: {
      ko: {},
      en: {
        prefix: 'for',
      },
    },
    renderContent: (value, language) => (
      <PokeLinkWithParticleForAnd poke={value} language={language} />
    ),
  },
  turn_upside_down: {
    renderContent: (_, language) => {
      const localeContent = {
        ko: '기기를 위아래 거꾸로 잡은 상태',
        en: 'holding console upside down',
      };

      return <span>{localeContent[language] || localeContent.ko}</span>;
    },
  },
  use_move: {
    affix: {
      ko: {
        suffix: '20번 사용 후',
      },
      en: {
        prefix: 'after using',
        suffix: '20 times',
      },
    },
    renderContent: (value, language) => <MoveLink move={value} language={language} />,
  },
  location: {
    affix: {
      en: {
        prefix: 'in',
      },
      ko: {},
    },
    renderContent: (value, language) => {
      const regionsKo = {
        alola: '알로라지방',
        galar: '가라르지방',
        hisui: '히스이지방',
      };

      const localeRegion = language === 'ko' ? regionsKo[value] : value;

      return <span className="capitalize inline-block">{localeRegion}</span>;
    },
  },
  other: {
    renderContent: (value, language) => {
      const pokeContent = getOtherConditionContent(value);

      if (!pokeContent) {
        return null;
      }

      return <span>{pokeContent[language] || pokeContent.ko}</span>;
    },
  },
  area: {
    renderContent: (value, language) => {
      const areaContent = getAreaInfoWithKey(value);

      const localeArea = language === 'ko'
        ? `${areaContent.ko}에서`
        : areaContent.en;

      return <>{localeArea}</>;
    },
  },
  default: {
    affix: {},
    renderContent: () => <></>,
  },
};

export default function getConditionInfo(condition) {
  const {
    renderContent,
    affix = {},
  } = contentMap[condition] || contentMap.default;

  return {
    affix,
    renderContent,
  };
}
