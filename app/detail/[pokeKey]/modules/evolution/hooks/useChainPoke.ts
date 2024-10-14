import { useLanguage } from '@/app/language-provider';
import { LanguageContent } from '@/app/types/languageContent.type';
import { splitPokeLinkName } from '../utils/chainUtils';
import {
  createDetailKey,
  getDetailWidthAndHeigt,
} from '../utils/pokeInfoUtils';

export function useChainPokeLink(name: LanguageContent) {
  const defaultName = {
    mainName: 'poke',
    subName: '',
  };

  const { language } = useLanguage();

  const localeName = name[language];

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
