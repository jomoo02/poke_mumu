import { useLanguage } from '@/app/language-provider';

const DEFAULT_NO = 1000;

function checkIsShow(form) {
  const excludedForms = ['default', 'mega'];

  return !excludedForms.some((excludedForm) => form === excludedForm);
}

export default function usePokeIdentifiers(pokeInfo) {
  const {
    name,
    form,
    no,
  } = pokeInfo;

  const { language } = useLanguage();

  const localeName = name[language] || name.ko || '포켓몬';

  const noText = `no. ${no || DEFAULT_NO}`;

  const localeForm = form[language] || form.ko || '';

  const isShowFrom = checkIsShow(form.en);

  return {
    name: localeName,
    no: noText,
    form: isShowFrom ? `(${localeForm})` : '',
  };
}
