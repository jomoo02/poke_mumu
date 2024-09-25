import {
  moveTableHeads,
  moveTableHeadContentsEn,
  moveTableHeadContentsKo,
} from '../data/head';
import { getMethodSpecialCase } from './methodUtils';

function createHeadItem(key, content) {
  const lowerCaseKey = key.toLowerCase();

  return ({
    key,
    content,
    className: `head-${lowerCaseKey}`,
  });
}

export function getMoveTableHeads() {
  const heads = moveTableHeads;

  return { ...heads };
}

export function setInitialSortKeyWithMethod(method) {
  const {
    name,
  } = getMoveTableHeads();

  const basicCaseInitialSortKey = name;

  const specialCase = getMethodSpecialCase();

  if (specialCase[method]) {
    return method;
  }
  return basicCaseInitialSortKey;
}

export function setBasicHeadItems(language) {
  const {
    name,
    type,
    damageClass,
    power,
    accuracy,
  } = getMoveTableHeads();

  const headContents = language === 'en'
    ? moveTableHeadContentsEn
    : moveTableHeadContentsKo;

  const basicHeadItems = [
    createHeadItem(name, headContents[name]),
    createHeadItem(type, headContents[type]),
    createHeadItem(damageClass, headContents[damageClass]),
    createHeadItem(power, headContents[power]),
    createHeadItem(accuracy, headContents[accuracy]),
  ];

  return basicHeadItems;
}

export function setSpecialCaseHeadItem(method, language) {
  const headContents = language === 'en'
    ? moveTableHeadContentsEn
    : moveTableHeadContentsKo;

  const specialMethodCase = getMethodSpecialCase();

  if (specialMethodCase[method]) {
    const headItem = createHeadItem(method, headContents[method]);
    return headItem;
  }

  return null;
}
