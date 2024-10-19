const ITEM_KO = {
  'thunder-stone': '천둥의돌',
  'ice-stone': '얼음의돌',
  'moon-stone': '달의돌',
  'fire-stone': '불의돌',
  'leaf-stone': '풀의돌',
  'sun-stone': '태양의돌',
  'water-stone': '물의돌',
  'galarica-cuff': '가라두구팔찌',
  'galarica-wreath': '가라두구머리장식',
  'black-augurite': '검은휘석',
  'shiny-stone': '빛의돌',
  'dusk-stone': '어둠의돌',
  'peat-block': '피트블록',
  'dawn-stone': '각성의돌',
  'chipped-pot': '이빠진포트',
  'cracked-pot': '깨진포트',
  'metal-alloy': '복합금속',
  'scroll-of-darkness': '악의족자',
  'scroll-of-waters': '물의족자',
  'auspicious-armor': '축복받은갑옷',
  'malicious-armor': '저주받은갑옷',
  'masterpiece-teacup': '걸작찻잔',
  'unremarkable-teacup': '범작찻잔',
  'tart-apple': '새콤한사과',
  'sweet-apple': '달콤한사과',
  'syrupy-apple': '꿀맛사과',
};

const TRADE_ITEM_KO = {
  'kings-rock': '왕의징표석',
  'metal-coat': '메탈코트',
  protector: '프로텍터',
  'dragon-scale': '용의비늘',
  electirizer: '에레키부스터',
  magmarizer: '마그마부스터',
  'up-grade': '업그레이드',
  'dubious-disc': '괴상한패치',
  'prism-scale': '고운비늘',
  'reaper-cloth': '영계의천',
  'deep-sea-tooth': '심해의이빨',
  'deep-sea-scale': '심해의비늘',
  sachet: '향기주머니',
  'whipped-dream': '휘핑팝',
};

const HELD_ITEM_KO = {
  'razor-fang': '예리한이빨',
  'razor-claw': '예리한손톱',
  'oval-stone': '동글동글돌',
};

const ALL_ITEM_KO = {
  ...ITEM_KO,
  ...TRADE_ITEM_KO,
  ...HELD_ITEM_KO,
};

const ITEM_EN = {
  'kings-rock': "King's Rock",
};

export {
  ITEM_KO,
  TRADE_ITEM_KO,
  HELD_ITEM_KO,
  ALL_ITEM_KO,
  ITEM_EN,
};

export type ItemKey = keyof typeof ALL_ITEM_KO;
