import { useLanguage } from '@/app/language-provider';
import useLocalStorage from '@/app/hooks/useLocalStorage';
import useScrollRestoration from '@/app/hooks/useScrollRestoration';
import type { CardPoke } from '@/app/models/PokeV2';

export default function usePokeCard(pokeItem: CardPoke) {
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
