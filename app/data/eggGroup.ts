const noEggs = 'no-eggs';

export type EggGroup =
  'indeterminate'
  | 'bug'
  | 'dragon'
  | 'fairy'
  | 'ground'
  | 'flying'
  | 'plant'
  | 'humanshape'
  | 'mineral'
  | 'monster'
  | 'water1'
  | 'water2'
  | 'water3'
  | 'ditto'
  | 'no-eggs';

export type EggGroups = Record<EggGroup, string>;

const eggGroupsKo: EggGroups = {
  indeterminate: '부정형',
  bug: '벌레',
  dragon: '드래곤',
  fairy: '요정',
  ground: '육상',
  flying: '비행',
  plant: '식물',
  humanshape: '인간형',
  mineral: '광물',
  monster: '괴수',
  ditto: '메타몽',
  water1: '수중1',
  water2: '수중2',
  water3: '수중3',
  'no-eggs': '미발견',
};

const eggGroupsEn: EggGroups = {
  indeterminate: 'Amorphous',
  bug: 'Bug',
  dragon: 'Dragon',
  fairy: 'Fairy',
  ground: 'Field',
  flying: 'Flying',
  plant: 'Grass',
  humanshape: 'Human Like',
  mineral: 'Mineral',
  monster: 'Monster',
  ditto: 'Ditto',
  water1: 'Water 1',
  water2: 'Water 2',
  water3: 'Water 3',
  'no-eggs': 'Undiscovered',
};

const localizedEggGroups: Record<'ko' | 'en', EggGroups> = {
  en: eggGroupsEn,
  ko: eggGroupsKo,
};

export {
  noEggs,
  eggGroupsKo,
  eggGroupsEn,
  localizedEggGroups,
};
