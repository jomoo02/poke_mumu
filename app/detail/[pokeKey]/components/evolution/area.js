const areas = {
  mossyRock: {
    ko: '이끼 낀 바위 근처',
    en: 'Mossy Rock',
  },
  icyRock: {
    ko: '얼음 바위 근처',
    en: 'Icy Rock',
  },
  magneticField: {
    ko: '자기장 영역',
    en: 'Magnetic Field',
  },
  mountLanakila: {
    ko: '라나키라마운틴',
    en: 'Mount Lanakila',
  },
  default: {
    ko: '특정 장소',
    en: 'specific place',
  },
};

const areasKey = {
  mossyRock: 'mossy-rock',
  icyRock: 'icy-rock',
  magneticField: 'magnetic-field',
  mountLanakila: 'mount-lanakila',
};

const magneticFields = {
  ko: [
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
      area: '13번 도로 (칼로스발전소 인근)',
    },
    {
      region: '호연',
      area: '뉴보라 (OR/AS)',
    },
    {
      region: '알로라',
      area: '포니대협곡, 화끈산 지열발전소 (USUM)',
    },
    {
      region: '히스이',
      area: '천관산 기슭',
    },
  ],
  en: [
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
      region: 'Hoenn',
      area: 'New Mauville (OR/AS)',
    },
    {
      region: 'Alola',
      area: 'Vast Poni Canyon, Blush Mountain (US/UM)',
    },
    {
      region: 'Hisui',
      area: 'Coronet Highlands',
    },
  ],
};

const mossyRocks = {
  ko: [
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
      area: '20번 도로 (미혹의 숲)',
    },
    {
      region: '호연',
      area: '등화숲 (OR/AS)',
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
      region: 'Sinnoh',
      area: 'Eterna Forest',
    },
    {
      region: 'Unova',
      area: 'Pinwheel Forest',
    },
    {
      region: 'Kalos',
      area: 'Route 20 oods (near entrance)',
    },
    {
      region: 'Hoenn',
      area: 'Petalburg Woods (OR/AS)',
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

const icyRocks = {
  ko: [
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
      region: '호연',
      area: '여울의 동굴 (썰물일 때) (OR/AS)',
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
      region: 'Hoenn',
      area: 'Shoal Cave (ice room, low tide) (OR/AS)',
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

export {
  areas,
  areasKey,
  magneticFields,
  mossyRocks,
  icyRocks,
};
