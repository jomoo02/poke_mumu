import { useLanguage } from '@/app/language-provider';
import type { Poke } from '@/app/models/PokeV2';

export default function usePokeIdentifiers(poke: Poke) {
  const {
    name,
    form,
    no,
  } = poke;

  const { language } = useLanguage();

  const localeName = name[language];

  const noText = `no. ${no}`;

  const excludedForms = ['default', 'mega'];

  const isShowForm = !excludedForms.some((excludedForm) => form.en === excludedForm);
  const localeForm = isShowForm ? `(${form[language]})` : '';

  return {
    name: localeName,
    form: localeForm,
    no: noText,
  };
}
