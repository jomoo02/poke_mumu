import { useLanguage } from '@/app/language-provider';
import type { LanguageContent } from '@/app/types/languageContent.type';

function splitPokeLinkName(name: string) {
  if (name.includes('(')) {
    const targetIndex = name.indexOf('(');
    const firstName = name.slice(0, targetIndex);
    const lastName = name.slice(targetIndex);
    return [firstName, lastName];
  }

  return [name];
}

export default function useChainPokeLink(name: LanguageContent) {
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
