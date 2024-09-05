import { useLanguage } from '@/app/language-provider';
import { splitPokeLinkName } from '../utils/chain';
import {
  createDetailKey,
  getDetailWidthAndHeigt,
} from '../utils/poke-info';

export function useChainPokeLink(name) {
  const defaultName = {
    mainName: 'poke',
    subName: '',
  };

  const { language } = useLanguage();

  const localeName = name[language] || name.ko || '';

  if (!localeName) {
    return { ...defaultName };
  }

  const [mainName, subName] = splitPokeLinkName(localeName);

  return {
    mainName,
    subName,
  };
}

export function useChainPokeDetail(
  maxWidth = 1,
  maxDepth = 1,
) {
  const { width, height } = getDetailWidthAndHeigt(maxWidth, maxDepth);

  const { language } = useLanguage();

  const isInfoRenderReverse = language === 'ko';

  return {
    width,
    height,
    isInfoRenderReverse,
    setDetailKey: createDetailKey,
  };
}
