import { useLanguage } from '@/app/language-provider';
import useLocalStorage from '@/app/hooks/useLocalStorage';
import { formatPokedexNumber } from '@/app/utils/format';

export function useSearchPokeInfo(pokeInfo) {
  const {
    name,
    no,
    form,
    sprity,
  } = pokeInfo;

  const { language } = useLanguage();

  const localeForm = form.en === 'default' ? '' : form[language];
  const localeMainName = name[language] || '포켓몬';
  const localeSubName = language === 'ko' ? name.en : name.ko;
  const noText = `no.${formatPokedexNumber(no)}`;

  const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${sprity}`;

  return {
    noText,
    imageSrc,
    form: localeForm,
    mainName: localeMainName,
    subName: localeSubName,
  };
}

export function useSearchPokeHandle(targetPoke) {
  const { saveLocalPoke } = useLocalStorage();

  const handlePokeClick = () => {
    saveLocalPoke(targetPoke);
  };

  const handleEnterKeyForSave = (e) => {
    if (e.key === 'Enter') {
      saveLocalPoke(targetPoke);
    }
  };

  return {
    handleEnterKeyForSave,
    handlePokeClick,
  };
}
