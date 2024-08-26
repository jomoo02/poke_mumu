export function magneticField() {
  const fieldMap = {
    ko: [
      {
        region: '호연',
        area: '뉴보라(OR/AS)',
      },
      {
        region: '신오',
        area: '천관산',
      },
      {
        region: '하나',
        area: '전기돌동굴',
      },
      {
        region: '칼로스',
        area: '13번 도로(칼로스발전소 인근)',
      },
      {
        region: '알로라',
        area: '포니대협곡, 화끈산 지열발전소(USUM)',
      },
      {
        region: '히스이',
        area: '천관산 기슭',
      },
    ],
    en: [
      {
        region: 'Hoenn',
        area: 'New Mauville(OR/AS)',
      },
      {
        region: 'Sinnoh',
        area: 'Mt Coronet',
      },
      {
        region: 'Unova',
        area: 'Chargestone Cave',
      },
      {
        region: 'Kalos',
        area: 'Route 13',
      },
      {
        region: 'Alola',
        area: 'Vast Poni Canyon(S/M/US/UM), Blush Mountain(US/UM)',
      },
      {
        region: 'Hisui',
        area: 'Coronet Highlands',
      },
    ],
  };
  return fieldMap;
}

export function mossyRock() {
  const filedMap = {
    ko: [
      {
        region: '호연',
        area: '등화숲(OR/AS)',
      },
      {
        region: '신오',
        area: '영원의 숲',
      },
      {
        region: '하나',
        area: '바람개비숲',
      },
      {
        region: '칼로스',
        area: '20번 도로(미혹의 숲)',
      },
      {
        region: '알로라',
        area: '셰이드정글',
      },
      {
        region: '히스이',
        area: '흑요 들판 안쪽 숲',
      },
    ],
    en: [
      {
        region: 'Hoenn',
        area: 'Petalburg Woods(OR/AS)',
      },
      {
        region: 'Sinnoh',
        area: 'Eterna Forest',
      },
      {
        region: 'Unova',
        area: 'Pinwheel Forest',
      },
      {
        region: 'Kalos',
        area: 'Route 20 oods(near entrance)',
      },
      {
        region: 'Alola',
        area: 'Lush Jungle',
      },
      {
        region: 'Hisui',
        area: 'The Heartwood, Obsidian Fieldlands',
      },
    ],
  };

  return filedMap;
}

export function icyRock() {
  const fieldMap = {
    ko: [
      {
        region: '호연',
        area: '여울의 동굴 (썰물일 때) (OR/AS)',
      },
      {
        region: '신오',
        area: '217번도로',
      },
      {
        region: '하나',
        area: '태엽산 지하 1층',
      },
      {
        region: '칼로스',
        area: '프로스트케이브',
      },
      {
        region: '알로라',
        area: '라나키라마운틴',
      },
      {
        region: '히스이',
        area: '순백 동토 극한의 황무지',
      },
    ],
    en: [
      {
        region: 'Hoenn',
        area: 'Shoal Cave (ice room, low tide) (OR/AS)',
      },
      {
        region: 'Sinnoh',
        area: 'Route 217',
      },
      {
        region: 'Unova',
        area: 'Twist Mountain (basement)',
      },
      {
        region: 'Kalos',
        area: 'Frost Cavern',
      },
      {
        region: 'Alola',
        area: 'Mount Lanakila',
      },
      {
        region: 'Hisui',
        area: 'Icepeak Cavern, Alabaster Icelands',
      },
    ],
  };
  return fieldMap;
}

export function getLocationInfos(chainIndex) {
  if ([34, 123].includes(chainIndex)) {
    return [{ key: 'magnet', info: magneticField()}];
  } if (chainIndex === 62) {
    return [{key: 'mossy', info: mossyRock() }, { key:'icy', info: icyRock()}];
  } if (chainIndex === 265) {
    return [{
      key: 'magent',
      info: {
        ko: [
          {
            region: '알로라',
            area: '포니대협곡, 화끈산 지열발전소(USUM)',
          },
        ],
        en: [
          {
            region: 'Alola',
            area: 'Vast Poni Canyon(S/M/US/UM), Blush Mountain(US/UM)',
          },
        ],
      },
    }];
  }
}