export type Region =
  'alola'
  | 'galar'
  | 'hisui';

type RegionText = Record<Region, string>;

const regionKo: RegionText = {
  alola: '알로라지방',
  galar: '가라르지방',
  hisui: '히스이지방',
};

export {
  regionKo,
};
