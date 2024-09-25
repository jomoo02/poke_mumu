import {
  methods,
  methodMoveTitlesEn,
  methodMoveTitlesKo,
} from '../data/method';

export function getMethods() {
  return { ...methods };
}

export function getMethodSpecialCase() {
  const {
    level,
    pre,
    tm,
    hm,
    tr,
  } = methods;

  return {
    level,
    pre,
    tm,
    hm,
    tr,
  };
}

export function getMethodMoveLocaleTitle(method, language) {
  const defaultTitles = {
    en: 'moves',
    ko: '기술',
  };

  const localeTitles = language === 'en'
    ? methodMoveTitlesEn
    : methodMoveTitlesKo;

  const defaultTitle = defaultTitles[language] || defaultTitles.ko;

  const title = localeTitles[method] || defaultTitle;

  return title;
}
