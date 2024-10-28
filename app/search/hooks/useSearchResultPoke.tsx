import { useLanguage } from '@/app/language-provider';
import useLocalStorage from '@/app/hooks/useLocalStorage';
import type { SearchPoke } from '../types/search';

export function useSearchResultPokeInfo(pokeInfo: SearchPoke) {
  const {
    name,
    no,
    form,
    sprite,
  } = pokeInfo;

  const { language } = useLanguage();

  const localeForm = form.en === 'default' ? '' : form[language];
  const localeMainName = name[language] || '포켓몬';
  const localeSubName = language === 'ko' ? name.en : name.ko;
  const noText = `no.${no}`;

  const imageSrc = `https://raw.githubusercontent.com/jomoo02/poke_sprites/refs/heads/main/home/${sprite}.png`;

  return {
    noText,
    imageSrc,
    form: localeForm,
    mainName: localeMainName,
    subName: localeSubName,
  };
}

export function useSavePokeInfo(targetPoke: SearchPoke) {
  const { saveLocalPoke } = useLocalStorage();

  const savePokeOnClick = () => {
    saveLocalPoke(targetPoke);
  };

  const savePokeOnEnter = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      saveLocalPoke(targetPoke);
    }
  };

  return {
    savePokeOnClick,
    savePokeOnEnter,
  };
}
