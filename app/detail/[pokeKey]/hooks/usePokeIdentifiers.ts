import { useLanguage, Language } from '@/app/language-provider';
import { formatPokedexNumber } from '@/app/utils/format';
import { LanguageContentType } from '@/app/types/languageContent.type';
import { PokeDataType } from '../types/pokeData.type';

const DEFAULT_NO = 1000;

function getLocaleForm(form: LanguageContentType, language: Language) {
  const excludedForms = ['default', 'mega'];

  const isShowForm = !excludedForms.some((excludedForm) => form.en === excludedForm);

  if (isShowForm) {
    const localeForm = form[language];

    return `(${localeForm})`;
  }

  return '';
}

export default function useNavButtonInfo(info: PokeDataType) {
  const {
    name,
    form,
    no,
  } = info;

  const { language } = useLanguage();

  const localeName = name[language];

  const noText = `no. ${formatPokedexNumber(no || DEFAULT_NO)}`;

  const localeForm = getLocaleForm(form, language);

  return {
    name: localeName,
    no: noText,
    form: localeForm,
  };
}
