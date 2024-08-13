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
  const { level, pre, tm, tr, hm, name } = getHeadKeys();

  if ([level, pre, tm, tr, hm].includes(method)) {
    return method;
  }
  return name;
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
    { key: keys.name, content: languageContent.name, className: 'w-[10.5rem]' },
    { key: keys.type, content: languageContent.type, className: 'w-[5.25rem]' },
    { key: keys.damageClass, content: languageContent.damageClass, className: 'w-[5.25rem]' },
    { key: keys.power, content: languageContent.power, className: 'w-[5.55rem]' },
    { key: keys.accuracy, content: languageContent.accuracy, className: 'w-[5rem]' },
  ];

  return basicItems;
}

export function setSpecialCaseHeadItem(method) {
  const { level, tm, tr, hm, pre } = getHeadKeys();

  if (method === level) {
    return ({
      key: level, content: 'Lv.', className: 'w-14',
    });
  } if ([tm, tr, hm].includes(method)) {
    return ({
      key: method, content: `${method.toUpperCase()}`, className: 'w-14',
    });
  } if (method === pre) {
    return ({
      key: pre, content: 'Poke', className: 'w-[5.5rem]',
    });
  }
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