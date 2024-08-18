export function getHeadKeys() {
  const keys = {
    name: 'name',
    type: 'type',
    damageClass: 'damageClass',
    power: 'power',
    accuracy: 'accuracy',
    level: 'level',
    pre: 'pre',
    hm: 'hm',
    tm: 'tm',
    tr: 'tr',
  };

  return keys;
}

export function getMethods() {
  const methods = {
    level: 'level',
    pre: 'pre',
    egg: 'egg',
    tutor: 'tutor',
    reminder: 'reminder',
    hm: 'hm',
    tm: 'tm',
    tr: 'tr',
  };

  return methods;
}

export function setInitialSortKeyWithMethod(method) {
  const {
    level, pre, tm, tr, hm, name,
  } = getHeadKeys();

  if ([level, pre, tm, tr, hm].includes(method)) {
    return method;
  }
  return name;
}

function createHeadItem(key, content, className) {
  return ({ key, content, className });
}

export function setBaseHeadItems(language) {
  const localeContent = {
    ko: {
      name: '기술',
      type: '타입',
      damageClass: '분류',
      power: '위력',
      accuracy: '명중률',
    },
    en: {
      name: 'name',
      type: 'type',
      damageClass: 'cat.',
      power: 'power',
      accuracy: 'acc.',
    },
  };

  const keys = getHeadKeys();

  const languageContent = localeContent[language] || localeContent.ko;

  const basicItems = [
    createHeadItem(keys.name, languageContent.name, 'w-[10.5rem]'),
    createHeadItem(keys.type, languageContent.type, 'w-[5.25rem]'),
    createHeadItem(keys.damageClass, languageContent.damageClass, 'w-[5.25rem]'),
    createHeadItem(keys.power, languageContent.power, 'w-[5.55rem]'),
    createHeadItem(keys.accuracy, languageContent.accuracy, 'w-[5rem]'),
  ];

  return basicItems;
}

export function setSpecialCaseHeadItem(method) {
  const {
    level, tm, tr, hm, pre,
  } = getHeadKeys();

  if (method === level) {
    return createHeadItem(level, 'Lv.', 'w-14');
  } if ([tm, tr, hm].includes(method)) {
    return createHeadItem(method, `${method.toUpperCase()}`, 'w-14');
  } if (method === pre) {
    return createHeadItem(pre, 'Poke', 'w-[4.85rem]');
  }
  return null;
}

export function getMovesMapKeyFnWithMethod(method) {
  const { level } = getMethods();

  const levelMethodFn = (move) => `${move.level}-${move.move.name.en}`;

  const defaultFn = (move) => `${move.move.name.en}`;

  if (method === level) {
    return levelMethodFn;
  }
  return defaultFn;
}
