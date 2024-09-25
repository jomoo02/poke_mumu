import { useLanguage } from '@/app/language-provider';

const DEFAULT_NO = 1000;

function getLocaleForm(form, language) {
  const excludedForms = ['default', 'mega'];

  const isShowForm = !excludedForms.some((excludedForm) => form.en === excludedForm);

  if (isShowForm) {
    const localeForm = form[language] || form.ko || '';

    return `(${localeForm})`;
  }

  return '';
}

export default function useNavButtonInfo(info) {
  const {
    name,
    form,
    no,
  } = info;

  const { language } = useLanguage();

  const localeName = name[language] || name.ko || '포켓몬';

  const noText = `no. ${no || DEFAULT_NO}`;

  const localeForm = getLocaleForm(form, language);

  return {
    name: localeName,
    no: noText,
    form: localeForm,
  };
}
