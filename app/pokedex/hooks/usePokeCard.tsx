import { useLanguage } from '@/app/language-provider';
import useLocalStorage from '@/app/hooks/useLocalStorage';
import useScrollRestoration from '@/app/hooks/useScrollRestoration';
import type { PokeItem } from '../types/poke';

export default function usePokeCard(pokeItem: PokeItem) {
  const { language } = useLanguage();

  const name = pokeItem.name[language];

  const form = pokeItem.form.en === 'default' ? '' : pokeItem.form[language];

  const { saveLocalPoke } = useLocalStorage();

  const { setScrollPosition } = useScrollRestoration();

  const handlePokeCardClick = () => {
    saveLocalPoke(pokeItem);
    setScrollPosition(window.scrollY);
  };

  return {
    ...pokeItem,
    name,
    form,
    handlePokeCardClick,
  };
}
